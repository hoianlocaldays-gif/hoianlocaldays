"use client";

import Link, { type LinkProps } from "next/link";
import type { ReactNode } from "react";
import { track } from "@/lib/tracking";

type TrackedLinkProps = LinkProps & {
  children: ReactNode;
  className?: string;
  sourcePage: string;
  destinationPage: string;
  section: string;
  ctaId: string;
};

export function TrackedLink({ children, className, sourcePage, destinationPage, section, ctaId, ...linkProps }: TrackedLinkProps) {
  return <Link {...linkProps} className={className} onClick={() => track("internal_cta_click", { source_page: sourcePage, destination_page: destinationPage, section, cta_id: ctaId })}>{children}</Link>;
}
