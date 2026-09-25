export const links = {
  linkedin: "https://www.linkedin.com/in/gonzalo-cuadros/",
  github: "https://github.com/gCuadros",
  hevy: "https://github.com/gCuadros/hevy-mcp",
  hevyPost:
    "https://www.linkedin.com/feed/update/urn:li:activity:7491054566491324416/",
  nextTalk: "https://www.youtube.com/watch?v=J4FLmBctSBs",
  fabrics:
    "https://www.linkedin.com/feed/update/urn:li:activity:7335604924593901568/",
} as const;

export const navigation = [
  { href: "#trabajo", label: "Trabajo" },
  { href: "#trayectoria", label: "Trayectoria" },
  { href: "#proyecto", label: "Proyecto" },
  { href: "#charlas", label: "Charlas" },
] as const;

export const experience = [
  {
    company: "MANGO",
    description:
      "Liderazgo técnico y mentoría. Decisiones de arquitectura compartidas con otros Tech Leads, evolución de plataformas y DevOps aplicado al frontend.",
    roles: [{ title: "Frontend Tech Lead", period: "ene. 2025 — actualidad" }],
  },
  {
    company: "GFT · proyecto MANGO",
    description:
      "De Senior a Tech Lead en el proyecto MANGO: desarrollo frontend y evolución de la plataforma, con definición de estándares y prioridades técnicas.",
    roles: [
      { title: "Frontend Tech Lead", period: "jul. 2024 — ene. 2025" },
      { title: "Senior Frontend Engineer", period: "jun. 2023 — jul. 2024" },
    ],
  },
  {
    company: "Wuolah",
    description:
      "De Senior a Tech Lead: migración a Next.js y TypeScript, gestión de datos con React Query y unificación de repositorios con Turborepo.",
    roles: [
      { title: "Tech Lead, Front End", period: "ene. 2023 — jun. 2023" },
      { title: "Senior Frontend Developer", period: "jul. 2022 — ene. 2023" },
    ],
  },
  {
    company: "Freepik",
    description:
      "Migración a Next.js y de JavaScript a TypeScript. Gestión de despliegues e infraestructura en GCP, incluidos entornos sandbox.",
    roles: [{ title: "Frontend Developer", period: "jul. 2020 — jul. 2022" }],
  },
  {
    company: "Cash Converters España",
    description:
      "Desarrollo frontend y participación en UX/UI con React y Redux, Angular y NgRx, Sass y Salesforce Commerce Cloud.",
    roles: [{ title: "Frontend Developer", period: "mar. 2019 — jul. 2020" }],
  },
];
