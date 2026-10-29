# Richard Sullivan · Handyman

Astro static site, deployed on Netlify.

## Develop

```bash
npm install
npm run dev
```

## Editing content

| What | Where |
| --- | --- |
| Contact details, intro, services, partner trades, nav | `src/data/site.ts` |
| Projects | `src/data/projects.ts` (photos go in `public/images/projects/`) |
| FAQ | `src/data/faq.ts` |
| About story, Historic Homes copy | `src/pages/about.astro`, `src/pages/historic-homes.astro` |

Anything marked `TODO` is placeholder copy that Richard should confirm or replace.

**Photo:** replace `public/images/richard.jpg` (portrait, roughly 4:5).

## Deploy

1. Push to GitHub.
2. In Netlify: *Add new site → Import from Git*, pick the repo. Build settings come from `netlify.toml`.
3. Contact form submissions appear under *Forms* in the Netlify dashboard (enable form detection if prompted, and add an email notification there).
4. Update `site` in `astro.config.mjs` once the domain is set.
