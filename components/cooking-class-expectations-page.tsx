import Link from "next/link";
import { TrackedLink } from "@/components/tracked-link";
import { breadcrumbJsonLd } from "@/lib/jsonld";

const sourcePage = "what-to-expect-hoi-an-cooking-class";

export function CookingClassExpectationsPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", url: "https://hoianlocaldays.com" },
    { name: "Things to Do in Hoi An", url: "https://hoianlocaldays.com/things-to-do-in-hoi-an" },
    { name: "Hoi An Cooking Class Expectations", url: "https://hoianlocaldays.com/what-to-expect-hoi-an-cooking-class" },
  ]);

  return <main className="cooking-expect-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    <div className="breadcrumb"><Link href="/">Home</Link><span>›</span><Link href="/things-to-do-in-hoi-an">Things to Do</Link><span>›</span><span>Cooking Class Expectations</span></div>

    <section className="cooking-expect-hero section">
      <div><p className="eyebrow">Informational decision guide · Reviewed August 2026</p><h1>What Happens in a Hoi An Cooking Class?</h1><p>A Hoi An cooking class can mean a focused lesson at a cooking station, a market visit followed by cooking, or a half-day combination with countryside activities. Understanding the format matters more than choosing the first attractive listing.</p><aside><strong>Quick answer:</strong> expect guided preparation, cooking and eating—but do not assume every guest performs every step. Check how hands-on the class is, what else is included and how much time remains for actual instruction.</aside></div>
      <figure><img src="/images/experiences/cooking/classic-market-cooking.webp" alt="Guests preparing Vietnamese dishes at an organized Hoi An cooking station" width="1200" height="800" fetchPriority="high" decoding="async" /><figcaption>A cooking class should be judged by participation and instruction, not only by how photogenic it looks.</figcaption></figure>
      <nav className="quick-nav" aria-label="On this page"><a href="#formats">Formats</a><a href="#market-value">Market visit</a><a href="#hands-on">Hands-on cooking</a><a href="#checklist">Booking checklist</a></nav>
    </section>

    <section className="cooking-expect-flow section">
      <div><p className="eyebrow">A representative flow</p><h2>What Does a Hoi An Cooking Class Usually Include?</h2></div>
      <div><p>A combination experience may begin with pickup or a meeting point, continue through a market or ingredient introduction, add a countryside activity, then move to preparation, guided cooking and eating. A cooking-only class normally starts at the venue and protects more of the session for instruction.</p><ol><li><span>01</span><p>Meet or arrive</p></li><li><span>02</span><p>Explore ingredients or an optional local activity</p></li><li><span>03</span><p>Prepare and cook with guidance</p></li><li><span>04</span><p>Eat the dishes and finish the experience</p></li></ol><small>Actual order, menu, transport and activities vary by provider. This is a planning model, not a universal schedule.</small></div>
    </section>

    <section className="cooking-expect-formats section" id="formats">
      <div><p className="eyebrow">Choose the experience before the provider</p><h2>Cooking-Only vs a Half-Day Experience</h2></div>
      <div className="cooking-expect-format-grid"><article><span>01</span><h3>Cooking-only</h3><p>Arrive at the venue, focus on preparation and cooking, then eat what you make.</p><strong>Better when</strong><ul><li>Technique is your main priority.</li><li>You already visited a market or Cam Thanh.</li><li>You want a shorter, more focused session.</li></ul></article><article><span>02</span><h3>Market + cooking</h3><p>Adds ingredient context before the class when the market visit is purposeful.</p><strong>Better when</strong><ul><li>You want to identify unfamiliar produce and herbs.</li><li>You want the menu connected to local food habits.</li><li>You have not yet explored a working market.</li></ul></article><article><span>03</span><h3>Half-day local experience</h3><p>May combine a market, countryside or farm setting, basket boats, transport and cooking.</p><strong>Better when</strong><ul><li>This is your first Hoi An visit.</li><li>You want variety in one time block.</li><li>Cooking depth is not the only priority.</li></ul></article></div>
    </section>

    <section className="cooking-expect-market section" id="market-value">
      <figure><img src="/images/editorial/market-guide/interaction.webp" alt="Hands selecting fresh ingredients in a working market context" width="1200" height="800" loading="lazy" decoding="async" /></figure>
      <div><p className="eyebrow">Information gain, not a walk-through</p><h2>Does the Market Visit Actually Add Value?</h2><p>A useful market segment helps you see ingredients, smell herbs, identify produce, observe selection and understand how those ingredients connect to the dishes you will cook.</p><p>A weaker visit can become a quick walk while the guide talks and the group moves on. That does not make all market tours superficial; it means travelers should check what interaction and explanation are included.</p><div className="cooking-expect-rule"><strong>A good question:</strong><span>Will the market visit help me recognize or choose ingredients later?</span></div><Link href="/hoi-an-market-guide">Understand Hoi An Market before you go →</Link></div>
    </section>

    <section className="cooking-expect-addons section">
      <div><p className="eyebrow">More variety, less focus</p><h2>Why Some Classes Include Basket Boats or Farms</h2><p>Combination experiences can place several recognizable Hoi An activities into one half-day block. That can be efficient and enjoyable for first-time visitors.</p></div>
      <div className="cooking-expect-choice"><article><h3>Choose the combination when…</h3><ul><li>You have limited time and want variety.</li><li>Cam Thanh or countryside context appeals to you.</li><li>You are comfortable sharing the session between activities and cooking.</li></ul><p><Link href="/cam-thanh-coconut-village">Understand Cam Thanh →</Link><br /><Link href="/basket-boat-hoi-an">Compare basket boat formats →</Link></p></article><article><h3>Keep it cooking-focused when…</h3><ul><li>You mainly want transferable technique.</li><li>You already visited Cam Thanh or took a basket boat.</li><li>You prefer a calmer venue and fewer transitions.</li></ul></article></div>
    </section>

    <section className="cooking-expect-hands section" id="hands-on">
      <div><p className="eyebrow">Participation varies</p><h2>How Hands-On Will the Cooking Be?</h2></div>
      <div><p>The label “cooking class” does not guarantee that every guest prepares every ingredient or cooks every dish independently. Some sessions use individual stations; others divide work across a group or combine demonstrations with selected hands-on steps.</p><p>A strong class teaches techniques and decisions you can use again—not only a one-time performance that produces a good photograph.</p><ul><li>Individual workstation or shared cooking?</li><li>Demonstration, guided practice or both?</li><li>Do you prepare your own dish?</li><li>How much does the instructor complete for guests?</li><li>Are recipes or written instructions provided?</li></ul></div>
    </section>

    <section className="cooking-expect-group section">
      <figure><img src="/images/experiences/cooking/personal-market-cooking.webp" alt="Instructor demonstrating a cooking step to guests in Hoi An" width="1200" height="800" loading="lazy" decoding="async" /></figure>
      <div><p className="eyebrow">Attention changes with scale</p><h2>Does Group Size Matter?</h2><p>Based on HAL&apos;s current operational observation, a class around 15 guests or more can begin to feel meaningfully larger. This is an editorial reference—not an industry definition or proof of quality.</p><div className="cooking-expect-choice"><article><h3>Smaller group</h3><p>Easier questions, more instructor attention and often a calmer pace.</p></article><article><h3>Larger group</h3><p>Potentially more social and energetic, while instructor attention is distributed more widely.</p></article></div><p>Staffing, room layout and teaching method can matter as much as the headline number.</p></div>
    </section>

    <section className="cooking-expect-menu section">
      <div><p className="eyebrow">The menu is only the beginning</p><h2>What Will You Cook?</h2><figure><img src="/images/experiences/cooking/food-lovers-cooking.webp" alt="Guests seated with several finished Vietnamese dishes after a Hoi An cooking session" width="1200" height="800" loading="lazy" decoding="async" /></figure></div>
      <div><p>Menus vary by provider and may include different numbers of dishes, preparation steps and levels of participation. A long menu does not automatically mean more learning if key work is completed before guests arrive.</p><div className="cooking-expect-menu-grid"><article><strong>Ask about the dishes</strong><p>How many dishes are included, and are they connected to Vietnamese or Hoi An food?</p></article><article><strong>Ask about participation</strong><p>Does each guest cook every dish, or does the group divide tasks?</p></article><article><strong>Ask about learning</strong><p>Are recipes provided, and can the techniques be recreated in a normal home kitchen?</p></article><article><strong>Ask about eating</strong><p>Is time protected to sit down and eat rather than rushing immediately to the next dish?</p></article></div><p>Use the <Link href="/hoi-an-food-guide">Hoi An Food Guide</Link> for broader dish context. Individual classes do not necessarily teach <Link href="/cao-lau-hoi-an">cao lau</Link> or <Link href="/banh-xeo-hoi-an">banh xeo</Link>.</p></div>
    </section>

    <section className="cooking-expect-diet section">
      <div><p className="eyebrow">Contact the provider before arrival</p><h2>Dietary Requirements and Allergies</h2></div>
      <div><p>Vegetarian, vegan, no-pork, seafood-free, nut-free, dairy-free and gluten-free requests may require different ingredients, sauces or preparation. Do not assume every provider can accommodate every restriction.</p><p><strong>Ingredient substitution and cross-contact control are different questions.</strong> Removing an ingredient does not establish that shared knives, boards, pans, oil, sauces or work surfaces are suitable for someone with coeliac disease or a serious allergy.</p><ol><li>Describe the exact restriction and its seriousness before booking.</li><li>Ask which ingredients and sauces will be changed.</li><li>Ask about shared equipment and preparation surfaces where cross-contact matters.</li><li>Request a clear answer rather than relying only on a menu label.</li></ol><p>This is risk-reduction guidance, not a medical or kitchen-safety guarantee.</p></div>
    </section>

    <section className="cooking-expect-family section">
      <div><p className="eyebrow">Match the class to the child</p><h2>Are Cooking Classes Good With Kids?</h2></div>
      <div><p>They can be engaging because children touch ingredients, follow visible steps and eat the result. Suitability still depends on the child, class length, venue and how much active supervision is available.</p><ul><li>Are children accepted, and do they cook or mainly observe?</li><li>Will they use knives, hot pans or other equipment?</li><li>Who provides direct supervision during those steps?</li><li>Is the full market or basket-boat combination appropriate for their energy?</li><li>Can the menu be adjusted without leaving the child disengaged?</li></ul><p>Children using knives, heat or cooking equipment should be actively observed rather than assumed to manage independently.</p><Link href="/hoi-an-with-kids">Plan the wider Hoi An family trip →</Link></div>
    </section>

    <section className="cooking-expect-worth section">
      <div><p className="eyebrow">Use half a day deliberately</p><h2>Is a Half-Day Cooking Experience Worth It?</h2></div>
      <div className="cooking-expect-choice"><article><h3>Often worthwhile when…</h3><ul><li>This is your first Hoi An visit.</li><li>You want ingredients, local context, an activity, cooking and a meal together.</li><li>You value variety more than an advanced technical lesson.</li></ul></article><article><h3>Possibly unnecessary when…</h3><ul><li>You already visited the market and Cam Thanh.</li><li>Cooking skill is the only priority.</li><li>Your itinerary is extremely tight.</li><li>Young children may struggle with the total experience length.</li></ul></article></div>
    </section>

    <section className="cooking-expect-checklist section" id="checklist">
      <div><p className="eyebrow">Before choosing a listing</p><h2>What to Check Before Booking</h2></div>
      <ol><li><span>01</span><p>Cooking-only or combination?</p></li><li><span>02</span><p>Which activities and transport are included?</p></li><li><span>03</span><p>Is the market visit interactive or mainly observational?</p></li><li><span>04</span><p>Individual workstation or shared cooking?</p></li><li><span>05</span><p>Expected group size?</p></li><li><span>06</span><p>Menu, number of dishes and who cooks each one?</p></li><li><span>07</span><p>Dietary requirements confirmed in advance?</p></li><li><span>08</span><p>Child policy and supervision?</p></li><li><span>09</span><p>Total approximate duration and pickup?</p></li><li><span>10</span><p>Recipes, instructions and optional costs?</p></li></ol>
    </section>

    <section className="cooking-expect-next section">
      <div><p className="eyebrow">Now compare the right format</p><h2>Compare Hoi An Cooking Classes</h2></div>
      <div><p>Once you know whether you want cooking-only, market context or a broader half-day combination, use our separate comparison page to evaluate current experience options. Prices and availability belong there rather than in this evergreen guide.</p><TrackedLink className="primary-button" href="/cooking-classes-hoi-an" sourcePage={sourcePage} destinationPage="/cooking-classes-hoi-an" section="planning_next_step" ctaId="expectations_compare_cooking">Compare Hoi An Cooking Classes</TrackedLink></div>
    </section>

    <section className="cooking-expect-sources section"><div><p className="eyebrow">Editorial basis</p><h2>How This Guide Was Built</h2></div><div><p>This guide uses HAL&apos;s current owner/operator observations about class flow, market interpretation, teaching quality, group scale, dietary preparation and child supervision. Broad judgments are presented as guidance rather than universal provider standards.</p><p>Read more about our <Link href="/editorial-methodology">editorial methodology</Link>.</p></div></section>
  </main>;
}
