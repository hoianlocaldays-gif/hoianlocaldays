import Link from "next/link";
import { AffiliateCTA } from "./affiliate-cta";
import { AffiliateDisclosure } from "./affiliate-disclosure";
import { cookingClasses, cookingClassQuickPicks, type CookingClass } from "@/data/cooking-classes";
import { breadcrumbJsonLd } from "@/lib/jsonld";

const pageSlug = "cooking-classes-hoi-an";

function ProductCard({ item, position, compact = false }: { item: CookingClass; position: string; compact?: boolean }) {
  return <article className={compact ? "cooking-card cooking-card-quick" : "cooking-card"}>
    <div className="cooking-card-heading"><span className="pick-label">{item.label}</span><small>Viator · {item.id}</small></div>
    <h3>{item.name}</h3>
    <p>{item.shortDescription}</p>
    {!compact && <dl className="cooking-facts"><div><dt>Best for</dt><dd>{item.bestFor.join(" · ")}</dd></div><div><dt>Experience style</dt><dd>{item.experienceStyle}</dd></div></dl>}
    <AffiliateCTA experienceId={item.id} provider={item.offer.provider} campaign={item.offer.campaign} page={pageSlug} position={position} href={item.offer.affiliateUrl} />
  </article>;
}

export function CookingClassPage() {
  const breadcrumb = breadcrumbJsonLd([{ name: "Home", url: "https://hoianlocaldays.com" }, { name: "Cooking Classes in Hoi An", url: "https://hoianlocaldays.com/cooking-classes-hoi-an" }]);
  const itemList = { "@context": "https://schema.org", "@type": "ItemList", name: "Selected cooking classes in Hoi An", numberOfItems: cookingClasses.length, itemListElement: cookingClasses.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.name, url: item.offer.affiliateUrl })) };

  return <main className="cooking-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumb, itemList]) }} />
    <div className="breadcrumb"><Link href="/">Home</Link><span>›</span><span>Cooking Classes</span></div>
    <section className="cooking-hero section">
      <p className="eyebrow">Local comparison · 5 selected experiences</p>
      <h1>Best Cooking Classes in Hoi An</h1>
      <p className="cooking-lead">A locally curated comparison of cooking experiences for families, couples, food lovers and first-time visitors.</p>
      <AffiliateDisclosure />
      <nav className="quick-nav" aria-label="On this page"><a href="#quick-picks">Quick picks</a><a href="#compare-all">Compare all 5</a><a href="#how-we-choose">How we choose</a></nav>
    </section>
    <section className="section cooking-section" id="quick-picks">
      <div className="section-heading"><p className="eyebrow">Quick picks</p><h2>Three easy starting points</h2><p>Choose by travel style, then confirm current details on Viator.</p></div>
      <div className="cooking-quick-grid">{cookingClassQuickPicks.map((item, index) => <ProductCard key={item.id} item={item} compact position={`quick_pick_${index + 1}`} />)}</div>
    </section>
    <section className="section cooking-compare" id="compare-all">
      <div className="section-heading inverse"><p className="eyebrow">Side-by-side shortlist</p><h2>Compare All 5 Cooking Classes</h2><p>No invented prices, ratings, review counts or availability.</p></div>
      <div className="cooking-list">{cookingClasses.map((item, index) => <ProductCard key={item.id} item={item} position={`comparison_${index + 1}`} />)}</div>
    </section>
    <section className="section how-we-choose" id="how-we-choose"><div><p className="eyebrow">Our method</p><h2>How We Choose</h2></div><p>We compare experiences based on overall experience quality, suitability for different travelers, group style, local character and ease of booking.</p></section>
    <section className="section cooking-next"><p className="eyebrow">Continue exploring</p><h2>Plan the rest of your Hoi An stay</h2><div><Link href="/">Home <span>→</span></Link><Link href="/things-to-do-in-hoi-an">Things to do in Hoi An <span>→</span></Link><Link href="/hoi-an-with-kids">Hoi An with kids <span>→</span></Link></div></section>
  </main>;
}
