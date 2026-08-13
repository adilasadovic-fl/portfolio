import type { Project } from "@/content/types";

export const awsQuickSetup: Project = {
  slug: "aws-quick-setup",
  order: 3,
  title: "AWS Quick Setup",
  subtitle: "Hiding cloud complexity behind user intent",
  company: "AWS Systems Manager",
  domain: "Cloud infrastructure & operations",
  role: "UX Designer",
  timeframe: "Oct 2020 — Feb 2024",
  summary:
    "Define the desired state in one place. Quick Setup applies and governs it across target accounts at scale, turning a complex multi-account configuration into one governed setup flow.",
  tags: ["Multi-account", "Configuration at scale", "Operator tooling"],
  meta: [
    { label: "Company", value: "Amazon Web Services — Systems Manager" },
    { label: "Role", value: "UX Designer" },
    { label: "Timeframe", value: "Oct 2020 — Feb 2024" },
    {
      label: "Scope",
      value: "Console experience, information architecture, terminology, flows",
    },
  ],
  thumbnail: {
    src: "/media/aws-quick-setup/system-diagram.jpg",
    alt: "Diagram of AWS Quick Setup showing a management layer that configures a patch policy and deploys a StackSet into multiple target accounts.",
    width: 1024,
    height: 768,
  },
  hero: {
    src: "/media/aws-quick-setup/system-diagram.jpg",
    alt: "Diagram of AWS Quick Setup. In the management account, a patch policy is configured, a CloudFormation orchestration is generated and a StackSet is deployed. Associations are then created in each target account, where a CloudFormation stack instance, a State Manager association and the AWS-RunPatchBaseline document apply to managed nodes. Outcomes listed are one configuration, multi-account rollout, centralized governance and patch compliance at scale.",
    caption:
      "Define once, deploy across accounts: recommended configurations in the management account become governed actions across target environments.",
    width: 1024,
    height: 768,
    size: "full",
    zoomable: true,
  },
  sections: [
    {
      id: "overview",
      nav: "Overview",
      blocks: [
        {
          type: "lead",
          text: "Quick Setup turns a complex multi-account configuration into one governed setup flow.",
        },
        {
          type: "p",
          text: "Define the desired state in one place. AWS Quick Setup applies and governs it across your target accounts at scale.",
        },
        {
          type: "note",
          text: "Written case study in progress — the full narrative for this project is being rewritten and will replace this section. The system diagram and console work below are the shipped artefacts.",
        },
      ],
    },
    {
      id: "system",
      nav: "System",
      title: "One configuration, two layers",
      blocks: [
        {
          type: "p",
          text: "The management layer is where the configuration is defined: a patch policy is configured, an orchestration is generated, and a StackSet is deployed.",
        },
        {
          type: "p",
          text: "The target layer is where it takes effect: associations are created in each target account and applied to managed nodes.",
        },
        {
          type: "stack",
          items: [
            "One configuration",
            "Multi-account rollout",
            "Centralized governance",
            "Patch compliance at scale",
          ],
        },
      ],
    },
    {
      id: "console",
      nav: "Console",
      title: "Configuration surfaces",
      blocks: [
        {
          type: "figure",
          figure: {
            src: "/media/aws-quick-setup/patch-schedule.png",
            alt: "Quick Setup patch policy form: patch operation set to scan and install, recommended default scanning schedule, custom install schedule with a CRON expression, and options to wait for the first CRON interval and to reboot if needed.",
            caption:
              "Scanning and installation: recommended defaults sit beside custom schedules, so an operator can accept a baseline or express an exact CRON window.",
            width: 1024,
            height: 565,
            size: "full",
            theme: "light",
          },
        },
        {
          type: "figure",
          figure: {
            src: "/media/aws-quick-setup/patch-baselines.png",
            alt: "Patch baseline selection listing every supported operating system with a baseline dropdown and baseline ID, three rows highlighted where custom baselines were selected.",
            caption:
              "Baseline selection across every supported operating system, with the AWS defaults visible next to the custom baselines an organisation has chosen.",
            width: 1024,
            height: 735,
            size: "full",
            theme: "light",
          },
        },
        {
          type: "figures",
          figures: [
            {
              src: "/media/aws-quick-setup/configuration-library.png",
              alt: "Systems Manager configuration library screen with a search field, popular labels filter and cards for Host Management, Application Management, Resource Management, Agent installation, Machine learning operational monitoring and Compliance Management.",
              caption:
                "The configuration library: capabilities presented as configurations an operator can find, compare and provision.",
              width: 1024,
              height: 951,
              theme: "dark",
            },
            {
              src: "/media/aws-quick-setup/configuration-detail.png",
              alt: "Application Manager configuration detail panel describing who the configuration is for, what will be provisioned, and the benefits, with screenshots of the resulting dashboards.",
              caption:
                "Configuration detail: what a configuration provisions and what it enables, before anything is deployed.",
              width: 895,
              height: 1002,
              theme: "dark",
            },
          ],
        },
      ],
    },
    {
      id: "role",
      nav: "My role",
      title: "My role",
      blocks: [
        {
          type: "p",
          text: "Led UX design for product areas within AWS Systems Manager including Application Manager, Fleet Manager, Documents, Patch Manager, Change Manager, and Quick Setup.",
        },
        {
          type: "p",
          text: "Designed operator-facing experiences across web console and CLI, producing information architecture, terminology, solution proposals, design documentation, and user flows.",
        },
        {
          type: "p",
          text: "Designed for complex cloud administration use cases involving policy, organizational scope, operational visibility, and action-taking across high-complexity environments.",
        },
      ],
    },
  ],
};
