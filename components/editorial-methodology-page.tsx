import Link from "next/link";
import { AffiliateDisclosure } from "./affiliate-disclosure";
import { EditorSignal } from "./editor-signal";
import { breadcrumbJsonLd } from "@/lib/jsonld";

const principles = [
  { title: "Experience First", body: "We evaluate the underlying experience before deciding where travelers can book it. A provider listing is a booking option, not a separate recommendation by default." },
  { title: "Traveler Fit", body: "Recommendations consider who an experience suits, what kind of trip it fits and who may prefer a different option. This is why our comparisons include both Best for and Not ideal for guidance." },
  { title: "Local Context", body: "We consider practical Hoi An context such as heat, pacing, travel time, family suitability, activity combinations and whether two bookings may duplicate the same experience." },
  { title: "Provider Comparison", body: "The same underlying experience may appear on more than one booking platform. Where the evidence supports a match, we represent it as one Hoi An Local Days experience with multiple provider options." },
];

export function EditorialMethodologyPage() {
  const breadcrumb = breadcrumbJsonLd([{ name: "Home", url: "https://hoianlocaldays.com" }, { name: "Editorial Methodology", url: "https://hoianlocaldays.com/editorial-methodology" }]);
  return <main className="methodology-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    <div className="breadcrumb"><Link href="/">Home</Link><span>›</span><span>Editorial Methodology</span></div>
    <section className="methodology-hero section"><p className="eyebrow">Our editorial approach</p><h1>How Hoi An Local Days Chooses What to Recommend</h1><p>Our role is to help travelers make a better Hoi An decision first, then show where an experience can be booked when that is genuinely useful.</p><EditorSignal /></section>
    <section className="methodology-principles section">{principles.map((principle, index) => <article key={principle.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h2>{principle.title}</h2><p>{principle.body}</p></div></article>)}</section>
    <section className="methodology-verification section"><div><p className="eyebrow">Value before booking</p><h2>A Useful Answer Can Be “Choose Less”</h2></div><div><p>We distinguish between information checked against current provider listings, our editorial analysis of traveler fit and trade-offs, patterns observed in traveler feedback when used, and firsthand or local knowledge where it is genuinely available.</p><p>A recommendation should still help if no booking follows. That may mean suggesting a simpler format, protecting time to rest or pointing out that one activity already includes another.</p><p>We do not imply that every listed experience has been personally tested.</p></div></section>
    <section className="methodology-affiliate section"><div><p className="eyebrow">Commercial transparency</p><h2>Affiliate Independence</h2></div><div><p>Affiliate availability or commission should not determine whether an experience is recommended or which editorial label it receives.</p><AffiliateDisclosure compact /></div></section>
  </main>;
}
