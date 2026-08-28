import Link from "next/link";
import { TrackedLink } from "@/components/tracked-link";
import { organizationJsonLd, websiteJsonLd } from "@/lib/jsonld";

const discovery = [
  { name: "Food & Cooking", note: "Understand local dishes first, then decide whether a class fits", href: "/hoi-an-food-guide", accent: "food" },
  { name: "Local Experiences", note: "A considered starting point for exploring Hoi An", href: "#picks", accent: "local" },
  { name: "Family Activities", note: "Ideas shaped around different ages and energy levels", href: "/hoi-an-with-kids", accent: "family" },
  { name: "Culture", note: "Heritage, craft and local context", href: "/things-to-do-in-hoi-an", accent: "culture" },
  { name: "Relax & Wellness", note: "Slower ways to enjoy your time in Hoi An", href: "#plan-stay", accent: "relax" },
  { name: "Plan a 3-Day Stay", note: "Balance the old town, local experiences and time to slow down", href: "/3-days-in-hoi-an", accent: "daytrip" },
];

const planningCards = [
  { title: "3 Days in Hoi An", note: "Balance the old town, local experiences and downtime.", href: "/3-days-in-hoi-an" },
  { title: "Hoi An With Kids", note: "Shape the day around pace, heat and hands-on activities.", href: "/hoi-an-with-kids" },
];

const homeCtaIds: Record<string, string> = {
  "/cooking-classes-hoi-an": "home_cooking",
  "/hoi-an-food-guide": "home_food_guide",
  "/basket-boat-hoi-an": "home_basket_boat",
  "/hoi-an-with-kids": "home_kids",
  "/things-to-do-in-hoi-an": "home_things_to_do",
  "/3-days-in-hoi-an": "home_itinerary",
};

export default function Home() {
  return <main className="homepage-mvp">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([websiteJsonLd, organizationJsonLd]) }} />

    <section className="home-mvp-hero section">
      <div className="home-mvp-copy"><p className="eyebrow">A local recommendation hub for Hoi An</p><h1>Discover Hoi An Like a Local</h1><p>Practical editorial recommendations for experiences and trip planning in Hoi An.</p><div className="hero-actions"><Link className="primary-button" href="#experiences">Explore Experiences</Link><Link className="secondary-button" href="#plan-stay">Plan Your Hoi An Day</Link></div></div>
      <div className="home-mvp-art"><img src="/images/experiences/my-son/myson-bike.webp" alt="Travelers cycling through green rice fields near Hoi An" width="1200" height="800" fetchPriority="high" decoding="async" /><b>LOCAL NOTES<br/>FROM HỘI AN</b></div>
    </section>

    <section className="discovery-section section" id="experiences">
      <div className="home-heading"><p className="eyebrow">Quick discovery</p><h2>What Are You Looking For?</h2><p>Start with an interest, then compare only the choices that fit your trip.</p></div>
      <div className="discovery-grid">{discovery.map((item, index) => { const content = <><span>{String(index + 1).padStart(2, "0")}</span><h3>{item.name}</h3><p>{item.note}</p><b>Explore <i aria-hidden="true">→</i></b></>; return homeCtaIds[item.href] ? <TrackedLink key={item.name} href={item.href} className={`discovery-card discovery-${item.accent}`} sourcePage="homepage" destinationPage={item.href} section="discovery" ctaId={homeCtaIds[item.href]}>{content}</TrackedLink> : <Link key={item.name} href={item.href} className={`discovery-card discovery-${item.accent}`}>{content}</Link>; })}</div>
    </section>

    <section className="home-picks section" id="picks">
      <div className="home-heading inverse"><p className="eyebrow">Featured local picks</p><h2>Our Hoi An Picks</h2><p>A short editorial selection designed to make the next decision easier.</p></div>
      <div className="home-picks-grid">
        <article className="home-pick home-pick-featured"><div className="home-pick-art"><img src="/images/experiences/cooking/classic-market-cooking.webp" alt="A hands-on Vietnamese cooking experience in Hoi An" width="1200" height="800" loading="lazy" decoding="async" /><span>Food & cooking</span></div><div><span className="pick-label">Start here</span><h3>Cooking Classes</h3><p>Shop at a local market, explore the coconut village and learn to cook Vietnamese dishes in a hands-on class.</p><TrackedLink href="/cooking-classes-hoi-an" sourcePage="homepage" destinationPage="/cooking-classes-hoi-an" section="featured_picks" ctaId="home_cooking">Compare Cooking Classes <span>→</span></TrackedLink></div></article>
        <article className="home-pick"><div className="home-pick-art"><img src="/images/experiences/basket-boat/classic-basketboat.webp" alt="Traditional basket boats among coconut palms in Hoi An" width="1200" height="800" loading="lazy" decoding="async" /><span>Local experience</span></div><div><h3>Basket Boat Experiences</h3><p>Understand the different styles before choosing the atmosphere that suits you.</p><TrackedLink href="/basket-boat-hoi-an" sourcePage="homepage" destinationPage="/basket-boat-hoi-an" section="featured_picks" ctaId="home_basket_boat">Compare Basket Boat Experiences <span>→</span></TrackedLink></div></article>
        <article className="home-pick"><div className="home-pick-art"><img src="/images/experiences/basket-boat/family-basketboat.webp" alt="A family-friendly basket boat experience in Hoi An" width="1200" height="800" loading="lazy" decoding="async" /><span>Family travel</span></div><div><h3>Hoi An With Kids</h3><p>Practical ideas for families balancing fun, weather and an easy pace.</p><TrackedLink href="/hoi-an-with-kids" sourcePage="homepage" destinationPage="/hoi-an-with-kids" section="featured_picks" ctaId="home_kids">Plan a Family Day <span>→</span></TrackedLink></div></article>
      </div>
    </section>

    <section className="home-trust section"><div><p className="eyebrow">Why Hoi An Local Days?</p><h2>A useful local filter.</h2></div><div className="home-trust-grid"><article><span>01</span><h3>Local Context</h3><p>Recommendations account for heat, pacing, activity combinations and traveler fit.</p></article><article><span>02</span><h3>Carefully Curated</h3><p>We focus on experiences worth considering instead of listing everything.</p></article><article><span>03</span><h3>Honest Comparisons</h3><p>We explain who each experience is best for — and when it may not be the right fit.</p></article><article><span>04</span><h3>Trusted Booking Partners</h3><p>Where appropriate, we link to established booking platforms.</p></article></div></section>

    <section className="home-planning section" id="plan-stay"><div className="home-heading"><p className="eyebrow">Plan your stay</p><h2>Plan Your Hoi An Stay</h2><p>Simple planning frameworks for the days travelers ask about most.</p></div><div className="planning-grid">{planningCards.map((item, index) => { const content = <><span>{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.note}</p></>; return <TrackedLink href={item.href} key={item.title} sourcePage="homepage" destinationPage={item.href} section="planning" ctaId={homeCtaIds[item.href]}>{content}</TrackedLink>; })}</div></section>

    <section className="editorial-position section"><p className="eyebrow">Our editorial approach</p><div><h2>Recommendations, Not Endless Lists</h2><p>Hoi An has hundreds of tours and activities. We narrow them down by traveler type, practical fit, local context and ease of booking so you can decide faster.</p><Link className="methodology-label" href="/editorial-methodology">How we choose our recommendations</Link></div></section>
  </main>;
}
