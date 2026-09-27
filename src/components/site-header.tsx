import { LanguageSwitch } from "./language-switch";
import { translator, type Locale } from "@/lib/i18n";
import { links, navigation } from "@/lib/portfolio";
import { MobileMenu } from "./mobile-menu";

export function SiteHeader({ locale }: { locale: Locale }) {
  const t = translator(locale);
  return (
    <header className="site-header container">
      <a
        className="brand"
        href="#inicio"
        aria-label={t("Gonzalo Cuadros, inicio")}
      >
        {t("Gonzalo Cuadros")}{" "}
      </a>
      <nav
        className="desktop-navigation"
        aria-label={t("Navegación principal")}
      >
        {navigation.map(({ href, label }) => (
          <a key={href} href={href}>
            {t(label)}
          </a>
        ))}
        <a className="button button-outline" href={links.linkedin}>
          {t("Conectar")}{" "}
        </a>
      </nav>
      <div className="header-controls">
        <LanguageSwitch locale={locale} />
        <MobileMenu
          navigation={navigation.map((item) => ({
            ...item,
            label: t(item.label),
          }))}
          labels={
            locale === "en"
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
