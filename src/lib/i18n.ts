export type Locale = "es" | "en";

const english: Record<string, string> = {
  Notas: "Notes",
  Ahora: "Now",
  "Frontend Tech Lead en MANGO": "Frontend Tech Lead at MANGO",
  "Dónde he trabajado": "Where I’ve worked",
  "Saltar al contenido": "Skip to content",
  "Conectar en LinkedIn": "Connect on LinkedIn",
  "Gonzalo Cuadros": "Gonzalo Cuadros",
  LinkedIn: "LinkedIn",
  GitHub: "GitHub",
  "©": "©",
  "↗": "↗",
  Trabajo: "Work",
  "Arquitectura frontend": "Frontend architecture",
  Contexto: "Context",
  Decisiones: "Decisions",
  Validación: "Validation",
  Aprendizaje: "Learning",
  "DevOps aplicado al frontend": "DevOps for frontend",
  Revisión: "Review",
  Despliegue: "Deployment",
  "Liderazgo técnico": "Technical leadership",
  Trayectoria: "Experience",
  "Descargar CV (PDF)": "Download CV (PDF)",
  "Ver mi perfil en LinkedIn": "View my LinkedIn profile",
  Formación: "Education",
  "Máster en DevOps & Cloud · UNIR · 2025–2026":
    "Master’s in DevOps & Cloud · UNIR · 2025–2026",
  "Computer Software Engineering · UOC · 2012–2018":
    "Computer Software Engineering · UOC · 2012–2018",
  "Full Stack Development Bootcamp · Codespace Academy · 2018–2019":
    "Full Stack Development Bootcamp · Codespace Academy · 2018–2019",
  "Web/Multimedia Management and Webmaster · Cesur · 2010–2012":
    "Web/Multimedia Management and Webmaster · Cesur · 2010–2012",
  "Proyecto propio · Open source": "Personal project · Open source",
  "Hevy Coach MCP": "Hevy Coach MCP",
  Charlas: "Talks",
  "Ponente · MANGO": "Speaker · MANGO",
  "Fabrics 2025": "Fabrics 2025",
  Conectemos: "Let’s connect",
  "Construí un servidor MCP que conecta un asistente de IA con mis entrenamientos en Hevy. El servidor calcula las métricas; el asistente trabaja con esos resultados para analizar el progreso.":
    "I built an MCP server that connects an AI assistant to my workouts in Hevy. The server calculates the metrics; the assistant uses those results to analyse progress.",
  "Explorar el código": "Explore the code",
  "El problema: dar contexto fiable al asistente":
    "The problem: giving the assistant reliable context",
  "Hevy guarda entrenamientos, rutinas y medidas corporales. Quería analizar ese historial con un asistente sin copiar los registros a mano ni dejarle hacer las cuentas. Usé Model Context Protocol (MCP) para conectar la conversación con herramientas que consultan la API y calculan progreso, volumen y constancia.":
    "Hevy stores workouts, routines and body measurements. I wanted to analyse that history with an assistant without copying records by hand or relying on it to do the maths. I used Model Context Protocol (MCP) to connect the conversation to tools that query the API and calculate progress, volume and consistency.",
  "La decisión: consultar y calcular antes de interpretar":
    "The decision: query and calculate before interpreting",
  "El servidor consulta Hevy y realiza los cálculos. El cliente MCP recibe los resultados y los incorpora a la conversación. Así puedo comprobar las fórmulas por separado y distinguir el cálculo de la interpretación del asistente.":
    "The server queries Hevy and performs the calculations. The MCP client receives the results and brings them into the conversation. This lets me check the formulas independently and distinguish the calculation from the assistant’s interpretation.",
  "API de Hevy:": "Hevy API:",
  "entrenamientos, rutinas, ejercicios y medidas.":
    "workouts, routines, exercises and measurements.",
  "Servidor MCP:": "MCP server:",
  "herramientas separadas para consultar registros, calcular métricas y modificar datos.":
    "separate tools for reading records, calculating metrics and making changes.",
  "Cliente MCP:": "MCP client:",
  "conversación, interpretación y controles de autorización.":
    "conversation, interpretation and authorisation controls.",
  "No hay una caché local ni una base de datos de entrenamientos. Así se evita mantener una segunda copia sincronizada. El compromiso es depender de la disponibilidad, latencia y límites de la API en cada consulta.":
    "There is no local cache or workout database, avoiding a second copy that needs synchronisation. The trade-off is depending on the API’s availability, latency and limits for every query.",
  "Qué puede modificar el asistente": "What the assistant can change",
  "El proyecto permite crear y actualizar rutinas, crear carpetas y registrar medidas corporales. No escribe en el historial de entrenamientos, que es la base de los cálculos.":
    "The project can create and update routines, create folders and log body measurements. It does not write to workout history, which is the basis of its calculations.",
  "Las herramientas llevan indicaciones de lectura o escritura para el cliente MCP. Esas indicaciones ayudan al cliente a decidir cuándo pedir confirmación; no son, por sí solas, una garantía de consentimiento impuesta por el servidor.":
    "Tools carry read or write annotations for the MCP client. These help the client decide when to ask for confirmation; they are not, by themselves, a server-enforced guarantee of consent.",
  "La clave de Hevy no ofrece permisos granulares. Por eso es importante distinguir lo que permite la credencial de las operaciones que este servidor expone.":
    "Hevy API keys do not offer granular permissions. It is therefore important to distinguish what the credential allows from the operations this server exposes.",
  "Cuando una petición falla, pero el cambio ya está hecho":
    "When a failed request may have succeeded",
  "Un error HTTP no siempre significa que una operación no haya ocurrido. Si una creación llega a Hevy pero la respuesta falla, repetirla puede generar un duplicado. La integración no dispone de una operación de borrado para compensarlo. Esa restricción cambia cómo se preparan y ejecutan las escrituras.":
    "An HTTP error does not always mean an operation did not happen. If a creation reaches Hevy but the response fails, repeating it can create a duplicate. The integration has no delete operation to compensate for this. That constraint changes how writes are prepared and executed.",
  "Resolver los ejercicios antes de crear la rutina.":
    "Resolve exercise names before creating a routine.",
  "Al crear una rutina, primero se resuelven los nombres de todos sus ejercicios. Si uno es desconocido o ambiguo, la herramienta devuelve el problema y no envía una rutina incompleta.":
    "When creating a routine, all exercise names are resolved first. If one is unknown or ambiguous, the tool returns the problem without sending an incomplete routine.",
  "Distinguir entre leer y escribir al reintentar.":
    "Use different retry rules for reads and writes.",
  "El cliente permite reintentos acotados ante respuestas 5xx en lecturas, pero no en escrituras. Las respuestas 429 se tratan aparte. Se acepta devolver un error antes que arriesgar una creación duplicada.":
    "The client allows bounded retries for 5xx responses on reads, but not on writes. It handles 429 responses separately. Returning an error is preferable to risking a duplicate creation.",
  "Leer antes de actualizar.": "Read before updating.",
  "Cuando la API reemplaza un registro completo, omitir campos puede borrarlos. La herramienta recupera el estado existente: preserva las medidas no indicadas y, al cambiar el título de una rutina, los descansos y rangos de repeticiones de sus ejercicios. Reemplazar explícitamente los ejercicios sigue siendo una operación destructiva.":
    "When the API replaces an entire record, omitting fields can erase them. The tool retrieves the existing state: it preserves unspecified measurements and, when renaming a routine, its exercises’ rest times and rep ranges. Explicitly replacing the exercises remains a destructive operation.",
  "La lectura y la escritura son operaciones separadas: otro cliente podría modificar el registro entre ambas. Estas comprobaciones reducen riesgos concretos, pero no garantizan que cada operación se ejecute exactamente una vez.":
    "Reading and writing are separate operations: another client could change the record between them. These checks reduce specific risks, but do not guarantee that each operation runs exactly once.",
  "Ver la preparación de escrituras": "See write preparation",
  "Ver la política de reintentos": "See the retry policy",
  "Ausencia de datos no significa progreso cero":
    "Missing data does not mean zero progress",
  "El motor de cálculo recibe datos y devuelve resultados sin consultar la API. Esto permite comprobar fórmulas con entradas conocidas y mantener la interpretación fuera de la aritmética. Para estimar la repetición máxima, una serie sin peso o repeticiones válidas se excluye; si ninguna serie sirve, el resultado es nulo. Una sola medición de peso tampoco se convierte en una tendencia.":
    "The calculation engine receives data and returns results without calling the API. This makes it possible to check formulas against known inputs and keep interpretation separate from arithmetic. To estimate one-rep max, sets without valid weight or reps are excluded; if no set qualifies, the result is null. A single bodyweight measurement does not become a trend either.",
  "La alternativa de rellenar esos huecos con ceros produciría una respuesta más completa en apariencia, pero confundiría falta de información con un resultado medido. El asistente debe poder decir que no tiene datos suficientes.":
    "Filling these gaps with zeros would produce a seemingly more complete answer, but would confuse missing information with a measured result. The assistant must be able to say it has insufficient data.",
  "Las pruebas cubren nombres ambiguos, conservación de campos, reintentos y series sin datos suficientes para calcular. Comprueban las reglas del servidor con entradas controladas; la disponibilidad de Hevy y las respuestas del asistente requieren comprobaciones aparte.":
    "The tests cover ambiguous names, field preservation, retries and sets without enough valid data for a calculation. They check the server’s rules against controlled inputs; Hevy’s availability and the assistant’s responses need separate checks.",
  "Revisar las pruebas de escritura": "Review the write tests",
  "Revisar las pruebas del cálculo": "Review the calculation tests",
  "Pruébalo con tu historial": "Try it with your workout history",
  "Con una cuenta Hevy PRO y una clave API configurada en un cliente compatible, se puede empezar por comprobar la conexión y comparar dos periodos:":
    "With a Hevy PRO account and an API key configured in a compatible client, you can start by checking the connection and comparing two periods:",
  "Comprueba la conexión con Hevy. Compara el número de entrenamientos y el volumen de las últimas cuatro semanas con las cuatro anteriores. Explica qué datos has utilizado y qué no puedes concluir.":
    "Check the connection to Hevy. Compare workout count and volume over the last four weeks with the previous four. Explain which data you used and what you cannot conclude.",
  "Puedes adaptar esta consulta a tu historial. La guía del repositorio explica cómo conectar el servidor y qué herramientas tienes disponibles.":
    "You can adapt this query to your own history. The repository guide explains how to connect the server and which tools are available.",
  "Consultar la guía de conexión": "Read the connection guide",
  "Lo que quería resolver bien": "What I wanted to get right",
  "Conectar una API externa con un asistente obliga a decidir dónde se hacen los cálculos, qué datos faltan y qué cambios se permiten. Esas decisiones están en el código y en las pruebas: son la parte del proyecto que más me interesa compartir.":
    "Connecting an external API to an assistant means deciding where calculations happen, how to handle missing data and which changes to allow. Those decisions are in the code and tests: they are the part of this project I most want to share.",
  "Código y pruebas públicas revisados el 27 de septiembre de 2026. Los enlaces técnicos apuntan al commit c3a2326 para mantener verificables las decisiones descritas.":
    "Public code and tests reviewed on 27 September 2026. Technical links point to commit c3a2326 so the decisions described remain verifiable.",
  "Gonzalo Cuadros, inicio": "Gonzalo Cuadros, home",
  "Navegación principal": "Main navigation",
  Conectar: "Connect",
  Proyecto: "Project",
  MANGO: "MANGO",
  "Liderazgo técnico y mentoría. Decisiones de arquitectura compartidas con otros Tech Leads, evolución de plataformas y DevOps aplicado al frontend.":
    "Technical leadership and mentoring. Architectural decisions shared with other Tech Leads, platform development and DevOps for frontend.",
  "Frontend Tech Lead": "Frontend Tech Lead",
  "ene. 2025 — actualidad": "Jan 2025 — present",
  "GFT · proyecto MANGO": "GFT · MANGO project",
  "De Senior a Tech Lead en el proyecto MANGO: desarrollo frontend y evolución de la plataforma, con definición de estándares y prioridades técnicas.":
    "From Senior Engineer to Tech Lead on the MANGO project: frontend development and platform evolution, defining standards and technical priorities.",
  "jul. 2024 — ene. 2025": "Jul 2024 — Jan 2025",
  "Senior Frontend Engineer": "Senior Frontend Engineer",
  "jun. 2023 — jul. 2024": "Jun 2023 — Jul 2024",
  Wuolah: "Wuolah",
  "De Senior a Tech Lead: migración a Next.js y TypeScript, gestión de datos con React Query y unificación de repositorios con Turborepo.":
    "From Senior Engineer to Tech Lead: migration to Next.js and TypeScript, data management with React Query, and repository consolidation with Turborepo.",
  "Tech Lead, Front End": "Tech Lead, Front End",
  "ene. 2023 — jun. 2023": "Jan 2023 — Jun 2023",
  "Senior Frontend Developer": "Senior Frontend Developer",
  "jul. 2022 — ene. 2023": "Jul 2022 — Jan 2023",
  Freepik: "Freepik",
  "Migración a Next.js y de JavaScript a TypeScript. Gestión de despliegues e infraestructura en GCP, incluidos entornos sandbox.":
    "Migration to Next.js and from JavaScript to TypeScript. Deployment and infrastructure management on GCP, including sandbox environments.",
  "Frontend Developer": "Frontend Developer",
  "jul. 2020 — jul. 2022": "Jul 2020 — Jul 2022",
  "Cash Converters España": "Cash Converters España",
  "Desarrollo frontend y participación en UX/UI con React y Redux, Angular y NgRx, Sass y Salesforce Commerce Cloud.":
    "Frontend development and UX/UI contributions with React and Redux, Angular and NgRx, Sass and Salesforce Commerce Cloud.",
  "mar. 2019 — jul. 2020": "Mar 2019 — Jul 2020",
  Arquitectura: "Architecture",
  Producción: "Production",
  Equipos: "Teams",
  Asistente: "Assistant",
};

export function translator(locale: Locale) {
  return (text: string) => (locale === "en" ? (english[text] ?? text) : text);
}

export function localPath(locale: Locale, path = "/") {
  return locale === "en" ? `/en${path === "/" ? "" : path}` : path;
}
