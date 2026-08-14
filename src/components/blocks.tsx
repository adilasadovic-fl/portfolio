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

/** Renders `**bold**` spans; the content files stay plain text otherwise. */
export function Rich({ text }: { text: string }): ReactNode {
  const parts = text.split(/\*\*([\s\S]+?)\*\*/g);
  return (
    <>
      {parts.map((part, index) =>
        index % 2 === 1 ? (
          <strong key={index} className="font-medium text-current">
            {part}
          </strong>
        ) : (
          <Fragment key={index}>{part}</Fragment>
        ),
      )}
    </>
  );
}

function BlockView({ block, tone }: { block: Block; tone: Tone }) {
  const t = tones[tone];

  switch (block.type) {
    case "lead":
      return (
        <p className={`max-w-full text-lead ${t.heading}`}>
          <Rich text={block.text} />
        </p>
      );

    case "p":
      return (
        <p className={`max-w-full text-body ${t.body}`}>
          <Rich text={block.text} />
        </p>
      );

    case "h3":
      return (
        <h3 className={`label max-w-full pt-6 ${t.accent}`}>
          <Rich text={block.text} />
        </h3>
      );

    case "question":
      return (
        <p className={`max-w-full text-sub font-medium ${t.heading}`}>
          <Rich text={block.text} />
        </p>
      );

    case "quote":
      return (
        <blockquote className={`max-w-full border-l-2 pl-5 ${t.accentRule}`}>
          <p className={`text-lead ${t.heading}`}>
            <Rich text={block.text} />
          </p>
        </blockquote>
      );

    case "bullets":
      return (
        <ul className={`max-w-full space-y-2 text-body ${t.body}`}>
          {block.items.map((item) => (
            <li key={item} className="flex gap-3">
              <span aria-hidden="true" className={`mt-[0.7em] h-px w-3 shrink-0 ${t.faint} bg-current`} />
              <span>
                <Rich text={item} />
              </span>
            </li>
          ))}
        </ul>
      );

    case "stack":
      return (
        <ul className={`max-w-full divide-y ${t.rule} border-y ${t.rule}`}>
          {block.items.map((item) => (
            <li key={item} className={`py-2.5 text-sub font-medium ${t.heading}`}>
              <Rich text={item} />
            </li>
          ))}
        </ul>
      );

    case "flow":
      return (
        <ol className="flex flex-wrap items-center gap-x-3 gap-y-2">
          {block.steps.map((step, index) => (
            <li key={step} className="flex items-center gap-3">
              {index > 0 ? (
                <span aria-hidden="true" className={t.faint}>
                  →
                </span>
              ) : null}
              <span
                className={`label bg-accent px-2.5 py-1.5 text-white normal-case tracking-normal`}
              >
                {step}
              </span>
            </li>
          ))}
        </ol>
      );

    case "axis":
      return (
        <div className={`max-w-full border-y ${t.rule} py-5`}>
          <div className="flex items-center gap-4">
            <span className={`label ${t.heading}`}>{block.left}</span>
            <span aria-hidden="true" className={`h-px flex-1 ${t.rule} border-t`} />
            <span aria-hidden="true" className={t.faint}>
              ⟷
            </span>
            <span aria-hidden="true" className={`h-px flex-1 ${t.rule} border-t`} />
            <span className={`label ${t.heading}`}>{block.right}</span>
          </div>
        </div>
      );

    case "defs":
      return (
        <dl className={`max-w-full divide-y ${t.rule} border-t ${t.rule}`}>
          {block.items.map((item) => (
            <div key={item.term} className="grid gap-1 py-5 sm:grid-cols-[13rem_1fr] sm:gap-8">
              <dt className={`text-body font-medium ${t.heading}`}>{item.term}</dt>
              <dd className={`text-body ${t.body}`}>
                <Rich text={item.text} />
              </dd>
            </div>
          ))}
        </dl>
      );

    case "decision":
      return (
        <div className={`border-t pt-8 ${t.rule}`}>
          <p className={`label ${t.accent}`}>{block.label}</p>
          <h3 className={`max-w-full mt-3 text-section font-medium ${t.heading}`}>
            {block.title}
          </h3>
          <div className="mt-6 space-y-5">
            <Blocks blocks={block.blocks} tone={tone} />
          </div>
        </div>
      );

    case "figure":
      return (
        <div className={block.figure.size === "full" ? "max-w-[64rem]" : "max-w-full"}>
          <Figure figure={block.figure} />
        </div>
      );

    case "figures":
      return (
        <div className="grid max-w-[64rem] gap-6 md:grid-cols-2">
          {block.figures.map((figure) => (
            <Figure
              key={figure.src}
              figure={figure}
              sizes="(min-width: 768px) 40vw, 100vw"
            />
          ))}
        </div>
      );

    case "note":
      return (
        <p className={`max-w-full border-l-2 pl-5 text-[14px] ${t.rule} ${t.muted}`}>
          <Rich text={block.text} />
        </p>
      );
  }
}

export function Blocks({ blocks, tone = "paper" }: { blocks: Block[]; tone?: Tone }) {
  return (
    <>
      {blocks.map((block, index) => (
        <BlockView key={index} block={block} tone={tone} />
      ))}
    </>
  );
}
