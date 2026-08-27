# Cloudflare Pages static launch

Hoi An Local Days exports as static HTML and does not require a Worker, Function, database or Node server in production.

## Cloudflare Pages settings

- Framework preset: `Next.js (Static HTML Export)`
- Production branch: `main`
- Build command: `npx next build`
- Build output directory: `out`
- Root directory: the repository root

Do not enable a Workers adapter or Pages Functions. The files in `public/` are copied into `out/` during the build, including `_redirects` and `_headers`.

## Environment variables

Analytics remains off unless all required production values are deliberately configured. Do not add a GA ID during the first infrastructure validation unless collection and consent requirements have already been approved.

```text
NEXT_PUBLIC_SITE_URL=https://hoianlocaldays.com
NEXT_PUBLIC_ANALYTICS_ENABLED=false
NEXT_PUBLIC_ANALYTICS_DEBUG=false
NEXT_PUBLIC_GA_MEASUREMENT_ID=
```

## Pre-launch checks

1. Run `npm install`.
2. Run `npm audit` and require zero unresolved high-severity advisories.
3. Run `npm test`.
4. Confirm `out/sitemap.xml`, `out/robots.txt`, `out/_redirects` and `out/_headers` exist.
5. Confirm the four unfinished routes are absent from `out/`.
6. Create a Cloudflare Pages preview deployment and test the legacy itinerary redirect before connecting the production domain.

The legacy route must resolve directly to its canonical replacement:

```text
/hoi-an-itinerary /3-days-in-hoi-an 308
```
