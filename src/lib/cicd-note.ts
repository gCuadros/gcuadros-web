export const cicdNote = {
  es: {
    title: "CI de frontend: qué significa un check verde",
    description:
      "Cómo uso este portfolio para comprobar código, recorridos de usuario y documentos antes de publicar, y qué queda fuera de esos controles.",
    label: "Nota técnica · CI/CD",
    back: "Volver al portfolio",
    read: "Leer la nota",
    sources: "Código que acompaña esta nota",
    sections: [
      [
        "Empezar por lo que puede romperse",
        [
          "En este portfolio, publicar un cambio puede romper algo más que la compilación: un enlace al CV puede apuntar al idioma incorrecto, el menú puede dejar de funcionar con teclado o el PDF puede quedarse atrás respecto a su fuente editable. Mi punto de partida es convertir esos riesgos concretos en comprobaciones.",
          "El ejemplo es el repositorio público de esta web. No describe procesos internos de ninguna compañía. Las referencias al final fijan la versión del código que analizo para que se pueda contrastar lo que cuento.",
        ],
      ],
      [
        "Tres controles, tres preguntas distintas",
        [
          "La integración continua se ejecuta en las pull requests y en los cambios de main. El trabajo de calidad revisa formato, lint, tipos y correspondencia de los CV con sus fuentes. El de compilación comprueba que se puede construir la versión de producción. El de navegador vuelve a construir la aplicación y ejecuta Playwright sobre ella.",
          "Los trabajos están separados para localizar el fallo: un error de tipos y un menú inaccesible requieren respuestas distintas. Esta elección repite la compilación en dos trabajos; es un coste explícito del diseño actual, no una optimización de tiempo que haya medido.",
        ],
      ],
      [
        "Probar recorridos que importan",
        [
          "Las pruebas de navegador recorren la portada en varios anchos, comprueban enlaces, navegación con teclado y cambio de idioma. También incluyen controles automáticos de accesibilidad con axe y verifican que cada versión ofrece el PDF correspondiente. El selector de idioma se prueba incluso sin JavaScript.",
          "Un check verde significa que esos escenarios han pasado en Chromium. No demuestra compatibilidad con todos los navegadores, ni sustituye una revisión con tecnologías de asistencia. Tampoco convierte una prueba de laboratorio en una medición del rendimiento que experimentan usuarios reales.",
        ],
      ],
      [
        "El contenido publicado también tiene un contrato",
        [
          "El CV tiene una fuente Markdown por idioma y un PDF versionado. El verificador compara el texto visible extraído, su orden, los enlaces y el número esperado de páginas. Si se edita la fuente y se olvida regenerar el documento, la integración continua puede detectar la discrepancia.",
          "Ese contrato evita una clase concreta de desajuste. No evalúa si el texto convence a una persona que está contratando ni garantiza una puntuación en un filtro de selección. La maquetación del PDF sigue necesitando una revisión visual después de regenerarlo.",
        ],
      ],
      [
        "Hacer que un fallo se pueda investigar",
        [
          "El flujo cancela ejecuciones anteriores de la misma referencia cuando llega un cambio nuevo. Los trabajos tienen límites de duración y permisos de lectura del repositorio. Si falla la suite de navegador, se guardan sus resultados como artefactos durante siete días.",
          "Estas decisiones ayudan a evitar trabajo obsoleto y a conservar contexto para investigar. Playwright permite un reintento en CI. Que una prueba pase al repetirla no explica el fallo inicial: hay que investigar si el problema está en el producto, en la prueba o en el entorno.",
        ],
      ],
      [
        "Publicar no termina en la compilación",
        [
          "El despliegue se realiza en Vercel. Después de integrar los cambios compruebo la URL pública, el cambio de idioma y las descargas. Esa comprobación posterior es manual en el proceso descrito aquí; no la presento como una etapa automatizada del flujo de GitHub Actions.",
          "El siguiente paso razonable sería automatizar una prueba breve contra el despliegue correcto y ampliar navegadores cuando el riesgo lo justifique. Mi criterio para añadir un control es poder explicar qué fallo detecta, qué evidencia deja y qué límites conserva. Un check verde es una señal acotada para decidir, no una garantía de que todo funciona.",
        ],
      ],
    ],
  },
  en: {
    title: "Frontend CI: what a green check means",
    description:
      "How I use this portfolio to check code, user journeys and documents before publishing, and what those checks cannot establish.",
    label: "Technical note · CI/CD",
    back: "Back to portfolio",
    read: "Read the note",
    sources: "Code behind this note",
    sections: [
      [
        "Start with what can break",
        [
          "Publishing a change to this portfolio can break more than the build: a CV link might point to the wrong language, keyboard navigation might stop working, or the PDF might fall behind its editable source. I start by turning those specific risks into checks.",
          "The example is this website’s public repository. It does not describe any company’s internal processes. The references below pin the version I discuss, so readers can check the claims against the code.",
        ],
      ],
      [
        "Three checks, three different questions",
        [
          "Continuous integration runs on pull requests and changes to main. The quality job checks formatting, lint, types and CV consistency with their sources. The build job checks whether the production application can be built. The browser job builds the application again and runs Playwright against it.",
          "Separate jobs help locate failures: a type error and an inaccessible menu need different responses. This repeats the build across two jobs. That is an explicit cost of the current design, not a speed improvement I have measured.",
        ],
      ],
      [
        "Test journeys that matter",
        [
          "Browser tests visit the homepage at several widths and check links, keyboard navigation and language switching. They also run automated accessibility checks with axe and verify that each language offers the corresponding PDF. The language switch is tested with JavaScript disabled too.",
          "A green check means those scenarios passed in Chromium. It does not establish compatibility with every browser or replace testing with assistive technology. A laboratory test is not a measurement of the performance experienced by real users either.",
        ],
      ],
      [
        "Published content needs a contract too",
        [
          "The CV has one Markdown source per language and a versioned PDF. The verifier compares extracted visible text, its order, links and the expected page count. If the source changes but the document is not regenerated, CI can catch that mismatch.",
          "That contract prevents a specific kind of drift. It does not assess whether the writing persuades a hiring professional or guarantee a screening score. The PDF layout still needs a visual review after regeneration.",
        ],
      ],
      [
        "Make failures possible to investigate",
        [
          "The workflow cancels older runs for the same reference when a new change arrives. Jobs have time limits and read-only repository permissions. If the browser suite fails, its results are retained as artifacts for seven days.",
          "These decisions help avoid obsolete work and preserve context for investigation. Playwright allows one retry in CI. A test passing on retry does not explain the initial failure: the issue still needs investigation to distinguish product, test and environment problems.",
        ],
      ],
      [
        "Publishing does not end with a build",
        [
          "Vercel handles deployment. After merging changes, I check the public URL, language switching and downloads. That follow-up check is manual in the process described here; it is not an automated stage of the GitHub Actions workflow.",
          "A reasonable next step would be a short automated check against the correct deployment, with broader browser coverage when the risk warrants it. Before adding a check, I want to explain which failure it detects, what evidence it leaves and where its limits lie. A green check is a bounded signal for a decision, not a guarantee that everything works.",
        ],
      ],
    ],
  },
} as const;
