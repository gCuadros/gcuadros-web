---
title: "Por qué construí Hevy Coach MCP"
summary: "Un análisis de entrenamiento sonaba convincente, pero los números no cuadraban. Ese fue el punto de partida de mi servidor MCP para Hevy."
date: "2026-10-07"
tags: ["MCP", "Proyectos", "IA"]
---

Llevaba tiempo registrando mis entrenamientos en Hevy. Un día pedí a un asistente de IA que analizara cómo iba mi press de banca. La respuesta tenía porcentajes, explicaciones y aspecto de análisis serio. Al comprobar las cuentas a mano, los resultados no cuadraban.

Lo que me hizo parar no fue solo el error: fue darme cuenta de que, si no lo hubiera revisado, me lo habría creído.

## Calcular antes de interpretar

De ahí salió Hevy Coach MCP. Quería que el asistente pudiera consultar mi historial y recibir las métricas calculadas, en lugar de reconstruirlas a partir de una conversación.

El servidor conecta con la API de Hevy y separa dos tareas: obtener y calcular los datos, e interpretarlos. El asistente recibe resultados sobre progreso, volumen y constancia para trabajar con ellos. Eso no convierte automáticamente su respuesta en correcta, pero permite comprobar de dónde salen los números.

## Leer el historial y delimitar los cambios

El proyecto consulta el historial de entrenamientos sin exponer herramientas para modificarlo. También permite crear y actualizar rutinas y registrar medidas, con un alcance de escritura separado de las consultas.

Esa distinción importa: leer datos y cambiar una rutina no tienen las mismas consecuencias. Las indicaciones de las herramientas ayudan al cliente MCP a decidir cuándo pedir confirmación; no sustituyen los controles de autorización del cliente.

## Las decisiones detrás del proyecto

En el caso técnico explico cómo separé los cálculos de la conversación, qué pasa cuando faltan datos y cómo trato los reintentos de escritura para reducir el riesgo de duplicados. Incluye enlaces al código revisado y a sus pruebas.

[Leer el caso técnico de Hevy Coach MCP](/proyectos/hevy).

El código y las instrucciones de instalación están en [GitHub](https://github.com/gCuadros/hevy-mcp). La integración requiere una cuenta Hevy PRO y una clave API configurada en un cliente compatible.
