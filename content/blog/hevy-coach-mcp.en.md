---
title: "Why I built Hevy Coach MCP"
summary: "I asked an AI to analyse my training. The answer sounded convincing; the numbers did not add up. That is how Hevy Coach MCP started."
date: "2026-10-07"
tags: ["MCP", "Projects", "AI"]
---

I had been logging my workouts in Hevy for a while. One day, I asked an AI assistant to analyse my bench press progress. The answer came with percentages, explanations and the appearance of a serious analysis. When I checked the calculations myself, the numbers did not add up.

It was not just the mistake that made me stop. I would have believed the answer if I had not checked it.

## Calculate before interpreting

That was the starting point for Hevy Coach MCP. I wanted the assistant to query my workout history and receive metrics that had already been calculated, rather than reconstructing them from a conversation.

The server queries the Hevy API and calculates metrics for progress, volume and consistency. The assistant can then interpret them. Keeping those steps separate makes the calculations and their source data easier to check, although interpreting the results still requires judgement.

## Read data and decide what can change

The server's tools can read workout history, but cannot modify it. Write operations are limited to routines, routine folders and body measurements.

Reading history and changing a routine have different consequences. The tools therefore indicate whether they read or modify data. An MCP client can use those annotations to request confirmation; its authorisation controls are still necessary.

## The decisions behind the project

The technical case study explains how I separated calculations from conversation, what happens when data is missing and how I handle write retries to reduce the risk of duplicates. It includes links to the reviewed code and tests for those behaviours.

[Read the Hevy Coach MCP technical case study](/en/proyectos/hevy).

The code and installation instructions are on [GitHub](https://github.com/gCuadros/hevy-mcp). To connect it, you need a Hevy PRO account, an API key and a compatible MCP client.
