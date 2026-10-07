import { SiteLink } from "./site-link";
import { LanguageSwitch } from "./language-switch";
import { type Locale } from "@/lib/i18n";
import { navigationFor } from "@/lib/site";
import { MobileMenu } from "./mobile-menu";
export function SiteHeader({
  locale,
  path = "/",
}: {
  locale: Locale;
  path?: string;
}) {
  const en = locale === "en";
  const navigation = navigationFor(locale).map((item) => ({
    ...item,
    current: item.path === "/" ? path === "/" : path.startsWith(item.path),
  }));
  return (
    <header className="site-header container">
      <SiteLink
        locale={locale}
        className="brand"
        href={navigation[0].href}
        aria-label={en ? "Gonzalo Cuadros, home" : "Gonzalo Cuadros, inicio"}
      >
        <span className="brand-mark" aria-hidden="true">
          gc<span>.</span>
        </span>
        <span className="brand-name">
          Gonzalo
          <br />
          Cuadros
        </span>
      </SiteLink>
      <nav
        className="desktop-navigation"
        aria-label={en ? "Main navigation" : "Navegación principal"}
      >
        {navigation.map(({ href, label, current }) => (
          <SiteLink
            locale={locale}
            key={href}
            href={href}
            aria-current={current ? "page" : undefined}
          >
            {label}
          </SiteLink>
        ))}
      </nav>
      <div className="header-controls">
        <LanguageSwitch locale={locale} path={path} />
        <MobileMenu
          locale={locale}
          navigation={navigation}
          labels={
            en
              ? {
                  open: "Open menu",
                  close: "Close menu",
                  dialog: "Navigation menu",
                  nav: "Mobile navigation",
                  connect: "Connect",
                }
              : {
                  open: "Abrir menú",
                  close: "Cerrar menú",
                  dialog: "Menú de navegación",
                  nav: "Navegación móvil",
                  connect: "Conectar",
                }
          }
        />
      </div>
    </header>
  );
}
