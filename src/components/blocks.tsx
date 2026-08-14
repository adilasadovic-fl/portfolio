import { Fragment, type ReactNode } from "react";
import type { Block } from "@/content/types";
import { Figure } from "@/components/media";

export type Tone = "paper" | "night";

export const tones = {
  paper: {
    heading: "text-ink",
    body: "text-ink-soft",
    muted: "text-ink-muted",
    faint: "text-ink-faint",
    rule: "border-rule",
    accent: "text-accent",
    accentRule: "border-accent",
  },
  night: {
    heading: "text-paper",
    body: "text-[#cfcdc4]",
    muted: "text-[#9b998f]",
    faint: "text-[#7a786f]",
    rule: "border-night-rule",
    accent: "text-[#8fa2ff]",
    accentRule: "border-[#8fa2ff]",
  },
} as const;

export function Rich({ text }: { text: string }): ReactNode {
  const parts = text.split(/\*\*([\s\S]+?)\*\*/g);
  return <>{parts.map((part, index) => index % 2 === 1 ? <strong key={index} className="font-medium text-current">{part}</strong> : <Fragment key={index}>{part}</Fragment>)}</>;
}

function BlockView({ block, tone }: { block: Block; tone: Tone }) {
  const t = tones[tone];
  switch (block.type) {
    case "lead":
      return <p className={`measure-wide text-lead ${t.heading}`}><Rich text={block.text} /></p>;
    case "p":
      return <p className={`measure text-body ${t.body}`}><Rich text={block.text} /></p>;
    case "h3":
      return <h3 className={`measure-wide pt-10 text-sub font-medium tracking-tight ${t.heading}`}><Rich text={block.text} /></h3>;
    case "question":
      return <p className={`measure-wide border-l-2 py-1 pl-5 text-sub font-medium ${t.heading} ${t.accentRule}`}><Rich text={block.text} /></p>;
    case "quote":
      return (
        <blockquote className={`my-10 max-w-[50rem] border-y py-8 ${t.rule}`}>
          <p className={`text-section font-medium tracking-tight ${t.heading}`}><Rich text={block.text} /></p>
        </blockquote>
      );
    case "bullets":
      return <ul className={`measure space-y-3 text-body ${t.body}`}>{block.items.map((item) => <li key={item} className="grid grid-cols-[12px_1fr] gap-3"><span aria-hidden="true" className={`mt-[0.72em] h-px ${t.faint} bg-current`} /><span><Rich text={item} /></span></li>)}</ul>;
    case "stack":
      return (
        <ul className={`max-w-[50rem] grid border-y ${t.rule} sm:grid-cols-2`}>
          {block.items.map((item, index) => <li key={item} className={`py-4 pr-6 text-sub font-medium ${t.heading} ${index % 2 ? "sm:border-l sm:pl-6" : ""} ${index > 1 ? `border-t ${t.rule}` : ""}`}><Rich text={item} /></li>)}
        </ul>
      );
    case "flow":
      return <ol className={`max-w-[64rem] grid gap-px border ${t.rule} ${tone === "night" ? "bg-night-rule" : "bg-rule"} sm:grid-cols-2 lg:grid-cols-3`}>{block.steps.map((step, index) => <li key={step} className={`${tone === "night" ? "bg-night" : "bg-paper"} p-5`}><span className={`label ${t.faint}`}>{String(index + 1).padStart(2, "0")}</span><p className={`mt-3 text-sub font-medium ${t.heading}`}>{step}</p></li>)}</ol>;
    case "axis":
      return <div className={`max-w-[50rem] border-y ${t.rule} py-7`}><div className="grid grid-cols-[auto_1fr_auto] items-center gap-5"><span className={`text-sub font-medium ${t.heading}`}>{block.left}</span><span aria-hidden="true" className={`relative h-px ${tone === "night" ? "bg-night-rule" : "bg-rule-strong"}`}><span className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-3 text-lg ${tone === "night" ? "bg-night" : "bg-paper"} ${t.accent}`}>↔</span></span><span className={`text-sub font-medium ${t.heading}`}>{block.right}</span></div></div>;
    case "defs":
      return <dl className={`max-w-[58rem] divide-y ${t.rule} border-y ${t.rule}`}>{block.items.map((item) => <div key={item.term} className="grid gap-2 py-5 sm:grid-cols-[14rem_1fr] sm:gap-10"><dt className={`text-body font-medium ${t.heading}`}>{item.term}</dt><dd className={`text-body ${t.body}`}><Rich text={item.text} /></dd></div>)}</dl>;
    case "decision":
      return (
        <article className={`grid gap-6 border-t pt-8 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-12 ${t.rule}`}>
          <div><p className={`label ${t.accent}`}>{block.label}</p><h3 className={`mt-3 text-sub font-medium tracking-tight ${t.heading}`}>{block.title}</h3></div>
          <div className="space-y-5"><Blocks blocks={block.blocks} tone={tone} /></div>
        </article>
      );
    case "figure":
      return <div className={block.figure.size === "full" ? "max-w-[68rem]" : "measure-wide"}><Figure figure={block.figure} /></div>;
    case "figures":
      return <div className="grid max-w-[68rem] gap-6 md:grid-cols-2">{block.figures.map((figure) => <Figure key={figure.src} figure={figure} sizes="(min-width: 768px) 40vw, 100vw" />)}</div>;
    case "note":
      return <p className={`measure border-l pl-5 text-[14px] ${t.rule} ${t.muted}`}><Rich text={block.text} /></p>;
  }
}

export function Blocks({ blocks, tone = "paper" }: { blocks: Block[]; tone?: Tone }) {
  return <>{blocks.map((block, index) => <BlockView key={index} block={block} tone={tone} />)}</>;
}
