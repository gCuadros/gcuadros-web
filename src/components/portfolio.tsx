import { SiteLink } from "./site-link";
import { translator, type Locale } from "@/lib/i18n";
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
            {t("Ver mi perfil en LinkedIn")}
          </ArrowLink>
        </div>
        <div className="education">
          <p className="caption">{t("Formación")}</p>
          <p>{t("Máster en DevOps & Cloud · UNIR · 2025–2026")}</p>
          <p>{t("Computer Software Engineering · UOC · 2012–2018")}</p>
          <p>
            {t(
              "Full Stack Development Bootcamp · Codespace Academy · 2018–2019",
            )}
          </p>
          <p>
            {t("Web/Multimedia Management and Webmaster · Cesur · 2010–2012")}
          </p>
        </div>
      </div>
    </section>
  );
}
