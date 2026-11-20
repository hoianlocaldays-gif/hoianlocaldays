import Script from "next/script";
import Link from "next/link";
import { breadcrumbJsonLd } from "@/lib/jsonld";

const bookingUrl = "https://www.getyourguide.com/s/?q=Hoi+An&lc=831&et=1090764&searchSource=3&src=search_bar&partner_id=QJ5SJBN";

export function CoffeeMakingClassGuidePage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", url: "https://hoianlocaldays.com" },
    { name: "Hoi An Food Guide", url: "https://hoianlocaldays.com/hoi-an-food-guide" },
    { name: "Coffee Making Class", url: "https://hoianlocaldays.com/coffee-making-class-hoi-an" },
  ]);

  return <main className="coffee-class-page">
    <Script src="https://widget.getyourguide.com/dist/pa.umd.production.min.js" strategy="afterInteractive" data-gyg-partner-id="QJ5SJBN" />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    <div className="breadcrumb"><Link href="/">Home</Link><span>›</span><Link href="/hoi-an-food-guide">Food Guide</Link><span>›</span><span>Coffee Making Class</span></div>

    <section className="coffee-class-hero section"><div><p className="eyebrow">Hoi An food & drink experience</p><h1>Hoi An Coffee Making Class: What to Expect</h1><p>A Vietnamese coffee workshop turns a café stop into a hands-on lesson. Before booking, understand the likely format, caffeine load, drink choices and what will still vary by provider.</p></div><aside><span>Quick answer</span><p>Choose a coffee class if you want a short, practical activity and techniques you can repeat at home—not simply a guided café crawl.</p></aside></section>

    <nav className="coffee-class-jump section" aria-label="On this page"><a href="#format">Class format</a><a href="#coffee">What you may make</a><a href="#fit">Traveler fit</a><a href="#tickets">Check availability</a></nav>

    <section className="coffee-class-intro section" id="format"><div><p className="eyebrow">The format</p><h2>More useful than a tasting alone</h2></div><div><p>A good coffee-making class explains both method and result. Instead of receiving a finished drink, you measure ingredients, use the equipment and see how brewing time, temperature and texture affect the cup.</p><p>Many Hoi An workshops introduce the metal <em>phin</em> filter and one or more modern Vietnamese café styles. The exact drinks, duration, group size, venue and included ingredients depend on the activity you select. Treat the booking page—not a generic guide—as the final source for inclusions.</p><p>This is normally a focused workshop rather than a full-day food experience. It can fit naturally between an Old Town walk and dinner, or provide an indoor break from heat or rain.</p></div></section>

    <section className="coffee-class-method section" id="coffee"><div><p className="eyebrow">What you learn</p><h2>From phin brewing to specialty drinks</h2><p>Product menus change, but these are the techniques commonly associated with Hoi An coffee workshops.</p></div><div className="coffee-class-cards"><article><span>01</span><h3>Phin filter basics</h3><p>Understand the grounds, bloom, water and slow-drip method behind a strong Vietnamese coffee base.</p></article><article><span>02</span><h3>Milk and sweetness</h3><p>See how condensed milk changes body and balance rather than treating it as a decorative addition.</p></article><article><span>03</span><h3>Texture-led drinks</h3><p>Depending on your class, this may include egg, coconut or salt coffee and the technique that gives each drink its structure.</p></article><article><span>04</span><h3>Repeatable recipes</h3><p>Ask whether recipes are provided and which ingredients or tools you will need to recreate the drinks at home.</p></article></div></section>

    <section className="coffee-class-fit section" id="fit"><div><p className="eyebrow">Traveler fit</p><h2>Who should book one?</h2></div><div className="coffee-class-fit-grid"><article><h3>A good match</h3><ul><li>Coffee drinkers who want hands-on instruction</li><li>Travelers looking for a compact indoor activity</li><li>Couples, friends or solo visitors who enjoy food culture</li><li>Anyone interested in bringing a practical technique home</li></ul></article><article><h3>Check carefully</h3><ul><li>People sensitive to caffeine or planning a late class</li><li>Travelers avoiding egg, dairy or specific allergens</li><li>Families with children who may not drink the finished coffee</li><li>Visitors expecting a farm, roasting factory or full food tour</li></ul></article></div></section>

    <section className="coffee-class-questions section"><div><p className="eyebrow">Before booking</p><h2>Five details worth checking</h2></div><ol><li><span>01</span><p><strong>How many drinks do you prepare?</strong> A tasting, one chosen drink and several full recipes are very different caffeine commitments.</p></li><li><span>02</span><p><strong>Do you make each drink yourself?</strong> Confirm whether it is hands-on or partly a demonstration.</p></li><li><span>03</span><p><strong>Which ingredients are used?</strong> Egg, condensed milk, coconut and other ingredients require advance checking for allergies or dietary needs.</p></li><li><span>04</span><p><strong>Where is the meeting point?</strong> Do not assume hotel pickup is included unless the product says so.</p></li><li><span>05</span><p><strong>What can you take home?</strong> Recipes may be more valuable than a souvenir if you want to repeat the methods.</p></li></ol></section>

    <section className="coffee-class-booking section" id="tickets"><div><p className="eyebrow">Class availability</p><h2>Check the coffee-making class</h2><p>Use the widget to review the current duration, drinks, meeting point, age policy, availability and cancellation terms for the selected product.</p><small>Hoi An Local Days may earn a commission if you book through this widget, at no extra cost to you.</small></div><div className="coffee-class-widget"><div data-gyg-href="https://widget.getyourguide.com/default/activities.frame" data-gyg-locale-code="en-US" data-gyg-widget="activities" data-gyg-number-of-items="1" data-gyg-partner-id="QJ5SJBN" data-gyg-tour-ids="1090764"><span>Powered by <a target="_blank" rel="sponsored noopener noreferrer" href={bookingUrl}>GetYourGuide</a></span></div><a className="primary-button" target="_blank" rel="sponsored noopener noreferrer" href={bookingUrl}>View class on GetYourGuide</a></div></section>

    <section className="coffee-class-final section"><div><p className="eyebrow">Continue exploring</p><h2>Connect the drink to the wider food trip</h2></div><div><p>Use the coffee class as one focused workshop, then leave enough room to understand Hoi An&apos;s markets, dishes and cooking traditions separately.</p><nav><Link href="/hoi-an-food-guide">Read the Hoi An Food Guide</Link><Link href="/hoi-an-market-guide">Plan a market visit</Link><Link href="/cooking-classes-hoi-an">See the Tra Que cooking class</Link></nav></div></section>

  </main>;
}
