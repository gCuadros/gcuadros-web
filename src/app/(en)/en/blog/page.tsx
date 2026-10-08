import BlogPage from "@/components/blog-page";
import { routeMetadata } from "@/lib/metadata";
export const metadata = routeMetadata(
  "en",
  "/blog",
  "Blog",
  "Articles and notes by Gonzalo Cuadros on Next.js, CI/CD, AI projects and teaching. Engineering decisions explained through my own work.",
);
export default function Page() {
  return <BlogPage locale="en" />;
}
