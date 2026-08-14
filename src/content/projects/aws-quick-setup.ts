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
        { type: "lead", text: "AWS gives operators enormous control." },
        { type: "p", text: "That control also creates complexity." },
        {
          type: "p",
          text: "Configuring an operational capability can involve understanding multiple services, permissions, accounts, Regions and infrastructure dependencies before the user can accomplish the thing they actually came to do.",
        },
        {
          type: "p",
          text: "Within AWS Management Tools, we were working on a broader shift away from experiences that mirrored AWS's internal service structure and toward workflows organised around **customer intent**.",
        },
        { type: "p", text: "Quick Setup was one expression of that strategy." },
        { type: "p", text: "The core idea was simple:" },
        {
          type: "quote",
          text: "Let the customer define the outcome. Let the system handle the orchestration.",
        },
        {
          type: "p",
          text: "Instead of asking someone to understand every service required to configure their environment, Quick Setup provided recommended configurations that could be applied across infrastructure from one place.",
        },
      ],
    },
    {
      id: "problem",
      nav: "Problem",
      title: "The problem wasn't a lack of capability",
      blocks: [
        {
          type: "p",
          text: "AWS already had the underlying services customers needed.",
        },
        { type: "p", text: "The problem was assembling them." },
        {
          type: "p",
          text: "A DevOps engineer or IT administrator might need to configure infrastructure across:",
        },
        {
          type: "stack",
          items: [
            "services",
            "accounts",
            "Regions",
            "permissions",
            "resources",
            "organizational units",
          ],
        },
        {
          type: "p",
          text: "Each individual system could be technically correct while the end-to-end task remained difficult.",
        },
        { type: "p", text: "The customer experienced the seams between services." },
        { type: "p", text: "That created a different kind of design question:" },
        {
          type: "question",
          text: "How much of the underlying system does someone need to understand before they can safely configure it?",
        },
        {
          type: "p",
          text: "Too much abstraction and experienced operators lose confidence and control.",
        },
        {
          type: "p",
          text: "Too little abstraction and everyone is forced to reconstruct AWS's internal architecture just to complete a common task.",
        },
        { type: "axis", left: "Abstraction", right: "Control" },
        { type: "p", text: "Quick Setup had to sit between those extremes." },
      ],
    },
    {
      id: "model",
      nav: "Model",
      title: "Shift from configuration to intent",
      blocks: [
        {
          type: "p",
          text: "Traditional infrastructure configuration often begins with the system:",
        },
        {
          type: "stack",
          items: [
            "Which service?",
            "Which resource?",
            "Which policy?",
            "Which Region?",
            "Which account?",
          ],
        },
        { type: "p", text: "We reversed the direction." },
        { type: "p", text: "Start with:" },
        { type: "question", text: "What are you trying to set up?" },
        {
          type: "p",
          text: "Then progressively ask only for the decisions the customer actually needs to make.",
        },
        { type: "p", text: "The model became:" },
        {
          type: "flow",
          steps: [
            "Desired outcome",
            "Recommended configuration",
            "Scope",
            "Review",
            "Deploy",
          ],
        },
        {
          type: "p",
          text: "Underneath that simple flow could sit multiple AWS capabilities and infrastructure operations.",
        },
        { type: "p", text: "The interface didn't remove that complexity." },
        {
          type: "p",
          text: "**It moved it to the layer where it belonged.**",
        },
      ],
    },
    {
      id: "decisions",
      nav: "Decisions",
      title: "Four decisions that shaped the system",
      surface: "night",
      blocks: [
        {
          type: "decision",
          label: "Decision 01",
          title: "Start with a library of outcomes",
          blocks: [
            {
              type: "p",
              text: "One approach would have been to expose the underlying services and let customers compose their own configuration from scratch.",
            },
            { type: "p", text: "That preserved maximum flexibility." },
            { type: "p", text: "It also preserved most of the original complexity." },
            {
              type: "p",
              text: "Instead, Quick Setup introduced a library of recommended configurations built around common operational needs. Customers selected the capability they wanted rather than first identifying every service needed to create it.",
            },
            { type: "p", text: "This changed the entry point from:" },
            { type: "question", text: "Configure these AWS services." },
            { type: "p", text: "to:" },
            { type: "question", text: "Set up this operational capability." },
            { type: "p", text: "The distinction looks small in the interface." },
            {
              type: "p",
              text: "Architecturally, it changes who carries the cognitive load.",
            },
          ],
        },
        {
          type: "decision",
          label: "Decision 02",
          title: "Separate what from where",
          blocks: [
            {
              type: "p",
              text: "Once the customer chose what they wanted to configure, the second major question was scope.",
            },
            { type: "p", text: "Cloud infrastructure doesn't live in one place." },
            { type: "p", text: "A configuration might need to apply to:" },
            {
              type: "stack",
              items: [
                "one resource",
                "one account",
                "selected accounts",
                "selected Regions",
                "or an organisation",
              ],
            },
            {
              type: "p",
              text: "AWS Quick Setup supports configuration across individual accounts as well as multiple accounts and Regions through AWS Organizations.",
            },
            {
              type: "p",
              text: "The design therefore separated two decisions that infrastructure tooling often mixes together:",
            },
            {
              type: "defs",
              items: [
                {
                  term: "What should happen?",
                  text: "Choose and configure the capability.",
                },
                {
                  term: "Where should it happen?",
                  text: "Define the deployment scope.",
                },
              ],
            },
            {
              type: "p",
              text: "That separation gave customers a more stable mental model even as the scale of the operation changed dramatically.",
            },
            {
              type: "p",
              text: "The same interaction could represent a small configuration or an organization-wide one.",
            },
          ],
        },
        {
          type: "decision",
          label: "Decision 03",
          title: "Recommended defaults first, control second",
          blocks: [
            {
              type: "p",
              text: "Infrastructure interfaces often treat flexibility as the same thing as exposing options.",
            },
            { type: "p", text: "They're not the same." },
            {
              type: "p",
              text: "Most customers should not need to make every possible decision.",
            },
            {
              type: "p",
              text: "Quick Setup used recommended defaults based on AWS guidance so customers could move quickly through common configurations, while still allowing deeper customization when the defaults didn't fit.",
            },
            {
              type: "p",
              text: "The interaction followed a principle of progressive control:",
            },
            {
              type: "quote",
              text: "Recommended path first. Advanced control when needed.",
            },
            {
              type: "p",
              text: "This was particularly important in cloud operations because every additional field wasn't merely UI complexity.",
            },
            {
              type: "p",
              text: "It could represent a permission, infrastructure or operational decision with real consequences.",
            },
          ],
        },
        {
          type: "decision",
          label: "Decision 04",
          title: "Show the consequence before deployment",
          blocks: [
            { type: "p", text: "Abstraction creates a trust problem." },
            {
              type: "p",
              text: "If the system is doing work on the customer's behalf, the customer needs to understand **what will happen** before committing to it.",
            },
            {
              type: "p",
              text: "So selecting a configuration led to a preview of the actions and scope before deployment: what would be created, and where it would run, before applying it.",
            },
            { type: "p", text: "That preview played an important role in the model." },
            {
              type: "p",
              text: "The system could hide implementation complexity without becoming opaque.",
            },
            {
              type: "p",
              text: "The customer did not need every low-level step in the primary workflow.",
            },
            {
              type: "p",
              text: "But they still needed enough visibility to make an informed infrastructure decision.",
            },
          ],
        },
      ],
    },
    {
      id: "scale",
      nav: "Scale",
      title: "Designing for one resource and an entire organisation",
      blocks: [
        {
          type: "p",
          text: "Multi-account UX changes the nature of apparently simple controls.",
        },
        {
          type: "p",
          text: "A selector is no longer just a selector when the choice may affect infrastructure across dozens or hundreds of environments.",
        },
        { type: "p", text: "The design needed to make scope continuously legible:" },
        {
          type: "stack",
          items: [
            "What am I changing?",
            "Where will this change apply?",
            "How broad is the blast radius?",
            "Can I verify the target before I deploy?",
          ],
        },
        {
          type: "p",
          text: "This is one of the areas where my broader Systems Manager work was particularly relevant.",
        },
        {
          type: "p",
          text: "I also worked on cross-account experiences that allowed customers to view and act on applications across AWS Organizations, alongside operational workflows spanning observability, cost, compliance and security.",
        },
        { type: "p", text: "Those projects shared the same underlying challenge:" },
        {
          type: "quote",
          text: "Enterprise infrastructure becomes much harder to understand when the unit of interaction grows from one resource to an organization.",
        },
      ],
    },
    {
      id: "platform",
      nav: "Platform",
      title: "A platform, not just a wizard",
      blocks: [
        {
          type: "p",
          text: "There was another important architectural decision behind Quick Setup.",
        },
        {
          type: "p",
          text: "The configuration library wasn't intended to be a fixed collection owned by one team.",
        },
        {
          type: "p",
          text: "The system was designed so other AWS teams could contribute configurations for their own capabilities while relying on the same setup model — the library as a platform on which other teams could publish their own configurations and workflows.",
        },
        { type: "p", text: "That changed the design problem." },
        { type: "p", text: "We weren't only designing a setup flow." },
        {
          type: "p",
          text: "We were defining **a repeatable grammar for setup.**",
        },
        {
          type: "p",
          text: "A new configuration could vary in parameters and underlying services while retaining the same interaction model:",
        },
        {
          type: "flow",
          steps: ["Choose", "Configure", "Scope", "Review", "Deploy"],
        },
        { type: "p", text: "That consistency mattered for customers." },
        {
          type: "p",
          text: "It also created leverage internally: new capabilities didn't need to invent a new setup experience from scratch.",
        },
      ],
    },
    {
      id: "impact",
      nav: "Impact",
      title: "Program-level impact",
      blocks: [
        {
          type: "p",
          text: "Quick Setup sat inside a much larger Management Tools transformation, so I would not attribute the program's business outcomes to one feature or one designer.",
        },
        {
          type: "p",
          text: "The publicly documented program reports improvements including **64% cross-feature adoption**, a **20% reduction in time to first cross-feature**, and **50% month-over-month growth in cross-account deployment**.",
        },
        {
          type: "p",
          text: "I treat those as evidence of the broader direction rather than a causal claim about Quick Setup alone, because more important product outcome for this is structural.",
        },
        {
          type: "quote",
          text: "Customers could increasingly operate AWS around tasks and desired outcomes rather than manually navigating the service architecture underneath them.",
        },
      ],
    },
    {
      id: "outcome-glimpses",
      nav: "Outcome glimpses",
      title: "Configuration surfaces",
      blocks: [
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
        {
          type: "p",
          text: "Inside a configuration, recommended defaults and advanced control sit on the same page, so an operator can accept AWS guidance or express an exact operational policy.",
        },
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
      ],
    },
  ],
};
