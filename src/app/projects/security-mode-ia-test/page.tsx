import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Container } from "@/components/layout";
import { Figure } from "@/components/media";
import { RegisterCaseNav } from "@/components/case-nav-context";
import type { Figure as FigureData } from "@/content/types";

/**
 * EXPERIMENTAL PAGE — information-architecture prototype.
 *
 * This route intentionally duplicates Security Mode content under a
 * different narrative structure. It does not replace, link from, or modify
 * the production case study at /work/security-mode. See the summary given
 * to the site owner for what this tests and why it's separate.
 */

export const metadata: Metadata = {
  title: "Security Mode — IA test",
  description:
    "Experimental information architecture for the Security Mode case study. Draft copy, not final.",
  robots: { index: false, follow: false },
};

const navItems = [
  { id: "problem", nav: "Problem" },
  { id: "changed", nav: "What I changed" },
  { id: "beyond", nav: "Beyond the solution" },
  { id: "after", nav: "After" },
  { id: "evidence", nav: "Evidence" },
  { id: "next", nav: "What's next" },
];

const heroFigure: FigureData = {
  src: "/media/security-mode/system-diagram.jpg",
  alt: "System diagram of Security Mode. Signals in pass through detection or manual classification into a protected board. Human roles surround the board, a governance layer defines policy, and outcomes are confirm, dismiss or remediate.",
  caption: "Security Mode as one system: signal in, protected state, governed outcomes.",
  width: 1024,
  height: 682,
  size: "full",
  zoomable: true,
};

const matchDetailsFigure: FigureData = {
  src: "/media/security-mode/match-details-panel.png",
  alt: "Content remediation panel on a protected board showing match details for a privacy-related finding, including status, detection date, pattern type and actions to resolve or remove the widget.",
  caption: "A finding, reviewed in place: what was found, and what to do about it.",
  width: 2856,
  height: 1864,
  size: "full",
  theme: "light",
};

const reclassificationFigure: FigureData = {
  src: "/media/security-mode/reclassification-panel.png",
  alt: "Content remediation panel showing fifteen matches after a board was reclassified from External to Restricted, grouped under the restrictions now applied to the board.",
  caption: "After reclassification: matches grouped by the restriction now in force.",
  width: 2854,
  height: 1910,
  size: "full",
  theme: "light",
};

const adminOverviewFigure: FigureData = {
  src: "/media/security-mode/admin-overview-table.png",
  alt: "Enterprise Guard admin view for Security Mode showing boards in Security Mode, a false-match count, and a table of boards with creator, current classification, previous classification, false matches and last activity.",
  caption: "The governance surface: every protected board, its classification history, and its false-match rate.",
  width: 3456,
  height: 1986,
  size: "full",
  theme: "light",
};

/** Small building blocks, kept local since this page is a throwaway prototype. */

function Eyebrow({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-baseline gap-4">
      <span className="label tabular-nums text-ink-faint">{index}</span>
      <span className="label text-ink-muted">{label}</span>
    </div>
  );
}

function Fact({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div>
      <dt className="label text-ink-faint">{label}</dt>
      <dd className="mt-1 text-[14px] leading-snug text-ink-soft">{value}</dd>
    </div>
  );
}

function FlowStrip({ steps, tone = "paper" }: { steps: string[]; tone?: "paper" | "night" }) {
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

function BeforeAfter({
  before,
  after,
}: {
  before: string;
  after: string;
}) {
  return (
    <div className="grid items-stretch gap-px border border-rule bg-rule sm:grid-cols-[1fr_auto_1fr]">
      <div className="bg-paper-sunk p-6">
        <p className="label text-ink-faint">Before</p>
        <p className="mt-2 text-sub font-medium tracking-tight text-ink">{before}</p>
      </div>
      <div className="flex items-center justify-center bg-paper px-3 py-4 text-ink-faint sm:py-0">→</div>
      <div className="bg-paper p-6">
        <p className="label text-accent">After</p>
        <p className="mt-2 text-sub font-medium tracking-tight text-ink">{after}</p>
      </div>
    </div>
  );
}

function FragmentationDiagram() {
  return (
    <div className="grid items-center gap-6 sm:grid-cols-[1fr_auto_1fr]">
      <div className="border border-rule p-5">
        <p className="label text-ink-faint">Already existed</p>
        <ul className="mt-3 space-y-2">
          {["Detect", "Classify"].map((step) => (
            <li key={step} className="border border-rule-strong bg-paper-sunk px-3 py-2 text-[14px] font-medium text-ink">
              {step}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-center">
        <span className="label border border-dashed border-rule-strong px-3 py-2 text-ink-faint">
          no shared state
        </span>
      </div>
      <div className="border border-dashed border-rule-strong p-5">
        <p className="label text-ink-faint">Handled separately, inconsistently</p>
        <ul className="mt-3 space-y-2">
          {["Protect", "Review", "Remediate", "Reclassify"].map((step) => (
            <li key={step} className="border border-rule bg-paper px-3 py-2 text-[14px] font-medium text-ink-muted">
              {step}
            </li>
          ))}
        </ul>
      </div>
    </div>
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

function Section({
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
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={night ? "mt-24 scroll-mt-24 bg-night py-20 lg:mt-32 lg:py-28" : "mt-24 scroll-mt-24 lg:mt-32"}
    >
      <Container>
        <Eyebrow index={index} label={nav} />
        <h2
          id={`${id}-heading`}
          className={`mt-5 max-w-[36rem] text-section font-medium tracking-tight ${night ? "text-paper" : "text-ink"}`}
        >
          {title}
        </h2>
        <div className="mt-8 space-y-10 lg:space-y-12">{children}</div>
      </Container>
    </section>
  );
}

export default function SecurityModeIaTestPage() {
  return (
    <article>
      <RegisterCaseNav title="Security Mode — IA test" items={navItems} />

      {/* Notice: this is a prototype, not the production case study. */}
      <div className="border-b border-rule bg-paper-sunk">
        <Container className="flex flex-wrap items-center gap-x-3 gap-y-1 py-3">
          <span className="label text-accent">IA prototype</span>
          <span className="text-[13px] text-ink-muted">
            Draft copy, testing structure only ·{" "}
            <Link href="/work/security-mode" className="underline hover:text-accent">
              production case study
            </Link>
          </span>
        </Container>
      </div>

      {/* Hero */}
      <header className="pt-14 lg:pt-20">
        <Container>
          <h1 className="text-display font-medium tracking-tight text-ink">Security Mode</h1>
          <p className="max-w-full mt-5 text-lead text-ink-soft">
            Protecting sensitive content without breaking collaboration.
          </p>

          <dl className="mt-10 grid gap-x-8 gap-y-6 border-t border-rule pt-6 sm:grid-cols-3">
            <Fact label="Role" value="Senior Product Designer · Sole designer" />
            <Fact label="Core team" value="PM · Engineering Manager · ~15 engineers" />
            <Fact label="Company" value="Miro" />
            <Fact
              label="Worked with"
              value="Security & Compliance · Legal · customer-facing teams · enterprise customers"
            />
            <Fact label="Status" value="5-customer private beta → public beta" />
            <Fact
              label="Mandate"
              value="I identified the gap, built the evidence to prioritize it, and owned the interaction and system model through beta."
            />
          </dl>

          <div className="mt-12 lg:mt-16">
            <Figure figure={heroFigure} priority sizes="(min-width: 1024px) 80vw, 100vw" />
          </div>
        </Container>
      </header>

      {/* 01 Problem */}
      <Section id="problem" index="01" nav="Problem" title="Classification didn't yet add up to one protected board">
        <div>
          <p className="max-w-full text-lead text-ink">
            Miro could already detect and classify sensitive content on a board.
          </p>
          <p className="max-w-full mt-4 text-body text-ink-soft">
            What didn&apos;t exist was a single, coherent state that followed from that classification.
            Protection, review, remediation and reclassification each behaved like separate features rather
            than stages of one lifecycle — so a board could be flagged as sensitive without its access,
            sharing or review behavior changing in any consistent way.
          </p>
        </div>
        <FragmentationDiagram />
      </Section>

      {/* 02 What I changed */}
      <Section id="changed" index="02" nav="What I changed" title="Classification became a state, not a label">
        <BeforeAfter
          before="Classification was information about the board."
          after="Classification changes the board's security state."
        />

        <div>
          <p className="max-w-full mb-6 text-body text-ink-soft">
            That state runs on one lifecycle, reused everywhere the product now touches sensitive content:
          </p>
          <FlowStrip steps={["Detect", "Classify", "Protect", "Review", "Remediate", "Reclassify"]} />
        </div>

        {/* Decision 1 — text only, wide measure */}
        <div className="border-t border-rule pt-10 lg:pt-12">
          <DecisionHeading index="01" title="Make protection a persistent board state" />
          <div className="mt-6 max-w-full space-y-4 text-body text-ink-soft">
            <p>
              <span className="font-medium text-ink">Tension:</span> treat every security event as its own
              alert, or give the board one durable status.
            </p>
            <p>
              <span className="font-medium text-ink">Decision:</span> classification moves the board into a
              persistent protected state — not a one-off warning.
            </p>
            <p>
              <span className="font-medium text-ink">Why it mattered:</span> separate alerts leave people
              without a stable answer to &ldquo;what kind of board am I in?&rdquo;
            </p>
            <p>
              <span className="font-medium text-ink">Consequence:</span> access, sharing, review and
              remediation now all read from the same board state instead of firing independently.
            </p>
          </div>
        </div>

        {/* Decision 2 — text + pull quote, no image */}
        <div className="border-t border-rule pt-10 lg:pt-12">
          <DecisionHeading index="02" title="Protect the board without removing the product" />
          <div className="mt-6 max-w-full space-y-4 text-body text-ink-soft">
            <p>
              <span className="font-medium text-ink">Tension:</span> the safest default is to lock the board
              down; the useful default is to keep it working.
            </p>
            <p>
              <span className="font-medium text-ink">Decision:</span> restrict only the actions that
              introduce risk, and leave the rest of the board intact.
            </p>
          </div>
          <blockquote className="my-8 max-w-[40rem] border-y border-rule py-6">
            <p className="text-sub font-medium tracking-tight text-ink">
              Restrict what the risk requires. Preserve everything else.
            </p>
          </blockquote>
          <div className="max-w-full space-y-4 text-body text-ink-soft">
            <p>
              <span className="font-medium text-ink">Consequence:</span> the design question changed from
              &ldquo;what should we disable&rdquo; to &ldquo;which behavior actually increases exposure&rdquo;
              — a much smaller, more targeted set of restrictions.
            </p>
          </div>
        </div>

        {/* Decision 3 — text + image, image right */}
        <div className="border-t border-rule pt-10 lg:pt-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
            <div>
              <DecisionHeading index="03" title="Bring remediation to the content" />
              <div className="mt-6 space-y-4 text-body text-ink-soft">
                <p>
                  <span className="font-medium text-ink">Tension:</span> security tools default to surfacing
                  problems to an administrator who often doesn&apos;t know why the content exists.
                </p>
                <p>
                  <span className="font-medium text-ink">Decision:</span> put findings, canvas context and
                  remediation actions in the same place the content lives.
                </p>
                <p>
                  <span className="font-medium text-ink">Consequence:</span> the person closest to the
                  content — the board owner — can resolve a finding without translating an alert back into
                  the workspace.
                </p>
              </div>
            </div>
            <Figure figure={matchDetailsFigure} sizes="(min-width: 1024px) 45vw, 100vw" />
          </div>
        </div>

        {/* Decision 4 — full-width image above, text below */}
        <div className="border-t border-rule pt-10 lg:pt-12">
          <DecisionHeading index="04" title="Treat reclassification as part of the threat model" />
          <div className="mt-8 max-w-[68rem]">
            <Figure figure={reclassificationFigure} sizes="(min-width: 1024px) 70vw, 100vw" />
          </div>
          <div className="mt-6 max-w-full space-y-4 text-body text-ink-soft">
            <p>
              <span className="font-medium text-ink">Tension:</span> classifying a board increases
              protection; reclassifying it can remove protection. Treating those as equally easy is a risk.
            </p>
            <p>
              <span className="font-medium text-ink">Decision:</span> reclassification carries its own
              authority and guardrails, distinct from the permissions used to classify a board in the first
              place.
            </p>
            <p>
              <span className="font-medium text-ink">Consequence:</span> the configuration surface itself
              became part of the security model, not a neutral admin setting.
            </p>
          </div>
        </div>
      </Section>

      {/* 03 Beyond the immediate solution — Staff scope */}
      <Section
        id="beyond"
        index="03"
        nav="Beyond the solution"
        title="From product gap to governed security system"
        night
      >
        <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
          <div>
            <span className="label text-[#8fa2ff]">01</span>
            <h3 className="mt-3 text-sub font-medium tracking-tight text-paper">I identified the gap</h3>
            <p className="mt-3 text-body text-[#cfcdc4]">
              Security Mode wasn&apos;t assigned to me as a defined feature. I used recurring enterprise
              customer escalations as evidence to help make the case for prioritizing it.
            </p>
          </div>
          <div>
            <span className="label text-[#8fa2ff]">02</span>
            <h3 className="mt-3 text-sub font-medium tracking-tight text-paper">
              The design crossed organizational boundaries
            </h3>
            <p className="mt-3 text-body text-[#cfcdc4]">
              Getting the model right required direct collaboration with Security &amp; Compliance and Legal
              on what &ldquo;protected&rdquo; had to mean, and with customer-facing teams and enterprise
              customers on what would actually hold up in their environments.
            </p>
          </div>
          <div>
            <span className="label text-[#8fa2ff]">03</span>
            <h3 className="mt-3 text-sub font-medium tracking-tight text-paper">
              The model had to outlast the first release
            </h3>
            <p className="mt-3 text-body text-[#cfcdc4]">
              The same state and permission model now underpins board protection, review, remediation,
              administrative governance and reclassification — not just the original protected-board
              experience.
            </p>
          </div>
        </div>
      </Section>

      {/* 04 After */}
      <Section id="after" index="04" nav="After" title="What Security Mode became">
        <div>
          <h3 className="text-sub font-medium tracking-tight text-ink">Board experience</h3>
          <p className="max-w-full mt-3 text-body text-ink-muted">
            Protected state, review and remediation, in context.
          </p>
          <div className="mt-6 grid max-w-[68rem] gap-6 md:grid-cols-2">
            <Figure figure={matchDetailsFigure} sizes="(min-width: 768px) 40vw, 100vw" />
            <Figure figure={reclassificationFigure} sizes="(min-width: 768px) 40vw, 100vw" />
          </div>
        </div>

        <div>
          <h3 className="text-sub font-medium tracking-tight text-ink">Admin &amp; governance experience</h3>
          <p className="max-w-full mt-3 text-body text-ink-muted">
            Policy, classification history and false-match visibility, for the whole organization.
          </p>
          <div className="mt-6 max-w-[68rem]">
            <Figure figure={adminOverviewFigure} sizes="(min-width: 1024px) 70vw, 100vw" />
          </div>
        </div>
      </Section>

      {/* 05 Evidence */}
      <Section id="evidence" index="05" nav="Evidence" title="What we know so far">
        <div className="grid gap-px border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-paper p-6">
            <p className="text-display text-[2.75rem] font-medium leading-none tracking-tight text-ink">5</p>
            <p className="label mt-3 text-ink-faint">Enterprise customers</p>
            <p className="mt-2 text-[14px] text-ink-soft">Private beta validation.</p>
          </div>
          <div className="bg-paper p-6">
            <p className="text-sub font-medium tracking-tight text-ink">Private beta → Public beta</p>
            <p className="label mt-3 text-ink-faint">Progression</p>
            <p className="mt-2 text-[14px] text-ink-soft">
              Moved to public beta after incorporating customer feedback.
            </p>
          </div>
          <div className="bg-paper p-6">
            <p className="text-sub font-medium tracking-tight text-ink">Internal adoption</p>
            <p className="label mt-3 text-ink-faint">Enabled inside Miro</p>
            <p className="mt-2 text-[14px] text-ink-soft">
              Enabled for Miro&apos;s own use after the required Security &amp; Compliance review.
            </p>
          </div>
          <div className="bg-paper p-6">
            <p className="text-sub font-medium tracking-tight text-ink">System leverage</p>
            <p className="label mt-3 text-ink-faint">Beyond protection</p>
            <p className="mt-2 text-[14px] text-ink-soft">
              The same model expanded into review, remediation, admin visibility and governance.
            </p>
          </div>
        </div>
      </Section>

      {/* 06 What happened next */}
      <Section id="next" index="06" nav="What's next" title="Still becoming one connected system">
        <div>
          <p className="max-w-full text-body text-ink-soft">
            Security Mode didn&apos;t end at the first release. The same lifecycle is extending from
            protection alone toward a broader loop:
          </p>
          <div className="mt-6">
            <FlowStrip steps={["Understand", "Protect", "Resolve", "Govern"]} />
          </div>
        </div>
      </Section>

      <section aria-labelledby="ia-test-next" className="mt-28 lg:mt-36">
        <Container>
          <div className="border-t border-rule pt-8">
            <h2 id="ia-test-next" className="label text-ink-muted">
              This was a structure test
            </h2>
            <Link
              href="/work/security-mode"
              className="group mt-5 flex flex-wrap items-baseline gap-x-6 gap-y-2"
            >
              <span className="text-title font-medium tracking-tight text-ink transition-colors group-hover:text-accent">
                Read the production case study
              </span>
              <span
                aria-hidden="true"
                className="text-ink-faint transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </Container>
      </section>
    </article>
  );
}
