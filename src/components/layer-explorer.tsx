"use client";
import { useState } from "react";
import type { Locale } from "@/lib/i18n";
const content = {
  es: [
    {
      name: "Interfaz",
      title: "Pensar en quien la usa.",
      text: "Disfruto convirtiendo requisitos en interfaces que se entienden. Me fijo también en lo que ocurre cuando toca esperar, algo falla o se navega solo con teclado.",
      code: '<Interfaz estado="cargando" />',
    },
    {
      name: "Validación",
      title: "Facilitar el trabajo al equipo.",
      text: "Pienso también en quien tocará el código después. Busco que las pruebas expliquen qué debe funcionar y que la automatización quite trabajo repetitivo al equipo.",
      code: "cambio → build → pruebas",
    },
    {
      name: "Producción",
      title: "Entender qué pasa en producción.",
      text: "Me interesa cómo llega un cambio a producción y qué ocurre después. Automatizar despliegues y observar la aplicación me ayuda a detectar problemas y decidir qué mejorar.",
      code: "desplegar → observar → aprender",
    },
  ],
  en: [
    {
      name: "Interface",
      title: "Think about the person using it.",
      text: "I enjoy turning requirements into interfaces that make sense. I also care about what happens when someone has to wait, something fails or they navigate using only a keyboard.",
      code: '<Interface state="loading" />',
    },
    {
      name: "Validation",
      title: "Make the team’s work easier.",
      text: "I think about whoever works on the code next. I want tests to explain what should work and automation to take repetitive tasks off the team’s hands.",
      code: "change → build → tests",
    },
    {
      name: "Production",
      title: "Understand what happens in production.",
      text: "I’m interested in how a change reaches production and what happens afterwards. Automating deployments and observing the application helps me spot problems and decide what to improve.",
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
          ? "Explora cómo me gusta trabajar"
          : "Explore how I like to work"
      }
      data-active={active}
    >
      <div className="explorer-heading">
        <span className="kicker">
          {locale === "es" ? "Cómo me gusta trabajar" : "How I like to work"}
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
