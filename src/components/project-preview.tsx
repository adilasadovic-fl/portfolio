import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/types";

export function ProjectMetadata({
  project,
  className = "",
}: {
  project: Project;
  className?: string;
}) {
  return (
    <dl className={`grid gap-x-8 gap-y-4 sm:grid-cols-2 ${className}`}>
      {project.meta.map((item) => (
        <div key={item.label}>
          <dt className="label text-ink-faint">{item.label}</dt>
          <dd className="mt-1 text-[14px] leading-snug text-ink-soft">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function ProjectPreview({
  project,
  index,
  priority = false,
}: {
  project: Project;
  index: number;
  priority?: boolean;
}) {
  const number = String(index).padStart(2, "0");

  return (
    <article className="group border-t border-rule pt-8 lg:pt-10">
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <div className="flex items-baseline gap-4">
            <span className="label tabular-nums text-accent">{number}</span>
            <span className="label text-ink-muted">{project.domain}</span>
          </div>

          <h3 className="mt-5 text-title font-medium tracking-tight text-ink">
            <Link href={`/work/${project.slug}`} className="hover:text-accent">
              {project.title}
            </Link>
          </h3>

          <p className="measure mt-3 text-sub text-ink-soft">{project.subtitle}</p>
          <p className="measure mt-5 text-body text-ink-muted">{project.summary}</p>

          <div className="mt-7 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            <div>
              <p className="label text-ink-faint">Company</p>
              <p className="mt-1 text-[14px] text-ink-soft">{project.company}</p>
            </div>
            <div>
              <p className="label text-ink-faint">Role</p>
              <p className="mt-1 text-[14px] text-ink-soft">{project.role}</p>
            </div>
          </div>

          <Link
            href={`/work/${project.slug}`}
            className="label mt-8 inline-flex items-center gap-2 border-b border-ink pb-1 text-ink transition-colors hover:border-accent hover:text-accent"
          >
            Read case study
            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>

        <div className="lg:col-span-7">
          <Link
            href={`/work/${project.slug}`}
            tabIndex={-1}
            aria-hidden="true"
            className="block overflow-hidden border border-rule bg-paper-sunk"
          >
            <Image
              src={project.thumbnail.src}
              alt=""
              width={project.thumbnail.width}
              height={project.thumbnail.height}
              priority={priority}
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="h-auto w-full transition-transform duration-500 ease-out group-hover:scale-[1.015]"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}
