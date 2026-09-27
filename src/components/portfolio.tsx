import { translator, localPath, type Locale } from "@/lib/i18n";
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

export function Signature({ locale }: { locale: Locale }) {
  const t = translator(locale);
  return (
    <div className="signature" aria-hidden="true">
      {["Arquitectura", "Producción", "Equipos"].map((label) => (
        <span key={label}>{t(label)}</span>
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

export function Work({ locale }: { locale: Locale }) {
  const t = translator(locale);
  return (
    <section
      id="trabajo"
      className="section container"
      tabIndex={-1}
      aria-labelledby="work-title"
    >
      <div className="section-heading">
        <p className="eyebrow">{t("Trabajo")}</p>
        <h2 id="work-title">{t("Plataformas, producción y equipos")}</h2>
      </div>
      <div className="work-rows">
        <article className="work-row">
          <span className="row-number" aria-hidden="true">
            01
          </span>
          <div className="work-copy">
            <h3>{t("Arquitectura frontend")}</h3>
            <p>
              {t(
                "Participo en decisiones compartidas de arquitectura y evolución de plataformas frontend, con foco en mantenibilidad, rendimiento y experiencia de desarrollo.",
              )}{" "}
            </p>
          </div>
          <div className="annotation">
            <p className="caption">{t("Esquema conceptual")}</p>
            <div className="migration">
              <span>{t("Contexto")}</span>
              <span aria-hidden="true">→</span>
              <strong>{t("Decisiones")}</strong>
              <span>{t("Validación")}</span>
              <span aria-hidden="true">→</span>
              <strong>{t("Aprendizaje")}</strong>
            </div>
          </div>
        </article>
        <article className="work-row">
          <span className="row-number" aria-hidden="true">
            02
          </span>
          <div className="work-copy">
            <h3>{t("DevOps aplicado al frontend")}</h3>
            <p>
              {t(
                "Trabajo en automatización, integración y entrega continua de frontend. Despliegues y observabilidad forman parte de mi enfoque para conectar el desarrollo con la operación.",
              )}{" "}
            </p>
          </div>
          <div className="annotation">
            <p className="caption">{t("Esquema conceptual")}</p>
            <div className="pipeline">
              <span>{t("Revisión")}</span>
              <span aria-hidden="true">→</span>
              <span>{t("Validación")}</span>
              <span aria-hidden="true">→</span>
              <span>{t("Despliegue")}</span>
            </div>
            <p className="annotation-note">{t("CI/CD de frontend")}</p>
          </div>
        </article>
        <article className="work-row">
          <span className="row-number" aria-hidden="true">
            03
          </span>
          <div className="work-copy">
            <h3>{t("Liderazgo técnico")}</h3>
            <p>
              {t(
                "Acompaño a equipos de desarrollo mediante mentoría, 1:1 y feedback, y participo en entrevistas y planes de desarrollo.",
              )}{" "}
            </p>
          </div>
          <div className="annotation">
            <p className="caption">{t("Liderazgo técnico")}</p>
            <p className="annotation-note">
              {t("Mentoría · Feedback · Decisiones compartidas")}{" "}
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

export function Experience({ locale }: { locale: Locale }) {
  const t = translator(locale);
  return (
    <section
      id="trayectoria"
      className="section experience container"
      tabIndex={-1}
      aria-labelledby="experience-title"
    >
      <div className="section-heading">
        <p className="eyebrow">{t("Trayectoria")}</p>
        <h2 id="experience-title">
          {t("Una trayectoria construyendo frontend")}
        </h2>
      </div>
      <ol className="timeline">
        {experience.map(({ company, roles, description }) => (
          <li key={company} className="timeline-company">
            <h3>{t(company)}</h3>
            <div>
              <ul>
                {roles.map(({ title, period }) => (
                  <li className="timeline-role" key={title}>
                    <p>{t(title)}</p>
                    <p className="period">{t(period)}</p>
                  </li>
                ))}
              </ul>
              <p className="experience-description">{t(description)}</p>
            </div>
          </li>
        ))}
      </ol>
      <div className="trajectory-foot">
        <a
          className="button"
          href={
            locale === "en"
              ? "/cv/gonzalo-cuadros-cv-en.pdf"
              : "/cv/gonzalo-cuadros-cv.pdf"
          }
          download
        >
          {t("Descargar CV (PDF)")}{" "}
        </a>
        <ArrowLink href={links.linkedin}>
          {t("Trayectoria completa en LinkedIn")}{" "}
        </ArrowLink>
        <div className="education">
          <p className="caption">{t("Formación")}</p>
          <p>{t("Máster en DevOps & Cloud · UNIR · 2025–2026")}</p>
          <p>{t("Computer Software Engineering · UOC · 2012–2018")}</p>
          <p>{t("Full Stack Development Bootcamp · Code Space · 2018–2019")}</p>
          <p>
            {t("Web/Multimedia Management and Webmaster · Cesur · 2010–2012")}
          </p>
        </div>
      </div>
    </section>
  );
}

export function Project({ locale }: { locale: Locale }) {
  const t = translator(locale);
  return (
    <section
      id="proyecto"
      tabIndex={-1}
      className="project section"
      aria-labelledby="project-title"
    >
      <div className="container project-grid">
        <div className="project-copy">
          <p className="tag">{t("Proyecto propio · Open source")}</p>
          <h2 id="project-title">{t("Hevy Coach MCP")}</h2>
          <p>
            {t(
              "Construí un servidor MCP que conecta los datos de entrenamiento de Hevy con asistentes de IA para analizar el progreso y gestionar rutinas. Lee entrenamientos y rutinas, calcula métricas de progreso, y puede crear rutinas y registrar peso corporal.",
            )}{" "}
          </p>
          <p>
            {t(
              "Sin caché ni base de datos: cada consulta llama en vivo a la API de Hevy para razonar sobre datos actuales. Las herramientas de lectura y escritura están declaradas por separado para que el cliente MCP pueda aplicar sus controles de confirmación.",
            )}{" "}
          </p>
          <div className="actions">
            <a className="button" href={links.hevy}>
              {t("Ver código en GitHub")}{" "}
            </a>
            <ArrowLink href={localPath(locale, "/proyectos/hevy")}>
              {t("Leer el caso técnico")}
            </ArrowLink>
          </div>
        </div>
        <figure className="project-schema">
          <figcaption>{t("Cómo funciona")}</figcaption>
          <ol>
            {[
              ["Hevy API", "entrenamientos y rutinas"],
              ["MCP + cálculos", "lee, calcula y gestiona"],
              ["Asistente", "responde con contexto real"],
            ].map(([label, description]) => (
              <li key={label}>
                <div>
                  <strong>{t(label)}</strong>
                  <span>{t(description)}</span>
                </div>
              </li>
            ))}
          </ol>
        </figure>
      </div>
    </section>
  );
}

export function Talks({ locale }: { locale: Locale }) {
  const t = translator(locale);
  return (
    <section
      id="charlas"
      className="section container"
      tabIndex={-1}
      aria-labelledby="talks-title"
    >
      <div className="section-heading">
        <p className="eyebrow">{t("Charlas")}</p>
        <h2 id="talks-title">{t("Compartir lo que aprendo")}</h2>
      </div>
      <article className="featured-talk">
        <div className="talk-cover">
          <p className="eyebrow">{t("Live coding · Garaje de ideas")}</p>
          <h3>{t("Estrategias en Next.js")}</h3>
        </div>
        <div className="talk-description">
          <p>
            {t(
              "Estrategias de renderizado y streaming para mejorar el rendimiento y la experiencia de usuario.",
            )}{" "}
          </p>
          <ArrowLink href={links.nextTalk}>{t("Ver sesión")}</ArrowLink>
        </div>
      </article>
      <article className="secondary-talk">
        <p className="caption">{t("Ponente · MANGO")}</p>
        <div>
          <h3>{t("Fabrics 2025")}</h3>
          <ArrowLink href={links.fabrics}>{t("Ver publicación")}</ArrowLink>
        </div>
      </article>
      <p className="codespace-note">
        {t(
          "Entre junio de 2023 y agosto de 2024 colaboré como docente en Codespace Academy, diseñando e impartiendo sesiones desde fundamentos de frontend hasta técnicas avanzadas con Next.js.",
        )}{" "}
      </p>
    </section>
  );
}

export function Contact({ locale }: { locale: Locale }) {
  const t = translator(locale);
  return (
    <section className="contact section container">
      <SectionHeading eyebrow={t("Conectemos")}>
        {t("Hablemos de plataformas y equipos")}{" "}
      </SectionHeading>
      <p>
        {t(
          "Si estás trabajando en arquitectura frontend, DevOps o liderazgo técnico, podemos conversar.",
        )}{" "}
      </p>
      <div className="actions">
        <a className="button" href={links.linkedin}>
          {t("Conectar en LinkedIn")}{" "}
        </a>
        <ArrowLink href={links.github}>{t("GitHub")}</ArrowLink>
      </div>
    </section>
  );
}
