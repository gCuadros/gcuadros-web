import { SiteLink } from "./site-link";
import { translator, localPath, type Locale } from "@/lib/i18n";
import type { ReactNode } from "react";
import { experience, links } from "@/lib/portfolio";

export function ArrowLink({
  href,
  children,
  locale = "es",
}: {
  locale?: Locale;
  href: string;
  children: ReactNode;
}) {
  return (
    <SiteLink locale={locale} className="arrow-link" href={href}>
      {children}
      <span aria-hidden="true">↗</span>
    </SiteLink>
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
        <h2 id="experience-title">{t("Dónde he trabajado")}</h2>
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
        <div className="actions">
          <SiteLink
            locale={locale}
            className="button"
            href={
              locale === "en"
                ? "/cv/gonzalo-cuadros-cv-en.pdf"
                : "/cv/gonzalo-cuadros-cv.pdf"
            }
            download
          >
            {t("Descargar CV (PDF)")}{" "}
          </SiteLink>
          <ArrowLink locale={locale} href={links.linkedin}>
            {t("Trayectoria completa en LinkedIn")}{" "}
          </ArrowLink>
        </div>
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
      className="project"
      aria-labelledby="project-title"
    >
      <div className="project-grid">
        <div className="project-copy">
          <p className="eyebrow">{t("Un proyecto propio")}</p>
          <h3 id="project-title">{t("Hevy Coach MCP")}</h3>
          <p>
            {t(
              "Construí un servidor MCP para consultar entrenamientos, calcular progreso y gestionar rutinas desde un asistente de IA.",
            )}{" "}
          </p>
          <p>
            {t(
              "Las decisiones que más me interesan aparecen cuando algo falla: qué se puede reintentar y cómo evitar cambios no deseados.",
            )}{" "}
          </p>
          <div className="actions">
            <ArrowLink
              locale={locale}
              href={localPath(locale, "/proyectos/hevy")}
            >
              {t("Leer el caso técnico")}
            </ArrowLink>
            <ArrowLink locale={locale} href={links.hevy}>
              {t("Ver código en GitHub")}
            </ArrowLink>
          </div>
        </div>
        <figure className="project-schema">
          <figcaption>{t("De los datos a la conversación")}</figcaption>
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
        <h2 id="talks-title">{t("También lo cuento en voz alta")}</h2>
      </div>
      <article className="featured-talk">
        <div className="talk-cover">
          <p className="eyebrow">{t("Live coding · Garaje de ideas")}</p>
          <h3>{t("Estrategias en Next.js")}</h3>
        </div>
        <div className="talk-description">
          <p>
            {t(
              "Una sesión de código en directo con Garaje de ideas sobre renderizado y streaming en Next.js.",
            )}{" "}
          </p>
          <ArrowLink locale={locale} href={links.nextTalk}>
            {t("Ver sesión")}
          </ArrowLink>
        </div>
      </article>
      <article className="secondary-talk">
        <p className="caption">{t("Ponente · MANGO")}</p>
        <div>
          <h3>{t("Fabrics 2025")}</h3>
          <ArrowLink locale={locale} href={links.fabrics}>
            {t("Ver publicación")}
          </ArrowLink>
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
        {t("¿Seguimos la conversación?")}{" "}
      </SectionHeading>
      <p>
        {t(
          "Puedes encontrarme en LinkedIn o explorar mis proyectos en GitHub.",
        )}{" "}
      </p>
      <div className="actions">
        <SiteLink locale={locale} className="button" href={links.linkedin}>
          {t("Conectar en LinkedIn")}{" "}
        </SiteLink>
        <ArrowLink locale={locale} href={links.github}>
          {t("GitHub")}
        </ArrowLink>
      </div>
    </section>
  );
}
