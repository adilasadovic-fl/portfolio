import type { Project } from "@/content/types";

export const securityMode: Project = {
  slug: "security-mode",
  order: 1,
  title: "Security Mode",
  subtitle: "Protecting sensitive content without breaking collaboration",
  company: "Miro — Enterprise Guard",
  domain: "Enterprise security & governance",
  role: "Senior Product Designer",
  timeframe: "March 2026 — Present",
  summary:
    "A board classified as sensitive changes its security posture: access can narrow, sharing can be constrained, detected content can be reviewed and resolved, and changing the board back requires a governed path.",
  tags: ["Governance", "Permissions & states", "Detection & remediation"],
  status: "Available to enterprise customers",
  meta: [
    { label: "Company", value: "Miro — Enterprise Guard" },
    { label: "Role", value: "Senior Product Designer" },
    { label: "Timeframe", value: "March 2026 — Present" },
    {
      label: "Scope",
      value: "Board experience, admin policy, review and remediation",
    },
  ],
  thumbnail: {
    src: "/media/security-mode/system-diagram.jpg",
    alt: "System diagram of Security Mode: detection signals feed a protected board surrounded by human roles and a governance layer of policies and controls.",
    width: 1024,
    height: 682,
  },

  sections: [
    {
      id: "overview",
      nav: "Overview",
      blocks: [
        { type: "lead", text: "Miro is designed around openness." },
        {
          type: "p",
          text: "Put something on a canvas. Invite people in. Share ideas quickly. Let the board evolve.",
        },
        { type: "p", text: "Enterprise security introduces the opposite requirement." },
        { type: "p", text: "Some content should make a board **less open**." },
        {
          type: "p",
          text: "Security Mode is the system I designed around that contradiction: when a board is classified as sensitive, its security posture changes. Access can narrow, sharing can be constrained, detected content can be reviewed and resolved, and changing the board back requires a governed path.",
        },
        {
          type: "quote",
          text: "Security should change the state of the board, not turn the product into a wall of restrictions.",
        },
        { type: "p", text: "The collaboration continues." },
        { type: "p", text: "The rules around it change." },
      ],
    },
    {
      id: "context",
      nav: "Context",
      title: "A canvas creates a different security problem",
      blocks: [
        {
          type: "p",
          text: "Sensitive-content protection is relatively easy to imagine in a structured document.",
        },
        { type: "p", text: "A Miro board is different. Over its lifetime it can accumulate hundreds, if not thousands components (sticky notes, tables, screenshots) from many contributors." },
        { type: "p", text: "Sensitive information can appear almost anywhere." },
        {
          type: "p",
          text: "At the same time, almost every interaction in the product is optimized to reduce friction around collaboration.",
        },
        { type: "p", text: "That creates a fundamental tension:" },
        { type: "axis", left: "Collaboration", right: "Control" },
        {
          type: "p",
          text: "Move too far toward control and legitimate work becomes painful.",
        },
        {
          type: "p",
          text: "Move too far toward collaboration and sensitive information remains exposed.",
        },
        {
          type: "p",
          text: "Most of the design work happened somewhere on that line.",
        },
      ],
    },
    {
      id: "system",
      nav: "System",
      title: "Security Mode is a system of states",
      blocks: [
        { type: "p", text: "The experience can be understood as one lifecycle:" },
        {
          type: "flow",
          steps: [
            "Detect",
            "Classify",
            "Protect",
            "Review",
            "Remediate",
            "Reclassify",
          ],
        },
        {
          type: "p",
          text: "Each stage changes what the user, the administrator or the system is allowed to do.",
        },
        {
          type: "p",
          text: "That meant the design problem couldn't be solved screen by screen.",
        },
        {
          type: "p",
          text: "The interaction model, permissions model and system behavior had to agree.",
        },
        { type: "h3", text: "01 — Detect" },
        {
          type: "p",
          text: "Sensitive content can be surfaced through different forms of detection.",
        },
        {
          type: "p",
          text: "Some are relatively deterministic, such as structured information types or configured keywords.",
        },
        {
          type: "p",
          text: "Others rely on machine-learning-based sensitivity signals and cannot always provide a precise human-readable explanation for why something matched.",
        },
        {
          type: "p",
          text: "The first challenge was therefore not simply displaying a result.",
        },
        {
          type: "p",
          text: "It was designing **one review model across detection technologies with very different levels of explainability.**",
        },
        {
          type: "p",
          text: "The experience asks the same questions regardless of detection type:",
        },
        {
          type: "stack",
          items: [
            "What was found?",
            "Where is it?",
            "What does the system know about it?",
            "What can I do next?",
          ],
        },
        { type: "p", text: "The quality of the explanation may vary." },
        { type: "p", text: "The mental model does not." },
        { type: "h3", text: "02 — Classify" },
        {
          type: "p",
          text: "Detection alone doesn't define the board's security state.",
        },
        {
          type: "p",
          text: "A board can become classified through automated rules or through people who have the authority to classify it.",
        },
        {
          type: "p",
          text: "Classification therefore introduced an authority problem:",
        },
        { type: "question", text: "Who is allowed to decide that a board is sensitive?" },
        { type: "p", text: "And immediately after:" },
        { type: "question", text: "Who is allowed to decide that it isn't anymore?" },
        { type: "p", text: "Those two permissions cannot be treated as equivalent." },
        { type: "p", text: "Classifying a board generally increases protection." },
        { type: "p", text: "Reclassifying it can remove protection." },
        {
          type: "p",
          text: "The design model had to distinguish between the two and make authority part of the product behavior rather than burying it in an admin setting.",
        },
      ],
    },
    {
      id: "decisions",
      nav: "Decisions",
      title: "Five decisions that shaped the system",
      surface: "night",
      blocks: [
        {
          type: "decision",
          label: "Decision 01",
          title: "Make protection a board state",
          blocks: [
            {
              type: "p",
              text: "One possible model was to treat every security event separately.",
            },
            { type: "p", text: "A restricted share action could produce one warning." },
            { type: "p", text: "A sensitive-content match could produce another." },
            { type: "p", text: "A classification change could create another banner." },
            { type: "p", text: "Technically, those experiences could all work." },
            {
              type: "p",
              text: "Conceptually, they would leave users without a stable answer to a basic question:",
            },
            { type: "question", text: "What kind of board am I working in?" },
            {
              type: "p",
              text: "Instead, classification moves the board into a persistent protected state.",
            },
            { type: "p", text: "Security Mode becomes part of the board's identity." },
            { type: "p", text: "When active:" },
            {
              type: "bullets",
              items: [
                "the board clearly communicates its protected status",
                "access expectations change consistently",
                "relevant sharing behavior follows policy",
                "review and remediation belong to the same security model",
              ],
            },
            {
              type: "p",
              text: "The user isn't encountering unrelated security interruptions.",
            },
            {
              type: "p",
              text: "They're working inside a board whose posture has changed.",
            },
          ],
        },
        {
          type: "decision",
          label: "Decision 02",
          title: "Protect without removing the product",
          blocks: [
            {
              type: "p",
              text: "A straightforward security solution would be to lock down everything.",
            },
            {
              type: "p",
              text: "It would also undermine the reason people use Miro.",
            },
            { type: "p", text: "So the design principle became:" },
            {
              type: "quote",
              text: "Restrict what the risk requires. Preserve everything else.",
            },
            { type: "p", text: "The protected board should still feel like a board." },
            {
              type: "p",
              text: "People should still be able to think, work and collaborate inside it unless a particular action introduces risk.",
            },
            {
              type: "p",
              text: "This sounds obvious, but it changes the design approach.",
            },
            { type: "p", text: "The starting question isn't:" },
            { type: "question", text: "What should we disable?" },
            { type: "p", text: "It's:" },
            { type: "question", text: "Which behavior actually increases exposure?" },
            { type: "p", text: "That creates much more targeted intervention." },
          ],
        },
        {
          type: "decision",
          label: "Decision 03",
          title: "Bring remediation to the content",
          blocks: [
            {
              type: "p",
              text: "Detecting sensitive information creates another workflow problem.",
            },
            {
              type: "p",
              text: "Security systems traditionally surface problems to administrators.",
            },
            {
              type: "p",
              text: "But an administrator often isn't the person who understands why a particular piece of content exists or what should happen to it.",
            },
            {
              type: "p",
              text: "The person closest to the content may be the board owner or contributor.",
            },
            {
              type: "p",
              text: "Security Mode therefore connects admin governance with **in-context remediation**.",
            },
            {
              type: "p",
              text: "On the board, people can inspect sensitive-content findings where those findings actually live.",
            },
            { type: "p", text: "The experience combines detected matches, spatial canvas context and finding details." },

            {
              type: "p",
              text: "That means users don't have to translate an abstract security alert back into a visual workspace before they can act.",
            },
            {
              type: "p",
              text: "The content and the security decision remain connected.",
            },
          ],
        },
        {
          type: "decision",
          label: "Decision 04",
          title: "Make false positives a primary flow",
          blocks: [
            {
              type: "p",
              text: "False positives aren't an edge case in automated detection.",
            },
            { type: "p", text: "They're part of the system." },
            {
              type: "p",
              text: "And their cost is different from the cost of a false negative.",
            },
            {
              type: "p",
              text: "A false negative may leave sensitive information exposed.",
            },
            {
              type: "p",
              text: "A false positive may interrupt legitimate work and reduce trust in future detections.",
            },
            {
              type: "p",
              text: "Designing only for the happy path would therefore create a system that slowly teaches people to ignore it.",
            },
            {
              type: "p",
              text: "Review, dismissal and reclassification were designed as first-class paths.",
            },
            {
              type: "p",
              text: "Where the underlying detection technology can explain a result, the interface exposes that evidence.",
            },
            {
              type: "p",
              text: "Where it cannot, the product compensates with clearer review states, careful language and an obvious human decision path.",
            },
            {
              type: "p",
              text: "The goal isn't to make automation appear more certain than it is.",
            },
            {
              type: "p",
              text: "It's to make **the limits of the automation manageable.**",
            },
          ],
        },
        {
          type: "decision",
          label: "Decision 05",
          title: "Treat configuration as part of the threat model",
          blocks: [
            { type: "p", text: "Administrators need flexibility." },
            {
              type: "p",
              text: "But some configuration changes can weaken protection.",
            },
            {
              type: "p",
              text: "That makes the configuration surface itself part of the security problem.",
            },
            {
              type: "p",
              text: "Security Mode's policy model works across several dimensions:",
            },
            {
              type: "stack",
              items: [
                "reclassification strictness",
                "trigger conditions",
                "false-positive handling",
                "classification permissions",
              ],
            },
            {
              type: "p",
              text: "Rather than assuming every possible combination should be configurable, the system introduces guardrails where a setting could undermine the security model.",
            },
            { type: "p", text: "This changed the design question from:" },
            { type: "question", text: "Which settings do admins want?" },
            { type: "p", text: "to:" },
            {
              type: "quote",
              text: "Which degrees of freedom are safe to expose?",
            },
            { type: "p", text: "That's a much more consequential product decision." },
          ],
        },
      ],
    },
    {
      id: "surfaces",
      nav: "Surfaces",
      title: "One system, two operating surfaces",
      blocks: [
        { type: "p", text: "Security Mode has two main contexts." },
        { type: "h3", text: "On the board" },
        { type: "p", text: "This is where collaboration happens." },
        { type: "p", text: "People need to understand:" },
        {
          type: "bullets",
          items: [
            "that the board is protected",
            "what content triggered review",
            "where that content exists",
            "what action they can take",
            "what effect that action will have",
          ],
        },
        {
          type: "p",
          text: "Security needs to remain legible without dominating the workspace.",
        },
        { type: "h3", text: "In administration" },
        { type: "p", text: "This is where policy is defined." },
        { type: "p", text: "Administrators need to control classification behavior, permissions, protection rules, remediation policy and visibility across protected content." },

        { type: "p", text: "The board is where the problem is resolved." },
        { type: "p", text: "The admin surface is where the rules are governed." },
        {
          type: "p",
          text: "The two experiences rely on the same underlying state and permission model.",
        },
      ],
    },
    {
      id: "behavior",
      nav: "Behavior",
      title: "The hardest design work happened below the interface",
      blocks: [
        {
          type: "p",
          text: "A significant part of Security Mode wasn't visual design.",
        },
        { type: "p", text: "It was defining behavior." },
        { type: "p", text: "Questions included:" },
        {
          type: "stack",
          items: [
            "Where does the authoritative configuration live?",
            "What happens when a board changes classification while people are already working in it?",
            "Which actions remain available in each state?",
            "How do permissions behave during reclassification?",
            "How do multiple detection mechanisms resolve into one board-level state?",
            "What happens when policy and user intent disagree?",
          ],
        },
        {
          type: "p",
          text: "These questions were worked through directly with product and engineering.",
        },
        {
          type: "p",
          text: "Design owned the flow and access models used to reason about the system, not only the screens produced after those decisions.",
        },
        { type: "p", text: "That is an important distinction in the project." },
        {
          type: "p",
          text: "The interface became the visible consequence of a much deeper behavioral model.",
        },
      ],
    },
    {
      id: "status",
      nav: "Where it stands",
      title: "The product grew as one connected system",
      blocks: [
        {
          type: "p",
          text: "Security Mode evolved beyond the initial protected-board experience.",
        },
        {
          type: "p",
          text: "The broader product area now connects several concerns:",
        },
        {
          type: "stack",
          items: [
            "board protection",
            "policy configuration",
            "content review",
            "remediation",
            "admin visibility",
          ],
        },
        { type: "p", text: "The important part isn't the number of features." },
        {
          type: "p",
          text: "It's that each extension reuses the same conceptual foundation:",
        },
        {
          type: "quote",
          text: "A board has a security state, that state has a reason, that state changes behavior, and any change to that state follows policy.",
        },
        {
          type: "p",
          text: "That shared model lets the product expand without asking users to learn a new security concept every time a new capability is added.",
        },
        {
          type: "p",
          text: "The core Security Mode experience is available to enterprise customers.",
        },
        {
          type: "p",
          text: "Review and remediation have expanded the system from simply protecting sensitive boards toward helping people understand and resolve the content that caused protection in the first place.",
        },
        {
          type: "p",
          text: "Configuration and administrative visibility continue to build around the same underlying model.",
        },
        { type: "p", text: "The lifecycle is becoming:" },
        {
          type: "flow",
          steps: ["Detect", "Protect", "Understand", "Resolve", "Govern"],
        },
      ],
    },

  ],
};
