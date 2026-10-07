---
title: "Rendering strategies in Next.js: SSG, SSR, ISR and CSR"
summary: "The content of my live coding session with Garaje de ideas: what each rendering strategy does, when it fits and how to combine them in one application."
date: "2026-10-07"
tags: ["Next.js", "React", "Performance", "Talks"]
---

In 2024 I ran a live coding session with Garaje de ideas about rendering strategies in Next.js. This post collects the content of that session for anyone who would rather read it than watch the full video. The session is on [YouTube](https://www.youtube.com/watch?v=J4FLmBctSBs) (in Spanish).

To prepare it I relied on Vercel's article [How to choose the best rendering strategy for your app](https://vercel.com/blog/how-to-choose-the-best-rendering-strategy-for-your-app). I recommend it as a companion read.

## Why the rendering strategy matters

Deciding where and when a page's HTML is generated is not an implementation detail. It affects four things:

- **Load speed**: how long the user waits before seeing useful content.
- **User experience**: whether the page responds quickly and shows consistent data.
- **Search indexing**: whether search engines get the content in the HTML or have to wait for JavaScript.
- **Scalability and infrastructure cost**: how much work the server does on every request.

Since Next.js 13 and the App Router, the starting point changed. Routes use a new routing system, components are React Server Components by default, and layouts let pages share structure. With that context, the session went through four strategies.

## SSG: static generation

With Static Site Generation, pages are generated once during the build. The build server fetches the origin data, generates the HTML and that output is deployed to the network. When a request arrives, the pre-generated HTML is served.

- **Advantages**: optimal performance, very good SEO and lower infrastructure cost, because there is no rendering work per request.
- **Limitation**: the data is whatever it was at build time. Changing it means generating the page again.
- **Use cases**: blogs, documentation and landing pages.

## SSR: server-side rendering

With Server-Side Rendering, the full HTML is generated on every request. The server queries the origin data when the user arrives and responds with the finished page.

- **Advantages**: always-fresh data and good SEO, because the content arrives in the HTML.
- **Limitation**: every request has a server cost, and response time depends on how long the data takes.
- **Use cases**: dashboards, social networks and any page with personalised or real-time data.

## ISR: incremental static regeneration

Incremental Static Regeneration lets you update specific pages after the build without rebuilding the whole site. It keeps the advantages of SSG and scales to sites with a very large number of pages.

This is the flow I showed in the session. Pages are generated at build time and deployed as static. When a request arrives, Next.js checks whether the revalidation time has passed:

- If it has not, it serves the cached page.
- If it has, it still serves the version it has, fetches the origin data again and updates the page for the next requests.

The user never waits for the regeneration, at the cost of some requests receiving a slightly older version.

- **Advantages**: a balance between performance and freshness, scalable for large sites and with less server load than SSR.
- **Use cases**: e-commerce and news portals.

## CSR: client-side rendering

Client-Side Rendering relies on JavaScript in the browser. It enables highly interactive interfaces, but the initial load is slower. The point I wanted to make is that it does not compete with the others: it complements them.

In the App Router that means Client Components. They are declared with the `'use client'` directive, have access to every React hook and are the natural choice for forms, buttons or an interactive cart. They also have a cost: they increase the JavaScript the browser downloads. A detail that often surprises people is that they render on the server first and then hydrate on the client.

```tsx
"use client";

import { useState } from "react";

export function AddToCart() {
  const [added, setAdded] = useState(false);
  return (
    <button onClick={() => setAdded(true)}>
      {added ? "Added" : "Add to cart"}
    </button>
  );
}
```

## Combining Server and Client Components

A Server Component can contain Client Components. The usual strategy is to use Server Components for the main content and keep Client Components for the interactive parts.

The example in the session was an e-commerce product page:

- The product description is a Server Component: it needs no interaction.
- The "Add to cart" button is a Client Component: it needs state and events.
- The reviews are a Server Component again.

That way, the browser only receives JavaScript for what is actually interactive.

## Comparison

This is the comparison that closed the theory part, across four criteria: performance, SEO, data freshness and server load.

- **SSG**: excellent performance, excellent SEO, low freshness and low server load.
- **SSR**: good performance, excellent SEO, high freshness and medium server load.
- **ISR**: very good performance, excellent SEO, configurable freshness and medium server load.
- **CSR**: variable performance, limited SEO, high freshness and medium-to-high server load.

## How to choose

There is no winning strategy. The questions I suggested for deciding are:

- How often does the content change?
- Does it matter that search engines index it?
- How much interactivity does the page need?
- Is the content personalised for each user? If it is, SSG is ruled out.

And one recommendation: start with the simplest option, combine strategies within the same application and measure before optimising.

## A note on Next.js today

The session was prepared with Next.js 14. In later versions, Next.js draws the line between static and dynamic at the component level rather than the route level: with Partial Prerendering and Cache Components (`use cache`), a single page can have a static part that loads instantly and dynamic sections that stream in. The criteria for choosing are still the same; what changes is how granularly they apply.
