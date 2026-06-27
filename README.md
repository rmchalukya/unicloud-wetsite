# UniCloud Website

Marketing/brochure website for **UniCloud**. Design follows
[teksara.com](https://teksara.com); stack and structure follow the earlier
`aayrakart-website` project.

Built with **Next.js 15 (App Router) · TypeScript · Tailwind CSS**.

> ⚠️ Content is currently **placeholder** (look for `[Placeholder]` / `[...]`
> markers). See **Editing content** below to drop in the real copy.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Project structure

```
app/
  layout.tsx          Root layout (font, Navbar, Footer, SEO)
  page.tsx            Home
  services/page.tsx   Detailed services
  solutions/page.tsx  Solutions/offerings grid
  about/page.tsx
  contact/page.tsx    Contact form + details
  privacy/page.tsx    Legal (placeholder)
  terms/page.tsx      Legal (placeholder)
  globals.css         Tailwind layers + .btn/.card/.container-x helpers
components/           Navbar, Footer, Logo, HeroBackground, Section, cards
data/
  services.ts         The 4 service verticals
  solutions.ts        Offering cards
  stats.ts            Stats bar numbers
lib/
  site.ts             Brand + contact + nav config (single source of truth)
tailwind.config.ts    Brand colors (blue/amber/surface) + hero animations
```

## Editing content

Everything is data-driven — to add the real content you only edit these files,
**not the components**:

- **Brand name, tagline, description, contact details, nav, social:** `lib/site.ts`
- **Services (home + /services):** `data/services.ts`
- **Solutions (home + /solutions):** `data/solutions.ts`
- **Stats bar numbers:** `data/stats.ts`
- **Hero headline & CTA band copy:** inline in `app/page.tsx` (marked `[Placeholder]`)
- **Legal text:** `app/privacy/page.tsx`, `app/terms/page.tsx`

## Design system

Tokens live in `tailwind.config.ts`:

- **brand** (blue): `#3466ff` (500) / `#1d4ed8` (600) → `#0b1a3e` (dark)
- **accent** (amber): `#fbbf24` (400) / `#f59e0b` (500)
- **surface** (gray): `#f8f9fc` / `#eef1f6` / `#e2e6ee`

The hero's animated navy backdrop (gradient + dotted grid + spinning rings +
floating dots + glow) lives in `components/HeroBackground.tsx`.

## Deploying

Designed for **Vercel**: push to GitHub, import the repo, deploy. Any host that
supports Next.js works.
