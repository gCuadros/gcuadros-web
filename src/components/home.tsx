import { SiteLink } from "./site-link";
import { PageShell } from "./page-shell";
import { LayerExplorer } from "./layer-explorer";
import { ProjectPreview } from "./project-preview";
import { localPath, type Locale } from "@/lib/i18n";
import { getPosts } from "@/lib/blog";
import { TeachingPreview } from "./teaching-page";
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
              ? "I enjoy building frontend platforms and helping others grow."
              : "Disfruto construyendo plataformas frontend y ayudando a otros a crecer."}
          </p>
          <p className="hero-description">
            {en
              ? "I’m a Tech Lead at MANGO, making architecture decisions with fellow leads and bringing DevOps practices to frontend development. Previously at Freepik and Wuolah."
              : "Soy Tech Lead en MANGO: comparto decisiones de arquitectura con otros Tech Leads y aplico DevOps al frontend. Antes trabajé en Freepik y Wuolah."}
          </p>
          <SiteLink
            locale={locale}
            className="text-link"
            href={localPath(locale, "/sobre-mi")}
          >
            {en ? "My background" : "Conocer mi trayectoria"}
            <span aria-hidden="true">↗</span>
          </SiteLink>
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
              {en ? "Projects\nof my own." : "Lo que construyo\npor mi cuenta."}
            </h2>
          </div>
          <SiteLink
            locale={locale}
            className="text-link"
            href={localPath(locale, "/proyectos")}
          >
            {en ? "Explore projects" : "Explorar proyectos"}
            <span aria-hidden="true">↗</span>
          </SiteLink>
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
                ? "I write about frontend architecture, automation and personal projects: the decisions, the code and what I learn along the way."
                : "Escribo sobre arquitectura frontend, automatización y proyectos propios: las decisiones, el código y lo que aprendo al desarrollarlos."}
            </p>
            <SiteLink
              locale={locale}
              className="text-link"
              href={localPath(locale, "/blog")}
            >
              {en ? "Read the blog" : "Entrar al blog"}
              <span aria-hidden="true">↗</span>
            </SiteLink>
          </div>
          {post && (
            <SiteLink
              locale={locale}
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
            </SiteLink>
          )}
        </div>
      </section>
      <TeachingPreview locale={locale} />
    </PageShell>
  );
}
