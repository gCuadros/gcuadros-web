import type { ReactNode } from "react";
import { experience, links } from "@/lib/portfolio";

export function ArrowLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a className="arrow-link" href={href}>
      {children}
      <span aria-hidden="true">↗</span>
    </a>
  );
}

export function Signature() {
  return (
    <div className="signature" aria-hidden="true">
      {["Arquitectura", "Producción", "Equipos"].map((label) => (
        <span key={label}>{label}</span>
      ))}
    </div>
  );
}

function SectionHeading({
  eyebrow,
  children,
}: {
  eyebrow: string;
  children: ReactNode;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{children}</h2>
    </div>
  );
}

export function Work() {
  return (
    <section
      id="trabajo"
      className="section container"
      tabIndex={-1}
      aria-labelledby="work-title"
    >
      <div className="section-heading">
        <p className="eyebrow">Trabajo</p>
        <h2 id="work-title">Plataformas, producción y equipos</h2>
      </div>
      <div className="work-rows">
        <article className="work-row">
          <span className="row-number" aria-hidden="true">
            01
          </span>
          <div className="work-copy">
            <h3>Arquitectura frontend</h3>
            <p>
              Participo junto al resto de Tech Leads en las decisiones de
              arquitectura y en el enfoque de las migraciones: de microfrontends
              a un monorepo con Next.js y de Akamai a Vercel como CDN.
            </p>
          </div>
          <div className="annotation">
            <p className="caption">Esquema conceptual</p>
            <div className="migration">
              <span>Microfrontends</span>
              <span aria-hidden="true">→</span>
              <strong>Monorepo Next.js</strong>
              <span>Akamai</span>
              <span aria-hidden="true">→</span>
              <strong>Vercel (CDN)</strong>
            </div>
          </div>
        </article>
        <article className="work-row">
          <span className="row-number" aria-hidden="true">
            02
          </span>
          <div className="work-copy">
            <h3>DevOps aplicado al frontend</h3>
            <p>
              Me encargo del CI/CD de frontend y he trabajado en la migración de
              Bitbucket a GitHub. Automatización, despliegues y observabilidad
              forman parte de mi trabajo.
            </p>
          </div>
          <div className="annotation">
            <p className="caption">Esquema conceptual</p>
            <div className="pipeline">
              <span>Revisión</span>
              <span aria-hidden="true">→</span>
              <span>Validación</span>
              <span aria-hidden="true">→</span>
              <span>Despliegue</span>
            </div>
            <p className="annotation-note">
              CI/CD de frontend, migrado a GitHub
            </p>
          </div>
        </article>
        <article className="work-row">
          <span className="row-number" aria-hidden="true">
            03
          </span>
          <div className="work-copy">
            <h3>Liderazgo técnico</h3>
            <p>
              Acompaño a cinco profesionales de tres equipos mediante mentoría,
              1:1 y feedback, y participo en entrevistas y planes de desarrollo.
            </p>
          </div>
          <div className="annotation">
            <p className="caption">Contexto de equipo</p>
            <dl className="team-stats">
              <div>
                <dt>equipos</dt>
                <dd>3</dd>
              </div>
              <div>
                <dt>profesionales</dt>
                <dd>5</dd>
              </div>
            </dl>
          </div>
        </article>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section
      id="trayectoria"
      className="section experience container"
      tabIndex={-1}
      aria-labelledby="experience-title"
    >
      <div className="section-heading">
        <p className="eyebrow">Trayectoria</p>
        <h2 id="experience-title">Una trayectoria construyendo frontend</h2>
      </div>
      <ol className="timeline">
        {experience.map(({ company, roles }) => (
          <li key={company} className="timeline-company">
            <h3>{company}</h3>
            <ul>
              {roles.map(({ title, period }) => (
                <li className="timeline-role" key={title}>
                  <p>{title}</p>
                  <p className="period">{period}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
      <div className="trajectory-foot">
        <a className="button" href="/cv/gonzalo-cuadros-cv.pdf" download>
          Descargar CV (PDF)
        </a>
        <ArrowLink href={links.linkedin}>
          Trayectoria completa en LinkedIn
        </ArrowLink>
        <div className="education">
          <p className="caption">Formación</p>
          <p>Máster en DevOps &amp; Cloud · UNIR</p>
        </div>
      </div>
    </section>
  );
}

export function Project() {
  return (
    <section
      id="proyecto"
      className="project section"
      aria-labelledby="project-title"
    >
      <div className="container project-grid">
        <div className="project-copy">
          <p className="tag">Proyecto propio · Open source</p>
          <h2 id="project-title">Hevy Coach MCP</h2>
          <p>
            Construí un servidor MCP que conecta los datos de entrenamiento de
            Hevy con asistentes de IA para analizar el progreso y gestionar
            rutinas. Lee entrenamientos y rutinas, calcula métricas de progreso,
            y puede crear rutinas y registrar peso corporal.
          </p>
          <p>
            Sin caché ni base de datos: cada consulta llama en vivo a la API de
            Hevy para razonar sobre datos actuales. Las herramientas de lectura
            y escritura están declaradas por separado, y las de escritura piden
            confirmación antes de ejecutarse.
          </p>
          <div className="actions">
            <a className="button" href={links.hevy}>
              Ver código en GitHub
            </a>
            <ArrowLink href={links.hevyPost}>Cómo lo presenté</ArrowLink>
          </div>
        </div>
        <figure className="project-schema">
          <figcaption>Cómo funciona</figcaption>
          <ol>
            {[
              ["Hevy API", "entrenamientos y rutinas"],
              ["MCP + cálculos", "lee, calcula y gestiona"],
              ["Asistente", "responde con contexto real"],
            ].map(([label, description]) => (
              <li key={label}>
                <div>
                  <strong>{label}</strong>
                  <span>{description}</span>
                </div>
              </li>
            ))}
          </ol>
        </figure>
      </div>
    </section>
  );
}

export function Talks() {
  return (
    <section
      id="charlas"
      className="section container"
      tabIndex={-1}
      aria-labelledby="talks-title"
    >
      <div className="section-heading">
        <p className="eyebrow">Charlas</p>
        <h2 id="talks-title">Compartir lo que aprendo</h2>
      </div>
      <article className="featured-talk">
        <div className="talk-cover">
          <p className="eyebrow">Live coding · Garaje de ideas</p>
          <h3>Estrategias en Next.js</h3>
        </div>
        <div className="talk-description">
          <p>
            Estrategias de renderizado y streaming para mejorar el rendimiento y
            la experiencia de usuario.
          </p>
          <ArrowLink href={links.nextTalk}>Ver sesión</ArrowLink>
        </div>
      </article>
      <article className="secondary-talk">
        <p className="caption">Ponente · MANGO</p>
        <div>
          <h3>Fabrics 2025</h3>
          <ArrowLink href={links.fabrics}>Ver publicación</ArrowLink>
        </div>
      </article>
      <p className="codespace-note">
        También he impartido formación sobre Next.js en Codespace Academy.
      </p>
    </section>
  );
}

export function Contact() {
  return (
    <section className="contact section container">
      <SectionHeading eyebrow="Conectemos">
        Hablemos de plataformas y equipos
      </SectionHeading>
      <p>
        Si estás trabajando en arquitectura frontend, DevOps o liderazgo
        técnico, podemos conversar.
      </p>
      <div className="actions">
        <a className="button" href={links.linkedin}>
          Conectar en LinkedIn
        </a>
        <ArrowLink href={links.github}>GitHub</ArrowLink>
      </div>
    </section>
  );
}
