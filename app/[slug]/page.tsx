import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingPage } from "@/components/landing-page";
import { CookingClassPage } from "@/components/cooking-class-page";
import { ThingsToDoHub } from "@/components/things-to-do-hub";
import { HoiAnWithKidsPage } from "@/components/hoi-an-with-kids-page";
import { BasketBoatPage } from "@/components/basket-boat-page";
import { ThreeDaysItineraryPage } from "@/components/three-days-itinerary-page";
import { EditorialMethodologyPage } from "@/components/editorial-methodology-page";
import { MySonPage } from "@/components/my-son-page";
import { CamThanhGuidePage } from "@/components/cam-thanh-guide-page";
import { HoiAnFoodGuidePage } from "@/components/hoi-an-food-guide-page";
import { HoiAnMarketGuidePage } from "@/components/hoi-an-market-guide-page";
import { CaoLauGuidePage } from "@/components/cao-lau-guide-page";
import { BanhXeoGuidePage } from "@/components/banh-xeo-guide-page";
import { getLandingPage, landingPages } from "@/data/pages";

const legal: Record<string, { title: string; body: string[] }> = {
  "affiliate-disclosure": { title: "Affiliate Disclosure", body: ["Some booking links on Hoi An Local Days may be affiliate links. If you book through one of them, Hoi An Local Days may receive a commission, normally at no extra cost to you.", "Affiliate availability or commission does not determine what we recommend. We choose and describe experiences around traveler fit, useful distinctions and honest trade-offs.", "When it better serves the traveler, we may recommend a simpler option, point out that one activity already includes another or suggest not purchasing an additional activity."] },
  "privacy-policy": { title: "Privacy Policy", body: ["Hoi An Local Days does not require a visitor account or ask for personal details simply to read our travel guides.", "We may use limited website analytics to understand how our guides are used and improve their usefulness. This may include pages visited, links followed and basic technical or device information. We do not use this information for advertising or remarketing.", "Our current site analytics do not intentionally collect names, email addresses, phone numbers, form content, custom user IDs or precise location.", "Booking providers and other external websites apply their own privacy policies when you follow a link away from Hoi An Local Days."] },
  "terms": { title: "Terms", body: ["Hoi An Local Days provides independent travel discovery and decision-support content. It is not the merchant of record for bookings made through external provider links.", "Prices and availability shown as reference information must be confirmed with the relevant provider. Booking, cancellation and refund terms are governed by the provider you choose."] },
};

const unfinishedSlugs = new Set(["food-tours-hoi-an", "day-trips-from-hoi-an", "hoi-an-airport-transfer", "where-to-stay-hoi-an"]);
const socialImage = { url: "/og.png", width: 1200, height: 630, alt: "Hoi An Local Days" };

export const dynamicParams = false;

export function generateStaticParams() {
  return [
    ...landingPages.filter((page) => !unfinishedSlugs.has(page.slug) && page.slug !== "hoi-an-itinerary").map((page) => ({ slug: page.slug })),
    ...Object.keys(legal).map((slug) => ({ slug })),
    { slug: "editorial-methodology" },
    { slug: "cam-thanh-coconut-village" },
    { slug: "hoi-an-food-guide" },
    { slug: "hoi-an-market-guide" },
    { slug: "cao-lau-hoi-an" },
    { slug: "banh-xeo-hoi-an" },
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const page = getLandingPage(slug); const legalPage = legal[slug];
  if (slug === "cooking-classes-hoi-an") {
    const title = "Best Cooking Classes in Hoi An (2026) | Hoi An Local Days";
    const description = "Compare locally selected cooking classes in Hoi An, including options for families, food lovers, couples and small groups.";
    return { title: { absolute: title }, description, alternates: { canonical: `/${slug}` }, openGraph: { title, description, url: `/${slug}`, images: [socialImage], type: "article" }, twitter: { card: "summary_large_image", title, description, images: [socialImage.url] } };
  }
  if (slug === "things-to-do-in-hoi-an") {
    const title = "Best Things to Do in Hoi An | Local Guide 2026";
    const description = "Discover the best things to do in Hoi An, from cooking classes and local food to culture, family activities, beaches and day trips.";
    return { title: { absolute: title }, description, alternates: { canonical: `/${slug}` }, openGraph: { title, description, url: `/${slug}`, images: [socialImage], type: "article" }, twitter: { card: "summary_large_image", title, description, images: [socialImage.url] } };
  }
  if (slug === "hoi-an-with-kids") {
    const title = "Hoi An With Kids: Best Family Things to Do | 2026 Guide";
    const description = "Plan a family trip to Hoi An with practical recommendations for cooking classes, basket boats, beaches, crafts, Old Town and easy family days.";
    return { title: { absolute: title }, description, alternates: { canonical: `/${slug}` }, openGraph: { title, description, url: `/${slug}`, images: [socialImage], type: "article" }, twitter: { card: "summary_large_image", title, description, images: [socialImage.url] } };
  }
  if (slug === "basket-boat-hoi-an") {
    const title = "Hoi An Basket Boat: How to Choose the Best Experience";
    const description = "Compare the main types of Hoi An basket boat experiences, from short coconut-forest rides to cooking-class and family-friendly combinations.";
    return { title: { absolute: title }, description, alternates: { canonical: `/${slug}` }, openGraph: { title, description, url: `/${slug}`, images: [socialImage], type: "article" }, twitter: { card: "summary_large_image", title, description, images: [socialImage.url] } };
  }
  if (slug === "3-days-in-hoi-an") {
    const title = "3 Days in Hoi An: A Relaxed First-Time Itinerary";
    const description = "Plan 3 days in Hoi An with a practical itinerary covering the Ancient Town, local food, cooking classes, basket boats, countryside, beaches and optional day trips.";
    return { title: { absolute: title }, description, alternates: { canonical: `/${slug}` }, openGraph: { title, description, url: `/${slug}`, images: [socialImage], type: "article" }, twitter: { card: "summary_large_image", title, description, images: [socialImage.url] } };
  }
  if (slug === "my-son-tours-from-hoi-an") {
    const title = "My Son Sanctuary from Hoi An: Best Ways to Visit";
    const description = "Plan a trip to My Son Sanctuary from Hoi An. Compare morning, afternoon, group, private and independent visit styles to find what suits your trip.";
    return { title: { absolute: title }, description, alternates: { canonical: `/${slug}` }, openGraph: { title, description, url: `/${slug}`, images: [socialImage], type: "article" }, twitter: { card: "summary_large_image", title, description, images: [socialImage.url] } };
  }
  if (slug === "cam-thanh-coconut-village") {
    const title = "Cam Thanh Coconut Village Guide: Basket Boats, Costs & What to Expect";
    const description = "Plan a Cam Thanh coconut village visit with practical guidance on basket boat costs, timing, lively and quiet areas, optional extras and common mistakes.";
    return { title: { absolute: title }, description, alternates: { canonical: `/${slug}` }, openGraph: { title, description, url: `/${slug}`, images: [socialImage], type: "article" }, twitter: { card: "summary_large_image", title, description, images: [socialImage.url] } };
  }
  if (slug === "hoi-an-food-guide") {
    const title = "Hoi An Food Guide: What to Eat & Local Tips";
    const description = "Discover what to eat in Hoi An, from cao lau and chicken rice to banh xeo and Cam Nam clams, with practical market, street-food and local tips.";
    return { title: { absolute: title }, description, alternates: { canonical: `/${slug}` }, openGraph: { title, description, url: `/${slug}`, images: [socialImage], type: "article" }, twitter: { card: "summary_large_image", title, description, images: [socialImage.url] } };
  }
  if (slug === "hoi-an-market-guide") {
    const title = "Hoi An Market Guide: When to Go & What to See";
    const description = "Plan a purposeful visit to Hoi An Market: the best time to go, ingredients to notice, respectful etiquette, food-safety guidance and local tips.";
    return { title: { absolute: title }, description, alternates: { canonical: `/${slug}` }, openGraph: { title, description, url: `/${slug}`, images: [socialImage], type: "article" }, twitter: { card: "summary_large_image", title, description, images: [socialImage.url] } };
  }
  if (slug === "cao-lau-hoi-an") {
    const title = "Cao Lau in Hoi An: What It Is & How to Eat It";
    const description = "Understand Hoi An's cao lau: what is in the bowl, why the noodles are different, how to eat it, and how it compares with Mi Quang.";
    return { title: { absolute: title }, description, alternates: { canonical: `/${slug}` }, openGraph: { title, description, url: `/${slug}`, images: [socialImage], type: "article" }, twitter: { card: "summary_large_image", title, description, images: [socialImage.url] } };
  }
  if (slug === "banh-xeo-hoi-an") {
    const title = "Banh Xeo in Hoi An: What It Is & How to Eat It";
    const description = "Understand Hoi An-style banh xeo: what is in the pancake, how to wrap and eat it, sauce variations, regional differences and dietary notes.";
    return { title: { absolute: title }, description, alternates: { canonical: `/${slug}` }, openGraph: { title, description, url: `/${slug}`, images: [socialImage], type: "article" }, twitter: { card: "summary_large_image", title, description, images: [socialImage.url] } };
  }
  if (slug === "editorial-methodology") {
    const title = "How Hoi An Local Days Chooses What to Recommend";
    const description = "Learn how Hoi An Local Days evaluates experiences, traveler fit, local context, provider options, verification and affiliate independence.";
    return { title: { absolute: title }, description, alternates: { canonical: `/${slug}` }, openGraph: { title, description, url: `/${slug}`, images: [socialImage], type: "article" }, twitter: { card: "summary_large_image", title, description, images: [socialImage.url] } };
  }
  if (page) return { title: `${page.title} | Hoi An Local Days`, description: page.description, alternates: { canonical: `/${slug}` }, robots: unfinishedSlugs.has(slug) ? { index: false, follow: false } : undefined, openGraph: { title: page.title, description: page.description, url: `/${slug}`, images: [socialImage], type: "article" }, twitter: { card: "summary_large_image", title: page.title, description: page.description, images: [socialImage.url] } };
  if (legalPage) {
    const title = `${legalPage.title} | Hoi An Local Days`;
    const description = `${legalPage.title} for Hoi An Local Days.`;
    return { title, description, alternates: { canonical: `/${slug}` }, openGraph: { title, description, url: `/${slug}`, images: [socialImage], type: "website" }, twitter: { card: "summary_large_image", title, description, images: [socialImage.url] } };
  }
  return {};
}

export default async function SlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const page = getLandingPage(slug);
  if (slug === "cooking-classes-hoi-an") return <CookingClassPage />;
  if (slug === "things-to-do-in-hoi-an") return <ThingsToDoHub />;
  if (slug === "hoi-an-with-kids") return <HoiAnWithKidsPage />;
  if (slug === "basket-boat-hoi-an") return <BasketBoatPage />;
  if (slug === "3-days-in-hoi-an") return <ThreeDaysItineraryPage />;
  if (slug === "my-son-tours-from-hoi-an") return <MySonPage />;
  if (slug === "cam-thanh-coconut-village") return <CamThanhGuidePage />;
  if (slug === "hoi-an-food-guide") return <HoiAnFoodGuidePage />;
  if (slug === "hoi-an-market-guide") return <HoiAnMarketGuidePage />;
  if (slug === "cao-lau-hoi-an") return <CaoLauGuidePage />;
  if (slug === "banh-xeo-hoi-an") return <BanhXeoGuidePage />;
  if (slug === "editorial-methodology") return <EditorialMethodologyPage />;
  if (page) return <LandingPage page={page} />;
  const legalPage = legal[slug]; if (!legalPage) notFound();
  return <main className="legal-page section"><p className="eyebrow">Hoi An Local Days</p><h1>{legalPage.title}</h1>{legalPage.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</main>;
}
