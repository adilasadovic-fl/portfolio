export type MediaTheme = "light" | "dark";

export type Figure = {
  src: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
  /** `full` breaks out of the text measure — use for diagrams and wide UI. */
  size?: "text" | "full";
  theme?: MediaTheme;
  /** Diagrams open in a lightbox so labels stay readable. */
  zoomable?: boolean;
};

export type Block =
  | { type: "lead"; text: string }
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "question"; text: string }
  | { type: "quote"; text: string }
  | { type: "bullets"; items: string[] }
  | { type: "stack"; items: string[] }
  | { type: "flow"; steps: string[] }
  | { type: "axis"; left: string; right: string }
  | { type: "defs"; items: { term: string; text: string }[] }
  | { type: "decision"; label: string; title: string; blocks: Block[] }
  | { type: "figure"; figure: Figure }
  | { type: "figures"; figures: Figure[] }
  | { type: "note"; text: string };

export type CaseSection = {
  id: string;
  /** Short label used by the in-page navigation. */
  nav: string;
  title?: string;
  blocks: Block[];
  surface?: "paper" | "night";
};

export type ProjectMeta = {
  label: string;
  value: string;
};

export type Project = {
  slug: string;
  order: number;
  title: string;
  subtitle: string;
  company: string;
  domain: string;
  role: string;
  timeframe: string;
  summary: string;
  tags: string[];
  meta: ProjectMeta[];
  thumbnail: Figure;
  hero?: Figure;
  sections: CaseSection[];
  status?: string;
  /**
   * `split` places the project metadata and hero image side-by-side on large screens.
   * `v2` renders the case study through the newer, section-driven case-study system
   * (see `v2` below) instead of `sections`/`Blocks`. `sections` must still be provided
   * (it can be an empty array) so existing call sites don't need optional chaining.
   */
  layout?: "split" | "default" | "v2";
  /** Content for the `v2` case-study renderer. Required when `layout` is `"v2"`. */
  v2?: ProjectV2Content;
};

/* ---------------------------------------------------------------------- *
 * V2 case-study system                                                    *
 *                                                                          *
 * A second, more opinionated content shape for case studies that follow   *
 * the "problem -> what changed -> leverage -> reveal -> evidence" spine.  *
 * It intentionally does not reuse `Block`/`CaseSection`, which are tuned  *
 * for long-form essay content. Projects opt in via `layout: "v2"`.        *
 * ---------------------------------------------------------------------- */

export type HeroFact = { label: string; value: string };

export type HeroContextV2 = {
  facts: HeroFact[];
  /** Defaults to "Mandate" if omitted. */
  mandateLabel?: string;
  /** Rendered larger than the facts, smaller than the hero subtitle. */
  mandate: string;
};

/** A concise "what existed vs. what was missing" diagram for the Problem section. */
export type GapDiagram = {
  existingLabel: string;
  existingItems: string[];
  missingLabel: string;
  missingItems: string[];
  connectorLabel: string;
};

export type BeforeAfterStatement = { before: string; after: string };

/** Supporting visual for a decision. Keeps decisions from becoming identical cards. */
export type DecisionMediaV2 =
  | { kind: "none" }
  | { kind: "quote"; text: string }
  /** A cropped, non-zoomable detail of an existing figure, positioned beside the text. */
  | { kind: "detail-side"; figure: Figure; focus: string; caption: string }
  /** A cropped, non-zoomable detail of an existing figure, shown smaller below the text. */
  | { kind: "detail-below"; figure: Figure; focus: string; caption: string }
  /** The full figure at meaningful size, breaking out to full width. */
  | { kind: "full"; figure: Figure };

export type DecisionV2 = {
  index: string;
  title: string;
  /** Rendered as separate paragraphs; supports `**bold**` like `Block` text. */
  paragraphs: string[];
  /** One visually emphasized takeaway line, rendered larger than body text. */
  consequence?: string;
  media?: DecisionMediaV2;
};

/** A short, numbered idea used in the "leverage" (Staff-scope) section. */
export type LeverageItem = { index: string; title: string; text: string };

/** One image, with an indication of whether it should dominate its group. */
export type RevealFigure = { figure: Figure; emphasis?: "primary" | "secondary" };

export type ProductRevealGroup = {
  title: string;
  description?: string;
  figures: RevealFigure[];
};

export type EvidenceItemV2 =
  | { kind: "numeric"; value: string; label: string; note?: string; emphasis?: "primary" | "secondary" }
  | { kind: "progression"; from: string; to: string; note?: string; emphasis?: "primary" | "secondary" }
  | { kind: "note"; title: string; text: string; emphasis?: "primary" | "secondary" };

export type CaseSectionV2 =
  | {
      id: string;
      nav: string;
      title: string;
      kind: "problem";
      lead: string;
      body: string;
      gap: GapDiagram;
    }
  | {
      id: string;
      nav: string;
      title: string;
      kind: "changed";
      beforeAfter: BeforeAfterStatement;
      lifecycleIntro: string;
      lifecycleSteps: string[];
      systemFigure?: Figure;
      decisions: DecisionV2[];
    }
  | {
      id: string;
      nav: string;
      title: string;
      kind: "leverage";
      items: LeverageItem[];
    }
  | {
      id: string;
      nav: string;
      title: string;
      kind: "reveal";
      groups: ProductRevealGroup[];
    }
  | {
      id: string;
      nav: string;
      title: string;
      kind: "evidence";
      items: EvidenceItemV2[];
    };

export type ProjectV2Content = {
  heroContext: HeroContextV2;
  sections: CaseSectionV2[];
};

export type OtherWork = {
  title: string;
  context: string;
  note: string;
  timeframe: string;
};
