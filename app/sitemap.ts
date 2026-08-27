import type { MetadataRoute } from "next";

const siteUrl = "https://hoianlocaldays.com";

export const dynamic = "force-static";

const launchRoutes = [
  "",
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

export default function sitemap(): MetadataRoute.Sitemap {
  return launchRoutes.map((route) => ({ url: `${siteUrl}${route}` }));
}
