import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gonzalo Cuadros | Frontend Tech Lead",
  description:
    "Arquitectura frontend, DevOps y liderazgo técnico. Web personal de Gonzalo Cuadros.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
