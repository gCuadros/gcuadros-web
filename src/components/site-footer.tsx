import { SiteLink } from "./site-link";
import { type Locale } from "@/lib/i18n";
import { navigationFor } from "@/lib/site";
import { links } from "@/lib/portfolio";
export function SiteFooter({ locale }: { locale: Locale }) {
  const en = locale === "en";
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <p className="kicker">
            {en ? "Contact · LinkedIn" : "Contacto · LinkedIn"}
          </p>
          <SiteLink
            locale={locale}
            className="footer-invite"
            href={links.linkedin}
          >
            {en ? "Let’s talk." : "¿Hablamos?"}
            <span aria-hidden="true">↗</span>
          </SiteLink>
        </div>
        <div className="footer-bottom">
          <p>
            Gonzalo Cuadros
            <br />
            <span>Frontend Tech Lead · Madrid</span>
          </p>
          <nav aria-label={en ? "Footer navigation" : "Navegación del pie"}>
            {navigationFor(locale)
              .slice(1)
              .map((n) => (
                <SiteLink locale={locale} key={n.href} href={n.href}>
                  {n.label}
                </SiteLink>
              ))}
          </nav>
          <div className="footer-social">
            <SiteLink locale={locale} href={links.github}>
              GitHub ↗
            </SiteLink>
            <SiteLink locale={locale} href={links.linkedin}>
              LinkedIn ↗
            </SiteLink>
          </div>
        </div>
        <p className="colophon">
          © {new Date().getFullYear()} · Gonzalo Cuadros
        </p>
      </div>
    </footer>
  );
}
