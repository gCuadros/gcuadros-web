# Decisiones de implementación

- Next.js App Router, React y TypeScript estricto. La home se prerenderiza como contenido estático.
- Componentes de servidor por defecto; `MobileMenu` es la única frontera de cliente. Usa un diálogo nativo con control del foco, cierre con Escape, retorno al activador, bloqueo del scroll y cierre al pasar a escritorio.
- CSS nativo y tokens extraídos del diseño de Pen.dev: carbón, blanco cálido y cobre. No hay biblioteca de componentes ni de animación.
- Manrope variable e IBM Plex Mono se sirven desde la propia web mediante paquetes Fontsource fijados. No se descargan fuentes durante el build ni se realizan solicitudes del visitante a Google Fonts. Licencias OFL incluidas en los paquetes.
- Contenido y enlaces públicos centralizados en `src/lib/portfolio.ts` cuando se reutilizan. Las secciones conservan la atribución de decisiones compartidas entre Tech Leads.
- Diagramas realizados con HTML y CSS. No son capturas ni arquitecturas internas de MANGO.
- Idioma español, sin selector de idiomas, PDF de CV, casos de estudio o fotografía pendientes de contenido.
- No hay analítica, cookies de seguimiento, integraciones externas de datos ni formulario con backend. Contacto por LinkedIn.
- Navegación por anclas y enlaces directos a proyectos/charlas. No se incrustan YouTube ni LinkedIn.
- Metadatos descriptivos y sociales básicos. Dominio canónico, sitemap y portada social final pendientes de confirmar el dominio de producción.

## Validación

`npm run check` cubre formato, lint, tipos y build. Tras compilar, `npm run test:e2e` ejecuta Playwright contra el servidor de producción: cuatro anchuras (320/390/768/1440), axe, ausencia de desbordamiento horizontal, navegación por anclas, teclado, menú y preferencias de movimiento reducido.

Las comprobaciones automáticas complementan la revisión visual; no certifican por sí solas conformidad WCAG ni rendimiento de campo.
