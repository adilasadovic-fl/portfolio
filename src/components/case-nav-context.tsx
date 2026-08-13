"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type CaseNavItem = { id: string; nav: string };

export type CaseNavState = {
  title: string;
  items: CaseNavItem[];
};

type ContextValue = {
  nav: CaseNavState | null;
  setNav: (nav: CaseNavState | null) => void;
  activeId: string | null;
};

const CaseNavContext = createContext<ContextValue | null>(null);

export function CaseNavProvider({ children }: { children: ReactNode }) {
  const [nav, setNav] = useState<CaseNavState | null>(null);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (!nav || nav.items.length === 0) return;

    const elements = nav.items
      .map((item) => document.getElementById(item.id))
      .filter((element): element is HTMLElement => element !== null);

    if (elements.length === 0) return;

    const visible = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }
        const first = nav.items.find((item) => visible.has(item.id));
        if (first) setActiveId(first.id);
      },
      { rootMargin: "-12% 0px -70% 0px", threshold: 0 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [nav]);

  const items = nav?.items ?? [];
  const resolvedActiveId =
    activeId && items.some((item) => item.id === activeId)
      ? activeId
      : (items[0]?.id ?? null);

  const value = useMemo(
    () => ({ nav, setNav, activeId: resolvedActiveId }),
    [nav, resolvedActiveId],
  );

  return (
    <CaseNavContext.Provider value={value}>{children}</CaseNavContext.Provider>
  );
}

export function useCaseNav() {
  const context = useContext(CaseNavContext);
  if (!context) throw new Error("useCaseNav must be used inside CaseNavProvider");
  return context;
}

export function RegisterCaseNav({ title, items }: CaseNavState) {
  const { setNav } = useCaseNav();
  const key = items.map((item) => item.id).join("|");

  useEffect(() => {
    setNav({ title, items });
    return () => setNav(null);
    // `key` captures the item list identity without re-running on array identity.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, key, setNav]);

  return null;
}
