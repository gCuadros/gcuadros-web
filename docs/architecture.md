# Decisiones de implementación

- Next.js App Router, React y TypeScript estricto. Páginas, artículos y feeds RSS se generan estáticamente.
- Componentes de servidor por defecto. `MobileMenu` y `LayerExplorer` son las fronteras de cliente. El menú usa diálogo nativo, control de foco, Escape, bloqueo del scroll y cierre al pasar a escritorio.
- CSS nativo, tipografía Bricolage Grotesque y paleta papel/tinta/naranja. Sin biblioteca de componentes ni animaciones. Dirección y criterios en [editorial-design.md](editorial-design.md).
- Bricolage Grotesque, Manrope e IBM Plex Mono autoalojadas mediante Fontsource. Sin peticiones del visitante a Google Fonts ni descarga de fuentes durante la compilación. Licencias OFL en los paquetes.
- Navegación multipágina con enlaces HTML. View Transitions de documento como mejora progresiva; movimiento reducido y navegación sin JavaScript contemplados.
- Blog en Markdown mediante gray-matter y remark, HTML saneado, metadatos validados y traducción obligatoria. [Guía de edición](blog.md). Sin CMS ni backend de escritura.
- CV y fuentes editables ES/EN versionados con verificación de texto y enlaces. Contenido público evita detalles internos, headcounts y atribuciones incorrectas.
- No hay analítica, cookies de seguimiento, formularios, iframes externos ni integraciones de datos. Contacto por LinkedIn.
- Metadatos sociales localizados y datos estructurados de persona. Dominio personalizado y sitemap definitivo se gestionan al final.

## Validación

`npm run check` cubre formato, lint, tipos y build. Playwright comprueba interacción, cuatro anchuras, axe, desbordamiento horizontal, rutas ES/EN, teclado, menú, movimiento reducido, lectura sin JavaScript, PDFs, RSS y redirecciones.

Las comprobaciones automáticas complementan la revisión visual; no certifican por sí solas conformidad WCAG ni rendimiento de campo.
