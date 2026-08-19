import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout";
import { Figure } from "@/components/media";
import { RegisterCaseNav } from "@/components/case-nav-context";
import { Rich, tones, type Tone } from "@/components/blocks";
import { NextProjectNav } from "@/components/next-project-nav";
import type {
  CaseSectionV2,
  DecisionV2,
  EvidenceItemV2,
  Figure as FigureData,
  Project,
  ProductRevealGroup,
} from "@/content/types";

/**
 * V2 case-study renderer.
 *
 * A second, section-driven layout for case studies that follow a
 * problem -> what changed -> leverage -> reveal -> evidence spine, with
 * more editorial pacing than the original `Blocks`-based system. Projects
 * opt in via `layout: "v2"` and a populated `v2` field (see content/types.ts).
 * The original `/work/[slug]` v1 rendering path is untouched by this file.
 */

function Eyebrow({ index, label, tone }: { index: string; label: string; tone: Tone }) {
  const t = tones[tone];
  return (
    <div className="flex items-baseline gap-4">
      <span className={`label tabular-nums ${tone === "night" ? "text-[#7a786f]" : "text-ink-faint"}`}>
        {index}
      </span>
      <span className={`label ${t.muted}`}>{label}</span>
    </div>
  );
}

function FlowStrip({ steps, tone = "paper" }: { steps: string[]; tone?: Tone }) {
  const isNight = tone === "night";
  return (
    <ol
      className={`grid gap-px border ${isNight ? "border-night-rule bg-night-rule" : "border-rule bg-rule"} sm:grid-cols-3 lg:grid-cols-6`}
    >
      {steps.map((step, index) => (
        <li key={step} className={`${isNight ? "bg-night" : "bg-paper"} p-4`}>
          <span className={`label ${isNight ? "text-[#7a786f]" : "text-ink-faint"}`}>
            {String(index + 1).padStart(2, "0")}
          </span>
          <p className={`mt-2 text-[14px] font-medium ${isNight ? "text-paper" : "text-ink"}`}>{step}</p>
        </li>
      ))}
    </ol>
  );
}

function BeforeAfterView({ before, after }: { before: string; after: string }) {
  return (
    <div className="grid items-stretch gap-px border border-rule bg-rule sm:grid-cols-[1fr_auto_1fr]">
      <div className="bg-paper-sunk p-6">
        <p className="label text-ink-faint">Before</p>
        <p className="mt-2 text-sub font-medium tracking-tight text-ink">
          <Rich text={before} />
        </p>
      </div>
      <div className="flex items-center justify-center bg-paper px-3 py-4 text-ink-faint sm:py-0">→</div>
      <div className="bg-paper p-6">
        <p className="label text-accent">After</p>
        <p className="mt-2 text-sub font-medium tracking-tight text-ink">
          <Rich text={after} />
        </p>
      </div>
    </div>
  );
}

/** What existed vs. what wasn't yet governed — not a claim that the missing items were
 * mature, independent features. Reused by any project's Problem section. */
function GapDiagramView({
  existingLabel,
  existingItems,
  missingLabel,
  missingItems,
  connectorLabel,
}: {
  existingLabel: string;
  existingItems: string[];
  missingLabel: string;
  missingItems: string[];
  connectorLabel: string;
}) {
  return (
    <div className="grid items-stretch gap-3 sm:grid-cols-[1fr_auto_1fr]">
      <div className="border border-ink/20 bg-paper-sunk p-4">
        <p className="label text-ink-muted">{existingLabel}</p>
        <ul className="mt-2 space-y-1.5">
          {existingItems.map((step) => (
            <li
              key={step}
              className="border border-rule-strong bg-paper px-3 py-2 text-[14px] font-medium text-ink"
            >
              {step}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-center px-2 py-2">
        <span className="label border border-dashed border-ink/25 px-3 py-2 text-center text-ink-muted">
          {connectorLabel}
        </span>
      </div>
      <div className="border border-dashed border-ink/25 p-4">
        <p className="label text-ink-muted">{missingLabel}</p>
        <ul className="mt-2 space-y-1.5">
          {missingItems.map((step) => (
            <li
              key={step}
              className="border border-dashed border-rule-strong bg-paper px-3 py-2 text-[14px] font-medium text-ink-soft"
            >
              {step}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/** A CSS-cropped, non-zoomable detail view of an existing figure — same asset as the full
 * reveal elsewhere on the page, shown smaller and focused on one region so it reads as a
 * supporting detail rather than a second full-size repeat. No pixels are altered. */
function CroppedDetail({ figure, focus, caption }: { figure: FigureData; focus: string; caption: string }) {
  const surface = figure.theme === "dark" ? "border-night-rule bg-night" : "border-rule bg-paper-sunk";
  return (
    <figure className="not-prose">
      <div className={`relative aspect-[4/3] w-full overflow-hidden border ${surface}`}>
        <Image
          src={figure.src}
          alt={figure.alt}
          fill
          sizes="(min-width: 1024px) 40vw, 100vw"
          style={{ objectFit: "cover", objectPosition: focus }}
        />
      </div>
      <figcaption className="mt-3 max-w-[28rem] text-[13px] leading-relaxed text-ink-muted">
        {caption}
      </figcaption>
    </figure>
  );
}

function DecisionHeading({ index, title }: { index: string; title: string }) {
  return (
    <div>
      <p className="label text-accent">Decision {index}</p>
      <h3 className="mt-3 max-w-[26rem] text-section font-medium tracking-tight text-ink">{title}</h3>
    </div>
  );
}

function DecisionView({ decision }: { decision: DecisionV2 }) {
  const text = (
    <>
      <DecisionHeading index={decision.index} title={decision.title} />
      {decision.paragraphs.map((paragraph, i) => (
        <p key={i} className="mt-6 max-w-full text-body text-ink-soft first:mt-6 [&:not(:first-of-type)]:mt-4">
          <Rich text={paragraph} />
        </p>
      ))}
      {decision.consequence ? (
        <p className="mt-5 max-w-full text-sub font-medium tracking-tight text-ink">
          <Rich text={decision.consequence} />
        </p>
      ) : null}
    </>
  );

  const media = decision.media ?? { kind: "none" as const };

  if (media.kind === "detail-side") {
    return (
      <div className="border-t border-rule pt-8 lg:pt-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12">
          <div>{text}</div>
          <CroppedDetail figure={media.figure} focus={media.focus} caption={media.caption} />
        </div>
      </div>
    );
  }

  if (media.kind === "detail-below") {
    return (
      <div className="border-t border-rule pt-8 lg:pt-10">
        {text}
        <div className="mt-6 max-w-sm">
          <CroppedDetail figure={media.figure} focus={media.focus} caption={media.caption} />
        </div>
      </div>
    );
  }

  if (media.kind === "full") {
    return (
      <div className="border-t border-rule pt-8 lg:pt-10">
        <DecisionHeading index={decision.index} title={decision.title} />
        <div className="mt-8 max-w-[68rem]">
          <Figure figure={media.figure} sizes="(min-width: 1024px) 70vw, 100vw" />
        </div>
        {decision.paragraphs.map((paragraph, i) => (
          <p key={i} className="mt-6 max-w-full text-body text-ink-soft">
            <Rich text={paragraph} />
          </p>
        ))}
        {decision.consequence ? (
          <p className="mt-5 max-w-full text-sub font-medium tracking-tight text-ink">
            <Rich text={decision.consequence} />
          </p>
        ) : null}
      </div>
    );
  }

  if (media.kind === "quote") {
    return (
      <div className="border-t border-rule pt-8 lg:pt-10">
        {text}
        <blockquote className="my-6 max-w-[40rem] border-y border-rule py-6">
          <p className="text-sub font-medium tracking-tight text-ink">
            <Rich text={media.text} />
          </p>
        </blockquote>
      </div>
    );
  }

  return <div className="border-t border-rule pt-8 lg:pt-10">{text}</div>;
}

function ProductRevealGroupView({ group }: { group: ProductRevealGroup }) {
  const primary = group.figures.filter((f) => f.emphasis !== "secondary");
  const secondary = group.figures.filter((f) => f.emphasis === "secondary");

  return (
    <div>
      <h3 className="text-sub font-medium tracking-tight text-ink">{group.title}</h3>
      {group.description ? (
        <p className="max-w-full mt-3 text-body text-ink-muted">{group.description}</p>
      ) : null}
      {secondary.length > 0 ? (
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {primary.map(({ figure }) => (
              <Figure key={figure.src} figure={figure} sizes="(min-width: 1024px) 55vw, 100vw" />
            ))}
          </div>
          <div className="space-y-6">
            {secondary.map(({ figure }) => (
              <Figure key={figure.src} figure={figure} sizes="(min-width: 1024px) 25vw, 100vw" />
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-6 max-w-[68rem] space-y-6">
          {primary.map(({ figure }) => (
            <Figure key={figure.src} figure={figure} sizes="(min-width: 1024px) 70vw, 100vw" />
          ))}
        </div>
      )}
    </div>
  );
}

function EvidenceView({ items }: { items: EvidenceItemV2[] }) {
  const primary = items.filter((item) => item.emphasis !== "secondary");
  const secondary = items.filter((item) => item.emphasis === "secondary");

  return (
    <>
      {primary.length > 0 ? (
        <div className="grid gap-6 lg:grid-cols-12">
          {primary.map((item, i) => {
            const span = primary.length === 2 ? (i === 0 ? "lg:col-span-5" : "lg:col-span-7") : "lg:col-span-12";
            if (item.kind === "numeric") {
              return (
                <div key={i} className={`border border-rule bg-paper p-8 ${span}`}>
                  <p className="text-[3.5rem] font-medium leading-none tracking-tight text-ink">
                    {item.value}
                  </p>
                  <p className="label mt-4 text-ink-faint">{item.label}</p>
                  {item.note ? <p className="mt-2 text-[14px] text-ink-soft">{item.note}</p> : null}
                </div>
              );
            }
            if (item.kind === "progression") {
              return (
                <div key={i} className={`border border-rule bg-paper p-8 ${span}`}>
                  <p className="label text-ink-faint">Progression</p>
                  <div className="mt-3 flex flex-wrap items-baseline gap-3">
                    <span className="text-section font-medium tracking-tight text-ink">{item.from}</span>
                    <span aria-hidden="true" className="text-ink-faint">
                      →
                    </span>
                    <span className="text-section font-medium tracking-tight text-accent">{item.to}</span>
                  </div>
                  {item.note ? <p className="mt-3 text-[14px] text-ink-soft">{item.note}</p> : null}
                </div>
              );
            }
            return (
              <div key={i} className={`border border-rule bg-paper p-8 ${span}`}>
                <p className="text-sub font-medium tracking-tight text-ink">{item.title}</p>
                <p className="mt-2 text-[14px] text-ink-soft">{item.text}</p>
              </div>
            );
          })}
        </div>
      ) : null}

      {secondary.length > 0 ? (
        <div
          className={`grid gap-px border border-rule bg-rule ${secondary.length >= 2 ? "sm:grid-cols-2" : ""}`}
        >
          {secondary.map((item, i) => (
            <div key={i} className="bg-paper p-6">
              <p className="text-[14px] font-medium text-ink">
                {item.kind === "numeric" ? item.label : item.kind === "progression" ? "Progression" : item.title}
              </p>
              <p className="mt-2 text-[13px] text-ink-muted">
                {item.kind === "numeric"
                  ? item.note
                  : item.kind === "progression"
                    ? item.note
                    : item.text}
              </p>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
}

function SectionShell({
  id,
  index,
  nav,
  title,
  night = false,
  children,
}: {
  id: string;
  index: string;
  nav: string;
  title: string;
  night?: boolean;
  children: ReactNode;
}) {
  const tone: Tone = night ? "night" : "paper";
  const t = tones[tone];
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={night ? "mt-20 scroll-mt-24 bg-night py-16 lg:mt-28 lg:py-24" : "mt-20 scroll-mt-24 lg:mt-28"}
    >
      <Container>
        <Eyebrow index={index} label={nav} tone={tone} />
        <h2
          id={`${id}-heading`}
          className={`mt-5 max-w-full text-section font-medium tracking-tight sm:whitespace-nowrap ${t.heading}`}
        >
          {title}
        </h2>
        <div className="mt-8 space-y-8 lg:space-y-10">{children}</div>
      </Container>
    </section>
  );
}

function SectionV2({ section, index }: { section: CaseSectionV2; index: number }) {
  const number = String(index + 1).padStart(2, "0");

  switch (section.kind) {
    case "problem":
      return (
        <SectionShell id={section.id} index={number} nav={section.nav} title={section.title}>
          <div>
            <p className="max-w-full text-lead text-ink">
              <Rich text={section.lead} />
            </p>
            <p className="max-w-full mt-4 text-body text-ink-soft">
              <Rich text={section.body} />
            </p>
          </div>
          <GapDiagramView {...section.gap} />
        </SectionShell>
      );

    case "changed":
      return (
        <SectionShell id={section.id} index={number} nav={section.nav} title={section.title}>
          <BeforeAfterView before={section.beforeAfter.before} after={section.beforeAfter.after} />

          <div>
            <p className="max-w-full mb-6 text-body text-ink-soft">
              <Rich text={section.lifecycleIntro} />
            </p>
            <FlowStrip steps={section.lifecycleSteps} />
          </div>

          {section.systemFigure ? (
            <div className="max-w-[62rem]">
              <Figure figure={section.systemFigure} sizes="(min-width: 1024px) 70vw, 100vw" />
            </div>
          ) : null}

          {section.decisions.map((decision) => (
            <DecisionView key={decision.index} decision={decision} />
          ))}
        </SectionShell>
      );

    case "leverage":
      return (
        <SectionShell id={section.id} index={number} nav={section.nav} title={section.title} night>
          <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
            {section.items.map((item) => (
              <div key={item.index}>
                <span className="label text-[#8fa2ff]">{item.index}</span>
                <h3 className="mt-3 text-sub font-medium tracking-tight text-paper">{item.title}</h3>
                <p className="mt-3 text-body text-[#cfcdc4]">
                  <Rich text={item.text} />
                </p>
              </div>
            ))}
          </div>
        </SectionShell>
      );

    case "reveal":
      return (
        <SectionShell id={section.id} index={number} nav={section.nav} title={section.title}>
          {section.groups.map((group) => (
            <ProductRevealGroupView key={group.title} group={group} />
          ))}
        </SectionShell>
      );

    case "evidence":
      return (
        <SectionShell id={section.id} index={number} nav={section.nav} title={section.title}>
          <EvidenceView items={section.items} />
        </SectionShell>
      );
  }
}

export function CaseStudyV2({ project, next }: { project: Project; next: Project }) {
  const v2 = project.v2;
  if (!v2) return null;

  return (
    <article>
      <RegisterCaseNav
        title={project.title}
        items={v2.sections.map(({ id, nav }) => ({ id, nav }))}
      />

      <header className="pt-16 lg:pt-24">
        <Container>
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <Link href="/work" className="label text-ink-muted transition-colors hover:text-accent">
              Work
            </Link>
            <span aria-hidden="true" className="label text-ink-faint">
              /
            </span>
            <span className="label text-ink-faint">{project.domain}</span>
          </div>

          <h1 className="mt-7 text-title font-medium tracking-tight text-ink">{project.title}</h1>
          <p className="max-w-full mt-4 text-lead text-ink-soft">{project.subtitle}</p>

          <dl className="mt-8 grid gap-x-8 gap-y-5 border-t border-rule pt-6 sm:grid-cols-2 lg:grid-cols-4">
            {v2.heroContext.facts.map((fact) => (
              <div key={fact.label}>
                <dt className="label text-ink-faint">{fact.label}</dt>
                <dd className="mt-1 text-[14px] leading-snug text-ink-soft">{fact.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 border-t border-rule pt-6">
            <p className="label text-accent">{v2.heroContext.mandateLabel ?? "Mandate"}</p>
            <p className="mt-2 max-w-full text-sub font-medium tracking-tight text-ink">
              {v2.heroContext.mandate}
            </p>
          </div>
        </Container>
      </header>

      {v2.sections.map((section, index) => (
        <SectionV2 key={section.id} section={section} index={index} />
      ))}

      <NextProjectNav next={next} />
    </article>
  );
}
