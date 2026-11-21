import Script from "next/script";
import Link from "next/link";
import { TrackedLink } from "@/components/tracked-link";

const cars = [
  { route: "hoian", mode: "One way", title: "Around Hoi An", copy: "A private transfer between hotels, Old Town, the beach or nearby Hoi An areas.", price: "100,000 VND" },
  { route: "airport", mode: "One way", title: "Airport transfers", copy: "Da Nang Airport to Hoi An, or Hoi An to the airport.", price: "350,000 VND" },
  { route: "bana", mode: "Return from Hoi An", title: "Ba Na Hills", copy: "A private return journey for your day at Ba Na Hills.", price: "1,000,000 VND" },
  { route: "myson", mode: "Return from Hoi An", title: "My Son Sanctuary", copy: "Travel to My Son with your own car and driver.", price: "800,000 VND" },
  { route: "hue", mode: "Return from Hoi An", title: "Hai Van Pass & Hue", copy: "A return journey via Hai Van Pass, with stops agreed ahead.", price: "2,200,000 VND" },
  { route: "custom", mode: "Your route", title: "Custom private trip", copy: "Tell us where you want to go, your stops and timing. We will confirm a suitable vehicle and price.", price: "On request" },
];

const partnerIdeas = [
  { eyebrow: "An evening out", title: "Hoi An Memories Show", copy: "View this experience and booking details on GetYourGuide.", query: "hoi an memories", href: "https://www.getyourguide.com/s/?q=hoi%20an%20memories&partner_id=QJ5SJBN" },
  { eyebrow: "A countryside stop", title: "Duck Stop Eco Farm Experience", copy: "Feed the ducks, walk with the flock and check the current farm experience details before booking.", query: "hoi an duck stop", tourId: "1209925", href: "https://www.getyourguide.com/hoi-an-l831/hoi-an-duck-stop-eco-farm-experience-with-duck-feeding-t1209925/?partner_id=QJ5SJBN&utm_medium=online_publisher&cmp=hal-duck-stop-gyg" },
  { eyebrow: "On the water", title: "Basket boat experience", copy: "View this experience and booking details on GetYourGuide.", query: "basket boat", href: "https://www.getyourguide.com/s/?q=basket%20boat&partner_id=QJ5SJBN" },
];

export function ServicesHomePage() {
  return <main className="services-home">
    <Script src="https://widget.getyourguide.com/dist/pa.umd.production.min.js" strategy="afterInteractive" data-gyg-partner-id="QJ5SJBN" />

    <section className="services-hero">
      <img src="/images/services/hoi-an-riverside.jpg" alt="Yellow riverside buildings and wooden boats in Hoi An" width="1600" height="1000" fetchPriority="high" />
      <div className="services-wrap services-hero-content">
        <p className="services-eyebrow">Hoi An Local Days</p>
        <h1>Your Hoi An days,<br/><em>made local.</em></h1>
        <p>Discover local experiences, share good food and explore at your own pace. We bring together a few handpicked ways to enjoy Hoi An, with private cars to help you get there.</p>
        <div className="services-actions">
          <a className="services-button" href="#cooking">Explore local experiences</a>
          <TrackedLink className="services-button services-button-outline" href="/transfer" sourcePage="homepage" destinationPage="/transfer" section="hero" ctaId="home_private_car">Find your private car</TrackedLink>
        </div>
        <small>Local experiences · Private cars · A local point of contact</small>
      </div>
    </section>

    <div className="services-wrap services-strip">
      <p><strong>Handpicked local experiences</strong>A few good ways to enjoy Hoi An.</p>
      <p><strong>Private cars, clear prices</strong>Hoi An transfers, airport trips and custom routes.</p>
      <p><strong>A local point of contact</strong>Help with the details before your day.</p>
    </div>

    <section className="services-section" id="cooking">
      <div className="services-wrap">
        <div className="services-heading"><div><p className="services-eyebrow">Our featured cooking experience</p><h2>Make room at the table.</h2></div><p>One garden, the same welcoming kitchen. Choose a cooking class or add farming to your day.</p></div>
        <div className="services-cooking-grid">
          <figure><img src="/images/services/traque-guests.webp" alt="Guests showing the Vietnamese dishes they prepared at Tra Que Garden" width="1200" height="900" loading="lazy"/><figcaption>Tra Que Garden Restaurant & Vietnamese Cooking Class<br/>Tra Que Vegetable Village, Hoi An</figcaption></figure>
          <div className="services-feature-copy">
            <h3>Tra Que Garden</h3>
            <p>Prepare green papaya salad, fried spring rolls, banh xeo and a dipping sauce with an English-speaking local host. Then sit down and enjoy the meal together.</p>
            <div className="services-tags"><span>Maximum 10 guests</span><span>Hands-on cooking</span><span>Meal & recipes included</span><span>No prepayment required</span></div>
            <div className="services-package-grid">
              <article className="is-featured"><p className="services-eyebrow">Farming + cooking · 3 hours</p><h4>Full Experience</h4><p>Add time in the gardens, a foot and shoulder massage, and local pickup.</p><strong>700,000 VND</strong><small>per adult</small><a className="services-button" href="https://traquegarden.hoianlocaldays.com/?utm_source=hoi_an_local_days&utm_medium=referral&utm_campaign=hal_services#booking" target="_blank" rel="noopener noreferrer">View dates & reserve</a></article>
              <article><p className="services-eyebrow">Cooking · 2 hours</p><h4>Cooking Only</h4><p>Join at the garden for the same dishes, cooking guidance and shared meal.</p><strong>600,000 VND</strong><small>per adult · no pickup</small><a className="services-button services-button-light" href="https://traquegarden.hoianlocaldays.com/?utm_source=hoi_an_local_days&utm_medium=referral&utm_campaign=hal_services#booking" target="_blank" rel="noopener noreferrer">View dates & reserve</a></article>
            </div>
            <p className="services-note"><strong>No prepayment required · Pay on arrival.</strong> Your reservation is made on the Tra Que Garden website. Check current times, pickup details and dietary arrangements there before booking.</p>
            <TrackedLink className="services-text-link" href="/cooking-classes-hoi-an" sourcePage="homepage" destinationPage="/cooking-classes-hoi-an" section="featured_cooking" ctaId="home_cooking">Explore the Tra Que Garden experience</TrackedLink>
          </div>
        </div>
      </div>
    </section>

    <section className="services-section services-cars" id="cars">
      <div className="services-wrap">
        <div className="services-heading"><div><p className="services-eyebrow">Airport transfers & private cars</p><h2>Your group. Your own car.</h2></div><p>Choose your route and vehicle. See the rate before sending your request, with a driver just for your group.</p></div>
        <div className="services-car-grid">{cars.map((car) => <article key={car.route}><small>{car.mode}</small><h3>{car.title}</h3><p>{car.copy}</p><div><span>From / per vehicle</span><strong>{car.price}</strong></div><TrackedLink className="services-button services-button-dark" href={`/transfer?route=${car.route}`} sourcePage="homepage" destinationPage="/transfer" section="private_cars" ctaId={`home_car_${car.route}`}>Choose your car</TrackedLink></article>)}</div>
        <div className="services-pay-note"><p><strong>No prepayment required.</strong> Private car with a driver. Attraction tickets, meals and a guide are separate.</p><TrackedLink href="/transfer" sourcePage="homepage" destinationPage="/transfer" section="private_cars" ctaId="home_car_all_rates">See all rates & request a car</TrackedLink></div>
      </div>
    </section>

    <section className="services-section" id="more"><div className="services-wrap">
      <div className="services-heading"><div><p className="services-eyebrow">If you have a little more time</p><h2>A few ideas for the rest of your stay.</h2></div><p>Optional additions to your plans. These experiences are booked through a partner platform.</p></div>
      <div className="services-partners">{partnerIdeas.map((idea) => <article key={idea.title}><small>{idea.eyebrow}</small><h3>{idea.title}</h3><p>{idea.copy}</p><div className="services-gyg-widget"><div data-gyg-href="https://widget.getyourguide.com/default/activities.frame" data-gyg-locale-code="en-US" data-gyg-widget="activities" data-gyg-number-of-items="1" data-gyg-partner-id="QJ5SJBN" data-gyg-q={idea.query} data-gyg-tour-ids={"tourId" in idea ? idea.tourId : undefined}><span>Powered by <a target="_blank" rel="sponsored noopener noreferrer" href={idea.href}>GetYourGuide</a></span></div></div><a className="services-text-link" target="_blank" rel="sponsored noopener noreferrer" href={idea.href}>View on GetYourGuide</a></article>)}</div>
    </div></section>

    <section className="services-local-note services-wrap"><div><p className="services-eyebrow">A little local help</p><h2>A few good choices.<br/>Room to enjoy your day.</h2></div><div><p>Start with the experience that feels right for you. We keep our selection focused, explain what you’re booking, and help with the practical details.</p><a href="https://wa.me/84904885502?text=Hello%20Hoi%20An%20Local%20Days%2C%20I%20would%20like%20some%20help%20planning%20my%20Hoi%20An%20days." target="_blank" rel="noopener noreferrer">Ask us on WhatsApp: +84 904 885 502</a></div></section>

    <nav className="services-guide-links services-wrap" aria-label="Useful planning guides"><span>Useful before you book:</span><Link href="/hoi-an-old-town-guide">Hoi An Old Town</Link><Link href="/how-many-days-in-hoi-an">How many days?</Link><TrackedLink href="/3-days-in-hoi-an" sourcePage="homepage" destinationPage="/3-days-in-hoi-an" section="useful_guides" ctaId="home_itinerary">Three days in Hoi An</TrackedLink><Link href="/hoi-an-food-guide">Hoi An food guide</Link><TrackedLink href="/basket-boat-hoi-an" sourcePage="homepage" destinationPage="/basket-boat-hoi-an" section="useful_guides" ctaId="home_basket_boat">Basket boat guide</TrackedLink><TrackedLink href="/hoi-an-with-kids" sourcePage="homepage" destinationPage="/hoi-an-with-kids" section="useful_guides" ctaId="home_kids">Hoi An with kids</TrackedLink><TrackedLink href="/things-to-do-in-hoi-an" sourcePage="homepage" destinationPage="/things-to-do-in-hoi-an" section="useful_guides" ctaId="home_things_to_do">More things to do</TrackedLink></nav>
    <a className="services-floating-whatsapp" href="https://wa.me/84904885502?text=Hello%20Hoi%20An%20Local%20Days%2C%20I%20would%20like%20some%20local%20help." target="_blank" rel="noopener noreferrer" aria-label="Ask Hoi An Local Days on WhatsApp">WhatsApp</a>
  </main>;
}
