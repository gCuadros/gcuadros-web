import HevyCase from "@/components/hevy-case";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata("en", true);
export default function Page() {
  return <HevyCase locale="en" />;
}
