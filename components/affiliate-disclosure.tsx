import Link from "next/link";

export function AffiliateDisclosure({ compact = false }: { compact?: boolean }) {
  return <p className={compact ? "affiliate-note affiliate-note-compact" : "affiliate-note"}><strong>Affiliate disclosure:</strong> Some links on this page are affiliate links. We may earn a commission if you book through them, at no extra cost to you. {!compact && <Link href="/affiliate-disclosure">Learn more</Link>}</p>;
}
