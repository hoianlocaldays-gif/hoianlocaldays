import Link from "next/link";
import { breadcrumbJsonLd } from "@/lib/jsonld";

const heritageTypes = [
  ["The streets themselves", "Narrow streets, attached timber-frame buildings, tiled roofs, façades and river-facing plots reveal how the trading town worked as a whole."],
  ["Japanese Covered Bridge", "An iconic covered wooden bridge with a small temple component—important, but only one part of the larger urban heritage."],
  ["Assembly halls", "Community buildings associated with Chinese congregations make cultural exchange visible through architecture, worship and communal life."],
  ["Old houses", "Merchant and family houses help explain the connection between street-facing commerce, domestic space and access toward the river."],
  ["Religious and community spaces", "Pagodas, temples and family cult houses show that Old Town is living cultural space, not simply a preserved commercial façade."],
  ["Riverfront and market", "The quay, river edge and working market connect the historic port layout with present-day trade and everyday activity."],
];

const mistakes = [
  ["Arriving only after dark", "Lanterns are memorable, but architecture, materials and street structure are easier to understand in daylight."],
  ["Treating every building as a photo set", "Some buildings remain places of worship, community life, business or residence."],
  ["Trying to enter everything", "A few selected interiors usually provide more context than racing through every included site."],
  ["Staying only on the busiest riverfront", "Move between the river edge and quieter parallel streets to understand more of the town."],
  ["Equating Old Town with all of Hoi An", "Countryside, Cam Thanh, cooking, food and nearby heritage create a much wider destination."],
  ["Ignoring heat and rest", "A pause over food or a drink can be part of a better visit, not time lost from a checklist."],
];

export function HoiAnOldTownGuidePage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", url: "https://hoianlocaldays.com" },
    { name: "Things to Do", url: "https://hoianlocaldays.com/things-to-do-in-hoi-an" },
    { name: "Hoi An Old Town Guide", url: "https://hoianlocaldays.com/hoi-an-old-town-guide" },
  ]);

  return <main className="old-town-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    <div className="breadcrumb"><Link href="/">Home</Link><span>›</span><Link href="/things-to-do-in-hoi-an">Things to Do</Link><span>›</span><span>Old Town Guide</span></div>

    <section className="old-town-hero section">
      <div><p className="eyebrow">First-time heritage guide · Reviewed August 2026</p><h1>Hoi An Old Town Guide: What to See &amp; How to Visit</h1><p>Hoi An Old Town is not one attraction. It is a compact historic urban area where streets, houses, assembly halls, worship spaces, a covered bridge, the riverfront, shops and a working market still form one connected townscape.</p></div>
      <aside><span>Quick answer</span><p>Allow at least a few hours for orientation. A half day gives selected heritage interiors more space; seeing the town in both daylight and evening provides the clearest contrast. Walk slowly, choose rather than collect sites, and remember that Old Town is only one layer of Hoi An.</p></aside>
    </section>

    <nav className="old-town-jump section" aria-label="Old Town guide sections"><a href="#what-it-is">Understand the town</a><a href="#what-to-see">Choose what to see</a><a href="#day-evening">Compare day and evening</a><a href="#tickets">Check heritage access</a></nav>

    <section className="old-town-definition section" id="what-it-is">
      <div><p className="eyebrow">A district, not a single monument</p><h2>What Is Hoi An Old Town?</h2></div>
      <div><p>The World Heritage property covers a historic trading-town ensemble on the north bank near the mouth of the Thu Bon River. Walking through it means experiencing a street plan and living commercial area; entering individual heritage buildings is a separate layer of the visit.</p><p>That distinction matters. You can understand the scale, façades, rooflines, river relationship and present-day street life simply by moving through the area. Selected ticketed interiors then reveal domestic layouts, community institutions and religious use that are not visible from outside.</p><blockquote>Do not reduce Old Town to the bridge, lanterns or one famous street. Its value is the relationship between the buildings, streets, water and communities.</blockquote></div>
    </section>

    <section className="old-town-unesco section">
      <div><p className="eyebrow">Why the whole town matters</p><h2>Why Is Hoi An a UNESCO World Heritage Site?</h2><p>UNESCO inscribed Hoi An Ancient Town in 1999 under criteria (ii) and (v). It identifies the town as an exceptionally well-preserved small trading port active from the 15th to the 19th centuries.</p></div>
      <div className="old-town-reasons"><article><span>II</span><h3>Cultural exchange</h3><p>The urban fabric reflects a fusion of local traditions with foreign influences—principally Chinese and Japanese, with later European elements—created through international commerce.</p></article><article><span>V</span><h3>Preserved port town</h3><p>Timber-frame buildings, narrow streets, tiled roofs, quays and plots oriented between street and river preserve the logic of a traditional Asian trading port.</p></article></div>
      <p className="old-town-source">Source basis: UNESCO World Heritage Centre, property 948 and inscription decision; reviewed 29 August 2026.</p>
    </section>

    <section className="old-town-heritage section" id="what-to-see">
      <div><p className="eyebrow">Look for types, not rankings</p><h2>What Should You Actually See?</h2><p>A useful first visit samples different forms of heritage. The goal is not to complete a universal “top ten,” but to understand how trade, home, worship and public space came together.</p></div>
      <div className="old-town-heritage-grid">{heritageTypes.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>

    <section className="old-town-bridge section">
      <div><p className="eyebrow">Icon, not the whole story</p><h2>The Japanese Covered Bridge</h2></div>
      <div><p>The covered wooden bridge and its temple component have become Hoi An&apos;s most recognizable landmark. UNESCO&apos;s current property description places the surviving form in the 18th century and treats it as part of the wider preserved townscape.</p><p>Accounts of its precise first construction date and builders vary, and stories attached to the bridge often blend history with later tradition. For a first visit, its clearest significance is visual and urban: it marks the cultural exchange associated with the old port and connects parts of the historic street network.</p><p>Pause to understand its form, but do not let one crowded landmark replace the quieter work of noticing houses, community buildings and street patterns elsewhere.</p></div>
    </section>

    <section className="old-town-day-night section" id="day-evening">
      <div><p className="eyebrow">Two different readings of the same place</p><h2>Hoi An Old Town by Day vs Evening</h2></div>
      <div className="old-town-day-night-grid"><article><span>DAY</span><h3>Read the architecture</h3><ul><li>See façades, rooflines, timber detail and street structure.</li><li>Enter selected heritage interiors while they are operating.</li><li>Connect the market and riverfront to the trading-town story.</li><li>Photograph detail in available natural light.</li></ul></article><article><span>EVENING</span><h3>Experience the atmosphere</h3><ul><li>See lantern light and the changing riverfront scene.</li><li>Stroll, dine and observe more entertainment activity.</li><li>Notice how commercial and visitor use changes after daylight.</li><li>Accept that the experience may feel more social than interpretive.</li></ul></article></div>
      <aside><strong>HAL recommendation:</strong> If your schedule allows, see both. Daylight explains why the town matters; evening shows how its visitor-facing atmosphere changes.</aside>
    </section>

    <section className="old-town-time section">
      <div><p className="eyebrow">No single perfect hour</p><h2>When Is the Best Time to Explore?</h2></div>
      <div className="old-town-time-grid"><article><span>Morning</span><p>Often a practical starting point for cooler walking, architectural observation and a different local rhythm. Conditions still vary.</p></article><article><span>Midday</span><p>Heat can make continuous walking less comfortable. Heritage interiors, lunch and a deliberate rest can give the middle of the day structure.</p></article><article><span>Late day → evening</span><p>Changing light, lantern atmosphere, dining and riverfront activity become more prominent. This is not a guarantee of quiet streets.</p></article></div>
    </section>

    <section className="old-town-duration section">
      <div><p className="eyebrow">Choose depth, not a stopwatch</p><h2>How Much Time Do You Need?</h2></div>
      <div className="old-town-duration-grid"><article><strong>A few hours</strong><p>Enough for basic orientation, a slow walk and one or two priorities.</p></article><article><strong>Half day</strong><p>Allows selected interiors, street detail, market or food context and useful pauses.</p></article><article><strong>Day + evening</strong><p>Best suited to travelers who want both heritage interpretation and the later lantern atmosphere.</p></article></div>
      <p>These are planning units, not required durations. Your wider stay, weather and interest in interiors matter more than a fixed number. <Link href="/how-many-days-in-hoi-an">Compare how Old Town fits into a 1, 2, 3 or 4+ day visit.</Link></p>
    </section>

    <section className="old-town-walk section">
      <div><p className="eyebrow">A better way to move</p><h2>How to Walk the Old Town Without Rushing</h2></div>
      <ol><li><span>01</span><div><h3>Read one street slowly</h3><p>Look at plot width, shutters, rooflines and the relationship between shopfront and deeper domestic space.</p></div></li><li><span>02</span><div><h3>Select contrasting interiors</h3><p>Choose different building types rather than several versions of the same experience.</p></div></li><li><span>03</span><div><h3>Move away from the riverfront</h3><p>Cross between busier waterfront areas and parallel streets instead of following one congested line.</p></div></li><li><span>04</span><div><h3>Stop with purpose</h3><p>Food, shade and observation are part of understanding a living town—not interruptions.</p></div></li><li><span>05</span><div><h3>Return after the light changes</h3><p>If possible, compare what you noticed in daylight with the town&apos;s evening use.</p></div></li></ol>
    </section>

    <section className="old-town-ticket section" id="tickets">
      <div><p className="eyebrow">Changeable information · checked 29 August 2026</p><h2>How Heritage Tickets Work</h2></div>
      <div><p>The Hoi An World Cultural Heritage Conservation Center currently asks visitors to purchase an entrance ticket and publishes two structures: <strong>VND 80,000</strong> for the general townscape plus one of the Japanese Covered Bridge or Quan Cong Temple and two other selected monuments; and <strong>VND 120,000</strong> for the general townscape, one of those two landmarks, one museum and three other selected monuments.</p><p>The same announcement says a ticket is purchased once and remains valid during the visitor&apos;s stay in Hoi An for up to three days. This helps distinguish walking through the urban area from using the ticket to enter a selection of heritage attractions.</p><aside>Ticket rules, included sites and operating arrangements can change. Confirm the current official notice or ticket counter information when you arrive; do not rely on an old blog screenshot.</aside></div>
    </section>

    <section className="old-town-market-food section">
      <div className="old-town-media"><img src="/images/editorial/market-guide/hero.webp" alt="HAL editorial illustration of a working morning market" width="1200" height="800" loading="lazy" decoding="async" /><img src="/images/editorial/food-guide/cao-lau.webp" alt="HAL editorial illustration of a cao lau-inspired bowl" width="1200" height="800" loading="lazy" decoding="async" /></div>
      <div><p className="eyebrow">The town is still used</p><h2>Market and Food Along the Way</h2><p>Hoi An Market adds living food and trade activity to the architectural story. It is not simply another monument, and its working rhythm deserves a more purposeful visit than a quick photograph. <Link href="/hoi-an-market-guide">Use the Hoi An Market Guide</Link> for timing, ingredients and etiquette.</p><p>Food also gives walking a natural rhythm. Cao lau, banh xeo and other local dishes can be explored without turning this page into a restaurant list. <Link href="/hoi-an-food-guide">Start with the Hoi An Food Guide</Link>.</p><small>Images are HAL-generated editorial illustrations, not documentary photographs of a specific vendor, market scene or restaurant.</small></div>
    </section>

    <section className="old-town-mistakes section">
      <div><p className="eyebrow">A gentler first visit</p><h2>Common First-Time Mistakes</h2></div>
      <div className="old-town-mistake-grid">{mistakes.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>

    <section className="old-town-respect section">
      <div><p className="eyebrow">Living heritage</p><h2>Visit With Attention</h2></div>
      <div><p>Follow signs inside heritage buildings, keep worship and community spaces respectful, and ask before taking close-up photographs of people. Avoid blocking entrances or working businesses while composing photographs.</p><p>With children, plan shorter interior stops, shade and regular breaks. Watch carefully near the riverfront and wherever bicycles or motorbikes are present. <Link href="/hoi-an-with-kids">See the practical family guide</Link>.</p></div>
    </section>

    <section className="old-town-beyond section">
      <div><p className="eyebrow">One core layer, not the whole destination</p><h2>Old Town Is Only One Part of Hoi An</h2><p>Old Town provides essential orientation, but Hoi An also includes countryside, Cam Thanh, food and market culture, cooking experiences and family activities. Nearby My Son adds a different heritage context.</p></div>
      <div className="old-town-beyond-grid"><article><span>URBAN HERITAGE</span><h3>Hoi An Old Town</h3><p>A living historic trading town: streets, homes, commerce, community buildings and river relationship.</p></article><article><span>ARCHAEOLOGICAL SANCTUARY</span><h3>My Son</h3><p>A religious and archaeological landscape associated with Champa. It complements Old Town rather than replacing it.</p><Link href="/my-son-sanctuary-guide">Understand My Son Sanctuary →</Link></article></div>
    </section>

    <section className="old-town-final section">
      <div><p className="eyebrow">Where it fits</p><h2>Make Old Town Your Orientation Point</h2></div>
      <div><p>For a first visit, Old Town deserves a meaningful daylight block and, when possible, a return in the evening. On a multi-day trip, it does not need to occupy every morning and afternoon. Use it as the historical centre of a wider Hoi An experience.</p><nav aria-label="Continue planning Hoi An"><Link href="/things-to-do-in-hoi-an">Explore Things to Do</Link><Link href="/3-days-in-hoi-an">See the 3-Day Itinerary</Link><Link href="/editorial-methodology">How HAL Builds Guides</Link></nav></div>
    </section>
  </main>;
}
