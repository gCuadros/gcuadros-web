import { localPath, type Locale } from "@/lib/i18n";
export function ProjectPreview({ locale }: { locale: Locale }) {
  const en = locale === "en";
  return (
    <a className="project-preview" href={localPath(locale, "/proyectos/hevy")}>
      <div className="project-art" aria-hidden="true">
        <div className="art-topline">
          <span>HEVY / MCP</span>
          <span>OPEN SOURCE</span>
        </div>
        <div className="hevy-word">
          hevy<span>↗</span>
        </div>
        <div className="art-flow">
          <span>API</span>
          <i />
          <span>MCP</span>
          <i />
          <span>AI</span>
        </div>
        <span className="art-bottom">
          {en
            ? "Real data. Explicit calculations."
            : "Datos reales. Cálculos explícitos."}
        </span>
      </div>
      <div className="project-preview-copy">
        <div>
          <p className="kicker">
            {en
              ? "Personal project / Developer tools"
              : "Proyecto propio / Herramientas de desarrollo"}
          </p>
          <h3>Hevy Coach MCP</h3>
          <p>
            {en
              ? "Training data, progress calculations and routines connected to an AI assistant."
              : "Datos de entrenamiento, cálculos de progreso y rutinas conectados a un asistente de IA."}
          </p>
        </div>
        <span className="round-arrow" aria-hidden="true">
          ↗
        </span>
      </div>
    </a>
  );
}
