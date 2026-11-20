export type CookingLandingExperience = {
  id: string;
  name: string;
  location: string;
  bookingUrl: string;
  image: { src: string; alt: string; width: number; height: number };
  highlights: string[];
  dishes: string[];
  packages: Array<{
    id: string;
    name: string;
    duration: string;
    price: string;
    description: string;
    includes: string[];
  }>;
};

// Add future cooking products here. The page currently features only the first
// published experience, so new products can be introduced without rebuilding
// the page structure.
export const cookingLandingExperiences: CookingLandingExperience[] = [
  {
    id: "tra-que-garden",
    name: "Tra Que Garden",
    location: "Tra Que Vegetable Village, Hoi An",
    bookingUrl: "https://traquegarden.hoianlocaldays.com/?utm_source=hoi_an_local_days&utm_medium=referral&utm_campaign=hal_cooking_page#booking",
    image: {
      src: "/images/services/traque-guests.webp",
      alt: "Guests showing the Vietnamese dishes they prepared at Tra Que Garden",
      width: 1200,
      height: 900,
    },
    highlights: ["Family-run local host", "Maximum 10 guests", "English-speaking host", "Meal and recipes included"],
    dishes: ["Dipping sauce", "Green papaya salad", "Fried spring rolls", "Vietnamese banh xeo"],
    packages: [
      {
        id: "full-experience",
        name: "Full Experience",
        duration: "3 hours",
        price: "700,000 VND per adult",
        description: "Begin in the vegetable gardens, relax with a foot and shoulder massage, then cook and share the meal.",
        includes: ["Hands-on farming", "Foot and shoulder massage", "Four cooking preparations", "Shared meal"],
      },
      {
        id: "cooking-only",
        name: "Cooking Only",
        duration: "2 hours",
        price: "600,000 VND per adult",
        description: "Meet directly at the garden for practical cooking guidance and the same shared meal.",
        includes: ["Four cooking preparations", "All ingredients and equipment", "Shared meal", "Recipes to take home"],
      },
    ],
  },
];

export const featuredCookingExperience = cookingLandingExperiences[0];
