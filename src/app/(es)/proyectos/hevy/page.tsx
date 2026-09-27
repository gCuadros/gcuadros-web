import HevyCase from "@/components/hevy-case";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata("es", true);
export default function Page() {
  return <HevyCase locale="es" />;
}
