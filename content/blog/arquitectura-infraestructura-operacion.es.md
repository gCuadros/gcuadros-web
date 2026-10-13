---
title: "Diseñar un sistema que se pueda cambiar y operar"
summary: "Autonomía de despliegue, infraestructura reproducible y recuperación: las decisiones que quiero resolver antes de elegir herramientas."
date: "2026-10-13"
tags: ["Arquitectura", "Infraestructura", "DevOps"]
---

En una propuesta de arquitectura me interesa entender qué cambio queremos facilitar y quién va a mantener el sistema después. El framework forma parte de esa decisión, junto con los datos, los contratos, los permisos y el trabajo que asumirá el equipo.

Para concretarlo, planteo un ejemplo hipotético: un producto con un catálogo público y un área privada donde se editan contenidos. Comparten información, pero sus necesidades de actualización, disponibilidad y acceso son distintas. No describe la arquitectura de ninguna empresa.

## Qué necesita evolucionar por separado

Empezaría por los cambios: ¿publicar una nueva versión del editor obliga a desplegar el catálogo? ¿Ambos modifican los mismos datos? ¿Quién mantiene el contrato entre ellos? Una frontera que exige coordinar todos los despliegues ofrece poca autonomía, aunque tenga repositorios separados.

Si un mismo equipo mantiene ambas partes y cambian al mismo ritmo, consideraría módulos dentro de una aplicación. Separarlas en servicios añadiría llamadas de red, fallos parciales, compatibilidad entre versiones y más trabajo operativo. La separación puede compensar cuando hay necesidades distintas de escalado, aislamiento o autonomía, y un equipo capaz de asumir ese coste. La [guía de límites de servicios de Microsoft](https://learn.microsoft.com/en-us/azure/architecture/microservices/model/microservice-boundaries) desarrolla esas tensiones.

La estructura del repositorio es otra decisión. Un monorepo puede contener unidades desplegables independientes. Varios repositorios pueden seguir compartiendo una base de datos y exigir cambios coordinados. Me interesa separar responsabilidad sobre los datos y explicitar contratos, sin confundir carpetas con límites del sistema.

En el catálogo valoraría caché y contenido generado de antemano según cuánto retraso admita la información. En el editor, la autorización debe aplicarse donde se accede a los datos, aunque la interfaz oculte acciones. HTML estático, una aplicación cliente con una API o renderizado en servidor pueden encajar en distintas partes. Elegiría según esas necesidades y el coste que el equipo pueda sostener.

## Infraestructura que otro pueda reconstruir

Para ese producto querría poder recrear un entorno sin depender de ajustes que solo existen en una consola o en la memoria de una persona. La definición versionada tendría que ir acompañada de versiones controladas de sus herramientas y dependencias, entradas conocidas y un proceso de revisión.

Hay decisiones que el código de infraestructura no resuelve solo:

- **Estado:** dónde se guarda, quién accede, cómo se evita que dos cambios interfieran y cómo se recupera.
- **Identidades:** qué puede hacer la aplicación y qué puede hacer el proceso de despliegue. Sus permisos no tienen por qué coincidir.
- **Secretos:** cómo se entregan y rotan sin publicarlos en el repositorio ni en los registros de ejecución.
- **Cambios manuales:** cómo se detectan y quién decide incorporarlos a la definición o revertirlos.

Terraform es una herramienta posible. Marcar un valor como `sensitive` oculta parte de su presentación, pero no impide por sí solo que quede en el estado o en el plan. Esa distinción está en su [documentación sobre datos sensibles](https://developer.hashicorp.com/terraform/language/manage-sensitive-data). Revisaría también las diferencias entre definición y entorno real: [detectar drift](https://developer.hashicorp.com/terraform/tutorials/cloud/drift-and-policy) permite identificar cambios, pero decidir cuál debe prevalecer requiere contexto.

Separar entornos y permisos limita el alcance de algunos errores, a cambio de más recursos y mantenimiento. Ajustaría ese aislamiento al riesgo. Y comprobaría por separado la restauración de datos: poder recrear una base vacía no demuestra que el producto sea recuperable. La pérdida de datos admisible y el tiempo de recuperación deberían acordarse con quienes dependen del servicio.

## Publicar con una salida posible

En el ejemplo, una publicación podría afectar a la lectura del catálogo o al guardado de cambios en el editor. Querría observar esos recorridos y asociar sus errores y latencia con la versión desplegada. Un proceso activo o una CPU tranquila no demuestra que una persona pueda completar su tarea.

Un despliegue gradual puede reducir cuántas personas quedan expuestas a un problema. Necesita tráfico representativo, una comparación útil entre versiones y criterios para detenerse; con poco tráfico, quizá no produzca evidencia suficiente. El [capítulo de Google SRE sobre canarios](https://sre.google/workbook/canarying-releases/) explica tanto su utilidad como las condiciones para evaluarlos.

También comprobaría la compatibilidad de los datos. Si una versión elimina un campo que la anterior necesita, volver al artefacto anterior no recupera ese contrato. Una opción es introducir primero un cambio compatible, migrar lectores y escritores, verificar el resultado y retirar después lo antiguo. Mantener esa convivencia tiene coste, pero ofrece una ventana de recuperación más clara que cambiarlo todo a la vez.

Dejaría explícitos quién detiene el despliegue, qué se puede revertir y qué exige reparar datos. La complejidad operativa tiene que caber en el equipo que va a sostenerla.

## Qué dejaría escrito

Una decisión necesita contexto para poder revisarse: el problema, las alternativas consideradas, el coste aceptado y la señal que justificaría cambiar de enfoque. Eso permite que otra persona continúe el trabajo sin reconstruir toda la conversación.

Estos son criterios para discutir un diseño, no resultados atribuidos a proyectos internos. En los casos públicos sí se puede seguir una decisión hasta su implementación: la [política de escrituras de Hevy](/proyectos/hevy) y los [límites de la CI de esta web](/blog/cicd-frontend).
