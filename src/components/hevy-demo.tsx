"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n";
import {
  baseline,
  scenarios,
  bestEstimate,
  estimateSet,
} from "@/lib/hevy-demo";
import { SiteLink } from "./site-link";

export function HevyDemo({ locale }: { locale: Locale }) {
  const en = locale === "en";
  const [selected, setSelected] = useState(0);
  const scenario = scenarios[selected];
  const first = bestEstimate(baseline)!;
  const second = bestEstimate(scenario.sets);
  const change = second === null ? null : ((second - first) / first) * 100;
  const number = (n: number) =>
    new Intl.NumberFormat(en ? "en-GB" : "es-ES", {
      maximumFractionDigits: 1,
    }).format(n);
  const sessions = [baseline, scenario.sets];
  const names = en ? ["Session A", "Session B"] : ["Sesión A", "Sesión B"];
  const estimates = [first, second];

  return (
    <section className="hevy-demo" id="demo" aria-labelledby="demo-title">
      <div className="demo-heading">
        <p className="kicker">
          {en
            ? "Interactive example / Fictional data"
            : "Ejemplo interactivo / Datos ficticios"}
        </p>
        <h2 id="demo-title">
          {en
            ? "Where does that number come from?"
            : "¿De dónde sale ese número?"}
        </h2>
        <p>
          {en
            ? "“Has my bench press improved?” Inspect the records behind the answer. Then remove some data and see what can still be calculated."
            : "«¿He mejorado en press de banca?» Revisa los registros detrás de la respuesta. Después quita datos y observa qué se puede seguir calculando."}
        </p>
        <p className="demo-disclosure">
          {en
            ? "This example runs in your browser, without a Hevy connection or an AI model. It illustrates the project’s calculation rules."
            : "Este ejemplo se calcula en tu navegador, sin conexión a Hevy ni a un modelo de IA. Ilustra las reglas de cálculo del proyecto."}
        </p>
      </div>
      <div
        className="demo-controls"
        role="group"
        aria-label={en ? "Choose data scenario" : "Elegir escenario de datos"}
      >
        {scenarios.map((item, index) => (
          <button
            key={item.id}
            type="button"
            aria-pressed={selected === index}
            aria-controls="demo-result"
            onClick={() => setSelected(index)}
          >
            <span aria-hidden="true">0{index + 1}</span>
            {en ? item.en : item.es}
          </button>
        ))}
      </div>
      <div className="demo-result" id="demo-result" data-scenario={scenario.id}>
        <div className="demo-answer" aria-live="polite" aria-atomic="true">
          <p className="demo-result-label">
            {en
              ? "Change in estimated strength"
              : "Cambio en la fuerza estimada"}
          </p>
          <p className="demo-number">
            {change === null
              ? "—"
              : `${change > 0 ? "+" : ""}${number(change)} %`}
          </p>
          <p>
            {change === null
              ? en
                ? "Not enough data to compare. Missing values are not zeroes."
                : "No hay datos suficientes para comparar. Un dato ausente no es un cero."
              : selected === 1
                ? en
                  ? "The incomplete set is excluded. The result now uses only the two valid sets in session B."
                  : "La serie incompleta queda excluida. El resultado usa ahora solo las dos series válidas de la sesión B."
                : en
                  ? "The best estimate in session B is higher. This is a comparison of two sessions, not a long-term trend."
                  : "La mejor estimación de la sesión B es mayor. Es una comparación de dos sesiones, no una tendencia a largo plazo."}
          </p>
        </div>
        <div
          className="demo-chart"
          aria-label={
            en
              ? "Best estimated one-rep maximum by session"
              : "Mejor estimación de una repetición máxima por sesión"
          }
        >
          {estimates.map((value, i) => (
            <div className="demo-chart-row" key={names[i]}>
              <div>
                <span>{names[i]}</span>
                <strong>
                  {value === null
                    ? en
                      ? "No estimate"
                      : "Sin estimación"
                    : `${number(value)} kg`}
                </strong>
              </div>
              <div className="demo-track" aria-hidden="true">
                <div
                  style={{
                    width: value === null ? "0%" : `${value}%`,
                  }}
                />
              </div>
            </div>
          ))}
          <p>
            {en
              ? "Epley estimate (e1RM). Not a measured maximum or a recommended load."
              : "Estimación de Epley (e1RM). No es un máximo medido ni una carga recomendada."}
          </p>
        </div>
      </div>
      <details className="demo-evidence" open>
        <summary>
          {en
            ? "Inspect the data and calculation"
            : "Revisar los datos y el cálculo"}
        </summary>
        <div className="demo-tables">
          {sessions.map((sets, i) => (
            <table key={names[i]}>
              <caption>
                {names[i]} · {en ? "bench press" : "press de banca"}
              </caption>
              <thead>
                <tr>
                  <th scope="col">{en ? "Set" : "Serie"}</th>
                  <th scope="col">kg</th>
                  <th scope="col">Reps</th>
                  <th scope="col">e1RM</th>
                </tr>
              </thead>
              <tbody>
                {sets.map((set, index) => {
                  const value = estimateSet(set);
                  return (
                    <tr key={index} data-excluded={value === null || undefined}>
                      <th scope="row">{index + 1}</th>
                      <td>{set.weightKg ?? "—"}</td>
                      <td>{set.reps ?? "—"}</td>
                      <td>
                        {value === null
                          ? en
                            ? "Excluded"
                            : "Excluida"
                          : `${number(value)} kg`}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ))}
        </div>
        <div className="demo-formula">
          <p>
            <strong>Epley</strong> ·{" "}
            {en ? "weight × (1 + reps / 30)" : "peso × (1 + repeticiones / 30)"}
          </p>
          <p>
            {en
              ? "For example: 60 × (1 + 8 / 30) = 76 kg. We take the highest valid estimate from each session, then calculate (B − A) / A × 100. Values are rounded only for display."
              : "Por ejemplo: 60 × (1 + 8 / 30) = 76 kg. Tomamos la estimación válida más alta de cada sesión y calculamos (B − A) / A × 100. Solo redondeamos al mostrar los resultados."}
          </p>
          <SiteLink
            locale={locale}
            className="arrow-link"
            href="https://github.com/gCuadros/hevy-mcp/blob/c3a232630934cbe6c42c1a845b9da0d156bc9650/src/engine/e1rm.ts"
          >
            {en
              ? "See the project’s calculation"
              : "Ver el cálculo del proyecto"}
          </SiteLink>
        </div>
      </details>
      <noscript>
        <p>
          {en
            ? "Enable JavaScript to switch scenarios. The initial example and its calculations are shown above."
            : "Activa JavaScript para cambiar de escenario. Arriba puedes leer el ejemplo inicial y sus cálculos."}
        </p>
      </noscript>
    </section>
  );
}
