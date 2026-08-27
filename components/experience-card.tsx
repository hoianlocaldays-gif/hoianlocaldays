"use client";

import Image from "next/image";
import Link from "next/link";
import type { Experience } from "@/data/experiences";
import { track } from "@/lib/tracking";

export function AffiliateDisclosure() {
  return <p className="affiliate-note"><strong>Affiliate disclosure:</strong> Some links may be affiliate links. We may earn a small commission if you book through them, at no extra cost to you.</p>;
}

export function ProviderButtons({ experience, page, position }: { experience: Experience; page: string; position: string }) {
  const active = experience.providers.filter((provider) => provider.url);
  if (!active.length) return <div className="provider-pending"><span>Provider links pending verification</span><small>Viator · GetYourGuide ready to connect</small></div>;
  return <div className="provider-buttons">{active.map((provider) => <a key={provider.key} href={provider.url!} target="_blank" rel="sponsored noopener noreferrer" onClick={() => track("affiliate_click", { experience_id: experience.id, provider: provider.key, page, position, campaign: provider.campaign })}>Check on {provider.label}</a>)}</div>;
}

export function ExperienceCard({ experience, page = "homepage", position = "card", label }: { experience: Experience; page?: string; position?: string; label?: string }) {
  return <article className="experience-card" onMouseEnter={() => track("experience_view", { experience_id: experience.id, page })}>
    <div className="card-image"><Image src={experience.image} alt={experience.imageAlt} fill sizes="(max-width: 700px) 100vw, 33vw" /></div>
    <div className="card-body">{label && <span className="pick-label">{label}</span>}<h3>{experience.name}</h3><p className="card-meta">{experience.duration === "half-day" ? "Half day" : "Full day"} · {experience.pickup}</p><p className="best-for"><strong>Best for:</strong> {experience.bestFor}</p><p className="reason"><strong>Why we picked it</strong>{experience.editorialReason}</p><div className="card-bottom"><span>{experience.priceLabel ? `From ${experience.priceLabel}` : "Price to be confirmed"}</span><Link href={`/things-to-do-in-hoi-an#${experience.id}`} onClick={() => track("experience_view", { experience_id: experience.id, page, position })}>Compare details →</Link></div><ProviderButtons experience={experience} page={page} position={position} /></div>
  </article>;
}
