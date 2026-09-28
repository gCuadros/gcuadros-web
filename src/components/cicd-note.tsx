import Link from "next/link";
import { LanguageSwitch } from "./language-switch";
import { localPath, type Locale } from "@/lib/i18n";
import { cicdNote } from "@/lib/cicd-note";
const source =
  "https://github.com/gCuadros/gcuadros-web/blob/e0376e67f1ba36cc48cecad694c02262d4a8459c";
export default function CicdNote({ locale }: { locale: Locale }) {
  const note = cicdNote[locale];
  return (
    <>
      <a className="skip-link" href="#nota">
        {locale === "es" ? "Saltar al contenido" : "Skip to content"}
      </a>
      <header className="site-header container">
        <Link className="brand" href={localPath(locale)}>
          Gonzalo Cuadros
        </Link>
        <div className="header-controls">
          <LanguageSwitch locale={locale} path="/notas/cicd-frontend" />
          <Link className="arrow-link" href={`${localPath(locale)}#notas`}>
            {note.back}
          </Link>
        </div>
      </header>
      <main id="nota" tabIndex={-1} className="case-study container">
        <article>
          <p className="eyebrow">{note.label}</p>
          <h1>{note.title}</h1>
          <p>{note.description}</p>
          {note.sections.map(([title, paragraphs]) => (
            <section key={title}>
              <h2>{title}</h2>
              {paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </section>
          ))}
          <section>
            <h2>{note.sources}</h2>
            <ul>
              <li>
                <a href={`${source}/.github/workflows/ci.yml`}>
                  GitHub Actions
                </a>
              </li>
              <li>
                <a href={`${source}/tests/portfolio.spec.ts`}>Playwright</a>
              </li>
              <li>
                <a href={`${source}/scripts/verify_cv.py`}>
                  {locale === "es"
                    ? "Verificación de los CV"
                    : "CV verification"}
                </a>
              </li>
            </ul>
          </section>
        </article>
      </main>
    </>
  );
}
