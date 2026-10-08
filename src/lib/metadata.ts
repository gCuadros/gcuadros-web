import type { Metadata } from "next";
import { localPath, type Locale } from "./i18n";
import { siteUrl } from "./site";

const deploymentHost =
  process.env.VERCEL_ENV === "production"
    ? (process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL)
    : process.env.VERCEL_URL;
export function pageMetadata(locale: Locale, hevy = false): Metadata {
  const en = locale === "en";
  const path = hevy ? "/proyectos/hevy" : "/";
  const title = hevy
    ? en
      ? "Hevy Coach MCP: connecting Hevy to AI assistants | Gonzalo Cuadros"
      : "Hevy Coach MCP: conecta Hevy con asistentes de IA | Gonzalo Cuadros"
    : "Gonzalo Cuadros | Frontend Tech Lead";
  const description = hevy
    ? en
      ? "How I connected Hevy to an AI assistant: workout history, calculated metrics and routine management. Code, design decisions and limitations."
      : "Cómo conecté Hevy con un asistente de IA: consulta de entrenamientos, cálculo de métricas y gestión de rutinas. Código, decisiones y límites."
    : en
      ? "Gonzalo Cuadros, Frontend Tech Lead at MANGO. Frontend architecture, DevOps and mentoring, with open source projects, technical articles and talks."
      : "Gonzalo Cuadros, Frontend Tech Lead en MANGO. Arquitectura frontend, DevOps y mentoría. Proyectos de código abierto, artículos técnicos y docencia.";
  return {
    metadataBase: new URL(
      deploymentHost ? `https://${deploymentHost}` : "http://localhost:3100",
    ),
    title,
    description,
    authors: [{ name: "Gonzalo Cuadros" }],
    alternates: {
      canonical: `${siteUrl}${localPath(locale, path)}`,
      languages: {
        es: localPath("es", path),
        en: localPath("en", path),
        "x-default": localPath("es", path),
      },
    },
    openGraph: {
      title,
      description,
      locale: en ? "en_GB" : "es_ES",
      alternateLocale: en ? "es_ES" : "en_GB",
      type: hevy ? "article" : "website",
      images: [
        {
          url: en ? "/en/social-image" : "/opengraph-image",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [en ? "/en/social-image" : "/opengraph-image"],
    },
  };
}

export function routeMetadata(
  locale: Locale,
  path: string,
  title: string,
  description: string,
  type: "article" | "website" = "website",
): Metadata {
  const base = pageMetadata(locale);
  const fullTitle = `${title} | Gonzalo Cuadros`;
  return {
    ...base,
    title: fullTitle,
    description,
    alternates: {
      canonical: `${siteUrl}${localPath(locale, path)}`,
      languages: {
        es: localPath("es", path),
        en: localPath("en", path),
        "x-default": localPath("es", path),
      },
    },
    openGraph: { ...base.openGraph, title: fullTitle, description, type },
    twitter: { ...base.twitter, title: fullTitle, description },
  };
}
