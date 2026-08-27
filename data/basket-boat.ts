import type { CookingProvider, CookingProviderKey } from "@/data/cooking-classes";

export type BasketBoatEditorial = {
  label: "Best Overall" | "Best for Families" | "Best Short Experience" | "Best Quiet Experience" | "Best Cooking Combo" | "Best All-in-One";
  shortDescription: string;
  whyWePickedIt: string;
  bestFor: string[];
  notIdealFor: string;
  experienceStyle: "short" | "lively" | "quiet" | "cooking-combo" | "all-in-one";
  lastVerified: string;
};

export type BasketBoatExperience = {
  id: string;
  name: string;
  editorial: BasketBoatEditorial;
  providers: Partial<Record<CookingProviderKey, CookingProvider>>;
};

// Intentionally empty until underlying experiences and provider listings are researched.
export const basketBoatExperiences: BasketBoatExperience[] = [];

export const basketBoatDecisionTypes = [
  { title: "Best for First-Time Visitors", recommendation: "Basket boat + coconut village experience.", guidance: "A straightforward introduction when you want the setting and the boat ride together." },
  { title: "Best for Families", recommendation: "Short, easy-to-fit experience with minimal logistics.", guidance: "Prioritize a manageable duration and check how lively the format will be." },
  { title: "Best for Food Lovers", recommendation: "Basket boat combined with a cooking class.", guidance: "Make the boat one part of a broader half-day food experience.", href: "/cooking-classes-hoi-an", cta: "Compare Cooking Classes" },
  { title: "Best for a Quieter Experience", recommendation: "Smaller-scale or less entertainment-focused experience.", guidance: "Look beyond generic wording and ask what the ride atmosphere is actually like." },
];

export const basketBoatTypes = [
  { title: "Basket Boat Only", bestFor: ["Limited time", "Travelers already in the area", "People who mainly want to experience the boat"], tradeOff: "Less context and fewer activities." },
  { title: "Basket Boat + Cooking", bestFor: ["Families", "First-time visitors", "Food lovers", "A half-day experience"], tradeOff: "A more structured commitment than a short ride.", href: "/cooking-classes-hoi-an" },
  { title: "Basket Boat + Market + Cooking", bestFor: ["Travelers wanting a broader introduction to local food and daily life"], tradeOff: "Longer and more structured." },
  { title: "Basket Boat + Multiple Hoi An Activities", bestFor: ["Travelers with limited time", "Cooking, lantern making, coffee or countryside activities in one plan"], tradeOff: "More activities can mean less depth in each one." },
];

export const basketBoatMistakes = [
  { title: "Choosing only by the lowest price", guidance: "Different listings may include very different activities." },
  { title: "Assuming every basket boat tour is quiet", guidance: "Some are intentionally entertainment-focused." },
  { title: "Booking duplicate experiences", guidance: "A cooking class may already include basket boats.", href: "/cooking-classes-hoi-an" },
  { title: "Overpacking the day", guidance: "A half-day combination tour plus another major excursion may be tiring." },
  { title: "Not checking what’s included", guidance: "Transport, market visits, cooking and boat duration can differ." },
];
