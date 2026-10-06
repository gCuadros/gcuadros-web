import TeachingPage from "@/components/teaching-page";
import { routeMetadata } from "@/lib/metadata";
export const metadata = routeMetadata(
  "es",
  "/docencia",
  "Docencia y charlas",
  "Docencia de frontend en Codespace Academy, live coding con Garaje de ideas y participación como ponente en Fabrics 2025.",
);
export default function Page() {
  return <TeachingPage locale="es" />;
}
