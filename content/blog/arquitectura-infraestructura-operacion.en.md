---
title: "Designing a system that can be changed and operated"
summary: "Deployment autonomy, reproducible infrastructure and recovery: the decisions I want to resolve before choosing tools."
date: "2026-10-13"
tags: ["Architecture", "Infrastructure", "DevOps"]
---

When reviewing an architecture proposal, I want to understand which change we are trying to make easier and who will maintain the system afterwards. The framework is part of that decision, alongside data, contracts, permissions and the work the team will take on.

Consider a hypothetical product: a public catalogue and a private area for editing content. They share information, but have different requirements for freshness, availability and access. This is not a description of any company's architecture.

## What needs to evolve independently

I would start with change: does releasing a new editor require deploying the catalogue? Do both modify the same data? Who maintains the contract between them? A boundary that requires every deployment to be coordinated offers little autonomy, even with separate repositories.

If one team maintains both parts and they change at the same pace, I would consider modules within one application. Splitting them into services adds network calls, partial failures, version compatibility and operational work. Separation can be worthwhile when scaling, isolation or autonomy requirements differ and the team can support that cost. Microsoft's [guidance on service boundaries](https://learn.microsoft.com/en-us/azure/architecture/microservices/model/microservice-boundaries) explores these tensions.

Repository structure is a separate decision. A monorepo can contain independently deployable units. Multiple repositories can still share a database and require coordinated changes. I care about data ownership and explicit contracts, without confusing folders with system boundaries.

For the catalogue, I would consider caching and pre-generated content according to how much staleness the information allows. In the editor, authorisation must be enforced where data is accessed, even if the interface hides certain actions. Static HTML, a client application with an API and server rendering can each fit different parts. I would choose according to those needs and the cost the team can sustain.

## Infrastructure someone else can rebuild

For this product, I would want to recreate an environment without relying on settings that exist only in a console or one person's memory. A versioned definition needs controlled versions of tools and dependencies, known inputs and a review process.

Infrastructure code alone leaves several decisions open:

- **State:** where it lives, who can access it, how concurrent changes are coordinated and how it can be recovered.
- **Identities:** what the application can do and what the deployment process can do. Their permissions need not match.
- **Secrets:** how they are supplied and rotated without exposing them in the repository or execution logs.
- **Manual changes:** how they are detected and who decides whether to include them in the definition or revert them.

Terraform is one possible tool. Marking a value as `sensitive` hides parts of its presentation, but does not by itself prevent it from being stored in state or plan files. Its [sensitive data documentation](https://developer.hashicorp.com/terraform/language/manage-sensitive-data) explains that distinction. I would also inspect differences between the definition and the real environment: [drift detection](https://developer.hashicorp.com/terraform/tutorials/cloud/drift-and-policy) identifies changes, but deciding which version should prevail requires context.

Separating environments and permissions limits the scope of some mistakes, at the cost of more resources and maintenance. I would match that isolation to the risk. Data restoration needs a separate check: recreating an empty database does not demonstrate that the product can recover. Acceptable data loss and recovery time should be agreed with the people who depend on the service.

## Releasing with a recovery path

In this example, a release could affect reading the catalogue or saving changes in the editor. I would want to observe those journeys and associate their errors and latency with the deployed version. A running process or low CPU usage does not prove that someone can complete their task.

A gradual rollout can reduce the number of people exposed to a problem. It needs representative traffic, a useful comparison between versions and criteria for stopping; with little traffic, it may not provide enough evidence. The [Google SRE chapter on canary releases](https://sre.google/workbook/canarying-releases/) covers both their value and the conditions needed to evaluate them.

I would also check data compatibility. If a release removes a field the previous version requires, reverting to the old artefact does not restore that contract. One option is to introduce a compatible change first, migrate readers and writers, verify the result and remove the old structure later. Supporting both has a cost, but provides a clearer recovery window than changing everything at once.

I would make explicit who stops a rollout, what can be reverted and what requires data repair. The operational complexity has to fit the team that will support it.

## What I would write down

A decision needs context if it is to be revisited: the problem, the alternatives considered, the accepted cost and the signal that would justify a different approach. That lets someone else continue the work without reconstructing every conversation.

These are criteria for discussing a design, not outcomes attributed to internal projects. In the public examples, decisions can be followed through to their implementation: [Hevy's write policy](/en/proyectos/hevy) and [the limits of this site's CI](/en/blog/cicd-frontend).
