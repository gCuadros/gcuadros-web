import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Gonzalo Cuadros · Frontend Tech Lead · Arquitectura, infraestructura y operación";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  english = false,
}: { english?: boolean } = {}) {
  const font = await readFile(
    join(process.cwd(), "src/assets/fonts/bricolage-social.ttf"),
  );
  const layers = english
    ? ["Architecture", "Infrastructure", "Operations"]
    : ["Arquitectura", "Infraestructura", "Operación"];
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        background: "#F5F2EA",
        color: "#22231F",
        padding: "48px 56px",
        fontFamily: "Bricolage",
        position: "relative",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", width: 610 }}>
        <div
          style={{
            display: "flex",
            fontSize: 23,
            color: "#A83213",
            marginBottom: 38,
          }}
        >
          FRONTEND TECH LEAD · MADRID
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 108,
            lineHeight: 0.94,
            letterSpacing: "-5px",
          }}
        >
          <span>Gonzalo</span>
          <span>Cuadros.</span>
        </div>
        <div
          style={{
            display: "flex",
            width: 530,
            fontSize: 29,
            lineHeight: 1.3,
            marginTop: 30,
          }}
        >
          {english
            ? "I enjoy building frontend platforms and helping others grow."
            : "Disfruto construyendo plataformas frontend y ayudando a otros a crecer."}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "auto",
            fontSize: 29,
          }}
        >
          gcuadros.dev
        </div>
      </div>
      <div
        style={{
          display: "flex",
          position: "absolute",
          right: 48,
          top: 48,
          width: 450,
          height: 534,
          background: "#22231F",
          borderBottom: "8px solid #CDCBBF",
          borderRight: "8px solid #CDCBBF",
        }}
      >
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: 24,
            left: 28,
            color: "#F5F2EA",
            fontSize: 17,
            letterSpacing: "2px",
          }}
        >
          {english ? "DESIGN JUDGEMENT" : "CRITERIO DE DISEÑO"}
        </div>
        {[2, 1, 0].map((index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              position: "absolute",
              left: 36 + index * 4,
              top: 100 + index * 105,
              width: 354,
              height: 133,
              padding: "20px 24px",
              background: ["#F17649", "#CBB6E4", "#C8D19F"][index],
              transform: "rotate(-8deg)",
              borderBottom: "5px solid #22231F44",
            }}
          >
            <span
              style={{
                fontSize: 15,
                position: "absolute",
                right: 20,
                bottom: 14,
              }}
            >
              0{index + 1}
            </span>
            <span
              style={{ fontSize: 31, letterSpacing: "-1px", marginTop: 25 }}
            >
              {layers[index]}
            </span>
          </div>
        ))}
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: 27,
            left: 28,
            color: "#F5F2EA",
            fontSize: 18,
          }}
        >
          {english
            ? "Projects · Writing · Teaching"
            : "Proyectos · Blog · Docencia"}
        </div>
      </div>
    </div>,
    {
      ...size,
      fonts: [{ name: "Bricolage", data: font, style: "normal", weight: 600 }],
    },
  );
}
