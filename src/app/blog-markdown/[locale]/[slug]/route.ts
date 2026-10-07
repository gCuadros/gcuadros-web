import { notFound } from "next/navigation";
import { getPost, getPosts } from "@/lib/blog";
import { localPath, type Locale } from "@/lib/i18n";
import { siteUrl } from "@/lib/site";

// Served at /blog/:slug.md and /en/blog/:slug.md through rewrites in next.config.ts.
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return (["es", "en"] as const).flatMap((locale) =>
    getPosts(locale).map((post) => ({ locale, slug: post.slug })),
  );
}

export async function GET(
  _request: Request,
  { params }: RouteContext<"/blog-markdown/[locale]/[slug]">,
) {
  const { locale: segment, slug } = await params;
  const locale: Locale = segment === "en" ? "en" : "es";
  const post = getPost(locale, slug);
  if (!post) notFound();
  const url = `${siteUrl}${localPath(locale, `/blog/${post.slug}`)}`;
  const body = [
    "---",
    `title: ${JSON.stringify(post.title)}`,
    `summary: ${JSON.stringify(post.summary)}`,
    `date: ${post.date}`,
    `author: Gonzalo Cuadros`,
    `lang: ${locale}`,
    `url: ${url}`,
    "---",
    "",
    `# ${post.title}`,
    "",
    post.content.trim(),
    "",
  ].join("\n");
  return new Response(body, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      Link: `<${url}>; rel="canonical"`,
    },
  });
}
