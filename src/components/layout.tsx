import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-14 ${className}`}>
      {children}
    </div>
  );
}

export function SectionHeading({
  index,
  label,
  children,
}: {
  index?: string;
  label?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
      {index ? <span className="label text-ink-faint tabular-nums">{index}</span> : null}
      <h2 className="text-section font-medium tracking-tight text-ink">{children}</h2>
      {label ? <span className="label text-ink-muted">{label}</span> : null}
    </div>
  );
}
