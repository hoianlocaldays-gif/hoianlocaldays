import { readFileSync } from "node:fs";

const source = readFileSync(new URL("../data/cooking-classes.ts", import.meta.url), "utf8");
const expectedCampaigns = new Map([
  ["141961P1", "hal-cooking-141961"],
  ["424184P4", "hal-cooking-cocolocal"],
  ["221841P24", "hal-cooking-221841"],
  ["164857P1", "hal-cooking-164857"],
  ["201338P1", "hal-cooking-201338"],
]);
const urls = [...source.matchAll(/affiliateUrl: "([^"]+)"/g)].map((match) => match[1]);

if (urls.length !== expectedCampaigns.size) throw new Error(`Expected 5 Viator affiliate URLs, found ${urls.length}.`);
for (const href of urls) {
  const url = new URL(href);
  const productId = [...expectedCampaigns.keys()].find((id) => url.pathname.includes(id));
  if (!productId) throw new Error(`Unknown Viator product URL: ${href}`);
  const required = { pid: "P00316970", mcid: "42383", medium: "link", campaign: expectedCampaigns.get(productId) };
  for (const [key, value] of Object.entries(required)) {
    if (url.searchParams.get(key) !== value) throw new Error(`${productId}: invalid or missing ${key}.`);
  }
}

console.log("Verified 5 Viator affiliate URLs and campaign parameters.");
