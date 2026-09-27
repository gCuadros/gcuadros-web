import type { Metadata } from "next";
import Link from "next/link";
import { links } from "@/lib/portfolio";

const source =
  "https://github.com/gCuadros/hevy-mcp/blob/c3a232630934cbe6c42c1a845b9da0d156bc9650";

const title =
  "Hevy Coach MCP: datos reales para un asistente | Gonzalo Cuadros";
const description =
  "Un servidor MCP para consultar entrenamientos, calcular progreso y gestionar rutinas: arquitectura, compromisos y límites del proyecto.";
export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, type: "article", locale: "es_ES" },
  twitter: { card: "summary_large_image", title, description },
};

export default function HevyCase() {
  return (
    <>
      <a className="skip-link" href="#caso">
        Saltar al contenido
      </a>
      <header className="site-header container">
        <Link className="brand" href="/">
          Gonzalo Cuadros
        </Link>
        <Link className="arrow-link" href="/#proyecto">
          Volver al portfolio
        </Link>
      </header>
      <main id="caso" tabIndex={-1} className="case-study container">
        <p className="eyebrow">Proyecto propio · Open source</p>
        <h1>Hevy Coach MCP</h1>
        <p>
          Conectar un asistente con el registro de entrenamiento para que pueda
          trabajar con datos reales y cálculos explícitos, en lugar de estimar
          el progreso a partir de una conversación.
        </p>
        <div className="actions">
          <a className="button" href={links.hevy}>
            Explorar el código
          </a>
          <a className="arrow-link" href={links.hevyPost}>
            Ver la presentación
          </a>
        </div>
        <section aria-labelledby="problema">
          <h2 id="problema">El problema: dar contexto fiable al asistente</h2>
          <p>
            Los entrenamientos, las rutinas y las medidas están en Hevy. Para
            analizarlos en una conversación hace falta conectar ese historial y
            convertirlo en información comparable. Construí un servidor MCP que
            consulta la API de Hevy y calcula métricas de progreso, volumen y
            constancia.
          </p>
        </section>
        <section aria-labelledby="arquitectura">
          <h2 id="arquitectura">
            La decisión: consultar y calcular antes de interpretar
          </h2>
          <p>
            El servidor obtiene los datos en vivo y realiza los cálculos; el
            cliente MCP recibe los resultados para elaborar una respuesta. Esta
            separación hace explícita la diferencia entre una métrica calculada
            y la interpretación del asistente.
          </p>
          <ul>
            <li>
              <strong>API de Hevy:</strong> entrenamientos, rutinas, ejercicios
              y medidas.
            </li>
            <li>
              <strong>Servidor MCP:</strong> herramientas de consulta, cálculo y
              escritura con responsabilidades separadas.
            </li>
            <li>
              <strong>Cliente compatible:</strong> conversación, interpretación
              y controles de autorización.
            </li>
          </ul>
          <p>
            No hay una caché local ni una base de datos de entrenamientos. Así
            se evita mantener una segunda copia sincronizada. El compromiso es
            depender de la disponibilidad, latencia y límites de la API en cada
            consulta.
          </p>
        </section>
        <section aria-labelledby="limites">
          <h2 id="limites">Los límites de escritura forman parte del diseño</h2>
          <p>
            El proyecto permite crear y actualizar rutinas, crear carpetas y
            registrar medidas corporales. No escribe en el historial de
            entrenamientos, que es la base de los cálculos.
          </p>
          <p>
            Las herramientas llevan indicaciones de lectura o escritura para el
            cliente MCP. Esas indicaciones ayudan al cliente a decidir cuándo
            pedir confirmación; no son, por sí solas, una garantía de
            consentimiento impuesta por el servidor.
          </p>
          <p>
            La clave de Hevy no ofrece permisos granulares. Por eso es
            importante distinguir lo que permite la credencial de las
            operaciones que este servidor expone.
          </p>
        </section>
        <section aria-labelledby="fallos">
          <h2 id="fallos">
            Diseñar para una escritura que no se puede deshacer
          </h2>
          <p>
            Un error HTTP no siempre significa que una operación no haya
            ocurrido. Si una creación llega a Hevy pero la respuesta falla,
            repetirla puede generar un duplicado. La integración no dispone de
            una operación de borrado para compensarlo. Esa restricción cambia
            cómo se preparan y ejecutan las escrituras.
          </p>
          <ul>
            <li>
              <strong>Resolver antes de enviar.</strong> Al crear una rutina,
              primero se resuelven los nombres de todos sus ejercicios. Si uno
              es desconocido o ambiguo, la herramienta devuelve el problema y no
              envía una rutina incompleta.
            </li>
            <li>
              <strong>Reintentar según la operación.</strong> El cliente permite
              reintentos acotados ante respuestas 5xx en lecturas, pero no en
              escrituras. Las respuestas 429 se tratan aparte. Se acepta
              devolver un error antes que arriesgar una creación duplicada.
            </li>
            <li>
              <strong>Leer antes de actualizar.</strong> Cuando la API reemplaza
              un registro completo, omitir campos puede borrarlos. La
              herramienta recupera el estado existente: preserva las medidas no
              indicadas y, al cambiar el título de una rutina, los descansos y
              rangos de repeticiones de sus ejercicios. Reemplazar
              explícitamente los ejercicios sigue siendo una operación
              destructiva.
            </li>
          </ul>
          <p>
            Son defensas frente a fallos concretos, no una transacción
            distribuida ni una garantía de ejecución exactamente una vez. Una
            modificación concurrente entre la lectura y la escritura sigue
            siendo un límite de este enfoque.
          </p>
          <div className="actions">
            <a className="arrow-link" href={`${source}/src/tools/write.ts`}>
              Ver la preparación de escrituras
            </a>
            <a className="arrow-link" href={`${source}/src/hevy/client.ts`}>
              Ver la política de reintentos
            </a>
          </div>
        </section>
        <section aria-labelledby="calidad">
          <h2 id="calidad">Ausencia de datos no significa progreso cero</h2>
          <p>
            El motor de cálculo recibe datos y devuelve resultados sin consultar
            la API. Esto permite comprobar fórmulas con entradas conocidas y
            mantener la interpretación fuera de la aritmética. Para estimar la
            repetición máxima, una serie sin peso o repeticiones válidas se
            excluye; si ninguna serie sirve, el resultado es nulo. Una sola
            medición de peso tampoco se convierte en una tendencia.
          </p>
          <p>
            La alternativa de rellenar esos huecos con ceros produciría una
            respuesta más completa en apariencia, pero confundiría falta de
            información con un resultado medido. El asistente debe poder decir
            que no tiene datos suficientes.
          </p>
          <p>
            Las pruebas públicas incluyen nombres ambiguos que no producen
            escrituras, conservación de campos al actualizar, creaciones
            fallidas que no se repiten y series que no pueden puntuarse. Estas
            pruebas comprueban reglas del servidor con datos controlados; no
            demuestran por sí solas la disponibilidad de Hevy ni la calidad de
            las respuestas de un modelo.
          </p>
          <div className="actions">
            <a
              className="arrow-link"
              href={`${source}/src/tools/write.test.ts`}
            >
              Revisar las pruebas de escritura
            </a>
            <a
              className="arrow-link"
              href={`${source}/src/engine/e1rm.test.ts`}
            >
              Revisar las pruebas del cálculo
            </a>
          </div>
        </section>
        <section aria-labelledby="ejemplo">
          <h2 id="ejemplo">Una forma de comprobarlo</h2>
          <p>
            Con una cuenta Hevy PRO y una clave API configurada en un cliente
            compatible, se puede empezar por comprobar la conexión y comparar
            dos periodos:
          </p>
          <pre>
            Comprueba la conexión con Hevy. Compara el número de entrenamientos
            y el volumen de las últimas cuatro semanas con las cuatro
            anteriores. Explica qué datos has utilizado y qué no puedes
            concluir.
          </pre>
          <p>
            Es una propuesta de consulta, no una captura de un resultado real.
            El repositorio incluye las instrucciones de conexión, las
            herramientas disponibles y sus límites.
          </p>
          <a
            className="arrow-link"
            href="https://github.com/gCuadros/hevy-mcp/blob/main/docs/CONNECTOR.md"
          >
            Consultar la guía de conexión
          </a>
        </section>
        <section aria-labelledby="evidencia">
          <h2 id="evidencia">Qué demuestra este proyecto</h2>
          <p>
            Una integración entre una API externa y clientes de IA, con cálculos
            separados de la conversación y un alcance de escritura delimitado.
            El resultado verificable es el código y su documentación pública; no
            se presentan métricas de adopción ni mejoras deportivas no medidas.
          </p>
          <p className="caption">
            Código y pruebas públicas revisados el 27 de septiembre de 2026. Los
            enlaces técnicos apuntan al commit c3a2326 para mantener
            verificables las decisiones descritas.
          </p>
        </section>
        <div className="actions">
          <Link className="button" href="/#proyecto">
            Volver al portfolio
          </Link>
          <a className="arrow-link" href={links.linkedin}>
            Conectar en LinkedIn
          </a>
        </div>
      </main>
    </>
  );
}
