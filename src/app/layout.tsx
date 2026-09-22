import type { Metadata } from "next";
import "@fontsource-variable/manrope";
import "@fontsource/ibm-plex-mono/latin-400.css";
import "@fontsource/ibm-plex-mono/latin-500.css";
import "@fontsource/ibm-plex-mono/latin-700.css";
import "./globals.css";
import { links } from "@/lib/portfolio";

const title = "Gonzalo Cuadros | Frontend Tech Lead";
const description =
  "Arquitectura frontend, DevOps y liderazgo técnico. Conoce la trayectoria, los proyectos y las charlas de Gonzalo Cuadros, Tech Lead en MANGO.";

export const metadata: Metadata = {
  title,
  description,
  authors: [{ name: "Gonzalo Cuadros" }],
  openGraph: { title, description, locale: "es_ES", type: "website" },
  twitter: { card: "summary", title, description },
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
    <html lang="es">
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
