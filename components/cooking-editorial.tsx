import Link from "next/link";
import { AffiliateCTA } from "./affiliate-cta";
import type { CookingExperience, CookingProvider } from "@/data/cooking-classes";

const defaultPage = "cooking-classes-hoi-an";
const providerName = { viator: "Viator", getyourguide: "GetYourGuide" } as const;

export function WhyWePickedIt({ children }: { children: string }) {
  return <div className="editorial-field"><dt>Why we picked it</dt><dd>{children}</dd></div>;
}

export function BestFor({ items }: { items: string[] }) {
  return <div className="editorial-field"><dt>Best for</dt><dd>{items.join(" · ")}</dd></div>;
}

export function NotIdealFor({ children }: { children: string }) {
  return <div className="editorial-field"><dt>Not ideal for</dt><dd>{children}</dd></div>;
}

export function LastVerified({ date }: { date: string }) {
  const formatted = new Intl.DateTimeFormat("en", { month: "short", year: "numeric", timeZone: "UTC" }).format(new Date(`${date}T00:00:00Z`));
  return <small className="last-verified">Affiliate link checked {formatted}</small>;
}

export function ProviderButtons({ experience, position, page = defaultPage }: { experience: Pick<CookingExperience, "id" | "providers">; position: string; page?: string }) {
  const providers = Object.values(experience.providers).filter((provider): provider is CookingProvider => Boolean(provider?.enabled));
  if (providers.length === 1) {
    const provider = providers[0];
    return <div className="provider-action"><AffiliateCTA experienceId={experience.id} provider={provider.provider} providerProductId={provider.productId} campaign={provider.campaign} page={page} position={position} href={provider.url} /><small>via {providerName[provider.provider]}</small></div>;
  }
  return <div className="provider-action provider-action-multiple"><strong>Check Availability</strong><div>{providers.map((provider) => <AffiliateCTA key={provider.provider} experienceId={experience.id} provider={provider.provider} providerProductId={provider.productId} campaign={provider.campaign} page={page} position={position} href={provider.url} label={providerName[provider.provider]} />)}</div></div>;
}

export function QuickPicks({ experiences, page = defaultPage }: { experiences: CookingExperience[]; page?: string }) {
  return <div className="cooking-quick-grid">{experiences.map((experience, index) => <article className="cooking-card cooking-card-quick" key={experience.id}><span className="pick-label">{experience.editorial.label}</span><h3>{experience.name}</h3><p>{experience.editorial.positioning}</p><dl className="cooking-facts"><BestFor items={experience.editorial.bestFor.slice(0, 2)} /></dl><ProviderButtons experience={experience} position={`quick_pick_${index + 1}`} page={page} /></article>)}</div>;
}

export function CookingComparisonCard({ experience, position, page = defaultPage }: { experience: CookingExperience; position: string; page?: string }) {
  return <article className="editorial-comparison-card"><div className="comparison-title"><span className="pick-label">{experience.editorial.label}</span><h3>{experience.name}</h3><p>{experience.editorial.positioning}</p></div><div className="comparison-editorial"><dl><BestFor items={experience.editorial.bestFor} /></dl><details><summary>Editorial notes</summary><dl><WhyWePickedIt>{experience.editorial.whyWePickedIt}</WhyWePickedIt><NotIdealFor>{experience.editorial.notIdealFor}</NotIdealFor></dl></details></div><div className="comparison-action"><ProviderButtons experience={experience} position={position} page={page} /><LastVerified date={experience.lastVerified} /></div></article>;
}

export function RelatedGuides() {
  return <section className="section cooking-next"><p className="eyebrow">Planning the rest of your stay?</p><h2>Keep Planning Your Hoi An Trip</h2><div><Link href="/3-days-in-hoi-an">3-Day Itinerary <span>→</span></Link><Link href="/basket-boat-hoi-an">Choosing a Basket Boat <span>→</span></Link><Link href="/hoi-an-with-kids">Hoi An With Kids <span>→</span></Link></div></section>;
}
