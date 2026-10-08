import ProjectsPage from "@/components/projects-page";
import { routeMetadata } from "@/lib/metadata";
export const metadata = routeMetadata(
  "en",
  "/proyectos",
  "Projects",
  "Open source projects of my own. Hevy Coach MCP: how I connect workout records to AI assistants and the engineering decisions behind it.",
);
export default function Page() {
  return <ProjectsPage locale="en" />;
}
