# Test plan — portfolio site (PR #1, branch devin/1786662625-portfolio-site)

App under test: `npm run dev` already running at http://localhost:3000 (next-server v16.3.0, pid 7162).
Screen is 1600x1200 so 1280/1440 desktop widths and 768 tablet can be tested with real window resizes
(`wmctrl -r :ACTIVE: -e 0,0,0,W,H`). 375 mobile: try a real narrow window; if Chrome clamps the width,
fall back to DevTools responsive emulation at 375x812 and say so in the report.

Code evidence: `src/app/layout.tsx:51-62` (skip link + `lg:pl-[280px] xl:pl-[300px]` offset),
`src/components/site-nav.tsx:144-203` (mobile header/Menu button, Escape handler L148-159, fixed sidebar L191),
`src/components/site-nav.tsx:81-118` (SectionLinks "On this page", `aria-current` on active),
`src/components/case-nav-context.tsx:31-55` (IntersectionObserver scroll-spy, rootMargin -12%/-70%),
`src/components/media.tsx:51-103` (zoomable figure button → `role="dialog"` overlay, autoFocus Close, Escape L28-30),
`src/app/work/[slug]/page.tsx:124-147` (Next-project link).

## T1 — Desktop 1440: sidebar nav + internal links, no 404s
1. Window 1440x1150, load `/`. **Pass:** fixed left sidebar visible with "Adila Sadovic / Senior Product Designer", Work, About, Resume ↗, email, LinkedIn, Berlin; main content starts right of the sidebar (no overlap/clipping of headings).
2. Click sidebar **Work**. **Pass:** URL `/work`, project list renders 3 projects (Security Mode, Executable Collaboration, AWS Quick Setup), sidebar "Work" is accent-colored (`aria-current=page`).
3. Click each of the three project cards in turn (back to /work between). **Pass:** each loads its case study with H1 matching the card title, HTTP 200, no Next.js error overlay / "404 This page could not be found".
4. Click sidebar **About**. **Pass:** URL `/about`, page renders experience entries (Miro, AWS) and patent block; About accent-highlighted.
5. Click **Resume ↗**. **Pass:** a new tab opens `/adila-sadovic-cv.pdf` and renders a PDF (not a 404 page). Close tab.
6. Verify `mailto:` and LinkedIn hrefs by hovering/reading link targets from the page (do not open mail client). **Pass:** `mailto:adila.sadovic@gmail.com` and `https://www.linkedin.com/in/adila-sadovic`.
7. Repeat step 1 check at **1280x1150**. **Pass:** sidebar still fixed at left, content not overlapped, no horizontal scrollbar (`document.documentElement.scrollWidth <= clientWidth`).

## T2 — Case study section nav + scroll-spy + next project (desktop 1440, /work/security-mode)
1. **Pass:** sidebar shows "On this page" with numbered items 01..08 matching the section labels rendered in the page (Overview, Context, System, Decisions, Surfaces, Behavior, Status, Reflection order per `security-mode.ts`).
2. Click "Surfaces" in the section list. **Pass:** page scrolls so the `#surfaces` section heading is at/near the top of the viewport (visible in screenshot), URL hash `#surfaces`, and that item becomes accent-colored while others are muted.
3. Scroll the page down ~2 more sections with the mouse wheel. **Pass:** the accent-highlighted item changes to a later item that matches the section currently at the top of the viewport (i.e. scroll-spy updates without clicking). Fail if the highlight stays on "Surfaces".
4. Scroll to the very bottom, click the **Next** project link. **Pass:** navigates to the next case study `/work/...` with matching H1; no 404.

## T3 — Diagram lightbox (desktop 1440)
1. On `/work/security-mode`, click the hero/system diagram figure (caption ends with "Click to enlarge"). **Pass:** a fullscreen dark overlay appears covering the viewport with a "Close ✕" button top-right and the diagram enlarged and legible (text in the diagram readable in a zoomed screenshot); background page scroll locked.
2. Check focus: immediately press Enter without moving the mouse is NOT used — instead take a screenshot of the focus ring / read `document.activeElement` via console once. **Pass:** activeElement is the "Close ✕" button (autoFocus).
3. Press **Escape**. **Pass:** overlay disappears, underlying case study visible again at the same scroll position, page scroll works again.
4. Re-open and close via the **Close ✕** button. **Pass:** overlay closes.

## T4 — Tablet 768 and mobile 375
For each width (768x1000, then 375x812):
1. Load `/work/security-mode`. **Pass:** no left sidebar; a sticky top bar with identity + **Menu** button. No horizontal overflow — verify visually (nothing cut off at the right edge, no sideways scroll when dragging) and confirm with one console read of `scrollWidth` vs `clientWidth`.
2. **Pass:** diagrams are fully within the content column, not cropped, and captions wrap.
3. Tap **Menu**. **Pass:** fullscreen nav covers the page showing large Work / About / Resume, an "On this page" section list (case-study sections), and contact block at the bottom; button label flips to "Close".
4. Tap a section link (e.g. "Decisions"). **Pass:** overlay closes AND the page is scrolled to that section.
5. Re-open Menu, press **Escape**. **Pass:** overlay closes, page interactive again.
6. Re-open Menu, tap **About**. **Pass:** overlay closes and URL is `/about` with About content rendered.

## T5 — Keyboard-only pass on /work/executable-collaboration (desktop 1440)
1. Load page, press **Tab** once. **Pass:** a visible "Skip to content" chip appears at top-left (screenshot must show it). Press Enter. **Pass:** focus moves into `#main`.
2. Continue tabbing ~10 times. **Pass:** focus moves in a sensible order (sidebar identity → Work → About → Resume → section links → contact → in-page content), and every focused element shows a visible focus indicator in the screenshots. Fail if any tab stop has no visible focus ring or focus jumps to an off-screen/invisible element without scrolling to it.
3. Tab to the zoomable diagram button and press **Enter**. **Pass:** lightbox opens; press Escape → closes.

## T6 — Console errors / hydration warnings on every route
Visit `/`, `/work`, `/about`, `/work/security-mode`, `/work/executable-collaboration`, `/work/aws-quick-setup`
(hard reload each) and read the browser console after each. **Pass:** zero errors and zero hydration
warnings ("Hydration failed", "did not match", "Warning: Text content does not match"). React DevTools
download notices and Next.js dev informational logs are ignored. Any error/warning is recorded verbatim.

## Known/expected (not bugs)
- AWS Quick Setup shows a "written case study in progress" note.
- About has no "how I work" section and no portrait.
