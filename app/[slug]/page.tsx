import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingPage } from "@/components/landing-page";
import { getLandingPage, landingPages } from "@/data/pages";

const legal: Record<string, { title: string; body: string[] }> = {
  "affiliate-disclosure": { title: "Affiliate Disclosure", body: ["Some links on Hoi An Local Days may be affiliate links. If you book through one of these links, we may earn a small commission at no extra cost to you.", "Affiliate relationships do not guarantee placement. We aim to explain why an experience is included and who it suits. Provider prices, availability and terms can change; always review them on the booking provider’s website."] },
  "privacy-policy": { title: "Privacy Policy", body: ["This first version does not require an account and does not store Plan My Day answers on a server.", "When analytics is enabled later, this policy must be updated with the service names, data collected, retention periods and opt-out choices. External booking providers apply their own privacy policies."] },
  "terms": { title: "Terms", body: ["Hoi An Local Days provides independent travel discovery and decision-support content. It is not currently the merchant of record for affiliate bookings.", "Prices and availability shown as reference information must be confirmed with the relevant provider. Booking, cancellation and refund terms are governed by the provider you choose."] },
};

export function generateStaticParams() { return [...landingPages.map((page) => ({ slug: page.slug })), ...Object.keys(legal).map((slug) => ({ slug }))]; }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const page = getLandingPage(slug); const legalPage = legal[slug];
  if (page) return { title: `${page.title} | Hoi An Local Days`, description: page.description, alternates: { canonical: `/${slug}` }, openGraph: { title: page.title, description: page.description, url: `/${slug}`, type: "article" }, twitter: { card: "summary_large_image", title: page.title, description: page.description } };
  if (legalPage) return { title: `${legalPage.title} | Hoi An Local Days`, alternates: { canonical: `/${slug}` } };
  return {};
}

export default async function SlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const page = getLandingPage(slug);
  if (page) return <LandingPage page={page} />;
  const legalPage = legal[slug]; if (!legalPage) notFound();
  return <main className="legal-page section"><p className="eyebrow">Hoi An Local Days</p><h1>{legalPage.title}</h1>{legalPage.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</main>;
}
