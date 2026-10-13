// Local illustration of Hevy's public Epley calculation, not an MCP client.
// Reference: gCuadros/hevy-mcp @ c3a2326, src/engine/e1rm.ts (MIT).
export type DemoSet = { weightKg: number | null; reps: number | null };

export function estimateSet(set: DemoSet): number | null {
  if (
    set.weightKg === null ||
    set.reps === null ||
    !Number.isFinite(set.weightKg) ||
    !Number.isFinite(set.reps) ||
    set.weightKg <= 0 ||
    set.reps <= 0
  )
    return null;
  return set.weightKg * (1 + set.reps / 30);
}

export function bestEstimate(sets: readonly DemoSet[]): number | null {
  const scores = sets.map(estimateSet).filter((n): n is number => n !== null);
  return scores.length ? Math.max(...scores) : null;
}

// Entirely fictional bench-press sets. No personal workout data.
export const baseline: readonly DemoSet[] = [
  { weightKg: 60, reps: 8 },
  { weightKg: 60, reps: 7 },
  { weightKg: 60, reps: 6 },
];
export const scenarios = [
  {
    id: "complete",
    es: "Registros completos",
    en: "Complete records",
    sets: [
      { weightKg: 65, reps: 8 },
      { weightKg: 65, reps: 7 },
      { weightKg: 65, reps: 6 },
    ],
  },
  {
    id: "partial",
    es: "Falta un dato",
    en: "One value missing",
    sets: [
      { weightKg: null, reps: 8 },
      { weightKg: 65, reps: 7 },
      { weightKg: 65, reps: 6 },
    ],
  },
  {
    id: "empty",
    es: "Sin series válidas",
    en: "No valid sets",
    sets: [
      { weightKg: null, reps: 8 },
      { weightKg: 65, reps: null },
      { weightKg: null, reps: null },
    ],
  },
] as const;
