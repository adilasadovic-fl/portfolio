import type { Project } from "@/content/types";

export const executableCollaboration: Project = {
  slug: "executable-collaboration",
  order: 2,
  title: "Executable Collaboration",
  subtitle: "A code-based framework for design × engineering",
  company: "Miro — Content Security",
  domain: "Design systems & engineering workflow",
  role: "Senior Product Designer — framework author",
  timeframe: "Active working model, now in pilot",
  summary:
    "Designers build running prototypes with AI-assisted coding tools, version them in Git, review changes with engineering through pull requests and live previews, and generate communication from the work itself.",
  tags: ["Design × engineering", "Version control", "Design systems"],
  status: "In use by one team, piloting with others",
  meta: [
    { label: "Company", value: "Miro — Content Security" },
    { label: "Role", value: "Framework author and designer" },
    { label: "Timeframe", value: "Active working model, now in pilot" },
    {
      label: "Scope",
      value: "Workflow, tooling model, decision records, adoption",
    },
  ],
  thumbnail: {
    src: "/media/executable-collaboration/system-diagram.jpg",
    alt: "Diagram of the Executable Collaboration framework showing five layers and a seven-step loop from creation to merge and notification.",
    width: 1024,
    height: 682,
  },
  layout: "v2",
  // Unused by the v2 renderer; kept as an empty array so the shared `Project` type
  // (and any v1 call sites) don't need optional chaining.
  sections: [],
  v2: {
    heroContext: {
      facts: [
        { label: "Role", value: "Framework author and designer" },
        { label: "Timeframe", value: "Active working model, now in pilot" },
        { label: "Status", value: "In use by one team, piloting with others" },
        { label: "Scope", value: "Workflow, tooling model, decision records, adoption" },
      ],
      mandate:
        "Identified the same collaboration failure across two separate research moments, then designed the framework, review model and adoption path now piloting beyond my own team.",
    },
    sections: [
      {
        id: "problem",
        nav: "Problem",
        title: "The pattern had been there for years",
        kind: "problem",
        lead: "Design and engineering were working on the same product, but not in the same system.",
        body: "An internal engineering study in 2022, and a cross-team workshop three years later, surfaced the same five problems regardless of team or tooling: unclear source of truth, late feasibility discussions, incomplete documentation, design-system drift and low visibility into change.",
        gap: {
          existingLabel: "Existing",
          existingItems: ["Design mockups", "Slack updates"],
          missingLabel: "Not yet connected",
          missingItems: ["Shared source of truth", "Feasibility review", "Change history"],
          connectorLabel: "static artifact",
        },
      },
      {
        id: "changed",
        nav: "What I changed",
        title: "Changing the artifact, not the handoff",
        kind: "changed",
        beforeAfter: {
          before: "The design artifact was a representation of the product.",
          after: "The design artifact is a running version of the product.",
        },
        lifecycleIntro:
          "A prototype now behaves like engineering work, on one loop reused for every change:",
        lifecycleSteps: [
          "Design intent",
          "Build",
          "Commit",
          "Pull request",
          "Live preview",
          "Review",
          "Merge",
        ],
        systemFigure: {
          src: "/media/executable-collaboration/system-diagram.jpg",
          alt: "Diagram of the Executable Collaboration framework. Five layers — creation, source of truth, render and review, communication, and design system — sit beside a seven-step loop: design is executable, code with AI, commit, open PR, review in PR, merge, notify and digest. A design system foundation runs underneath every layer.",
          caption:
            "One medium: five layers, a single loop from prototype to merge, and the production design system underneath all of it.",
          width: 1024,
          height: 682,
          size: "full",
          zoomable: true,
        },
        decisions: [
          {
            index: "01",
            title: "Design directly in code",
            paragraphs: [
              "Designers work in code with AI assistance — not to become frontend engineers, but to make the interaction itself available for inspection much earlier. Complex states, responsive behavior and edge cases can be experienced rather than inferred from static frames.",
            ],
            consequence: "Feasibility questions surface at creation, not after handoff.",
          },
          {
            index: "02",
            title: "Give every decision a record, not just the code",
            paragraphs: [
              "Running prototypes live in a shared Git repository, where changes have history and experiments happen safely on branches. Meaningful decisions are documented alongside the work through Design Decision Records, adapting the engineering pattern of Architecture Decision Records for design.",
            ],
            consequence: "The repository captures both what changed and why it changed.",
          },
          {
            index: "03",
            title: "Make the pull request the collaboration object",
            paragraphs: [
              "The first version's review lived partly outside Git, which moved the original source-of-truth problem into feedback instead of solving it. Every pull request now generates a live preview, and design and engineering resolve feasibility and design feedback in the same thread.",
            ],
            media: {
              kind: "quote",
              text: "Feedback becomes anchored to a version of the work, not a moment in a Slack thread.",
            },
          },
          {
            index: "04",
            title: "Consume the real design system, not an imitation of it",
            paragraphs: [
              "A coded prototype is still unreliable if its components merely imitate the production design system. The framework consumes the actual design-system packages engineers use, so a production component change propagates into the prototype automatically.",
            ],
            consequence: "A company that can't support this becomes visible immediately, instead of hidden behind accurate-looking mockups.",
          },
        ],
      },
      {
        id: "beyond",
        nav: "Beyond the solution",
        title: "From my workflow to a team workflow",
        kind: "leverage",
        items: [
          {
            index: "01",
            title: "I identified the gap",
            text: "This wasn't an AI problem. A 2022 engineering study and a 2025 cross-team workshop — different teams, different tools — surfaced the same structural collaboration failure, which is what justified building a framework rather than a better handoff habit.",
          },
          {
            index: "02",
            title: "The design crossed organizational boundaries",
            text: "Adapting Architecture Decision Records into Design Decision Records, and getting AI-assisted communication to automate transcription without automating judgment, both required working directly with engineering's own conventions rather than inventing separate ones.",
          },
          {
            index: "03",
            title: "The model had to outlast the person who built it",
            text: "The first version succeeded under unusually favorable conditions — I was already comfortable in Git with a close engineering relationship. A four-stage maturity model and an explicit pilot with less-favorable teams are how the framework is meant to survive without me operating it.",
          },
        ],
      },
      {
        id: "after",
        nav: "After",
        title: "What Executable Collaboration became",
        kind: "reveal",
        groups: [
          {
            title: "The workflow, in production",
            description:
              "Design intent becomes a running prototype in Git; every pull request opens a live preview; design and engineering review the same running interaction; a Design Decision Record captures why. This is the actual loop the team uses today, not a proposal.",
            figures: [
              {
                figure: {
                  src: "/media/executable-collaboration/system-diagram.jpg",
                  alt: "Diagram of the Executable Collaboration framework. Five layers — creation, source of truth, render and review, communication, and design system — sit beside a seven-step loop: design is executable, code with AI, commit, open PR, review in PR, merge, notify and digest. A design system foundation runs underneath every layer.",
                  caption:
                    "The five layers and the seven-step loop, as they run today — not a proposed model.",
                  width: 1024,
                  height: 682,
                  theme: "light",
                },
                emphasis: "primary",
              },
            ],
          },
        ],
      },
      {
        id: "evidence",
        nav: "Evidence",
        title: "What we know so far",
        kind: "evidence",
        items: [
          {
            kind: "progression",
            from: "One team",
            to: "Multi-team pilot",
            note: "Additional teams are adopting the workflow under deliberately less favorable conditions than the original one.",
            emphasis: "primary",
          },
          {
            kind: "note",
            title: "Three pilot measures defined",
            text: "Design iteration cycle time, engineering visibility, and documentation overhead are baselined before adoption and re-measured during the pilot — the numbers are allowed to prove the framework wrong.",
            emphasis: "primary",
          },
          {
            kind: "note",
            title: "A four-stage maturity model",
            text: "Static → Linked → Executable → Integrated. Teams can move toward executable collaboration incrementally rather than adopting everything at once.",
            emphasis: "secondary",
          },
          {
            kind: "note",
            title: "Named, unresolved risks",
            text: "Git fluency, discipline under deadline pressure, and tooling dependency are called out explicitly as open questions the pilot needs to test, not solved problems.",
            emphasis: "secondary",
          },
        ],
      },
    ],
  },
};
