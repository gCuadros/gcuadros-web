# Escribir en el blog

Los artículos se mantienen en `content/blog/`. Cada artículo necesita dos archivos con el mismo identificador: `mi-articulo.es.md` y `mi-articulo.en.md`. El identificador solo admite minúsculas, números y guiones. La compilación falla si falta una traducción o los metadatos son inválidos.

```md
---
title: "Título del artículo"
summary: "Resumen breve y concreto para el índice y los metadatos."
date: "2026-09-30"
tags: ["Frontend", "DevOps"]
---

Primer párrafo.

## Un apartado

Contenido, [enlaces](https://example.com) y bloques de código.
```

El título principal lo genera la página: comenzar los apartados con `##`. Markdown admite párrafos, listas, citas, enlaces y bloques de código. Se sanea el HTML generado; no se ejecutan componentes ni scripts desde el artículo. Las imágenes pueden residir en `public/blog/` y deben llevar texto alternativo. La ilustración de CI solo aparece en ese artículo: nuevos artículos no heredan una portada ajena a su tema.

Los archivos presentes son públicos al desplegar. Mantener borradores fuera de esta carpeta hasta que estén listos y usar una fecha real de publicación. No hay CMS, editor web, comentarios ni suscripción por correo. El flujo de edición es Markdown → rama → PR → checks → despliegue.

La web genera automáticamente `/blog/mi-articulo` y `/en/blog/mi-articulo`, índice por fecha, tiempo estimado de lectura, etiquetas, metadatos y feeds RSS `/blog/feed.xml` y `/en/blog/feed.xml`. El selector de idioma conserva el artículo. Los feeds usan el alias público en `src/lib/site.ts`; actualizarlo cuando se configure el dominio definitivo.

Antes de publicar: comprobar exactitud del contenido, enlaces, ambas traducciones y lectura en móvil; ejecutar `npm run check` y `npm run test:e2e`. Evitar información interna de empresas, resultados inventados o presentar planes como funcionalidades ya implementadas.
