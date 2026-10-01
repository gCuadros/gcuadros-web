---
title: "Frontend CI: what a green check means"
summary: "How I use this portfolio to check code, user journeys and documents before publishing, and what those checks cannot establish."
date: "2026-09-28"
tags: ["CI/CD", "Frontend", "DevOps"]
---

## Start with what can break

Publishing a change to this portfolio can break more than the build: a CV link might point to the wrong language, keyboard navigation might stop working, or the PDF might fall behind its editable source. I start by turning those specific risks into checks.

The example is this website’s public repository. It does not describe any company’s internal processes. The references below pin the version I discuss, so readers can check the claims against the code.

## Three checks, three different questions

Continuous integration runs on pull requests and changes to main. The quality job checks formatting, lint, types and CV consistency with their sources. The build job checks whether the production application can be built. The browser job builds the application again and runs Playwright against it.

Separate jobs help locate failures: a type error and an inaccessible menu need different responses. This repeats the build across two jobs. That is an explicit cost of the current design, not a speed improvement I have measured.

## Test journeys that matter

Browser tests visit the homepage at several widths and check links, keyboard navigation and language switching. They also run automated accessibility checks with axe and verify that each language offers the corresponding PDF. The language switch is tested with JavaScript disabled too.

A green check means those scenarios passed in Chromium. It does not establish compatibility with every browser or replace testing with assistive technology. A laboratory test is not a measurement of the performance experienced by real users either.

## Published content needs a contract too

The CV has one Markdown source per language and a versioned PDF. The verifier compares extracted visible text, its order, links and the expected page count. If the source changes but the document is not regenerated, CI can catch that mismatch.

That contract prevents a specific kind of drift. It does not assess whether the writing persuades a hiring professional or guarantee a screening score. The PDF layout still needs a visual review after regeneration.

## Make failures possible to investigate

The workflow cancels older runs for the same reference when a new change arrives. Jobs have time limits and read-only repository permissions. If the browser suite fails, its results are retained as artifacts for seven days.

These decisions help avoid obsolete work and preserve context for investigation. Playwright allows one retry in CI. A test passing on retry does not explain the initial failure: the issue still needs investigation to distinguish product, test and environment problems.

## Publishing does not end with a build

Vercel handles deployment. After merging changes, I check the public URL, language switching and downloads. That follow-up check is manual in the process described here; it is not an automated stage of the GitHub Actions workflow.

A reasonable next step would be a short automated check against the correct deployment, with broader browser coverage when the risk warrants it. Before adding a check, I want to explain which failure it detects, what evidence it leaves and where its limits lie. A green check is a bounded signal for a decision, not a guarantee that everything works.

## Code behind this note

- [GitHub Actions](https://github.com/gCuadros/gcuadros-web/blob/e0376e67f1ba36cc48cecad694c02262d4a8459c/.github/workflows/ci.yml)
- [Playwright](https://github.com/gCuadros/gcuadros-web/blob/e0376e67f1ba36cc48cecad694c02262d4a8459c/tests/portfolio.spec.ts)
- [CV verification](https://github.com/gCuadros/gcuadros-web/blob/e0376e67f1ba36cc48cecad694c02262d4a8459c/scripts/verify_cv.py)
