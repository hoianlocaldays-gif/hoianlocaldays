import Link from "next/link";
import { featuredCookingExperience } from "@/data/cooking-landing";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { EditorSignal } from "./editor-signal";

export function CookingClassPage() {
  const experience = featuredCookingExperience;
  const breadcrumb = breadcrumbJsonLd([{ name: "Home", url: "https://hoianlocaldays.com" }, { name: "Cooking Classes in Hoi An", url: "https://hoianlocaldays.com/cooking-classes-hoi-an" }]);

  return <main className="cooking-page tra-que-landing">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    <div className="breadcrumb"><Link href="/">Home</Link><span>›</span><span>Cooking Classes</span></div>
    <section className="tra-que-hero section">
      <div><p className="eyebrow">A local cooking experience in Hoi An</p><h1>Cook, garden and share a meal at Tra Que.</h1><p className="cooking-lead">A family-run Vietnamese cooking class in Tra Que Vegetable Village, with a small group, fresh ingredients and time to enjoy what you make.</p><div className="hero-actions"><a className="primary-button" href={experience.bookingUrl} target="_blank" rel="noopener noreferrer">View dates &amp; reserve</a><a className="secondary-button" href="#experience">See the experience</a></div><p className="tra-que-payment"><strong>No prepayment required.</strong> Reserve online and pay on arrival.</p><EditorSignal /></div>
      <figure><img src={experience.image.src} alt={experience.image.alt} width={experience.image.width} height={experience.image.height} fetchPriority="high"/><figcaption>{experience.name} · {experience.location}</figcaption></figure>
    </section>
    <section className="tra-que-intro section" id="experience">
      <div><p className="eyebrow">Why this experience</p><h2>One garden. One welcoming kitchen.</h2></div><div><p>Tra Que Garden keeps the day focused on the village, its vegetables and practical Vietnamese cooking. It does not add a market visit or basket-boat ride simply to make the itinerary longer.</p><p>Choose the full experience when you want farming and a massage before cooking. Choose cooking only when you prefer to spend your time at the table and stove.</p><div className="tra-que-highlights">{experience.highlights.map((item) => <span key={item}>{item}</span>)}</div></div>
    </section>
    <section className="tra-que-packages section" id="options">
      <div className="section-heading"><div><p className="eyebrow">Choose your format</p><h2>Two ways to join.</h2></div><p>Both options include hands-on cooking, ingredients, the meal and recipes. The full experience adds time in the garden and a massage.</p></div>
      <div className="tra-que-package-grid">{experience.packages.map((item, index) => <article key={item.id} className={index === 0 ? "is-featured" : undefined}><small>{item.duration}</small><h3>{item.name}</h3><p>{item.description}</p><ul>{item.includes.map((include) => <li key={include}>{include}</li>)}</ul><strong>{item.price}</strong><a className={index === 0 ? "primary-button" : "secondary-button"} href={experience.bookingUrl} target="_blank" rel="noopener noreferrer">View dates &amp; reserve</a></article>)}</div>
    </section>
    <section className="tra-que-menu section">
      <div><p className="eyebrow">What you will make</p><h2>Four preparations, then a shared meal.</h2><p>The host guides each step in English. Dietary requirements should be shared before the class so the team can confirm what is possible.</p></div><ol>{experience.dishes.map((dish, index) => <li key={dish}><span>{String(index + 1).padStart(2, "0")}</span><strong>{dish}</strong></li>)}</ol>
    </section>
    <section className="tra-que-practical section"><div><p className="eyebrow">Good to know</p><h2>Simple details before you go.</h2></div><div className="tra-que-practical-grid"><article><h3>Meeting point</h3><p>Tra Que Garden Restaurant &amp; Vietnamese Cooking Class in Tra Que Vegetable Village.</p></article><article><h3>Group size</h3><p>Minimum two participants and a maximum of ten guests per class.</p></article><article><h3>Transport</h3><p>Transport assistance can be arranged on request for an additional fee, subject to availability.</p></article><article><h3>What is not included</h3><p>No market visit, bicycle tour or basket-boat ride is included in this experience.</p></article></div></section>
    <section className="tra-que-final section"><div><p className="eyebrow">Ready to join?</p><h2>Reserve directly with Tra Que Garden.</h2></div><div><p>Check the current sessions and send your booking details on the Tra Que Garden website. The team confirms availability before the reservation is final.</p><a className="primary-button" href={experience.bookingUrl} target="_blank" rel="noopener noreferrer">View dates &amp; reserve</a><p><strong>No payment now · Pay on arrival.</strong></p></div></section>
    <nav className="tra-que-related section" aria-label="Continue planning"><Link href="/what-to-expect-hoi-an-cooking-class">What to expect from a cooking class</Link><Link href="/hoi-an-food-guide">Hoi An food guide</Link><Link href="/things-to-do-in-hoi-an">More things to do in Hoi An</Link></nav>
  </main>;
}
