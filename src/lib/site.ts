import { localPath, type Locale } from "./i18n";
export const navigationFor = (locale: Locale) => [
  {
    href: localPath(locale),
    path: "/",
    label: locale === "es" ? "Inicio" : "Home",
  },
  {
    href: localPath(locale, "/proyectos"),
    path: "/proyectos",
    label: locale === "es" ? "Proyectos" : "Projects",
  },
  {
    href: localPath(locale, "/docencia"),
    path: "/docencia",
    label: locale === "es" ? "Docencia" : "Teaching",
  },
  { href: localPath(locale, "/blog"), path: "/blog", label: "Blog" },
  {
    href: localPath(locale, "/sobre-mi"),
    path: "/sobre-mi",
    label: locale === "es" ? "Sobre mí" : "About",
  },
];
// Follows the Vercel production domain, so a custom domain updates canonical, sitemap and feeds.
export const siteUrl = `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL ?? "gcuadros.dev"}`;

export const indexablePaths = [
  "/",
  "/proyectos",
  "/proyectos/hevy",
  "/docencia",
  "/blog",
  "/sobre-mi",
] as const;
