import { SiteLink } from "./site-link";
import { PageShell } from "./page-shell";
import { localPath, type Locale } from "@/lib/i18n";
import { getPosts, postDate } from "@/lib/blog";
export default function BlogPage({ locale }: { locale: Locale }) {
  const en = locale === "en";
  const posts = getPosts(locale);
  return (
    <PageShell locale={locale} path="/blog">
      <div className="container">
        <header className="page-intro blog-intro">
          <p className="kicker">
            Blog / Frontend · DevOps · {en ? "Engineering" : "Ingeniería"}
          </p>
          <h1>{en ? "Thinking\nin public." : "Pensar\nen abierto."}</h1>
          <div>
            <p>
              {en
                ? "Notes on frontend architecture, projects I build and sessions where I share what I learn."
                : "Notas sobre arquitectura frontend, proyectos que desarrollo y sesiones en las que comparto lo que aprendo."}
            </p>
            <SiteLink
              locale={locale}
              className="text-link"
              href={localPath(locale, "/blog/feed.xml")}
            >
              {en ? "Follow via RSS" : "Seguir por RSS"} ↗
            </SiteLink>
          </div>
        </header>
        <div className="blog-list">
          {posts.map((post, index) => (
            <article key={post.slug} className="blog-entry">
              <span className="entry-number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <div className="post-meta">
                  <time dateTime={post.date}>
                    {postDate(post.date, locale)}
                  </time>
                  <span>
                    {post.readingMinutes} min {en ? "read" : "de lectura"}
                  </span>
                </div>
                <h2 style={{ viewTransitionName: `article-${post.slug}` }}>
                  <SiteLink
                    locale={locale}
                    href={localPath(locale, `/blog/${post.slug}`)}
                  >
                    {post.title}
                    <span aria-hidden="true">↗</span>
                  </SiteLink>
                </h2>
                <p>{post.summary}</p>
                <ul className="post-tags" aria-label={en ? "Topics" : "Temas"}>
                  {post.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
