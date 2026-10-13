"use client";
import { useState } from "react";
import { localPath, type Locale } from "@/lib/i18n";
import { SiteLink } from "./site-link";
const content = {
  es: [
    {
      name: "Interfaz",
      context: "Esta web · Renderizado",
      title: "¿Renderizar en cada visita?",
      text: "Aquí el contenido cambia cuando publico. Genero las páginas al compilar y uso JavaScript para las interacciones, como este gráfico. Leer un artículo o cambiar de idioma funciona también sin JavaScript.",
      tradeoff:
        "El coste: para corregir una frase tengo que volver a desplegar. En este portfolio me compensa.",
      href: "/blog/nextjs-rendering-strategies",
      link: "Cómo elijo el renderizado",
    },
    {
      name: "Validación",
      context: "Esta web · Integración continua",
      title: "¿Qué demuestra un check verde?",
      text: "Compruebo que el menú funcione con teclado, que cada idioma descargue su CV y que el PDF coincida con su fuente. Son fallos que una compilación correcta puede dejar pasar.",
      tradeoff:
        "El límite: las pruebas de navegador cubren Chromium. Todavía reviso a mano la web publicada.",
      href: "/blog/cicd-frontend",
      link: "Qué comprueba mi CI",
    },
    {
      name: "Producción",
      context: "Hevy Coach · API externa",
      title: "¿Reintentar puede duplicar datos?",
      text: "Si crear una rutina devuelve un error 5xx, el cambio podría haberse guardado. Por eso el conector no repite esa escritura automáticamente; en las lecturas sí permite reintentos acotados.",
      tradeoff:
        "Acepto devolver un error que hay que investigar antes que arriesgar una rutina duplicada.",
      href: "/proyectos/hevy",
      link: "La decisión y el código de Hevy",
    },
  ],
  en: [
    {
      name: "Interface",
      context: "This site · Rendering",
      title: "Render on every visit?",
      text: "The content here changes when I publish. I generate pages at build time and use JavaScript for interactions such as this diagram. Reading an article or switching languages also works without JavaScript.",
      tradeoff:
        "The cost: fixing a sentence requires another deployment. For this portfolio, that is worth it.",
      href: "/blog/nextjs-rendering-strategies",
      link: "How I choose a rendering strategy",
    },
    {
      name: "Validation",
      context: "This site · Continuous integration",
      title: "What does a green check prove?",
      text: "I check that the menu works with a keyboard, each language downloads the right CV and the PDF matches its source. A successful build can miss all of these failures.",
      tradeoff:
        "The limit: browser tests cover Chromium. I still check the published site manually.",
      href: "/blog/cicd-frontend",
      link: "What my CI checks",
    },
    {
      name: "Production",
      context: "Hevy Coach · External API",
      title: "Could a retry duplicate data?",
      text: "If creating a routine returns a 5xx error, the change may already have been saved. The connector therefore does not retry that write automatically; reads can use bounded retries.",
      tradeoff:
        "I accept returning an error that needs investigating rather than risk creating a duplicate routine.",
      href: "/proyectos/hevy",
      link: "The decision and the Hevy code",
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
          ? "Explora tres decisiones técnicas"
          : "Explore three engineering decisions"
      }
      data-active={active}
    >
      <div className="explorer-heading">
        <span className="kicker">
          {locale === "es"
            ? "Decisiones, con contexto"
            : "Decisions in context"}
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
          href={localPath(locale, item.href)}
        >
          {item.link} <span aria-hidden="true">→</span>
        </SiteLink>
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
