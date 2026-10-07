import type { MetadataRoute } from "next";
import { getPosts } from "@/lib/blog";
import { localPath } from "@/lib/i18n";
import { indexablePaths, siteUrl } from "@/lib/site";

const entry = (
  path: string,
  lastModified?: string,
): MetadataRoute.Sitemap[number][] =>
  (["es", "en"] as const).map((locale) => ({
    url: `${siteUrl}${localPath(locale, path)}`,
    ...(lastModified ? { lastModified } : {}),
    alternates: {
      languages: {
        es: `${siteUrl}${localPath("es", path)}`,
        en: `${siteUrl}${localPath("en", path)}`,
      },
    },
  }));

export default function sitemap(): MetadataRoute.Sitemap {
  const latest = getPosts("es")[0]?.date;
  return [
    ...indexablePaths.flatMap((path) =>
      entry(path, path === "/blog" ? latest : undefined),
    ),
    ...getPosts("es").flatMap((post) => entry(`/blog/${post.slug}`, post.date)),
  ];
}
