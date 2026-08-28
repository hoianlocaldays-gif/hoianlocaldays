# Google Search Console baseline

Last audited: 2026-08-28

## Property

- Preferred property type: Domain property
- Property: `hoianlocaldays.com`
- Canonical origin: `https://hoianlocaldays.com`
- Ownership verification: Not started; Google DNS TXT token still required from the site owner

## Sitemap

- Production sitemap: `https://hoianlocaldays.com/sitemap.xml`
- Production check: HTTP 200, valid production-domain URL set
- Search Console submission status: Not submitted
- Date first submitted: Not yet submitted

The sitemap intentionally includes the editorial methodology and the three policy/trust pages because they are complete, public pages. It excludes unfinished routes and the legacy itinerary redirect.

## Initial URL inspection order

1. `https://hoianlocaldays.com/`
2. `https://hoianlocaldays.com/things-to-do-in-hoi-an`
3. `https://hoianlocaldays.com/cooking-classes-hoi-an`
4. `https://hoianlocaldays.com/basket-boat-hoi-an`
5. `https://hoianlocaldays.com/my-son-tours-from-hoi-an`
6. `https://hoianlocaldays.com/3-days-in-hoi-an`
7. `https://hoianlocaldays.com/hoi-an-with-kids`

## Verification and submission procedure

1. In Google Search Console, add a **Domain** property for `hoianlocaldays.com`.
2. Copy the exact TXT verification value supplied by Google.
3. Add that value as a TXT record for the domain in Cloudflare DNS.
4. Wait for DNS propagation, then click **Verify** in Search Console.
5. After verification, open **Indexing → Sitemaps** and submit `sitemap.xml`.
6. Use URL Inspection to request indexing for the seven URLs above in priority order.

Never invent or reuse a verification token from another property. Do not submit the `pages.dev` sitemap, placeholder URLs or redirect URLs.

## Indexing notes

- `www.hoianlocaldays.com` did not resolve during the 2026-08-28 audit. The non-www canonical site remains available over HTTPS. DNS was not changed during this audit.
- `/hoi-an-itinerary` redirects once with HTTP 308 to `/3-days-in-hoi-an`.
- `/food-tours-hoi-an`, `/day-trips-from-hoi-an`, `/hoi-an-airport-transfer` and `/where-to-stay-hoi-an` return HTTP 404.
- Analytics remains disabled; Search Console readiness does not require GA4 activation.
