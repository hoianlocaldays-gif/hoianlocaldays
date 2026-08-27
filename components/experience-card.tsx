"use client";

import Link from "next/link";
import type { Experience } from "@/data/experiences";
import { track } from "@/lib/tracking";

export function ProviderButtons({ experience, page, position }: { experience: Experience; page: string; position: string }) {
  const active = experience.providers.filter((provider) => provider.url);
  if (!active.length) return <div className="provider-pending"><span>Provider links pending verification</span><small>Viator · GetYourGuide ready to connect</small></div>;
  return <div className="provider-buttons">{active.map((provider) => <a key={provider.key} href={provider.url!} target="_blank" rel="sponsored noopener noreferrer" onClick={() => track("affiliate_click", { experience_id: experience.id, provider: provider.key, page, position, campaign: provider.campaign })}>Check on {provider.label}</a>)}</div>;
}

export function ExperienceCard({ experience, page = "homepage", position = "card", label }: { experience: Experience; page?: string; position?: string; label?: string }) {
  return <article className="experience-card" onMouseEnter={() => track("experience_view", { experience_id: experience.id, page })}>
    <div className={`card-image category-art category-art-${experience.category}`} aria-hidden="true"><span>{experience.category.replace("-", " ")}</span></div>
    <div className="card-body">{label && <span className="pick-label">{label}</span>}<h3>{experience.name}</h3><p className="card-meta">Product details pending verification</p><p className="best-for"><strong>Best for:</strong> {experience.bestFor}</p><p className="reason"><strong>What this page will compare</strong>{experience.editorialReason}</p><div className="card-bottom"><span>No price published</span><Link href={`/things-to-do-in-hoi-an#${experience.id}`} onClick={() => track("experience_view", { experience_id: experience.id, page, position })}>View category →</Link></div><ProviderButtons experience={experience} page={page} position={position} /></div>
  </article>;
}
