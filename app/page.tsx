"use client";

import { FormEvent, useState } from "react";

const services = [
  {
    number: "01",
    title: "Market, Basket Boat & Cooking Class",
    description:
      "Shop with a local at the morning market, glide through the coconut forest in a basket boat, then cook and enjoy classic Vietnamese dishes.",
    price: "VND 700K / person",
    note: "Free pickup in Hoi An",
    featured: true,
  },
  {
    number: "02",
    title: "Custom Hoi An – Da Nang Tour",
    description:
      "A private day shaped around your pace—from old-town alleys and craft villages to beaches, cafés and mountain views.",
    price: "Custom quote",
    note: "Based on your itinerary",
  },
  {
    number: "03",
    title: "Cham Island Tour",
    description:
      "A refreshing island escape with coastal scenery, local life and time to swim or snorkel in clear water.",
    price: "From VND 650K",
    note: "Sample price",
  },
  {
    number: "04",
    title: "Private Cooking in Hoi An",
    description:
      "A relaxed, hands-on cooking experience made private for couples, families or small groups.",
    price: "From VND 900K",
    note: "Sample price",
  },
  {
    number: "05",
    title: "Hue City Tour",
    description:
      "Discover imperial history, riverside landmarks and local flavours on a comfortable day trip to Hue.",
    price: "From VND 1.2M",
    note: "Sample price",
  },
];

export default function Home() {
  const [sent, setSent] = useState(false);

  function sendToWhatsApp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      "Hello! I would like to plan a Hoi An experience.",
      `Name: ${data.get("name")}`,
      `Service: ${data.get("service")}`,
      `Preferred date: ${data.get("date") || "Flexible"}`,
      `Guests: ${data.get("guests")}`,
      `Message: ${data.get("message") || "Please send me more details."}`,
    ].join("\n");

    setSent(true);
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Hoi An Local Days home">
          <span className="brand-mark">H</span>
          <span>Hoi An Local Days</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="button button-small" href="#contact">Plan my trip</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Local experiences, personally arranged</p>
          <h1>Meet Hoi An<br />like a <em>local.</em></h1>
          <p className="hero-intro">
            Friendly, flexible tours and cooking experiences for curious travellers—planned by a local you can talk to and trust.
          </p>
          <div className="hero-actions">
            <a className="button" href="#contact">Plan my experience <span aria-hidden="true">→</span></a>
            <a className="text-link" href="#services">Explore all services</a>
          </div>
          <div className="trust-row" aria-label="Booking benefits">
            <span><b>✓</b> No prepayment</span>
            <span><b>✓</b> Personal support</span>
            <span><b>✓</b> Flexible plans</span>
          </div>
        </div>

        <div className="hero-art" aria-label="Abstract illustration inspired by Hoi An river and basket boats" role="img">
          <div className="sun" />
          <div className="arch arch-one" />
          <div className="arch arch-two" />
          <div className="host-shape"><span /></div>
          <div className="river-line river-one" />
          <div className="river-line river-two" />
          <div className="boat"><span /></div>
          <div className="hero-stamp"><strong>700K</strong><small>COOKING CLASS</small></div>
          <p className="art-caption">Market mornings · Coconut forest · Home-style cooking</p>
        </div>
      </section>

      <section className="promise-strip" aria-label="Our promise">
        <p>Book with confidence</p>
        <strong>No deposit. No pressure. Just a friendly plan made around you.</strong>
        <span>Replies within 24 hours</span>
      </section>

      <section className="services section" id="services">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span /> Experiences</p>
            <h2>Choose your kind<br />of <em>Hoi An day.</em></h2>
          </div>
          <p>Start with one of our favourite local experiences or tell us what you would love to see. Every plan can be adjusted for your group.</p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className={`service-card ${service.featured ? "featured" : ""}`} key={service.title}>
              <div className="service-top"><span>{service.number}</span><span className="service-arrow">↗</span></div>
              <div>
                {service.featured && <p className="card-kicker">Most loved experience</p>}
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              <div className="price-row"><strong>{service.price}</strong><span>{service.note}</span></div>
            </article>
          ))}
        </div>
        <p className="pricing-note">* Prices marked “sample price” are placeholders and will be confirmed before publishing.</p>
      </section>

      <section className="about section" id="about">
        <div className="about-visual" aria-hidden="true">
          <div className="about-sun" />
          <div className="about-door"><div className="about-person"><span /></div></div>
          <p>Local knowledge.<br />Honest help.</p>
        </div>
        <div className="about-copy">
          <p className="eyebrow"><span /> Your local host</p>
          <h2>A friendly face<br />before you even <em>arrive.</em></h2>
          <p className="large-copy">Planning in a new country can feel uncertain. Here, you speak directly with a local host—not a faceless booking platform.</p>
          <p>Ask questions, adjust your itinerary and understand the price before you decide. There is no advance payment, and every detail is confirmed with you personally.</p>
          <div className="about-points">
            <span><b>01</b> Clear, honest pricing</span>
            <span><b>02</b> Flexible for couples & groups</span>
            <span><b>03</b> Support through WhatsApp</span>
          </div>
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="contact-copy">
          <p className="eyebrow light"><span /> Let’s plan your day</p>
          <h2>Tell us what<br />sounds <em>good.</em></h2>
          <p>Share a few details. Your message will open in WhatsApp so you can review it before sending—no payment required.</p>
          <div className="contact-reassurance">
            <span>Usually replies within 24 hours</span>
            <span>English-friendly support</span>
          </div>
        </div>

        <form className="inquiry-form" onSubmit={sendToWhatsApp}>
          <div className="field-row">
            <label>Your name<input name="name" type="text" placeholder="How should we call you?" required /></label>
            <label>Number of guests<input name="guests" type="number" min="1" max="30" defaultValue="2" required /></label>
          </div>
          <label>Experience
            <select name="service" defaultValue="Market, Basket Boat & Cooking Class">
              {services.map((service) => <option key={service.title}>{service.title}</option>)}
              <option>Help me choose</option>
            </select>
          </label>
          <label>Preferred date<input name="date" type="date" /></label>
          <label>Anything we should know?<textarea name="message" rows={3} placeholder="Pickup area, interests, children, dietary needs…" /></label>
          <button className="button form-button" type="submit">Continue in WhatsApp <span aria-hidden="true">↗</span></button>
          <p className="form-note" aria-live="polite">{sent ? "WhatsApp opened—please review and send your message." : "Your details stay on your device until you send the WhatsApp message."}</p>
        </form>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><span className="brand-mark">H</span><span>Hoi An Local Days</span></a>
        <p>Personal tours & cooking experiences in Central Vietnam.</p>
        <div><a href="#services">Services</a><a href="#about">About</a><a href="#contact">Contact</a></div>
        <p>© 2026 Hoi An Local Days</p>
      </footer>
    </main>
  );
}
