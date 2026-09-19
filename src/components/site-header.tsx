import { links, navigation } from "@/lib/portfolio";
import { MobileMenu } from "./mobile-menu";

export function SiteHeader() {
  return (
    <header className="site-header container">
      <a className="brand" href="#inicio" aria-label="Gonzalo Cuadros, inicio">
        Gonzalo Cuadros
      </a>
      <nav className="desktop-navigation" aria-label="Navegación principal">
        {navigation.map(({ href, label }) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
        <a className="button button-outline" href={links.linkedin}>
          Conectar
        </a>
      </nav>
      <MobileMenu />
    </header>
  );
}
