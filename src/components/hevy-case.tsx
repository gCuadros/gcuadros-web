import { SiteLink } from "./site-link";
import { translator, localPath, type Locale } from "@/lib/i18n";
import { PageShell } from "./page-shell";
import { links } from "@/lib/portfolio";
import { siteUrl } from "@/lib/site";
import { JsonLd } from "./json-ld";

const source =
  "https://github.com/gCuadros/hevy-mcp/blob/c3a232630934cbe6c42c1a845b9da0d156bc9650";

export default function HevyCase({ locale }: { locale: Locale }) {
  const t = translator(locale);
  return (
    <PageShell locale={locale} path="/proyectos/hevy">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "SoftwareSourceCode",
          name: "Hevy Coach MCP",
          description: t(
            "Construí un servidor MCP que conecta un asistente de IA con mis entrenamientos en Hevy. El servidor calcula las métricas; el asistente trabaja con esos resultados para analizar el progreso.",
          ),
          codeRepository: links.hevy,
          programmingLanguage: "TypeScript",
          license: "https://opensource.org/licenses/MIT",
          url: `${siteUrl}${localPath(locale, "/proyectos/hevy")}`,
          author: { "@id": `${siteUrl}/#person`, name: "Gonzalo Cuadros" },
        }}
      />
      <article id="caso" className="case-study container">
        <p className="eyebrow">{t("Proyecto propio · Open source")}</p>
        <h1>{t("Hevy Coach MCP")}</h1>
        <p>
          {t(
            "Construí un servidor MCP que conecta un asistente de IA con mis entrenamientos en Hevy. El servidor calcula las métricas; el asistente trabaja con esos resultados para analizar el progreso.",
          )}{" "}
        </p>
        <div className="actions">
          <SiteLink locale={locale} className="button" href={links.hevy}>
            {t("Explorar el código")}{" "}
          </SiteLink>
          <SiteLink
            locale={locale}
            className="arrow-link"
            href={localPath(locale, "/blog/hevy-coach-mcp")}
          >
            {locale === "en" ? "Why I built it" : "Por qué lo construí"}{" "}
          </SiteLink>
        </div>
        <section aria-labelledby="problema">
          <h2 id="problema">
            {t("El problema: dar contexto fiable al asistente")}
          </h2>
          <p>
            {t(
              "Hevy guarda entrenamientos, rutinas y medidas corporales. Quería analizar ese historial con un asistente sin copiar los registros a mano ni dejarle hacer las cuentas. Usé Model Context Protocol (MCP) para conectar la conversación con herramientas que consultan la API y calculan progreso, volumen y constancia.",
            )}{" "}
          </p>
        </section>
        <section aria-labelledby="arquitectura">
          <h2 id="arquitectura">
            {t("La decisión: consultar y calcular antes de interpretar")}{" "}
          </h2>
          <p>
            {t(
              "El servidor consulta Hevy y realiza los cálculos. El cliente MCP recibe los resultados y los incorpora a la conversación. Así puedo comprobar las fórmulas por separado y distinguir el cálculo de la interpretación del asistente.",
            )}{" "}
          </p>
          <ul>
            <li>
              <strong>{t("API de Hevy:")}</strong>{" "}
              {t("entrenamientos, rutinas, ejercicios y medidas.")}{" "}
            </li>
            <li>
              <strong>{t("Servidor MCP:")}</strong>{" "}
              {t(
                "herramientas separadas para consultar registros, calcular métricas y modificar datos.",
              )}{" "}
            </li>
            <li>
              <strong>{t("Cliente MCP:")}</strong>{" "}
              {t(
                "conversación, interpretación y controles de autorización.",
              )}{" "}
            </li>
          </ul>
          <p>
            {t(
              "No hay una caché local ni una base de datos de entrenamientos. Así se evita mantener una segunda copia sincronizada. El compromiso es depender de la disponibilidad, latencia y límites de la API en cada consulta.",
            )}{" "}
          </p>
        </section>
        <section aria-labelledby="limites">
          <h2 id="limites">{t("Qué puede modificar el asistente")}</h2>
          <p>
            {t(
              "El proyecto permite crear y actualizar rutinas, crear carpetas y registrar medidas corporales. No escribe en el historial de entrenamientos, que es la base de los cálculos.",
            )}{" "}
          </p>
          <p>
            {t(
              "Las herramientas llevan indicaciones de lectura o escritura para el cliente MCP. Esas indicaciones ayudan al cliente a decidir cuándo pedir confirmación; no son, por sí solas, una garantía de consentimiento impuesta por el servidor.",
            )}{" "}
          </p>
          <p>
            {t(
              "La clave de Hevy no ofrece permisos granulares. Por eso es importante distinguir lo que permite la credencial de las operaciones que este servidor expone.",
            )}{" "}
          </p>
        </section>
        <section aria-labelledby="fallos">
          <h2 id="fallos">
            {t("Cuando una petición falla, pero el cambio ya está hecho")}{" "}
          </h2>
          <p>
            {t(
              "Un error HTTP no siempre significa que una operación no haya ocurrido. Si una creación llega a Hevy pero la respuesta falla, repetirla puede generar un duplicado. La integración no dispone de una operación de borrado para compensarlo. Esa restricción cambia cómo se preparan y ejecutan las escrituras.",
            )}{" "}
          </p>
          <ul>
            <li>
              <strong>
                {t("Resolver los ejercicios antes de crear la rutina.")}
              </strong>{" "}
              {t(
                "Al crear una rutina, primero se resuelven los nombres de todos sus ejercicios. Si uno es desconocido o ambiguo, la herramienta devuelve el problema y no envía una rutina incompleta.",
              )}{" "}
            </li>
            <li>
              <strong>
                {t("Distinguir entre leer y escribir al reintentar.")}
              </strong>{" "}
              {t(
                "El cliente permite reintentos acotados ante respuestas 5xx en lecturas, pero no en escrituras. Las respuestas 429 se tratan aparte. Se acepta devolver un error antes que arriesgar una creación duplicada.",
              )}{" "}
            </li>
            <li>
              <strong>{t("Leer antes de actualizar.")}</strong>{" "}
              {t(
                "Cuando la API reemplaza un registro completo, omitir campos puede borrarlos. La herramienta recupera el estado existente: preserva las medidas no indicadas y, al cambiar el título de una rutina, los descansos y rangos de repeticiones de sus ejercicios. Reemplazar explícitamente los ejercicios sigue siendo una operación destructiva.",
              )}{" "}
            </li>
          </ul>
          <p>
            {t(
              "La lectura y la escritura son operaciones separadas: otro cliente podría modificar el registro entre ambas. Estas comprobaciones reducen riesgos concretos, pero no garantizan que cada operación se ejecute exactamente una vez.",
            )}{" "}
          </p>
          <div className="actions">
            <SiteLink
              locale={locale}
              className="arrow-link"
              href={`${source}/src/tools/write.ts`}
            >
              {t("Ver la preparación de escrituras")}{" "}
            </SiteLink>
            <SiteLink
              locale={locale}
              className="arrow-link"
              href={`${source}/src/hevy/client.ts`}
            >
              {t("Ver la política de reintentos")}{" "}
            </SiteLink>
          </div>
        </section>
        <section aria-labelledby="calidad">
          <h2 id="calidad">
            {t("Ausencia de datos no significa progreso cero")}
          </h2>
          <p>
            {t(
              "El motor de cálculo recibe datos y devuelve resultados sin consultar la API. Esto permite comprobar fórmulas con entradas conocidas y mantener la interpretación fuera de la aritmética. Para estimar la repetición máxima, una serie sin peso o repeticiones válidas se excluye; si ninguna serie sirve, el resultado es nulo. Una sola medición de peso tampoco se convierte en una tendencia.",
            )}{" "}
          </p>
          <p>
            {t(
              "La alternativa de rellenar esos huecos con ceros produciría una respuesta más completa en apariencia, pero confundiría falta de información con un resultado medido. El asistente debe poder decir que no tiene datos suficientes.",
            )}{" "}
          </p>
          <p>
            {t(
              "Las pruebas cubren nombres ambiguos, conservación de campos, reintentos y series sin datos suficientes para calcular. Comprueban las reglas del servidor con entradas controladas; la disponibilidad de Hevy y las respuestas del asistente requieren comprobaciones aparte.",
            )}{" "}
          </p>
          <div className="actions">
            <SiteLink
              locale={locale}
              className="arrow-link"
              href={`${source}/src/tools/write.test.ts`}
            >
              {t("Revisar las pruebas de escritura")}{" "}
            </SiteLink>
            <SiteLink
              locale={locale}
              className="arrow-link"
              href={`${source}/src/engine/e1rm.test.ts`}
            >
              {t("Revisar las pruebas del cálculo")}{" "}
            </SiteLink>
          </div>
        </section>
        <section aria-labelledby="ejemplo">
          <h2 id="ejemplo">{t("Pruébalo con tu historial")}</h2>
          <p>
            {t(
              "Con una cuenta Hevy PRO y una clave API configurada en un cliente compatible, se puede empezar por comprobar la conexión y comparar dos periodos:",
            )}{" "}
          </p>
          <pre>
            {t(
              "Comprueba la conexión con Hevy. Compara el número de entrenamientos y el volumen de las últimas cuatro semanas con las cuatro anteriores. Explica qué datos has utilizado y qué no puedes concluir.",
            )}{" "}
          </pre>
          <p>
            {t(
              "Puedes adaptar esta consulta a tu historial. La guía del repositorio explica cómo conectar el servidor y qué herramientas tienes disponibles.",
            )}{" "}
          </p>
          <SiteLink
            locale={locale}
            className="arrow-link"
            href="https://github.com/gCuadros/hevy-mcp/blob/main/docs/CONNECTOR.md"
          >
            {t("Consultar la guía de conexión")}{" "}
          </SiteLink>
        </section>
        <section aria-labelledby="evidencia">
          <h2 id="evidencia">{t("Lo que quería resolver bien")}</h2>
          <p>
            {t(
              "Conectar una API externa con un asistente obliga a decidir dónde se hacen los cálculos, qué datos faltan y qué cambios se permiten. Esas decisiones están en el código y en las pruebas: son la parte del proyecto que más me interesa compartir.",
            )}{" "}
          </p>
          <p className="caption">
            {t(
              "Código y pruebas públicas revisados el 27 de septiembre de 2026. Los enlaces técnicos apuntan al commit c3a2326 para mantener verificables las decisiones descritas.",
            )}{" "}
          </p>
        </section>
        <div className="actions">
          <SiteLink
            locale={locale}
            className="button"
            href={localPath(locale, "/proyectos")}
          >
            {locale === "en" ? "Back to projects" : "Volver a proyectos"}{" "}
          </SiteLink>
          <SiteLink
            locale={locale}
            className="arrow-link"
            href={links.linkedin}
          >
            {t("Conectar en LinkedIn")}{" "}
          </SiteLink>
        </div>
      </article>
    </PageShell>
  );
}
