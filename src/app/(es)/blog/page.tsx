import BlogPage from "@/components/blog-page";
import { routeMetadata } from "@/lib/metadata";
export const metadata = routeMetadata(
  "es",
  "/blog",
  "Blog",
  "Artículos y notas de Gonzalo Cuadros sobre Next.js, CI/CD, proyectos con IA y docencia. Decisiones técnicas explicadas con ejemplos propios.",
);
export default function Page() {
  return <BlogPage locale="es" />;
}
