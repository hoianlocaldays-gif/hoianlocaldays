import Link from "next/link";
import { TrackedLink } from "@/components/tracked-link";
import { breadcrumbJsonLd } from "@/lib/jsonld";

const sourcePage = "hoi-an-food-guide";

const foodImages = {
  hero: "/images/editorial/food-guide/hero.webp",
  caoLau: "/images/editorial/food-guide/cao-lau.webp",
  chickenRice: "/images/editorial/food-guide/chicken-rice.webp",
  banhMi: "/images/editorial/food-guide/banh-mi.webp",
  banhXeo: "/images/editorial/food-guide/banh-xeo.webp",
  market: "/images/editorial/food-guide/market.webp",
  camNam: "/images/editorial/food-guide/cam-nam.webp",
} as const;

function FoodImage({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) {
  return <figure className="food-visual">
    <img src={src} alt={alt} width="1200" height="800" loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : "auto"} decoding="async" />
  </figure>;
}

const firstFoods = [
  { number: "01", name: "Cao lau", note: "Chewy noodles, pork, herbs, crisp elements and just enough concentrated sauce to coat the bowl.", anchor: "#cao-lau" },
  { number: "02", name: "Hoi An chicken rice", note: "Fragrant rice with shredded chicken and fresh, sharp accompaniments that keep the plate balanced.", anchor: "#chicken-rice" },
  { number: "03", name: "Banh mi", note: "A familiar Vietnamese format that is especially rewarding when the bread, filling, herbs and sauces stay in balance.", anchor: "#banh-mi" },
  { number: "04", name: "Hoi An-style banh xeo", note: "A small, crisp pancake intended to be wrapped with greens and dipped—not eaten as a plain pancake.", anchor: "#banh-xeo" },
  { number: "05", name: "Banh dap & Cam Nam clams", note: "Contrasting rice-paper textures and a riverside clam tradition associated with Cam Nam.", anchor: "#cam-nam" },
];

export function HoiAnFoodGuidePage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", url: "https://hoianlocaldays.com" },
    { name: "Things to Do in Hoi An", url: "https://hoianlocaldays.com/things-to-do-in-hoi-an" },
    { name: "Hoi An Food Guide", url: "https://hoianlocaldays.com/hoi-an-food-guide" },
  ]);

  return <main className="food-guide-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    <div className="breadcrumb"><Link href="/">Home</Link><span>›</span><Link href="/things-to-do-in-hoi-an">Things to Do</Link><span>›</span><span>Food Guide</span></div>

    <section className="food-guide-hero section">
      <div className="food-hero-copy"><p className="eyebrow">A local first-timer guide · Reviewed August 2026</p>
        <h1>Hoi An Food Guide: What to Eat &amp; How to Eat It</h1>
        <p>If this is your first visit and you have time for five foods, our local view would start with cao lau, Hoi An chicken rice, banh mi, banh xeo, and banh dap with Cam Nam clams.</p>
        <aside><strong>This is a practical shortlist, not a definitive ranking.</strong> The useful part is understanding texture, accompaniments and context—not collecting the longest list of famous dishes.</aside>
        <nav className="quick-nav" aria-label="On this page"><a href="#start-here">Five foods</a><a href="#market">Market</a><a href="#street-food">Street food</a><a href="#simple-plan">Simple plan</a></nav>
      </div>
      <FoodImage src={foodImages.hero} alt="A table spread of noodles, chicken rice, herbs and dipping sauces" priority />
    </section>

    <section className="food-shortlist section" id="start-here">
      <div className="food-guide-heading"><p className="eyebrow">Start with five</p><h2>The Foods We Would Prioritize</h2><p>Choose fewer dishes, then notice how each one is assembled and eaten.</p></div>
      <div className="food-shortlist-list">{firstFoods.map((food) => <a href={food.anchor} key={food.number}><span>{food.number}</span><h3>{food.name}</h3><p>{food.note}</p><b>Understand the dish ↓</b></a>)}</div>
    </section>

    <section className="food-deep-dive section" id="cao-lau">
      <FoodImage src={foodImages.caoLau} alt="A bowl inspired by cao lau with thick noodles, pork, herbs and crisp rice crackers" />
      <div className="food-story"><div className="food-section-label"><span>01</span><p className="eyebrow">Hoi An&apos;s defining noodle dish</p><h2>Cao Lau</h2></div>
        <div className="food-copy"><p className="food-answer"><strong>First, do not expect pho.</strong> Cao lau is built around thick, chewy noodles with a relatively small amount of concentrated sauce. Char siu-style pork, fresh herbs and crisp rice elements bring savory, fresh and crunchy contrasts to the same bowl.</p><div className="food-detail-grid"><article><h3>How to eat it</h3><p>Mix from the bottom before the first full bite so the sauce coats the noodles. Try the noodle, pork, herbs and crisp element together; texture is central to the dish.</p></article><article><h3>What visitors misunderstand</h3><p>A bowl with little liquid is not missing broth. Official local tourism descriptions also distinguish cao lau by its few spoonfuls of sauce rather than a soup-like serving.</p></article></div><p>Stories about Ba Le well water, island ash and Japanese or Chinese influence are repeated widely. Hoi An&apos;s history as an international trading port is well documented, but that does not prove one neat origin story for the noodle. We treat those production and influence stories as local lore unless stronger historical evidence supports a specific claim, and we do not assume every modern kitchen uses water from Ba Le well.</p><p>Vendors vary in noodle firmness, pork, sweetness, herbs and crisp toppings. Judge the bowl in front of you rather than looking for one supposedly canonical recipe.</p><Link className="context-link" href="/cao-lau-hoi-an">Use our complete Cao Lau guide to compare the noodles, method and eating style →</Link></div></div>
    </section>

    <section className="food-deep-dive food-image-right food-tone-yellow section" id="chicken-rice">
      <FoodImage src={foodImages.chickenRice} alt="Golden chicken rice with shredded chicken, fresh herbs, green papaya and broth" />
      <div className="food-story"><div className="food-section-label"><span>02</span><p className="eyebrow">Comforting but not plain</p><h2>Hoi An Chicken Rice</h2></div>
        <div className="food-copy"><p className="food-answer">Hoi An chicken rice commonly pairs fragrant rice cooked with chicken broth with shredded chicken, herbs, onion and tart or pickled accompaniments. Some plates include papaya salad, soup or a vendor-specific sauce.</p><div className="food-detail-grid"><article><h3>Why try it</h3><p>The appeal is balance: rich rice and chicken are lifted by herbs, onion and acidity. It is more than an undressed plate of chicken beside white rice.</p></article><article><h3>How to approach it</h3><p>Taste the components, then combine them. A little salad, herb or sauce with the chicken and rice often makes more sense than eating every part separately.</p></article></div><p>Recipes and presentation differ by vendor. Turmeric, chicken broth and shredded chicken are common descriptions, but HAL does not claim every Hoi An cook follows one formula or that the dish has one uncontested origin.</p></div></div>
    </section>

    <section className="food-deep-dive section" id="banh-mi">
      <FoodImage src={foodImages.banhMi} alt="A crisp banh mi filled with herbs, cucumber and pickled vegetables" />
      <div className="food-story"><div className="food-section-label"><span>03</span><p className="eyebrow">A familiar format, worth tasting here</p><h2>Hoi An Banh Mi</h2></div>
        <div className="food-copy"><p className="food-answer">Banh mi is found across Vietnam, and Hoi An did not invent it. It still belongs on our first-timer shortlist because a well-made sandwich shows how crisp bread, savory fillings, herbs, pickled vegetables, chili and sauce can work as one compact meal.</p><div className="food-detail-grid"><article><h3>What to notice</h3><p>The best-known shop is not the only valid version. Look for a crisp exterior, bread that does not overwhelm the filling, fresh herbs and enough sauce to connect the ingredients without turning the loaf soggy.</p></article><article><h3>Order for your needs</h3><p>Fillings and condiments vary widely. Ask about meat, pâté, egg, chili and sauces rather than assuming a menu name tells you every ingredient.</p></article></div><p>This guide deliberately avoids ranking banh mi shops. The decision here is whether the food belongs in your trip, not which queue has the strongest online fame.</p></div></div>
    </section>

    <section className="food-deep-dive food-image-right food-tone-green section" id="banh-xeo">
      <FoodImage src={foodImages.banhXeo} alt="Small crisp banh xeo pancakes served with rice paper, herbs and dipping sauce" />
      <div className="food-story"><div className="food-section-label"><span>04</span><p className="eyebrow">The wrap completes the dish</p><h2>Hoi An-Style Banh Xeo</h2></div>
        <div className="food-copy"><p className="food-answer">The local eating experience often uses relatively small, freshly fried pancakes. You cut or break the hot banh xeo, place it with herbs and vegetables in rice paper, roll it, then dip it in sauce.</p><div className="food-detail-grid"><article><h3>How to eat it</h3><p>Use a manageable piece of pancake, add greens and cucumber or other vegetables, wrap firmly, then dip. Staff will often demonstrate if you ask.</p></article><article><h3>What visitors misunderstand</h3><p>The wrapper, herbs and dipping sauce are not decorative side dishes. They temper the fried pancake and create the full contrast of hot, crisp, fresh and savory.</p></article></div><p>Eat banh xeo soon after it arrives. Once the pancake sits, its defining crispness fades. Sizes, fillings, wrappers and sauces vary across Central Vietnam and between Hoi An vendors, so this is practical local guidance rather than a universal rule.</p><Link className="context-link" href="/banh-xeo-hoi-an">Use our complete Banh Xeo guide for the wrapping sequence, sauce variations and regional comparison →</Link></div></div>
    </section>

    <section className="food-deep-dive section" id="cam-nam">
      <FoodImage src={foodImages.camNam} alt="Banh dap rice paper beside chopped clams with herbs, peanuts and chili" />
      <div className="food-story"><div className="food-section-label"><span>05</span><p className="eyebrow">A Cam Nam pairing</p><h2>Banh Dap &amp; Cam Nam Clams</h2></div>
        <div className="food-copy"><p className="food-answer">Banh dap combines soft, thin fresh rice paper with crisp grilled rice paper. Pressing or “smashing” the layers helps them cling together before you break off pieces and dip them.</p><p>Hoi An&apos;s heritage portal connects Cam Nam with banh dap and stir-fried clams served with crisp rice paper. Its local account describes clams gathered from the river and cooked with aromatics, spices and peanuts, while crisp rice paper can be used to scoop them.</p><div className="food-detail-grid"><article><h3>Why prioritize it</h3><p>It offers a different texture and setting from the better-known Ancient Town dishes, and it connects food with Cam Nam&apos;s riverside history without needing to call the experience untouched or “more authentic.”</p></article><article><h3>Who needs an alternative</h3><p>Travelers avoiding shellfish or the fermented fish-based dipping sauce should ask carefully about ingredients. Hoi An wontons are a practical alternative for the shortlist, though fillings and sauces still require checking.</p></article></div><p>Banh dap and clams may be ordered separately as well as together. Ask how the restaurant serves them instead of assuming every plate follows the same format.</p></div></div>
    </section>

    <section className="food-secondary section">
      <article><p className="eyebrow">A graceful specialty</p><h2>What About White Rose?</h2><p>White Rose is the visitor-friendly name for Hoi An&apos;s steamed banh bao and banh vac dumplings, commonly filled with shrimp or pork mixtures and served with fried shallots and dipping sauce. Reputable tourism sources describe a specialist family producer supplying the dumplings around Hoi An, but recipe and well-water stories are still often presented as family tradition rather than independently documented history.</p><p>It is worth trying. Our editorial judgment is simply that a time-limited first visit does not have to rank it above cao lau, chicken rice, banh xeo or Cam Nam foods.</p></article>
      <article><p className="eyebrow">A modern visitor ritual</p><h2>What About Mot?</h2><p>Mot&apos;s herbal drink is popular with visitors and visually associated with a walk through the Ancient Town. Enjoy it as a refreshing contemporary stop if it appeals to you.</p><p>HAL does not present its social-media visibility as proof that it is among Hoi An&apos;s most historically important foods or drinks.</p></article>
    </section>

    <section className="food-market section" id="market">
      <div><p className="eyebrow">Look beyond the photograph</p><h2>Visit Hoi An Market to Understand the Food</h2><p>A market visit becomes useful when ingredients start answering questions: what people buy, how they judge it and how it becomes a meal.</p><FoodImage src={foodImages.market} alt="Fresh herbs, banana blossom, green papaya and limes arranged at a morning market" /></div>
      <div><p>Based on current local observation, roughly 06:00–08:00 is the strongest window for active produce, meat, fish and seafood trade; 07:30–09:00 can still be useful. These are planning windows, not guaranteed opening hours for every stall or day.</p><p>Notice herbs, green papaya, banana blossom, spices, sauces and unfamiliar produce. Tra Que&apos;s vegetable-growing tradition is officially associated with herbs and greens used in dishes including cao lau, Mi Quang and banh xeo, but not every herb in every Hoi An meal should automatically be claimed as Tra Que produce.</p><div className="market-etiquette"><h3>Market etiquette that helps</h3><ul><li>Ask before close-up photographs of vendors.</li><li>Ask before touching or selecting produce.</li><li>Keep working lanes and customer space clear.</li><li>Avoid aggressive bargaining over a small amount.</li><li>Interact with curiosity rather than treating the market as a photo set.</li></ul></div><p>The evening market is a different experience: useful for snacks and atmosphere, but not a substitute for observing the morning food trade.</p><Link className="context-link" href="/hoi-an-market-guide">Use our full market guide to plan when to go and what to notice →</Link></div>
    </section>

    <section className="food-safety section" id="street-food">
      <div><p className="eyebrow">Reduce risk, never assume zero risk</p><h2>How to Approach Street Food</h2></div>
      <div><p className="food-rule">Choose a busy stall, watch the food being cooked, and eat it piping hot.</p><p>Busy turnover can be a useful signal, but it does not guarantee safety. Use it with other observations: whether cooked food is protected, whether raw and cooked ingredients are kept apart, whether equipment looks clean and whether perishable food is held hot, chilled or on ice. Travelers with sensitive stomachs may prefer freshly cooked hot dishes over raw garnishes or ingredients.</p><p>WHO guidance for travelers emphasizes thoroughly cooked food served steaming hot, separation of raw and cooked food, safe water and appropriate holding temperatures. No visual check can confirm every food-handling condition.</p><ul><li>If you have allergies, ask about ingredients, sauces, broths and garnishes.</li><li>If you have coeliac disease, ask specifically about shared surfaces, oil, utensils and sauces; language differences and cross-contact remain possible.</li><li>Choose conservatively when a food falls outside your personal risk tolerance.</li></ul><p className="food-sources">Public-health basis: <a href="https://www.who.int/docs/default-source/wpro---documents/posters/food-safety/guide-safe-food-for-travellers.pdf?sfvrsn=6d0d3448_2" target="_blank" rel="noopener noreferrer">WHO Guide on Safe Food for Travellers</a> and <a href="https://www.who.int/publications/i/item/WHO-HEP-NFS-AFS-2022.4" target="_blank" rel="noopener noreferrer">WHO/FAO street-food guidance</a>.</p></div>
    </section>

    <section className="food-learning section">
      <div><p className="eyebrow">From ingredient to plate</p><h2>Want to Learn How the Food Is Made?</h2></div>
      <div><p>For travelers who want to understand why the dishes taste the way they do, a cooking class with a useful market visit can connect ingredients, preparation and eating—especially when the guide lets guests smell, taste and identify produce rather than only naming it.</p><p>Choose a cooking-focused format when technique and kitchen time matter. Choose an all-in-one format when you deliberately want the market, basket boat and cooking in one half-day.</p><p>Check inclusions before separately visiting <Link href="/cam-thanh-coconut-village">Cam Thanh</Link> or booking a <Link href="/basket-boat-hoi-an">boat-only experience</Link>; many classes already include them.</p><div className="food-learning-links"><TrackedLink className="primary-button" href="/cooking-classes-hoi-an" sourcePage={sourcePage} destinationPage="/cooking-classes-hoi-an" section="learn_the_food" ctaId="food_cooking_classes">Compare Hoi An Cooking Classes</TrackedLink></div></div>
    </section>

    <section className="food-plan section" id="simple-plan">
      <div><p className="eyebrow">One flexible framework</p><h2>If You Only Have One Day to Eat in Hoi An</h2><p>This is a way to spread the eating, not a rigid itinerary. Availability varies, so use it as a sequence rather than a timetable.</p></div>
      <ol><li><span>Morning</span><div><h3>Use the market for context</h3><p>Walk through the active food areas, then choose a modest breakfast or snack rather than trying several full dishes immediately.</p></div></li><li><span>Lunch</span><div><h3>Choose one defining bowl or plate</h3><p>Cao lau or chicken rice makes a clear first meal. Give it enough attention to understand the components.</p></div></li><li><span>Afternoon</span><div><h3>Keep it light</h3><p>A drink, banh mi shared between two people or a break may be more useful than forcing another specialty.</p></div></li><li><span>Dinner</span><div><h3>Choose contrast</h3><p>Try banh xeo for the wrap experience, or cross toward Cam Nam for banh dap and clams if shellfish and fish sauce suit you.</p></div></li></ol>
      <nav aria-label="Continue planning"><Link href="/3-days-in-hoi-an">Fit Food Into a 3-Day Stay</Link><Link href="/things-to-do-in-hoi-an">Explore More of Hoi An</Link></nav>
    </section>

    <section className="food-final section"><p className="eyebrow">The HAL take</p><h2>Eat With Attention, Not Urgency</h2><p>You do not need to finish every famous-food checklist. A few well-chosen dishes, eaten with their textures and accompaniments understood, can tell you more about Hoi An than a rushed sequence of bites.</p><p>We separate local observation, sourced context and editorial judgment according to our <Link className="context-link" href="/editorial-methodology">editorial methodology</Link>.</p><p className="food-sources">Food context checked against the <a href="https://www.vietnam.travel/things-to-do/explore-food-hoi-an" target="_blank" rel="noopener noreferrer">Vietnam Tourism food guide</a>, <a href="https://danangfantasticity.com/en/tinh-hoa-am-thuc-da-nang/cao-lau-hoi-an" target="_blank" rel="noopener noreferrer">Da Nang tourism&apos;s cao lau reference</a>, <a href="https://www.hoianworldheritage.org.vn/en/news/Traditionnal-Hoi-An-food/Fresh-Rice-Paper-In-Cam-Nam-131.hwh" target="_blank" rel="noopener noreferrer">Hoi An heritage&apos;s Cam Nam account</a> and the <a href="https://danangfantasticity.com/tra-que-traditional-vegetable-farming-village-hoi-an" target="_blank" rel="noopener noreferrer">official Tra Que village reference</a>.</p></section>
  </main>;
}
