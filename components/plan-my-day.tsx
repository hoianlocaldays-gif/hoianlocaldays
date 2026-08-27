"use client";

import { FormEvent, useState } from "react";
import { experiences, type Experience } from "@/data/experiences";
import { track } from "@/lib/tracking";
import { ExperienceCard } from "./experience-card";

export function PlanMyDay() {
  const [matches, setMatches] = useState<Experience[]>([]);
  const [submitted, setSubmitted] = useState(false);

  function recommend(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const audience = String(data.get("audience"));
    const interest = String(data.get("interest"));
    const time = String(data.get("time"));
    const ranked = experiences.map((item) => ({ item, score: Number(item.audience.includes(audience as never)) * 2 + Number(item.interests.includes(interest as never)) * 3 })).sort((a, b) => b.score - a.score).slice(0, 3).map(({ item }) => item);
    setMatches(ranked); setSubmitted(true);
    track("plan_day_click", { audience, interest, time, budget: String(data.get("budget")) });
  }

  return <section className="plan-section section" id="plan"><div className="plan-intro"><p className="eyebrow">A simple local shortcut</p><h2>Plan my Hoi An day</h2><p>Four quick choices generate relevant categories only. Individual products will not appear until verified partner data is connected.</p></div><form className="plan-form" onSubmit={recommend}><label>Who are you travelling with?<select name="audience"><option value="couple">Couple</option><option value="family">Family</option><option value="friends">Friends</option><option value="solo">Solo</option></select></label><label>Main interest<select name="interest"><option value="food">Food</option><option value="culture">Culture</option><option value="adventure">Adventure</option><option value="relaxation">Relaxation</option></select></label><label>Available time<select name="time"><option value="half-day">Half day</option><option value="full-day">Full day</option><option value="2–3 days">2–3 days</option></select></label><label>Budget style<select name="budget"><option>Budget</option><option>Mid-range</option><option>Premium</option></select></label><button className="primary-button" type="submit">Show relevant categories</button></form>{submitted && <div className="recommendations" aria-live="polite"><div className="section-heading"><p className="eyebrow">Your category shortlist</p><h2>Three areas to explore</h2></div><div className="experience-grid">{matches.map((item) => <ExperienceCard key={item.id} experience={item} page="plan-my-day" position="recommendation" />)}</div></div>}</section>;
}
