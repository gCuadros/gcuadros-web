import Image from "next/image";
import { PageShell } from "./page-shell";
import { localPath, type Locale } from "@/lib/i18n";
import { links } from "@/lib/portfolio";
import fabricsPhoto from "../../public/images/fabrics-2025.jpg";

export function TeachingPreview({ locale }: { locale: Locale }) {
  const en = locale === "en";
  return (
    <section
      className="teaching-preview container"
      aria-labelledby="teaching-preview-title"
    >
      <div>
        <p className="kicker">
          {en ? "Teaching & talks" : "Docencia y charlas"}
        </p>
        <h2 id="teaching-preview-title">
          {en ? "Frontend,\nin good company." : "Frontend,\nen buena compañía."}
        </h2>
        <p>
          {en
            ? "I’ve taught frontend at Codespace Academy’s bootcamp, coded live with Garaje de ideas and spoken at Fabrics, MANGO’s tech event."
            : "He sido docente de frontend en el bootcamp de Codespace Academy, he programado en directo con Garaje de ideas y he participado como ponente en Fabrics, el encuentro tecnológico de MANGO."}
        </p>
        <a className="text-link" href={localPath(locale, "/docencia")}>
          {en ? "Explore teaching & talks" : "Ver docencia y charlas"}
          <span aria-hidden="true">↗</span>
        </a>
        <a className="text-link teaching-session-link" href={links.nextTalk}>
          {en ? "Watch the session (Spanish)" : "Ver la sesión"}
          <span aria-hidden="true">↗</span>
        </a>
      </div>
      <figure className="teaching-photo">
        <Image
          src={fabricsPhoto}
          alt={
            en
              ? "Gonzalo with his laptop on the Fabrics 2025 stage"
              : "Gonzalo con su portátil en el escenario de Fabrics 2025"
          }
          sizes="(max-width: 700px) 90vw, 380px"
        />
        <figcaption className="kicker">Fabrics 2025 · MANGO</figcaption>
      </figure>
    </section>
  );
}

export default function TeachingPage({ locale }: { locale: Locale }) {
  const en = locale === "en";
  return (
    <PageShell locale={locale} path="/docencia">
      <header className="page-intro container teaching-intro">
        <p className="kicker">
          {en ? "Teaching & talks" : "Docencia y charlas"}
        </p>
        <h1>
          {en
            ? "At the whiteboard.\nAt the keyboard.\nOn stage."
            : "En la pizarra.\nEn el editor.\nEn el escenario."}
        </h1>
        <p>
          {en
            ? "Teaching frontend has been part of my work too: from bootcamp classes to live coding and sharing ideas with fellow engineers."
            : "Enseñar frontend también ha sido parte de mi trabajo: desde las clases en un bootcamp hasta el código en directo y el intercambio de ideas con otros profesionales."}
        </p>
      </header>
      <section
        className="teaching-classroom container"
        aria-labelledby="classroom-title"
      >
        <div>
          <p className="kicker">
            01 / {en ? "Bootcamp teaching" : "Docencia en bootcamp"}
          </p>
          <p className="caption">
            {en ? "June 2023 — August 2024" : "Junio 2023 — agosto 2024"}
          </p>
        </div>
        <div>
          <h2 id="classroom-title">Codespace Academy</h2>
          <p className="teaching-lead">
            {en
              ? "From frontend fundamentals to advanced Next.js."
              : "De los fundamentos de frontend a Next.js avanzado."}
          </p>
          <p>
            {en
              ? "As a guest instructor, I designed and taught sessions for web development students. My teaching covered frontend foundations and advanced techniques, with a focus on Next.js."
              : "Como docente colaborador, diseñé e impartí sesiones para estudiantes de desarrollo web. Trabajamos desde los fundamentos de frontend hasta técnicas avanzadas, con especialización en Next.js."}
          </p>
          <ul
            className="teaching-topics"
            aria-label={en ? "Teaching topics" : "Áreas de docencia"}
          >
            <li>{en ? "Frontend foundations" : "Fundamentos de frontend"}</li>
            <li>React</li>
            <li>Next.js</li>
          </ul>
          <a className="text-link" href={links.linkedin}>
            {en
              ? "Teaching experience on LinkedIn"
              : "Mi experiencia docente en LinkedIn"}
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
      <section className="teaching-live container" aria-labelledby="live-title">
        <div>
          <p className="kicker">02 / Live coding</p>
          <p className="caption">Garaje de ideas</p>
        </div>
        <div>
          <h2 id="live-title">
            {en
              ? "Rendering strategies\nin Next.js."
              : "Estrategias de renderizado\nen Next.js."}
          </h2>
          <p>
            {en
              ? "A hands-on session on choosing rendering strategies and using streaming to improve performance and the user experience."
              : "Una sesión práctica sobre cómo elegir estrategias de renderizado y aprovechar el streaming para mejorar el rendimiento y la experiencia de usuario."}
          </p>
          <a className="teaching-video-link" href={links.nextTalk}>
            <span className="play-symbol" aria-hidden="true">
              ▶
            </span>
            <span>
              {en ? "Watch the live coding" : "Ver el live coding"}
              <small>
                {en
                  ? "Full session · YouTube · Spanish"
                  : "Sesión completa · YouTube"}
              </small>
            </span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
      <section
        className="teaching-event container"
        aria-labelledby="fabrics-title"
      >
        <figure className="teaching-photo">
          <Image
            src={fabricsPhoto}
            alt={
              en
                ? "Gonzalo preparing with his laptop on the Fabrics 2025 stage"
                : "Gonzalo preparando su intervención con el portátil en el escenario de Fabrics 2025"
            }
            sizes="(max-width: 700px) 90vw, 480px"
          />
          <figcaption className="caption">
            {en
              ? "From my Fabrics 2025 photo album."
              : "Del álbum de mi participación en Fabrics 2025."}
          </figcaption>
        </figure>
        <div>
          <p className="kicker">
            03 / {en ? "Speaker · MANGO" : "Ponente · MANGO"}
          </p>
          <h2 id="fabrics-title">Fabrics 2025</h2>
          <p>
            {en
              ? "I took part as a speaker in the second edition of MANGO’s tech event, alongside colleagues and other technology professionals."
              : "Participé como ponente en la segunda edición del encuentro tecnológico de MANGO, junto a compañeros y otros profesionales del sector."}
          </p>
          <p>
            {en
              ? "A chance to share ideas, learn from other speakers and discuss how technology is changing the industry."
              : "Una oportunidad para compartir ideas, aprender de otros ponentes y conversar sobre cómo la tecnología está transformando la industria."}
          </p>
          <div className="teaching-event-links">
            <a className="text-link" href={links.fabrics}>
              {en ? "My post & photos" : "Mi publicación y fotos"}
              <span aria-hidden="true">↗</span>
            </a>
            <a
              className="text-link"
              href="https://www.linkedin.com/posts/mango_lifeatmango-takingfashionfurther-takinginnovationfurther-activity-7335941887565938688-7I9n"
            >
              {en ? "MANGO’s event recap" : "El resumen de MANGO"}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
