---
title: "Why I built Hevy Coach MCP"
summary: "A workout analysis sounded convincing, but the numbers did not add up. That was the starting point for my MCP server for Hevy."
date: "2026-10-07"
tags: ["MCP", "Projects", "AI"]
---

I had been logging my workouts in Hevy for a while. One day, I asked an AI assistant to analyse my bench press progress. The answer came with percentages, explanations and all the appearance of a serious analysis. When I checked the calculations myself, the numbers did not add up.

It was not just the mistake that made me stop. It was realising that I would have believed the answer if I had not checked it.

## Calculate before interpreting

That became the starting point for Hevy Coach MCP. I wanted the assistant to query my workout history and receive calculated metrics, rather than reconstruct them from a conversation.

The server connects to the Hevy API and separates two jobs: retrieving and calculating data, and interpreting it. The assistant receives results about progress, volume and consistency to work with. That does not automatically make its answer correct, but it makes the numbers traceable.

## Read history and limit changes

The project queries workout history without exposing tools to modify it. It also supports creating and updating routines and recording body measurements, with a write scope separate from queries.

That distinction matters: reading data and changing a routine have different consequences. Tool annotations help the MCP client decide when to request confirmation; they do not replace the client’s authorisation controls.

## The decisions behind the project

The technical case study explains how I separated calculations from conversation, what happens when data is missing and how I handle write retries to reduce the risk of duplicates. It includes links to the reviewed code and its tests.

[Read the Hevy Coach MCP technical case study](/en/proyectos/hevy).

The code and installation instructions are on [GitHub](https://github.com/gCuadros/hevy-mcp). The integration requires a Hevy PRO account and an API key configured in a compatible client.
