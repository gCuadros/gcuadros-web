import { cicdNote } from "@/lib/cicd-note";
import { translator, localPath, type Locale } from "@/lib/i18n";
import {
  ArrowLink,
  Contact,
  Experience,
  Project,
  Talks,
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
          <div className="intro-copy">
            <h1 id="hero-title">Gonzalo Cuadros</h1>
            <p className="intro-lead">
              {t(
                "Soy desarrollador frontend y Tech Lead. Me gusta construir interfaces, entender cómo funcionan por dentro y cuidar cómo llegan a producción.",
              )}
            </p>
            <p className="hero-copy">
              {t(
                "He trabajado en Freepik, Wuolah y MANGO. Mi trabajo cruza arquitectura frontend, DevOps y acompañamiento técnico a otros desarrolladores.",
              )}
            </p>
            <div className="actions">
              <a className="arrow-link" href="#trabajo">
                {t("Ver mi trabajo")} <span aria-hidden="true">↓</span>
              </a>
              <ArrowLink href={links.linkedin}>LinkedIn</ArrowLink>
            </div>
          </div>
          <aside className="intro-now" aria-label={t("Ahora")}>
            <p className="caption">{t("Ahora")}</p>
            <p className="current-role">{t("Frontend Tech Lead en MANGO")}</p>
            <p>{t("Madrid, España")}</p>
          </aside>
        </section>
        <section
          id="trabajo"
          className="selected-work container"
          tabIndex={-1}
          aria-labelledby="work-title"
        >
          <h2 id="work-title">{t("Lo que construyo y comparto")}</h2>
          <Project locale={locale} />
        </section>
        <section
          id="notas"
          className="note-feature section container"
          tabIndex={-1}
          aria-labelledby="notes-title"
        >
          <div className="section-heading">
            <p className="eyebrow">{t("Una nota sobre este portfolio")}</p>
            <h2 id="notes-title">{cicdNote[locale].title}</h2>
          </div>
          <p>
            {t(
              "Qué compruebo antes de publicar esta web, qué fallos detectan las pruebas y qué sigo revisando a mano.",
            )}
          </p>
          <div className="actions">
            <ArrowLink href={localPath(locale, "/notas/cicd-frontend")}>
              {cicdNote[locale].read}
            </ArrowLink>
          </div>
        </section>
        <Talks locale={locale} />
        <Experience locale={locale} />
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
