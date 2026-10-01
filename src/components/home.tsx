import { PageShell } from "./page-shell";
import { LayerExplorer } from "./layer-explorer";
import { ProjectPreview } from "./project-preview";
import { localPath, type Locale } from "@/lib/i18n";
import { getPosts } from "@/lib/blog";
import { links } from "@/lib/portfolio";
export default function Home({ locale }: { locale: Locale }) {
  const en = locale === "en";
  const post = getPosts(locale)[0];
  return (
    <PageShell locale={locale} path="/">
      <section className="hero container">
        <div className="hero-editorial">
          <p className="kicker hero-kicker">
            <span className="status-dot" />
            Frontend Tech Lead · Madrid
          </p>
          <h1>
            <span>Gonzalo</span>
            <span>
              Cuadros<span className="name-period">.</span>
            </span>
          </h1>
          <p className="hero-statement">
            {en
              ? "I work on frontend architecture and how we ship it to production."
              : "Trabajo en la arquitectura frontend y en cómo la llevamos a producción."}
          </p>
          <p className="hero-description">
            {en
              ? "Tech Lead at MANGO, with a focus on DevOps and mentoring developers. Previously at Freepik and Wuolah."
              : "Tech Lead en MANGO, con foco en DevOps y acompañamiento técnico a otros desarrolladores. Antes, en Freepik y Wuolah."}
          </p>
          <a className="text-link" href={localPath(locale, "/sobre-mi")}>
            {en ? "A little more about me" : "Un poco más sobre mí"}
            <span aria-hidden="true">↗</span>
          </a>
        </div>
        <LayerExplorer locale={locale} />
      </section>
      <section className="home-work container">
        <div className="section-title">
          <div>
            <p className="kicker">
              01 / {en ? "In practice" : "En la práctica"}
            </p>
            <h2>
              {en
                ? "What I build\non my own time."
                : "Lo que construyo\npor mi cuenta."}
            </h2>
          </div>
          <a className="text-link" href={localPath(locale, "/proyectos")}>
            {en ? "Explore projects" : "Explorar proyectos"}
            <span aria-hidden="true">↗</span>
          </a>
        </div>
        <ProjectPreview locale={locale} />
      </section>
      <section className="home-journal">
        <div className="container journal-grid">
          <div>
            <p className="kicker">02 / Blog</p>
            <h2>
              {en
                ? "What I learn,\nwritten down."
                : "Lo que aprendo,\npor escrito."}
            </h2>
            <p>
              {en
                ? "Notes on frontend architecture, automation and technical decisions, with examples and code."
                : "Notas sobre arquitectura frontend, automatización y decisiones técnicas, con ejemplos y código."}
            </p>
            <a className="text-link" href={localPath(locale, "/blog")}>
              {en ? "Open the blog" : "Entrar al blog"}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
          {post && (
            <a
              className="journal-feature"
              href={localPath(locale, `/blog/${post.slug}`)}
            >
              <span className="kicker">
                {post.tags[0]} · {post.readingMinutes} min
              </span>
              <div className="check-art" aria-hidden="true">
                {post.slug === "cicd-frontend" ? (
                  <>
                    <span>✓</span>
                    <span>?</span>
                  </>
                ) : (
                  <span>↗</span>
                )}
              </div>
              <h3 style={{ viewTransitionName: `article-${post.slug}` }}>
                {post.title}
              </h3>
              <span className="text-link">
                {en ? "Read article" : "Leer artículo"} ↗
              </span>
            </a>
          )}
        </div>
      </section>
      <section className="home-talk container">
        <p className="kicker">03 / {en ? "Out loud" : "En voz alta"}</p>
        <div>
          <h2>{en ? "Sharing\nwhat I learn." : "Compartir\nlo aprendido."}</h2>
          <p>
            {en
              ? "Rendering and streaming in Next.js, in a live coding session with Garaje de ideas."
              : "Renderizado y streaming en Next.js, en una sesión de código en directo con Garaje de ideas."}
          </p>
          <a className="text-link" href={links.nextTalk}>
            {en ? "Watch the session (Spanish)" : "Ver la sesión"}
            <span aria-hidden="true">↗</span>
          </a>
        </div>
        <span className="talk-glyph" aria-hidden="true">
          ↗
        </span>
      </section>
    </PageShell>
  );
}
