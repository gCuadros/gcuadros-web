import { getPosts } from "./blog";
import { localPath, type Locale } from "./i18n";
import { siteUrl } from "./site";
const escape = (value: string) =>
  value.replace(
    /[<>&"']/g,
    (char) =>
      ({
        "<": "&lt;",
        ">": "&gt;",
        "&": "&amp;",
        '"': "&quot;",
        "'": "&apos;",
      })[char]!,
  );
export function blogFeed(locale: Locale) {
  return `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Gonzalo Cuadros — Blog</title><link>${siteUrl}${localPath(locale, "/blog")}</link><description>${locale === "es" ? "Frontend, DevOps y decisiones de ingeniería" : "Frontend, DevOps and engineering decisions"}</description><language>${locale}</language>${getPosts(
    locale,
  )
    .map(
      (post) =>
        `<item><title>${escape(post.title)}</title><link>${siteUrl}${localPath(locale, `/blog/${post.slug}`)}</link><guid>${siteUrl}${localPath(locale, `/blog/${post.slug}`)}</guid><description>${escape(post.summary)}</description><pubDate>${new Date(`${post.date}T12:00:00Z`).toUTCString()}</pubDate></item>`,
    )
    .join("")}</channel></rss>`;
}
