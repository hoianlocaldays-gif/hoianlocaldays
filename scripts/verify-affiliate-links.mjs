import { readFileSync } from "node:fs";

const source = readFileSync(new URL("../data/cooking-classes.ts", import.meta.url), "utf8");
const viatorCampaigns = new Map([
  ["141961P1", "hal-cooking-141961"],
  ["424184P4", "hal-cooking-cocolocal"],
  ["221841P24", "hal-cooking-221841"],
  ["164857P1", "hal-cooking-164857"],
  ["201338P1", "hal-cooking-201338"],
]);
const getYourGuideCampaigns = new Map([
  ["1061073", "hal-cooking-cocolocal-gyg"],
  ["568322", "hal-cooking-organicfarm-gyg"],
  ["540267", "hal-cooking-lantern-gyg"],
]);
const urls = [...source.matchAll(/url: "(https:\/\/[^\"]+)"/g)].map((match) => match[1]);

if (urls.length !== 8) throw new Error(`Expected 8 supplied affiliate URLs, found ${urls.length}.`);
for (const href of urls) {
  const url = new URL(href);
  if (url.hostname === "www.viator.com") {
    const productId = [...viatorCampaigns.keys()].find((id) => url.pathname.includes(id));
    if (!productId) throw new Error(`Unknown Viator product URL: ${href}`);
    const required = { pid: "P00316970", mcid: "42383", medium: "link", campaign: viatorCampaigns.get(productId) };
    for (const [key, value] of Object.entries(required)) if (url.searchParams.get(key) !== value) throw new Error(`${productId}: invalid or missing ${key}.`);
    continue;
  }
  if (url.hostname === "www.getyourguide.com") {
    const productId = [...getYourGuideCampaigns.keys()].find((id) => url.pathname.includes(`t${id}`));
    if (!productId) throw new Error(`Unknown GetYourGuide product URL: ${href}`);
    const required = { partner_id: "QJ5SJBN", utm_medium: "online_publisher", cmp: getYourGuideCampaigns.get(productId) };
    for (const [key, value] of Object.entries(required)) if (url.searchParams.get(key) !== value) throw new Error(`${productId}: invalid or missing ${key}.`);
    continue;
  }
  throw new Error(`Unauthorized affiliate hostname: ${url.hostname}`);
}

console.log("Verified 5 Viator and 3 GetYourGuide affiliate URLs.");
