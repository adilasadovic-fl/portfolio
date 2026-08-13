"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Figure as FigureData } from "@/content/types";

function surface(theme: FigureData["theme"]) {
  return theme === "dark"
    ? "bg-night border-night-rule"
    : "bg-paper-sunk border-rule";
}

export function Figure({
  figure,
  priority = false,
  sizes,
}: {
  figure: FigureData;
  priority?: boolean;
  sizes?: string;
}) {
  const [zoomed, setZoomed] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => {
    setZoomed(false);
    triggerRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!zoomed) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
        return;
      }
      if (event.key !== "Tab") return;

      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
        "button, [href], [tabindex]:not([tabindex='-1'])",
      );
      if (!focusable || focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [zoomed, close]);

  const image = (
    <Image
      src={figure.src}
      alt={figure.alt}
      width={figure.width}
      height={figure.height}
      priority={priority}
      sizes={sizes ?? "(min-width: 1024px) 70vw, 100vw"}
      className="h-auto w-full"
    />
  );

  return (
    <figure className="not-prose">
      {figure.zoomable ? (
        <button
          type="button"
          ref={triggerRef}
          onClick={() => setZoomed(true)}
          className={`group block w-full cursor-zoom-in border ${surface(figure.theme)}`}
          aria-label={`Enlarge diagram: ${figure.alt.slice(0, 80)}`}
        >
          {image}
        </button>
      ) : (
        <div className={`border ${surface(figure.theme)}`}>{image}</div>
      )}

      {figure.caption ? (
        <figcaption className="mt-3 max-w-[46rem] text-[13px] leading-relaxed text-ink-muted">
          {figure.caption}
          {figure.zoomable ? (
            <span className="label ml-2 text-ink-faint">Click to enlarge</span>
          ) : null}
        </figcaption>
      ) : null}

      {zoomed ? (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged diagram"
          className="fixed inset-0 z-50 flex flex-col bg-night/95 p-4 sm:p-8"
        >
          <div className="flex items-baseline justify-between gap-4">
            <p className="label text-[#9b998f] sm:hidden">Scroll to pan</p>
            <button
              type="button"
              onClick={close}
              autoFocus
              className="label ml-auto px-3 py-2 text-paper hover:text-white"
            >
              Close ✕
            </button>
          </div>
          <div className="flex min-h-0 flex-1 items-center overflow-auto sm:justify-center">
            <Image
              src={figure.src}
              alt={figure.alt}
              width={figure.width}
              height={figure.height}
              sizes="(min-width: 640px) 100vw, 250vw"
              className="h-auto w-[250vw] max-w-none sm:w-full sm:max-w-[1600px]"
            />
          </div>
        </div>
      ) : null}
    </figure>
  );
}
