import type { Metadata } from "next";
import { Container } from "@/components/layout";
import { experience, patent, site, skills } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: site.summary[0],
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-16 lg:pt-28">
        <Container>
          <p className="label text-ink-muted">About</p>
          <h1 className="mt-8 max-w-[20ch] text-title font-medium tracking-tight text-ink">
            {site.positioning}
          </h1>
          <div className="measure-wide mt-8 space-y-6">
            <p className="text-lead text-ink">{site.summary[0]}</p>
            <p className="text-body text-ink-soft">{site.summary[1]}</p>
          </div>
        </Container>
      </section>

      <section aria-labelledby="experience" className="mt-24 bg-night py-20 lg:mt-32 lg:py-28">
        <Container>
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <h2 id="experience" className="label text-[#9b998f]">
              Experience
            </h2>
            <a
              href={site.resume.href}
              target="_blank"
              rel="noreferrer"
              className="label text-[#9b998f] transition-colors hover:text-paper"
            >
              Resume (PDF) ↗
            </a>
          </div>

          <ol className="mt-10 border-t border-night-rule">
            {experience.map((entry) => (
              <li
                key={entry.company}
                className="grid gap-x-10 gap-y-4 border-b border-night-rule py-9 lg:grid-cols-12"
              >
                <div className="lg:col-span-5">
                  <h3 className="text-sub font-medium tracking-tight text-paper">
                    {entry.company}
                  </h3>
                  <p className="mt-1 text-[14px] text-[#9b998f]">{entry.role}</p>
                  {entry.location ? (
                    <p className="label mt-3 text-[#7a786f]">{entry.location}</p>
                  ) : null}
                </div>

                <ul className="space-y-3 lg:col-span-5">
                  {entry.points.map((point) => (
                    <li key={point} className="text-body text-[#cfcdc4]">
                      {point}
                    </li>
                  ))}
                </ul>

                <p className="label text-[#9b998f] lg:col-span-2 lg:text-right">
                  {entry.timeframe}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section aria-labelledby="patent" className="mt-24 lg:mt-32">
        <Container>
          <div className="grid gap-10 border-t border-rule pt-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <h2 id="patent" className="label text-ink-muted">
                Patent
              </h2>
              <p className="mt-6 text-sub font-medium tracking-tight text-ink">
                {patent.title}
              </p>
              <p className="mt-2 text-[14px] text-ink-muted">
                {patent.id} · {patent.credit}
              </p>
            </div>
            <p className="measure text-body text-ink-soft lg:col-span-7">{patent.note}</p>
          </div>
        </Container>
      </section>

      <section aria-labelledby="expertise" className="mt-24 lg:mt-32">
        <Container>
          <div className="grid gap-10 border-t border-rule pt-10 lg:grid-cols-12 lg:gap-12">
            <h2 id="expertise" className="label text-ink-muted lg:col-span-5">
              Areas of expertise
            </h2>
            <ul className="grid gap-x-10 gap-y-3 sm:grid-cols-2 lg:col-span-7">
              {skills.map((skill) => (
                <li key={skill} className="text-body text-ink-soft">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}
