"use client";
import { useState } from "react";
import type { Locale } from "@/lib/i18n";
const content = {
  es: [
    {
      name: "Interfaz",
      title: "Construir la interfaz.",
      text: "Componentes, estados y navegación. Me interesan tanto el recorrido habitual como la espera, los errores y el uso con teclado.",
      code: '<Interfaz estado="cargando" />',
    },
    {
      name: "Validación",
      title: "Comprobar cada cambio.",
      text: "Tipos, compilación y pruebas de los recorridos de usuario para detectar errores antes de desplegar.",
      code: "cambio → build → pruebas",
    },
    {
      name: "Producción",
      title: "Verificar en producción.",
      text: "Despliegues, observabilidad y comprobaciones sobre la versión publicada para saber cómo se comporta la web en uso.",
      code: "desplegar → observar → aprender",
    },
  ],
  en: [
    {
      name: "Interface",
      title: "Building the interface.",
      text: "Components, states and navigation. I care about the everyday experience, loading and error states, and keyboard access.",
      code: '<Interface state="loading" />',
    },
    {
      name: "Validation",
      title: "Checking each change.",
      text: "Type checks, builds and user journey tests to catch errors before deployment.",
      code: "change → build → tests",
    },
    {
      name: "Production",
      title: "Verifying in production.",
      text: "Deployments, observability and checks on the live site to understand how it behaves in use.",
      code: "deploy → observe → learn",
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
          ? "Explora las capas de una web"
          : "Explore the layers of a website"
      }
      data-active={active}
    >
      <div className="explorer-heading">
        <span className="kicker">
          {locale === "es" ? "Una web, por dentro" : "Inside a website"}
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
        <h2>{item.title}</h2>
        <p>{item.text}</p>
        <code>{item.code}</code>
      </div>
      <noscript>
        <p>
          {locale === "es"
            ? "Este ejemplo muestra la interfaz. Con JavaScript puedes explorar también validación y producción."
            : "This example shows the interface. Enable JavaScript to explore validation and production too."}
        </p>
      </noscript>
    </section>
  );
}
