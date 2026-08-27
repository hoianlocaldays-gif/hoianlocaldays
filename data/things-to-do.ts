export type HubItem = { id: string; title: string; shortDescription: string; bestFor?: string; examples?: string[]; category?: string; durationType?: string; href?: string; status: "live" | "informational" | "planned" };

export const thingsToDoQuickPicks: HubItem[] = [
  { id: "cooking-class", title: "Take a Hoi An Cooking Class", shortDescription: "Combine local food, markets and a hands-on activity in one experience.", bestFor: "First-time visitors, families and food lovers", href: "/cooking-classes-hoi-an", status: "live" },
  { id: "basket-boats", title: "Explore the Coconut Village & Basket Boats", shortDescription: "A light, social local activity that is easy to combine with other plans.", bestFor: "Families and first-time visitors", href: "/basket-boat-hoi-an", status: "live" },
  { id: "ancient-town", title: "Walk Hoi An Ancient Town", shortDescription: "Slow down for architecture, street life, craft and the changing light.", bestFor: "Culture, photography and first visits", status: "informational" },
  { id: "local-food", title: "Try Hoi An’s Local Food", shortDescription: "Use an evening to explore local dishes, markets and casual places to eat.", bestFor: "Food lovers and evening exploration", status: "informational" },
  { id: "my-son", title: "Visit My Son Sanctuary", shortDescription: "Add Cham heritage, archaeology and temple architecture when your stay allows it.", bestFor: "Culture travelers staying 3+ days", href: "/my-son-tours-from-hoi-an", status: "live" },
];

export const interestCategories: HubItem[] = [
  { id: "food-cooking", title: "Food & Cooking", shortDescription: "Taste, make and understand more of the food around you.", examples: ["Cooking classes", "Food tours", "Local dishes", "Markets"], href: "/cooking-classes-hoi-an", status: "live" },
  { id: "culture-old-town", title: "Culture & Old Town", shortDescription: "Explore Hoi An through places, craft and living heritage.", examples: ["Ancient Town", "Lanterns", "Temples", "Traditional crafts"], status: "informational" },
  { id: "family", title: "Family Activities", shortDescription: "Choose activities with variety and a manageable pace.", examples: ["Cooking", "Basket boats", "Beaches", "Workshops"], href: "/hoi-an-with-kids", status: "live" },
  { id: "nature", title: "Nature & Outdoors", shortDescription: "Move beyond the old town into Hoi An’s greener spaces.", examples: ["Coconut forest", "Cycling", "Beaches", "Countryside"], status: "informational" },
  { id: "wellness", title: "Relax & Wellness", shortDescription: "Leave room for slower, restorative parts of the trip.", examples: ["Spa", "Massage", "Beach time", "Slow cafés"], status: "informational" },
  { id: "my-son-trip", title: "My Son & Cultural Trips", shortDescription: "Use an extra day to explore Cham heritage beyond Hoi An.", examples: ["My Son Sanctuary", "Cham architecture", "Archaeology"], href: "/my-son-tours-from-hoi-an", status: "live" },
];

export const experienceFormats = [
  { title: "Hands-On", examples: ["Cooking classes", "Lantern making", "Craft workshops"], guidance: "Choose this when doing and making matter more than sightseeing." },
  { title: "Local Life", examples: ["Markets", "Countryside", "Food", "Farms"], guidance: "A better fit for travelers curious about the everyday setting around Hoi An." },
  { title: "Easy & Fun", examples: ["Basket boats", "Beach", "Family experiences"], guidance: "Useful when the group needs a low-friction activity with broad appeal." },
  { title: "Culture", examples: ["Old Town", "Historic houses", "Temples", "My Son"], guidance: "Prioritize context, architecture and heritage." },
  { title: "Half-Day Trips", examples: ["My Son", "Da Nang", "Countryside"], guidance: "See beyond Hoi An while keeping part of the day free." },
  { title: "Full-Day Trips", examples: ["Hue", "Ba Na Hills", "Central Vietnam excursions"], guidance: "Best when the destination is the main plan for the day." },
];

export const travelerTypes = [
  { title: "Couples", guidance: "Mix food, lanterns, cafés, countryside and a slower spa stop." },
  { title: "Families", guidance: "Prioritize cooking classes, basket boats, beaches and hands-on workshops." },
  { title: "Friends", guidance: "Combine food, cooking, cycling, bars and a day trip." },
  { title: "Solo Travelers", guidance: "Look for food tours, group cooking classes, cafés, walks and social activities." },
  { title: "First-Time Visitors", guidance: "Start with Ancient Town, local food, a cooking class and the countryside." },
];

export const timeAvailable = [
  { title: "A Few Hours", guidance: "Old Town · Coffee · Market · Spa" },
  { title: "Half Day", guidance: "Cooking class · Basket boat · Cycling · Food tour" },
  { title: "One Full Day", guidance: "Old Town + local experience + evening" },
  { title: "3 Days+", guidance: "Add beach, countryside or a day trip" },
];
