"use client";
import { useState } from "react";
import { localPath, type Locale } from "@/lib/i18n";
import { SiteLink } from "./site-link";
const content = {
  es: [
    {
      name: "Arquitectura",
      context: "Límites · contratos · autonomía",
      title: "¿Qué debe cambiar por separado?",
      text: "Antes de separar servicios o microfrontends, miro quién mantiene cada parte, qué datos comparte y si puede desplegarse sin coordinar al resto. Si esa autonomía no es necesaria, prefiero límites claros dentro del sistema antes de añadir red y operación.",
      tradeoff:
        "Un monorepo organiza el código. La independencia se decide en los contratos, los datos y los despliegues.",
    },
    {
      name: "Infraestructura",
      context: "Estado · permisos · reproducibilidad",
      title: "¿Podemos reconstruir el entorno?",
      text: "Versionar recursos es solo una parte. También hay que proteger el estado y los secretos, limitar los permisos y detectar cambios hechos a mano. Me interesa que otro miembro del equipo pueda revisar y aplicar un cambio sin depender de quien creó el entorno.",
      tradeoff:
        "Recrear infraestructura no recupera los datos. Las copias y la restauración necesitan su propia prueba.",
    },
    {
      name: "Operación",
      context: "Despliegue · señales · recuperación",
      title: "¿Qué pasa si el cambio falla?",
      text: "Antes de desplegar, quiero saber qué señal del producto detectaría un problema, a quién afectaría y quién respondería. Ampliaría la exposición por etapas cuando pueda comparar versiones con tráfico representativo y criterios claros para detener el despliegue.",
      tradeoff:
        "Volver a la versión anterior no deshace una migración de datos. La recuperación se diseña junto al cambio.",
    },
  ],
  en: [
    {
      name: "Architecture",
      context: "Boundaries · contracts · autonomy",
      title: "What needs to change independently?",
      text: "Before splitting services or microfrontends, I look at who maintains each part, which data it shares and whether it can deploy without coordinating with the rest. If that autonomy is unnecessary, I favour clear internal boundaries before adding network and operational overhead.",
      tradeoff:
        "A monorepo organises code. Independence depends on contracts, data ownership and deployments.",
    },
    {
      name: "Infrastructure",
      context: "State · permissions · reproducibility",
      title: "Can we rebuild the environment?",
      text: "Versioning resources is only part of it. State and secrets need protection, permissions need boundaries and manual changes need to be detected. I want another team member to be able to review and apply a change without relying on whoever created the environment.",
      tradeoff:
        "Recreating infrastructure does not recover the data. Backups and restoration need their own test.",
    },
    {
      name: "Operations",
      context: "Deployment · signals · recovery",
      title: "What if the change fails?",
      text: "Before deploying, I want to know which product signal would reveal a problem, who it would affect and who would respond. I would expand exposure in stages when I can compare versions using representative traffic and clear criteria for stopping the rollout.",
      tradeoff:
        "Reverting the application does not undo a data migration. Recovery needs to be designed alongside the change.",
    },
  ],
} as const;
export function LayerExplorer({ locale }: { locale: Locale }) {
  const [active, setActive] = useState(0);
  const items = content[locale];
  const item = items[active];
  return (
    <section
      className="layer-explorer"
      aria-label={
        locale === "es"
          ? "Explora mis criterios de arquitectura, infraestructura y operación"
          : "Explore my approach to architecture, infrastructure and operations"
      }
      data-active={active}
    >
      <div className="explorer-heading">
        <span className="kicker">
          {locale === "es" ? "Criterio de diseño" : "Design judgement"}
        </span>
        <span className="explorer-count" aria-hidden="true">
          0{active + 1} / 03
        </span>
      </div>
      <div className="layer-stage" aria-hidden="true">
        <div className="layer-lines" />
        <div className="layer layer-back">
          <span>03</span>
          <strong>{items[2].name}</strong>
          <i />
        </div>
        <div className="layer layer-middle">
          <span>02</span>
          <strong>{items[1].name}</strong>
          <i />
        </div>
        <div className="layer layer-front">
          <span>01</span>
          <strong>{items[0].name}</strong>
          <div className="mini-interface">
            <i />
            <i />
            <i />
          </div>
        </div>
      </div>
      <div
        className="layer-controls"
        role="group"
        aria-label={locale === "es" ? "Selecciona una capa" : "Select a layer"}
      >
        {items.map((entry, index) => (
          <button
            type="button"
            key={entry.name}
            aria-pressed={index === active}
            aria-controls="layer-detail"
            onClick={() => setActive(index)}
          >
            <span>0{index + 1}</span>
            {entry.name}
          </button>
        ))}
      </div>
      <div
        id="layer-detail"
        className="layer-detail"
        aria-live="polite"
        aria-atomic="true"
      >
        <p className="layer-context">{item.context}</p>
        <h2>{item.title}</h2>
        <p>{item.text}</p>
        <p className="layer-tradeoff">{item.tradeoff}</p>
        <SiteLink
          locale={locale}
          className="layer-evidence"
          href={localPath(
            locale,
            "/blog/arquitectura-infraestructura-operacion",
          )}
        >
          {locale === "es" ? "Leer el razonamiento" : "Read the reasoning"}{" "}
          <span aria-hidden="true">→</span>
        </SiteLink>
      </div>
      <noscript>
        <p>
          {locale === "es"
            ? "Aquí puedes leer el criterio de arquitectura. El artículo enlazado desarrolla también infraestructura y operación."
            : "The architecture perspective is shown here. The linked article also covers infrastructure and operations."}
        </p>
      </noscript>
    </section>
  );
}
