import Image from "@/components/social-image";
export const dynamic = "force-static";
export function GET() {
  return Image({ english: true });
}
