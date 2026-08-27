import Link from "next/link";
import { TrackedLink } from "./tracked-link";
import { AffiliateCTA } from "./affiliate-cta";
import type { CookingExperience, CookingProvider } from "@/data/cooking-classes";

const defaultPage = "cooking-classes-hoi-an";
const providerName = { viator: "Viator", getyourguide: "GetYourGuide" } as const;

export function ExperienceImage({ experience, priority = false }: { experience: Pick<CookingExperience, "image">; priority?: boolean }) {
  if (!experience.image) return null;
  return <div className="experience-card-image"><img src={experience.image.src} alt={experience.image.alt} width="1200" height="800" loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : "auto"} decoding="async" /></div>;
}

export function WhyWePickedIt({ children }: { children: string }) {
  return <div className="editorial-field"><dt>Why we picked it</dt><dd>{children}</dd></div>;
}

export function BestFor({ items }: { items: string[] }) {
  return <div className="editorial-field"><dt>Best for</dt><dd>{items.join(" · ")}</dd></div>;
}

export function NotIdealFor({ children }: { children: string }) {
  return <div className="editorial-field"><dt>Not ideal for</dt><dd>{children}</dd></div>;
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
  return <div className="cooking-quick-grid">{experiences.map((experience, index) => <article className="cooking-card cooking-card-quick" key={experience.id}><ExperienceImage experience={experience} priority={index === 0} /><div className="experience-card-content"><span className="pick-label">{experience.editorial.label}</span><h3>{experience.name}</h3><p>{experience.editorial.positioning}</p><dl className="cooking-facts"><BestFor items={experience.editorial.bestFor.slice(0, 2)} /><WhyWePickedIt>{experience.editorial.whyWePickedIt}</WhyWePickedIt><NotIdealFor>{experience.editorial.notIdealFor}</NotIdealFor></dl><ProviderButtons experience={experience} position={`quick_pick_${index + 1}`} page={page} /></div></article>)}</div>;
}

export function CookingComparisonCard({ experience, position, page = defaultPage }: { experience: CookingExperience; position: string; page?: string }) {
  return <article className="editorial-comparison-card"><ExperienceImage experience={experience} /><div className="comparison-title"><span className="pick-label">{experience.editorial.label}</span><h3>{experience.name}</h3><p>{experience.editorial.positioning}</p></div><div className="comparison-editorial"><dl><BestFor items={experience.editorial.bestFor} /></dl><details><summary>Editorial notes</summary><dl><WhyWePickedIt>{experience.editorial.whyWePickedIt}</WhyWePickedIt><NotIdealFor>{experience.editorial.notIdealFor}</NotIdealFor></dl></details></div><div className="comparison-action"><ProviderButtons experience={experience} position={position} page={page} /></div></article>;
}

export function RelatedGuides() {
  return <section className="section cooking-next"><p className="eyebrow">Planning the rest of your stay?</p><h2>Keep Planning Your Hoi An Trip</h2><div><Link href="/3-days-in-hoi-an">3-Day Itinerary <span>→</span></Link><TrackedLink href="/basket-boat-hoi-an" sourcePage="cooking-classes-hoi-an" destinationPage="/basket-boat-hoi-an" section="related_guides" ctaId="cooking_basket_boat">Choosing a Basket Boat <span>→</span></TrackedLink><Link href="/hoi-an-with-kids">Hoi An With Kids <span>→</span></Link></div></section>;
}
