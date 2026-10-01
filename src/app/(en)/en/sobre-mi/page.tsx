import AboutPage from "@/components/about-page";
import { routeMetadata } from "@/lib/metadata";
export const metadata = routeMetadata(
  "en",
  "/sobre-mi",
  "About",
  "Experience, education, talks and CV of Gonzalo Cuadros.",
);
export default function Page() {
  return <AboutPage locale="en" />;
}
