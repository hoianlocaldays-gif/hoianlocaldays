import Link from "next/link";
import { AffiliateDisclosure } from "./affiliate-disclosure";
import { CookingComparisonCard, QuickPicks, RelatedGuides } from "./cooking-editorial";
import { cookingExperiences, cookingQuickPicks } from "@/data/cooking-classes";
import { breadcrumbJsonLd } from "@/lib/jsonld";

export function CookingClassPage() {
  const breadcrumb = breadcrumbJsonLd([{ name: "Home", url: "https://hoianlocaldays.com" }, { name: "Cooking Classes in Hoi An", url: "https://hoianlocaldays.com/cooking-classes-hoi-an" }]);
  const itemList = { "@context": "https://schema.org", "@type": "ItemList", name: "Selected cooking experiences in Hoi An", numberOfItems: cookingExperiences.length, itemListElement: cookingExperiences.map((experience, index) => ({ "@type": "ListItem", position: index + 1, name: experience.name, url: `https://hoianlocaldays.com/cooking-classes-hoi-an#${experience.id}` })) };

  return <main className="cooking-page editorial-commerce-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumb, itemList]) }} />
    <div className="breadcrumb"><Link href="/">Home</Link><span>›</span><span>Cooking Classes</span></div>
    <section className="cooking-hero section">
      <p className="eyebrow">Hoi An Local Days editorial comparison</p>
      <h1>Best Cooking Classes in Hoi An</h1>
      <p className="cooking-lead">Seven carefully selected cooking experiences for different types of travelers — from family-friendly classes to farm-to-table cooking and all-in-one Hoi An experiences.</p>
      <AffiliateDisclosure />
      <nav className="quick-nav" aria-label="On this page"><a href="#quick-picks">Quick picks</a><a href="#compare-all">Compare all 7</a><a href="#how-we-choose">How we choose</a></nav>
    </section>
    <section className="section cooking-section" id="quick-picks">
      <div className="section-heading"><p className="eyebrow">Quick picks</p><h2>Short on Time? Start Here</h2><p>Three distinct starting points for a classic first visit, a family day or a cooking-focused farm experience.</p></div>
      <QuickPicks experiences={cookingQuickPicks} />
    </section>
    <section className="section cooking-compare" id="compare-all">
      <div className="section-heading inverse"><p className="eyebrow">Editorial shortlist</p><h2>Compare All 7 Cooking Experiences</h2><p>Choose the experience first, then use an available booking provider.</p></div>
      <div className="editorial-comparison-list">{cookingExperiences.map((experience, index) => <div id={experience.id} key={experience.id}><CookingComparisonCard experience={experience} position={`comparison_${index + 1}`} /></div>)}</div>
    </section>
    <section className="section how-we-choose" id="how-we-choose"><div><p className="eyebrow">Our method</p><h2>How We Choose Our Recommendations</h2></div><div className="method-copy"><p>Hoi An Local Days compares experiences based on the overall quality of the experience, how distinctive it is, who it suits best, local character, cooking depth, group style and ease of booking.</p><p>We do not rank an experience simply because it offers the lowest price or the highest affiliate commission.</p></div></section>
    <RelatedGuides />
  </main>;
}
