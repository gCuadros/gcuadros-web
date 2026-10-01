# Languages

Spanish uses `/`, `/proyectos`, `/proyectos/hevy`, `/blog`, `/blog/[slug]` and `/sobre-mi`. English uses the same paths prefixed by `/en`. The URL is the language preference: direct links and refreshes retain it. No location redirects, cookies or browser-language overrides are used.

Both languages render through shared server components. Shared CV/experience copy lives in `src/lib/i18n.ts`; page-specific copy is colocated with components. Blog articles are paired Markdown files, documented in [blog.md](blog.md). Translate new copy in the same change; proper names remain unchanged. MobileMenu receives only navigation labels. Separate root layouts set the language before hydration. Ordinary language links preserve the corresponding page and work without JavaScript.

Metadata, language alternatives, social images and RSS are localized. The CV follows the page language: Spanish uses `gonzalo-cuadros-cv.pdf`, English uses `gonzalo-cuadros-cv-en.pdf`. Editable sources and verification instructions are in [cv.md](cv.md). External talks/posts retain their original language.

Run `npm run check` then `npm run test:e2e`. Tests cover both language journeys, page/article routes, mobile navigation, accessibility, server-rendered content, downloads and legacy redirects. Custom-domain configuration remains a separate final step.
