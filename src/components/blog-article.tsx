import { SiteLink } from "./site-link";
import { FabricsCover } from "./fabrics-cover";
import { PageShell } from "./page-shell";
import { JsonLd } from "./json-ld";
import { localPath, type Locale } from "@/lib/i18n";
import { type Post, postDate, renderPost } from "@/lib/blog";
import { siteUrl } from "@/lib/site";
export default async function BlogArticle({
  post,
  locale,
}: {
  post: Post;
  locale: Locale;
}) {
  const en = locale === "en";
  const content = await renderPost(post.content, locale);
  const url = `${siteUrl}${localPath(locale, `/blog/${post.slug}`)}`;
  return (
    <PageShell locale={locale} path={`/blog/${post.slug}`}>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.summary,
          datePublished: post.date,
          inLanguage: locale,
          keywords: post.tags,
          url,
          mainEntityOfPage: url,
          author: { "@id": `${siteUrl}/#person`, name: "Gonzalo Cuadros" },
        }}
      />
      <article className="article-page container">
        <header className="article-heading">
          <SiteLink
            locale={locale}
            className="text-link"
            href={localPath(locale, "/blog")}
          >
            ← {en ? "All articles" : "Todos los artículos"}
          </SiteLink>
          <div className="post-meta">
            <span>Gonzalo Cuadros</span>
            <time dateTime={post.date}>{postDate(post.date, locale)}</time>
            <span>{post.readingMinutes} min</span>
          </div>
          <h1 style={{ viewTransitionName: `article-${post.slug}` }}>
            {post.title}
          </h1>
          <p className="article-deck">{post.summary}</p>
          <ul className="post-tags" aria-label={en ? "Topics" : "Temas"}>
            {post.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </header>
        {post.slug === "fabrics-2025" && <FabricsCover locale={locale} />}
        {post.slug === "nextjs-rendering-strategies" && (
          <div className="article-cover" aria-hidden="true">
            <span>SSG</span>
            <span>SSR</span>
            <span>ISR</span>
            <span>CSR</span>
            <i>→</i>
            <strong>
              <em>?</em>
            </strong>
          </div>
        )}

        {post.slug === "cicd-frontend" && (
          <div className="article-cover" aria-hidden="true">
            <span>BUILD</span>
            <i>→</i>
            <span>TEST</span>
            <i>→</i>
            <strong>
              ✓<em>?</em>
            </strong>
          </div>
        )}
        <div
          className="article-body"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <footer className="article-end">
          <p>{en ? "Thanks for reading." : "Gracias por leer."}</p>
          <SiteLink
            locale={locale}
            className="text-link"
            href={localPath(locale, "/blog")}
          >
            ← {en ? "Back to the blog" : "Volver al blog"}
          </SiteLink>
        </footer>
      </article>
    </PageShell>
  );
}
