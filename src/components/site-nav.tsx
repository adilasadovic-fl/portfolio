"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { useCaseNav } from "@/components/case-nav-context";

const primary = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
] as const;

function Identity({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onNavigate}
      className="group block"
      aria-label={`${site.name} — home`}
    >
      <span className="block text-[15px] font-medium tracking-tight text-ink">
        {site.name}
      </span>
      <span className="label mt-1 block text-ink-muted">{site.role}</span>
    </Link>
  );
}

function PrimaryLinks({
  pathname,
  onNavigate,
  size = "sm",
}: {
  pathname: string;
  onNavigate?: () => void;
  size?: "sm" | "lg";
}) {
  const base =
    size === "lg"
      ? "text-3xl tracking-tight"
      : "text-[15px] tracking-tight";

  return (
    <ul className={size === "lg" ? "space-y-3" : "space-y-2"}>
      {primary.map((item) => {
        const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={onNavigate}
              aria-current={active ? "page" : undefined}
              className={`${base} inline-flex items-baseline gap-2 text-ink transition-colors hover:text-accent ${
                active ? "text-accent" : ""
              }`}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
      <li>
        <a
          href={site.resume.href}
          target="_blank"
          rel="noreferrer"
          onClick={onNavigate}
          className={`${base} inline-flex items-baseline gap-1 text-ink transition-colors hover:text-accent`}
        >
          Resume
          <span aria-hidden="true" className="text-ink-faint">
            ↗
          </span>
        </a>
      </li>
    </ul>
  );
}

function SectionLinks({
  onNavigate,
  compact = false,
}: {
  onNavigate?: () => void;
  compact?: boolean;
}) {
  const { nav, activeId } = useCaseNav();
  if (!nav || nav.items.length === 0) return null;

  return (
    <nav aria-label="Sections of this case study" className={compact ? "" : "mt-10"}>
      <p className="label text-ink-faint">On this page</p>
      <ol className="mt-3 space-y-1.5">
        {nav.items.map((item, index) => {
          const active = activeId === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={onNavigate}
                aria-current={active ? "true" : undefined}
                className={`group flex items-baseline gap-3 text-[14px] transition-colors ${
                  active ? "text-accent" : "text-ink-muted hover:text-ink"
                }`}
              >
                <span className="label w-4 shrink-0 tabular-nums text-ink-faint">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{item.nav}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

function Contact({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="space-y-1 text-[13px] text-ink-muted">
      <a
        href={`mailto:${site.email}`}
        onClick={onNavigate}
        className="block transition-colors hover:text-accent"
      >
        {site.email}
      </a>
      <a
        href={site.linkedin.href}
        target="_blank"
        rel="noreferrer"
        onClick={onNavigate}
        className="block transition-colors hover:text-accent"
      >
        LinkedIn
      </a>
      <p className="text-ink-faint">{site.location}</p>
    </div>
  );
}

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-40 flex items-center justify-between gap-4 border-b border-rule bg-paper/90 px-5 py-3 backdrop-blur-sm lg:hidden">
        <Identity />
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="label -mr-2 px-2 py-2 text-ink"
        >
          {open ? "Close" : "Menu"}
        </button>
      </header>

      {open ? (
        <div
          id="mobile-nav"
          className="fixed inset-0 z-30 flex flex-col overflow-y-auto bg-paper px-5 pb-10 pt-20 lg:hidden"
        >
          <PrimaryLinks pathname={pathname} size="lg" onNavigate={() => setOpen(false)} />
          <div className="mt-10">
            <SectionLinks compact onNavigate={() => setOpen(false)} />
          </div>
          <div className="mt-auto pt-10">
            <Contact onNavigate={() => setOpen(false)} />
          </div>
        </div>
      ) : null}

      <div className="fixed inset-y-0 left-0 z-40 hidden w-[280px] flex-col justify-between overflow-y-auto border-r border-rule bg-paper px-8 py-10 lg:flex xl:w-[300px]">
        <div>
          <Identity />
          <nav aria-label="Primary" className="mt-12">
            <PrimaryLinks pathname={pathname} />
          </nav>
          <SectionLinks />
        </div>
        <Contact />
      </div>
    </>
  );
}
