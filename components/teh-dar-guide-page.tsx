import Script from "next/script";
import Link from "next/link";
import { breadcrumbJsonLd } from "@/lib/jsonld";

const bookingUrl = "https://www.getyourguide.com/s/?q=Hoi%20An%3A%20Teh%20Dar&partner_id=QJ5SJBN";

export function TehDarGuidePage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", url: "https://hoianlocaldays.com" },
    { name: "Things to Do in Hoi An", url: "https://hoianlocaldays.com/things-to-do-in-hoi-an" },
    { name: "Teh Dar Show", url: "https://hoianlocaldays.com/teh-dar-show-hoi-an" },
  ]);

  return <main className="teh-dar-page">
    <Script src="https://widget.getyourguide.com/dist/pa.umd.production.min.js" strategy="afterInteractive" data-gyg-partner-id="QJ5SJBN" />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    <div className="breadcrumb"><Link href="/">Home</Link><span>›</span><Link href="/things-to-do-in-hoi-an">Things to Do</Link><span>›</span><span>Teh Dar</span></div>

    <section className="teh-dar-hero section">
      <div><p className="eyebrow">Hoi An evening guide</p><h1>Teh Dar Show in Hoi An: What to Expect</h1><p>Teh Dar is a compact, high-energy bamboo circus inspired by cultures of Vietnam&apos;s Central Highlands. This guide explains the performance style, venue, timing and traveler fit before you choose a ticket.</p></div>
      <aside><span>Quick answer</span><p>Choose Teh Dar if you want an indoor cultural performance with acrobatics, live music and very little dependence on spoken language.</p></aside>
    </section>

    <nav className="teh-dar-jump section" aria-label="On this page"><a href="#experience">The experience</a><a href="#fit">Who it suits</a><a href="#planning">Practical planning</a><a href="#tickets">Check tickets</a></nav>

    <section className="teh-dar-overview section" id="experience"><div><p className="eyebrow">The experience</p><h2>What is Teh Dar?</h2></div><div><p>Teh Dar is a Vietnamese bamboo-circus production by Lune Production. It combines contemporary circus and dance, bamboo structures, athletic movement and music performed live with instruments associated with Vietnam&apos;s Central Highlands.</p><p>The performance is largely visual and musical rather than dialogue-led. That makes it accessible to international visitors without turning the evening into a conventional narrated history lesson. Expect rhythm, physical storytelling and stage imagery—not a literal documentary account of life in the highlands.</p><p>The official production describes the name as “going in a circle,” connecting the show to cycles of community and life. The most useful way to approach it is as contemporary performance inspired by cultural material, rather than as a museum presentation.</p></div></section>

    <section className="teh-dar-format section"><div><p className="eyebrow">At a glance</p><h2>A focused one-hour evening</h2><p>The format is easier to fit into a Hoi An evening than a large excursion.</p></div><div className="teh-dar-facts"><article><span>Format</span><strong>Indoor bamboo circus</strong><p>Acrobatics, movement, bamboo staging and live music.</p></article><article><span>Length</span><strong>About 60 minutes</strong><p>Allow extra time for arrival and ticket collection.</p></article><article><span>Venue</span><strong>Hoi An Lune Center</strong><p>1A Nguyen Phuc Chu, across the river from the Ancient Town.</p></article><article><span>Language</span><strong>Mostly non-verbal</strong><p>The experience does not rely on understanding Vietnamese dialogue.</p></article></div></section>

    <section className="teh-dar-fit section" id="fit"><div><p className="eyebrow">Traveler fit</p><h2>Who is it best for?</h2></div><div className="teh-dar-fit-grid"><article><h3>A strong match</h3><ul><li>Travelers interested in contemporary circus or live performance</li><li>Visitors wanting an indoor option during uncertain weather</li><li>Mixed-language groups who prefer visual storytelling</li><li>People who want one structured activity without losing the whole evening</li></ul></article><article><h3>Think twice</h3><ul><li>Anyone expecting a detailed narrated history of the Central Highlands</li><li>Very young children sensitive to loud percussion or intense movement</li><li>Travelers who prefer casual, drop-in entertainment rather than a ticketed show</li><li>Visitors whose date does not match the current performance calendar</li></ul></article></div></section>

    <section className="teh-dar-compare section"><div><p className="eyebrow">Choosing an evening show</p><h2>Teh Dar or a larger spectacle?</h2></div><div><p>Teh Dar is the more intimate choice: a small indoor venue, close stage views and a performance built around acrobatics, bamboo and live sound. A large outdoor production such as Hoi An Memories is a different kind of evening, with a wider stage and greater emphasis on scale.</p><p>Choose based on format rather than trying to rank them as interchangeable shows. Teh Dar fits travelers who value physical theatre and a compact evening; a large outdoor show fits visitors who want spectacle and scale.</p></div></section>

    <section className="teh-dar-planning section" id="planning"><div><p className="eyebrow">Practical planning</p><h2>Before you book</h2></div><div><ol><li><span>01</span><div><h3>Check the exact date</h3><p>Lune Production rotates performances and publishes a live calendar. Do not assume Teh Dar runs every night.</p></div></li><li><span>02</span><div><h3>Confirm the start time</h3><p>Recent official listings commonly show an early-evening performance, but your ticket is the authority for the selected date.</p></div></li><li><span>03</span><div><h3>Arrive early</h3><p>Leave time to find the entrance, collect or display tickets and settle before the performance begins. Late entry may be restricted.</p></div></li><li><span>04</span><div><h3>Plan dinner around the show</h3><p>The Lune Center is near the Ancient Town and An Hoi, so an early dinner or a meal after the performance is practical.</p></div></li><li><span>05</span><div><h3>Check child policies</h3><p>Age rules and child-ticket conditions can change. Confirm them on the booking page, especially for younger children.</p></div></li></ol></div></section>

    <section className="teh-dar-booking section" id="tickets"><div><p className="eyebrow">Tickets & availability</p><h2>Check Teh Dar for your date</h2><p>Availability, seating categories, prices and cancellation terms are set by the booking provider. Review the exact product details before paying.</p><small>Hoi An Local Days may earn a commission if you book through this widget, at no extra cost to you.</small></div><div className="teh-dar-widget"><div data-gyg-href="https://widget.getyourguide.com/default/activities.frame" data-gyg-locale-code="en-US" data-gyg-widget="activities" data-gyg-number-of-items="1" data-gyg-partner-id="QJ5SJBN" data-gyg-q="Hoi An: Teh Dar"><span>Powered by <a target="_blank" rel="sponsored noopener noreferrer" href={bookingUrl}>GetYourGuide</a></span></div><a className="primary-button" target="_blank" rel="sponsored noopener noreferrer" href={bookingUrl}>View tickets on GetYourGuide</a></div></section>

    <section className="teh-dar-final section"><div><p className="eyebrow">Build the evening</p><h2>Keep the rest of the plan simple</h2></div><div><p>Combine the show with an unhurried Old Town walk and one meal rather than stacking several timed activities into the same evening.</p><nav><Link href="/hoi-an-old-town-guide">Plan an Old Town walk</Link><Link href="/hoi-an-food-guide">Choose what to eat</Link><Link href="/things-to-do-in-hoi-an">Explore more things to do</Link></nav></div></section>

  </main>;
}
