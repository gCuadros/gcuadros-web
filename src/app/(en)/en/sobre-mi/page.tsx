import AboutPage from "@/components/about-page";
import { routeMetadata } from "@/lib/metadata";
export const metadata = routeMetadata(
  "en",
  "/sobre-mi",
  "About",
  "My work as a Frontend Tech Lead, from Freepik and Wuolah to MANGO. Experience, education and a downloadable CV.",
);
export default function Page() {
  return <AboutPage locale="en" />;
}
