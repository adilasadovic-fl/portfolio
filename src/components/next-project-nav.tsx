import Link from "next/link";
import { Container } from "@/components/layout";
import type { Project } from "@/content/types";

/** Shared "Next" project link, used by both the v1 and v2 case-study renderers. */
export function NextProjectNav({ next }: { next: Project }) {
  return (
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
  );
}
