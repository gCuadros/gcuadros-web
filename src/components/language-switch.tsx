import { SiteLink } from "./site-link";
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
      <SiteLink
        locale={locale}
        href={localPath("es", path)}
        hrefLang="es"
        lang="es"
        aria-current={locale === "es" ? "page" : undefined}
      >
        ES<span className="visually-hidden"> — Español</span>
      </SiteLink>
      <span aria-hidden="true">/</span>
      <SiteLink
        locale={locale}
        href={localPath("en", path)}
        hrefLang="en"
        lang="en"
        aria-current={locale === "en" ? "page" : undefined}
      >
        EN<span className="visually-hidden"> — English</span>
      </SiteLink>
    </nav>
  );
}
