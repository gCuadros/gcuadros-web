import CicdNote from "@/components/cicd-note";
import { cicdMetadata } from "@/lib/metadata";
export const metadata = cicdMetadata("es");
export default function Page() {
  return <CicdNote locale="es" />;
}
