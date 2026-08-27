# HAL Analytics V1

## Architecture

UI components call the centralized `track()` adapter in `lib/tracking.ts`. The adapter always emits the local `hoi-an-local-days:track` browser event, optionally prints a structured debug log, and sends to GA4 only when the production collection gate is open.

The site uses direct GA4 (`gtag.js`), not Google Tag Manager. Automatic GA page views, Google signals and ad-personalization signals are disabled.

## Events

| Event | Required properties | Purpose |
| --- | --- | --- |
| `page_view` | `page_path`, `page_type` | One controlled page view per pathname, including client navigation |
| `internal_cta_click` | `source_page`, `destination_page`, `section`, `cta_id` | Meaningful movement from discovery or planning content toward decision pages |
| `affiliate_click` | `experience_id`, `provider`, `campaign`, `page`, `position` | Existing outbound booking-click contract; provider product ID may also be included |

No hover, scroll, accordion, form, logo, breadcrumb, header or footer events are part of Analytics V1.

## Value-first analytics rule

Analytics exists to understand whether Hoi An Local Days helps travelers reach useful decisions. The three V1 events must be interpreted together as a decision journey, not as a mandate to maximize affiliate click-through rate.

A lower affiliate CTR is not automatically a negative outcome. Content may have succeeded by helping a traveler avoid an unnecessary booking, choose a simpler plan or continue to a more relevant guide.

Product and content decisions must balance:

- traveler usefulness, including clarity, avoided mistakes and better trip choices;
- sustainable business performance, including relevant commercial intent and qualified affiliate clicks.

Analytics must not be used to justify dark patterns, artificial urgency, CTA inflation, reduced negative guidance or weaker editorial independence. Affiliate clicks are a business signal, not the sole definition of traveler value.

## Page taxonomy

- `homepage`: `/`
- `discovery`: `/things-to-do-in-hoi-an` and fallback editorial routes
- `planning`: `/3-days-in-hoi-an`, `/hoi-an-with-kids`
- `commercial`: cooking classes, basket boats and My Son comparison pages
- `trust`: methodology, disclosure, privacy and terms pages

## CTA naming

CTA IDs are stable, lowercase funnel identifiers: `<source>_<destination>`, for example `home_cooking`, `things_myson`, `itinerary_basket_boat` and `kids_cooking`. Repeated links keep the same ID; `section` distinguishes placements such as `quick_picks`, `decision_paths` or `related_guides`.

## Environment configuration

Copy `.env.example` values into the deployment environment:

```text
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_ANALYTICS_ENABLED=true
NEXT_PUBLIC_ANALYTICS_DEBUG=false
```

GA collection requires all three conditions: a production build, `NEXT_PUBLIC_ANALYTICS_ENABLED=true`, and a non-empty measurement ID. Development/localhost never sends to GA, even if an ID is present. Set `NEXT_PUBLIC_ANALYTICS_DEBUG=true` to inspect structured events in the browser console without enabling collection.

The enabled flag is an operational configuration gate, not proof of visitor consent. V1 does not include a consent-management platform; applicable consent and opt-out requirements must be reviewed before production collection is enabled.

## Campaign and attribution notes

Affiliate campaign values remain provider-owned strings and must not be rewritten. Future campaigns should identify the source page and placement consistently while preserving every required OTA parameter.

For future products, prefer `hal-{category}-{experience-role}-{provider}`. Existing campaign names remain unchanged because reporting continuity matters more than retroactive naming consistency.

## Funnel and future OTA reporting

1. Discovery: homepage, Things to Do or an organic landing page.
2. Money page visit: Cooking Classes, Basket Boat or My Son.
3. Affiliate click: measured by HAL through `affiliate_click`.
4. OTA booking: measured by Viator or GetYourGuide reporting.

GA4 measures outbound clicks, not confirmed purchases, cancellations, approved commission, cross-device bookings or bookings outside a provider attribution window. HAL and OTA reports will not match exactly because of blocked analytics, cookie restrictions, cross-device behavior and provider attribution rules.

Future business reporting may add Affiliate Clicks, Bookings, Commission, Booking Conversion Rate and EPC without adding more browser events:

```text
Booking Conversion Rate = bookings / affiliate clicks
EPC = commission / affiliate clicks
```

HAL supplies affiliate clicks. OTA dashboards supply booking and commission data. Analytics V1 does not import OTA data or build a dashboard.
