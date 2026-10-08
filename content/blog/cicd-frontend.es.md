---
title: "CI de frontend: qué significa un check verde"
summary: "Un menú que funciona con teclado, el CV en el idioma correcto y un PDF actualizado. Así convierto los riesgos de esta web en comprobaciones antes de publicar."
date: "2026-09-28"
tags: ["CI/CD", "Frontend", "DevOps"]
---

## Empezar por lo que puede romperse

Un cambio en este portfolio puede compilar y aun así romper algo importante: un enlace al CV puede apuntar al idioma incorrecto, el menú puede dejar de funcionar con teclado o el PDF puede quedarse atrás respecto a su fuente editable. Empiezo por identificar esos fallos y convertirlos en comprobaciones.

El ejemplo es el repositorio público de esta web. Los enlaces al final apuntan a la versión del código que analizo, para que puedas seguir cada decisión hasta su implementación.

## Tres controles, tres preguntas distintas

La integración continua se ejecuta en las pull requests y en los cambios de main. Separa el trabajo en tres bloques:

- **Calidad**: formato, lint, tipos y correspondencia de los CV con sus fuentes.
- **Compilación**: construcción de la versión de producción.
- **Navegador**: una nueva compilación sobre la que se ejecutan las pruebas de Playwright.

Separarlos ayuda a localizar el fallo: un error de tipos y un menú inaccesible requieren respuestas distintas. A cambio, se compila dos veces. Es el coste de esta organización; reducirlo exigiría revisar cómo compartir el resultado entre trabajos.

## Probar recorridos que importan

Las pruebas de navegador recorren la portada en varios anchos y comprueban enlaces, navegación con teclado y cambio de idioma. Incluyen controles automáticos de accesibilidad con axe y verifican que cada idioma ofrece su PDF. El selector de idioma también se prueba sin JavaScript.

Estas pruebas se centran en lo que una persona necesita hacer: navegar, leer y descargar el documento adecuado. Un fallo deja de ser «la web no funciona» y se convierte en un recorrido concreto que podemos reproducir.

## Mantener el CV al día

Cada idioma tiene una fuente Markdown y un PDF versionado. El verificador compara el texto visible extraído, su orden, los enlaces y el número esperado de páginas. Si cambio la fuente y olvido regenerar el documento, la integración continua puede detectar la discrepancia.

Es un control útil también para el contenido. El PDF forma parte de lo que publico y tiene que corresponderse con el texto que mantengo en el repositorio.

## Conservar pistas cuando algo falla

El flujo cancela ejecuciones anteriores de la misma referencia cuando llega un cambio nuevo. Los trabajos tienen límites de duración y permisos de lectura del repositorio. Si falla la suite de navegador, sus resultados se conservan como artefactos durante siete días.

Playwright permite un reintento en CI. Si una prueba pasa al repetirla, todavía queda una pregunta por resolver: qué provocó el primer fallo. Los resultados guardados ayudan a distinguir un problema del producto, de la prueba o del entorno.

## Qué me permite concluir un check verde

Me dice que los controles definidos han pasado: esos recorridos funcionan en Chromium y los documentos coinciden con sus fuentes. Quedan fuera otros navegadores, la revisión con tecnologías de asistencia, el rendimiento de usuarios reales y la inspección visual del PDF. Tampoco evalúa la calidad del CV para una candidatura.

Después del despliegue en Vercel hago una comprobación manual de la URL pública, el cambio de idioma y las descargas. Es el cierre del proceso descrito aquí, aunque todavía no sea una etapa automatizada de GitHub Actions.

La siguiente mejora sería ejecutar una prueba breve contra el despliegue correcto. Añadiría otros navegadores según los riesgos que necesitara cubrir. Antes de sumar un control, quiero poder decir qué fallo busca y qué información dejará si lo encuentra.

## Código que acompaña esta nota

- [GitHub Actions](https://github.com/gCuadros/gcuadros-web/blob/e0376e67f1ba36cc48cecad694c02262d4a8459c/.github/workflows/ci.yml)
- [Playwright](https://github.com/gCuadros/gcuadros-web/blob/e0376e67f1ba36cc48cecad694c02262d4a8459c/tests/portfolio.spec.ts)
- [Verificación de los CV](https://github.com/gCuadros/gcuadros-web/blob/e0376e67f1ba36cc48cecad694c02262d4a8459c/scripts/verify_cv.py)
