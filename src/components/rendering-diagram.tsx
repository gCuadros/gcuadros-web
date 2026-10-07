import type { Locale } from "@/lib/i18n";

// One loop, four strategies: the same request, and where the HTML gets made.
const rows = [
  { id: "ssg", es: "en el build", en: "at build" },
  { id: "ssr", es: "en cada petición", en: "per request" },
  { id: "isr", es: "build + revalidación", en: "build + revalidate" },
  { id: "csr", es: "en el navegador", en: "in the browser" },
] as const;

export function RenderingDiagram({ locale }: { locale: Locale }) {
  const en = locale === "en";
  return (
    <figure className="render-diagram">
      <div
        className="render-grid"
        role="img"
        aria-label={
          en
            ? "Animation: with SSG and ISR the HTML is generated at build time and served from cache, and ISR regenerates it in the background; with SSR the server generates it on every request; with CSR the browser receives an empty page and fills it with JavaScript."
            : "Animación: en SSG e ISR el HTML se genera en el build y se sirve desde caché, e ISR lo regenera en segundo plano; en SSR el servidor lo genera en cada petición; en CSR el navegador recibe una página vacía y la completa con JavaScript."
        }
      >
        <span />
        <span className="render-column">Build</span>
        <span className="render-column">{en ? "Server" : "Servidor"}</span>
        <span className="render-column">{en ? "Browser" : "Navegador"}</span>
        {rows.map((row) => (
          <div key={row.id} className={`render-row render-${row.id}`}>
            <p>
              <strong>{row.id.toUpperCase()}</strong>
              <small>{en ? row.en : row.es}</small>
            </p>
            <div className="render-track">
              <i />
              <i />
              <i />
              <b className="render-work" />
              {row.id === "isr" && (
                <>
                  <b className="render-work render-revalidate" />
                  <b className="render-page render-fresh" />
                </>
              )}
              {row.id === "ssr" && <b className="render-request" />}
              <b className="render-page" />
            </div>
          </div>
        ))}
      </div>
      <figcaption className="caption">
        {en
          ? "The ring marks rendering work; the block is the page on its way to the user."
          : "El anillo marca el trabajo de renderizado; el bloque es la página camino del usuario."}
      </figcaption>
    </figure>
  );
}
