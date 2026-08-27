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
  duration: "half-day" | "full-day";
  priceLabel: string | null;
  pickup: string;
  groupSize: string | null;
  image: string;
  imageAlt: string;
  bestFor: string;
  editorialReason: string;
  providers: Provider[];
};

const pendingProviders = (campaign: string): Provider[] => [
  { key: "viator", label: "Viator", url: null, campaign },
  { key: "getyourguide", label: "GetYourGuide", url: null, campaign },
];

export const experiences: Experience[] = [
  {
    id: "cam-thanh-cooking",
    name: "Cam Thanh Market & Cooking Class",
    category: "cooking",
    audience: ["couple", "family", "friends", "solo"],
    interests: ["food", "culture"],
    duration: "half-day",
    priceLabel: "VND 600K",
    pickup: "Hoi An pickup included",
    groupSize: null,
    image: "/tours/marble-mountains.jpg",
    imageAlt: "Green Central Vietnam landscape",
    bestFor: "Families & first-time visitors",
    editorialReason: "It combines the market, coconut forest and a practical five-dish class in one easy half-day.",
    providers: pendingProviders("cooking-class-page"),
  },
  {
    id: "tra-que-cooking",
    name: "Tra Que Garden Cooking Class",
    category: "cooking",
    audience: ["couple", "family", "friends"],
    interests: ["food", "culture", "relaxation"],
    duration: "half-day",
    priceLabel: "VND 840K",
    pickup: "Confirm pickup area",
    groupSize: "Minimum 2 guests",
    image: "/tours/marble-mountains.jpg",
    imageAlt: "Lush landscape near Hoi An",
    bestFor: "A slower, garden-led experience",
    editorialReason: "The organic village, farming and foot massage make this feel less rushed than a standard cooking class.",
    providers: pendingProviders("cooking-class-page"),
  },
  {
    id: "cam-thanh-eco",
    name: "Cam Thanh Coconut Forest Eco Tour",
    category: "basket-boat",
    audience: ["couple", "family", "friends"],
    interests: ["adventure", "culture"],
    duration: "half-day",
    priceLabel: "VND 550K",
    pickup: "Confirm pickup area",
    groupSize: null,
    image: "/tours/marble-mountains.jpg",
    imageAlt: "Green landscape in Central Vietnam",
    bestFor: "Families & a fun first morning",
    editorialReason: "A compact option with basket boating, crab catching and a local meal without taking up the whole day.",
    providers: pendingProviders("basket-boat-page"),
  },
  {
    id: "hoi-an-food-lantern",
    name: "Hoi An Old Town & Food Walk",
    category: "food",
    audience: ["couple", "family", "friends", "solo"],
    interests: ["food", "culture"],
    duration: "half-day",
    priceLabel: "VND 990K",
    pickup: "Hoi An meeting point",
    groupSize: "Minimum 2 guests",
    image: "/tours/hoi-an-lanterns.jpg",
    imageAlt: "Hoi An shops illuminated at night",
    bestFor: "Food lovers & first evenings",
    editorialReason: "Six local tastes are paired with old-town context, a short boat ride and an easy evening pace.",
    providers: pendingProviders("food-tour-page"),
  },
  {
    id: "my-son-sunrise",
    name: "My Son Sunrise Small-Group Tour",
    category: "heritage",
    audience: ["couple", "friends", "solo"],
    interests: ["culture", "adventure"],
    duration: "half-day",
    priceLabel: "VND 795K",
    pickup: "Hoi An pickup included",
    groupSize: "Small group",
    image: "/tours/my-son.jpg",
    imageAlt: "Ancient brick temples at My Son Sanctuary",
    bestFor: "Culture without the midday heat",
    editorialReason: "The early start rewards you with cooler weather, softer light and a calmer sanctuary visit.",
    providers: pendingProviders("my-son-page"),
  },
  {
    id: "hue-city-day-trip",
    name: "Hue Imperial City Day Trip",
    category: "day-trip",
    audience: ["couple", "family", "friends", "solo"],
    interests: ["culture"],
    duration: "full-day",
    priceLabel: "VND 1,290K",
    pickup: "Hoi An pickup included",
    groupSize: null,
    image: "/tours/hue-imperial-city.jpg",
    imageAlt: "Hue Imperial City under a clear sky",
    bestFor: "History-minded first-time visitors",
    editorialReason: "A long but well-rounded day linking Hai Van Pass, a royal tomb, the Citadel and Thien Mu Pagoda.",
    providers: pendingProviders("day-trips-page"),
  },
  {
    id: "marble-monkey-mountains",
    name: "Marble Mountains & Lady Buddha",
    category: "day-trip",
    audience: ["couple", "family", "friends", "solo"],
    interests: ["culture", "adventure"],
    duration: "half-day",
    priceLabel: "VND 650K",
    pickup: "Confirm Hoi An or Da Nang pickup",
    groupSize: null,
    image: "/tours/marble-mountains.jpg",
    imageAlt: "Panoramic view from Marble Mountains",
    bestFor: "A compact culture-and-view day",
    editorialReason: "It fits three contrasting stops into a half-day and leaves your evening free in Hoi An.",
    providers: pendingProviders("day-trips-page"),
  },
  {
    id: "ba-na-hills",
    name: "Ba Na Hills & Golden Bridge",
    category: "day-trip",
    audience: ["couple", "family", "friends"],
    interests: ["adventure"],
    duration: "full-day",
    priceLabel: "VND 1,660K",
    pickup: "Confirm pickup area",
    groupSize: null,
    image: "/tours/golden-bridge.jpg",
    imageAlt: "Golden Bridge held by monumental stone hands",
    bestFor: "Families & iconic viewpoints",
    editorialReason: "Choose this for a polished mountain attraction rather than an intimate local-culture day.",
    providers: pendingProviders("day-trips-page"),
  },
];

export const getExperience = (id: string) => experiences.find((item) => item.id === id);
