import {
  ArrowLink,
  Contact,
  Experience,
  Project,
  Signature,
  Talks,
  Work,
} from "@/components/portfolio";
import { SiteHeader } from "@/components/site-header";
import { links } from "@/lib/portfolio";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <SiteHeader />
      <main id="contenido" tabIndex={-1}>
        <section
          className="hero container"
          id="inicio"
          aria-labelledby="hero-title"
        >
          <p className="identity">
            Gonzalo Cuadros · Frontend Tech Lead en MANGO
          </p>
          <h1 id="hero-title">
            <span>Arquitectura frontend.</span>{" "}
            <span>De las decisiones a producción.</span>
          </h1>
          <p className="hero-copy">
            Trabajo en arquitectura frontend y DevOps, y acompaño a equipos de
            desarrollo desde el liderazgo técnico. Comparto decisiones de
            arquitectura y ayudo a convertirlas en soluciones mantenibles.
          </p>
          <div className="actions">
            <a className="button" href="#trabajo">
              Explorar mi trabajo
            </a>
            <ArrowLink href={links.linkedin}>Conectar en LinkedIn</ArrowLink>
          </div>
          <p className="location">Madrid, España</p>
          <Signature />
        </section>
        <Work />
        <Experience />
        <Project />
        <Talks />
        <Contact />
      </main>
      <footer className="site-footer container">
        <a href="#inicio" className="brand">
          Gonzalo Cuadros
        </a>
        <nav aria-label="Enlaces sociales">
          <a href={links.linkedin}>LinkedIn</a>
          <a href={links.github}>GitHub</a>
        </nav>
        <p>© {new Date().getFullYear()} · Madrid, España</p>
      </footer>
    </>
  );
}
