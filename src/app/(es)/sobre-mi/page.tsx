import AboutPage from "@/components/about-page";
import { routeMetadata } from "@/lib/metadata";
export const metadata = routeMetadata(
  "es",
  "/sobre-mi",
  "Sobre m\u00ed",
  "Mi trayectoria como Frontend Tech Lead, de Freepik y Wuolah a MANGO. Experiencia, formación y CV descargable.",
);
export default function Page() {
  return <AboutPage locale="es" />;
}
