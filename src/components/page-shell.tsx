import { SiteLink } from "./site-link";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import type { Locale } from "@/lib/i18n";
export function PageShell({
  locale,
  path,
  children,
}: {
  locale: Locale;
  path: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteLink locale={locale} className="skip-link" href="#contenido">
        {locale === "es" ? "Saltar al contenido" : "Skip to content"}
      </SiteLink>
      <SiteHeader locale={locale} path={path} />
      <main id="contenido" tabIndex={-1}>
        {children}
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
