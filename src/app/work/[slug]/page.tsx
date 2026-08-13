import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Blocks } from "@/components/blocks";
import { RegisterCaseNav } from "@/components/case-nav-context";
import { Container } from "@/components/layout";
import { Figure } from "@/components/media";
import { ProjectMetadata } from "@/components/project-preview";
import { adjacentProjects, getProject, projects } from "@/content/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: `${project.title} — ${project.company}`,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      type: "article",
      title: `${project.title} — ${project.subtitle}`,
      description: project.summary,
      images: [{ url: project.thumbnail.src }],
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { next } = adjacentProjects(project.slug);

  return (
    <article>
      <RegisterCaseNav
        title={project.title}
        items={project.sections.map(({ id, nav }) => ({ id, nav }))}
      />

      <header className="pt-16 lg:pt-24">
        <Container>
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <Link
              href="/work"
              className="label text-ink-muted transition-colors hover:text-accent"
            >
              Work
            </Link>
            <span aria-hidden="true" className="label text-ink-faint">
              /
            </span>
            <span className="label text-ink-faint">{project.domain}</span>
          </div>

          <h1 className="mt-7 text-display font-medium tracking-tight text-ink">
            {project.title}
          </h1>
          <p className="measure-wide mt-5 text-lead text-ink-soft">{project.subtitle}</p>

          <ProjectMetadata
            project={project}
            className="mt-12 max-w-[52rem] border-t border-rule pt-8 lg:grid-cols-4"
          />

          {project.hero ? (
            <div className="mt-12 lg:mt-16">
              <Figure figure={project.hero} priority sizes="(min-width: 1024px) 70vw, 100vw" />
            </div>
          ) : null}
        </Container>
      </header>

      {project.sections.map((section, index) => {
        const night = section.surface === "night";
        return (
          <section
            key={section.id}
            id={section.id}
            aria-labelledby={`${section.id}-heading`}
            className={
              night
                ? "mt-24 scroll-mt-24 bg-night py-20 lg:mt-32 lg:py-28"
                : "mt-24 scroll-mt-24 lg:mt-32"
            }
          >
            <Container>
              <div className="flex flex-wrap items-baseline gap-x-4">
                <span
                  className={`label tabular-nums ${night ? "text-[#7a786f]" : "text-ink-faint"}`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className={`label ${night ? "text-[#9b998f]" : "text-ink-muted"}`}>
                  {section.nav}
                </span>
              </div>

              <h2
                id={`${section.id}-heading`}
                className={`measure-wide mt-5 text-section font-medium tracking-tight ${
                  night ? "text-paper" : "text-ink"
                } ${section.title ? "" : "sr-only"}`}
              >
                {section.title ?? section.nav}
              </h2>

              <div className={`space-y-6 ${section.title ? "mt-8" : "mt-2"} lg:space-y-7`}>
                <Blocks blocks={section.blocks} tone={night ? "night" : "paper"} />
              </div>
            </Container>
          </section>
        );
      })}

      <section aria-labelledby="next-project" className="mt-28 lg:mt-36">
        <Container>
          <div className="border-t border-rule pt-8">
            <h2 id="next-project" className="label text-ink-muted">
              Next
            </h2>
            <Link
              href={`/work/${next.slug}`}
              className="group mt-5 flex flex-wrap items-baseline gap-x-6 gap-y-2"
            >
              <span className="text-title font-medium tracking-tight text-ink transition-colors group-hover:text-accent">
                {next.title}
              </span>
              <span className="label text-ink-muted">{next.domain}</span>
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
