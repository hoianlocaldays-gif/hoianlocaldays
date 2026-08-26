"use client";

import { FormEvent, useMemo, useState } from "react";

type Tour = {
  title: string;
  category: string;
  time: string;
  price: string;
  description: string;
};

const tours: Tour[] = [
  { title: "Cham Island Daily Tour", category: "Island", time: "08:00–14:00", price: "From 650K", description: "Island culture, snorkelling, set-menu lunch and beach time." },
  { title: "Cham Island Handicraft Tour", category: "Island", time: "08:00–14:00", price: "1,450K", description: "Small-group island crafts, snorkelling and a seafood BBQ." },
  { title: "Cham Island 2 Days / 1 Night", category: "Island", time: "2 days", price: "1,500K", description: "Homestay, two snorkelling sessions and unhurried island life." },
  { title: "Cham Island Try Dive — 1 Dive", category: "Island", time: "08:00–16:00", price: "1,900K", description: "A supervised first dive for guests without certification." },
  { title: "Cham Island Try Dive — 2 Dives", category: "Island", time: "08:00–16:00", price: "2,400K", description: "Two beginner-friendly dives with professional instruction." },
  { title: "Cham Island Fun Dive — 1 Dive", category: "Island", time: "08:00–16:00", price: "1,700K", description: "A guided reef dive for certified divers." },
  { title: "Cham Island Fun Dive — 2 Dives", category: "Island", time: "08:00–16:00", price: "2,200K", description: "Two dive sites for certified divers, with island lunch." },
  { title: "Cham Island Sea Walking", category: "Island", time: "07:30–14:00", price: "1,650K", description: "Walk beneath the sea, snorkel and relax over seafood lunch." },
  { title: "Cam Thanh Eco Tour", category: "Hoi An", time: "2.5 hours", price: "550K", description: "Basket boat, coconut forest, crab catching and a local meal." },
  { title: "Cam Thanh Cooking Class", category: "Cooking", time: "4 hours", price: "600K", description: "Market visit, basket boat and five Vietnamese dishes." },
  { title: "Hoi An City, Boat & Lantern", category: "Hoi An", time: "14:30–18:30", price: "690K", description: "Ancient Town landmarks, river boat and a flower lantern." },
  { title: "Hoi An City, Lantern & Food Tour", category: "Food", time: "15:00–19:30", price: "990K", description: "Old-town stories, lanterns and six favourite local tastes." },
  { title: "Cam Thanh & Tra Que by Bicycle", category: "Countryside", time: "5.5 hours", price: "990K", description: "Basket boat, organic farming and a four-dish cooking class." },
  { title: "Tra Que Cooking Class", category: "Cooking", time: "4.5 hours", price: "840K", description: "Market, garden work, foot massage and hands-on cooking." },
  { title: "Lantern Making & Tra Que Farming", category: "Countryside", time: "08:30–13:00", price: "790K", description: "Cycle the rice fields, farm with locals and make a lantern." },
  { title: "Cycling, Buffalo, Farming & Fishing", category: "Countryside", time: "08:00–13:00", price: "750K", description: "A playful rural morning with buffalo, basket boat and lunch." },
  { title: "Marble Mountains & Monkey Mountain", category: "Day trip", time: "07:30–13:00", price: "650K", description: "Lady Buddha, mountain caves, Am Phu Cave and Mi Quang." },
  { title: "Ba Na Hills & Golden Bridge", category: "Day trip", time: "07:30–17:30", price: "1,660K", description: "Cable car, Golden Bridge, French Village and buffet lunch." },
  { title: "Hue City Tour", category: "Day trip", time: "07:00–19:00", price: "1,290K", description: "Hai Van Pass, Khai Dinh Tomb, Citadel and Thien Mu Pagoda." },
  { title: "My Son Sunrise — Small Group", category: "Heritage", time: "05:30–10:00", price: "795K", description: "Quiet early access to the sanctuary, followed by Mi Quang." },
  { title: "My Son Morning Luxury", category: "Heritage", time: "07:30–13:30", price: "795K", description: "Sanctuary visit, rice-paper making, lunch and river boat." },
  { title: "My Son Morning — Big Group", category: "Heritage", time: "07:30–14:00", price: "650K", description: "A value group tour with a vegetarian meal and river return." },
  { title: "My Son Sunset — Small Group", category: "Heritage", time: "13:00–18:00", price: "700K", description: "Cham performance, sanctuary visit and sunset river boat." },
  { title: "Tra Nhieu & Kim Bong Eco Tour", category: "Countryside", time: "08:30–13:00", price: "750K", description: "Carpentry, boat building, woven mats and village cycling." },
];

const featured = [
  {
    title: "Cham Island Daily Tour",
    tag: "Island favourite",
    time: "08:00–14:00",
    price: "650K port · 700K Hoi An · 750K Da Nang",
    image: "/tours/hoi-an-lanterns.jpg",
    alt: "Colourful lanterns glowing in Hoi An at night",
    copy: "Speed across from Cua Dai, meet island life at Bai Lang, snorkel at Bai Xep or Hon Dai, then settle into a set-menu lunch and beach time.",
    stops: ["Biosphere reserve & Hai Tang Pagoda", "Snorkelling equipment included", "Lunch, entrance and water included"],
  },
  {
    title: "Cam Thanh Cooking Class",
    tag: "Cook like a local",
    time: "08:15–12:40 or 13:15–17:00",
    price: "600K / person",
    image: "/tours/marble-mountains.jpg",
    alt: "Green landscape near Da Nang and Hoi An",
    copy: "Start at Hoi An Market, paddle through the nipa palm forest and cook five local dishes. Vegetarian requests and food allergies can be accommodated.",
    stops: ["Hoi An Market with a local guide", "Basket boat through Cam Thanh", "Five dishes, fruit and lunch included"],
  },
  {
    title: "Hoi An City, Lantern & Food Tour",
    tag: "Old town after dark",
    time: "15:00–19:30",
    price: "990K / person",
    image: "/tours/hoi-an-lanterns.jpg",
    alt: "Hoi An lantern shops illuminated after dark",
    copy: "Follow a local through the Ancient Town, float a flower lantern on the river and taste six dishes—from banh mi and cao lau to white rose dumplings.",
    stops: ["Historic houses & Japanese Bridge", "Boat ride and flower lantern", "Six local food tastings"],
  },
  {
    title: "Hue City Tour",
    tag: "Imperial day trip",
    time: "07:00–19:00",
    price: "1,290K / person",
    image: "/tours/hue-imperial-city.jpg",
    alt: "Hue Imperial City under a blue sky",
    copy: "Travel over Hai Van Pass and pause at Lap An Lagoon before exploring Khai Dinh Tomb, the Imperial Citadel and Thien Mu Pagoda.",
    stops: ["Hoi An pickup and return", "Hue speciality lunch", "Guide, transport and entrance included"],
  },
  {
    title: "My Son Sunrise — Small Group",
    tag: "Quiet heritage morning",
    time: "05:30–10:00",
    price: "795K / person",
    image: "/tours/my-son.jpg",
    alt: "Ancient brick Cham temples at My Son Sanctuary",
    copy: "Reach the sanctuary before the heat and crowds, spend two hours with a guide among the Cham temples, then stop for a bowl of Mi Quang.",
    stops: ["Early Hoi An hotel pickup", "Two-hour guided sanctuary visit", "Breakfast and drinking water included"],
  },
  {
    title: "Ba Na Hills & Golden Bridge",
    tag: "Mountain day",
    time: "07:30–17:30",
    price: "1,660K / person",
    image: "/tours/golden-bridge.jpg",
    alt: "Golden Bridge held by giant stone hands at Ba Na Hills",
    copy: "Ride the cable car above the forest, cross the Golden Bridge, wander the French Village and enjoy a buffet before Fantasy Park.",
    stops: ["Cable car and Golden Bridge", "Buffet lunch included", "French Village & Fantasy Park"],
  },
];

const categories = ["All", ...Array.from(new Set(tours.map((tour) => tour.category)))];

export default function Home() {
  const [sent, setSent] = useState(false);
  const [category, setCategory] = useState("All");
  const [selectedTour, setSelectedTour] = useState(tours[0].title);
  const visibleTours = useMemo(() => category === "All" ? tours : tours.filter((tour) => tour.category === category), [category]);

  function chooseTour(title: string) {
    setSelectedTour(title);
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  }

  function sendToWhatsApp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      "Hello Hoi An Local Days! I would like to check availability.",
      `Name: ${data.get("name")}`,
      `Tour: ${data.get("service")}`,
      `Preferred date: ${data.get("date") || "Flexible"}`,
      `Guests: ${data.get("guests")}`,
      `Pickup: ${data.get("pickup") || "To be confirmed"}`,
      `Message: ${data.get("message") || "Please send me the latest details and final price."}`,
    ].join("\n");
    setSent(true);
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Hoi An Local Days home"><span className="brand-mark">H</span><span>Hoi An Local Days</span></a>
        <nav aria-label="Main navigation"><a href="#featured">Highlights</a><a href="#tours">All tours</a><a href="#booking-info">Booking info</a></nav>
        <a className="button button-small" href="#contact">Check availability</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Central Vietnam, personally arranged</p>
          <h1>Local days.<br />Real <em>memories.</em></h1>
          <p className="hero-intro">From coconut-forest cooking and Cham Island reefs to Hue’s imperial history—choose a ready-made experience or shape the day around you.</p>
          <div className="hero-actions"><a className="button" href="#featured">Find your tour <span>↓</span></a><a className="text-link" href="#contact">Ask a local</a></div>
          <div className="trust-row"><span><b>✓</b> No prepayment</span><span><b>✓</b> Clear published prices</span><span><b>✓</b> English support</span></div>
        </div>
        <figure className="hero-photo">
          <img src="/tours/hoi-an-lanterns.jpg" alt="Warm colourful lanterns glowing in Hoi An at night" />
          <figcaption><span>24 ways to explore</span><strong>Hoi An · Da Nang · Hue</strong></figcaption>
        </figure>
      </section>

      <section className="promise-strip"><p>Book with confidence</p><strong>No deposit. No pressure. Final details confirmed personally.</strong><span>Replies within 24 hours</span></section>

      <section className="featured section" id="featured">
        <div className="section-heading"><div><p className="eyebrow"><span /> Hand-picked experiences</p><h2>Six good reasons<br />to stay <em>longer.</em></h2></div><p>These are the clearest starting points from the current tour programme. Every itinerary can be checked and adjusted before you decide.</p></div>
        <div className="featured-list">
          {featured.map((tour, index) => (
            <article className="feature-card" key={tour.title}>
              <div className="feature-image"><img src={tour.image} alt={tour.alt} /><span>{String(index + 1).padStart(2, "0")}</span></div>
              <div className="feature-content"><p className="card-kicker">{tour.tag}</p><h3>{tour.title}</h3><div className="tour-meta"><span>{tour.time}</span><strong>{tour.price}</strong></div><p>{tour.copy}</p><ul>{tour.stops.map((stop) => <li key={stop}>{stop}</li>)}</ul><button className="text-button" onClick={() => chooseTour(tour.title)}>Plan this tour <span>→</span></button></div>
            </article>
          ))}
        </div>
      </section>

      <section className="catalog section" id="tours">
        <div className="section-heading compact"><div><p className="eyebrow"><span /> Complete tour menu</p><h2>Pick your<br /><em>kind of day.</em></h2></div><p>Prices below are published adult prices from the 2025 programme. We will reconfirm availability, pickup and the current final price before booking.</p></div>
        <div className="filters" aria-label="Filter tours by category">{categories.map((item) => <button className={category === item ? "active" : ""} key={item} onClick={() => setCategory(item)}>{item}</button>)}</div>
        <div className="tour-grid">{visibleTours.map((tour) => <article className="tour-card" key={tour.title}><div><span className="category-label">{tour.category}</span><span className="tour-time">{tour.time}</span></div><h3>{tour.title}</h3><p>{tour.description}</p><footer className="tour-footer"><strong>VND {tour.price}</strong><button onClick={() => chooseTour(tour.title)} aria-label={`Plan ${tour.title}`}>↗</button></footer></article>)}</div>
        <p className="price-disclaimer">Reference price list effective in 2025 · VAT, holiday/Tet surcharges and personal expenses are not included unless stated · Ask us to confirm the current price.</p>
      </section>

      <section className="booking-info section" id="booking-info">
        <div><p className="eyebrow light"><span /> Good to know</p><h2>Simple terms.<br />No <em>surprises.</em></h2><p>There is no online payment. Send your preferred tour and date, review the confirmed details with a real person, and only proceed when you are comfortable.</p></div>
        <div className="info-grid">
          <article><span>01</span><h3>Children</h3><p>Age and height policies vary by activity. Tell us each child’s age or height and we will confirm the exact rate.</p></article>
          <article><span>02</span><h3>Cancellation</h3><p>More than 72 hours: free. Around 48 hours: 30%; 24 hours: 50%; same day: 70% of the tour price.</p></article>
          <article><span>03</span><h3>Custom plans</h3><p>Private cooking and custom Hoi An–Da Nang itineraries are quoted after we know your group, timing and interests.</p></article>
          <article><span>04</span><h3>Diet & pickup</h3><p>Share allergies, vegetarian needs and your hotel area. Pickup coverage differs between tours.</p></article>
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="contact-copy"><p className="eyebrow light"><span /> Let’s plan your day</p><h2>Send the idea.<br />We’ll check the <em>details.</em></h2><p>Your message opens in WhatsApp for review before sending. No payment and no automatic booking.</p><div className="contact-reassurance"><span>Usually replies within 24 hours</span><span>Personal, English-friendly support</span></div></div>
        <form className="inquiry-form" onSubmit={sendToWhatsApp}>
          <div className="field-row"><label>Your name<input name="name" placeholder="How should we call you?" required /></label><label>Guests<input name="guests" type="number" min="1" max="30" defaultValue="2" required /></label></div>
          <label>Tour<select name="service" value={selectedTour} onChange={(event) => setSelectedTour(event.target.value)}>{tours.map((tour) => <option key={tour.title}>{tour.title}</option>)}<option>Private cooking in Hoi An</option><option>Custom Hoi An – Da Nang tour</option><option>Help me choose</option></select></label>
          <div className="field-row"><label>Preferred date<input name="date" type="date" /></label><label>Pickup area<input name="pickup" placeholder="Hoi An / Da Nang" /></label></div>
          <label>Anything we should know?<textarea name="message" rows={3} placeholder="Children, dietary needs, interests…" /></label>
          <button className="button form-button" type="submit">Continue in WhatsApp <span>↗</span></button>
          <p className="form-note" aria-live="polite">{sent ? "WhatsApp opened—please review and send your message." : "Your details stay on this device until you send the WhatsApp message."}</p>
        </form>
      </section>

      <footer className="site-footer"><a className="brand footer-brand" href="#top"><span className="brand-mark">H</span><span>Hoi An Local Days</span></a><p>Personal tours & local experiences in Central Vietnam.</p><div><a href="#featured">Highlights</a><a href="#tours">All tours</a><a href="#contact">Contact</a></div><p>© 2026 Hoi An Local Days</p></footer>
      <aside className="credits"><strong>Photo credits:</strong> Hoi An lanterns by <a href="https://commons.wikimedia.org/wiki/File:Hoi_An_lanterns_at_night.jpg" target="_blank" rel="noreferrer">viajar24h.com (CC BY 2.0)</a>; Marble Mountains by <a href="https://commons.wikimedia.org/wiki/File:Marble_Mountains.jpg" target="_blank" rel="noreferrer">Chrismiceli (CC0)</a>; Hue Imperial City by <a href="https://commons.wikimedia.org/wiki/File:Hue_Imperial_City,_February_2025.jpg" target="_blank" rel="noreferrer">SerChevalerie (CC0)</a>; My Son and Golden Bridge via <a href="https://commons.wikimedia.org/" target="_blank" rel="noreferrer">Wikimedia Commons</a>.</aside>
    </main>
  );
}
