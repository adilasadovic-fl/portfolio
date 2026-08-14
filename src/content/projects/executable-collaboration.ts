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
  hero: {
    src: "/media/executable-collaboration/system-diagram.jpg",
    alt: "Diagram of the Executable Collaboration framework. Five layers — creation, source of truth, render and review, communication, and design system — sit beside a seven-step loop: design is executable, code with AI, commit, open PR, review in PR, merge, notify and digest. A design system foundation runs underneath every layer.",
    caption:
      "One medium: five layers, a single loop from prototype to merge, and the production design system underneath all of it.",
    width: 1024,
    height: 682,
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
          text: "Design and engineering were working on the same product, but not in the same system.",
        },
        {
          type: "p",
          text: "Design lived in mockups. Feasibility discussions happened somewhere else. Changes were announced in Slack. Documentation decayed. Engineers regularly had to determine which artifact represented the latest intent.",
        },
        {
          type: "p",
          text: "I started questioning whether this was really a communication problem.",
        },
        { type: "question", text: "What if the underlying problem was the artifact itself?" },
        {
          type: "p",
          text: "I designed and introduced a different collaboration model: designers build running prototypes with AI-assisted coding tools, version them in Git, review changes with engineering through pull requests and live previews, and generate communication from the work itself.",
        },
        {
          type: "p",
          text: "The design artifact becomes **executable, versioned and inspectable**.",
        },
        {
          type: "p",
          text: "Instead of improving the handoff between two separate systems, the framework moves design and engineering closer to a shared one.",
        },
      ],
    },
    {
      id: "problem",
      nav: "Problem",
      title: "The pattern had been there for years",
      blocks: [
        { type: "p", text: "This wasn't an AI problem." },
        {
          type: "p",
          text: "An internal engineering study in 2022 surfaced three recurring frustrations with design collaboration:",
        },
        { type: "quote", text: "feasibility discussions happened too late, mockups became outdated, and documentation was incomplete." },
        {
          type: "p",
          text: "Three years later, a workshop across design and engineering produced almost the same signal.",
        },
        {
          type: "p",
          text: "The strongest pain point was **unclear source of truth**, followed by low visibility into design changes, design-system misalignment, communication overhead and missing changelogs.",
        },
        {
          type: "p",
          text: "Across both research moments, five problems kept resurfacing:",
        },
        {
          type: "defs",
          items: [
            {
              term: "Source of truth",
              text: "Where does the latest product intent actually live?",
            },
            {
              term: "Feasibility",
              text: "When does engineering have enough access to the design to challenge technical assumptions?",
            },
            {
              term: "Documentation",
              text: "Why are teams manually documenting information already implicit in the work?",
            },
            {
              term: "Design-system drift",
              text: "How do prototypes stay aligned with the components engineers actually ship?",
            },
            {
              term: "Visibility",
              text: "How does engineering know what changed without designers repeatedly broadcasting it?",
            },
          ],
        },
        { type: "p", text: "The repetition mattered." },
        { type: "p", text: "Different teams. Different years. Different tools." },
        { type: "p", text: "Same structural problems." },
        { type: "p", text: "That led to a hypothesis:" },
        {
          type: "quote",
          text: "Static design artifacts make collaboration problems inevitable because the artifact cannot participate in the engineering system around it.",
        },
      ],
    },
    {
      id: "shift",
      nav: "The shift",
      title: "Changing the artifact",
      blocks: [
        { type: "p", text: "The framework is built around one shift:" },
        {
          type: "quote",
          text: "From a representation of the product to a running version of the product.",
        },
        {
          type: "p",
          text: "A designer uses an AI-assisted development environment to build the interaction directly with production design-system components.",
        },
        { type: "p", text: "That prototype enters version control." },
        {
          type: "p",
          text: "From there it behaves much more like engineering work:",
        },
        {
          type: "flow",
          steps: [
            "Design intent",
            "Build",
            "Commit",
            "Pull request",
            "Live preview",
            "Review",
            "Merge",
            "Communicate",
            "Iterate",
          ],
        },
        { type: "p", text: "Each stage solves a different collaboration problem." },
      ],
    },
    {
      id: "layers",
      nav: "Five layers",
      title: "Five layers make the system work",
      surface: "night",
      blocks: [
        { type: "p", text: "The framework separates the workflow into five concerns." },
        {
          type: "decision",
          label: "01",
          title: "Creation",
          blocks: [
            { type: "p", text: "Designers work directly in code with AI assistance." },
            {
              type: "p",
              text: "The goal isn't to turn designers into frontend engineers. It is to make the interaction itself available for inspection much earlier.",
            },
            {
              type: "p",
              text: "Complex states, responsive behavior and edge cases can be experienced rather than inferred from static frames.",
            },
          ],
        },
        {
          type: "decision",
          label: "02",
          title: "Source of truth",
          blocks: [
            { type: "p", text: "Running prototypes live in a shared Git repository." },
            { type: "p", text: "Changes have history." },
            { type: "p", text: "Experiments can happen safely on branches." },
            {
              type: "p",
              text: "Meaningful design decisions are documented alongside the work through **Design Decision Records**, adapting the engineering pattern of Architecture Decision Records for design.",
            },
            { type: "p", text: "The repository therefore captures both **what changed** and **why it changed.**" },
          ],
        },
        {
          type: "decision",
          label: "03",
          title: "Render & review",
          blocks: [
            { type: "p", text: "Every pull request creates a live preview." },
            {
              type: "p",
              text: "Designers and engineers review the running interaction through the same change request rather than splitting feedback across a design file, a prototype and Slack.",
            },
            { type: "p", text: "The important shift is not the preview itself." },
            {
              type: "p",
              text: "It is that **feedback becomes anchored to a version of the work**.",
            },
            {
              type: "p",
              text: "When the design changes, its review history doesn't disappear.",
            },
          ],
        },
        {
          type: "decision",
          label: "04",
          title: "Communication",
          blocks: [
            {
              type: "p",
              text: "Once changes are structured in version control, the system can understand what changed.",
            },
            {
              type: "p",
              text: "AI-assisted workflows use that history to draft updates for communication and documentation tools.",
            },
            {
              type: "p",
              text: "The designer still decides what matters and approves everything before it is published.",
            },
            { type: "p", text: "The principle is:" },
            { type: "quote", text: "Automate transcription, not judgment." },
            {
              type: "p",
              text: "The system reduces the repetitive work of explaining a change in three different places without delegating the communication decision itself to AI.",
            },
          ],
        },
        {
          type: "decision",
          label: "05",
          title: "Design system",
          blocks: [
            {
              type: "p",
              text: "This became an important addition to the original model.",
            },
            {
              type: "p",
              text: "A coded prototype is still unreliable if its components merely imitate the production design system.",
            },
            {
              type: "p",
              text: "So the framework consumes the actual design-system packages engineers use.",
            },
            { type: "p", text: "That removes an entire category of drift." },
            {
              type: "p",
              text: "If a production component changes, the prototype changes with it.",
            },
            {
              type: "p",
              text: "And if a company's design system cannot be consumed this way, that limitation becomes visible immediately rather than being hidden behind visually accurate mockups.",
            },
          ],
        },
      ],
    },
    {
      id: "review",
      nav: "Review loop",
      title: "One review loop instead of parallel conversations",
      blocks: [
        {
          type: "p",
          text: "One of the biggest weaknesses in the first version of the system was review.",
        },
        {
          type: "p",
          text: "The source of truth lived in Git, while prototype comments could live somewhere else.",
        },
        {
          type: "p",
          text: "That simply moved the original source-of-truth problem from design into feedback.",
        },
        { type: "p", text: "So I changed the model." },
        { type: "p", text: "A pull request now becomes the collaboration object." },
        {
          type: "flow",
          steps: [
            "PR opened",
            "Running preview generated",
            "Design + engineering review the change",
            "Feasibility questions and design feedback resolve in the same thread",
            "Merge",
          ],
        },
        { type: "p", text: "The preview is where people experience the work." },
        { type: "p", text: "The pull request is where the decision happens." },
        { type: "p", text: "The repository remains the record." },
        { type: "h3", text: "Design Decision Records" },
        {
          type: "p",
          text: "There was another problem static design tools handle poorly: **why did we choose this?**",
        },
        {
          type: "p",
          text: "Engineering already has a useful pattern for this: Architecture Decision Records.",
        },
        {
          type: "p",
          text: "I adapted that idea into **Design Decision Records**.",
        },
        { type: "p", text: "A DDR captures:" },
        {
          type: "bullets",
          items: [
            "the decision being made",
            "the context behind it",
            "alternatives considered",
            "trade-offs",
            "the chosen direction",
            "consequences",
          ],
        },
        {
          type: "p",
          text: "It also answers a surprisingly important question: **what happens to the prototype?**",
        },
        { type: "p", text: "Executable doesn't automatically mean production-ready." },
        {
          type: "p",
          text: "For each project, the team explicitly names whether the prototype is:",
        },
        {
          type: "stack",
          items: [
            "production code",
            "a reference implementation",
            "a specification",
            "temporary exploration",
          ],
        },
        { type: "p", text: "The default model in this framework is **spec-first**." },
        {
          type: "p",
          text: "The running prototype becomes a reference implementation engineering can inspect and compare against rather than code that is automatically assumed to ship.",
        },
        {
          type: "p",
          text: "That distinction prevents “designing in code” from becoming an expensive way of producing disposable mockups.",
        },
      ],
    },
    {
      id: "feedback",
      nav: "Feedback loop",
      title: "Closing the engineering feedback loop",
      blocks: [
        {
          type: "p",
          text: "The original collaboration problem wasn't only that engineers couldn't see changes.",
        },
        {
          type: "p",
          text: "Research showed that **feasibility discussions happened too late**.",
        },
        { type: "p", text: "That means visibility alone isn't enough." },
        { type: "p", text: "Engineering needs a path back into design." },
        {
          type: "p",
          text: "Technical questions, implementation constraints and feasibility concerns therefore flow back through the same pull request and repository.",
        },
        { type: "p", text: "Design doesn't send a finished answer downstream." },
        {
          type: "p",
          text: "The artifact stays open to technical challenge while the solution is still changing.",
        },
        {
          type: "p",
          text: "This is one of the main reasons I think of the framework as **collaboration**, rather than a better handoff mechanism.",
        },
        { type: "h3", text: "Communication becomes an output of the system" },
        {
          type: "p",
          text: "Two lightweight workflows handle most change communication.",
        },
        {
          type: "defs",
          items: [
            {
              term: "Notify",
              text: "The system reads recent changes and drafts an update appropriate to their significance. Small paper cuts may not need an announcement. Meaningful changes can generate proposed messages and related ticket updates. The designer previews, edits and confirms before anything goes out.",
            },
            {
              term: "Digest",
              text: "At a chosen cadence, repository history becomes the starting point for a broader project update: meaningful changes, versions, related work and current previews. Again, AI drafts. A human publishes. An automated safety net catches important changes that were merged without being communicated.",
            },
          ],
        },
        { type: "p", text: "The intent isn't more automation." },
        { type: "p", text: "It's **less duplicated work**." },
      ],
    },
    {
      id: "adoption",
      nav: "Adoption",
      title: "From my workflow to a team workflow",
      blocks: [
        {
          type: "p",
          text: "The framework began in the Content Security design × engineering team, where it is now used as an active working model.",
        },
        { type: "p", text: "That proved it could work in one environment." },
        { type: "p", text: "It did **not** prove it could scale." },
        { type: "p", text: "That distinction matters." },
        {
          type: "p",
          text: "The initial conditions were unusually favourable: I was already comfortable working with Git and had a close working relationship with engineering.",
        },
        {
          type: "p",
          text: "A Staff-level system should not depend on the person who invented it.",
        },
        {
          type: "p",
          text: "So instead of treating the first implementation as proof, I designed the next phase as a pilot.",
        },
        {
          type: "p",
          text: "Additional teams are now adopting the workflow under deliberately less ideal conditions, including designers with less Git experience and different design–engineering relationships.",
        },
        { type: "p", text: "The question isn't:" },
        { type: "question", text: "Can other teams follow my process?" },
        { type: "p", text: "It's:" },
        {
          type: "quote",
          text: "Which parts of the system survive when I'm no longer the person operating it?",
        },
        { type: "h3", text: "What we're testing" },
        { type: "p", text: "The pilot focuses on three measures." },
        {
          type: "defs",
          items: [
            {
              term: "Design iteration cycle time",
              text: "How long does it take to move from an idea to something design and engineering have actually reviewed?",
            },
            {
              term: "Engineering visibility",
              text: "Do engineers understand what changed in design and why without having to reconstruct that information from multiple tools?",
            },
            {
              term: "Documentation overhead",
              text: "How much time is spent manually maintaining updates, specifications and changelogs?",
            },
          ],
        },
        {
          type: "p",
          text: "These are baselined before adoption and measured again during the pilot.",
        },
        { type: "p", text: "The point isn't to validate the framework." },
        { type: "p", text: "**The numbers are allowed to prove it wrong.**" },
        { type: "h3", text: "A maturity model" },
        {
          type: "p",
          text: "The system doesn't require every team to adopt everything at once.",
        },
        { type: "p", text: "I describe adoption through four stages." },
        {
          type: "defs",
          items: [
            {
              term: "Static",
              text: "Design lives primarily in a design tool. The latest artifact is the truth.",
            },
            {
              term: "Linked",
              text: "Designs are connected to tickets and documentation. The system is easier to navigate, but truth remains distributed.",
            },
            {
              term: "Executable",
              text: "Running prototypes live in version control with preview-per-change and shared review. The repository becomes the source of truth.",
            },
            {
              term: "Integrated",
              text: "Creation, design system, review, decision history and communication operate as one connected workflow.",
            },
          ],
        },
        {
          type: "p",
          text: "The maturity model lets teams move toward executable collaboration incrementally rather than treating the framework as an all-or-nothing transformation.",
        },
      ],
    },
    {
      id: "open-questions",
      nav: "Open questions",
      title: "What I don't think the framework solves yet",
      blocks: [
        {
          type: "p",
          text: "The uncomfortable parts are useful because they expose what the pilot actually needs to test.",
        },
        {
          type: "defs",
          items: [
            {
              term: "Git fluency is still a dependency",
              text: "AI makes code creation far more accessible, but designers still need a working mental model of commits, branches and pull requests. How much fluency is enough remains an open question.",
            },
            {
              term: "Discipline is easier to design than maintain",
              text: "Decision records and clean version histories are easy to value when a team has time. Deadline pressure is the real test. Some behavior can be enforced through tooling. Good judgment cannot.",
            },
            {
              term: "Tooling creates dependencies",
              text: "The framework is conceptually tool-agnostic. Any real implementation isn't. Preview environments, AI coding tools and integrations all create dependencies that need to be understood rather than ignored.",
            },
            {
              term: "Executable doesn't mean production",
              text: "The relationship between prototype and production code must remain explicit. Without that agreement, executable design can simply create a more technically sophisticated version of the old handoff problem.",
            },
          ],
        },
      ],
    },
    {
      id: "status",
      nav: "Where it stands",
      title: "Where it stands",
      blocks: [
        {
          type: "p",
          text: "The framework is now part of the working practice of the team where it was created and is being tested with additional teams.",
        },
        {
          type: "p",
          text: "For me, the project has moved beyond a question of tooling.",
        },
        { type: "p", text: "It started with:" },
        { type: "question", text: "How can designers work more effectively with engineers?" },
        { type: "p", text: "The more useful question became:" },
        {
          type: "quote",
          text: "What should the shared artifact between design and engineering actually be?",
        },
        { type: "p", text: "My answer is still being tested." },
        { type: "p", text: "But it is no longer a static picture." },
      ],
    },
  ],
};
