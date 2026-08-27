import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingPage } from "@/components/landing-page";
import { CookingClassPage } from "@/components/cooking-class-page";
import { ThingsToDoHub } from "@/components/things-to-do-hub";
import { HoiAnWithKidsPage } from "@/components/hoi-an-with-kids-page";
import { BasketBoatPage } from "@/components/basket-boat-page";
import { getLandingPage, landingPages } from "@/data/pages";

const legal: Record<string, { title: string; body: string[] }> = {
  "affiliate-disclosure": { title: "Affiliate Disclosure", body: ["Some links on Hoi An Local Days may be affiliate links. If you book through one of these links, we may earn a small commission at no extra cost to you.", "Affiliate relationships do not guarantee placement. We aim to explain why an experience is included and who it suits. Provider prices, availability and terms can change; always review them on the booking provider’s website."] },
  "privacy-policy": { title: "Privacy Policy", body: ["This first version does not require an account and does not store Plan My Day answers on a server.", "When analytics is enabled later, this policy must be updated with the service names, data collected, retention periods and opt-out choices. External booking providers apply their own privacy policies."] },
  "terms": { title: "Terms", body: ["Hoi An Local Days provides independent travel discovery and decision-support content. It is not currently the merchant of record for affiliate bookings.", "Prices and availability shown as reference information must be confirmed with the relevant provider. Booking, cancellation and refund terms are governed by the provider you choose."] },
};

export function generateStaticParams() { return [...landingPages.map((page) => ({ slug: page.slug })), ...Object.keys(legal).map((slug) => ({ slug }))]; }

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
  if (page) return { title: `${page.title} | Hoi An Local Days`, description: page.description, alternates: { canonical: `/${slug}` }, openGraph: { title: page.title, description: page.description, url: `/${slug}`, type: "article" }, twitter: { card: "summary_large_image", title: page.title, description: page.description } };
  if (legalPage) return { title: `${legalPage.title} | Hoi An Local Days`, alternates: { canonical: `/${slug}` } };
  return {};
}

export default async function SlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const page = getLandingPage(slug);
  if (slug === "cooking-classes-hoi-an") return <CookingClassPage />;
  if (slug === "things-to-do-in-hoi-an") return <ThingsToDoHub />;
  if (slug === "hoi-an-with-kids") return <HoiAnWithKidsPage />;
  if (slug === "basket-boat-hoi-an") return <BasketBoatPage />;
  if (page) return <LandingPage page={page} />;
  const legalPage = legal[slug]; if (!legalPage) notFound();
  return <main className="legal-page section"><p className="eyebrow">Hoi An Local Days</p><h1>{legalPage.title}</h1>{legalPage.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</main>;
}
