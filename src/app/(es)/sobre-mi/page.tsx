import AboutPage from "@/components/about-page";
import { routeMetadata } from "@/lib/metadata";
export const metadata = routeMetadata(
  "es",
  "/sobre-mi",
  "Sobre m\u00ed",
  "Trayectoria, formaci\u00f3n, charlas y CV de Gonzalo Cuadros.",
);
export default function Page() {
  return <AboutPage locale="es" />;
}
