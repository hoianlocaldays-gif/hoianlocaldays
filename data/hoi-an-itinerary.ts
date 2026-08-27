export type ItinerarySection = {
  time: string;
  title: string;
  description: string;
  suggestions: string[];
};

export type ItineraryDay = {
  day: number;
  title: string;
  summary: string;
  sections: ItinerarySection[];
};

export const days: ItineraryDay[] = [
  {
    day: 1,
    title: "Ancient Town, Food & Lanterns",
    summary: "Understand Hoi An at an unhurried pace before returning for the evening atmosphere.",
    sections: [
      { time: "Morning", title: "Let the Ancient Town unfold", description: "Keep the first morning relatively unstructured so there is room to notice the streets, architecture and everyday rhythm.", suggestions: ["Japanese Covered Bridge", "Old merchant houses", "Assembly halls", "Streets and architecture", "Local market"] },
      { time: "Lunch", title: "Meet the local food", description: "Use lunch to become familiar with dishes visitors commonly encounter, without building the day around a restaurant checklist.", suggestions: ["Cao Lau", "Mi Quang", "White Rose"] },
      { time: "Afternoon", title: "Leave real space to rest", description: "The middle of the day does not need another attraction.", suggestions: ["Rest", "Café", "Tailor browsing", "Spa if desired"] },
      { time: "Evening", title: "Return when the town changes", description: "Come back for the lantern atmosphere and casual exploration without treating every riverside activity as essential.", suggestions: ["Riverside walk", "Dinner", "Lantern atmosphere", "Unstructured wandering"] },
    ],
  },
  {
    day: 2,
    title: "Cooking, Coconut Village & Countryside",
    summary: "Choose one hands-on local experience, then keep the rest of the day deliberately light.",
    sections: [
      { time: "Morning or afternoon", title: "Choose one main experience", description: "A hands-on experience can combine food, local context and activities beyond the Ancient Town.", suggestions: ["Cooking experience", "Basket boat experience"] },
      { time: "Later", title: "Follow your energy", description: "After the main activity, choose a slower continuation instead of another major paid tour.", suggestions: ["Countryside", "Cycling", "Café", "Pool or rest", "Beach depending on energy and weather"] },
    ],
  },
  {
    day: 3,
    title: "Choose the Hoi An You Want More Of",
    summary: "Use the final day for a slower, cultural or countryside direction rather than another checklist.",
    sections: [],
  },
];

export const dayTwoPaths = [
  { id: "cooking", title: "Path A — Cooking Experience", description: "A broader hands-on half-day built around food and local context.", bestFor: ["Food lovers", "Couples", "Families", "First-time visitors"], href: "/cooking-classes-hoi-an", cta: "Compare Hoi An Cooking Classes" },
  { id: "basket", title: "Path B — Basket Boat Experience", description: "A more focused coconut-waterway activity when you want a shorter commitment.", bestFor: ["Travelers wanting a shorter activity", "Families", "Visitors mainly interested in the coconut waterways"], href: "/basket-boat-hoi-an", cta: "Compare Basket Boat Experiences" },
];

export const dayThreeOptions = [
  { title: "Option A — Slow Hoi An", bestFor: "Couples, families and relaxed travelers", suggestions: ["An Bang Beach", "Café", "Spa", "Shopping", "Revisit Ancient Town"] },
  { title: "Option B — Culture", bestFor: "History and culture travelers", description: "My Son Sanctuary is a separate UNESCO-listed Cham heritage site and a logical half-day or day-trip option from the Hoi An area.", suggestions: ["My Son Sanctuary"] },
  { title: "Option C — Countryside", bestFor: "Active travelers", suggestions: ["Cycling", "Villages", "Farming areas", "Quieter roads outside Ancient Town"] },
];

export const travelerVariants = [
  { id: "family", title: "Doing This Trip With Kids?", guidance: ["Day 1 · Shorter Ancient Town blocks plus rest", "Day 2 · Cooking or basket boat depending on the child and energy", "Day 3 · Beach or another relaxed activity"], href: "/hoi-an-with-kids", cta: "See Hoi An With Kids" },
  { id: "couple", title: "Doing This Trip as a Couple?", guidance: ["Slower mornings", "Cooking experience", "Countryside", "Café and beach", "Ancient Town evening", "Spa"] },
];

export const commonMistakes = [
  "Trying to fit multiple major day trips into three days",
  "Booking a separate basket boat when the cooking experience already includes one",
  "Combining Ancient Town, cooking, My Son and the beach in one day",
  "Adding constant hotel and activity transfers",
  "Choosing activities only because they are cheap",
];

export const decisionPaths = [
  { prompt: "If you want food + hands-on", label: "Cooking Classes", href: "/cooking-classes-hoi-an" },
  { prompt: "If you want short + fun", label: "Basket Boats", href: "/basket-boat-hoi-an" },
  { prompt: "If you have children", label: "Hoi An With Kids", href: "/hoi-an-with-kids" },
  { prompt: "If you’re still exploring", label: "Things to Do", href: "/things-to-do-in-hoi-an" },
];
