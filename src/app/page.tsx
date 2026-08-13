import Link from "next/link";
import { Container } from "@/components/layout";
import { ProjectPreview } from "@/components/project-preview";
import { otherWork, projects } from "@/content/projects";
import { experience, patent, site, skills } from "@/content/site";

export default function HomePage() {
  return (
    <>
      <section className="pt-16 lg:pt-28">
        <Container>
          <p className="label text-ink-muted">{site.positioning}</p>
          <h1 className="mt-8 max-w-[16ch] text-display font-medium text-ink">
            {site.hero.headline}
          </h1>
          <p className="measure-wide mt-8 text-lead text-ink-soft">
            {site.hero.standfirst}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link
              href="/work"
              className="label inline-flex items-center gap-2 border-b border-ink pb-1 text-ink transition-colors hover:border-accent hover:text-accent"
            >
              Selected work
              <span aria-hidden="true">→</span>
            </Link>
            <a
              href={`mailto:${site.email}`}
              className="label text-ink-muted transition-colors hover:text-accent"
            >
              {site.email}
            </a>
            <span className="label text-ink-faint">{site.location}</span>
          </div>
        </Container>
      </section>

      <section aria-labelledby="selected-work" className="mt-24 lg:mt-32">
        <Container>
          <h2 id="selected-work" className="label text-ink-muted">
            Selected work
          </h2>
          <div className="mt-10 space-y-20 lg:space-y-28">
            {projects.map((project, index) => (
              <ProjectPreview
                key={project.slug}
                project={project}
                index={index + 1}
                priority={index === 0}
              />
            ))}
          </div>
        </Container>
      </section>

      <section aria-labelledby="other-work" className="mt-28 lg:mt-36">
        <Container>
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <h2 id="other-work" className="label text-ink-muted">
              Also worked on
            </h2>
            <Link
              href="/work"
              className="label text-ink-faint transition-colors hover:text-accent"
            >
              All work →
            </Link>
          </div>

          <ul className="mt-8 border-t border-rule">
            {otherWork.map((item) => (
              <li
                key={item.title}
                className="grid gap-x-8 gap-y-2 border-b border-rule py-6 lg:grid-cols-12"
              >
                <p className="text-body font-medium text-ink lg:col-span-5">
                  {item.title}
                </p>
                <p className="text-[14px] text-ink-muted lg:col-span-5">{item.note}</p>
                <p className="label text-ink-faint lg:col-span-2 lg:text-right">
                  {item.context}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="about-signal" className="mt-28 lg:mt-36">
        <Container>
          <div className="grid gap-10 border-t border-rule pt-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <h2 id="about-signal" className="label text-ink-muted">
                About
              </h2>
              <p className="measure mt-6 text-lead text-ink">{site.summary[0]}</p>
              <Link
                href="/about"
                className="label mt-8 inline-flex items-center gap-2 border-b border-ink pb-1 text-ink transition-colors hover:border-accent hover:text-accent"
              >
                More about how I work
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="lg:col-span-4">
              <p className="label text-ink-faint">Experience</p>
              <ul className="mt-4 space-y-4">
                {experience.map((entry) => (
                  <li key={entry.company}>
                    <p className="text-body text-ink">{entry.company}</p>
                    <p className="text-[14px] text-ink-muted">
                      {entry.role} · {entry.timeframe}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3">
              <p className="label text-ink-faint">Focus</p>
              <ul className="mt-4 space-y-1.5 text-[14px] text-ink-soft">
                {skills.slice(0, 6).map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
              <p className="label mt-6 text-ink-faint">Patent</p>
              <p className="mt-2 text-[14px] text-ink-soft">
                {patent.id} — {patent.title}
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
