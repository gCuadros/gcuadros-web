import CicdNote from "@/components/cicd-note";
import { cicdMetadata } from "@/lib/metadata";
export const metadata = cicdMetadata("en");
export default function Page() {
  return <CicdNote locale="en" />;
}
