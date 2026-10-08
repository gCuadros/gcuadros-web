import ProjectsPage from "@/components/projects-page";
import { routeMetadata } from "@/lib/metadata";
export const metadata = routeMetadata(
  "es",
  "/proyectos",
  "Proyectos",
  "Proyectos propios con código abierto. Hevy Coach MCP: cómo conecto datos de entrenamiento con asistentes de IA y qué decisiones hay detrás.",
);
export default function Page() {
  return <ProjectsPage locale="es" />;
}
