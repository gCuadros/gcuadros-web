import ProjectsPage from "@/components/projects-page";
import { routeMetadata } from "@/lib/metadata";
export const metadata = routeMetadata(
  "en",
  "/proyectos",
  "Projects",
  "Personal projects, public code and engineering decisions.",
);
export default function Page() {
  return <ProjectsPage locale="en" />;
}
