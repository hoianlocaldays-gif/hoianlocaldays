import Link from "next/link";
import { breadcrumbJsonLd } from "@/lib/jsonld";

const dayOptions = [
  { days: "1", label: "A highlights visit", text: "Possible when you prioritize Old Town, food and the evening atmosphere." },
  { days: "2", label: "Focused but useful", text: "Enough for Hoi An itself plus one deeper experience for many travelers." },
  { days: "3", label: "Strong first-visit default", text: "Allows Old Town, one or two experience blocks and time that is not rushed." },
  { days: "4+", label: "Slow and flexible", text: "Works for families, food, beach time, countryside or additional excursions." },
];

const travelerGuidance = [
  ["First-time visitor", "Around 3 days", "A practical starting point when you want more than a quick Old Town walk."],
  ["Couple", "2–4 days", "Use the shorter end for highlights and the longer end for food, evenings and a slower pace."],
  ["Family with children", "3–4+ days", "Rest, heat, attention spans and less predictable transitions make spare time useful."],
  ["Food-focused traveler", "3+ days", "Creates room for markets, several dishes and cooking without turning every meal into a task."],
  ["Fast-paced sightseer", "1–2 days", "Can work if you accept clear trade-offs and limit half-day experiences."],
  ["Slow traveler", "4+ days", "Suitable when beach, cafés, countryside and unscheduled time are part of the trip."],
];

export function HowManyDaysPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", url: "https://hoianlocaldays.com" },
    { name: "Plan Hoi An", url: "https://hoianlocaldays.com/3-days-in-hoi-an" },
    { name: "How Many Days in Hoi An", url: "https://hoianlocaldays.com/how-many-days-in-hoi-an" },
  ]);

  return <main className="stay-length-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    <div className="breadcrumb"><Link href="/">Home</Link><span>›</span><Link href="/3-days-in-hoi-an">Plan Hoi An</Link><span>›</span><span>How Many Days?</span></div>

    <section className="stay-length-hero section">
      <div><p className="eyebrow">First-time planning guide · Reviewed August 2026</p><h1>How Many Days in Hoi An Do You Need?</h1><p>For most first-time visitors who want more than a quick walk through the historic centre, around three days is a strong starting point. Two days can work well for a focused trip; four or more makes sense when slow travel, family time or several half-day experiences matter.</p><aside><strong>The deciding factor is not only the number of sights.</strong> Count the experience blocks you want—cooking, Cam Thanh, My Son, food, beach and unhurried evenings—then protect enough time around them.</aside></div>
      <nav className="stay-length-strip" aria-label="Stay length overview">{dayOptions.map((option) => <a href={`#days-${option.days.replace("+", "plus")}`} key={option.days}><span>{option.days}</span><strong>{option.label}</strong><small>{option.text}</small></a>)}</nav>
    </section>

    <section className="stay-length-one section" id="days-1">
      <div><p className="eyebrow">One day</p><h2>Is One Day in Hoi An Enough?</h2></div>
      <div><p><strong>Yes, for a highlights visit.</strong> One day can give you time for the historic town, a deliberate food choice and some evening atmosphere. It cannot comfortably represent every major experience around Hoi An.</p><p>The useful decision is what to leave out. Trying to combine My Son, a full cooking experience, Cam Thanh, basket boats and Old Town in one day turns the visit into transport and transitions. <Link href="/hoi-an-old-town-guide">Understand how to approach Old Town first.</Link></p><div className="stay-length-verdict"><strong>Protect:</strong><span>Old Town context · one food priority · evening time</span><strong>Usually sacrifice:</strong><span>multiple half-day excursions and a relaxed pace</span></div></div>
    </section>

    <section className="stay-length-two section" id="days-2">
      <div><p className="eyebrow">Two days</p><h2>What Can You Do With Two Days?</h2><p>Two days is materially more useful because Hoi An itself no longer has to compete with every activity for the same few hours.</p></div>
      <div className="stay-length-two-grid"><article><span>01</span><h3>Protect Hoi An itself</h3><p>Give the historic town, food and the evening atmosphere a meaningful block rather than treating them as gaps between tours.</p></article><article><span>02</span><h3>Choose one deeper experience</h3><p>A cooking experience, Cam Thanh, beach time or another clear priority can occupy the second major block.</p></article></div>
      <p className="stay-length-caution">This is a planning framework, not a detailed two-day itinerary. The experience you choose should match your interests rather than a universal checklist.</p>
    </section>

    <section className="stay-length-three section" id="days-3">
      <div><p className="eyebrow">Three days</p><h2>Why Three Days Works Well for a First Visit</h2></div>
      <div><p>Three days gives many first-time visitors enough room for Hoi An itself, one or two meaningful experience blocks and at least some flexibility. You can explore in the evening without making every morning an early departure.</p><ul><li>Old Town and local food no longer need to be compressed into a few hours.</li><li>A full cooking experience or countryside activity can occupy half a day without consuming the whole visit.</li><li>My Son can remain an optional cultural excursion rather than an obligation.</li><li>Weather, heat, fatigue or a slower morning are easier to absorb.</li></ul><Link className="primary-button" href="/3-days-in-hoi-an">See the 3-Day Hoi An Itinerary</Link></div>
    </section>

    <section className="stay-length-four section" id="days-4plus">
      <div><p className="eyebrow">Four days or more</p><h2>When a Longer Stay Makes Sense</h2></div>
      <div className="stay-length-choice"><article><h3>Stay longer when…</h3><ul><li>You prefer slow mornings and unscheduled evenings.</li><li>Children need rest and shorter activity blocks.</li><li>Food, markets and cooking are central interests.</li><li>You want beach or countryside time alongside heritage.</li><li>You are using Hoi An as a base for My Son or other excursions.</li></ul></article><article><h3>Split the nights when…</h3><ul><li>Your priority is a fast circuit of major sights.</li><li>You also want Da Nang&apos;s larger-city and coastal experience.</li><li>Transport connections make a second base more practical.</li></ul></article></div>
      <p>A longer stay does not automatically become repetitive. Its value depends on whether unhurried time is part of the trip rather than empty space between attractions.</p>
    </section>

    <section className="stay-length-travelers section">
      <div><p className="eyebrow">Planning guidance, not a prescription</p><h2>How Many Days by Traveler Type?</h2></div>
      <div className="stay-length-matrix" role="table" aria-label="Suggested Hoi An stay length by traveler type">
        <div className="stay-length-matrix-head" role="row"><strong role="columnheader">Traveler</strong><strong role="columnheader">Starting point</strong><strong role="columnheader">Why</strong></div>
        {travelerGuidance.map(([traveler, length, reason]) => <div role="row" key={traveler}><strong role="cell">{traveler}</strong><span role="cell">{length}</span><p role="cell">{reason}</p></div>)}
      </div>
    </section>

    <section className="stay-length-blocks section">
      <div><p className="eyebrow">The most useful planning rule</p><h2>Count Experiences, Not Just Attractions</h2><p>Old Town alone is a different trip from Old Town plus My Son, cooking and Cam Thanh. Several signature experiences consume meaningful parts of a day once transport, transitions and eating are included.</p></div>
      <div className="stay-length-block-grid"><article><img src="/images/experiences/cooking/classic-market-cooking.webp" alt="Guests cooking at an organized Hoi An class" width="1200" height="800" loading="lazy" decoding="async" /><h3>Full cooking experience</h3><p>Market, transport or countryside components can make this a substantial experience block.</p><Link href="/what-to-expect-hoi-an-cooking-class">Understand cooking class formats →</Link></article><article><img src="/images/experiences/basket-boat/quieter-basketboat.webp" alt="Travelers seated in basket boats among coconut palms near Hoi An" width="1200" height="800" loading="lazy" decoding="async" /><h3>Cam Thanh combination</h3><p>A boat ride may be short, but pickup and combined activities can expand the overall block.</p><Link href="/cam-thanh-coconut-village">Plan a Cam Thanh visit →</Link></article><article><img src="/images/experiences/my-son/myson-overall-group.webp" alt="Red-brick temple towers at My Son Sanctuary" width="1200" height="800" loading="lazy" decoding="async" /><h3>My Son excursion</h3><p>Road travel and outdoor exploration make this a deliberate cultural half day, not a quick Old Town stop.</p><Link href="/my-son-sanctuary-guide">Understand the My Son visit →</Link></article></div>
    </section>

    <section className="stay-length-food section">
      <figure><img src="/images/editorial/food-guide/hero.webp" alt="HAL editorial illustration of several Hoi An food dishes on a shared table" width="1200" height="800" loading="lazy" decoding="async" /></figure>
      <div><p className="eyebrow">Not every block needs a booking</p><h2>Food and Slow Time Also Need Space</h2><p>A longer stay can improve a food-focused trip because meals do not need to become a race through a checklist. Market context, individual dishes, cafés and a cooking experience can be spread across different days.</p><p>Likewise, beach time, family rest and an unscheduled evening are legitimate uses of a day. They should not be treated as planning failures.</p><Link href="/hoi-an-food-guide">Use the Hoi An Food Guide →</Link></div>
    </section>

    <section className="stay-length-nights section">
      <div><p className="eyebrow">Read the booking calendar carefully</p><h2>Days vs Nights: A Small but Important Difference</h2></div>
      <div><p>“Three days” and “three nights” do not always produce the same usable sightseeing time. A late arrival followed by an early departure can turn a nominal three-night stay into roughly two useful days.</p><p>Check arrival and departure times before assigning activities. Count the blocks in which you will actually be rested and present—not only the number shown in the hotel booking.</p></div>
    </section>

    <section className="stay-length-danang section">
      <div><p className="eyebrow">Two different bases</p><h2>How to Split Time Between Hoi An and Da Nang</h2></div>
      <div className="stay-length-choice"><article><h3>Protect more Hoi An time for…</h3><p>Historic-town atmosphere, food, countryside, cooking and slower local experiences.</p></article><article><h3>Protect more Da Nang time for…</h3><p>A larger urban base, different coastal time and transport convenience.</p></article></div>
      <p>This is not a complete Hoi An-versus-Da Nang comparison. Use it only to ask whether every Central Vietnam night needs to be based in the same place.</p>
    </section>

    <section className="stay-length-family section">
      <div><p className="eyebrow">Flexibility has practical value</p><h2>Why Families and Weather-Sensitive Travelers May Need More Time</h2></div>
      <div><p>Heat, rain, fatigue, children&apos;s energy and travel delays can make a planned activity less appealing. An additional day creates room to move an outdoor block rather than forcing it.</p><p>This is not a weather forecast or a rule that every family needs four days. It is a reminder that a slower itinerary has more recovery options.</p><Link href="/hoi-an-with-kids">Plan Hoi An with children →</Link></div>
    </section>

    <section className="stay-length-final section">
      <div><p className="eyebrow">HAL recommendation</p><h2>So, How Long Should You Stay?</h2></div>
      <div><p><strong>Around three days is a strong starting point</strong> for a first visit that includes more than a quick Old Town walk. Choose two days for a focused trip with one deeper experience. Choose four or more when slower pacing, family needs, food, beach time or several excursions are genuine priorities.</p><p>There is no obligation to fill every day. Good Hoi An planning is often about choosing fewer experience blocks and giving each one enough space.</p><nav aria-label="Continue planning"><Link href="/things-to-do-in-hoi-an">Explore Things to Do</Link><Link href="/3-days-in-hoi-an">See the 3-Day Itinerary</Link><Link href="/editorial-methodology">How HAL Makes Recommendations</Link></nav></div>
    </section>
  </main>;
}
