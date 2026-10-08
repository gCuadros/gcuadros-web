---
title: "Por qué construí Hevy Coach MCP"
summary: "Pedí a una IA que analizara mi entrenamiento. La respuesta convencía; las cuentas no cuadraban. Así empezó Hevy Coach MCP."
date: "2026-10-07"
tags: ["MCP", "Proyectos", "IA"]
---

Llevaba tiempo registrando mis entrenamientos en Hevy. Un día pedí a un asistente de IA que analizara cómo iba mi press de banca. La respuesta tenía porcentajes, explicaciones y aspecto de análisis serio. Al comprobar las cuentas a mano, los resultados no cuadraban.

Lo que me hizo parar no fue solo el error: si no lo hubiera revisado, me lo habría creído.

## Calcular antes de interpretar

De ahí salió Hevy Coach MCP. Quería que el asistente pudiera consultar mi historial y recibir las métricas ya calculadas, en lugar de reconstruirlas a partir de una conversación.

El servidor consulta la API de Hevy y calcula métricas de progreso, volumen y constancia. El asistente puede interpretarlas después. Esa separación permite revisar las cuentas y comprobar de dónde sale cada resultado, aunque la interpretación siga necesitando criterio.

## Consultar datos y decidir qué se puede cambiar

Las herramientas del servidor permiten leer el historial de entrenamientos, pero no modificarlo. Las operaciones de escritura se limitan a rutinas, carpetas de rutinas y medidas corporales.

Leer el historial y cambiar una rutina tienen consecuencias distintas. Por eso las herramientas indican si consultan o modifican datos. El cliente MCP puede usar esas indicaciones para pedir confirmación; sus controles de autorización siguen siendo necesarios.

## Las decisiones detrás del proyecto

En el caso técnico explico cómo separé los cálculos de la conversación, qué ocurre cuando faltan datos y cómo trato los reintentos de escritura para reducir el riesgo de duplicados. Incluye enlaces al código revisado y a las pruebas de esos comportamientos.

[Leer el caso técnico de Hevy Coach MCP](/proyectos/hevy).

El código y las instrucciones de instalación están en [GitHub](https://github.com/gCuadros/hevy-mcp). Para conectarlo necesitas una cuenta Hevy PRO, una clave API y un cliente MCP compatible.
