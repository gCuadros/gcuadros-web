"use client";
import { useState } from "react";
import type { Locale } from "@/lib/i18n";
const content = {
  es: [
    {
      name: "Interfaz",
      title: "Lo que ves.",
      text: "Componentes, estados y navegación. Una interfaz también tiene que funcionar con teclado y cuando los datos no llegan.",
      code: '<Interfaz estado="cargando" />',
    },
    {
      name: "Validación",
      title: "Lo que compruebas.",
      text: "Tipos, compilación y recorridos de usuario. Cada prueba responde a un fallo concreto; ninguna lo comprueba todo.",
      code: "cambio → build → pruebas",
    },
    {
      name: "Producción",
      title: "Lo que sucede después.",
      text: "Desplegar, observar y verificar. Que la compilación termine no demuestra que el recorrido publicado funcione.",
      code: "desplegar → observar → aprender",
    },
  ],
  en: [
    {
      name: "Interface",
      title: "What you see.",
      text: "Components, states and navigation. An interface also needs to work with a keyboard and when data does not arrive.",
      code: '<Interface state="loading" />',
    },
    {
      name: "Validation",
      title: "What you check.",
      text: "Types, builds and user journeys. Each test answers a specific failure; no test checks everything.",
      code: "change → build → tests",
    },
    {
      name: "Production",
      title: "What happens next.",
      text: "Deploy, observe and verify. A successful build does not prove that the published journey works.",
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
