# Pratik Wadke — Portfolio

Editorial portfolio site built with Next.js 14 App Router, Tailwind CSS, and Framer Motion.

## Editing content

All copy, project data, skills, and links live in a single typed file:

```
lib/content.ts
```

Open it, edit the object, and the site updates. No component code should need to change for content updates.

- **Projects:** add entries to `content.projects`. Set `featured: true` on exactly one entry — that one becomes the large 2×2 card in the bento grid.
- **Experience:** add entries to `content.experience`. Set `isCurrent: true` on one role — it auto-expands.
- **Certifications:** add entries to `content.certifications`. While the array is empty, the site shows the dashed-border placeholder card.
- **Socials / resume:** update `content.person.socials` and drop a `resume.pdf` into `public/`.

## Placeholders to replace

Before deploying, replace these files in `public/`:

- `public/profile.jpg` — your profile photo (not currently referenced; add an `<Image>` to `Hero.tsx` when ready)
- `public/resume.pdf` — your real resume
- `public/og-image.jpg` — 1200×630 OG image
- `public/projects/*.jpg` — per-project cover images (cards render a monogram placeholder until you add them)

## Commands

```bash
npm run dev       # start dev server
npm run build     # production build
npm run start     # run production build
npm run lint      # eslint
npm run typecheck # strict tsc
```

## Deploy

Pushes to a Vercel project build automatically. `sitemap.xml` and `robots.txt` are generated from `lib/content.ts`.

Update `content.seo.siteUrl` to match your actual domain before the first deploy.

## Easter egg

Type `snowflake` anywhere on the site.
