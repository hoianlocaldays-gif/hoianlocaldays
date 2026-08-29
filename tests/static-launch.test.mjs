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
  "/cam-thanh-coconut-village",
  "/hoi-an-food-guide",
  "/hoi-an-market-guide",
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

test("static export contains every launch route with indexable production metadata", async () => {
  for (const route of launchRoutes) {
    const html = await readFile(routeFile(route), "utf8");
    assert.equal((html.match(/<h1\b/gi) ?? []).length, 1, `${route} must contain one H1`);
    const canonical = route === "/" ? "https://hoianlocaldays.com" : `https://hoianlocaldays.com${route}`;
    assert.match(html, new RegExp(`<link[^>]+rel=["']canonical["'][^>]+href=["']${canonical.replaceAll("/", "\\/")}["']`, "i"), `${route} must use its canonical URL`);
    assert.match(html, /<title>[^<]+<\/title>/i, `${route} must contain a title`);
    assert.match(html, /<meta[^>]+name=["']description["'][^>]+content=["'][^"']+["']/i, `${route} must contain a meta description`);
    assert.doesNotMatch(html, /<meta[^>]+name=["']robots["'][^>]+content=["'][^"']*noindex/i, `${route} must remain indexable`);
    assert.match(html, new RegExp(`<meta[^>]+property=["']og:url["'][^>]+content=["']${canonical.replaceAll("/", "\\/")}["']`, "i"), `${route} must use its canonical Open Graph URL`);
    assert.match(html, /<meta[^>]+property=["']og:image["'][^>]+content=["']https:\/\/hoianlocaldays\.com\/og\.png["']/i, `${route} must use the public Open Graph image`);
    assert.doesNotMatch(html, /pages\.dev|netlify\.app|localhost/i, `${route} exposes a non-production hostname`);
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
  assert.match(xml, /^<\?xml version="1\.0" encoding="UTF-8"\?>/);
  assert.match(xml, /<urlset\s+xmlns="http:\/\/www\.sitemaps\.org\/schemas\/sitemap\/0\.9">/);
  assert.doesNotMatch(xml, /<!doctype html|<html\b/i);
  assert.equal((xml.match(/<url>/g) ?? []).length, launchRoutes.length);
  for (const route of launchRoutes) {
    const canonical = route === "/" ? "https://hoianlocaldays.com" : `https://hoianlocaldays.com${route}`;
    assert.match(xml, new RegExp(`<loc>${canonical.replaceAll("/", "\\/")}<\\/loc>`));
  }
  for (const route of placeholders) assert.doesNotMatch(xml, new RegExp(route));
  assert.doesNotMatch(xml, /pages\.dev|localhost|netlify\.app/i);
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
  assert.match(headers, /^\/sitemap\.xml\s*\n\s+Content-Type:\s*application\/xml;\s*charset=utf-8\s*$/mi);
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

test("Cloudflare deploys the generated static export without an SSR adapter", async () => {
  const [packageJson, wranglerConfig] = await Promise.all([
    readFile(new URL("package.json", root), "utf8"),
    readFile(new URL("wrangler.jsonc", root), "utf8"),
  ]);
  assert.match(packageJson, /"build":\s*"npm run build:static"/);
  assert.match(wranglerConfig, /"directory":\s*"\.\/out"/);
  assert.match(wranglerConfig, /"not_found_handling":\s*"404-page"/);
  assert.doesNotMatch(packageJson + wranglerConfig, /opennextjs-cloudflare|\.next\/standalone/i);
});

test("Cam Thanh guide protects informational intent and links the content cluster", async () => {
  const camThanh = await readFile(routeFile("/cam-thanh-coconut-village"), "utf8");
  const visibleHtml = camThanh.replaceAll(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "");
  assert.match(camThanh, /Cam Thanh Coconut Village: What to Know Before You Go/i);
  assert.match(camThanh, /Based on our current local observation/i);
  assert.match(camThanh, /prices can change|prices, water conditions|planning references/i);
  assert.match(camThanh, /href="\/basket-boat-hoi-an"/i);
  assert.match(camThanh, /href="\/cooking-classes-hoi-an"/i);
  assert.match(camThanh, /href="\/things-to-do-in-hoi-an"/i);
  assert.match(camThanh, /href="\/3-days-in-hoi-an"/i);
  assert.doesNotMatch(visibleHtml, /viator\.com|getyourguide\.com/i);
  assert.doesNotMatch(visibleHtml, /official price|100% safe|hidden gem|authentic experience guaranteed/i);

  for (const route of ["/basket-boat-hoi-an", "/things-to-do-in-hoi-an", "/3-days-in-hoi-an"]) {
    const html = await readFile(routeFile(route), "utf8");
    assert.match(html, /href="\/cam-thanh-coconut-village"/i, `${route} must link contextually to Cam Thanh`);
  }
});

test("Hoi An food guide protects informational intent and supports first-timer decisions", async () => {
  const food = await readFile(routeFile("/hoi-an-food-guide"), "utf8");
  const visibleHtml = food.replaceAll(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "");
  assert.match(food, /Hoi An Food Guide: What to Eat &amp; How to Eat It/i);
  assert.match(food, /practical shortlist, not a definitive ranking/i);
  assert.match(food, /char siu-style pork/i);
  assert.match(food, /do not assume every modern kitchen uses water from Ba Le well/i);
  assert.match(food, /If You Only Have One Day to Eat in Hoi An/i);
  assert.match(food, /Compare Hoi An Cooking Classes/i);
  assert.match(food, /href="\/editorial-methodology"/i);
  for (const topic of [/Cao Lau/i, /Hoi An Chicken Rice/i, /Hoi An Banh Mi/i, /Hoi An-Style Banh Xeo/i, /Banh Dap &amp; Cam Nam Clams/i, /What About White Rose/i, /What About Mot/i, /Visit Hoi An Market/i, /How to Approach Street Food/i]) assert.match(food, topic);
  for (const route of ["/cooking-classes-hoi-an", "/things-to-do-in-hoi-an", "/3-days-in-hoi-an", "/cam-thanh-coconut-village", "/basket-boat-hoi-an"]) assert.match(food, new RegExp(`href="${route.replaceAll("/", "\\/")}"`, "i"));
  assert.doesNotMatch(visibleHtml, /viator\.com|getyourguide\.com/i);
  assert.doesNotMatch(visibleHtml, /foodie paradise|hidden gem|tantalize your taste buds|100% safe|guaranteed safe/i);
  assert.match(food, /WHO Guide on Safe Food for Travellers/i);
  const foodImages = ["hero", "cao-lau", "chicken-rice", "banh-mi", "banh-xeo", "market", "cam-nam"];
  for (const image of foodImages) {
    const path = `images/editorial/food-guide/${image}.webp`;
    await access(new URL(path, output));
    assert.match(food, new RegExp(`src="/${path}"`, "i"));
  }
  assert.equal((food.match(/<img\b[^>]*\/images\/editorial\/food-guide\//gi) ?? []).length, 7);
  assert.match(food, /src="\/images\/editorial\/food-guide\/hero\.webp"[^>]*loading="eager"[^>]*fetchpriority="high"/i);
  assert.match(food, /src="\/images\/editorial\/food-guide\/cao-lau\.webp"[^>]*loading="lazy"/i);
  assert.doesNotMatch(food, /<img\b[^>]*src="https?:\/\//i);
  assert.doesNotMatch(food, /cocolocal/i);

  for (const route of ["/", "/things-to-do-in-hoi-an", "/3-days-in-hoi-an", "/cooking-classes-hoi-an"]) {
    const html = await readFile(routeFile(route), "utf8");
    assert.match(html, /href="\/hoi-an-food-guide"/i, `${route} must link contextually to the food guide`);
  }
});

test("Hoi An market guide supports purposeful visits without becoming an affiliate page", async () => {
  const market = await readFile(routeFile("/hoi-an-market-guide"), "utf8");
  const visibleHtml = market.replaceAll(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "");
  assert.match(market, /Hoi An Market Guide: When to Go, What to See &amp; Local Tips/i);
  assert.match(market, /06:00[–-]08:00/i);
  assert.match(market, /07:30[–-]09:00/i);
  for (const topic of [/What Is Hoi An Market/i, /Best Time to Visit Hoi An Market/i, /Ingredients That Explain Hoi An Food/i, /How to Visit Respectfully/i, /Is Street Food at Hoi An Market Safe/i, /Do You Need a Guided Market Tour/i, /Practical Market Checklist/i]) assert.match(market, topic);
  for (const route of ["/hoi-an-food-guide", "/cooking-classes-hoi-an", "/things-to-do-in-hoi-an", "/3-days-in-hoi-an", "/editorial-methodology"]) assert.match(market, new RegExp(`href="${route.replaceAll("/", "\\/")}"`, "i"));
  assert.match(market, /Compare Hoi An Cooking Classes/i);
  assert.doesNotMatch(visibleHtml, /viator\.com|getyourguide\.com|cocolocal|whatsapp/i);
  assert.doesNotMatch(visibleHtml, /guaranteed safe|100% safe|hidden gem|authentic experience guaranteed/i);
  const marketImages = ["hero", "herbs-produce", "seafood", "ingredients", "interaction"];
  for (const image of marketImages) {
    const path = `images/editorial/market-guide/${image}.webp`;
    await access(new URL(path, output));
    assert.match(market, new RegExp(`src="/${path}"`, "i"));
  }
  assert.equal((market.match(/<img\b[^>]*\/images\/editorial\/market-guide\//gi) ?? []).length, 5);
  assert.match(market, /src="\/images\/editorial\/market-guide\/hero\.webp"[^>]*loading="eager"[^>]*fetchpriority="high"/i);
  assert.doesNotMatch(market, /<img\b[^>]*src="https?:\/\//i);
  for (const route of ["/hoi-an-food-guide", "/things-to-do-in-hoi-an", "/3-days-in-hoi-an"]) {
    const html = await readFile(routeFile(route), "utf8");
    assert.match(html, /href="\/hoi-an-market-guide"/i, `${route} must link contextually to the market guide`);
  }
});
