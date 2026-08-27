import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);
const read = (path) => readFile(new URL(path, root), "utf8");

test("the analytics adapter keeps localhost collection disabled", async () => {
  const tracking = await read("lib/tracking.ts");
  assert.match(tracking, /TrackEvent = "page_view" \| "internal_cta_click" \| "affiliate_click"/);
  assert.doesNotMatch(tracking, /experience_view|category_click|provider_click|plan_day_click|whatsapp_click/);
  assert.match(tracking, /process\.env\.NODE_ENV === "production"/);
  assert.match(tracking, /NEXT_PUBLIC_ANALYTICS_ENABLED === "true"/);
  assert.match(tracking, /Boolean\(gaMeasurementId\)/);
  assert.match(tracking, /__halLastPageViewPath === pathname/);
});

test("affiliate clicks keep the complete V1 contract", async () => {
  const affiliateCta = await read("components/affiliate-cta.tsx");
  for (const property of ["experience_id", "provider", "provider_product_id", "campaign", "page", "position"])
    assert.match(affiliateCta, new RegExp(`\\b${property}\\b`), `Missing affiliate property: ${property}`);
});

test("required funnel CTA IDs are present on every approved source page", async () => {
  const files = await Promise.all([
    read("app/page.tsx"),
    read("components/things-to-do-hub.tsx"),
    read("components/three-days-itinerary-page.tsx"),
    read("components/hoi-an-with-kids-page.tsx"),
    read("components/cooking-editorial.tsx"),
    read("components/basket-boat-page.tsx"),
    read("components/my-son-page.tsx"),
  ]);
  const source = files.join("\n");
  for (const ctaId of [
    "home_cooking", "home_basket_boat", "home_kids", "home_things_to_do", "home_itinerary",
    "things_cooking", "things_basket_boat", "things_myson",
    "itinerary_cooking", "itinerary_basket_boat", "itinerary_myson",
    "kids_cooking", "kids_basket_boat",
    "cooking_basket_boat", "basket_cooking", "myson_cooking", "myson_basket_boat",
  ]) assert.match(source, new RegExp(`\\b${ctaId}\\b`), `Missing CTA ID: ${ctaId}`);
});

test("GA configuration disables automatic views and advertising signals", async () => {
  const analytics = await read("components/analytics.tsx");
  assert.match(analytics, /send_page_view: false/);
  assert.match(analytics, /allow_google_signals: false/);
  assert.match(analytics, /allow_ad_personalization_signals: false/);
});
