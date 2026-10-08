import { SiteLink } from "./site-link";
import Image from "next/image";
import { FabricsCover } from "./fabrics-cover";
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
          {en
            ? "I like sharing\nwhat I learn."
            : "Me gusta compartir\nlo que aprendo."}
        </h2>
        <p>
          {en
            ? "I’ve taught frontend at Codespace Academy’s bootcamp, coded live with Garaje de ideas and spoken at Fabrics, MANGO’s tech event."
            : "He enseñado frontend en el bootcamp de Codespace Academy, programado en directo con Garaje de ideas y participado como ponente en Fabrics, el encuentro tecnológico de MANGO."}
        </p>
        <SiteLink
          locale={locale}
          className="text-link"
          href={localPath(locale, "/docencia")}
        >
          {en ? "See my teaching and talks" : "Ver docencia y charlas"}
          <span aria-hidden="true">↗</span>
        </SiteLink>
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
            ? "I’ve taught frontend to web development students and shared my experience through live coding and tech talks."
            : "He enseñado frontend a estudiantes de desarrollo web y compartido mi experiencia en sesiones de código en directo y encuentros tecnológicos."}
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
              ? "As a guest instructor at Codespace Academy’s bootcamp, I designed and taught sessions for web development students, specialising in Next.js."
              : "Durante mi colaboración con el bootcamp de Codespace Academy, diseñé e impartí sesiones para estudiantes de desarrollo web, con especialización en Next.js."}
          </p>
          <ul
            className="teaching-topics"
            aria-label={en ? "Teaching topics" : "Áreas de docencia"}
          >
            <li>{en ? "Frontend foundations" : "Fundamentos de frontend"}</li>
            <li>React</li>
            <li>Next.js</li>
          </ul>
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
          <SiteLink
            locale={locale}
            className="teaching-video-link"
            href={links.nextTalk}
          >
            <span className="play-symbol" aria-hidden="true">
              ▶
            </span>
            <span>
              {en ? "Watch the full session" : "Ver la sesión completa"}
              <small>
                {en
                  ? "Full session · YouTube · Spanish"
                  : "Sesión completa · YouTube"}
              </small>
            </span>
            <span aria-hidden="true">↗</span>
          </SiteLink>
          <SiteLink
            locale={locale}
            className="text-link"
            href={localPath(locale, "/blog/nextjs-rendering-strategies")}
          >
            {en ? "Read the session notes" : "Leer las notas de la sesión"}
            <span aria-hidden="true">↗</span>
          </SiteLink>
        </div>
      </section>
      <section
        className="teaching-event container"
        aria-labelledby="fabrics-title"
      >
        <FabricsCover locale={locale} />
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
          <SiteLink
            locale={locale}
            className="text-link"
            href={localPath(locale, "/blog/fabrics-2025")}
          >
            {en
              ? "Speaking at Fabrics 2025"
              : "Mi participación en Fabrics 2025"}
            <span aria-hidden="true">↗</span>
          </SiteLink>
        </div>
      </section>
    </PageShell>
  );
}
