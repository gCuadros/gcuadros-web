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
            {en ? "The next conversation" : "La siguiente conversación"}
          </p>
          <a className="footer-invite" href={links.linkedin}>
            {en ? "Let’s talk." : "¿Hablamos?"}
            <span aria-hidden="true">↗</span>
          </a>
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
                <a key={n.href} href={n.href}>
                  {n.label}
                </a>
              ))}
          </nav>
          <div className="footer-social">
            <a href={links.github}>GitHub ↗</a>
            <a href={links.linkedin}>LinkedIn ↗</a>
          </div>
        </div>
        <p className="colophon">
          © {new Date().getFullYear()} ·{" "}
          {en
            ? "Built with care. Always a work in progress."
            : "Hecha con intención. Siempre en construcción."}
        </p>
      </div>
    </footer>
  );
}
