---
title: "Frontend CI: what a green check means"
summary: "A keyboard-accessible menu, the CV in the right language and an up-to-date PDF. How I turn this website's risks into checks before publishing."
date: "2026-09-28"
tags: ["CI/CD", "Frontend", "DevOps"]
---

## Start with what can break

A change to this portfolio can build successfully and still break something important: a CV link might point to the wrong language, keyboard navigation might stop working, or the PDF might fall behind its editable source. I start by identifying those failures and turning them into checks.

The example is this website's public repository. The links at the end point to the code version discussed here, so you can follow each decision through to its implementation.

## Three checks, three different questions

Continuous integration runs on pull requests and changes to main. The work is split into three jobs:

- **Quality**: formatting, lint, types and CV consistency with their sources.
- **Build**: compiling the production application.
- **Browser**: building the application again and running Playwright against it.

Separate jobs help locate failures: a type error and an inaccessible menu need different responses. The trade-off is building twice. Reducing that duplication would mean reviewing how to share the output between jobs.

## Test journeys that matter

Browser tests visit the homepage at several widths and check links, keyboard navigation and language switching. They include automated accessibility checks with axe and verify that each language offers the right PDF. The language switch is also tested without JavaScript.

These tests focus on what a visitor needs to do: navigate, read and download the right document. A failure becomes a specific journey we can reproduce, rather than “the website is broken”.

## Keep the CV up to date

Each language has a Markdown source and a versioned PDF. The verifier compares extracted visible text, its order, links and the expected page count. If I change the source and forget to regenerate the document, CI can catch the mismatch.

This is a useful content check too. The PDF is part of what I publish, and it needs to match the text I maintain in the repository.

## Keep evidence when something fails

The workflow cancels older runs for the same reference when a new change arrives. Jobs have time limits and read-only repository permissions. If the browser suite fails, its results are retained as artefacts for seven days.

Playwright allows one retry in CI. If a test passes on retry, there is still a question to answer: what caused the first failure? The saved results help distinguish a product issue from a test or environment problem.

## What I can conclude from a green check

It tells me the defined checks passed: those journeys work in Chromium, and the documents match their sources. Other browsers, testing with assistive technology, real-user performance and visual inspection of the PDF remain outside their scope. The checks do not assess the CV's quality for a job application either.

After deployment to Vercel, I make a manual check of the public URL, language switching and downloads. That completes the process described here, although it is not yet an automated stage in GitHub Actions.

The next improvement would be a short test against the correct deployment. I would add other browsers according to the risks I needed to cover. Before adding a check, I want to know which failure it looks for and what information it will leave if it finds one.

## Code behind this note

- [GitHub Actions](https://github.com/gCuadros/gcuadros-web/blob/e0376e67f1ba36cc48cecad694c02262d4a8459c/.github/workflows/ci.yml)
- [Playwright](https://github.com/gCuadros/gcuadros-web/blob/e0376e67f1ba36cc48cecad694c02262d4a8459c/tests/portfolio.spec.ts)
- [CV verification](https://github.com/gCuadros/gcuadros-web/blob/e0376e67f1ba36cc48cecad694c02262d4a8459c/scripts/verify_cv.py)
