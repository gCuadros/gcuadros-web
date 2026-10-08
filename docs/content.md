# Contenido y criterios editoriales

- Voz personal y directa: describir qué hace Gonzalo y qué encontrará el lector. Preferir ejemplos y responsabilidades concretas a eslóganes abstractos, frases grandilocuentes o promesas de impacto. Adaptar el inglés de forma natural, sin traducir expresiones literalmente.

- El liderazgo en MANGO es técnico, con decisiones de arquitectura compartidas. No presentarlo como gestión formal de personas ni atribución individual de toda la plataforma.
- No se afirma que las migraciones estén completadas ni se publican métricas de impacto sin evidencia.
- El caso Hevy está en `src/components/hevy-case.tsx`, con traducciones en `src/lib/i18n.ts`, basado en código y pruebas públicas del commit c3a2326 revisados el 27/09/2026. Sus afirmaciones distinguen anotaciones MCP de confirmaciones implementadas por el cliente.
- La consulta de ejemplo es ilustrativa; no es una captura ni un resultado de uso real.
- Fuentes editables del CV: `content/cv.md` y `content/cv.en.md`. Regenerar PDF siguiendo `docs/cv.md` en cada cambio.
- No publicar casos profesionales vacíos. Ampliarlos solo con problema, contribución, estado y resultados confirmados.
- Fotografía y recomendaciones requieren materiales del titular. No se sustituyen por imágenes o testimonios inventados.
- Imagen social editable en `src/app/opengraph-image.tsx`. No incluye un dominio provisional.

## Confidencialidad

Describir responsabilidades y competencias sin cifras de equipos/personas, topologías internas, rutas de migración entre proveedores ni detalles operativos de empresas. Los artículos técnicos deben usar ejemplos independientes y agnósticos, sin presentarlos como reconstrucciones de sistemas internos ni atribuir resultados no públicos a un empleador. No solicitar datos internos para completar casos.

## Docencia y charlas

Página `src/components/teaching-page.tsx`, rutas `/docencia` y `/en/docencia`, con resumen en inicio y sobre mí. Codespace Academy (junio 2023–agosto 2024) según perfil aportado: colaborador docente, sesiones de fundamentos y técnicas avanzadas, especialización Next.js. No confundir con su etapa como alumno ni inventar cifras de estudiantes/promociones.

Fuentes públicas revisadas el 6 de octubre de 2026:

- [Publicación del titular y álbum de Fabrics](https://www.linkedin.com/feed/update/urn:li:activity:7335604924593901568/): confirma participación como ponente. Fotografía `public/images/fabrics-2025.jpg` procedente del álbum, no una recreación.
- [Publicación oficial de MANGO](https://www.linkedin.com/posts/mango_lifeatmango-takingfashionfurther-takinginnovationfurther-activity-7335941887565938688-7I9n): segunda edición del encuentro tecnológico. No atribuir a Gonzalo todos los temas del evento; no consta el título exacto de su intervención en el texto consultado.
- [Garaje de ideas](https://es.linkedin.com/posts/garajedeideas_en-este-live-coding-veremos-cómo-elegir-activity-7237419907972304897-7gnv): estrategias de renderizado y streaming en Next.js. [Grabación](https://www.youtube.com/watch?v=J4FLmBctSBs) en castellano, indicado en la versión inglesa.

Enlazar a fuentes y vídeo sin cargar embeds ni rastreadores de terceros al abrir la página.

### Artículo Fabrics 2025

`content/blog/fabrics-2025.{es,en}.md` adapta la publicación del titular en primera persona. Fecha del artículo: 2026-10-06; evento: 2025. No atribuir al ponente el temario general ni añadir detalles internos. La ficha de docencia enlaza al artículo propio; LinkedIn permanece como fuente al final.

Cabecera elegida expresamente por el titular: `public/images/fabrics-2025-cover.jpg`, original1280×853 del álbum (entrega del micrófono), sin controles del visor. Se comparte entre ficha y artículo mediante `FabricsCover`. La foto anterior con portátil se conserva para el resumen de docencia.

### Hevy: relato y navegación

`content/blog/hevy-coach-mcp.{es,en}.md` cuenta el origen del proyecto, a partir de la [publicación del titular](https://www.linkedin.com/feed/update/urn:li:activity:7491054566491324416/) consultada el7/10/2026 y del caso técnico existente. No reproduce métricas personales ni la garantía absoluta de ausencia de persistencia en clientes externos. El caso técnico enlaza al artículo propio y este vuelve al caso, en el mismo idioma.

Los enlaces de componentes usan `SiteLink`: los destinos HTTP(S) externos abren en otra pestaña con `noopener noreferrer`, título y aviso accesible localizado. En este sitio los destinos internos se expresan como rutas relativas a la raíz y permanecen en la misma pestaña. El renderizado de artículos aplica el mismo comportamiento a los enlaces externos después de sanear Markdown. No usar JavaScript para interceptar clics ni alterar descargas de CV, anclas o navegación interna.

## Revisión editorial bilingüe — octubre de 2026

La presentación prioriza plataformas frontend, arquitectura, despliegue, DevOps y mentoría. Cada página debe explicar una parte distinta del trabajo: portada para orientarse; proyectos para decisiones y código; docencia para clases y charlas; sobre mí para trayectoria y formación. El blog incluye tanto notas técnicas como relatos de proyectos y encuentros.

- Usar primera persona y verbos concretos. No convertir instrucciones editoriales en texto público ni justificar la existencia de un artículo.
- Mantener los límites técnicos que afectan a una decisión: confirmaciones MCP, reintentos, concurrencia y alcance de las pruebas. Evitar repetir advertencias obvias en cada párrafo.
- Etiquetar enlaces según su destino. El resumen de docencia lleva a la página de docencia; la sesión de Garaje se identifica allí. LinkedIn sirve como contacto o fuente, no sustituye el relato propio.
- En inglés, usar `workout data` para entrenamientos; `training data` resulta ambiguo en un contexto de IA. Mantener inglés británico y adaptar la voz, no la estructura literal de cada frase.
- Sincronizar texto visible, metadatos, Markdown público, RSS y CV. El dominio definitivo es `https://gcuadros.dev`; el CV inglés enlaza a `/en`.
- Las notas sobre renderizado distinguen la sesión de 2024 (Next.js 14) de las capacidades actuales. Client Components no equivale a CSR exclusivo; SSR no garantiza frescura de datos; ISR depende del estado de la caché. No asignar garantías de rendimiento o SEO por estrategia. Las capacidades de Cache Components se presentan como optativas y posteriores a la sesión.

Cobertura: Inicio, Proyectos, caso Hevy, Docencia, Sobre mí, índice del blog, los cuatro artículos en ambos idiomas, navegación y pie, textos accesibles, metadatos y ambos CV. Se conservan cargos, fechas, fuentes y límites de confidencialidad.
