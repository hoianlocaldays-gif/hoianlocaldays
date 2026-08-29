import type { MetadataRoute } from "next";

const siteUrl = "https://hoianlocaldays.com";

export const dynamic = "force-static";

const launchRoutes = [
  "",
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

export default function sitemap(): MetadataRoute.Sitemap {
  return launchRoutes.map((route) => ({ url: `${siteUrl}${route}` }));
}
