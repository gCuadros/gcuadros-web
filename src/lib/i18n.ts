export type Locale = "es" | "en";

const english: Record<string, string> = {
  "Saltar al contenido": "Skip to content",
  "Gonzalo Cuadros · Frontend Tech Lead en MANGO":
    "Gonzalo Cuadros · Frontend Tech Lead at MANGO",
  "Arquitectura frontend.": "Frontend architecture.",
  "De las decisiones a producción.": "From decisions to production.",
  "Trabajo en arquitectura frontend y DevOps, y acompaño a equipos de desarrollo desde el liderazgo técnico. Comparto decisiones de arquitectura y ayudo a convertirlas en soluciones mantenibles.":
    "I work on frontend architecture and DevOps, supporting development teams through technical leadership. I share architectural decisions and help turn them into maintainable solutions.",
  "Explorar mi trabajo": "Explore my work",
  "Conectar en LinkedIn": "Connect on LinkedIn",
  "Madrid, España": "Madrid, Spain",
  "Gonzalo Cuadros": "Gonzalo Cuadros",
  "Enlaces sociales": "Social links",
  LinkedIn: "LinkedIn",
  GitHub: "GitHub",
  "©": "©",
  "· Madrid, España": "· Madrid, Spain",
  "↗": "↗",
  Trabajo: "Work",
  "Plataformas, producción y equipos": "Platforms, production and teams",
  "Arquitectura frontend": "Frontend architecture",
  "Participo en decisiones compartidas de arquitectura y evolución de plataformas frontend, con foco en mantenibilidad, rendimiento y experiencia de desarrollo.":
    "I contribute to shared architectural decisions and the evolution of frontend platforms, focusing on maintainability, performance and developer experience.",
  "Esquema conceptual": "Conceptual diagram",
  Contexto: "Context",
  Decisiones: "Decisions",
  Validación: "Validation",
  Aprendizaje: "Learning",
  "DevOps aplicado al frontend": "DevOps for frontend",
  "Trabajo en automatización, integración y entrega continua de frontend. Despliegues y observabilidad forman parte de mi enfoque para conectar el desarrollo con la operación.":
    "I work on frontend automation, continuous integration and delivery. Deployment and observability are part of how I connect development with operations.",
  Revisión: "Review",
  Despliegue: "Deployment",
  "CI/CD de frontend": "Frontend CI/CD",
  "Liderazgo técnico": "Technical leadership",
  "Acompaño a equipos de desarrollo mediante mentoría, 1:1 y feedback, y participo en entrevistas y planes de desarrollo.":
    "I support development teams through mentoring, one-to-ones and feedback, and contribute to interviews and development plans.",
  "Mentoría · Feedback · Decisiones compartidas":
    "Mentoring · Feedback · Shared decisions",
  Trayectoria: "Experience",
  "Una trayectoria construyendo frontend": "A career building frontend",
  "Descargar CV (PDF)": "Download CV (PDF, Spanish)",
  "Trayectoria completa en LinkedIn": "Full experience on LinkedIn",
  Formación: "Education",
  "Máster en DevOps & Cloud · UNIR · 2025–2026":
    "Master’s in DevOps & Cloud · UNIR · 2025–2026",
  "Computer Software Engineering · UOC · 2012–2018":
    "Computer Software Engineering · UOC · 2012–2018",
  "Full Stack Development Bootcamp · Code Space · 2018–2019":
    "Full Stack Development Bootcamp · Code Space · 2018–2019",
  "Web/Multimedia Management and Webmaster · Cesur · 2010–2012":
    "Web/Multimedia Management and Webmaster · Cesur · 2010–2012",
  "Proyecto propio · Open source": "Personal project · Open source",
  "Hevy Coach MCP": "Hevy Coach MCP",
  "Construí un servidor MCP que conecta los datos de entrenamiento de Hevy con asistentes de IA para analizar el progreso y gestionar rutinas. Lee entrenamientos y rutinas, calcula métricas de progreso, y puede crear rutinas y registrar peso corporal.":
    "I built an MCP server that connects Hevy training data with AI assistants to analyse progress and manage routines. It reads workouts and routines, calculates progress metrics, and can create routines and log bodyweight.",
  "Sin caché ni base de datos: cada consulta llama en vivo a la API de Hevy para razonar sobre datos actuales. Las herramientas de lectura y escritura están declaradas por separado para que el cliente MCP pueda aplicar sus controles de confirmación.":
    "No cache or database: every query calls the Hevy API live to work with current data. Read and write tools are declared separately so the MCP client can apply its confirmation controls.",
  "Ver código en GitHub": "View code on GitHub",
  "Leer el caso técnico": "Read the technical case study",
  "Cómo funciona": "How it works",
  Charlas: "Talks",
  "Compartir lo que aprendo": "Sharing what I learn",
  "Live coding · Garaje de ideas": "Live coding · Garaje de ideas",
  "Estrategias en Next.js": "Rendering strategies in Next.js",
  "Estrategias de renderizado y streaming para mejorar el rendimiento y la experiencia de usuario.":
    "Rendering strategies and streaming to improve performance and user experience.",
  "Ver sesión": "Watch session (Spanish)",
  "Ponente · MANGO": "Speaker · MANGO",
  "Fabrics 2025": "Fabrics 2025",
  "Ver publicación": "View post",
  "Entre junio de 2023 y agosto de 2024 colaboré como docente en Codespace Academy, diseñando e impartiendo sesiones desde fundamentos de frontend hasta técnicas avanzadas con Next.js.":
    "From June 2023 to August 2024, I taught at Codespace Academy, designing and delivering sessions from frontend fundamentals to advanced Next.js techniques.",
  Conectemos: "Let’s connect",
  "Hablemos de plataformas y equipos": "Let’s talk platforms and teams",
  "Si estás trabajando en arquitectura frontend, DevOps o liderazgo técnico, podemos conversar.":
    "If you work on frontend architecture, DevOps or technical leadership, let’s talk.",
  "Volver al portfolio": "Back to portfolio",
  "Conectar un asistente con el registro de entrenamiento para que pueda trabajar con datos reales y cálculos explícitos, en lugar de estimar el progreso a partir de una conversación.":
    "Connecting an assistant to a training log so it can work with real data and explicit calculations, instead of estimating progress from a conversation.",
  "Explorar el código": "Explore the code",
  "Ver la presentación": "View the introduction",
  "El problema: dar contexto fiable al asistente":
    "The problem: giving the assistant reliable context",
  "Los entrenamientos, las rutinas y las medidas están en Hevy. Para analizarlos en una conversación hace falta conectar ese historial y convertirlo en información comparable. Construí un servidor MCP que consulta la API de Hevy y calcula métricas de progreso, volumen y constancia.":
    "Workouts, routines and measurements live in Hevy. Analysing them in a conversation requires connecting that history and turning it into comparable information. I built an MCP server that queries the Hevy API and calculates progress, volume and consistency metrics.",
  "La decisión: consultar y calcular antes de interpretar":
    "The decision: query and calculate before interpreting",
  "El servidor obtiene los datos en vivo y realiza los cálculos; el cliente MCP recibe los resultados para elaborar una respuesta. Esta separación hace explícita la diferencia entre una métrica calculada y la interpretación del asistente.":
    "The server retrieves live data and performs the calculations; the MCP client receives the results to compose a response. This separation makes the distinction between a calculated metric and the assistant’s interpretation explicit.",
  "API de Hevy:": "Hevy API:",
  "entrenamientos, rutinas, ejercicios y medidas.":
    "workouts, routines, exercises and measurements.",
  "Servidor MCP:": "MCP server:",
  "herramientas de consulta, cálculo y escritura con responsabilidades separadas.":
    "query, calculation and write tools with separate responsibilities.",
  "Cliente compatible:": "Compatible client:",
  "conversación, interpretación y controles de autorización.":
    "conversation, interpretation and authorisation controls.",
  "No hay una caché local ni una base de datos de entrenamientos. Así se evita mantener una segunda copia sincronizada. El compromiso es depender de la disponibilidad, latencia y límites de la API en cada consulta.":
    "There is no local cache or workout database, avoiding a second copy that needs synchronisation. The trade-off is depending on the API’s availability, latency and limits for every query.",
  "Los límites de escritura forman parte del diseño":
    "Write boundaries are part of the design",
  "El proyecto permite crear y actualizar rutinas, crear carpetas y registrar medidas corporales. No escribe en el historial de entrenamientos, que es la base de los cálculos.":
    "The project can create and update routines, create folders and log body measurements. It does not write to workout history, which is the basis of its calculations.",
  "Las herramientas llevan indicaciones de lectura o escritura para el cliente MCP. Esas indicaciones ayudan al cliente a decidir cuándo pedir confirmación; no son, por sí solas, una garantía de consentimiento impuesta por el servidor.":
    "Tools carry read or write annotations for the MCP client. These help the client decide when to ask for confirmation; they are not, by themselves, a server-enforced guarantee of consent.",
  "La clave de Hevy no ofrece permisos granulares. Por eso es importante distinguir lo que permite la credencial de las operaciones que este servidor expone.":
    "Hevy API keys do not offer granular permissions. It is therefore important to distinguish what the credential allows from the operations this server exposes.",
  "Diseñar para una escritura que no se puede deshacer":
    "Designing for a write that cannot be undone",
  "Un error HTTP no siempre significa que una operación no haya ocurrido. Si una creación llega a Hevy pero la respuesta falla, repetirla puede generar un duplicado. La integración no dispone de una operación de borrado para compensarlo. Esa restricción cambia cómo se preparan y ejecutan las escrituras.":
    "An HTTP error does not always mean an operation did not happen. If a creation reaches Hevy but the response fails, repeating it can create a duplicate. The integration has no delete operation to compensate for this. That constraint changes how writes are prepared and executed.",
  "Resolver antes de enviar.": "Resolve before sending.",
  "Al crear una rutina, primero se resuelven los nombres de todos sus ejercicios. Si uno es desconocido o ambiguo, la herramienta devuelve el problema y no envía una rutina incompleta.":
    "When creating a routine, all exercise names are resolved first. If one is unknown or ambiguous, the tool returns the problem without sending an incomplete routine.",
  "Reintentar según la operación.": "Retry according to the operation.",
  "El cliente permite reintentos acotados ante respuestas 5xx en lecturas, pero no en escrituras. Las respuestas 429 se tratan aparte. Se acepta devolver un error antes que arriesgar una creación duplicada.":
    "The client allows bounded retries for 5xx responses on reads, but not on writes. It handles 429 responses separately. Returning an error is preferable to risking a duplicate creation.",
  "Leer antes de actualizar.": "Read before updating.",
  "Cuando la API reemplaza un registro completo, omitir campos puede borrarlos. La herramienta recupera el estado existente: preserva las medidas no indicadas y, al cambiar el título de una rutina, los descansos y rangos de repeticiones de sus ejercicios. Reemplazar explícitamente los ejercicios sigue siendo una operación destructiva.":
    "When the API replaces an entire record, omitting fields can erase them. The tool retrieves the existing state: it preserves unspecified measurements and, when renaming a routine, its exercises’ rest times and rep ranges. Explicitly replacing the exercises remains a destructive operation.",
  "Son defensas frente a fallos concretos, no una transacción distribuida ni una garantía de ejecución exactamente una vez. Una modificación concurrente entre la lectura y la escritura sigue siendo un límite de este enfoque.":
    "These are defences against specific failures, not a distributed transaction or an exactly-once execution guarantee. A concurrent modification between the read and the write remains a limitation of this approach.",
  "Ver la preparación de escrituras": "See write preparation",
  "Ver la política de reintentos": "See the retry policy",
  "Ausencia de datos no significa progreso cero":
    "Missing data does not mean zero progress",
  "El motor de cálculo recibe datos y devuelve resultados sin consultar la API. Esto permite comprobar fórmulas con entradas conocidas y mantener la interpretación fuera de la aritmética. Para estimar la repetición máxima, una serie sin peso o repeticiones válidas se excluye; si ninguna serie sirve, el resultado es nulo. Una sola medición de peso tampoco se convierte en una tendencia.":
    "The calculation engine receives data and returns results without calling the API. This makes it possible to check formulas against known inputs and keep interpretation separate from arithmetic. To estimate one-rep max, sets without valid weight or reps are excluded; if no set qualifies, the result is null. A single bodyweight measurement does not become a trend either.",
  "La alternativa de rellenar esos huecos con ceros produciría una respuesta más completa en apariencia, pero confundiría falta de información con un resultado medido. El asistente debe poder decir que no tiene datos suficientes.":
    "Filling these gaps with zeros would produce a seemingly more complete answer, but would confuse missing information with a measured result. The assistant must be able to say it has insufficient data.",
  "Las pruebas públicas incluyen nombres ambiguos que no producen escrituras, conservación de campos al actualizar, creaciones fallidas que no se repiten y series que no pueden puntuarse. Estas pruebas comprueban reglas del servidor con datos controlados; no demuestran por sí solas la disponibilidad de Hevy ni la calidad de las respuestas de un modelo.":
    "The public tests cover ambiguous names that produce no writes, field preservation during updates, failed creations that are not retried, and sets that cannot be scored. They check server rules with controlled data; they do not, by themselves, demonstrate Hevy’s availability or the quality of a model’s responses.",
  "Revisar las pruebas de escritura": "Review the write tests",
  "Revisar las pruebas del cálculo": "Review the calculation tests",
  "Una forma de comprobarlo": "One way to try it",
  "Con una cuenta Hevy PRO y una clave API configurada en un cliente compatible, se puede empezar por comprobar la conexión y comparar dos periodos:":
    "With a Hevy PRO account and an API key configured in a compatible client, you can start by checking the connection and comparing two periods:",
  "Comprueba la conexión con Hevy. Compara el número de entrenamientos y el volumen de las últimas cuatro semanas con las cuatro anteriores. Explica qué datos has utilizado y qué no puedes concluir.":
    "Check the connection to Hevy. Compare workout count and volume over the last four weeks with the previous four. Explain which data you used and what you cannot conclude.",
  "Es una propuesta de consulta, no una captura de un resultado real. El repositorio incluye las instrucciones de conexión, las herramientas disponibles y sus límites.":
    "This is a suggested query, not a screenshot of an actual result. The repository includes connection instructions, available tools and their limitations.",
  "Consultar la guía de conexión": "Read the connection guide",
  "Qué demuestra este proyecto": "What this project demonstrates",
  "Una integración entre una API externa y clientes de IA, con cálculos separados de la conversación y un alcance de escritura delimitado. El resultado verificable es el código y su documentación pública; no se presentan métricas de adopción ni mejoras deportivas no medidas.":
    "An integration between an external API and AI clients, with calculations separated from conversation and a defined write scope. The verifiable outcome is the code and its public documentation; no unmeasured adoption figures or training improvements are claimed.",
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
  "entrenamientos y rutinas": "workouts and routines",
  "MCP + cálculos": "MCP + calculations",
  "lee, calcula y gestiona": "reads, calculates and manages",
  Asistente: "Assistant",
  "responde con contexto real": "responds with real context",
};

export function translator(locale: Locale) {
  return (text: string) => (locale === "en" ? (english[text] ?? text) : text);
}

export function localPath(locale: Locale, path = "/") {
  return locale === "en" ? `/en${path === "/" ? "" : path}` : path;
}
