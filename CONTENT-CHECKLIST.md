# Content checklist

Slots that are intentionally empty. Nothing here has been filled with invented copy.

## Missing

- **About page copy** — no personal/"how I work" text was supplied, so the About page uses only
  CV-verified material (positioning, summary, experience, patent, expertise). Add a `How I work`
  section once copy exists.
- **Portrait** — none supplied; About has no image.
- **Outcomes / metrics** — no quantitative results were supplied for Security Mode or Executable
  Collaboration. AWS Quick Setup carries the publicly documented program-level figures from the
  supplied narrative, explicitly framed as program evidence rather than a causal claim.
- **AWS Quick Setup source attribution** — the supplied narrative twice credits "Daria's public
  program documentation / case study" for the deployment-preview and platform-library claims. The
  name is dropped in the published copy; restore an explicit credit if that source should be cited.
- **Team size and collaborators** — not supplied for any project.
- **OpenGraph images** — projects fall back to their thumbnail. Add dedicated 1200×630 images in
  `public/media/<slug>/og.png` and reference them in `generateMetadata` when available.
- **Canonical domain** — `site.url` in `src/content/site.ts` is a placeholder
  (`https://adilasadovic.com`). Update before deploying.

## Where content lives

- Site/CV data: `src/content/site.ts`
- Projects: `src/content/projects/*.ts` (typed blocks defined in `src/content/types.ts`)
- Media: `public/media/<slug>/`
