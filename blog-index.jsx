import { useState } from "react";
import { Phone, Clock, ArrowRight, Tag } from "lucide-react";

const G = "#1B7A3C";
const GOLD = "#F5A800";
const DARK = "#0E1A0F";
const sf = { fontFamily: "system-ui, -apple-system, sans-serif" };

const BLOG_POSTS = [
  {
    slug: "when-do-termites-swarm-alabama",
    title: "When Do Termites Swarm in Alabama?",
    excerpt: "Subterranean termites swarm from March through May across Alabama. Here's what the swarmers look like, why they appear, and what you should do if you see them inside your home.",
    date: "May 2026",
    readTime: "5 min read",
    category: "Termites",
    featured: true,
    content: `Alabama sits in the heart of the nation's heaviest termite pressure zone. The warm, humid climate that makes our state beautiful also makes it ideal for subterranean termites — the most destructive wood-destroying insect in North America.

WHEN TO EXPECT SWARMS

Subterranean termites typically swarm between March and May in Alabama. The exact timing depends on temperature and moisture — swarms usually happen after a warm rain when daytime temperatures reach the mid-70s. You'll see them most often in the morning or early afternoon.

Formosan termites, an aggressive invasive species increasingly found in Alabama, swarm later — usually May through June, and often in the evening near lights.

WHAT DO TERMITE SWARMERS LOOK LIKE?

Termite swarmers are often confused with flying ants. Here's how to tell them apart:

Termite swarmers have straight antennae (not elbowed like ants), a thick waist (ants have a pinched waist), and four wings of equal length that fall off easily. They're usually dark brown to black and about 3/8 inch long.

Flying ants have elbowed antennae, a narrow pinched waist, and front wings longer than back wings.

WHAT SWARMERS MEAN FOR YOUR HOME

If you see swarmers outside near a stump or woodpile, that's normal — there's a colony nearby but not necessarily in your home. If you see swarmers inside your house — especially near windows, doors, or light fixtures — that's a strong signal that a colony has already established itself in or under your structure.

A mature subterranean termite colony can contain 300,000 to 1 million workers. They consume wood 24 hours a day, 365 days a year. By the time you see swarmers, the colony has likely been active for 3-5 years.

WHAT TO DO IF YOU SEE SWARMERS

Don't panic — but do act quickly. Collect a few swarmers in a plastic bag (this helps your pest professional identify the species). Call EnviroCare for a free termite inspection. We'll assess your property, check the foundation, crawlspace, and attic, and give you a written report.

Our Sentricon® bait system eliminates the entire colony — not just the termites touching your house. And our Elite plan includes up to $1,000,000 in repair coverage.`,
  },
  {
    slug: "fire-ant-season-alabama",
    title: "Fire Ant Season in Alabama: What Homeowners Need to Know",
    excerpt: "Fire ants are active year-round in Alabama, but spring and fall are peak mound-building season. Here's how to protect your family and yard.",
    date: "April 2026",
    readTime: "4 min read",
    category: "Fire Ants",
    content: `If you've lived in Alabama for more than one summer, you've probably stepped on a fire ant mound. Red imported fire ants (Solenopsis invicta) are everywhere in our state — and they're not going away. Here's what you need to know about managing them around your home.

PEAK SEASON

Fire ants are active year-round in Alabama's mild climate, but you'll see the most mound activity in spring (March–May) and fall (September–November). During these periods, soil temperatures are in the 70-80°F range — perfect for colony expansion.

In the peak of summer, fire ants often go deeper underground during the hottest hours. In winter, they don't die — they just go dormant below the frost line and resurface when temperatures rise.

WHY FIRE ANTS ARE A REAL PROBLEM

Fire ant stings are painful and can be dangerous. Each sting injects alkaloid venom that causes a burning sensation and a characteristic white pustule. Most people get multiple stings because disturbing a mound triggers a coordinated colony attack.

For about 1-2% of the population, fire ant stings can cause anaphylaxis — a severe allergic reaction requiring emergency medical attention. Children, elderly people, and pets are especially at risk.

HOW WE TREAT FIRE ANTS

EnviroCare uses a two-pronged approach: broadcast bait treatment across the entire yard (the bait is carried back to the queen, eliminating the colony from within) plus direct mound treatment for active mounds. This combination provides 85-95% reduction within 2-4 weeks, with ongoing suppression through quarterly service.`,
  },
  {
    slug: "mosquito-control-lake-martin",
    title: "Mosquito Control Around Lake Martin Homes",
    excerpt: "Waterfront properties face unique mosquito pressure. Here's how EnviroCare treats Lake Martin homes with eco-safe products that protect both your family and the lake.",
    date: "April 2026",
    readTime: "4 min read",
    category: "Mosquitoes",
    content: `Lake Martin is one of Alabama's most beautiful places to live — but the same water that makes it special also creates ideal mosquito breeding habitat. Standing water in coves, marshy shoreline areas, and even rain-filled containers around your property can produce thousands of mosquitoes.

WATERFRONT CHALLENGES

Properties on Lake Martin face two mosquito pressures that inland homes don't: breeding habitat in shoreline areas you can't control, and drift from neighboring properties across the water.

This means standard "spray and pray" treatments don't work as well at the lake. You need a strategic barrier program that accounts for ongoing mosquito immigration from surrounding water sources.

OUR LAKE MARTIN APPROACH

EnviroCare's Lake Martin mosquito program uses EPA-approved products that are specifically formulated for use near bodies of water. We maintain proper buffers from the shoreline and never spray directly over water.

Our technicians treat the foliage, shaded rest areas, and breeding sites in your yard — including dock areas, boathouses, and covered patios. Monthly treatments from April through October keep populations suppressed all season.

We also address standing water issues on your property: clogged gutters, plant saucers, bird baths, and tire swings are all common breeding sites that we'll identify during your inspection.`,
  },
  {
    slug: "birmingham-termite-inspection-checklist",
    title: "Birmingham Termite Inspection: What to Look For",
    excerpt: "Birmingham's clay soil and humidity make it a hotspot for subterranean termites. Here's a homeowner's guide to spotting early warning signs before damage gets expensive.",
    date: "March 2026",
    readTime: "5 min read",
    category: "Termites",
    content: `Birmingham sits on red clay soil in one of the country's highest termite-pressure zones. If you own a home in the Birmingham metro — Hoover, Vestavia Hills, Mountain Brook, Homewood, Chelsea, Pelham, or Alabaster — annual termite inspections aren't optional. They're essential.

EARLY WARNING SIGNS

Mud tubes on your foundation walls — these pencil-width tunnels are highways termites build from the soil to the wood in your home. Check your foundation, crawlspace walls, and pier supports.

Hollow-sounding wood — tap baseboards, door frames, and window sills. If they sound hollow or papery, termites may have eaten the interior.

Discarded wings near windows — after swarming, termites shed their wings. Piles of tiny wings on windowsills or near light fixtures are a telltale sign.

Buckling floors or stuck doors — as termites damage structural wood, floors may buckle and doors/windows may become difficult to open or close.

BIRMINGHAM-SPECIFIC RISK FACTORS

Clay soil holds moisture close to foundations, creating ideal termite conditions. Older homes in Mountain Brook, Homewood, and Vestavia Hills often have wooden elements in contact with soil — a major risk factor. Crawlspaces with poor ventilation trap moisture that attracts termites.

New construction in Chelsea, Pelham, and Helena isn't immune — builders are required to treat the soil, but those treatments wear off after 5-7 years. If your home was built in 2018-2020, now is the time to get protected.

GET INSPECTED

EnviroCare offers free termite inspections from our Birmingham-area office in Alabaster. We check the foundation, crawlspace, attic, garage, and all exterior structures. You get a written report with photos — whether or not you hire us.`,
  },
];

export default function BlogIndex() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", ...new Set(BLOG_POSTS.map(p => p.category))];

  const filtered = selectedCategory === "All" ? BLOG_POSTS : BLOG_POSTS.filter(p => p.category === selectedCategory);
  const featured = BLOG_POSTS.find(p => p.featured);

  return (
    <div style={{ minHeight: "100vh", background: "#FEFDF8", fontFamily: "Georgia, serif" }}>

      {/* HERO */}
      <section style={{ background: `linear-gradient(160deg, ${DARK}, #1a3a2a)`, color: "#fff", padding: "56px 40px 48px", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(245,168,0,0.12)", border: "1px solid rgba(245,168,0,0.3)", borderRadius: 5, padding: "5px 14px", marginBottom: 22 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: GOLD, letterSpacing: "0.1em", ...sf, textTransform: "uppercase" }}>
              Pest Control Tips & Guides
            </span>
          </div>
          <h1 style={{ fontSize: "clamp(32px,4vw,48px)", fontWeight: 400, lineHeight: 1.2, marginBottom: 16 }}>
            The EnviroCare <em style={{ color: GOLD }}>Blog</em>
          </h1>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", ...sf, lineHeight: 1.7 }}>
            Practical pest control knowledge from 68 years of protecting Alabama homes. Real advice from real technicians — not marketing fluff.
          </p>
        </div>
      </section>

      {/* CATEGORY FILTER */}
      <section style={{ background: "#f7f9f7", padding: "16px 40px", borderBottom: "1px solid rgba(27,122,60,0.08)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setSelectedCategory(cat)} style={{
              padding: "8px 18px", borderRadius: 8, border: `1px solid ${selectedCategory === cat ? G : "rgba(27,122,60,0.12)"}`,
              background: selectedCategory === cat ? G : "#fff", color: selectedCategory === cat ? "#fff" : DARK,
              fontSize: 13, fontWeight: 600, cursor: "pointer", ...sf, transition: "all 0.2s"
            }}>
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* BLOG POSTS */}
      <section style={{ padding: "48px 40px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {filtered.map((post, i) => (
              <article key={i} style={{
                background: "#fff", border: `1px solid ${post.featured ? G : "rgba(27,122,60,0.1)"}`,
                borderRadius: 14, padding: "28px 28px", cursor: "pointer", transition: "border-color 0.2s, transform 0.15s",
                ...(post.featured ? { borderWidth: 2 } : {}),
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = G; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = post.featured ? G : "rgba(27,122,60,0.1)"; e.currentTarget.style.transform = "none"; }}>
                <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 14, flexWrap: "wrap" }}>
                  {post.featured && (
                    <span style={{ background: GOLD, color: DARK, padding: "3px 10px", borderRadius: 5, fontSize: 11, fontWeight: 800, ...sf }}>FEATURED</span>
                  )}
                  <span style={{ background: "#f0fdf4", color: G, padding: "3px 10px", borderRadius: 5, fontSize: 11, fontWeight: 700, ...sf }}>{post.category}</span>
                  <span style={{ fontSize: 12, color: "#9ca3af", ...sf, display: "flex", alignItems: "center", gap: 4 }}>
                    <Clock size={12} /> {post.readTime}
                  </span>
                  <span style={{ fontSize: 12, color: "#9ca3af", ...sf }}>{post.date}</span>
                </div>
                <h2 style={{ fontSize: 22, fontWeight: 400, color: DARK, lineHeight: 1.3, marginBottom: 10 }}>{post.title}</h2>
                <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.7, ...sf, marginBottom: 14 }}>{post.excerpt}</p>
                <div style={{ display: "flex", alignItems: "center", gap: 6, color: G, fontSize: 14, fontWeight: 700, ...sf }}>
                  Read full article <ArrowRight size={14} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: `linear-gradient(160deg, ${G}, #0d5a2a)`, padding: "56px 40px", textAlign: "center", color: "#fff" }}>
        <div style={{ maxWidth: 520, margin: "0 auto" }}>
          <h2 style={{ fontSize: 32, fontWeight: 400, lineHeight: 1.2, marginBottom: 12 }}>Have a Pest <em>Question?</em></h2>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 15, ...sf, lineHeight: 1.7, marginBottom: 28 }}>
            Can't find the answer on our blog? Call any office and talk to a real person — not a chatbot.
          </p>
          <a href="tel:2056495278" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: GOLD, color: DARK, borderRadius: 8, padding: "14px 28px", fontWeight: 800, fontSize: 15, textDecoration: "none", ...sf }}>
            <Phone size={16} /> (205) 649-5278
          </a>
        </div>
      </section>
    </div>
  );
}
