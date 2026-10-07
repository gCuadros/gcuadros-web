---
title: "Estrategias de renderizado en Next.js: SSG, SSR, ISR y CSR"
summary: "El contenido del live coding que hice con Garaje de ideas: qué hace cada estrategia de renderizado, cuándo encaja y cómo combinarlas en una misma aplicación."
date: "2026-10-07"
tags: ["Next.js", "React", "Rendimiento", "Charlas"]
---

En 2024 hice un live coding con Garaje de ideas sobre estrategias de renderizado en Next.js. Esta entrada recoge el contenido de aquella sesión para quien prefiera leerlo en lugar de ver el vídeo completo. La sesión está en [YouTube](https://www.youtube.com/watch?v=J4FLmBctSBs).

Para prepararla me basé en el artículo de Vercel [How to choose the best rendering strategy for your app](https://vercel.com/blog/how-to-choose-the-best-rendering-strategy-for-your-app). Lo recomiendo como lectura complementaria.

## Por qué importa la estrategia de renderizado

Decidir dónde y cuándo se genera el HTML de una página no es un detalle de implementación. Afecta a cuatro cosas:

- **La velocidad de carga**: cuánto tarda el usuario en ver contenido útil.
- **La experiencia de usuario**: si la página responde rápido y muestra datos coherentes.
- **La indexación en buscadores**: si los buscadores reciben el contenido en el HTML o tienen que esperar a JavaScript.
- **La escalabilidad y el coste de infraestructura**: cuánto trabajo hace el servidor en cada petición.

Desde Next.js 13, con el App Router, el punto de partida cambió. Las rutas se organizan con un nuevo sistema de enrutado, los componentes son React Server Components por defecto y los layouts permiten compartir estructura entre páginas. Con ese contexto, la sesión repasaba cuatro estrategias.

## SSG: generación estática

Con Static Site Generation, las páginas se generan una vez durante el build. El servidor de build obtiene los datos de origen, genera el HTML y ese resultado se despliega en la red. Cuando llega una petición, se sirve el HTML ya generado.

- **Ventajas**: rendimiento óptimo, muy buen SEO y menor coste de infraestructura, porque no hay trabajo de renderizado por petición.
- **Limitación**: los datos son los del momento del build. Para cambiarlos hay que volver a generar la página.
- **Casos de uso**: blogs, documentación y landing pages.

## SSR: renderizado en el servidor

Con Server-Side Rendering, el HTML completo se genera en cada petición. El servidor consulta los datos de origen cuando llega el usuario y responde con la página ya construida.

- **Ventajas**: datos siempre actualizados y buen SEO, porque el contenido llega en el HTML.
- **Limitación**: cada petición tiene un coste de servidor y el tiempo de respuesta depende de lo que tarden los datos.
- **Casos de uso**: dashboards, redes sociales y cualquier página con datos personalizados o en tiempo real.

## ISR: regeneración estática incremental

Incremental Static Regeneration permite actualizar páginas concretas después del build sin reconstruir todo el sitio. Mantiene las ventajas de SSG y escala a sitios con muchísimas páginas.

El flujo que mostré en la sesión es este. Las páginas se generan en el build y se despliegan como estáticas. Cuando llega una petición, Next.js comprueba si ha pasado el tiempo de revalidación:

- Si no ha pasado, sirve la página en caché.
- Si ha pasado, sirve igualmente la versión que tiene, vuelve a consultar los datos de origen y actualiza la página para las siguientes peticiones.

Así el usuario nunca espera a la regeneración, a cambio de que alguna petición reciba una versión ligeramente antigua.

- **Ventajas**: equilibrio entre rendimiento y frescura, escalable para sitios grandes y con menos carga de servidor que SSR.
- **Casos de uso**: comercio electrónico y portales de noticias.

## CSR: renderizado en el cliente

Client-Side Rendering depende de JavaScript en el navegador. Permite interfaces muy interactivas, pero la carga inicial es más lenta. La idea que quería transmitir es que no compite con las anteriores: las complementa.

En el App Router eso se traduce en los Client Components. Se declaran con la directiva `'use client'`, tienen acceso a todos los hooks de React y son la opción natural para formularios, botones o un carrito interactivo. También tienen un coste: aumentan el JavaScript que descarga el navegador. Un detalle que suele sorprender es que se renderizan primero en el servidor y después se hidratan en el cliente.

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

Un Server Component puede contener Client Components. La estrategia habitual es usar Server Components para el contenido principal y reservar los Client Components para las partes interactivas.

El ejemplo de la sesión era la página de producto de un e-commerce:

- La descripción del producto es un Server Component: no necesita interacción.
- El botón «Añadir al carrito» es un Client Component: necesita estado y eventos.
- Las reseñas vuelven a ser un Server Component.

De esta forma, solo se envía al navegador el JavaScript de lo que realmente es interactivo.

## Comparación

Esta es la comparación con la que cerraba la parte teórica, en cuatro criterios: rendimiento, SEO, frescura de los datos y carga del servidor.

- **SSG**: rendimiento excelente, SEO excelente, frescura baja y carga de servidor baja.
- **SSR**: rendimiento bueno, SEO excelente, frescura alta y carga de servidor media.
- **ISR**: rendimiento muy bueno, SEO excelente, frescura configurable y carga de servidor media.
- **CSR**: rendimiento variable, SEO limitado, frescura alta y carga de servidor media-alta.

## Cómo elegir

No hay una estrategia ganadora. Las preguntas que propuse para decidir son:

- ¿Cada cuánto cambia el contenido?
- ¿Importa que lo indexen los buscadores?
- ¿Cuánta interactividad necesita la página?
- ¿Es contenido personalizado para cada usuario? Si lo es, SSG queda descartado.

Y una recomendación: empezar por lo más simple, combinar estrategias dentro de la misma aplicación y medir antes de optimizar.

## Una nota sobre Next.js hoy

La sesión se preparó con Next.js 14. En versiones posteriores, Next.js plantea la frontera entre estático y dinámico a nivel de componente, no de ruta: con Partial Prerendering y Cache Components (`use cache`), una misma página puede tener una parte estática que carga al instante y secciones dinámicas que llegan por streaming. Los criterios para elegir siguen siendo los mismos; lo que cambia es la granularidad con la que se aplican.
