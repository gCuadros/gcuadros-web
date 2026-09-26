import type { Metadata } from "next";
import localFont from "next/font/local";
import "@fontsource-variable/manrope";
import "@fontsource/ibm-plex-mono/latin-400.css";
import "@fontsource/ibm-plex-mono/latin-500.css";
import "@fontsource/ibm-plex-mono/latin-700.css";
import "./globals.css";
import { links } from "@/lib/portfolio";

const editorial = localFont({
  src: "../../node_modules/@fontsource-variable/newsreader/files/newsreader-latin-standard-normal.woff2",
  variable: "--font-editorial",
  display: "swap",
  weight: "200 800",
});

const title = "Gonzalo Cuadros | Frontend Tech Lead";
const description =
  "Arquitectura frontend, DevOps y liderazgo técnico. Conoce la trayectoria, los proyectos y las charlas de Gonzalo Cuadros, Tech Lead en MANGO.";

const deploymentHost =
  process.env.VERCEL_ENV === "production"
    ? (process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL)
    : process.env.VERCEL_URL;

export const metadata: Metadata = {
  metadataBase: new URL(
    deploymentHost ? `https://${deploymentHost}` : "http://localhost:3100",
  ),
  title,
  description,
  authors: [{ name: "Gonzalo Cuadros" }],
  openGraph: { title, description, locale: "es_ES", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Gonzalo Cuadros",
  jobTitle: "Frontend Tech Lead",
  worksFor: { "@type": "Organization", name: "MANGO" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Madrid",
    addressCountry: "ES",
  },
  sameAs: [links.linkedin, links.github],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={editorial.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
