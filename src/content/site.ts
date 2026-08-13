export const site = {
  name: "Adila Sadovic",
  role: "Senior Product Designer",
  positioning:
    "Enterprise Product Designer for Security, Governance, and Cloud Operations",
  location: "Berlin, Germany",
  email: "adila.sadovic@gmail.com",
  phone: "+49 172 2667345",
  linkedin: {
    label: "linkedin.com/in/adila-sadovic",
    href: "https://www.linkedin.com/in/adila-sadovic",
  },
  resume: {
    label: "Resume",
    href: "/adila-sadovic-cv.pdf",
  },
  url: "https://adilasadovic.com",
  hero: {
    headline: "I design complex systems until they feel obvious.",
    standfirst:
      "Product designer working across enterprise software, infrastructure, security and AI-enabled ways of building.",
  },
  summary: [
    "Product designer specializing in enterprise security, governance, compliance, and cloud operations. Experience designing admin and operator systems across AWS Systems Manager and Miro Enterprise Guard, with a focus on scalable workflows for compliance, observability, permissions, automation, risk reduction, and complex decision-making.",
    "Strong track record working closely with engineering on ambiguous, high-complexity products that translate policy, infrastructure, and operational control requirements into usable product behavior.",
  ],
} as const;

export type ExperienceEntry = {
  company: string;
  role: string;
  timeframe: string;
  location?: string;
  points: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "Miro DACH GmbH",
    role: "Senior Product Designer",
    timeframe: "Feb 2024 — Present",
    location: "Berlin, Germany",
    points: [
      "Own product design for content security within Enterprise Guard, an enterprise add-on focused on governance, sensitive content protection, and admin controls.",
      "Lead design for enterprise workflows across Data Discovery, custom business-sensitive data discovery, Intelligent Guardrails, Auto-classification, Prompt Blocking, and Microsoft Purview DSPM for AI integration.",
      "Design systems for detection, classification, policy controls, review flows, and AI-related risk management for enterprise administrators and security teams.",
      "Partner with engineering, product, analytics, and research to shape ambiguous, high-complexity problem spaces and turn governance requirements into scalable product workflows.",
    ],
  },
  {
    company: "Amazon Development Center Germany GmbH (AWS Systems Manager)",
    role: "UX Designer",
    timeframe: "Oct 2020 — Feb 2024",
    location: "Berlin, Germany",
    points: [
      "Led UX design for product areas within AWS Systems Manager including Application Manager, Fleet Manager, Documents, Patch Manager, Change Manager, and Quick Setup.",
      "Designed operator-facing experiences across web console and CLI, producing information architecture, terminology, solution proposals, design documentation, and user flows.",
      "Worked on Application Manager initiatives focused on faster time-to-value and stronger operational usability across observability, cost, compliance, and security workflows.",
      "Contributed to cross-account Application Manager capabilities for AWS Organizations, including delegated account setup, permissions, targeting, and organization-wide views and actions.",
      "Designed for complex cloud administration use cases involving policy, organizational scope, operational visibility, and action-taking across high-complexity environments.",
    ],
  },
  {
    company: "Selected earlier product work",
    role: "Product Designer — prior roles, fintech and SaaS",
    timeframe: "Before 2020",
    points: [
      "End-to-end UX/UI and product design for launched products including OPA, Raiffeisen mobile banking, AgentLocator, and Link M.",
      "Worked across fintech and SaaS product contexts, combining product positioning, workflow design, and detailed UI execution.",
      "Built early experience in mobile product design, product-market positioning, and multi-surface customer journeys that complement later enterprise systems work.",
    ],
  },
];

export const patent = {
  id: "U.S. Patent US11799796B1",
  title: "Closed loop change management for cloud-based systems",
  credit: "Named inventor",
  note: "Patent work aligns with AWS Change Manager and reinforces experience designing structured operational workflows for authorization, change execution, and controlled systems behavior.",
};

export const skills = [
  "Enterprise security and governance",
  "Cloud infrastructure and operations",
  "Admin and operator tooling",
  "Compliance and observability workflows",
  "Information architecture",
  "Workflow and systems design",
  "Product strategy",
  "Prototyping",
  "Design documentation",
  "Terminology design",
  "Figma",
  "Cross-functional collaboration with engineering and product",
];
