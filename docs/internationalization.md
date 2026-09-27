# Languages

Spanish keeps the original URLs (`/`, `/proyectos/hevy`). English uses `/en` and `/en/proyectos/hevy`. The URL is the language preference: direct links and refreshes retain it. There are no location-based redirects, cookies or browser-language overrides.

Both languages render through shared server components and `src/lib/i18n.ts`. Translate new copy in the same change; proper names remain unchanged. MobileMenu receives only translated navigation labels, rather than the full dictionary. Separate root layouts set the document language before hydration. Switching languages uses ordinary links and works without JavaScript, preserving the corresponding page.

Metadata, language alternatives and social images are localized. The custom domain remains a separate final step. Section anchors stay stable across locales. The CV download follows the page language: Spanish uses `gonzalo-cuadros-cv.pdf`, English uses `gonzalo-cuadros-cv-en.pdf`. Editable sources and verification instructions are in docs/cv.md. External talks/posts remain in their original language.

Validate both language journeys, direct case-study URLs, mobile navigation, accessibility, language alternatives and server-rendered content. Run the existing Playwright suite after `npm run check`.
