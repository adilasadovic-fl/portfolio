import Link from "next/link";
import { Container } from "@/components/layout";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-rule bg-paper-sunk py-16 lg:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="label text-ink-faint">Contact</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 inline-block max-w-full break-words text-section font-medium tracking-tight text-ink transition-colors hover:text-accent lg:text-title"
            >
              {site.email}
            </a>
            <p className="measure mt-5 text-body text-ink-muted">
              {site.positioning}. Based in {site.location}.
            </p>
          </div>

          <nav aria-label="Footer" className="lg:col-span-3">
            <p className="label text-ink-faint">Elsewhere</p>
            <ul className="mt-4 space-y-2 text-body text-ink-soft">
              <li>
                <a
                  href={site.linkedin.href}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-accent"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={site.resume.href}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-accent"
                >
                  Resume (PDF)
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-accent"
                >
                  {site.phone}
                </a>
              </li>
            </ul>
          </nav>

          <nav aria-label="Site" className="lg:col-span-2">
            <p className="label text-ink-faint">Site</p>
            <ul className="mt-4 space-y-2 text-body text-ink-soft">
              <li>
                <Link href="/" className="transition-colors hover:text-accent">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/work" className="transition-colors hover:text-accent">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition-colors hover:text-accent">
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <p className="label mt-16 text-ink-faint">
          © {new Date().getFullYear()} {site.name}
        </p>
      </Container>
    </footer>
  );
}
