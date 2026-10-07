import Image from "next/image";
import photo from "../../public/images/fabrics-2025-cover.jpg";
import type { Locale } from "@/lib/i18n";
export function FabricsCover({ locale }: { locale: Locale }) {
  return (
    <figure className="fabrics-cover">
      <Image
        src={photo}
        alt={
          locale === "es"
            ? "Gonzalo recibe el micrófono junto al escenario de Fabrics 2025"
            : "Gonzalo receiving the microphone beside the Fabrics 2025 stage"
        }
        sizes="(max-width: 700px) 90vw, 1000px"
      />
      <figcaption className="caption">Fabrics 2025 · MANGO</figcaption>
    </figure>
  );
}
