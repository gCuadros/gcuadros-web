import { localPath, type Locale } from "@/lib/i18n";
import localFont from "next/font/local";
import "@fontsource-variable/manrope";
import "@fontsource/ibm-plex-mono/latin-400.css";
import "@fontsource/ibm-plex-mono/latin-500.css";
import "@fontsource/ibm-plex-mono/latin-700.css";
import "@/app/globals.css";
import "@/app/studio.css";
import { links } from "@/lib/portfolio";
import { siteUrl } from "@/lib/site";
import { JsonLd } from "./json-ld";

const editorial = localFont({
  src: "../../node_modules/@fontsource-variable/bricolage-grotesque/files/bricolage-grotesque-latin-standard-normal.woff2",
  variable: "--font-editorial",
  display: "swap",
  weight: "200 800",
});

const themeScript = `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;

const school = (name: string) => ({ "@type": "EducationalOrganization", name });

const personJsonLd = (locale: Locale) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/#person`,
  name: "Gonzalo Cuadros",
  url: `${siteUrl}${localPath(locale)}`,
  jobTitle: "Frontend Tech Lead",
  worksFor: { "@type": "Organization", name: "MANGO" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Madrid",
    addressCountry: "ES",
  },
  knowsAbout: [
    "Frontend architecture",
    "React",
    "Next.js",
    "TypeScript",
    "DevOps",
    "CI/CD",
    "Cloud",
    "Model Context Protocol",
  ],
  alumniOf: [
    school("UNIR"),
    school("Universitat Oberta de Catalunya"),
    school("Codespace Academy"),
    school("Cesur"),
  ],
  sameAs: [links.linkedin, links.github],
});

export default function RootLayout({
  children,
  locale,
}: Readonly<{ children: React.ReactNode; locale: Locale }>) {
  return (
    <html lang={locale} className={editorial.variable} suppressHydrationWarning>
      <body>
        {/* Applies a saved theme before first paint to avoid a flash. */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <JsonLd data={personJsonLd(locale)} />
        {children}
      </body>
    </html>
  );
}
