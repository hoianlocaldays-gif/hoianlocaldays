import Link from "next/link";
import { experiences } from "@/data/experiences";
import { ExperienceCard } from "@/components/experience-card";
import { PlanMyDay } from "@/components/plan-my-day";
import { organizationJsonLd, websiteJsonLd } from "@/lib/jsonld";

const categories = [
  { name: "Cooking Classes", href: "/cooking-classes-hoi-an", note: "Verified options coming soon" },
  { name: "Basket Boat", href: "/basket-boat-hoi-an", note: "Verified options coming soon" },
  { name: "Food Tours", href: "/food-tours-hoi-an", note: "Verified options coming soon" },
  { name: "My Son", href: "/my-son-tours-from-hoi-an", note: "Verified options coming soon" },
  { name: "Family Activities", href: "/hoi-an-with-kids", note: "Verified options coming soon" },
  { name: "Day Trips", href: "/day-trips-from-hoi-an", note: "Verified options coming soon" },
];

const audiences = [
  ["Couples", "Unhurried food, craft and culture", "couple"], ["Families", "Practical activities that hold attention", "family"], ["Food lovers", "Markets, tastings and cooking", "food"], ["Culture", "Old towns, temples and local context", "culture"], ["Adventure", "Islands, cycling and mountain days", "adventure"], ["Relaxation", "Gardens, beach time and slower stays", "relaxation"],
];

export default function Home() {
  const picks = [experiences[0], experiences[1], experiences[2]];
  return <main><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([websiteJsonLd, organizationJsonLd]) }} />
    <section className="home-hero section"><div className="hero-copy"><p className="eyebrow">Curated in Hoi An · Built for real decisions</p><h1>Discover the best of Hoi An — <em>like a local.</em></h1><p>Curated local experiences, activities and places selected for travellers who want more than the usual tourist checklist.</p><div className="hero-actions"><Link className="primary-button" href="#popular">Explore experiences</Link><Link className="secondary-button" href="#plan">Plan my Hoi An day</Link></div><div className="trust-inline"><span>Locally curated</span><span>Independent recommendations</span><span>Verified partners only</span></div></div><div className="hero-editorial"><div className="hero-architecture" aria-hidden="true"><span className="arch-one"/><span className="arch-two"/><span className="craft-line line-one"/><span className="craft-line line-two"/><b>HỘI AN</b></div><div className="editorial-card"><span>A clean foundation</span><strong>Real recommendations will appear only after verification.</strong><Link href="#find">Explore categories →</Link></div></div></section>
    <section className="popular section" id="popular"><div className="section-heading"><p className="eyebrow">Popular experiences</p><h2>Start with what sounds good</h2><p>Clear categories, useful comparisons and no endless tour inventory.</p></div><div className="category-grid">{categories.map((item, index) => <Link href={item.href} className="category-card" key={item.name}><span>{String(index + 1).padStart(2, "0")}</span><h3>{item.name}</h3><p>{item.note}</p><b>Explore →</b></Link>)}</div></section>
    <section className="find-section section" id="find"><div className="section-heading inverse"><p className="eyebrow">Find your experience</p><h2>Choose by who you are, not by a huge list</h2></div><div className="audience-grid">{audiences.map(([name, note, id]) => <Link key={name} href={id === "family" ? "/hoi-an-with-kids" : `/#plan`}><span>{name}</span><small>{note}</small><b>→</b></Link>)}</div></section>
    <section className="local-picks section"><div className="section-heading"><p className="eyebrow">Local picks</p><h2>Categories ready for verified picks</h2><p>No product is currently ranked. These modules will activate when real provider data is supplied.</p></div><div className="experience-grid">{picks.map((item) => <ExperienceCard key={item.id} experience={item} position="category-preview" label="Partner data pending" />)}</div></section>
    <section className="trust-section section"><div><p className="eyebrow">Why trust Hoi An Local Days?</p><h2>A local filter, not another booking warehouse.</h2></div><div className="trust-grid"><article><span>01</span><h3>Locally curated</h3><p>We organise choices around how people actually spend a Hoi An day.</p></article><article><span>02</span><h3>Independent reasons</h3><p>Every featured experience includes why we picked it and who it suits.</p></article><article><span>03</span><h3>No invented trust</h3><p>No fake ratings, reviews, awards or booking counters.</p></article><article><span>04</span><h3>Easy partner booking</h3><p>Verified affiliate and direct-partner links will sit behind one clear data layer.</p></article></div></section>
    <PlanMyDay />
    <section className="guides section" id="guides"><div className="section-heading"><p className="eyebrow">Hoi An guides</p><h2>Useful before you book</h2></div><div className="guide-grid"><Link href="/hoi-an-itinerary"><span>Planning</span><h3>A flexible Hoi An itinerary</h3><p>What to group together—and what to leave for another day.</p></Link><Link href="/where-to-stay-hoi-an"><span>Stay</span><h3>Where to stay in Hoi An</h3><p>Ancient Town, beach or countryside?</p></Link><Link href="/hoi-an-airport-transfer"><span>Arrival</span><h3>Airport transfer guide</h3><p>The practical information to check before landing.</p></Link></div></section>
  </main>;
}
