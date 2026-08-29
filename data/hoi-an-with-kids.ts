export type FamilyQuickPick = {
  id: string;
  title: string;
  description: string;
  bestFor: string[];
  href?: string;
  cta?: string;
};

export const familyQuickPicks: FamilyQuickPick[] = [
  { id: "cooking", title: "Take a Family-Friendly Cooking Class", description: "A hands-on way to combine food, culture and several local experiences in one half-day.", bestFor: ["Children who can participate safely", "Parents wanting a hands-on activity", "Families fitting several experiences into one half-day"], href: "/cooking-classes-hoi-an", cta: "Compare Cooking Classes" },
  { id: "basket-boat", title: "Try a Basket Boat Experience", description: "A short, lively activity that can be easy to fit around the rest of the day.", bestFor: ["Families wanting something fun and easy", "Short activity windows", "First-time visitors"], href: "/basket-boat-hoi-an", cta: "Choose a Basket Boat Style" },
  { id: "beach", title: "Spend Time at the Beach", description: "Leave room for a slower afternoon without a fixed sightseeing schedule.", bestFor: ["Slow afternoons", "Younger children", "Families wanting low-pressure time"] },
  { id: "craft", title: "Make a Lantern or Local Craft", description: "A quieter hands-on option that also works when the weather changes.", bestFor: ["Hands-on families", "Rainy periods", "Children who enjoy making things"] },
  { id: "old-town", title: "Explore the Old Town Early or Late", description: "Walk when the temperature is gentler and the streets are easier to enjoy.", bestFor: ["Avoiding midday heat", "Easy walking", "Food, lanterns and atmosphere"] },
];

export const ageGuidance = [
  { title: "Toddlers", intro: "Keep plans short and adjustable.", goodOptions: ["Shade", "Beach", "Cafés", "Flexible schedules", "Easy transfers"], caution: "Avoid long multi-stop days." },
  { title: "Ages 4–7", intro: "Simple, tactile activities often fit this stage well.", goodOptions: ["Simple cooking participation", "Basket boats", "Lantern making", "Beach", "Markets in short doses"] },
  { title: "Ages 8–12", intro: "More active and varied experiences become easier to combine.", goodOptions: ["Cooking", "Cycling", "Crafts", "Food experiences", "Countryside", "Selected day trips"] },
  { title: "Teenagers", intro: "Mix independent interests with more active days.", goodOptions: ["Cooking", "Cycling", "Food tours", "Photography", "My Son", "Da Nang, Ba Na or adventure-style day trips"] },
];

export const familyCategories = [
  { id: "cooking", title: "Cooking & Food", description: "Cooking is hands-on, social and gives the family a shared activity rather than another stop to look at.", note: "Compare formats before choosing how much market, countryside or basket-boat time you want.", href: "/cooking-classes-hoi-an" },
  { id: "basket-boat", title: "Basket Boats & Coconut Village", description: "Fun, visually memorable and easy to combine with cooking.", note: "Some experiences are lively and noisy, which may not suit every child.", href: "/basket-boat-hoi-an" },
  { id: "crafts", title: "Lantern & Craft Workshops", description: "A useful hands-on choice for rainy periods or families who prefer a quieter pace.", note: "Choose a workshop length that matches the child’s attention and energy." },
  { id: "beaches", title: "Beaches", description: "An Bang and Cua Dai can create breathing room between structured activities.", note: "Conditions vary, so keep the plan flexible rather than building the whole day around a fixed schedule." },
  { id: "cycling", title: "Cycling & Countryside", description: "Better suited to older children, confident riders and families comfortable with outdoor activity.", note: "Check the route and conditions with the operator before choosing." },
  { id: "old-town", title: "Old Town", description: "Mornings, late afternoons and evenings are usually easier times for a family walk.", note: "Midday heat can make long walks less enjoyable." },
];

export const familyChallenges = [
  { title: "Midday heat", guidance: "Avoid stacking outdoor activities around the hottest part of the day." },
  { title: "Overpacked itineraries", guidance: "Do not try to combine Old Town, cooking, beach and My Son in one day." },
  { title: "Long transfers", guidance: "Think carefully before choosing distant full-day trips with small children." },
  { title: "Activity mismatch", guidance: "A noisy basket boat ride may be fun for some children and unpleasant for others." },
  { title: "Food restrictions", guidance: "Tell operators about allergies or dietary requirements before the activity." },
];

export const familyDayIdeas = [
  { title: "Easy Day", steps: ["Morning · Old Town", "Lunch and rest", "Afternoon · Beach", "Evening · Dinner and lanterns"] },
  { title: "Hands-On Day", steps: ["Morning or afternoon · Cooking class", "Rest", "Evening · Old Town"] },
  { title: "Active Family Day", steps: ["Morning · Countryside or cycling", "Lunch", "Afternoon · Craft workshop or beach"] },
];

export const familyStayLengths = [
  { title: "1 Day", guidance: "Old Town plus one activity." },
  { title: "2 Days", guidance: "Add cooking or beach time." },
  { title: "3 Days", guidance: "Add countryside or a gentle day trip." },
  { title: "4+ Days", guidance: "Slow down and include more rest or beach time." },
];
