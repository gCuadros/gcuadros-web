import type { Locale } from "@/lib/i18n";
import localFont from "next/font/local";
import "@fontsource-variable/manrope";
import "@fontsource/ibm-plex-mono/latin-400.css";
import "@fontsource/ibm-plex-mono/latin-500.css";
import "@fontsource/ibm-plex-mono/latin-700.css";
import "@/app/globals.css";
import "@/app/studio.css";
import { links } from "@/lib/portfolio";

const editorial = localFont({
  src: "../../node_modules/@fontsource-variable/bricolage-grotesque/files/bricolage-grotesque-latin-standard-normal.woff2",
  variable: "--font-editorial",
  display: "swap",
  weight: "200 800",
});

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
  locale,
}: Readonly<{ children: React.ReactNode; locale: Locale }>) {
  return (
    <html lang={locale} className={editorial.variable}>
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
