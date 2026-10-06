import TeachingPage from "@/components/teaching-page";
import { routeMetadata } from "@/lib/metadata";
export const metadata = routeMetadata(
  "en",
  "/docencia",
  "Teaching & talks",
  "Frontend teaching at Codespace Academy, live coding with Garaje de ideas and speaking at Fabrics 2025.",
);
export default function Page() {
  return <TeachingPage locale="en" />;
}
