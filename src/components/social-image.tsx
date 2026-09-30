import { ImageResponse } from "next/og";
export const alt =
  "Gonzalo Cuadros · Frontend Tech Lead · Arquitectura frontend, DevOps y liderazgo técnico";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image({ english = false }: { english?: boolean } = {}) {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        background: "#F7F5EF",
        color: "#203D35",
        padding: "64px 72px",
      }}
    >
      <div style={{ display: "flex", fontSize: 28, color: "#285C46" }}>
        Frontend Tech Lead · Madrid
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 68,
          fontWeight: 700,
          lineHeight: 1.12,
          maxWidth: 1020,
        }}
      >
        Gonzalo Cuadros
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 26,
          color: "#4C5750",
          borderTop: "1px solid #D0D4CA",
          paddingTop: 28,
        }}
      >
        {english
          ? "Architecture · DevOps · Technical leadership"
          : "Arquitectura · DevOps · Liderazgo técnico"}
      </div>
    </div>,
    { ...size },
  );
}
