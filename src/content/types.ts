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
};

export type OtherWork = {
  title: string;
  context: string;
  note: string;
  timeframe: string;
};
