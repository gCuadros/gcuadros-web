import BlogPage from "@/components/blog-page";
import { routeMetadata } from "@/lib/metadata";
export const metadata = routeMetadata(
  "en",
  "/blog",
  "Blog",
  "Articles about frontend, DevOps and engineering decisions.",
);
export default function Page() {
  return <BlogPage locale="en" />;
}
