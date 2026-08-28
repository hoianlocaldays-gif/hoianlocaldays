import Link from "next/link";

export function AffiliateDisclosure({ compact = false }: { compact?: boolean }) {
  return <p className={compact ? "affiliate-note affiliate-note-compact" : "affiliate-note"}><strong>Disclosure:</strong> Some booking links may earn Hoi An Local Days a commission at no extra cost to you. That does not determine what we recommend. {!compact && <Link href="/affiliate-disclosure">Learn more</Link>}</p>;
}
