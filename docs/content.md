# Contenido y criterios editoriales

- Voz personal y directa: describir qué hace Gonzalo y qué encontrará el lector. Preferir ejemplos y responsabilidades concretas a eslóganes abstractos, frases grandilocuentes o promesas de impacto. Adaptar el inglés de forma natural, sin traducir expresiones literalmente.

- El liderazgo en MANGO es técnico, con decisiones de arquitectura compartidas. No presentarlo como gestión formal de personas ni atribución individual de toda la plataforma.
- No se afirma que las migraciones estén completadas ni se publican métricas de impacto sin evidencia.
- El caso Hevy está en `src/components/hevy-case.tsx`, con traducciones en `src/lib/i18n.ts`, basado en código y pruebas públicas del commit c3a2326 revisados el 27/09/2026. Sus afirmaciones distinguen anotaciones MCP de confirmaciones implementadas por el cliente.
- La consulta de ejemplo es ilustrativa; no es una captura ni un resultado de uso real.
- Fuente editable del CV: `content/cv.md`. Regenerar PDF siguiendo `docs/cv.md` en cada cambio.
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
