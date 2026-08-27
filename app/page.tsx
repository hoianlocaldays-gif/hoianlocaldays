import Link from "next/link";
import { LocalMapPromo } from "@/components/local-map-promo";
import { organizationJsonLd, websiteJsonLd } from "@/lib/jsonld";

const discovery = [
  { name: "Food & Cooking", note: "Markets, local dishes and hands-on classes", href: "/cooking-classes-hoi-an", accent: "food" },
  { name: "Local Experiences", note: "A considered starting point for exploring Hoi An", href: "#picks", accent: "local" },
  { name: "Family Activities", note: "Ideas shaped around different ages and energy levels", href: "/hoi-an-with-kids", accent: "family" },
  { name: "Culture", note: "Heritage, craft and local context", href: "/things-to-do-in-hoi-an", accent: "culture" },
  { name: "Relax & Wellness", note: "Slower ways to enjoy your time in Hoi An", href: "#plan-stay", accent: "relax" },
  { name: "Day Trips", note: "Useful options when you have an extra day", href: "/day-trips-from-hoi-an", accent: "daytrip" },
];

const planningCards = [
  { title: "1 Day in Hoi An", note: "A focused first-day outline with room to wander." },
  { title: "3 Days in Hoi An", note: "Balance the old town, local experiences and downtime." },
  { title: "Hoi An With Kids", note: "Shape the day around pace, heat and hands-on activities." },
  { title: "Rainy Day in Hoi An", note: "Indoor-friendly ideas without overfilling the schedule." },
];

export default function Home() {
  return <main className="homepage-mvp">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([websiteJsonLd, organizationJsonLd]) }} />

    <section className="home-mvp-hero section">
      <div className="home-mvp-copy"><p className="eyebrow">A local recommendation hub for Hoi An</p><h1>Discover Hoi An Like a Local</h1><p>Honest local recommendations for experiences, food, stays and things worth doing in Hoi An.</p><div className="hero-actions"><Link className="primary-button" href="#experiences">Explore Experiences</Link><Link className="secondary-button" href="#plan-stay">Plan Your Hoi An Day</Link></div></div>
      <div className="home-mvp-art" aria-hidden="true"><span className="home-arch home-arch-one"/><span className="home-arch home-arch-two"/><span className="home-sun"/><b>LOCAL NOTES<br/>FROM HỘI AN</b></div>
    </section>

    <section className="discovery-section section" id="experiences">
      <div className="home-heading"><p className="eyebrow">Quick discovery</p><h2>What Are You Looking For?</h2><p>Start with an interest, then compare only the choices that fit your trip.</p></div>
      <div className="discovery-grid">{discovery.map((item, index) => <Link key={item.name} href={item.href} className={`discovery-card discovery-${item.accent}`}><span>{String(index + 1).padStart(2, "0")}</span><h3>{item.name}</h3><p>{item.note}</p><b>Explore <i aria-hidden="true">→</i></b></Link>)}</div>
    </section>

    <section className="home-picks section" id="picks">
      <div className="home-heading inverse"><p className="eyebrow">Featured local picks</p><h2>Our Hoi An Picks</h2><p>A short editorial selection designed to make the next decision easier.</p></div>
      <div className="home-picks-grid">
        <article className="home-pick home-pick-featured"><div className="home-pick-art art-cooking" aria-hidden="true"><span>Food & cooking</span></div><div><span className="pick-label">Start here</span><h3>Cooking Classes</h3><p>Shop at a local market, explore the coconut village and learn to cook Vietnamese dishes in a hands-on class.</p><Link href="/cooking-classes-hoi-an">Compare Cooking Classes <span>→</span></Link></div></article>
        <article className="home-pick"><div className="home-pick-art art-boat" aria-hidden="true"><span>Local experience</span></div><div><h3>Basket Boat Experiences</h3><p>Understand the different styles before choosing the atmosphere that suits you.</p></div></article>
        <article className="home-pick"><div className="home-pick-art art-family" aria-hidden="true"><span>Family travel</span></div><div><h3>Hoi An With Kids</h3><p>Practical ideas for families balancing fun, weather and an easy pace.</p></div></article>
      </div>
    </section>

    <section className="home-trust section"><div><p className="eyebrow">Why Hoi An Local Days?</p><h2>A useful local filter.</h2></div><div className="home-trust-grid"><article><span>01</span><h3>Local Knowledge</h3><p>Recommendations built around real local context.</p></article><article><span>02</span><h3>Carefully Curated</h3><p>We focus on experiences worth considering instead of listing everything.</p></article><article><span>03</span><h3>Honest Comparisons</h3><p>We explain who each experience is best for — and when it may not be the right fit.</p></article><article><span>04</span><h3>Trusted Booking Partners</h3><p>Where appropriate, we link to established booking platforms.</p></article></div></section>

    <section className="home-planning section" id="plan-stay"><div className="home-heading"><p className="eyebrow">Plan your stay</p><h2>Plan Your Hoi An Stay</h2><p>Simple planning frameworks for the days travelers ask about most.</p></div><div className="planning-grid">{planningCards.map((item, index) => <article key={item.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.note}</p></article>)}</div></section>

    <section className="editorial-position section"><p className="eyebrow">Our editorial approach</p><div><h2>Recommendations, Not Endless Lists</h2><p>Hoi An has hundreds of tours, restaurants and places to stay. We narrow them down by traveler type, experience quality, local character and ease of booking so you can decide faster.</p><span className="methodology-label">How we choose our recommendations</span></div></section>

    <LocalMapPromo />
  </main>;
}
