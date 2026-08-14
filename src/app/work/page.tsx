import type { Metadata } from "next";
import { Container } from "@/components/layout";
import { ProjectPreview } from "@/components/project-preview";
import { otherWork, projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies in enterprise security and governance, design × engineering workflow, and cloud operations tooling.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <section className="pt-16 lg:pt-28">
        <Container>
          <p className="label text-ink-muted">Work</p>
          <h1 className="mt-8 max-w-[18ch] text-title font-medium tracking-tight text-ink">
            Systems for security, governance and cloud operations.
          </h1>
        </Container>
      </section>

      <section aria-labelledby="featured" className="mt-20 lg:mt-28">
        <Container>
          <h2 id="featured" className="label text-ink-muted">
            Featured
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

      <section aria-labelledby="additional" className="mt-28 lg:mt-36">
        <Container>
          <h2 id="additional" className="label text-ink-muted">
            Additional work
          </h2>
          <ul className="mt-8 border-t border-rule">
            {otherWork.map((item) => (
              <li
                key={item.title}
                className="grid gap-x-8 gap-y-2 border-b border-rule py-7 lg:grid-cols-12"
              >
                <div className="lg:col-span-5">
                  <p className="text-sub font-medium tracking-tight text-ink">
                    {item.title}
                  </p>
                  <p className="label mt-2 text-ink-faint">{item.context}</p>
                </div>
                <p className="measure text-body text-ink-muted lg:col-span-5">
                  {item.note}
                </p>
                <p className="label text-ink-faint lg:col-span-2 lg:text-right">
                  {item.timeframe}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
