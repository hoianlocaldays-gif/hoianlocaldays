export type ProviderKey = "viator" | "getyourguide" | "klook" | "direct";

export type Provider = {
  key: ProviderKey;
  label: string;
  url: string | null;
  campaign: string;
};

export type Experience = {
  id: string;
  name: string;
  category: "cooking" | "basket-boat" | "food" | "heritage" | "family" | "day-trip";
  audience: Array<"couple" | "family" | "friends" | "solo">;
  interests: Array<"food" | "culture" | "adventure" | "relaxation">;
  duration: null;
  priceLabel: null;
  pickup: null;
  groupSize: null;
  image: null;
  imageAlt: string;
  bestFor: string;
  editorialReason: string;
  providers: Provider[];
};

const pendingProviders = (campaign: string): Provider[] => [
  { key: "viator", label: "Viator", url: null, campaign },
  { key: "getyourguide", label: "GetYourGuide", url: null, campaign },
];

// Category-level placeholders only. Add real products after verified provider
// URLs, inclusions, duration, pickup and price data are supplied.
export const experiences: Experience[] = [
  { id: "cooking-classes", name: "Cooking Classes in Hoi An", category: "cooking", audience: ["couple", "family", "friends", "solo"], interests: ["food", "culture"], duration: null, priceLabel: null, pickup: null, groupSize: null, image: null, imageAlt: "", bestFor: "Food lovers and hands-on travellers", editorialReason: "Compare verified classes here once partner data is connected.", providers: pendingProviders("cooking-class-page") },
  { id: "basket-boat", name: "Basket Boat Experiences", category: "basket-boat", audience: ["couple", "family", "friends"], interests: ["culture", "adventure"], duration: null, priceLabel: null, pickup: null, groupSize: null, image: null, imageAlt: "", bestFor: "Families and first-time visitors", editorialReason: "This category will compare atmosphere, group style and practical inclusions.", providers: pendingProviders("basket-boat-page") },
  { id: "food-tours", name: "Food Tours in Hoi An", category: "food", audience: ["couple", "family", "friends", "solo"], interests: ["food", "culture"], duration: null, priceLabel: null, pickup: null, groupSize: null, image: null, imageAlt: "", bestFor: "Curious eaters and first evenings", editorialReason: "Verified food walks will be compared by pace, menu and group size.", providers: pendingProviders("food-tour-page") },
  { id: "my-son-tours", name: "My Son Tours from Hoi An", category: "heritage", audience: ["couple", "family", "friends", "solo"], interests: ["culture"], duration: null, priceLabel: null, pickup: null, groupSize: null, image: null, imageAlt: "", bestFor: "History and culture travellers", editorialReason: "Future picks will compare departure time, guide format and transport.", providers: pendingProviders("my-son-page") },
  { id: "family-activities", name: "Family Activities in Hoi An", category: "family", audience: ["family"], interests: ["food", "culture", "adventure", "relaxation"], duration: null, priceLabel: null, pickup: null, groupSize: null, image: null, imageAlt: "", bestFor: "International families", editorialReason: "Only verified, age-appropriate activities will be added to this shortlist.", providers: pendingProviders("family-page") },
  { id: "day-trips", name: "Day Trips from Hoi An", category: "day-trip", audience: ["couple", "family", "friends", "solo"], interests: ["culture", "adventure"], duration: null, priceLabel: null, pickup: null, groupSize: null, image: null, imageAlt: "", bestFor: "Travellers with an extra day", editorialReason: "This category will compare travel time, pace and destination style.", providers: pendingProviders("day-trips-page") },
];

export const getExperience = (id: string) => experiences.find((item) => item.id === id);
