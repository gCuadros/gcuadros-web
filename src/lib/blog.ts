import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import type { Locale } from "./i18n";
const directory = path.join(process.cwd(), "content/blog");
export type Post = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  tags: string[];
  content: string;
  readingMinutes: number;
};
export function getPosts(locale: Locale): Post[] {
  return fs
    .readdirSync(directory)
    .filter((file) => file.endsWith(`.${locale}.md`))
    .map((file) => {
      const slug = file.slice(0, -`.${locale}.md`.length);
      if (
        !fs.existsSync(
          path.join(directory, `${slug}.${locale === "es" ? "en" : "es"}.md`),
        )
      )
        throw new Error(`Missing article translation: ${file}`);
      const { data, content } = matter(
        fs.readFileSync(path.join(directory, file), "utf8"),
      );
      if (
        !/^[a-z0-9-]+$/.test(slug) ||
        typeof data.title !== "string" ||
        typeof data.summary !== "string" ||
        typeof data.date !== "string" ||
        !/^\d{4}-\d{2}-\d{2}$/.test(data.date) ||
        !Number.isFinite(Date.parse(data.date)) ||
        !Array.isArray(data.tags) ||
        !data.tags.every((tag: unknown) => typeof tag === "string")
      )
        throw new Error(`Invalid article metadata: ${file}`);
      return {
        slug,
        title: data.title,
        summary: data.summary,
        date: data.date,
        tags: data.tags,
        content,
        readingMinutes: Math.max(
          1,
          Math.ceil(content.split(/\s+/).length / 200),
        ),
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}
export function getPost(locale: Locale, slug: string) {
  return getPosts(locale).find((post) => post.slug === slug);
}
export async function renderPost(content: string, locale: Locale = "es") {
  const rendered = String(
    await remark().use(html, { sanitize: true }).process(content),
  );
  const notice =
    locale === "en" ? "opens in a new tab" : "abre en otra pestaña";
  return rendered.replace(
    /<a href="(https?:\/\/[^"]*)">([\s\S]*?)<\/a>/g,
    (_, href: string, label: string) =>
      `<a href="${href}" target="_blank" rel="noopener noreferrer" title="${notice}">${label}<span class="visually-hidden"> (${notice})</span></a>`,
  );
}
export function postDate(date: string, locale: Locale) {
  return new Intl.DateTimeFormat(locale === "es" ? "es-ES" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T12:00:00Z`));
}
