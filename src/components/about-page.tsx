import { PageShell } from "./page-shell";
import { Experience, Talks } from "./portfolio";
import type { Locale } from "@/lib/i18n";
export default function AboutPage({ locale }: { locale: Locale }) {
  const en = locale === "en";
  return (
    <PageShell locale={locale} path="/sobre-mi">
      <header className="page-intro about-intro container">
        <p className="kicker">
          {en ? "About me" : "Sobre mí"} / Gonzalo Cuadros
        </p>
        <h1>
          {en
            ? "Frontend is\nwhere I start."
            : "El frontend es\nmi punto de partida."}
        </h1>
        <div className="about-copy">
          <p>
            {en
              ? "I’m a frontend developer and Tech Lead at MANGO. Before that, I worked at Freepik and Wuolah. I work on interfaces, shared architecture decisions and how software reaches production."
              : "Soy desarrollador frontend y Tech Lead en MANGO. Antes pasé por Freepik y Wuolah. Trabajo en interfaces, decisiones compartidas de arquitectura y en cómo llega el software a producción."}
          </p>
          <p>
            {en
              ? "DevOps is part of that work: automation, CI/CD, infrastructure as code and observability. Technical leadership also means mentoring, feedback and helping other developers grow."
              : "DevOps forma parte de ese trabajo: automatización, CI/CD, infraestructura como código y observabilidad. El liderazgo técnico también implica mentoría, feedback y acompañar a otros desarrolladores."}
          </p>
        </div>
      </header>
      <Experience locale={locale} />
      <Talks locale={locale} />
    </PageShell>
  );
}
