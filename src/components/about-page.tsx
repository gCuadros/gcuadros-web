import { PageShell } from "./page-shell";
import { Experience } from "./portfolio";
import { TeachingPreview } from "./teaching-page";
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
              ? "I’m a Frontend Tech Lead at MANGO. I build interfaces, make architecture decisions with other Tech Leads and support the team’s technical work. Before that, I worked at Freepik and Wuolah."
              : "Soy Frontend Tech Lead en MANGO. Desarrollo interfaces, comparto decisiones de arquitectura con otros Tech Leads y acompaño al equipo en su trabajo técnico. Antes trabajé en Freepik y Wuolah."}
          </p>
          <p>
            {en
              ? "My DevOps work covers automation, CI/CD, infrastructure as code and observability. As a Tech Lead, I spend part of my time mentoring developers and giving feedback. I’ve also taught frontend and Next.js at Codespace Academy."
              : "Mi trabajo en DevOps incluye automatización, CI/CD, infraestructura como código y observabilidad. Como Tech Lead, dedico parte de mi trabajo a la mentoría y al feedback; como docente, he impartido sesiones de frontend y Next.js en Codespace Academy."}
          </p>
        </div>
      </header>
      <Experience locale={locale} />
      <TeachingPreview locale={locale} />
    </PageShell>
  );
}
