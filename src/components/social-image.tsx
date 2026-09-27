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
        background: "#111214",
        color: "#F4F1EB",
        padding: "64px 72px",
      }}
    >
      <div style={{ display: "flex", fontSize: 28, color: "#D9A17E" }}>
        Gonzalo Cuadros · Frontend Tech Lead
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
        {english
          ? "Frontend architecture. From decisions to production."
          : "Arquitectura frontend. De las decisiones a producción."}
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 26,
          color: "#B5B6B9",
          borderTop: "1px solid #44464a",
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
