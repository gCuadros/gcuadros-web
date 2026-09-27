import { localPath, type Locale } from "@/lib/i18n";

export function LanguageSwitch({
  locale,
  path = "/",
}: {
  locale: Locale;
  path?: string;
}) {
  return (
    <nav
      className="language-switch"
      aria-label={locale === "es" ? "Idioma" : "Language"}
    >
      <a
        href={localPath("es", path)}
        hrefLang="es"
        lang="es"
        aria-current={locale === "es" ? "page" : undefined}
      >
        ES<span className="visually-hidden"> — Español</span>
      </a>
      <span aria-hidden="true">/</span>
      <a
        href={localPath("en", path)}
        hrefLang="en"
        lang="en"
        aria-current={locale === "en" ? "page" : undefined}
      >
        EN<span className="visually-hidden"> — English</span>
      </a>
    </nav>
  );
}
