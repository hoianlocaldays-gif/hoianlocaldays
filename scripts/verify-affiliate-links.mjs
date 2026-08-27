import { readFileSync } from "node:fs";

const sources = ["../data/cooking-classes.ts", "../data/basket-boat.ts", "../data/my-son.ts"].map((path) => readFileSync(new URL(path, import.meta.url), "utf8"));
const viatorCampaigns = new Map([
  ["141961P1", "hal-cooking-141961"],
  ["424184P4", "hal-cooking-cocolocal"],
  ["221841P24", "hal-cooking-221841"],
  ["164857P1", "hal-cooking-164857"],
  ["201338P1", "hal-cooking-201338"],
  ["349311P2", "hal-basketboat-overall-viator"],
  ["201338P2", "hal-basketboat-family-viator"],
  ["375749P1", "hal-myson-overall-viator"],
  ["212568P6", "hal-myson-private-viator"],
  ["20353P5", "hal-myson-bike-viator"],
]);
const getYourGuideCampaigns = new Map([
  ["1061073", "hal-cooking-cocolocal-gyg"],
  ["568322", "hal-cooking-organicfarm-gyg"],
  ["540267", "hal-cooking-lantern-gyg"],
  ["624499", "hal-basketboat-popular-gyg"],
  ["886005", "hal-basketboat-quiet-gyg"],
  ["543538", "hal-basketboat-short-gyg"],
  ["514776", "hal-myson-early-gyg"],
  ["519118", "hal-myson-adventure-gyg"],
]);
const urls = sources.flatMap((source) => [...source.matchAll(/url: "(https:\/\/[^\"]+)"/g)].map((match) => match[1]));

if (urls.length !== 18) throw new Error(`Expected 18 supplied affiliate URLs, found ${urls.length}.`);
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

console.log("Verified 10 Viator and 8 GetYourGuide affiliate URLs across Cooking Classes, Basket Boats and My Son.");
