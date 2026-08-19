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
    "Let the customer define the outcome and let the system handle the orchestration: recommended configurations that can be applied across accounts, Regions and organizations from one place.",
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
  layout: "v2",
  // Unused by the v2 renderer; kept as an empty array so the shared `Project` type
  // (and any v1 call sites) don't need optional chaining.
  sections: [],
  v2: {
    heroContext: {
      facts: [
        { label: "Role", value: "UX Designer" },
        { label: "Timeframe", value: "Oct 2020 — Feb 2024" },
        { label: "Scope", value: "Console experience, information architecture, terminology, flows" },
      ],
      mandate:
        "Identified that the problem was assembly, not capability, and designed the outcome-first setup model AWS Systems Manager adopted as a platform.",
    },
    sections: [
      {
        id: "problem",
        nav: "Problem",
        title: "The problem wasn't a lack of capability",
        kind: "problem",
        lead: "AWS already had every underlying service customers needed.",
        body: "The problem was assembling them. A DevOps engineer configuring one operational capability could touch services, accounts, Regions, permissions, resources and organizational units — each individually correct while the end-to-end task stayed difficult.",
        gap: {
          existingLabel: "Available already",
          existingItems: ["Services", "Permissions", "Accounts & Regions"],
          missingLabel: "Not yet assembled",
          missingItems: ["One workflow", "Recommended defaults", "Deployment across scope"],
          connectorLabel: "no unified path",
        },
      },
      {
        id: "changed",
        nav: "What I changed",
        title: "Shift from configuration to intent",
        kind: "changed",
        beforeAfter: {
          before: "Configuration started with the system: which service, resource, policy, Region, account.",
          after: "Configuration starts with the customer's outcome — the system assembles the rest.",
        },
        lifecycleIntro:
          "That model runs on one repeatable flow, reused by every configuration in the library:",
        lifecycleSteps: ["Desired outcome", "Recommended configuration", "Scope", "Review", "Deploy"],
        systemFigure: {
          src: "/media/aws-quick-setup/system-diagram.jpg",
          alt: "Diagram of AWS Quick Setup. In the management account, a patch policy is configured, a CloudFormation orchestration is generated and a StackSet is deployed. Associations are then created in each target account, where a CloudFormation stack instance, a State Manager association and the AWS-RunPatchBaseline document apply to managed nodes. Outcomes listed are one configuration, multi-account rollout, centralized governance and patch compliance at scale.",
          caption:
            "Define once, deploy across accounts: recommended configurations in the management account become governed actions across target environments.",
          width: 1024,
          height: 768,
          size: "full",
          zoomable: true,
        },
        decisions: [
          {
            index: "01",
            title: "Start with a library of outcomes",
            paragraphs: [
              "Exposing the underlying services and letting customers compose their own configuration preserved maximum flexibility, and most of the original complexity with it. Quick Setup instead introduced a library of recommended configurations built around common operational needs, so customers chose the capability they wanted rather than first identifying every service needed to create it.",
            ],
            consequence: "The entry point changed from configuring AWS services to setting up an operational capability.",
          },
          {
            index: "02",
            title: "Separate what from where",
            paragraphs: [
              "Once a customer chose what to configure, the next question was scope — and cloud infrastructure doesn't live in one place. A configuration might apply to one resource, one account, selected accounts and Regions, or an entire organization through AWS Organizations.",
            ],
            consequence: "The same interaction could represent a single-resource change or an organization-wide one.",
            media: {
              kind: "detail-side",
              figure: {
                src: "/media/aws-quick-setup/quick-setup-library.png",
                alt: "AWS Systems Manager Quick Setup library screen listing configuration types including Host Management, Config Recording, Conformance Packs, Change Manager, DevOps Guru and Distributor, each with a status and a Create action.",
                width: 1425,
                height: 616,
                theme: "light",
              },
              focus: "0% 30%",
              caption: "What a configuration provisions and what it enables, decided before where it deploys.",
            },
          },
          {
            index: "03",
            title: "Recommended defaults first, control second",
            paragraphs: [
              "Infrastructure interfaces often treat flexibility as the same thing as exposing options. Most customers shouldn't need to make every possible decision, so Quick Setup used recommended defaults based on AWS guidance while still allowing deeper customization when the defaults didn't fit.",
            ],
            media: {
              kind: "quote",
              text: "Recommended path first. Advanced control when needed.",
            },
          },
          {
            index: "04",
            title: "Show the consequence before deployment",
            paragraphs: [
              "If the system does work on the customer's behalf, the customer needs to understand what will happen before committing to it. Selecting a configuration led to a preview of the actions and scope before deployment — what would be created, and where it would run.",
            ],
            consequence: "The system could hide implementation complexity without becoming opaque.",
            media: {
              kind: "detail-below",
              figure: {
                src: "/media/aws-quick-setup/patch-schedule.png",
                alt: "Quick Setup patch policy form: patch operation set to scan and install, recommended default scanning schedule, custom install schedule with a CRON expression, and options to wait for the first CRON interval and to reboot if needed.",
                width: 1024,
                height: 565,
                theme: "light",
              },
              focus: "0% 30%",
              caption: "Recommended defaults sit beside custom schedules before anything deploys.",
            },
          },
        ],
      },
      {
        id: "beyond",
        nav: "Beyond the solution",
        title: "From a setup wizard to a setup platform",
        kind: "leverage",
        items: [
          {
            index: "01",
            title: "I identified the deeper problem",
            text: "The problem wasn't AWS lacking a service — it was that no experience assembled existing services around what an operator was actually trying to do. Naming that reframed Quick Setup from one more console feature into a platform-level fix.",
          },
          {
            index: "02",
            title: "The model crossed team boundaries",
            text: "The configuration library wasn't a fixed collection owned by one team. It was designed so other AWS teams could publish their own configurations while relying on the same setup model — a repeatable grammar other teams didn't need to reinvent.",
          },
          {
            index: "03",
            title: "The model had to outlast the first release",
            text: "The same choose → configure → scope → review → deploy model now spans capabilities well beyond the original patch-management use case, including cross-account experiences spanning observability, cost, compliance and security.",
          },
        ],
      },
      {
        id: "after",
        nav: "After",
        title: "What Quick Setup became",
        kind: "reveal",
        groups: [
          {
            title: "Configuration library",
            description:
              "Capabilities presented as configurations an operator can find, compare and provision.",
            figures: [
              {
                figure: {
                  src: "/media/aws-quick-setup/configuration-library.png",
                  alt: "Systems Manager configuration library screen with a search field, popular labels filter and cards for Host Management, Application Management, Resource Management, Agent installation, Machine learning operational monitoring and Compliance Management.",
                  caption:
                    "The configuration library: capabilities presented as configurations an operator can find, compare and provision.",
                  width: 1024,
                  height: 951,
                  theme: "dark",
                },
                emphasis: "primary",
              },
            ],
          },
          {
            title: "Recommended defaults, in the console",
            description:
              "Recommended defaults sit beside custom control, so an operator can accept AWS guidance or express an exact policy.",
            figures: [
              {
                figure: {
                  src: "/media/aws-quick-setup/patch-schedule.png",
                  alt: "Quick Setup patch policy form: patch operation set to scan and install, recommended default scanning schedule, custom install schedule with a CRON expression, and options to wait for the first CRON interval and to reboot if needed.",
                  caption:
                    "Scanning and installation: recommended defaults sit beside custom schedules, so an operator can accept a baseline or express an exact CRON window.",
                  width: 1024,
                  height: 565,
                  theme: "light",
                },
                emphasis: "primary",
              },
              {
                figure: {
                  src: "/media/aws-quick-setup/patch-baselines.png",
                  alt: "Patch baseline selection listing every supported operating system with a baseline dropdown and baseline ID, three rows highlighted where custom baselines were selected.",
                  caption:
                    "Baseline selection across every supported operating system, defaults visible next to an organisation's custom choices.",
                  width: 1024,
                  height: 735,
                  theme: "light",
                },
                emphasis: "secondary",
              },
            ],
          },
        ],
      },
      {
        id: "evidence",
        nav: "Evidence",
        title: "Program-level impact",
        kind: "evidence",
        items: [
          {
            kind: "numeric",
            value: "64%",
            label: "Cross-feature adoption",
            note: "Publicly documented Management Tools program metric — not a causal claim about Quick Setup alone.",
            emphasis: "primary",
          },
          {
            kind: "progression",
            from: "Feature",
            to: "Platform",
            note: "Other AWS teams now publish their own configurations using the same setup model.",
            emphasis: "primary",
          },
          {
            kind: "note",
            title: "20% faster",
            text: "Reduction in time to first cross-feature adoption, program-wide.",
            emphasis: "secondary",
          },
          {
            kind: "note",
            title: "50% MoM growth",
            text: "Growth in cross-account deployment, program-wide.",
            emphasis: "secondary",
          },
        ],
      },
    ],
  },
};
