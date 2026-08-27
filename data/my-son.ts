import type { CookingProvider, CookingProviderKey } from "./cooking-classes";

export type MySonExperience = {
  id: string;
  name: string;
  editorial: {
    positioning: string;
    bestFor: string[];
    notIdealFor: string[];
  };
  providers: Partial<Record<CookingProviderKey, CookingProvider>>;
};

export const mySonExperience: MySonExperience = {
  id: "my-son-sanctuary-visit",
  name: "My Son Sanctuary Visit from Hoi An",
  editorial: {
    positioning: "A cultural trip beyond Hoi An focused on Cham heritage, Hindu temple architecture and archaeology.",
    bestFor: ["Culture and history travelers", "Architecture enthusiasts", "Photographers", "Travelers staying three days or longer"],
    notIdealFor: ["Very short Hoi An stays", "Travelers mainly prioritizing food, beaches or hands-on activities", "Young children with limited interest in historical sites"],
  },
  providers: {},
};

export const visitStyles = [
  { title: "Morning Group Tour", bestFor: ["First-time visitors", "Solo travelers", "Budget-conscious travelers", "Travelers wanting an organized trip"], tradeOff: "A fixed schedule, shared transport and a potentially busier experience." },
  { title: "Early / Sunrise-Style Visit", bestFor: ["Photographers", "Heat-sensitive travelers", "Travelers who value quieter conditions", "People comfortable starting early"], tradeOff: "A very early departure, without any promise of empty temples." },
  { title: "Afternoon Visit", bestFor: ["Travelers using the morning elsewhere", "Flexible itineraries"], tradeOff: "Heat, weather and visitor conditions vary; sunset should never be assumed from the label alone." },
  { title: "Private Tour", bestFor: ["Families", "Couples wanting flexibility", "Travelers wanting more explanation", "Groups valuing schedule control"], tradeOff: "Usually a more premium format, with the final inclusions still needing careful comparison." },
  { title: "Transport-Only / Independent Visit", bestFor: ["Independent travelers", "People who prefer their own pace", "Visitors who do not need guided historical explanation"], tradeOff: "Less interpretation and context unless it is arranged separately." },
];

export const morningVsAfternoon = [
  { title: "Morning", advantages: ["Cooler part of the day", "Leaves the afternoon available", "A common organized-trip format"], disadvantages: ["Earlier start", "A popular departure window"] },
  { title: "Afternoon", advantages: ["Keeps the morning relaxed in Hoi An", "May fit certain itineraries better"], disadvantages: ["Heat and weather considerations", "A later return"] },
];

export const groupVsPrivate = [
  { title: "Group", chooseIf: ["You are traveling solo or as a couple", "You want to keep costs controlled", "You are comfortable with a fixed itinerary"] },
  { title: "Private", chooseIf: ["You are a family or group", "You value flexibility", "You want more control over pace", "You have specific historical or photographic interests"] },
];

export const commonMySonMistakes = [
  { title: "Choosing only by price", body: "Options may include different transport, guide arrangements and itinerary structures." },
  { title: "Not checking whether a guide is included", body: "Transport and a guided visit are not necessarily equivalent experiences." },
  { title: "Overpacking the same day", body: "Avoid stacking My Son with too many other major experiences." },
  { title: "Assuming sunrise or sunset means a specific site experience", body: "Future product wording, access and timing must be checked carefully." },
  { title: "Booking the wrong format for your group", body: "Private and shared trips solve different needs; choose around pace and flexibility." },
];

export const futureRecommendationSlots = ["Best Overall", "Best Early Morning", "Best Private", "Best Value Group Tour", "Best Transport-Only"] as const;
