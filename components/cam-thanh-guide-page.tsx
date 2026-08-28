import Link from "next/link";
import { TrackedLink } from "@/components/tracked-link";
import { breadcrumbJsonLd } from "@/lib/jsonld";

const sourcePage = "cam-thanh-coconut-village";

export function CamThanhGuidePage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", url: "https://hoianlocaldays.com" },
    { name: "Things to Do in Hoi An", url: "https://hoianlocaldays.com/things-to-do-in-hoi-an" },
    { name: "Cam Thanh Coconut Village", url: "https://hoianlocaldays.com/cam-thanh-coconut-village" },
  ]);

  return <main className="cam-thanh-guide">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    <div className="breadcrumb"><Link href="/">Home</Link><span>›</span><Link href="/things-to-do-in-hoi-an">Things to Do</Link><span>›</span><span>Cam Thanh</span></div>

    <section className="cam-thanh-hero section">
      <p className="eyebrow">Local decision guide · Reviewed August 2026</p>
      <h1>Cam Thanh Coconut Village: What to Know Before You Go</h1>
      <p>Cam Thanh is home to the Bay Mau nipa palm forest and Hoi An&apos;s best-known basket boat experience. The main activity zone is busy and tourism-oriented, but the visit can still be enjoyable when you choose the atmosphere you actually want and understand the likely costs before getting into a boat.</p>
      <aside><strong>The short answer:</strong> go for a light, memorable river activity — not for a completely untouched village. If quiet matters, arrange it explicitly rather than assuming every route is calm.</aside>
      <nav className="quick-nav" aria-label="On this page"><a href="#worth-visiting">Is it worth it?</a><a href="#timing">When to go</a><a href="#costs">Costs</a><a href="#checklist">Checklist</a></nav>
    </section>

    <section className="cam-thanh-intro section">
      <div><p className="eyebrow">First, understand the place</p><h2>What Is Cam Thanh?</h2></div>
      <div><p>Cam Thanh is a riverside area near Hoi An, shaped by waterways, nipa palms and livelihoods connected to the river. Bay Mau Coconut Forest is the name most travelers encounter when researching the village.</p><p>UNESCO places Cam Thanh within the estuarine and marsh landscape east of Hoi An, south of the Thu Bon River. Local heritage sources also describe the nipa palm landscape as a source of materials for traditional bamboo-and-palm construction.</p><p>Basket boat tourism is now the most visible visitor activity, but it is only the modern layer of a place with a longer relationship to fishing, transport, waterways and palm-based crafts.</p></div>
    </section>

    <section className="cam-thanh-worth section" id="worth-visiting">
      <div><p className="eyebrow">An honest recommendation</p><h2>Is Cam Thanh Worth Visiting?</h2></div>
      <div className="cam-thanh-verdicts"><article><h3>It may suit you if…</h3><ul><li>You want a short, visual activity outside the Ancient Town.</li><li>Your family or group enjoys lighthearted entertainment.</li><li>You are curious about Hoi An&apos;s river landscape and nipa palms.</li><li>You understand that the main experience is organized for visitors.</li></ul></article><article><h3>Think twice if…</h3><ul><li>You strongly dislike crowds, music or staged entertainment.</li><li>You expect an isolated village with no tourism infrastructure.</li><li>You already booked a cooking class that includes a basket boat ride.</li><li>You need a deep nature or wildlife experience.</li></ul></article></div>
    </section>

    <section className="cam-thanh-timing section" id="timing">
      <div><p className="eyebrow">Conditions can change</p><h2>Best Time to Visit Cam Thanh</h2></div>
      <div className="cam-thanh-time-grid"><article><span>Morning</span><h3>A comfortable starting point</h3><p>Based on our current local observation, morning generally offers more comfortable temperatures and pleasant conditions on the water.</p></article><article><span>Early afternoon</span><h3>Still workable</h3><p>Early afternoon can work, especially outside the hottest periods. Bring sun protection and choose light clothing.</p></article><article><span>Near midday</span><h3>Usually the least comfortable</h3><p>Heat and stronger sun can make a short ride feel longer, particularly for young children or heat-sensitive travelers.</p></article><article><span>Late afternoon</span><h3>Check local conditions</h3><p>Water can be shallower and more mud may be visible at some times. Tides vary, so ask the operator rather than relying on a fixed daily rule.</p></article></div>
      <p className="cam-thanh-caution">Weather, water levels and tidal timing vary by date. These observations are planning guidance, not a guarantee of conditions.</p>
    </section>

    <section className="cam-thanh-atmosphere section">
      <div><p className="eyebrow">Choose the mood first</p><h2>Lively or Quiet Cam Thanh?</h2><p>The experience can feel very different within the same wider coconut-forest area.</p></div>
      <div><article><span>01</span><h3>Main activity zone</h3><p>The main wharf and central waterways are normally busy. This is where travelers are more likely to encounter boat spinning, music, singing and group energy.</p><strong>Better for:</strong><p>Visitors who enjoy a social, playful atmosphere and do not mind visible tourism.</p></article><article><span>02</span><h3>Outer areas</h3><p>Areas toward the edges of Cam Thanh can still offer nipa palms and basket boats with less emphasis on the entertainment zone.</p><strong>Better for:</strong><p>Couples, photographers, noise-sensitive children and travelers who prefer a calmer pace.</p></article></div>
      <aside>If a quieter experience matters to you, ask where the ride operates and whether it enters the main spinning and entertainment area.</aside>
    </section>

    <section className="cam-thanh-ride section">
      <div><p className="eyebrow">Know what you are agreeing to</p><h2>How Basket Boat Rides Actually Work</h2></div>
      <div><p>A typical visit places one or two adults with a local rower in a round basket boat. The ride follows waterways through or around the nipa palms. Based on our current local observation, roughly 40–50 minutes is common, but individual packages may be shorter or longer.</p><p>A normal ride does not automatically mean your boat will be spun rapidly. Travelers who want spinning may transfer to a boat used specifically for the performance. Music, karaoke, fishing demonstrations or other entertainment may also be offered separately or included in a package.</p><p>Before starting, confirm the ride duration, route, inclusions and whether any entertainment is optional.</p></div>
    </section>

    <section className="cam-thanh-costs section" id="costs">
      <div><p className="eyebrow">Local reference · August 2026</p><h2>What Does a Basket Boat Ride Cost?</h2><p>These figures are planning references, not guaranteed or universal prices. Packages, inclusions and sales channels differ.</p></div>
      <div className="cam-thanh-price-card"><div><span>Entrance reference</span><strong>About VND 30,000</strong><small>per guest</small></div><div><span>Boat reference</span><strong>About VND 120,000–150,000</strong><small>per boat, often up to two adults</small></div><div><span>Typical duration</span><strong>About 40–50 minutes</strong><small>confirm with your operator</small></div></div>
      <p>As an illustration, two adults may expect a basic local total around VND 180,000–210,000 before optional extras. One adult may pay around VND 150,000–180,000. A current Da Nang tourism listing separately publishes VND 150,000 for a two-person, 45-minute boat and VND 180,000 for 60 minutes, plus the entrance ticket. Always check the live terms at the point of purchase.</p>
      <aside><strong>Do not compare only the headline price.</strong> An online experience may also include hotel pickup, a guide, food, cycling, fishing activities or cooking. That is not the same product as a basic walk-up boat ride.</aside>
    </section>

    <section className="cam-thanh-extras section">
      <div><p className="eyebrow">Avoid awkward surprises</p><h2>Spinning, Karaoke &amp; Optional Extras</h2></div>
      <div><p>Based on our current local reference, a separate spinning experience may be offered at around VND 100,000. Karaoke, performances or other activities may also involve an additional charge. Prices can change and may be handled differently by each operator.</p><div className="cam-thanh-rule"><strong>Use one simple rule:</strong><span>Ask the price before accepting any optional activity.</span></div><p>If an extra is not appealing, decline politely. You do not need spinning or karaoke to complete a normal basket boat ride.</p></div>
    </section>

    <section className="cam-thanh-practical section">
      <article><p className="eyebrow">Tipping</p><h2>Voluntary, Not Mandatory</h2><p>Rowers may ask for or appreciate a tip. If you are satisfied, VND 20,000–50,000 is a current local reference for a voluntary tip — not a required fee.</p></article>
      <article><p className="eyebrow">Children</p><h2>Supervision Still Matters</h2><p>Children around three years and older commonly participate. Ensure they wear an available life jacket, stay seated when instructed and remain under close adult supervision. Participation is not a safety guarantee; ask the operator about your child&apos;s age and needs.</p></article>
    </section>

    <section className="cam-thanh-touristy section">
      <div><p className="eyebrow">Set an honest expectation</p><h2>Is the Basket Boat Too Touristy?</h2></div>
      <div><p><strong>In the main activity zone, it can be.</strong> Cam Thanh&apos;s basket boat industry is established, busy and clearly organized around visitors. HAL does not describe the central experience as untouched or crowd-free.</p><p>That does not make it automatically bad. Many first-time visitors enjoy the unusual boats, the palms, the rowers&apos; energy and the short break from the Ancient Town. Satisfaction depends on matching expectations: choose lively entertainment deliberately, or arrange a route away from the central zone when you want something quieter.</p></div>
    </section>

    <section className="cam-thanh-story section">
      <div><p className="eyebrow">Before tourism</p><h2>The Story Behind the Basket Boats</h2></div>
      <div><p>Hoi An heritage sources describe basket boats as simple craft used for fishing and carrying passengers before becoming a visitor experience. The surrounding nipa palms also supplied leaves for traditional house construction, while the waterways supported local livelihoods.</p><p>The Bay Mau forest is part of a wider river-mouth and marsh landscape. Tourism is now economically important, but the boats, palms and waterways did not begin as tourism props.</p><p className="cam-thanh-sources">Context checked against <a href="https://www.unesco.org/en/mab/cu-lao-cham-hoi" target="_blank" rel="noopener noreferrer">UNESCO&apos;s Cu Lao Cham–Hoi An Biosphere Reserve</a>, the <a href="https://danangfantasticity.com/en/bay-mau-coconut-forest" target="_blank" rel="noopener noreferrer">Da Nang tourism portal</a> and the <a href="https://www.hoianworldheritage.org.vn/en/news/print/Culture-Art/hoi-an-creates-from-heritage-builds-for-the-future-886.hwh" target="_blank" rel="noopener noreferrer">Hoi An heritage information portal</a>. Detailed wartime claims are intentionally omitted pending stronger verification.</p></div>
    </section>

    <section className="cam-thanh-overlap section">
      <div><p className="eyebrow">Save time and money</p><h2>Avoid Booking the Same Experience Twice</h2></div>
      <div><p>Many Hoi An cooking classes already combine a market visit, basket boat ride and cooking session. Before buying a standalone boat activity, check every inclusion in your cooking booking.</p><p>If the boat is already included, a second ticket may repeat the same part of Cam Thanh rather than add a meaningfully different experience.</p><TrackedLink className="primary-button" href="/cooking-classes-hoi-an" sourcePage={sourcePage} destinationPage="/cooking-classes-hoi-an" section="avoid_overlap" ctaId="cam_thanh_cooking">Check Cooking Class Formats</TrackedLink></div>
    </section>

    <section className="cam-thanh-options section">
      <div><p className="eyebrow">Ready to compare formats?</p><h2>Choose a Basket Boat Experience</h2></div>
      <div><p>Our separate comparison page is designed for choosing between current bookable experience styles. This guide remains focused on understanding Cam Thanh itself.</p><TrackedLink className="secondary-button" href="/basket-boat-hoi-an" sourcePage={sourcePage} destinationPage="/basket-boat-hoi-an" section="next_step" ctaId="cam_thanh_basket">Compare Basket Boat Options</TrackedLink></div>
    </section>

    <section className="cam-thanh-checklist section" id="checklist">
      <div><p className="eyebrow">Before leaving</p><h2>Quick Practical Checklist</h2></div>
      <ol><li><span>01</span><p>Choose lively or quiet before choosing an operator.</p></li><li><span>02</span><p>Check whether another tour already includes a basket boat.</p></li><li><span>03</span><p>Confirm entrance, boat, duration and optional extras.</p></li><li><span>04</span><p>Ask the price before accepting spinning or entertainment.</p></li><li><span>05</span><p>Wear cool clothing and bring sun protection.</p></li><li><span>06</span><p>Use life jackets and supervise children closely.</p></li><li><span>07</span><p>Remember that tipping is voluntary.</p></li></ol>
      <nav aria-label="Continue planning"><Link href="/things-to-do-in-hoi-an">Explore More Things to Do</Link><Link href="/3-days-in-hoi-an">Fit Cam Thanh Into 3 Days</Link><Link href="/editorial-methodology">How HAL Verifies Recommendations</Link></nav>
    </section>
  </main>;
}
