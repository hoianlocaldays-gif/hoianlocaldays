import Link from "next/link";
import { AffiliateDisclosure } from "./affiliate-disclosure";
import { BestFor, LastVerified, NotIdealFor, ProviderButtons, WhyWePickedIt } from "./cooking-editorial";
import { basketBoatExperiences, basketBoatMistakes, basketBoatQuickPicks, type BasketBoatExperience } from "@/data/basket-boat";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { EditorSignal } from "./editor-signal";

const page = "basket-boat-hoi-an";

function BasketQuickPicks() {
  return <div className="basket-commerce-quick">{basketBoatQuickPicks.map((experience, index) => <article className="cooking-card cooking-card-quick" key={experience.id}><span className="pick-label">{experience.editorial.label}</span><h3>{experience.name}</h3><p>{experience.editorial.shortDescription}</p><dl className="cooking-facts"><BestFor items={experience.editorial.bestFor.slice(0, 2)} /></dl><ProviderButtons experience={experience} position={`quick_pick_${index + 1}`} page={page} /></article>)}</div>;
}

function BasketComparisonCard({ experience, position }: { experience: BasketBoatExperience; position: string }) {
  return <article className="editorial-comparison-card basket-comparison-card"><div className="comparison-title"><span className="pick-label">{experience.editorial.label}</span><h3>{experience.name}</h3><p>{experience.editorial.shortDescription}</p></div><div className="comparison-editorial"><dl><BestFor items={experience.editorial.bestFor} /></dl><details><summary>Editorial notes</summary><dl><WhyWePickedIt>{experience.editorial.whyWePickedIt}</WhyWePickedIt><NotIdealFor>{experience.editorial.notIdealFor}</NotIdealFor></dl></details></div><div className="comparison-action"><ProviderButtons experience={experience} position={position} page={page} /><LastVerified date={experience.editorial.lastVerified} /></div></article>;
}

export function BasketBoatPage() {
  const breadcrumb = breadcrumbJsonLd([{ name: "Home", url: "https://hoianlocaldays.com" }, { name: "Things to Do in Hoi An", url: "https://hoianlocaldays.com/things-to-do-in-hoi-an" }, { name: "Basket Boat Experiences", url: "https://hoianlocaldays.com/basket-boat-hoi-an" }]);
  const itemList = { "@context": "https://schema.org", "@type": "ItemList", name: "Selected basket boat experiences in Hoi An", numberOfItems: basketBoatExperiences.length, itemListElement: basketBoatExperiences.map((experience, index) => ({ "@type": "ListItem", position: index + 1, name: experience.name, url: `https://hoianlocaldays.com/basket-boat-hoi-an#${experience.id}` })) };
  return <main className="basket-hub editorial-commerce-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumb, itemList]) }} />
    <div className="breadcrumb"><Link href="/">Home</Link><span>›</span><Link href="/things-to-do-in-hoi-an">Things to Do</Link><span>›</span><span>Basket Boats</span></div>
    <section className="basket-hero section"><p className="eyebrow">Hoi An Local Days editorial comparison</p><h1>Best Basket Boat Experiences in Hoi An</h1><p>A practical guide to choosing a coconut basket boat experience — from short rides to market, cooking and countryside combinations.</p><aside>Not all basket boat experiences are the same. The right choice depends on whether you want a quick ride, a quieter experience or a half-day combination tour.</aside><AffiliateDisclosure /><EditorSignal /><nav className="quick-nav" aria-label="On this page"><a href="#quick-picks">Quick picks</a><a href="#compare-all">Compare all 5</a><a href="#choose-a-style">Choose a style</a></nav></section>

    <section className="section basket-commerce-picks" id="quick-picks"><div className="section-heading"><p className="eyebrow">Quick picks</p><h2>Short on Time? Start Here</h2><p>Three clear starting points for a classic first ride, a family-friendly standalone activity or a lower-key experience.</p></div><BasketQuickPicks /></section>

    <section className="section basket-commerce-compare" id="compare-all"><div className="section-heading inverse"><p className="eyebrow">Editorial shortlist</p><h2>Compare Our 5 Basket Boat Picks</h2><p>Choose the experience first, then check availability with its booking provider.</p></div><div className="editorial-comparison-list">{basketBoatExperiences.map((experience, index) => <div id={experience.id} key={experience.id}><BasketComparisonCard experience={experience} position={`comparison_${index + 1}`} /></div>)}</div></section>

    <section className="basket-atmosphere section" id="choose-a-style"><div><p className="eyebrow">The most important trade-off</p><h2>Fun &amp; Lively or Quiet &amp; Scenic?</h2><p>Some basket boat experiences may include music, boat spinning, performances and busy waterways. Other formats place more emphasis on the setting and a calmer pace. Neither style is objectively better.</p></div><div className="atmosphere-choices"><article><h3>Fun &amp; Lively</h3><p>May suit groups, energetic travelers and families with children who enjoy active entertainment.</p></article><article><h3>Quiet &amp; Scenic</h3><p>May suit travelers seeking scenery, very young children sensitive to noise, or people who dislike highly touristic entertainment.</p></article></div></section>

    <section className="basket-family section"><div><p className="eyebrow">Balanced family guidance</p><h2>Are Basket Boats Good for Families?</h2><p>The experience is relatively short, visually interesting, easy to combine with other activities and memorable for many children.</p><Link className="primary-button" href="/hoi-an-with-kids">See Our Hoi An Family Guide</Link></div><aside><h3>Consider before choosing</h3><ul><li>Heat and waiting</li><li>Noise and busy waterways</li><li>Whether boat spinning is part of the format</li><li>Different children react differently</li></ul></aside></section>

    <section className="basket-combo section"><div className="basket-heading"><p className="eyebrow">A simple half-day decision</p><h2>Basket Boat Only or Combine It With Cooking?</h2></div><div className="combo-grid"><article><h3>Basket Boat Only</h3><p>Choose this if you are short on time, cooking does not interest you or you already have other plans.</p></article><article><h3>Basket Boat + Cooking</h3><p>Choose this for a first Hoi An trip, a family or couple experience, more value from a half-day, or an interest in food.</p></article></div></section>

    <section className="basket-cross-sell section"><div><p className="eyebrow">Build a fuller half-day</p><h2>Want More Than a Boat Ride?</h2></div><div><p>Many Hoi An cooking experiences already include basket boats alongside markets, food preparation or countryside activities. Check the cooking comparison before booking two overlapping experiences.</p><Link className="primary-button" href="/cooking-classes-hoi-an">Compare Hoi An Cooking Classes</Link></div></section>

    <section className="basket-mistakes section"><div className="basket-heading inverse"><p className="eyebrow">Compare what is actually included</p><h2>Common Mistakes When Choosing a Basket Boat Tour</h2></div><div className="mistake-list">{basketBoatMistakes.map((item, index) => <article key={item.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{item.title}</h3><p>{item.guidance}</p>{item.href ? <Link href={item.href}>Check Cooking Class Combinations →</Link> : null}</div></article>)}</div></section>

    <section className="basket-method section"><div><p className="eyebrow">Our editorial method</p><h2>Experiences first. Providers second.</h2></div><div><p>Hoi An Local Days groups recommendations around the underlying experience and explains who it suits. Booking platforms provide availability; they do not determine the editorial label.</p><nav aria-label="Continue planning"><Link href="/3-days-in-hoi-an">See Where This Fits in 3 Days</Link><Link href="/cooking-classes-hoi-an">Compare Cooking Classes</Link><Link href="/hoi-an-with-kids">Plan With Kids</Link></nav></div></section>
  </main>;
}
