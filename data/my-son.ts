import type { CookingExperience } from "./cooking-classes";

export const mySonOverview = {
  id: "my-son-sanctuary-visit",
  name: "My Son Sanctuary Visit from Hoi An",
  editorial: {
    positioning: "A cultural trip beyond Hoi An focused on Cham heritage, Hindu temple architecture and archaeology.",
    bestFor: ["Culture and history travelers", "Architecture enthusiasts", "Photographers", "Travelers staying three days or longer"],
    notIdealFor: ["Very short Hoi An stays", "Travelers mainly prioritizing food, beaches or hands-on activities", "Young children with limited interest in historical sites"],
  },
  providers: {},
};

const verified = "2026-08-27";

export const mySonExperiences: CookingExperience[] = [
  {
    id: "myson-overall-group",
    name: "Small-Group My Son Morning Experience",
    editorial: {
      label: "Best Overall Group Tour",
      positioning: "A straightforward small-group My Son experience for first-time visitors who want transport, structure and guided context without arranging a private trip.",
      whyWePickedIt: "The organized small-group format is a clear starting point for first-time visitors who want context without a private schedule.",
      bestFor: ["First-time visitors", "Couples", "Solo travelers", "Travelers wanting an organized group experience"],
      notIdealFor: "Travelers wanting full schedule flexibility or visitors specifically seeking a private experience.",
    },
    providers: { viator: { provider: "viator", productId: "375749P1", url: "https://www.viator.com/tours/Hoi-An/My-Son-Morning-Daily-Tour-With-Small-Group-From-Hoi-An/d5229-375749P1?pid=P00316970&mcid=42383&medium=link&campaign=hal-myson-overall-viator", campaign: "hal-myson-overall-viator", enabled: true } },
    lastVerified: verified,
  },
  {
    id: "myson-early-morning",
    name: "Early-Morning My Son Experience",
    editorial: {
      label: "Best Early Morning",
      positioning: "An early-start option for travelers who prioritize visiting My Son earlier in the day and are comfortable with an early departure.",
      whyWePickedIt: "It gives early risers a distinct timing choice while leaving the afternoon available, without promising empty temples or particular weather.",
      bestFor: ["Early risers", "Photographers", "Travelers sensitive to daytime heat", "Visitors who want the afternoon free"],
      notIdealFor: "Travelers who dislike early starts or visitors wanting a slow morning in Hoi An.",
    },
    providers: { getyourguide: { provider: "getyourguide", productId: "514776", url: "https://www.getyourguide.com/hoi-an-l831/hoi-an-my-son-sanctuary-early-morning-visit-with-breakfast-t514776/?partner_id=QJ5SJBN&utm_medium=online_publisher&cmp=hal-myson-early-gyg", campaign: "hal-myson-early-gyg", enabled: true } },
    lastVerified: verified,
  },
  {
    id: "myson-private",
    name: "Private My Son Sanctuary Experience",
    editorial: {
      label: "Best Private Experience",
      positioning: "A private My Son option for travelers who value flexibility, personal pacing and a more individualized visit.",
      whyWePickedIt: "The private format directly addresses pace, flexibility and group-specific interests rather than competing as another shared excursion.",
      bestFor: ["Couples", "Families", "Small private groups", "Travelers who value flexibility"],
      notIdealFor: "Travelers mainly prioritizing the lowest-cost shared format.",
    },
    providers: { viator: { provider: "viator", productId: "212568P6", url: "https://www.viator.com/tours/Hoi-An/My-Son-sanctuary/d5229-212568P6?pid=P00316970&mcid=42383&medium=link&campaign=hal-myson-private-viator", campaign: "hal-myson-private-viator", enabled: true } },
    lastVerified: verified,
  },
  {
    id: "myson-bike",
    name: "My Son Bike & Countryside Experience",
    editorial: {
      label: "Best Active Experience",
      positioning: "An active alternative combining the journey toward My Son with cycling and countryside experience rather than treating the sanctuary as a simple vehicle-based excursion.",
      whyWePickedIt: "Cycling makes the journey and countryside part of the experience, creating a clearly different choice from vehicle-based visits.",
      bestFor: ["Active travelers", "Cyclists", "Couples", "Travelers wanting countryside + culture"],
      notIdealFor: "Travelers wanting the easiest or quickest My Son visit, or visitors who do not enjoy cycling.",
    },
    providers: { viator: { provider: "viator", productId: "20353P5", url: "https://www.viator.com/tours/Hoi-An/Half-Day-My-Son-Bike-Tour-from-Hoi-An/d5229-20353P5?pid=P00316970&mcid=42383&medium=link&campaign=hal-myson-bike-viator", campaign: "hal-myson-bike-viator", enabled: true } },
    lastVerified: verified,
  },
  {
    id: "myson-adventure",
    name: "My Son Trekking & Nature Experience",
    editorial: {
      label: "Best Nature & Adventure",
      positioning: "A more active My Son combination for travelers who want to pair cultural sightseeing with trekking and nature rather than a conventional sanctuary-only visit.",
      whyWePickedIt: "The nature and trekking focus offers a meaningfully different format for active or repeat visitors.",
      bestFor: ["Active travelers", "Nature lovers", "Repeat visitors", "Travelers wanting something less conventional"],
      notIdealFor: "Travelers wanting a simple half-day My Son visit or visitors prioritizing minimum walking and activity.",
    },
    providers: { getyourguide: { provider: "getyourguide", productId: "519118", url: "https://www.getyourguide.com/hoi-an-l831/my-son-sanctuary-and-mountain-trekking-pilgrimage-t519118/?partner_id=QJ5SJBN&utm_medium=online_publisher&cmp=hal-myson-adventure-gyg", campaign: "hal-myson-adventure-gyg", enabled: true } },
    lastVerified: verified,
  },
];

export const mySonQuickPicks = mySonExperiences.slice(0, 3);

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
