import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);
const output = new URL("../out/", import.meta.url);

const launchRoutes = [
  "/",
  "/things-to-do-in-hoi-an",
  "/cooking-classes-hoi-an",
  "/basket-boat-hoi-an",
  "/my-son-tours-from-hoi-an",
  "/hoi-an-with-kids",
  "/3-days-in-hoi-an",
  "/editorial-methodology",
  "/affiliate-disclosure",
  "/privacy-policy",
  "/terms",
];

const placeholders = [
  "/food-tours-hoi-an",
  "/day-trips-from-hoi-an",
  "/hoi-an-airport-transfer",
  "/where-to-stay-hoi-an",
];

const developmentCopy = [
  "Partner data pending",
  "Product details pending verification",
  "Provider links pending verification",
  "Ready for verified partners",
  "No invented offers here",
];

function routeFile(route) {
  return new URL(route === "/" ? "index.html" : `${route.slice(1)}.html`, output);
}

async function exists(url) {
  try {
    await access(url);
    return true;
  } catch {
    return false;
  }
}

test("static export contains every launch route with one H1 and canonical metadata", async () => {
  for (const route of launchRoutes) {
    const html = await readFile(routeFile(route), "utf8");
    assert.equal((html.match(/<h1\b/gi) ?? []).length, 1, `${route} must contain one H1`);
    const canonical = route === "/" ? "https://hoianlocaldays.com" : `https://hoianlocaldays.com${route}`;
    assert.match(html, new RegExp(`<link[^>]+rel=["']canonical["'][^>]+href=["']${canonical.replaceAll("/", "\\/")}["']`, "i"), `${route} must use its canonical URL`);
    for (const copy of developmentCopy) assert.doesNotMatch(html, new RegExp(copy, "i"), `${route} exposes development copy`);
  }
});

test("placeholder routes are absent from the static output", async () => {
  for (const route of placeholders) {
    assert.equal(await exists(routeFile(route)), false, `${route} must not be exported`);
    assert.equal(await exists(new URL(`${route.slice(1)}/index.html`, output)), false, `${route} must not have a directory export`);
  }
});

test("sitemap contains only launch-ready routes", async () => {
  const xml = await readFile(new URL("sitemap.xml", output), "utf8");
  for (const route of launchRoutes) {
    const canonical = route === "/" ? "https://hoianlocaldays.com" : `https://hoianlocaldays.com${route}`;
    assert.match(xml, new RegExp(`<loc>${canonical.replaceAll("/", "\\/")}<\\/loc>`));
  }
  for (const route of placeholders) assert.doesNotMatch(xml, new RegExp(route));
  assert.doesNotMatch(xml, /<changefreq>|<priority>/i);
});

test("robots and Cloudflare Pages static controls are exported", async () => {
  const [robots, redirects, headers] = await Promise.all([
    readFile(new URL("robots.txt", output), "utf8"),
    readFile(new URL("_redirects", output), "utf8"),
    readFile(new URL("_headers", output), "utf8"),
  ]);
  assert.match(robots, /Allow:\s*\//i);
  assert.match(robots, /Sitemap:\s*https:\/\/hoianlocaldays\.com\/sitemap\.xml/i);
  assert.match(redirects, /^\/hoi-an-itinerary\s+\/3-days-in-hoi-an\s+308\s*$/m);
  assert.match(headers, /X-Content-Type-Options:\s*nosniff/i);
  assert.match(headers, /Content-Security-Policy:\s*frame-ancestors 'none'/i);
});

test("rendered affiliate links preserve the V1 tracking contract", async () => {
  const commercialRoutes = ["/cooking-classes-hoi-an", "/basket-boat-hoi-an", "/my-son-tours-from-hoi-an"];
  let viator = 0;
  let getYourGuide = 0;
  for (const route of commercialRoutes) {
    const html = await readFile(routeFile(route), "utf8");
    for (const match of html.matchAll(/href="([^"]+)"/g)) {
      const href = match[1].replaceAll("&amp;", "&");
      if (!href.includes("viator.com") && !href.includes("getyourguide.com")) continue;
      const url = new URL(href);
      if (href.includes("viator.com")) {
        viator += 1;
        assert.equal(url.searchParams.get("pid"), "P00316970");
        assert.equal(url.searchParams.get("mcid"), "42383");
        assert.equal(url.searchParams.get("medium"), "link");
        assert.ok(url.searchParams.get("campaign"));
      } else {
        getYourGuide += 1;
        assert.ok(url.searchParams.get("partner_id"));
        assert.ok(url.searchParams.get("utm_medium"));
        assert.ok(url.searchParams.get("cmp"));
      }
    }
  }
  assert.ok(viator >= 10, `expected rendered Viator links, found ${viator}`);
  assert.ok(getYourGuide >= 8, `expected rendered GetYourGuide links, found ${getYourGuide}`);
});

test("commercial pages use one lightweight disclosure without exposing internal business strategy", async () => {
  const commercialRoutes = ["/cooking-classes-hoi-an", "/basket-boat-hoi-an", "/my-son-tours-from-hoi-an"];
  const disclosure = "Some booking links may earn Hoi An Local Days a commission at no extra cost to you.";
  const prohibitedPublicCopy = /\bEPC\b|conversion rate|attribution window|revenue target|highest affiliate commission|provider profitability|Google signals|automatic page views|GA4 configuration/i;
  for (const route of commercialRoutes) {
    const html = await readFile(routeFile(route), "utf8");
    const visibleHtml = html.replaceAll(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "");
    assert.equal(visibleHtml.split(disclosure).length - 1, 1, `${route} must contain one concise disclosure`);
    assert.match(html, /href="\/affiliate-disclosure"/i, `${route} must link to the full disclosure`);
    assert.doesNotMatch(html, prohibitedPublicCopy, `${route} exposes internal business detail`);
  }
});

test("trust pages preserve editorial independence without publishing analytics architecture", async () => {
  const [disclosure, methodology, privacy] = await Promise.all([
    readFile(routeFile("/affiliate-disclosure"), "utf8"),
    readFile(routeFile("/editorial-methodology"), "utf8"),
    readFile(routeFile("/privacy-policy"), "utf8"),
  ]);
  assert.match(disclosure, /may receive a commission/i);
  assert.match(disclosure, /recommend a simpler option/i);
  assert.match(disclosure, /suggest not purchasing an additional activity/i);
  assert.match(methodology, /Traveler fit, useful distinctions and honest trade-offs come first/i);
  assert.match(methodology, /A Useful Answer Can Be [“\"]Choose Less[”\"]/i);
  assert.doesNotMatch(methodology, /conversion|revenue|campaign|attribution|EPC/i);
  assert.match(privacy, /limited website analytics/i);
  assert.doesNotMatch(privacy, /Google Analytics 4|GA4|Google signals|automatic page views|dataLayer|measurement ID/i);
});

test("the build is configured as a runtime-free static export", async () => {
  const config = await readFile(new URL("next.config.ts", root), "utf8");
  assert.match(config, /output:\s*["']export["']/);
});
