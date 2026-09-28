import { cicdNote } from "@/lib/cicd-note";
import { translator, localPath, type Locale } from "@/lib/i18n";
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

export default function Home({ locale }: { locale: Locale }) {
  const t = translator(locale);
  return (
    <>
      <a className="skip-link" href="#contenido">
        {t("Saltar al contenido")}{" "}
      </a>
      <SiteHeader locale={locale} />
      <main id="contenido" tabIndex={-1}>
        <section
          className="hero container"
          id="inicio"
          aria-labelledby="hero-title"
        >
          <p className="identity">
            {t("Gonzalo Cuadros · Frontend Tech Lead en MANGO")}{" "}
          </p>
          <h1 id="hero-title">
            <span>{t("Arquitectura frontend.")}</span>{" "}
            <span>{t("De las decisiones a producción.")}</span>
          </h1>
          <p className="hero-copy">
            {t(
              "Trabajo en arquitectura frontend y DevOps, y acompaño a equipos de desarrollo desde el liderazgo técnico. Comparto decisiones de arquitectura y ayudo a convertirlas en soluciones mantenibles.",
            )}{" "}
          </p>
          <div className="actions">
            <a className="button" href="#trabajo">
              {t("Explorar mi trabajo")}{" "}
            </a>
            <ArrowLink href={links.linkedin}>
              {t("Conectar en LinkedIn")}
            </ArrowLink>
          </div>
          <p className="location">{t("Madrid, España")}</p>
          <Signature locale={locale} />
        </section>
        <Work locale={locale} />
        <Experience locale={locale} />
        <Project locale={locale} />
        <section
          id="notas"
          className="section container"
          aria-labelledby="notes-title"
        >
          <div className="section-heading">
            <p className="eyebrow">{cicdNote[locale].label}</p>
            <h2 id="notes-title">{cicdNote[locale].title}</h2>
          </div>
          <p>{cicdNote[locale].description}</p>
          <div className="actions">
            <ArrowLink href={localPath(locale, "/notas/cicd-frontend")}>
              {cicdNote[locale].read}
            </ArrowLink>
          </div>
        </section>
        <Talks locale={locale} />
        <Contact locale={locale} />
      </main>
      <footer className="site-footer container">
        <a href="#inicio" className="brand">
          {t("Gonzalo Cuadros")}{" "}
        </a>
        <nav aria-label={t("Enlaces sociales")}>
          <a href={links.linkedin}>{t("LinkedIn")}</a>
          <a href={links.github}>{t("GitHub")}</a>
        </nav>
        <p>
          © {new Date().getFullYear()} {t("· Madrid, España")}
        </p>
      </footer>
    </>
  );
}
