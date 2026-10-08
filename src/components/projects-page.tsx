import { SiteLink } from "./site-link";
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
          <h1>
            {en
              ? "Personal projects.\nPublic code."
              : "Proyectos propios.\nCódigo público."}
          </h1>
          <p>
            {en
              ? "What I wanted to solve, how I built it and where its limits are. Each project includes code you can explore."
              : "Aquí explico qué quería resolver, cómo lo implementé y qué límites tiene cada proyecto. El código está disponible para revisarlo."}
          </p>
        </header>
        <ProjectPreview locale={locale} />
        <section className="project-afterword">
          <h2>{en ? "Inside\nthe repository." : "Dentro del\nrepositorio."}</h2>
          <div>
            <p>
              {en
                ? "The Hevy case study explains how I handle failed requests, what I validate before changing data and why I distinguish missing values from zero. The implementation and tests are on GitHub."
                : "El caso de Hevy explica cómo gestiono las peticiones fallidas, qué valido antes de modificar datos y por qué distingo entre un dato ausente y un cero. La implementación y las pruebas están en GitHub."}
            </p>
            <SiteLink locale={locale} className="text-link" href={links.hevy}>
              {en ? "Explore the repository" : "Explorar el repositorio"} ↗
            </SiteLink>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
