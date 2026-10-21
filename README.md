# Mara Ellison — photography portfolio

A single-page portfolio for a portrait and wedding photographer, built on the
Next.js + shadcn/ui template (`--template next`, preset `b5rR41Mtnc`).

The page is one scrolling document with four parts: an introduction, a
selection of work, rates, and contact details. Everything is a server
component; there is no client-side JavaScript beyond what Next.js ships by
default.

## Running it

```bash
pnpm install
pnpm dev
```

Then open http://localhost:3000.

```bash
pnpm build   # production build
pnpm start   # serve the production build
pnpm lint
```

## Editing content

- `lib/content.ts` — name, email, location, availability, facts and pricing tiers.
- `lib/photos.ts` — the gallery: image path, alt text, title, place and year.
- `app/page.tsx` — page copy and section layout.
- `app/layout.tsx` — fonts (Cormorant Garamond, Geist, Geist Mono) and page metadata.

## Replacing the placeholder images

Every photograph on the site is a placeholder and is marked in
[`PLACEHOLDERS.md`](./PLACEHOLDERS.md), together with the file it lives in and
where it appears. Replace the files in `public/photos/` with your own work
(keeping the same filenames is enough), then update the captions and alt text
in `lib/photos.ts`.

Placeholder images are from [Unsplash](https://unsplash.com) and are used under
the Unsplash License.

## Design notes

- Type: Cormorant Garamond for display, Geist for text, Geist Mono for labels.
- Colours are warm ivory and ink, defined as OKLCH tokens in `app/globals.css`.
- Corners are square, rules are hairlines, and spacing carries the hierarchy
  rather than colour or shadow.
