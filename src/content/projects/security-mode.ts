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
  layout: "v2",
  // Unused by the v2 renderer; kept as an empty array so the shared `Project` type
  // (and any v1 call sites) don't need optional chaining.
  sections: [],
  v2: {
    heroContext: {
      facts: [
        { label: "Role", value: "Senior Product Designer · Sole designer" },
        { label: "Core team", value: "PM · Engineering Manager · ~15 engineers" },
        { label: "Status", value: "5-customer private beta → public beta" },
        {
          label: "Worked with",
          value: "Security & Compliance · Legal · customer-facing teams · enterprise customers",
        },
      ],
      mandate: "Identified the gap, built the case for prioritization, and owned the system through beta.",
    },
    sections: [
      {
        id: "problem",
        nav: "Problem",
        title: "Classification didn't yet add up to one protected board",
        kind: "problem",
        lead: "Miro could already detect and classify sensitive content on a board.",
        body: "What didn't exist was a single, coherent state that followed from that classification — so a board could be flagged as sensitive without its protection, review or reclassification behavior changing in any consistent way.",
        gap: {
          existingLabel: "Existing",
          existingItems: ["Detect", "Classify"],
          missingLabel: "Not yet governed",
          missingItems: ["Protection", "Review & resolution", "Governed reclassification"],
          connectorLabel: "no governed link",
        },
      },
      {
        id: "changed",
        nav: "What I changed",
        title: "Classification became a state, not a label",
        kind: "changed",
        beforeAfter: {
          before: "Classification was information about the board.",
          after: "Classification changes the board's security state.",
        },
        lifecycleIntro:
          "That state runs on one lifecycle, reused everywhere the product now touches sensitive content:",
        lifecycleSteps: ["Detect", "Classify", "Protect", "Review", "Remediate", "Reclassify"],
        systemFigure: {
          src: "/media/security-mode/system-diagram.jpg",
          alt: "System diagram of Security Mode. Signals in pass through detection or manual classification into a protected board. Human roles surround the board, a governance layer defines policy, and outcomes are confirm, dismiss or remediate.",
          caption: "Security Mode as one system: signal in, protected state, governed outcomes.",
          width: 1024,
          height: 682,
          size: "full",
          zoomable: true,
        },
        decisions: [
          {
            index: "01",
            title: "Make protection a persistent board state",
            paragraphs: [
              "Security events could have stayed isolated alerts — one for a restricted share, another for a sensitive-content match, another for a classification change. Instead, classification moves the board into a persistent protected state that becomes part of its identity.",
            ],
            consequence: "One board state now governs access, sharing, review and remediation.",
          },
          {
            index: "02",
            title: "Protect the board without removing the product",
            paragraphs: [
              "Locking the board down completely is the safer default — and it undermines the reason people use Miro. Security Mode restricts only the actions that introduce risk and leaves the rest of the board untouched.",
            ],
            media: {
              kind: "quote",
              text: "Restrict what the risk requires. Preserve everything else.",
            },
          },
          {
            index: "03",
            title: "Bring remediation to the content",
            paragraphs: [
              "Security tools default to sending findings to an administrator who often doesn't know why the content exists. Security Mode instead opens the finding, its board context and the fix in one panel, right where the content lives.",
            ],
            consequence: "The board owner resolves it without leaving the board.",
            media: {
              kind: "detail-side",
              figure: {
                src: "/media/security-mode/match-details-panel.png",
                alt: "Content remediation panel on a protected board showing match details for a privacy-related finding, including status, detection date, pattern type and actions to resolve or remove the widget.",
                width: 2856,
                height: 1864,
                theme: "light",
              },
              focus: "0% 40%",
              caption: "Finding, context and action in one panel — the interaction this decision is about.",
            },
          },
          {
            index: "04",
            title: "Treat reclassification as part of the threat model",
            paragraphs: [
              "Classifying a board tightens protection. Reclassifying it can loosen it — so the two need different authority, not the same permission wearing two hats.",
            ],
            consequence:
              "Reclassification carries its own guardrails, separate from the ones used to classify a board in the first place.",
            media: {
              kind: "detail-below",
              figure: {
                src: "/media/security-mode/reclassification-panel.png",
                alt: "Content remediation panel showing fifteen matches after a board was reclassified from External to Restricted, grouped under the restrictions now applied to the board.",
                width: 2854,
                height: 1910,
                theme: "light",
              },
              focus: "0% 10%",
              caption: "What changes on reclassification: the restrictions now in force on the board.",
            },
          },
        ],
      },
      {
        id: "beyond",
        nav: "Beyond the solution",
        title: "From product gap to governed security system",
        kind: "leverage",
        items: [
          {
            index: "01",
            title: "I identified the gap",
            text: "Security Mode wasn't assigned to me as a defined feature — I used recurring enterprise customer escalations to help make the case for prioritizing it.",
          },
          {
            index: "02",
            title: "The design crossed organizational boundaries",
            text: "Getting the model right meant working directly with Security & Compliance and Legal on what \u201cprotected\u201d had to mean, and with customer-facing teams and enterprise customers on what would hold up in their environments.",
          },
          {
            index: "03",
            title: "The model had to outlast the first release",
            text: "The same state and permission model now underpins protection, review, remediation, governance and reclassification — not just the original release.",
          },
        ],
      },
      {
        id: "after",
        nav: "After",
        title: "What Security Mode became",
        kind: "reveal",
        groups: [
          {
            title: "Board experience",
            description: "Protected state, review and remediation, in context.",
            figures: [
              {
                figure: {
                  src: "/media/security-mode/match-details-panel.png",
                  alt: "Content remediation panel on a protected board showing match details for a privacy-related finding, including status, detection date, pattern type and actions to resolve or remove the widget.",
                  caption: "A finding, reviewed in place: what was found, and what to do about it.",
                  width: 2856,
                  height: 1864,
                  theme: "light",
                },
                emphasis: "primary",
              },
              {
                figure: {
                  src: "/media/security-mode/reclassification-panel.png",
                  alt: "Content remediation panel showing fifteen matches after a board was reclassified from External to Restricted, grouped under the restrictions now applied to the board.",
                  caption: "After reclassification: matches grouped by the restriction now in force.",
                  width: 2854,
                  height: 1910,
                  theme: "light",
                },
                emphasis: "secondary",
              },
            ],
          },
          {
            title: "Admin & governance experience",
            description: "Policy, classification history and false-match visibility, for the whole organization.",
            figures: [
              {
                figure: {
                  src: "/media/security-mode/admin-overview-table.png",
                  alt: "Enterprise Guard admin view for Security Mode showing boards in Security Mode, a false-match count, and a table of boards with creator, current classification, previous classification, false matches and last activity.",
                  caption:
                    "The governance surface: every protected board, its classification history, and its false-match rate.",
                  width: 3456,
                  height: 1986,
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
            kind: "numeric",
            value: "5",
            label: "Enterprise customers",
            note: "Private beta validation.",
            emphasis: "primary",
          },
          {
            kind: "progression",
            from: "Private beta",
            to: "Public beta",
            note: "Moved to public beta after incorporating customer feedback.",
            emphasis: "primary",
          },
          {
            kind: "note",
            title: "Internal adoption",
            text: "Enabled for Miro's own use after the required Security & Compliance review.",
            emphasis: "secondary",
          },
          {
            kind: "note",
            title: "System leverage",
            text: "The same model expanded into review, remediation, admin visibility and governance.",
            emphasis: "secondary",
          },
        ],
      },
    ],
  },
};
