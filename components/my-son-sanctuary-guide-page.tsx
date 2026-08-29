import Link from "next/link";
import { TrackedLink } from "@/components/tracked-link";
import { breadcrumbJsonLd } from "@/lib/jsonld";

const sourcePage = "my-son-sanctuary-guide";

export function MySonSanctuaryGuidePage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", url: "https://hoianlocaldays.com" },
    { name: "Things to Do in Hoi An", url: "https://hoianlocaldays.com/things-to-do-in-hoi-an" },
    { name: "My Son Sanctuary Guide", url: "https://hoianlocaldays.com/my-son-sanctuary-guide" },
  ]);

  return <main className="my-son-info-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    <div className="breadcrumb"><Link href="/">Home</Link><span>›</span><Link href="/things-to-do-in-hoi-an">Things to Do</Link><span>›</span><span>My Son Guide</span></div>

    <section className="my-son-info-hero section">
      <div>
        <p className="eyebrow">First-time visitor guide · Reviewed August 2026</p>
        <h1>My Son Sanctuary Guide: What to Know Before You Visit</h1>
        <p>My Son is a group of Champa tower-temples in a forested valley outside Hoi An. The visit makes most sense when you understand both the sanctuary&apos;s religious importance and the practical reality: travel time, outdoor walking, heat and ruins that need interpretation.</p>
        <aside><strong>Quick answer:</strong> allow a half day from Hoi An. My Son is a strong choice for travelers interested in history, archaeology, architecture and cultural heritage—but it is not an automatic priority for every short stay.</aside>
      </div>
      <figure><img src="/images/experiences/my-son/myson-overall-group.webp" alt="Surviving red-brick temple towers at My Son Sanctuary in a green valley" width="1200" height="800" fetchPriority="high" decoding="async" /><figcaption>My Son&apos;s surviving towers sit within a wider archaeological landscape.</figcaption></figure>
      <nav className="quick-nav" aria-label="On this page"><a href="#why-it-matters">Why it matters</a><a href="#visit-experience">The visit</a><a href="#timing">When to go</a><a href="#guide">Guide or independent</a></nav>
    </section>

    <section className="my-son-info-intro section">
      <div><p className="eyebrow">Start with the place</p><h2>What Is My Son Sanctuary?</h2></div>
      <div><p>My Son is a UNESCO World Heritage Site associated with the Champa Kingdom. Its surviving brick tower-temples stand in a valley in central Vietnam, roughly 35–40 kilometres from Hoi An by current official tourism guidance.</p><p>UNESCO describes My Son as the religious and political capital of Champa for much of its existence. Construction and development extended from approximately the 4th to the 13th centuries, so visitors are not looking at one building from one moment, but at the remains of a sanctuary that changed across many centuries.</p></div>
    </section>

    <section className="my-son-info-significance section" id="why-it-matters">
      <div><p className="eyebrow">Cultural context</p><h2>Why My Son Matters</h2><p>UNESCO inscribed My Son in 1999 under criteria (ii) and (iii): for the way Champa adapted influences from Indian Hindu art and architecture, and for the sanctuary&apos;s evidence of Champa&apos;s importance in Southeast Asian history.</p></div>
      <div className="my-son-info-grid"><article><span>01</span><h3>A sacred centre</h3><p>The temple groups had a religious function. Official heritage sources identify Shiva as the principal Hindu deity associated with the sanctuary, while the wider site also expressed royal authority.</p></article><article><span>02</span><h3>Architecture in brick</h3><p>The towers are important for their brick construction, carved decoration and the different architectural phases visible across the site.</p></article><article><span>03</span><h3>A Champa landscape</h3><p>The surrounding valley is part of the experience. The relationship between monuments, mountains and sacred setting helps explain why My Son is more than a collection of isolated ruins.</p></article></div>
    </section>

    <section className="my-son-info-remains section">
      <figure><img src="/images/experiences/my-son/myson-private.webp" alt="Brick temple structures and weathered architectural remains at My Son Sanctuary" width="1200" height="800" loading="lazy" decoding="async" /></figure>
      <div><p className="eyebrow">Read the ruins carefully</p><h2>What Will You Actually See?</h2><p>Expect surviving tower-temples, damaged structures, architectural fragments, carved details and active conservation context rather than a completely intact ceremonial complex.</p><p>UNESCO records damage during the Second World War, the First Indochina War and especially the Second Indochina War. Conservation resumed after Vietnam&apos;s reunification and has involved Vietnamese and international teams.</p><p>This mixture of survival, loss and restoration is part of what visitors need to understand. It should be approached as a protected archaeological site—not as a reconstructed theme park.</p></div>
    </section>

    <section className="my-son-info-experience section" id="visit-experience">
      <div><p className="eyebrow">The practical reality</p><h2>What Does the Visit Feel Like?</h2></div>
      <div className="my-son-info-facts"><article><strong>Trip shape</strong><p>From Hoi An, My Son is normally a half-day excursion once road travel and time at the sanctuary are combined.</p></article><article><strong>Movement</strong><p>There is an internal shuttle for part of the approach, but the temple groups still involve outdoor walking and standing.</p></article><article><strong>Conditions</strong><p>The valley is green, but visitors should still expect exposed sections, humidity and heat rather than continuous shade.</p></article><article><strong>Pace</strong><p>A slower visit makes it easier to notice brickwork, carvings and differences between groups instead of treating the site as a quick photo stop.</p></article></div>
    </section>

    <section className="my-son-info-time section" id="timing">
      <div><p className="eyebrow">Comfort before clock time</p><h2>Best Time to Visit During the Day</h2></div>
      <div className="my-son-info-time-grid"><article><h3>Earlier</h3><p>Usually the most practical starting point for travelers concerned about heat. Softer light can also help with photography, although weather and visitor numbers are never guaranteed.</p></article><article><h3>Near midday</h3><p>Often the most demanding period because much of the visit is outdoors. Heat-sensitive travelers may find the walking less comfortable.</p></article><article><h3>Later</h3><p>Can offer different light and may protect a relaxed Hoi An morning, but return timing and changing weather need more attention.</p></article></div>
      <p className="my-son-info-note">HAL does not publish a guaranteed “quietest hour.” Conditions vary by season, weather, holidays and tour arrivals.</p>
    </section>

    <section className="my-son-info-bring section">
      <div><p className="eyebrow">Prepare for an outdoor heritage site</p><h2>What to Wear and Bring</h2></div>
      <ul><li>Comfortable walking shoes with reliable grip.</li><li>Water, sun protection and a hat.</li><li>Light clothing that still covers shoulders and knees respectfully.</li><li>Rain protection when conditions suggest it.</li><li>Enough time to read interpretation rather than rushing between structures.</li></ul>
      <p>Follow site signs and staff instructions. Do not climb, carve, lean on or touch protected brickwork and architectural fragments.</p>
    </section>

    <section className="my-son-info-guide section" id="guide">
      <div><p className="eyebrow">Interpretation changes the visit</p><h2>Do You Need a Guide?</h2></div>
      <div className="my-son-info-choice"><article><h3>A guide is valuable when…</h3><ul><li>You want an accessible explanation of Champa history and Hindu context.</li><li>You want help distinguishing temple groups, surviving material and restoration.</li><li>You prefer asking questions instead of reading throughout the visit.</li></ul></article><article><h3>Independent visiting can work when…</h3><ul><li>You prefer a quiet, self-paced visit.</li><li>You are willing to read before or during the trip.</li><li>Photography and unstructured observation matter more than a guided narrative.</li></ul></article></div>
    </section>

    <section className="my-son-info-independent section">
      <div><p className="eyebrow">Transport is a separate decision</p><h2>Can You Visit My Son Independently?</h2></div>
      <div><p>Yes. A visitor does not need to join a group tour to enter and explore the sanctuary. The main decisions are how to travel from Hoi An, how much interpretation you want and whether you are comfortable organizing the return journey yourself.</p><p>A tour may simplify pickup and guiding. Independent transport offers more control over pace. Current fares, admission, opening hours and performance schedules should always be checked with an official source close to the visit date.</p></div>
    </section>

    <section className="my-son-info-worth section">
      <div><p className="eyebrow">An honest fit check</p><h2>Is My Son Worth Visiting?</h2></div>
      <div className="my-son-info-choice"><article><h3>Strong fit</h3><ul><li>History, archaeology or architecture are trip priorities.</li><li>You want cultural context beyond Hoi An Ancient Town.</li><li>You enjoy photographing monuments and landscapes slowly.</li><li>You are a first-time Central Vietnam visitor building a broader heritage picture.</li></ul></article><article><h3>Reasonable to skip</h3><ul><li>You have extremely limited time in Hoi An.</li><li>Outdoor walking and heat would dominate the experience.</li><li>Your priorities are food, beaches or hands-on activities.</li><li>A child&apos;s age, energy or attention span makes a half-day cultural excursion unrealistic.</li></ul></article></div>
    </section>

    <section className="my-son-info-compare section">
      <div><p className="eyebrow">Different kinds of history</p><h2>My Son and Hoi An Old Town Are Not Substitutes</h2></div>
      <div><p>Hoi An is a living historic trading town where homes, shops, streets and community life remain part of the visitor experience. My Son is an archaeological and religious sanctuary associated with Champa.</p><p>One helps explain commerce and urban cultural exchange; the other reveals a sacred landscape, Hindu influence and Champa architecture. Travelers interested in history may value both for different reasons.</p></div>
    </section>

    <section className="my-son-info-itinerary section">
      <div><p className="eyebrow">Protect the rest of your trip</p><h2>Where My Son Fits Into a Hoi An Trip</h2></div>
      <div><p>For a three-day visit, My Son works best as the main cultural excursion for one half day. Avoid treating it as a small stop to squeeze between several unrelated activities.</p><p>If Ancient Town, local food and a hands-on experience matter more, My Son can remain optional rather than becoming another box to tick.</p><Link href="/3-days-in-hoi-an">See the relaxed 3-day itinerary →</Link></div>
    </section>

    <section className="my-son-info-next section">
      <div><p className="eyebrow">Planning from Hoi An</p><h2>Choose the Visit Format After You Understand the Site</h2></div>
      <div><p>Our separate comparison page explains morning, afternoon, group, private and active visit styles. Use it only if organized transport or guided interpretation would improve your trip.</p><TrackedLink className="primary-button" href="/my-son-tours-from-hoi-an" sourcePage={sourcePage} destinationPage="/my-son-tours-from-hoi-an" section="planning_next_step" ctaId="myson_guide_compare_tours">Compare My Son Tours from Hoi An</TrackedLink></div>
    </section>

    <section className="my-son-info-sources section">
      <div><p className="eyebrow">How this guide was checked</p><h2>Sources and Editorial Caution</h2></div>
      <div><p>Historical and heritage claims were checked against the <a href="https://whc.unesco.org/en/list/949/" target="_blank" rel="noopener noreferrer">UNESCO World Heritage Centre</a>, its inscription and conservation records, and current official Vietnam/Da Nang tourism guidance.</p><p>Operational details can change. HAL intentionally omits current prices, exact hours and performance schedules from this evergreen guide. Read more about our <Link href="/editorial-methodology">editorial methodology</Link>.</p></div>
    </section>
  </main>;
}
