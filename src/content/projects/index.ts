import type { OtherWork, Project } from "@/content/types";
import { securityMode } from "./security-mode";
import { executableCollaboration } from "./executable-collaboration";
import { awsQuickSetup } from "./aws-quick-setup";

export const projects: Project[] = [
  securityMode,
  executableCollaboration,
  awsQuickSetup,
].sort((a, b) => a.order - b.order);

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function adjacentProjects(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  return {
    next: projects[(index + 1) % projects.length],
  };
}

/**
 * Additional work. These establish range and deliberately have no case-study
 * route — the supplied content does not yet support one.
 */
export const otherWork: OtherWork[] = [
  {
    title: "Application Manager — cross-account for AWS Organizations",
    context: "AWS Systems Manager",
    note: "Delegated account setup, permissions, targeting, and organization-wide views and actions.",
    timeframe: "2020 — 2024",
  },
  {
    title: "Fleet Manager, Documents, Patch Manager, Change Manager",
    context: "AWS Systems Manager",
    note: "Operator-facing experiences across web console and CLI: information architecture, terminology, solution proposals and user flows.",
    timeframe: "2020 — 2024",
  },
  {
    title: "Data Discovery, Intelligent Guardrails, Auto-classification, Prompt Blocking",
    context: "Miro — Enterprise Guard",
    note: "Enterprise governance workflows, including custom business-sensitive data discovery and Microsoft Purview DSPM for AI integration.",
    timeframe: "2024 — present",
  },
  {
    title: "OPA · Raiffeisen mobile banking · AgentLocator · Link M",
    context: "Fintech and SaaS",
    note: "End-to-end UX/UI and product design for launched products, combining product positioning, workflow design and detailed UI execution.",
    timeframe: "Before 2020",
  },
];
