import { getPosts } from "@/lib/blog";
import { localPath } from "@/lib/i18n";
import { siteUrl } from "@/lib/site";

export const dynamic = "force-static";

const page = (title: string, path: string, note: string) =>
  `- [${title}](${siteUrl}${path}): ${note}`;

export function GET() {
  const body = [
    "# Gonzalo Cuadros",
    "",
    "> Frontend Tech Lead at MANGO, based in Madrid. Works on frontend architecture, DevOps applied to the frontend and how teams ship to production. Personal site with projects, talks, teaching and a bilingual blog (Spanish at the root, English under /en).",
    "",
    "Leadership here means technical leadership and mentoring, not people management. Every blog article is also available as Markdown by adding `.md` to its URL.",
    "",
    "## Pages",
    "",
    page("Home", "/", "who he is and what he works on (Spanish)"),
    page("Home (English)", "/en", "same content in English"),
    page("Projects", localPath("en", "/proyectos"), "selected work"),
    page(
      "Hevy Coach MCP",
      localPath("en", "/proyectos/hevy"),
      "open source MCP server that connects an assistant to Hevy workout data",
    ),
    page("Teaching", localPath("en", "/docencia"), "classes and talks"),
    page("About", localPath("en", "/sobre-mi"), "experience and education"),
    page("CV (PDF, English)", "/cv/gonzalo-cuadros-cv-en.pdf", "two-page CV"),
    page(
      "CV (PDF, español)",
      "/cv/gonzalo-cuadros-cv.pdf",
      "CV de dos páginas",
    ),
    "",
    "## Blog (English)",
    "",
    ...getPosts("en").map((post) =>
      page(post.title, localPath("en", `/blog/${post.slug}.md`), post.summary),
    ),
    "",
    "## Blog (español)",
    "",
    ...getPosts("es").map((post) =>
      page(post.title, `/blog/${post.slug}.md`, post.summary),
    ),
    "",
    "## Optional",
    "",
    "- [GitHub](https://github.com/gCuadros)",
    "- [LinkedIn](https://www.linkedin.com/in/gonzalo-cuadros/)",
    page("RSS (English)", "/en/blog/feed.xml", "blog feed"),
    page("RSS (español)", "/blog/feed.xml", "feed del blog"),
    "",
  ].join("\n");
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
