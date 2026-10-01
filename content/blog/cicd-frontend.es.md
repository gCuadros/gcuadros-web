---
title: "CI de frontend: qué significa un check verde"
summary: "Cómo uso este portfolio para comprobar código, recorridos de usuario y documentos antes de publicar, y qué queda fuera de esos controles."
date: "2026-09-28"
tags: ["CI/CD", "Frontend", "DevOps"]
---

## Empezar por lo que puede romperse

En este portfolio, publicar un cambio puede romper algo más que la compilación: un enlace al CV puede apuntar al idioma incorrecto, el menú puede dejar de funcionar con teclado o el PDF puede quedarse atrás respecto a su fuente editable. Mi punto de partida es convertir esos riesgos concretos en comprobaciones.

El ejemplo es el repositorio público de esta web. No describe procesos internos de ninguna compañía. Las referencias al final fijan la versión del código que analizo para que se pueda contrastar lo que cuento.

## Tres controles, tres preguntas distintas

La integración continua se ejecuta en las pull requests y en los cambios de main. El trabajo de calidad revisa formato, lint, tipos y correspondencia de los CV con sus fuentes. El de compilación comprueba que se puede construir la versión de producción. El de navegador vuelve a construir la aplicación y ejecuta Playwright sobre ella.

Los trabajos están separados para localizar el fallo: un error de tipos y un menú inaccesible requieren respuestas distintas. Esta elección repite la compilación en dos trabajos; es un coste explícito del diseño actual, no una optimización de tiempo que haya medido.

## Probar recorridos que importan

Las pruebas de navegador recorren la portada en varios anchos, comprueban enlaces, navegación con teclado y cambio de idioma. También incluyen controles automáticos de accesibilidad con axe y verifican que cada versión ofrece el PDF correspondiente. El selector de idioma se prueba incluso sin JavaScript.

Un check verde significa que esos escenarios han pasado en Chromium. No demuestra compatibilidad con todos los navegadores, ni sustituye una revisión con tecnologías de asistencia. Tampoco convierte una prueba de laboratorio en una medición del rendimiento que experimentan usuarios reales.

## El contenido publicado también tiene un contrato

El CV tiene una fuente Markdown por idioma y un PDF versionado. El verificador compara el texto visible extraído, su orden, los enlaces y el número esperado de páginas. Si se edita la fuente y se olvida regenerar el documento, la integración continua puede detectar la discrepancia.

Ese contrato evita una clase concreta de desajuste. No evalúa si el texto convence a una persona que está contratando ni garantiza una puntuación en un filtro de selección. La maquetación del PDF sigue necesitando una revisión visual después de regenerarlo.

## Hacer que un fallo se pueda investigar

El flujo cancela ejecuciones anteriores de la misma referencia cuando llega un cambio nuevo. Los trabajos tienen límites de duración y permisos de lectura del repositorio. Si falla la suite de navegador, se guardan sus resultados como artefactos durante siete días.

Estas decisiones ayudan a evitar trabajo obsoleto y a conservar contexto para investigar. Playwright permite un reintento en CI. Que una prueba pase al repetirla no explica el fallo inicial: hay que investigar si el problema está en el producto, en la prueba o en el entorno.

## Publicar no termina en la compilación

El despliegue se realiza en Vercel. Después de integrar los cambios compruebo la URL pública, el cambio de idioma y las descargas. Esa comprobación posterior es manual en el proceso descrito aquí; no la presento como una etapa automatizada del flujo de GitHub Actions.

El siguiente paso razonable sería automatizar una prueba breve contra el despliegue correcto y ampliar navegadores cuando el riesgo lo justifique. Mi criterio para añadir un control es poder explicar qué fallo detecta, qué evidencia deja y qué límites conserva. Un check verde es una señal acotada para decidir, no una garantía de que todo funciona.

## Código que acompaña esta nota

- [GitHub Actions](https://github.com/gCuadros/gcuadros-web/blob/e0376e67f1ba36cc48cecad694c02262d4a8459c/.github/workflows/ci.yml)
- [Playwright](https://github.com/gCuadros/gcuadros-web/blob/e0376e67f1ba36cc48cecad694c02262d4a8459c/tests/portfolio.spec.ts)
- [Verificación de los CV](https://github.com/gCuadros/gcuadros-web/blob/e0376e67f1ba36cc48cecad694c02262d4a8459c/scripts/verify_cv.py)
