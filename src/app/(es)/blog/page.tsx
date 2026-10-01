import BlogPage from "@/components/blog-page";
import { routeMetadata } from "@/lib/metadata";
export const metadata = routeMetadata(
  "es",
  "/blog",
  "Blog",
  "Art\u00edculos sobre frontend, DevOps y decisiones de ingenier\u00eda.",
);
export default function Page() {
  return <BlogPage locale="es" />;
}
