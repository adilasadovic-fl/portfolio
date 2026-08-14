import type { Metadata } from "next";
import { Container } from "@/components/layout";
import { experience, patent, site, skills } from "@/content/site";

export const metadata: Metadata = { title: "About", description: site.summary[0], alternates: { canonical: "/about" } };

const principles = [
  ["Make the system legible", "I work best where product behavior is shaped by policy, permissions, infrastructure or risk. My job is to expose the decisions people need while keeping implementation complexity in the layer where it belongs."],
  ["Design behavior, not screens", "For complex products, the interface is the visible edge of a larger system. I map states, authority, scope, consequences and failure paths before treating screens as the solution."],
  ["Work close to engineering", "I use prototypes, technical constraints and shared artifacts to make feasibility part of design rather than a conversation that happens after design is finished."],
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-16 lg:pt-28"><Container><p className="label text-ink-muted">About</p><h1 className="mt-8 max-w-[18ch] text-title font-medium tracking-tight text-ink">I design the rules underneath complex products, then make them understandable.</h1><div className="mt-10 grid gap-8 lg:grid-cols-12 lg:gap-12"><p className="text-lead text-ink lg:col-span-7">{site.summary[0]}</p><p className="text-body text-ink-soft lg:col-span-5">{site.summary[1]}</p></div></Container></section>

      <section aria-labelledby="practice" className="mt-24 lg:mt-32"><Container><div className="grid gap-10 border-t border-rule pt-10 lg:grid-cols-12 lg:gap-12"><div className="lg:col-span-3"><h2 id="practice" className="label text-ink-muted">How I work</h2></div><div className="lg:col-span-9"><div className="divide-y divide-rule border-y border-rule">{principles.map(([title, text], index) => <article key={title} className="grid gap-4 py-7 sm:grid-cols-[3rem_14rem_1fr] sm:gap-6"><span className="label text-ink-faint">0{index + 1}</span><h3 className="text-sub font-medium text-ink">{title}</h3><p className="text-body text-ink-soft">{text}</p></article>)}</div></div></div></Container></section>

      <section aria-labelledby="experience" className="mt-24 bg-night py-20 lg:mt-32 lg:py-28"><Container><div className="flex flex-wrap items-baseline justify-between gap-4"><h2 id="experience" className="label text-[#9b998f]">Selected experience</h2><a href={site.resume.href} target="_blank" rel="noreferrer" className="label text-[#9b998f] transition-colors hover:text-paper">Full resume (PDF) ↗</a></div><ol className="mt-10 border-t border-night-rule">{experience.map((entry) => <li key={entry.company} className="grid gap-x-10 gap-y-5 border-b border-night-rule py-9 lg:grid-cols-12"><div className="lg:col-span-4"><h3 className="text-sub font-medium tracking-tight text-paper">{entry.company}</h3><p className="mt-1 text-[14px] text-[#9b998f]">{entry.role}</p></div><ul className="space-y-3 lg:col-span-6">{entry.points.slice(0, 2).map((point) => <li key={point} className="text-body text-[#cfcdc4]">{point}</li>)}</ul><p className="label text-[#9b998f] lg:col-span-2 lg:text-right">{entry.timeframe}</p></li>)}</ol></Container></section>

      <section className="mt-24 lg:mt-32"><Container><div className="grid gap-12 border-t border-rule pt-10 lg:grid-cols-12"><div className="lg:col-span-5"><h2 className="label text-ink-muted">Depth</h2><p className="mt-6 text-sub font-medium text-ink">{patent.title}</p><p className="mt-2 text-[14px] text-ink-muted">{patent.id} · {patent.credit}</p><p className="measure mt-5 text-body text-ink-soft">{patent.note}</p></div><div className="lg:col-span-7"><h2 className="label text-ink-muted">Areas of expertise</h2><ul className="mt-6 grid border-t border-rule sm:grid-cols-2">{skills.slice(0, 10).map((skill) => <li key={skill} className="border-b border-rule py-3 text-body text-ink-soft">{skill}</li>)}</ul></div></div></Container></section>
    </>
  );
}
