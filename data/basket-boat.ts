import type { CookingProvider, CookingProviderKey } from "@/data/cooking-classes";

export type BasketBoatEditorial = {
  label: "Best Overall" | "Most Popular" | "Best for Families" | "Best Short & Simple" | "Best Quieter Experience" | "Best Cooking Combo" | "Best All-in-One";
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

const verified = "2026-08-27";

export const basketBoatExperiences: BasketBoatExperience[] = [
  {
    id: "classic-basketboat",
    name: "Classic Coconut-Forest Basket Boat Experience",
    editorial: {
      label: "Best Overall",
      shortDescription: "A lively classic coconut-forest basket boat experience for first-time visitors who want the well-known Hoi An version of the activity.",
      whyWePickedIt: "A clear starting point for travelers who want the lively, recognizable basket boat format.",
      bestFor: ["First-time visitors", "Couples and friends", "Travelers wanting the lively classic experience"],
      notIdealFor: "Travelers specifically looking for a quiet, low-key ride.",
      experienceStyle: "lively",
      lastVerified: verified,
    },
    providers: { viator: { provider: "viator", productId: "349311P2", url: "https://www.viator.com/tours/Hoi-An/Basket-Boat-Ride-in-Hoi-An-basket-boat-spinning-casting-the-net-catching-crab/d5229-349311P2?pid=P00316970&mcid=42383&medium=link&campaign=hal-basketboat-overall-viator", campaign: "hal-basketboat-overall-viator", enabled: true } },
  },
  {
    id: "popular-coconut-basketboat",
    name: "Popular Coconut-Forest Basket Boat Experience",
    editorial: {
      label: "Most Popular",
      shortDescription: "A highly popular coconut-forest basket boat option suited to travelers who enjoy an energetic and tourist-friendly atmosphere.",
      whyWePickedIt: "It suits travelers who prefer a widely booked, energetic introduction to the coconut forest.",
      bestFor: ["First-time visitors", "Families who enjoy lively activities", "Travelers who value a widely booked option"],
      notIdealFor: "Travelers specifically trying to avoid busy or tourist-oriented experiences.",
      experienceStyle: "lively",
      lastVerified: verified,
    },
    providers: { getyourguide: { provider: "getyourguide", productId: "624499", url: "https://www.getyourguide.com/hoi-an-l831/hoi-an-basket-boat-ride-in-the-coconut-forest-t624499/?partner_id=QJ5SJBN&utm_medium=online_publisher&cmp=hal-basketboat-popular-gyg", campaign: "hal-basketboat-popular-gyg", enabled: true } },
  },
  {
    id: "family-basketboat",
    name: "Convenient Coconut-Forest Basket Boat Experience",
    editorial: {
      label: "Best for Families",
      shortDescription: "An easy-to-understand coconut-forest experience with convenient logistics, suited to families wanting a manageable standalone activity.",
      whyWePickedIt: "The standalone format and convenient logistics make the decision easier for many family itineraries.",
      bestFor: ["Families", "First-time visitors", "Travelers who value convenient logistics"],
      notIdealFor: "Travelers wanting a broader half-day itinerary with cooking or several activities.",
      experienceStyle: "short",
      lastVerified: verified,
    },
    providers: { viator: { provider: "viator", productId: "201338P2", url: "https://www.viator.com/tours/Hoi-An/Hoi-An-Basket-Boat-Ride-in-water-Coconut-Forest-Included-pick-up/d5229-201338P2?pid=P00316970&mcid=42383&medium=link&campaign=hal-basketboat-family-viator", campaign: "hal-basketboat-family-viator", enabled: true } },
  },
  {
    id: "quieter-basketboat",
    name: "Relaxed Coconut-Forest Basket Boat Experience",
    editorial: {
      label: "Best Quieter Experience",
      shortDescription: "A better fit for travelers who prefer a more relaxed basket boat experience over the busiest entertainment-focused atmosphere.",
      whyWePickedIt: "It gives slower travelers a clearer alternative to the most entertainment-led formats.",
      bestFor: ["Couples", "Slower travelers", "Travelers who prefer lower-key activities"],
      notIdealFor: "Travelers specifically looking for the loudest, most energetic basket boat entertainment.",
      experienceStyle: "quiet",
      lastVerified: verified,
    },
    providers: { getyourguide: { provider: "getyourguide", productId: "886005", url: "https://www.getyourguide.com/hoi-an-l831/hoi-an-basket-boat-ride-in-the-coconut-forest-t886005/?partner_id=QJ5SJBN&utm_medium=online_publisher&cmp=hal-basketboat-quiet-gyg", campaign: "hal-basketboat-quiet-gyg", enabled: true } },
  },
  {
    id: "short-basketboat",
    name: "Short Basket Boat & Fishing Experience",
    editorial: {
      label: "Best Short & Simple",
      shortDescription: "A compact basket boat and fishing experience for travelers who want to try the activity without committing a large part of the day.",
      whyWePickedIt: "Its compact scope makes it useful when basket boats need to fit around other plans.",
      bestFor: ["Limited schedules", "Families wanting a shorter activity", "Travelers fitting basket boats around other plans"],
      notIdealFor: "Travelers wanting a full half-day combination experience.",
      experienceStyle: "short",
      lastVerified: verified,
    },
    providers: { getyourguide: { provider: "getyourguide", productId: "543538", url: "https://www.getyourguide.com/hoi-an-l831/hoi-an-coconut-basket-boat-ride-and-fishing-experience-t543538/?partner_id=QJ5SJBN&utm_medium=online_publisher&cmp=hal-basketboat-short-gyg", campaign: "hal-basketboat-short-gyg", enabled: true } },
  },
];

export const basketBoatQuickPicks = ["classic-basketboat", "family-basketboat", "quieter-basketboat"]
  .map((id) => basketBoatExperiences.find((experience) => experience.id === id))
  .filter((experience): experience is BasketBoatExperience => Boolean(experience));

export const basketBoatResearchCandidates = [{ provider: "viator" as const, productId: "382376P46", status: "research" as const }];

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
