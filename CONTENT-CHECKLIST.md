# Content checklist

Slots that are intentionally empty. Nothing here has been filled with invented copy.

## Missing

- **AWS Quick Setup narrative** — the supplied PDF was corrupted in transfer, so the case study
  currently runs on the CV-verified metadata plus the supplied diagram and console screenshots.
  A visible note marks it as in progress in `src/content/projects/aws-quick-setup.ts`.
- **About page copy** — no personal/"how I work" text was supplied, so the About page uses only
  CV-verified material (positioning, summary, experience, patent, expertise). Add a `How I work`
  section once copy exists.
- **Portrait** — none supplied; About has no image.
- **Outcomes / metrics** — no quantitative results were supplied for any project. Add only with
  source material.
- **Team size and collaborators** — not supplied for any project.
- **OpenGraph images** — projects fall back to their thumbnail. Add dedicated 1200×630 images in
  `public/media/<slug>/og.png` and reference them in `generateMetadata` when available.
- **Canonical domain** — `site.url` in `src/content/site.ts` is a placeholder
  (`https://adilasadovic.com`). Update before deploying.

## Where content lives

- Site/CV data: `src/content/site.ts`
- Projects: `src/content/projects/*.ts` (typed blocks defined in `src/content/types.ts`)
- Media: `public/media/<slug>/`
