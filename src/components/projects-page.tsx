import { PageShell } from "./page-shell";
import { ProjectPreview } from "./project-preview";
import { links } from "@/lib/portfolio";
import type { Locale } from "@/lib/i18n";
export default function ProjectsPage({ locale }: { locale: Locale }) {
  const en = locale === "en";
  return (
    <PageShell locale={locale} path="/proyectos">
      <div className="container">
        <header className="page-intro">
          <p className="kicker">
            {en ? "Code with context" : "Código con contexto"}
          </p>
          <h1>{en ? "Built,\nthen explained." : "Hecho.\nY explicado."}</h1>
          <p>
            {en
              ? "A closer look at my own work: the problem, the decisions and the limits. Public code you can inspect."
              : "Una mirada a mi trabajo propio: el problema, las decisiones y los límites. Código público que puedes revisar."}
          </p>
        </header>
        <ProjectPreview locale={locale} />
        <section className="project-afterword">
          <h2>
            {en
              ? "The code is part\nof the conversation."
              : "El código es parte\nde la conversación."}
          </h2>
          <div>
            <p>
              {en
                ? "The Hevy case covers retries, validation before writes and the difference between missing data and zero. The repository contains the implementation and tests."
                : "El caso de Hevy recorre reintentos, validación antes de escribir y la diferencia entre datos ausentes y cero. El repositorio contiene la implementación y sus pruebas."}
            </p>
            <a className="text-link" href={links.hevy}>
              {en ? "Explore the repository" : "Explorar el repositorio"} ↗
            </a>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
