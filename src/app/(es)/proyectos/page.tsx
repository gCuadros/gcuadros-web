import ProjectsPage from "@/components/projects-page";
import { routeMetadata } from "@/lib/metadata";
export const metadata = routeMetadata(
  "es",
  "/proyectos",
  "Proyectos",
  "Proyectos propios, c\u00f3digo p\u00fablico y decisiones t\u00e9cnicas.",
);
export default function Page() {
  return <ProjectsPage locale="es" />;
}
