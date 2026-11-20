"use client";

import { useEffect, useMemo, useState } from "react";

const vehicles = ["4-seat car", "7-seat car", "16-seat van"] as const;
const rates = {
  airport: { title: "Airport transfer", journey: "One way", prices: [350000, 450000, 650000] },
  bana: { title: "Ba Na Hills", journey: "Return from Hoi An", prices: [1000000, 1200000, 1600000] },
  myson: { title: "My Son Sanctuary", journey: "Return from Hoi An", prices: [800000, 900000, 1300000] },
  hue: { title: "Hai Van Pass & Hue", journey: "Return from Hoi An", prices: [2200000, 2400000, 3300000] },
} as const;

type RouteKey = keyof typeof rates;

function money(value: number) { return `${value.toLocaleString("en-US")} VND`; }

export function PrivateCarPage() {
  const [route, setRoute] = useState<RouteKey>("airport");
  const [vehicle, setVehicle] = useState(0);
  const [direction, setDirection] = useState("arrival");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(2);
  const [luggage, setLuggage] = useState(1);
  const data = rates[route];
  const isAirport = route === "airport";
  const journey = isAirport ? (direction === "arrival" ? "Airport to Hoi An · one way" : "Hoi An to airport · one way") : data.journey;
  const minDate = useMemo(() => new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Ho_Chi_Minh", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date()), []);

  useEffect(() => {
    const requestedRoute = new URLSearchParams(window.location.search).get("route");
    if (requestedRoute && requestedRoute in rates) setRoute(requestedRoute as RouteKey);
  }, []);

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = [
      "Hello Hoi An Local Days, I would like to request a private car.", "",
      `Route: ${data.title}`,
      `Journey: ${journey}`,
      `Vehicle: ${vehicles[vehicle]}`,
      `Listed rate: ${money(data.prices[vehicle])} per vehicle`,
      `Date: ${date}`,
      `Pickup / arrival time: ${time}`,
      `Guests: ${guests}`,
      `Large cases: ${luggage}`,
      `Name: ${form.get("name")}`,
      `WhatsApp: ${form.get("phone")}`,
      `Email: ${form.get("email")}`,
      `Hotel / address: ${form.get("pickup")}`,
      ...(isAirport ? [`Flight: ${form.get("flight")}`] : []),
      `Notes: ${form.get("notes") || "None"}`, "",
      "Please confirm vehicle availability, waiting time, inclusions and pickup details.",
    ].join("\n");
    window.open(`https://wa.me/84904885502?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return <main className="transfer-page">
    <section className="transfer-hero"><div className="services-wrap"><p className="services-eyebrow">Hoi An Local Days · Private transport</p><h1>A private car,<br/>with the details made clear.</h1><p>Airport transfers and return journeys from Hoi An. Choose your route and vehicle, then share the details for confirmation.</p></div></section>
    <div className="services-wrap transfer-layout">
      <form className="transfer-form" onSubmit={submit}>
        <h2>Plan your journey</h2><p><strong>No prepayment required.</strong> Your car and pickup details require confirmation from our team.</p>
        <fieldset><legend><span>Your journey</span>Where would you like to go?</legend>
          <label>Route<select value={route} onChange={(event) => setRoute(event.target.value as RouteKey)}><option value="airport">Da Nang Airport ↔ Hoi An · one way</option><option value="bana">Hoi An ↔ Ba Na Hills · return</option><option value="myson">Hoi An ↔ My Son Sanctuary · return</option><option value="hue">Hoi An ↔ Hai Van Pass & Hue · return</option></select></label>
          {isAirport && <label>Direction<select value={direction} onChange={(event) => setDirection(event.target.value)}><option value="arrival">Airport to Hoi An</option><option value="departure">Hoi An to airport</option></select></label>}
          <div className="transfer-row"><label>Travel date<input type="date" min={minDate} value={date} onChange={(event) => setDate(event.target.value)} required/></label><label>Pickup time<input type="time" value={time} onChange={(event) => setTime(event.target.value)} required/></label></div>
        </fieldset>
        <fieldset><legend><span>Your vehicle</span>Choose a vehicle size</legend>
          <div className="vehicle-choices">{vehicles.map((name, index) => <label className={vehicle === index ? "selected" : ""} key={name}><input type="radio" name="vehicle" checked={vehicle === index} onChange={() => setVehicle(index)}/><strong>{name}</strong><small>{money(data.prices[index])}</small></label>)}</div>
          <div className="transfer-row"><label>Number of guests<input type="number" min="1" max="50" value={guests} onChange={(event) => setGuests(Number(event.target.value))} required/></label><label>Large suitcases<input type="number" min="0" max="50" value={luggage} onChange={(event) => setLuggage(Number(event.target.value))} required/></label></div>
          <p className="transfer-hint">Vehicle labels refer to seat categories. We confirm passenger and luggage fit before accepting the booking.</p>
        </fieldset>
        <fieldset><legend><span>Your contact & pickup</span>How can we reach you?</legend>
          <label>Full name<input name="name" autoComplete="name" required maxLength={100}/></label>
          <div className="transfer-row"><label>WhatsApp / phone<input name="phone" type="tel" placeholder="Include country code" autoComplete="tel" required maxLength={60}/></label><label>Email<input name="email" type="email" autoComplete="email" required maxLength={150}/></label></div>
          <label>{isAirport && direction === "arrival" ? "Drop-off hotel / address in Hoi An" : "Pickup hotel / address in Hoi An"}<input name="pickup" placeholder="Hotel or villa name and full address" autoComplete="street-address" required maxLength={250}/></label>
          {isAirport && <label>Flight number<input name="flight" placeholder="e.g. VN123" required maxLength={30}/></label>}
          <label>Notes or requested stops (optional)<textarea name="notes" placeholder="Extra stops, luggage details or questions" maxLength={1000}/></label>
          <label className="transfer-confirm"><input type="checkbox" required/><span>I understand this is a booking request. Vehicle availability, waiting time, stops and final inclusions need confirmation.</span></label>
        </fieldset>
        <button className="services-button services-button-dark transfer-submit" type="submit">Send request via WhatsApp</button>
        <p className="transfer-hint"><strong>No prepayment required.</strong> Your booking is complete only when our team confirms it.</p>
      </form>
      <aside className="transfer-summary"><p className="services-eyebrow">Your journey</p><h2>{data.title}</h2><p>{journey}</p><dl><div><dt>Vehicle</dt><dd>{vehicles[vehicle]}</dd></div><div><dt>Guests / large cases</dt><dd>{guests} / {luggage}</dd></div><div><dt>Date</dt><dd>{date || "Choose your date"}</dd></div><div><dt>Pickup time</dt><dd>{time || "Choose your time"}</dd></div></dl><div className="transfer-total"><span>Vehicle rate</span><strong>{money(data.prices[vehicle])}</strong></div><p>Price is per vehicle, not per person.</p><p><strong>No prepayment required</strong><br/>Reserve without paying in advance.</p><a href="https://wa.me/84904885502" target="_blank" rel="noopener noreferrer">WhatsApp +84 904 885 502</a></aside>
    </div>
    <section className="transfer-rates"><div className="services-wrap"><p className="services-eyebrow">Private transport rates</p><h2>See every vehicle rate.</h2><p>VND per vehicle. Airport is one way; the other routes are return trips from Hoi An.</p><div><table><thead><tr><th>Route</th><th>Journey</th><th>4 seats</th><th>7 seats</th><th>16 seats</th></tr></thead><tbody>{Object.entries(rates).map(([key, item]) => <tr key={key}><td>{item.title}</td><td>{item.journey}</td>{item.prices.map((price) => <td key={price}>{price.toLocaleString("en-US")}</td>)}</tr>)}</tbody></table></div></div></section>
    <section className="services-section transfer-faq"><div className="services-wrap"><h2>Before your journey</h2><details><summary>Do I need to pay in advance?</summary><p>No prepayment is required for our private cars or the featured Tra Que Garden cooking class. Cooking classes are paid on arrival. We confirm the payment arrangements for your car with your booking. Experiences booked through partner platforms follow their own payment terms.</p></details><details><summary>Is this a guided tour?</summary><p>No. These are private car services with a driver. A tour guide, entrance tickets and meals are separate unless expressly agreed.</p></details><details><summary>When is my car confirmed?</summary><p>Your WhatsApp message records your request. Our team must confirm vehicle availability, pickup and agreed details before it is booked.</p></details><details><summary>How do I choose a vehicle?</summary><p>Share your guest count and luggage. Seat categories alone do not guarantee luggage space; we confirm that the vehicle fits your group before accepting the request.</p></details></div></section>
  </main>;
}
