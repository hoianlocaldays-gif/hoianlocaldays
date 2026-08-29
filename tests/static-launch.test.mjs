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
  "/cao-lau-hoi-an",
  "/banh-xeo-hoi-an",
  "/my-son-tours-from-hoi-an",
  "/my-son-sanctuary-guide",
  "/what-to-expect-hoi-an-cooking-class",
  "/how-many-days-in-hoi-an",
  "/hoi-an-old-town-guide",
  "/basket-boat-hoi-an-with-kids",
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

test("Cao lau guide answers first-timer questions without overstating origin or dietary safety", async () => {
  const caoLau = await readFile(routeFile("/cao-lau-hoi-an"), "utf8");
  const visibleHtml = caoLau.replaceAll(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "");
  assert.match(caoLau, /Cao Lau in Hoi An: What It Is &amp; How to Eat It/i);
  for (const topic of [/What Is Cao Lau/i, /What Is in Cao Lau/i, /Why Cao Lau Has So Little Broth/i, /What Makes Cao Lau Noodles Different/i, /The Ba Le Well Story/i, /Did Cao Lau Come From Japan or China/i, /Cao Lau vs Mi Quang/i, /How Do You Eat Cao Lau/i, /Is Cao Lau Worth Trying/i, /What to Look for in Your First Bowl/i, /Is Cao Lau Vegetarian or Gluten-Free/i]) assert.match(caoLau, topic);
  assert.match(caoLau, /strongly associates its water with traditional cao lau production/i);
  assert.match(caoLau, /does not prove one specific origin/i);
  assert.match(caoLau, /should not automatically be treated as gluten-free/i);
  assert.match(caoLau, /not every class teaches cao lau/i);
  for (const route of ["/hoi-an-food-guide", "/hoi-an-market-guide", "/cooking-classes-hoi-an", "/3-days-in-hoi-an", "/editorial-methodology"]) assert.match(caoLau, new RegExp(`href="${route.replaceAll("/", "\\/")}"`, "i"));
  assert.doesNotMatch(visibleHtml, /viator\.com|getyourguide\.com|cocolocal|whatsapp/i);
  assert.doesNotMatch(visibleHtml, /proven Japanese origin|guaranteed gluten-free|best restaurant/i);
  const localImages = [
    "images/editorial/food-guide/cao-lau.webp",
    "images/editorial/cao-lau/noodle-detail.webp",
    "images/editorial/cao-lau/mixed-bowl.webp",
    "images/editorial/market-guide/ingredients.webp",
  ];
  for (const path of localImages) {
    await access(new URL(path, output));
    assert.match(caoLau, new RegExp(`src="/${path.replaceAll("/", "\\/")}"`, "i"));
  }
  assert.equal((caoLau.match(/<img\b/gi) ?? []).length, 4);
  assert.match(caoLau, /src="\/images\/editorial\/food-guide\/cao-lau\.webp"[^>]*loading="eager"[^>]*fetchpriority="high"/i);
  assert.doesNotMatch(caoLau, /<img\b[^>]*src="https?:\/\//i);

  const food = await readFile(routeFile("/hoi-an-food-guide"), "utf8");
  assert.match(food, /href="\/cao-lau-hoi-an"/i, "food guide must link contextually to the Cao Lau guide");
});

test("Banh xeo guide explains the complete eating format without becoming a recipe or affiliate page", async () => {
  const banhXeo = await readFile(routeFile("/banh-xeo-hoi-an"), "utf8");
  const visibleHtml = banhXeo.replaceAll(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "");
  assert.match(banhXeo, /Banh Xeo in Hoi An: What It Is &amp; How to Eat It/i);
  for (const topic of [/What Is Banh Xeo/i, /What Makes Hoi An-Style Banh Xeo Different/i, /What(?:&apos;|&#x27;|')s Inside Banh Xeo/i, /Why the Herbs, Wrapper &amp; Sauce Matter/i, /How to Eat Banh Xeo/i, /What Dipping Sauce Comes With It/i, /Hoi An Banh Xeo vs Southern Banh Xeo/i, /Is Banh Xeo Vegetarian or Gluten-Free/i, /Banh Xeo vs Cao Lau/i, /Is Banh Xeo Worth Trying/i, /Want to Learn How It(?:&apos;|&#x27;|')s Made/i]) assert.match(banhXeo, topic);
  assert.match(banhXeo, /coconut milk is present in some recipes and regional styles, not a universal Hoi An requirement/i);
  assert.match(banhXeo, /Neither should be declared the only [“"]authentic[”"] Hoi An option/i);
  assert.match(banhXeo, /should not automatically be called gluten-free/i);
  assert.match(banhXeo, /not included in every program/i);
  for (const route of ["/hoi-an-food-guide", "/cao-lau-hoi-an", "/hoi-an-market-guide", "/cooking-classes-hoi-an", "/3-days-in-hoi-an", "/editorial-methodology"]) assert.match(banhXeo, new RegExp(`href="${route.replaceAll("/", "\\/")}"`, "i"));
  assert.doesNotMatch(visibleHtml, /viator\.com|getyourguide\.com|cocolocal|whatsapp/i);
  assert.doesNotMatch(visibleHtml, /best banh xeo restaurant|guaranteed gluten-free|only authentic sauce|coconut milk is always/i);
  const localImages = [
    "images/editorial/food-guide/banh-xeo.webp",
    "images/editorial/banh-xeo/serving-setup.webp",
    "images/editorial/banh-xeo/pan-cooking.webp",
    "images/editorial/banh-xeo/wrap-dipping.webp",
  ];
  for (const path of localImages) {
    await access(new URL(path, output));
    assert.match(banhXeo, new RegExp(`src="/${path.replaceAll("/", "\\/")}"`, "i"));
  }
  assert.equal((banhXeo.match(/<img\b/gi) ?? []).length, 4);
  assert.match(banhXeo, /src="\/images\/editorial\/food-guide\/banh-xeo\.webp"[^>]*loading="eager"[^>]*fetchpriority="high"/i);
  assert.doesNotMatch(banhXeo, /<img\b[^>]*src="https?:\/\//i);

  const [food, caoLau] = await Promise.all([
    readFile(routeFile("/hoi-an-food-guide"), "utf8"),
    readFile(routeFile("/cao-lau-hoi-an"), "utf8"),
  ]);
  assert.match(food, /href="\/banh-xeo-hoi-an"/i, "food guide must link contextually to the Banh Xeo guide");
  assert.match(caoLau, /href="\/banh-xeo-hoi-an"/i, "Cao Lau guide must link contextually to the Banh Xeo guide");
});

test("My Son Sanctuary guide bridges heritage context and practical visit decisions", async () => {
  const guide = await readFile(routeFile("/my-son-sanctuary-guide"), "utf8");
  const visibleHtml = guide.replaceAll(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "");
  assert.match(guide, /My Son Sanctuary Guide: What to Know Before You Visit/i);
  for (const topic of [/What Is My Son Sanctuary/i, /Why My Son Matters/i, /What Will You Actually See/i, /What Does the Visit Feel Like/i, /Best Time to Visit During the Day/i, /What to Wear and Bring/i, /Do You Need a Guide/i, /Can You Visit My Son Independently/i, /Is My Son Worth Visiting/i, /Where My Son Fits Into a Hoi An Trip/i]) assert.match(guide, topic);
  assert.match(guide, /criteria \(ii\) and \(iii\)/i);
  assert.match(guide, /4th to the 13th centuries/i);
  assert.match(guide, /Second World War, the First Indochina War and especially the Second Indochina War/i);
  assert.match(guide, /not an automatic priority for every short stay/i);
  for (const route of ["/my-son-tours-from-hoi-an", "/things-to-do-in-hoi-an", "/3-days-in-hoi-an", "/editorial-methodology"]) assert.match(guide, new RegExp(`href="${route.replaceAll("/", "\\/")}"`, "i"));
  assert.equal((visibleHtml.match(/href="\/my-son-tours-from-hoi-an"/gi) ?? []).length, 1);
  assert.doesNotMatch(visibleHtml, /viator\.com|getyourguide\.com|best tour|book now|limited availability/i);
  assert.doesNotMatch(visibleHtml, /VND\s?[\d,]+|opens? at|closes? at|performance at/i);
  assert.equal((guide.match(/<h1\b/gi) ?? []).length, 1);
  assert.equal((guide.match(/<img\b/gi) ?? []).length, 2);
  for (const image of ["images/experiences/my-son/myson-overall-group.webp", "images/experiences/my-son/myson-private.webp"]) {
    await access(new URL(image, output));
    assert.match(guide, new RegExp(`src="/${image.replaceAll("/", "\\/")}"`, "i"));
  }
  assert.doesNotMatch(guide, /<img\b[^>]*src="https?:\/\//i);
  for (const route of ["/things-to-do-in-hoi-an", "/3-days-in-hoi-an", "/my-son-tours-from-hoi-an"]) {
    const html = await readFile(routeFile(route), "utf8");
    assert.match(html, /href="\/my-son-sanctuary-guide"/i, `${route} must link contextually to the My Son guide`);
  }
});

test("cooking class expectations guide supports decisions without duplicating the money page", async () => {
  const guide = await readFile(routeFile("/what-to-expect-hoi-an-cooking-class"), "utf8");
  const visibleHtml = guide.replaceAll(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "");
  assert.match(guide, /What Happens in a Hoi An Cooking Class/i);
  for (const topic of [/What Does a Hoi An Cooking Class Usually Include/i, /Cooking-Only vs a Half-Day Experience/i, /Does the Market Visit Actually Add Value/i, /Why Some Classes Include Basket Boats or Farms/i, /How Hands-On Will the Cooking Be/i, /Does Group Size Matter/i, /What Will You Cook/i, /Dietary Requirements and Allergies/i, /Are Cooking Classes Good With Kids/i, /Is a Half-Day Cooking Experience Worth It/i, /What to Check Before Booking/i]) assert.match(guide, topic);
  assert.match(guide, /Ingredient substitution and cross-contact control are different questions/i);
  assert.match(guide, /class around 15 guests or more can begin to feel meaningfully larger/i);
  assert.match(guide, /techniques and decisions you can use again/i);
  for (const route of ["/cooking-classes-hoi-an", "/hoi-an-market-guide", "/hoi-an-food-guide", "/cam-thanh-coconut-village", "/basket-boat-hoi-an", "/hoi-an-with-kids", "/editorial-methodology"]) assert.match(guide, new RegExp(`href="${route.replaceAll("/", "\\/")}"`, "i"));
  assert.match(visibleHtml, /href="\/cooking-classes-hoi-an"[^>]*>Compare Hoi An Cooking Classes/i);
  assert.doesNotMatch(visibleHtml, /viator\.com|getyourguide\.com|cocolocal|book now|limited spots|#1 cooking/i);
  assert.doesNotMatch(visibleHtml, /VND\s?[\d,]+|70% guarantee/i);
  assert.equal((guide.match(/<h1\b/gi) ?? []).length, 1);
  const images = ["images/experiences/cooking/classic-market-cooking.webp", "images/editorial/market-guide/interaction.webp", "images/experiences/cooking/personal-market-cooking.webp", "images/experiences/cooking/food-lovers-cooking.webp"];
  for (const image of images) { await access(new URL(image, output)); assert.match(guide, new RegExp(`src="/${image.replaceAll("/", "\\/")}"`, "i")); }
  assert.equal((guide.match(/<img\b/gi) ?? []).length, 4);
  assert.doesNotMatch(guide, /<img\b[^>]*src="https?:\/\//i);
  for (const route of ["/cooking-classes-hoi-an", "/things-to-do-in-hoi-an", "/hoi-an-market-guide"]) {
    const html = await readFile(routeFile(route), "utf8");
    assert.match(html, /href="\/what-to-expect-hoi-an-cooking-class"/i, `${route} must link contextually to the expectations guide`);
  }
});

test("stay-length guide gives a nuanced planning framework without becoming an itinerary", async () => {
  const guide = await readFile(routeFile("/how-many-days-in-hoi-an"), "utf8");
  const visibleHtml = guide.replaceAll(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "");
  assert.match(guide, /How Many Days in Hoi An Do You Need/i);
  for (const topic of [
    /Is One Day in Hoi An Enough/i,
    /What Can You Do With Two Days/i,
    /Why Three Days Works Well for a First Visit/i,
    /When a Longer Stay Makes Sense/i,
    /How Many Days by Traveler Type/i,
    /Count Experiences, Not Just Attractions/i,
    /Days vs Nights/i,
    /How to Split Time Between Hoi An and Da Nang/i,
  ]) assert.match(guide, topic);
  assert.match(guide, /around three days is a strong starting point/i);
  assert.match(guide, /Two days can work well/i);
  assert.match(guide, /four or more makes sense/i);
  for (const route of [
    "/3-days-in-hoi-an",
    "/things-to-do-in-hoi-an",
    "/my-son-sanctuary-guide",
    "/what-to-expect-hoi-an-cooking-class",
    "/cam-thanh-coconut-village",
    "/hoi-an-food-guide",
    "/hoi-an-with-kids",
    "/editorial-methodology",
  ]) assert.match(guide, new RegExp(`href="${route.replaceAll("/", "\\/")}"`, "i"));
  assert.doesNotMatch(visibleHtml, /viator\.com|getyourguide\.com|cocolocal|book now|check availability|limited spots/i);
  assert.equal((guide.match(/<h1\b/gi) ?? []).length, 1);
  const images = [
    "images/experiences/cooking/classic-market-cooking.webp",
    "images/experiences/basket-boat/quieter-basketboat.webp",
    "images/experiences/my-son/myson-overall-group.webp",
    "images/editorial/food-guide/hero.webp",
  ];
  for (const image of images) { await access(new URL(image, output)); assert.match(guide, new RegExp(`src="/${image.replaceAll("/", "\\/")}"`, "i")); }
  assert.equal((guide.match(/<img\b/gi) ?? []).length, 4);
  assert.doesNotMatch(guide, /<img\b[^>]*src="https?:\/\//i);
  for (const route of ["/", "/things-to-do-in-hoi-an", "/3-days-in-hoi-an", "/hoi-an-with-kids"]) {
    const html = await readFile(routeFile(route), "utf8");
    assert.match(html, /href="\/how-many-days-in-hoi-an"/i, `${route} must link contextually to the stay-length guide`);
  }
});

test("Old Town guide explains the heritage district without becoming a listicle or affiliate page", async () => {
  const guide = await readFile(routeFile("/hoi-an-old-town-guide"), "utf8");
  const visibleHtml = guide.replaceAll(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "");
  assert.match(guide, /Hoi An Old Town Guide: What to See &amp; How to Visit/i);
  for (const topic of [
    /What Is Hoi An Old Town/i,
    /Why Is Hoi An a UNESCO World Heritage Site/i,
    /What Should You Actually See/i,
    /Hoi An Old Town by Day vs Evening/i,
    /When Is the Best Time to Explore/i,
    /How Much Time Do You Need/i,
    /How to Walk the Old Town Without Rushing/i,
    /How Heritage Tickets Work/i,
    /The Japanese Covered Bridge/i,
    /Market and Food Along the Way/i,
    /Common First-Time Mistakes/i,
    /Old Town Is Only One Part of Hoi An/i,
  ]) assert.match(guide, topic);
  assert.match(guide, /inscribed Hoi An Ancient Town in 1999 under criteria \(ii\) and \(v\)/i);
  assert.match(guide, /VND 80,000/i);
  assert.match(guide, /VND 120,000/i);
  assert.match(guide, /checked 29 August 2026/i);
  assert.match(guide, /up to three days/i);
  assert.doesNotMatch(visibleHtml, /top 10|viator\.com|getyourguide\.com|cocolocal|book now|check availability|limited spots/i);
  assert.equal((guide.match(/<h1\b/gi) ?? []).length, 1);
  for (const route of ["/things-to-do-in-hoi-an", "/how-many-days-in-hoi-an", "/3-days-in-hoi-an", "/hoi-an-market-guide", "/hoi-an-food-guide", "/my-son-sanctuary-guide", "/hoi-an-with-kids", "/editorial-methodology"]) assert.match(guide, new RegExp(`href="${route.replaceAll("/", "\\/")}"`, "i"));
  const images = ["images/editorial/market-guide/hero.webp", "images/editorial/food-guide/cao-lau.webp"];
  for (const image of images) { await access(new URL(image, output)); assert.match(guide, new RegExp(`src="/${image.replaceAll("/", "\\/")}"`, "i")); }
  assert.equal((guide.match(/<img\b/gi) ?? []).length, 2);
  assert.doesNotMatch(guide, /<img\b[^>]*src="https?:\/\//i);
  for (const route of ["/", "/things-to-do-in-hoi-an", "/3-days-in-hoi-an", "/how-many-days-in-hoi-an"]) {
    const html = await readFile(routeFile(route), "utf8");
    assert.match(html, /href="\/hoi-an-old-town-guide"/i, `${route} must link contextually to the Old Town guide`);
  }
});

test("basket boat with kids guide supports a family decision without making safety guarantees", async () => {
  const guide = await readFile(routeFile("/basket-boat-hoi-an-with-kids"), "utf8");
  const visibleHtml = guide.replaceAll(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "");
  assert.match(guide, /Hoi An Basket Boat With Kids: What Parents Should Know/i);
  for (const topic of [/What Is the Basket Boat Experience Like for Children/i, /Is There a Minimum Age/i, /Life Jackets and Active Adult Supervision/i, /Normal Paddle Ride vs Basket Boat Spinning/i, /Lively Areas vs Quieter Cam Thanh Routes/i, /How Long Does the Ride Take/i, /Best Time of Day With Children/i, /Is It Suitable for Babies or Toddlers/i, /What Should Parents Ask/i, /Is the Basket Boat Worth It With Kids/i, /Combining Basket Boats With a Cooking Class/i, /Compare Basket Boat Options/i]) assert.match(guide, topic);
  assert.match(guide, /no verified universal minimum age/i);
  assert.match(guide, /around age three and above commonly participate/i);
  assert.match(guide, /<strong>not<\/strong> a universal minimum-age rule/i);
  assert.match(guide, /appropriately sized, correctly fitting life jacket/i);
  assert.match(guide, /does not require[^<]*spin/i);
  assert.match(guide, /Many local rides are around 40–50 minutes/i);
  assert.doesNotMatch(visibleHtml, /universally safe|completely safe|minimum age is 3|safest operator|viator\.com|getyourguide\.com|cocolocal|book now|limited spots/i);
  assert.equal((guide.match(/<h1\b/gi) ?? []).length, 1);
  assert.equal((visibleHtml.match(/>Compare Hoi An Basket Boat Options<\/a>/gi) ?? []).length, 1, "family guide must use one primary commercial bridge");
  for (const route of ["/basket-boat-hoi-an", "/cam-thanh-coconut-village", "/hoi-an-with-kids", "/how-many-days-in-hoi-an", "/what-to-expect-hoi-an-cooking-class", "/cooking-classes-hoi-an", "/editorial-methodology"]) assert.match(guide, new RegExp(`href="${route.replaceAll("/", "\\/")}"`, "i"));
  const images = ["images/experiences/basket-boat/family-basketboat.webp", "images/experiences/basket-boat/popular-coconut-basketboat.webp", "images/experiences/basket-boat/classic-basketboat.webp", "images/experiences/basket-boat/quieter-basketboat.webp"];
  for (const image of images) { await access(new URL(image, output)); assert.match(guide, new RegExp(`src="/${image.replaceAll("/", "\\/")}"`, "i")); }
  assert.equal((guide.match(/<img\b/gi) ?? []).length, 4);
  assert.doesNotMatch(guide, /<img\b[^>]*src="https?:\/\//i);
  for (const route of ["/hoi-an-with-kids", "/cam-thanh-coconut-village", "/basket-boat-hoi-an", "/things-to-do-in-hoi-an"]) {
    const html = await readFile(routeFile(route), "utf8");
    assert.match(html, /href="\/basket-boat-hoi-an-with-kids"/i, `${route} must link contextually to the family basket-boat guide`);
  }
});
