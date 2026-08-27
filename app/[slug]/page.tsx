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
import { getLandingPage, landingPages } from "@/data/pages";

const legal: Record<string, { title: string; body: string[] }> = {
  "affiliate-disclosure": { title: "Affiliate Disclosure", body: ["Some links on Hoi An Local Days may be affiliate links. If you book through one of these links, we may earn a small commission at no extra cost to you.", "Affiliate relationships do not guarantee placement. We aim to explain why an experience is included and who it suits. Provider prices, availability and terms can change; always review them on the booking provider’s website."] },
  "privacy-policy": { title: "Privacy Policy", body: ["Hoi An Local Days does not require a visitor account. Our current analytics events do not ask for names, email addresses, phone numbers, form content, custom user IDs or precise location.", "When website analytics is enabled, we use Google Analytics 4 to understand pages viewed, meaningful navigation between our guides, affiliate-link clicks and basic technical or device information supplied by the analytics service. We configure GA4 without automatic page views, Google signals or ad-personalization signals, and we do not use this setup for advertising or remarketing.", "Analytics configuration and visitor consent are separate matters. The current site does not include a consent-management platform; applicable consent and opt-out requirements should be reviewed before analytics is enabled for production visitors.", "Booking providers and other external websites apply their own privacy policies when you follow a link away from Hoi An Local Days."] },
  "terms": { title: "Terms", body: ["Hoi An Local Days provides independent travel discovery and decision-support content. It is not currently the merchant of record for affiliate bookings.", "Prices and availability shown as reference information must be confirmed with the relevant provider. Booking, cancellation and refund terms are governed by the provider you choose."] },
};

const unfinishedSlugs = new Set(["food-tours-hoi-an", "day-trips-from-hoi-an", "hoi-an-airport-transfer", "where-to-stay-hoi-an"]);

export const dynamicParams = false;

export function generateStaticParams() {
  return [
    ...landingPages.filter((page) => !unfinishedSlugs.has(page.slug) && page.slug !== "hoi-an-itinerary").map((page) => ({ slug: page.slug })),
    ...Object.keys(legal).map((slug) => ({ slug })),
    { slug: "editorial-methodology" },
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const page = getLandingPage(slug); const legalPage = legal[slug];
  if (slug === "cooking-classes-hoi-an") {
    const title = "Best Cooking Classes in Hoi An (2026) | Hoi An Local Days";
    const description = "Compare locally selected cooking classes in Hoi An, including options for families, food lovers, couples and small groups.";
    return { title: { absolute: title }, description, alternates: { canonical: `/${slug}` }, openGraph: { title, description, url: `/${slug}`, type: "article" }, twitter: { card: "summary_large_image", title, description } };
  }
  if (slug === "things-to-do-in-hoi-an") {
    const title = "Best Things to Do in Hoi An | Local Guide 2026";
    const description = "Discover the best things to do in Hoi An, from cooking classes and local food to culture, family activities, beaches and day trips.";
    return { title: { absolute: title }, description, alternates: { canonical: `/${slug}` }, openGraph: { title, description, url: `/${slug}`, type: "article" }, twitter: { card: "summary_large_image", title, description } };
  }
  if (slug === "hoi-an-with-kids") {
    const title = "Hoi An With Kids: Best Family Things to Do | 2026 Guide";
    const description = "Plan a family trip to Hoi An with practical recommendations for cooking classes, basket boats, beaches, crafts, Old Town and easy family days.";
    return { title: { absolute: title }, description, alternates: { canonical: `/${slug}` }, openGraph: { title, description, url: `/${slug}`, type: "article" }, twitter: { card: "summary_large_image", title, description } };
  }
  if (slug === "basket-boat-hoi-an") {
    const title = "Hoi An Basket Boat: How to Choose the Best Experience";
    const description = "Compare the main types of Hoi An basket boat experiences, from short coconut-forest rides to cooking-class and family-friendly combinations.";
    return { title: { absolute: title }, description, alternates: { canonical: `/${slug}` }, openGraph: { title, description, url: `/${slug}`, type: "article" }, twitter: { card: "summary_large_image", title, description } };
  }
  if (slug === "3-days-in-hoi-an") {
    const title = "3 Days in Hoi An: A Relaxed First-Time Itinerary";
    const description = "Plan 3 days in Hoi An with a practical itinerary covering the Ancient Town, local food, cooking classes, basket boats, countryside, beaches and optional day trips.";
    return { title: { absolute: title }, description, alternates: { canonical: `/${slug}` }, openGraph: { title, description, url: `/${slug}`, type: "article" }, twitter: { card: "summary_large_image", title, description } };
  }
  if (slug === "my-son-tours-from-hoi-an") {
    const title = "My Son Sanctuary from Hoi An: Best Ways to Visit";
    const description = "Plan a trip to My Son Sanctuary from Hoi An. Compare morning, afternoon, group, private and independent visit styles to find what suits your trip.";
    return { title: { absolute: title }, description, alternates: { canonical: `/${slug}` }, openGraph: { title, description, url: `/${slug}`, type: "article" }, twitter: { card: "summary_large_image", title, description } };
  }
  if (slug === "editorial-methodology") {
    const title = "How Hoi An Local Days Chooses What to Recommend";
    const description = "Learn how Hoi An Local Days evaluates experiences, traveler fit, local context, provider options, verification and affiliate independence.";
    return { title: { absolute: title }, description, alternates: { canonical: `/${slug}` }, openGraph: { title, description, url: `/${slug}`, type: "article" }, twitter: { card: "summary_large_image", title, description } };
  }
  if (page) return { title: `${page.title} | Hoi An Local Days`, description: page.description, alternates: { canonical: `/${slug}` }, robots: unfinishedSlugs.has(slug) ? { index: false, follow: false } : undefined, openGraph: { title: page.title, description: page.description, url: `/${slug}`, type: "article" }, twitter: { card: "summary_large_image", title: page.title, description: page.description } };
  if (legalPage) return { title: `${legalPage.title} | Hoi An Local Days`, alternates: { canonical: `/${slug}` } };
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
  if (slug === "editorial-methodology") return <EditorialMethodologyPage />;
  if (page) return <LandingPage page={page} />;
  const legalPage = legal[slug]; if (!legalPage) notFound();
  return <main className="legal-page section"><p className="eyebrow">Hoi An Local Days</p><h1>{legalPage.title}</h1>{legalPage.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</main>;
}
