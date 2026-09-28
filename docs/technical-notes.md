# Technical notes

The first note lives at `/notas/cicd-frontend` and `/en/notas/cicd-frontend`. Content is maintained in `src/lib/cicd-note.ts`; the server component and route metadata are shared. The homepage links to the matching language, and the language switch preserves the note.

The CI example is pinned to public commit `e0376e67f1ba36cc48cecad694c02262d4a8459c`. When updating claims, verify the workflow, browser tests and CV verifier against the cited revision. Distinguish implemented automation from manual deployment verification and possible future work. Do not include company internals or invented outcomes.

The note reuses the existing editorial layout and adds no client-side interaction or new design tokens.
