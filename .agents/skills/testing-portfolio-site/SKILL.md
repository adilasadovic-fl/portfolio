---
name: testing-portfolio-site
description: How to run and browser-test the Next.js 16 + Tailwind v4 portfolio site locally, including responsive (mobile/tablet/desktop) testing, case-study section nav, and the diagram lightbox.
---

# Testing the portfolio site

Static Next.js 16 (App Router) + Tailwind v4 site. No backend, no auth, no secrets required.

## Devin Secrets Needed
None.

## Running it

- A dev server may already be running on port 3000. Check first
  (`pgrep -af "next dev"`) and reuse it instead of starting a second one;
  a duplicate will silently move to port 3001 and you may test the wrong build.
- Otherwise: `npm install && npm run dev` → http://localhost:3000
- Routes: `/`, `/work`, `/about`, `/work/security-mode`,
  `/work/executable-collaboration`, `/work/aws-quick-setup`.

## Responsive testing

- Desktop widths (1280 / 1440) and tablet (768) can be tested with real window
  resizes if the X display is large enough (check `xdpyinfo | grep dimensions`):
  `DISPLAY=:0 wmctrl -r :ACTIVE: -b remove,maximized_vert,maximized_horz`
  then `DISPLAY=:0 wmctrl -r :ACTIVE: -e 0,0,0,<W>,<H>`.
- **Chrome refuses to go narrower than ~530px wide**, so 375px mobile cannot be
  done with `wmctrl`. Maximize the window, then use DevTools device emulation:
  `F12` → `ctrl+shift+m` → type the width/height into the "Dimensions" fields
  (e.g. 375 x 812). Say in the report that mobile used emulation.
- Confirm no horizontal overflow with one console read:
  `document.documentElement.scrollWidth` vs `clientWidth`.

## Layout / component behaviour to exercise

- Desktop (`lg:` and up): fixed 280/300px left sidebar (`src/components/site-nav.tsx`),
  content offset via `lg:pl-[280px] xl:pl-[300px]` in `src/app/layout.tsx`.
- Below `lg`: sticky top bar with a **Menu** button that opens a fullscreen nav
  containing primary links, the case-study "On this page" section list, and contacts.
  Escape closes it; clicking any link closes it and navigates.
- Case studies: sidebar "On this page" jump links + an IntersectionObserver
  scroll-spy (`src/components/case-nav-context.tsx`, rootMargin `-12% 0px -70% 0px`).
  Scroll a couple of sections and verify the accent-highlighted item changes on its own.
- Diagram lightbox (`src/components/media.tsx`): zoomable `<figure>` renders a
  button that opens a `role="dialog"` overlay with an autoFocused "Close ✕".
  Known weak spots to re-check after any change:
  - focus is **not** restored to the trigger after closing (lands on `<body>`),
    and there is no focus trap;
  - on narrow viewports the overlay image is `w-full`, so it provides no real
    magnification and diagram text stays illegible.

## Console expectations

Zero errors and zero hydration warnings on all routes. The Next.js dev-only
warning `Detected 'scroll-behavior: smooth' on the <html> element` is expected
noise, as are React DevTools / HMR / Fast Refresh logs.

## Expected content gaps (not bugs)

Tracked in `CONTENT-CHECKLIST.md`: AWS Quick Setup shows a "written case study in
progress" note (source PDF corrupted) and About has no "how I work" section or
portrait.
