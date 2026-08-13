"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
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

  const close = useCallback(() => setZoomed(false), []);

  useEffect(() => {
    if (!zoomed) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
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
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged diagram"
          className="fixed inset-0 z-50 flex flex-col bg-night/95 p-4 sm:p-8"
        >
          <div className="flex justify-end">
            <button
              type="button"
              onClick={close}
              autoFocus
              className="label px-3 py-2 text-paper hover:text-white"
            >
              Close ✕
            </button>
          </div>
          <div className="flex min-h-0 flex-1 items-center justify-center overflow-auto">
            <Image
              src={figure.src}
              alt={figure.alt}
              width={figure.width}
              height={figure.height}
              sizes="100vw"
              className="h-auto w-full max-w-[1600px]"
            />
          </div>
        </div>
      ) : null}
    </figure>
  );
}
