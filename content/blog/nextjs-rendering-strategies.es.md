---
title: "Estrategias de renderizado en Next.js: SSG, SSR, ISR y CSR"
summary: "Cuándo generar el HTML, qué puede esperar y qué necesita el navegador. Las decisiones detrás del live coding que hice con Garaje de ideas."
date: "2026-10-07"
tags: ["Next.js", "React", "Rendimiento", "Charlas"]
---

En 2024 hice un live coding con Garaje de ideas sobre estrategias de renderizado en Next.js. La sesión partía de una pregunta práctica: ¿qué necesita cada parte de una página para llegar al usuario a tiempo y con los datos adecuados?

Estas son las ideas principales, con el contexto de Next.js 14 que usamos entonces. Puedes ver la [sesión completa en YouTube](https://www.youtube.com/watch?v=J4FLmBctSBs) y leer el artículo de Vercel que utilicé para prepararla: [How to choose the best rendering strategy for your app](https://vercel.com/blog/how-to-choose-the-best-rendering-strategy-for-your-app).

## Por qué importa la estrategia de renderizado

Elegir dónde y cuándo se genera el HTML afecta al tiempo que tarda en aparecer contenido útil, al trabajo que hace el navegador y al coste del servidor. También determina qué contenido reciben los buscadores sin ejecutar JavaScript.

Son decisiones relacionadas, pero distintas: una página puede entregar HTML desde el servidor y necesitar JavaScript para responder a una interacción. Del mismo modo, renderizar en el servidor no implica consultar todos los datos de nuevo en cada visita.

## SSG: generación estática

Con Static Site Generation, el HTML se genera durante el build y se reutiliza en las visitas posteriores. Es una buena opción cuando varias personas pueden recibir el mismo contenido y este no necesita cambiar en cada petición.

- **Qué aporta**: evita repetir el renderizado por visita y permite servir el resultado desde una CDN.
- **Qué exige**: volver a generar el contenido cuando cambie. Sin revalidación, los datos serán los del último build.
- **Dónde encaja**: artículos, documentación y páginas de presentación.

El HTML disponible desde el principio facilita el acceso al contenido. El rendimiento final depende también de las imágenes, el JavaScript y el resto de recursos de la página.

## SSR: renderizado en el servidor

Con Server-Side Rendering, el servidor genera la respuesta para cada petición. Esto permite usar información que solo se conoce al llegar esa petición, como la sesión del usuario. Con streaming, la respuesta puede enviarse por partes a medida que están listas.

- **Qué aporta**: contenido adaptado a la petición sin depender del navegador para construirlo por primera vez.
- **Qué exige**: trabajo de servidor en cada visita; las consultas lentas pueden retrasar la respuesta.
- **Dónde encaja**: páginas que necesitan datos de sesión o información que debe consultarse en ese momento.

SSR no garantiza datos siempre nuevos. Una ruta dinámica puede reutilizar datos en caché: la política de consulta y revalidación sigue siendo una decisión aparte. La [documentación de Next.js 14](https://nextjs.org/docs/14/app/building-your-application/rendering/server-components) explica esa combinación.

## ISR: regeneración estática incremental

Incremental Static Regeneration permite actualizar contenido estático después del build sin reconstruir todo el sitio. En el caso de una página ya generada con revalidación por tiempo, el flujo es:

1. Mientras el contenido sigue vigente, se sirve la versión en caché.
2. La primera petición tras vencer el intervalo recibe esa versión y activa una regeneración en segundo plano.
3. Cuando termina correctamente, las siguientes peticiones reciben el contenido actualizado.

Esa visita no espera a la regeneración, pero puede ver datos anteriores. Si la página todavía no se ha generado, el comportamiento de la primera petición es distinto. Lo detalla la [guía de ISR](https://nextjs.org/docs/app/guides/incremental-static-regeneration).

ISR encaja en contenido compartido que cambia con cierta frecuencia y admite ese desfase, como un catálogo o un archivo de noticias. Hay que decidir cuánto retraso es aceptable para cada dato: una descripción y la disponibilidad de un producto no tienen por qué seguir la misma política.

## CSR: renderizado en el cliente

Con Client-Side Rendering, el navegador usa JavaScript para construir contenido. Si además tiene que pedir datos antes de mostrarlo, el usuario espera a que terminen esas tareas. El coste depende del código, la red y el dispositivo.

Conviene distinguir CSR de los Client Components del App Router. La directiva `'use client'` permite usar estado, efectos y eventos, pero no significa «solo se renderiza en el navegador». En la carga inicial, Next.js también puede generar su HTML en el servidor; después, React lo hidrata para activar la interacción. Las navegaciones posteriores siguen otro flujo, descrito en la [documentación de Client Components](https://nextjs.org/docs/14/app/building-your-application/rendering/client-components).

Este botón necesita estado y un evento; por eso es un Client Component:

```tsx
"use client";

import { useState } from "react";

export function AddToCart() {
  const [added, setAdded] = useState(false);
  return (
    <button onClick={() => setAdded(true)}>
      {added ? "Añadido" : "Añadir al carrito"}
    </button>
  );
}
```

## Combinar Server y Client Components

En una ficha de producto, la descripción y las reseñas pueden resolverse en Server Components. El botón para añadir al carrito necesita estado y eventos, así que esa parte corresponde a un Client Component.

Mantener la frontera de cliente cerca de la interacción reduce el código que enviamos al navegador. También importa lo que importamos desde ella: sus dependencias pasan a formar parte del código cliente.

Esta separación no decide por sí sola si la página será estática o dinámica. Un Server Component puede ejecutarse durante el build o al atender una petición.

## Comparación

Más que asignar una nota de rendimiento a cada sigla, me resulta útil comparar qué trabajo hacemos y cuándo:

- **SSG**: generamos por adelantado y reutilizamos el resultado hasta volver a generarlo.
- **SSR**: renderizamos al recibir una petición y elegimos qué datos podemos reutilizar.
- **ISR**: reutilizamos contenido estático y lo regeneramos según la política de revalidación.
- **CSR**: dejamos que el navegador construya o actualice contenido con JavaScript.

Entregar el contenido relevante en el HTML reduce la dependencia del renderizado de JavaScript para su indexación. Ninguna de estas estrategias garantiza por sí sola un buen posicionamiento o una web rápida.

## Cómo elegir

Antes de elegir, me haría estas preguntas:

- ¿Qué contenido debe aparecer en la primera respuesta?
- ¿Qué datos pueden compartir todos los usuarios y cuáles son personales?
- ¿Cuánto tiempo pueden pasar esos datos sin actualizarse?
- ¿Qué interacción necesita JavaScript en el navegador?

La personalización no obliga a descartar todo el contenido estático. Puede convivir con partes dinámicas o con datos que se consultan desde el cliente. El criterio es decidir qué necesita cada parte y medir el resultado.

## Una nota sobre Next.js hoy

La sesión se preparó con Next.js 14. En Next.js 16, [Cache Components](https://nextjs.org/docs/app/api-reference/config/next-config-js/cacheComponents) es una opción que se activa con `cacheComponents: true`. Combina prerenderizado parcial, caché explícita con `use cache` y contenido dinámico que llega por streaming mediante `Suspense`.

Es un modelo posterior al de la charla y requiere activarlo. Las preguntas sobre frescura, personalización y tiempo de espera siguen siendo útiles; las APIs y las reglas de caché deben comprobarse para la versión del proyecto.
