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
      ? "Hevy Coach MCP: real data for an assistant | Gonzalo Cuadros"
      : "Hevy Coach MCP: datos reales para un asistente | Gonzalo Cuadros"
    : "Gonzalo Cuadros | Frontend Tech Lead";
  const description = hevy
    ? en
      ? "An MCP server for querying workouts, calculating progress and managing routines: architecture, trade-offs and limitations."
      : "Un servidor MCP para consultar entrenamientos, calcular progreso y gestionar rutinas: arquitectura, compromisos y límites del proyecto."
    : en
      ? "I'm Gonzalo Cuadros, Frontend Tech Lead at MANGO. I work on frontend architecture and how we ship it to production: projects, talks, teaching and notes."
      : "Soy Gonzalo Cuadros, Frontend Tech Lead en MANGO. Trabajo en la arquitectura frontend y en cómo la llevamos a producción: proyectos, charlas, docencia y notas.";
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
