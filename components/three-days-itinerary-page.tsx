import Link from "next/link";
import { commonMistakes, dayThreeOptions, dayTwoPaths, days, decisionPaths, travelerVariants } from "@/data/hoi-an-itinerary";
import { breadcrumbJsonLd } from "@/lib/jsonld";

function DaySections({ day }: { day: (typeof days)[number] }) {
  return <div className="itinerary-day-sections">{day.sections.map((section) => <article key={`${day.day}-${section.time}`}><span>{section.time}</span><div><h3>{section.title}</h3><p>{section.description}</p><ul>{section.suggestions.map((item) => <li key={item}>{item}</li>)}</ul></div></article>)}</div>;
}

export function ThreeDaysItineraryPage() {
  const breadcrumb = breadcrumbJsonLd([{ name: "Home", url: "https://hoianlocaldays.com" }, { name: "Things to Do in Hoi An", url: "https://hoianlocaldays.com/things-to-do-in-hoi-an" }, { name: "3 Days in Hoi An", url: "https://hoianlocaldays.com/3-days-in-hoi-an" }]);
  return <main className="itinerary-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    <div className="breadcrumb"><Link href="/">Home</Link><span>›</span><Link href="/things-to-do-in-hoi-an">Things to Do</Link><span>›</span><span>3 Days in Hoi An</span></div>
    <section className="itinerary-hero section"><p className="eyebrow">A relaxed first-time plan</p><h1>3 Days in Hoi An: A Relaxed First-Time Itinerary</h1><p>A practical three-day plan balancing Hoi An Ancient Town, local food, hands-on experiences, countryside and time to slow down.</p><aside>This itinerary is intentionally not packed from morning to night.</aside><div className="hero-actions"><a className="primary-button" href="#three-day-plan">See the 3-Day Plan</a><Link className="secondary-button" href="/things-to-do-in-hoi-an">Explore Things to Do</Link></div></section>

    <section className="itinerary-overview section" id="three-day-plan"><div className="itinerary-heading"><p className="eyebrow">Itinerary at a glance</p><h2>Three Days, Three Clear Priorities</h2></div><div className="itinerary-overview-grid">{days.map((day) => <a href={`#day-${day.day}`} key={day.day}><span>Day {day.day}</span><h3>{day.title}</h3><p>{day.summary}</p><b>View the day ↓</b></a>)}</div></section>

    <section className="itinerary-day section" id="day-1"><div className="itinerary-day-heading"><span>Day 1</span><h2>Day 1 — Ancient Town, Food &amp; Lanterns</h2><p>{days[0].summary}</p></div><DaySections day={days[0]} /></section>

    <section className="itinerary-day itinerary-day-two section" id="day-2"><div className="itinerary-day-heading inverse"><span>Day 2</span><h2>Day 2 — Cooking, Coconut Village &amp; Countryside</h2><p>{days[1].summary}</p></div><p className="day-two-intro">A hands-on experience is a useful way to combine food, local context and activities outside the Ancient Town. Choose one main path:</p><div className="day-two-paths">{dayTwoPaths.map((path) => <article key={path.id}><h3>{path.title}</h3><p>{path.description}</p><strong>Best for</strong><ul>{path.bestFor.map((item) => <li key={item}>{item}</li>)}</ul><Link className="primary-button" href={path.href}>{path.cta}</Link></article>)}</div><aside className="duplicate-note"><strong>Before booking both:</strong> Many cooking experiences already include a basket boat ride. Compare inclusions first to avoid paying for overlapping activities.</aside><DaySections day={days[1]} /></section>

    <section className="itinerary-day section" id="day-3"><div className="itinerary-day-heading"><span>Day 3</span><h2>Day 3 — Choose the Hoi An You Want More Of</h2><p>{days[2].summary}</p></div><div className="day-three-grid">{dayThreeOptions.map((option) => <article key={option.title}><h3>{option.title}</h3><small><strong>Best for:</strong> {option.bestFor}</small>{option.description ? <p>{option.description}</p> : null}<ul>{option.suggestions.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div></section>

    <section className="traveler-variants section">{travelerVariants.map((variant) => <article key={variant.id}><p className="eyebrow">Traveler adjustment</p><h2>{variant.title}</h2><ul>{variant.guidance.map((item) => <li key={item}>{item}</li>)}</ul>{variant.href && variant.cta ? <Link className="primary-button" href={variant.href}>{variant.cta}</Link> : null}</article>)}</section>

    <section className="itinerary-dont section"><div><p className="eyebrow">A useful constraint</p><h2>What We Wouldn&apos;t Try to Fit Into 3 Days</h2></div><ol>{commonMistakes.map((mistake, index) => <li key={mistake}><span>{String(index + 1).padStart(2, "0")}</span>{mistake}</li>)}</ol></section>

    <section className="itinerary-decisions section"><div className="itinerary-heading inverse"><p className="eyebrow">Use the next decision</p><h2>Not Sure What to Book?</h2></div><div className="itinerary-decision-grid">{decisionPaths.map((path) => <Link href={path.href} key={path.label}><small>{path.prompt}</small><strong>{path.label}</strong><span>→</span></Link>)}</div></section>
  </main>;
}
