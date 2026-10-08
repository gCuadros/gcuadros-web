---
title: "Rendering strategies in Next.js: SSG, SSR, ISR and CSR"
summary: "When to generate HTML, what can wait and what the browser needs to do. The decisions behind my live coding session with Garaje de ideas."
date: "2026-10-07"
tags: ["Next.js", "React", "Performance", "Talks"]
---

In 2024, I ran a live coding session with Garaje de ideas about rendering strategies in Next.js. We started with a practical question: what does each part of a page need to reach the user promptly, with the right data?

These are the main ideas, in the context of Next.js 14, which we used at the time. You can watch the [full session on YouTube](https://www.youtube.com/watch?v=J4FLmBctSBs) in Spanish and read the Vercel article I used to prepare it: [How to choose the best rendering strategy for your app](https://vercel.com/blog/how-to-choose-the-best-rendering-strategy-for-your-app).

## Why the rendering strategy matters

Where and when we generate HTML affects how quickly useful content appears, how much work the browser does and what the server costs to run. It also determines which content search engines receive without executing JavaScript.

These decisions are related, but distinct: a page can deliver HTML from the server and still need JavaScript to respond to an interaction. Similarly, rendering on the server does not mean fetching every piece of data again on each visit.

## SSG: static generation

With Static Site Generation, HTML is generated during the build and reused on later visits. It works well when different people can receive the same content and that content does not need to change on every request.

- **What it offers**: no repeated rendering for each visit, with output that can be served from a CDN.
- **What it requires**: regeneration when the content changes. Without revalidation, the data comes from the last build.
- **Where it fits**: articles, documentation and landing pages.

Having HTML available from the start makes content easier to access. Overall performance still depends on images, JavaScript and the page's other resources.

## SSR: server-side rendering

With Server-Side Rendering, the server generates a response for each request. This allows it to use information only available when that request arrives, such as the user's session. Streaming lets the response arrive in parts as they become ready.

- **What it offers**: content tailored to the request, without relying on the browser to build it for the first time.
- **What it requires**: server work for each visit; slow queries can delay the response.
- **Where it fits**: pages that need session data or information that must be fetched at request time.

SSR does not guarantee fresh data. A dynamically rendered route can reuse cached data, so fetching and revalidation remain separate decisions. The [Next.js 14 documentation](https://nextjs.org/docs/14/app/building-your-application/rendering/server-components) explains how these work together.

## ISR: incremental static regeneration

Incremental Static Regeneration lets us update static content after the build without rebuilding the whole site. For an already generated page with time-based revalidation, the flow is:

1. While the content remains fresh, the cached version is served.
2. The first request after the interval expires receives that version and starts background regeneration.
3. Once regeneration succeeds, subsequent requests receive the updated content.

That visit does not wait for regeneration, but it may show older data. If the page has not been generated yet, the first request behaves differently. The [ISR guide](https://nextjs.org/docs/app/guides/incremental-static-regeneration) covers this distinction.

ISR suits shared content that changes regularly and can tolerate that delay, such as a catalogue or news archive. The acceptable delay depends on the data: a product description and its availability need not follow the same policy.

## CSR: client-side rendering

With Client-Side Rendering, the browser uses JavaScript to build content. If it also needs to fetch data before displaying that content, the user waits for those tasks to finish. The cost depends on the code, network and device.

CSR and App Router Client Components are different concepts. The `'use client'` directive enables state, effects and event handlers; it does not mean “only rendered in the browser”. On the initial load, Next.js can also generate their HTML on the server. React then hydrates it to enable interaction. Subsequent navigation follows a different flow, described in the [Client Components documentation](https://nextjs.org/docs/14/app/building-your-application/rendering/client-components).

This button needs state and an event handler, which makes it a Client Component:

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

On a product page, the description and reviews can be handled by Server Components. The add-to-cart button needs state and event handlers, so that part belongs in a Client Component.

Keeping the client boundary close to the interaction reduces the code sent to the browser. Its imports matter too: those dependencies become part of the client code.

This separation does not, by itself, determine whether the page is static or dynamic. A Server Component can run during the build or when handling a request.

## Comparison

Rather than giving each acronym a performance score, I find it more useful to compare the work involved and when it happens:

- **SSG**: generate in advance and reuse the result until it is generated again.
- **SSR**: render when a request arrives and choose which data can be reused.
- **ISR**: reuse static content and regenerate it according to the revalidation policy.
- **CSR**: let the browser build or update content with JavaScript.

Delivering relevant content in the HTML reduces reliance on JavaScript rendering for indexing. None of these strategies guarantees good search rankings or a fast website on its own.

## How to choose

Before choosing, I would ask:

- Which content needs to appear in the first response?
- Which data can everyone share, and which is personal?
- How long can that data go without being refreshed?
- Which interactions need JavaScript in the browser?

Personalisation does not rule out all static content. It can sit alongside dynamic sections or data fetched on the client. The decision is what each part needs, followed by measuring the result.

## A note on Next.js today

The session was prepared with Next.js 14. In Next.js 16, [Cache Components](https://nextjs.org/docs/app/api-reference/config/next-config-js/cacheComponents) is an opt-in feature enabled with `cacheComponents: true`. It combines partial prerendering, explicit caching through `use cache` and dynamic content streamed through `Suspense`.

This model came after the talk and needs to be enabled. The questions about freshness, personalisation and waiting time still apply; the APIs and caching rules need checking against the version your project uses.
