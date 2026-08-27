import type { ExperienceImage } from "./experience-image";

export type CookingProviderKey = "viator" | "getyourguide";

export type CookingProvider = {
  provider: CookingProviderKey;
  productId: string;
  url: string;
  campaign: string;
  enabled: boolean;
};

export type CookingExperience = {
  id: string;
  name: string;
  editorial: {
    label: string;
    positioning: string;
    whyWePickedIt: string;
    bestFor: string[];
    notIdealFor: string;
  };
  providers: Partial<Record<CookingProviderKey, CookingProvider>>;
  image: ExperienceImage | null;
  lastVerified: string;
};

const verified = "2026-08-27";

export const cookingExperiences: CookingExperience[] = [
  {
    id: "classic-market-cooking",
    name: "Classic Market, Basket Boat & Cooking Experience",
    editorial: {
      label: "Best Overall",
      positioning: "A well-rounded introduction to the classic Hoi An cooking-class format, combining a local market, basket boat experience, fishing and hands-on Vietnamese cooking.",
      whyWePickedIt: "A clear starting point for travelers who want the full classic format in one experience.",
      bestFor: ["First-time visitors", "Travelers wanting the full classic experience", "Couples and friends"],
      notIdealFor: "Travelers primarily looking for an in-depth culinary lesson without the sightseeing activities.",
    },
    providers: { viator: { provider: "viator", productId: "141961P1", url: "https://www.viator.com/tours/Hoi-An/Local-market-basket-boat-fishing-and-cooking-experience/d5229-141961P1?pid=P00316970&mcid=42383&medium=link&campaign=hal-cooking-141961", campaign: "hal-cooking-141961", enabled: true } },
    image: { src: "/images/experiences/cooking/classic-market-cooking.webp", alt: "Travelers taking part in a hands-on cooking class in Hoi An", sourcePlatform: "viator", sourceProductId: "141961P1", sourcePage: "https://www.viator.com/tours/Hoi-An/Local-market-basket-boat-fishing-and-cooking-experience/d5229-141961P1", sourceType: "verified-provider", downloadedAt: verified },
    lastVerified: verified,
  },
  {
    id: "cocolocal-farm",
    name: "Cocolocal Farm Cooking Experience",
    editorial: {
      label: "Best for Families",
      positioning: "A varied half-day local experience combining market discovery, basket boat activities and approachable hands-on Vietnamese cooking.",
      whyWePickedIt: "Its approachable, varied format suits families and first-time visitors who want several activities together.",
      bestFor: ["Families", "First-time visitors", "Travelers who want several activities in one experience"],
      notIdealFor: "Travelers looking primarily for an advanced or highly technical culinary class.",
    },
    providers: {
      viator: { provider: "viator", productId: "424184P4", url: "https://www.viator.com/tours/Hoi-An/Hoi-AnCooking-Class-Local-Market-Basket-Boat-and-Cooking/d5229-424184P4?pid=P00316970&mcid=42383&medium=link&campaign=hal-cooking-cocolocal", campaign: "hal-cooking-cocolocal", enabled: true },
      getyourguide: { provider: "getyourguide", productId: "1061073", url: "https://www.getyourguide.com/hoi-an-l831/hoi-an-cooking-class-market-tour-fishing-basket-boating-t1061073/?partner_id=QJ5SJBN&utm_medium=online_publisher&cmp=hal-cooking-cocolocal-gyg", campaign: "hal-cooking-cocolocal-gyg", enabled: true },
    },
    image: { src: "/images/experiences/cooking/cocolocal-farm.webp", alt: "Family-friendly cooking experience at Cocolocal Farm in Hoi An", sourcePlatform: "owner-supplied", sourceProductId: "1061073", sourcePage: "https://pin.it/4HIwKxEf3", sourceType: "owner-selected", downloadedAt: verified, qualityStatus: "good" },
    lastVerified: verified,
  },
  {
    id: "organic-farm-cooking",
    name: "Organic Farm Cooking Experience",
    editorial: {
      label: "Best Farm-to-Table",
      positioning: "A cooking-focused experience set around an organic farm, with more emphasis on ingredients, produce and hands-on food preparation than the typical coconut-village combination tour.",
      whyWePickedIt: "The farm setting and ingredient focus offer a distinct alternative to the classic combination format.",
      bestFor: ["Food lovers", "Couples", "Travelers interested in ingredients and local produce", "Travelers prioritizing cooking over sightseeing"],
      notIdealFor: "Travelers wanting the classic market + basket boat + cooking combination.",
    },
    providers: { getyourguide: { provider: "getyourguide", productId: "568322", url: "https://www.getyourguide.com/hoi-an-l831/cooking-class-in-the-middle-of-organic-farm-t568322/?partner_id=QJ5SJBN&utm_medium=online_publisher&cmp=hal-cooking-organicfarm-gyg", campaign: "hal-cooking-organicfarm-gyg", enabled: true } },
    image: { src: "/images/experiences/cooking/organic-farm-cooking.webp", alt: "Cooking class surrounded by organic produce at Tra Que in Hoi An", sourcePlatform: "owner-supplied", sourceProductId: "568322", sourcePage: "https://pin.it/4HIwKxEf3", sourceType: "owner-selected", downloadedAt: verified, qualityStatus: "replace-when-better-source-available" },
    lastVerified: verified,
  },
  {
    id: "lantern-cooking-combo",
    name: "Lantern, Basket Boat & Cooking Experience",
    editorial: {
      label: "Best All-in-One",
      positioning: "A broad Hoi An experience combining cooking with basket boats and lantern making, useful for travelers who want to fit several signature activities into limited time.",
      whyWePickedIt: "It brings several recognizable Hoi An activities together for travelers with limited time.",
      bestFor: ["First-time visitors", "Short stays", "Couples", "Travelers wanting variety"],
      notIdealFor: "Travelers seeking a cooking-first or quieter culinary experience.",
    },
    providers: { getyourguide: { provider: "getyourguide", productId: "540267", url: "https://www.getyourguide.com/hoi-an-l831/hoi-an-basket-boat-with-lantern-making-cooking-class-tour-t540267/?partner_id=QJ5SJBN&utm_medium=online_publisher&cmp=hal-cooking-lantern-gyg", campaign: "hal-cooking-lantern-gyg", enabled: true } },
    image: { src: "/images/experiences/cooking/lantern-cooking-combo.webp", alt: "Lantern making and cooking experience in Hoi An", sourcePlatform: "owner-supplied", sourceProductId: "540267", sourcePage: "https://pin.it/4HIwKxEf3", sourceType: "owner-selected", downloadedAt: verified, qualityStatus: "replace-when-better-source-available" },
    lastVerified: verified,
  },
  {
    id: "personal-market-cooking",
    name: "Personal Market, Basket Boat & Cooking Experience",
    editorial: {
      label: "Best Personal Experience",
      positioning: "A hands-on market, basket-boat and cooking experience suited to travelers who value an engaging host and personal interaction.",
      whyWePickedIt: "The experience is positioned around host interaction and a more personal hands-on format.",
      bestFor: ["Couples", "Small groups", "Social travelers"],
      notIdealFor: "Travelers who prefer a cooking-only format.",
    },
    providers: { viator: { provider: "viator", productId: "221841P24", url: "https://www.viator.com/tours/Hoi-An/Cooking-Class-Hoi-An-Local-Market-Basket-Boat-Fishing-and-Cooking-Experience/d5229-221841P24?pid=P00316970&mcid=42383&medium=link&campaign=hal-cooking-221841", campaign: "hal-cooking-221841", enabled: true } },
    image: { src: "/images/experiences/cooking/personal-market-cooking.webp", alt: "Small-group hands-on cooking experience with a local host in Hoi An", sourcePlatform: "viator", sourceProductId: "221841P24", sourcePage: "https://www.viator.com/tours/Hoi-An/Cooking-Class-Hoi-An-Local-Market-Basket-Boat-Fishing-and-Cooking-Experience/d5229-221841P24", sourceType: "verified-provider", downloadedAt: verified },
    lastVerified: verified,
  },
  {
    id: "food-lovers-cooking",
    name: "Vietnamese Cooking Experience for Food Lovers",
    editorial: {
      label: "Best for Food Lovers",
      positioning: "A varied Vietnamese cooking experience for travelers who care about trying and preparing several local dishes.",
      whyWePickedIt: "Its emphasis is on preparing a varied selection of Vietnamese dishes.",
      bestFor: ["Food-focused travelers", "Couples", "Travelers interested in Vietnamese dishes"],
      notIdealFor: "Travelers whose main priority is sightseeing rather than cooking.",
    },
    providers: { viator: { provider: "viator", productId: "164857P1", url: "https://www.viator.com/tours/Hoi-An/Hoi-An-Eco-Cooking-Tour/d5229-164857P1?pid=P00316970&mcid=42383&medium=link&campaign=hal-cooking-164857", campaign: "hal-cooking-164857", enabled: true } },
    image: { src: "/images/experiences/cooking/food-lovers-cooking.webp", alt: "Travelers preparing Vietnamese dishes during a Hoi An cooking class", sourcePlatform: "viator", sourceProductId: "164857P1", sourcePage: "https://www.viator.com/tours/Hoi-An/Hoi-An-Eco-Cooking-Tour/d5229-164857P1", sourceType: "verified-provider", downloadedAt: verified },
    lastVerified: verified,
  },
  {
    id: "small-local-cooking",
    name: "Small Local Cooking & Fishing Experience",
    editorial: {
      label: "Best Small Local Experience",
      positioning: "A smaller-scale combination of local market, fishing, coconut-forest activities and cooking.",
      whyWePickedIt: "Its smaller-scale format offers an alternative to broader, activity-packed combinations.",
      bestFor: ["Couples", "Small groups", "Travelers preferring a smaller-scale experience"],
      notIdealFor: "Travelers wanting an activity-packed all-in-one itinerary.",
    },
    providers: { viator: { provider: "viator", productId: "201338P1", url: "https://www.viator.com/tours/Hoi-An/Eco-cooking-class-and-Fishing-tour-by-bamboo-basket-boat/d5229-201338P1?pid=P00316970&mcid=42383&medium=link&campaign=hal-cooking-201338", campaign: "hal-cooking-201338", enabled: true } },
    image: { src: "/images/experiences/cooking/small-local-cooking.webp", alt: "Small-group local cooking class in Hoi An", sourcePlatform: "viator", sourceProductId: "201338P1", sourcePage: "https://www.viator.com/tours/Hoi-An/Eco-cooking-class-and-Fishing-tour-by-bamboo-basket-boat/d5229-201338P1", sourceType: "verified-provider", downloadedAt: verified },
    lastVerified: verified,
  },
];

export const cookingQuickPicks = ["classic-market-cooking", "cocolocal-farm", "organic-farm-cooking"]
  .map((id) => cookingExperiences.find((experience) => experience.id === id))
  .filter((experience): experience is CookingExperience => Boolean(experience));
