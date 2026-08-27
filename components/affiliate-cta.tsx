"use client";

import type { ProviderKey } from "@/data/experiences";
import { track } from "@/lib/tracking";

type AffiliateCTAProps = { experienceId: string; provider: ProviderKey; providerProductId: string; campaign: string; page: string; position: string; href: string; label?: string };

export function AffiliateCTA({ experienceId, provider, providerProductId, campaign, page, position, href, label = "Check Availability" }: AffiliateCTAProps) {
  return <a className="affiliate-cta" href={href} target="_blank" rel="sponsored noopener noreferrer" onClick={() => track("affiliate_click", { experience_id: experienceId, provider, provider_product_id: providerProductId, campaign, page, position })}>{label}<span aria-hidden="true">↗</span></a>;
}
