import Link from "next/link";
import { cookingExperiences } from "@/data/cooking-classes";
import { ageGuidance, familyCategories, familyChallenges, familyDayIdeas, familyQuickPicks, familyStayLengths } from "@/data/hoi-an-with-kids";
import { breadcrumbJsonLd } from "@/lib/jsonld";

const familyCookingPick = cookingExperiences.find((experience) => experience.id === "cocolocal-farm");

export function HoiAnWithKidsPage() {
  const breadcrumb = breadcrumbJsonLd([{ name: "Home", url: "https://hoianlocaldays.com" }, { name: "Hoi An With Kids", url: "https://hoianlocaldays.com/hoi-an-with-kids" }]);
  return <main className="family-hub">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    <div className="breadcrumb"><Link href="/">Home</Link><span>›</span><span>Hoi An With Kids</span></div>
    <section className="family-hero section"><p className="eyebrow">A practical family decision guide</p><h1>Hoi An With Kids: Best Things to Do for Families</h1><p>A practical local guide to family-friendly experiences, easy activities, beaches, food and day trips in Hoi An.</p><div className="hero-actions"><a className="primary-button" href="#family-activities">See Family-Friendly Activities</a><a className="secondary-button" href="#family-days">Plan a Family Day</a></div></section>

    <section className="family-picks section"><div className="family-heading"><p className="eyebrow">A calm starting point</p><h2>Short on Time? Start Here</h2></div><div className="family-pick-grid">{familyQuickPicks.map((item, index) => <article key={item.id}><span>{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.description}</p><strong>Best for</strong><ul>{item.bestFor.map((point) => <li key={point}>{point}</li>)}</ul>{item.href && item.cta ? <Link href={item.href}>{item.cta} <b>→</b></Link> : null}</article>)}</div></section>

    <section className="age-section section"><div className="family-heading inverse"><p className="eyebrow">Broad guidance, not fixed rules</p><h2>What Works Best by Age?</h2></div><div className="age-grid">{ageGuidance.map((group) => <article key={group.title}><h3>{group.title}</h3><p>{group.intro}</p><ul>{group.goodOptions.map((item) => <li key={item}>{item}</li>)}</ul>{group.caution ? <small>{group.caution}</small> : null}</article>)}</div></section>

    <section className="family-categories section" id="family-activities"><div className="family-heading"><p className="eyebrow">Choose by pace and interest</p><h2>Best Family Activities in Hoi An</h2></div><div className="family-category-list">{familyCategories.map((item, index) => <article key={item.id}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{item.title}</h3><p>{item.description}</p><small>{item.note}</small>{item.href ? <Link href={item.href}>Explore Cooking Classes →</Link> : null}</div></article>)}</div></section>

    <section className="family-cooking section"><div><p className="eyebrow">Hands-on rather than passive</p><h2>Why Cooking Classes Work Well for Families</h2><p>Food and culture come together in one shared experience. Parents and children can participate alongside one another, and many formats also include a market, countryside or basket-boat element.</p></div>{familyCookingPick ? <article><span>{familyCookingPick.editorial.label}</span><h3>Our family pick: {familyCookingPick.name}</h3><p>{familyCookingPick.editorial.whyWePickedIt}</p><small><strong>Best for:</strong> {familyCookingPick.editorial.bestFor.join(" · ")}</small><Link className="primary-button" href="/cooking-classes-hoi-an">See Why We Picked It</Link></article> : null}</section>

    <section className="family-challenges section"><div className="family-heading inverse"><p className="eyebrow">Trade-offs matter</p><h2>What Can Be Hard With Kids?</h2></div><div className="challenge-grid">{familyChallenges.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.guidance}</p></article>)}</div></section>

    <section className="family-days section" id="family-days"><div className="family-heading"><p className="eyebrow">Simple frameworks</p><h2>Easy Family Day Ideas</h2></div><div className="family-day-grid">{familyDayIdeas.map((day) => <article key={day.title}><h3>{day.title}</h3><ol>{day.steps.map((step) => <li key={step}>{step}</li>)}</ol></article>)}</div></section>

    <section className="rainy-family section"><div><p className="eyebrow">Keep the plan flexible</p><h2>What to Do With Kids When It Rains</h2></div><p>Try a cooking class, a lantern or craft workshop, a relaxed café stop, short Old Town visits between showers, or another indoor or semi-covered activity.</p></section>

    <section className="family-length section"><div className="family-heading"><p className="eyebrow">There is no single correct length</p><h2>How Many Days Do Families Need in Hoi An?</h2></div><div className="length-grid">{familyStayLengths.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.guidance}</p></article>)}</div></section>

    <section className="family-trust section"><div><p className="eyebrow">Editorial method</p><h2>How We Pick Family Activities</h2></div><div><p>We prioritize activities that are engaging, practical to fit into a family day, suitable for different energy levels and offer something more than passive sightseeing.</p><p>Not every popular Hoi An activity suits every child, so we highlight trade-offs rather than recommending everything.</p><nav aria-label="Continue planning"><Link href="/things-to-do-in-hoi-an">Explore all things to do</Link><Link href="/">Return to homepage</Link></nav></div></section>
  </main>;
}
