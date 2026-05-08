import { useState } from "react";
import { Phone, ChevronDown } from "lucide-react";

const G = "#1B7A3C";
const GOLD = "#F5A800";
const DARK = "#0E1A0F";
const sf = { fontFamily: "system-ui, -apple-system, sans-serif" };

const FAQ_SECTIONS = [
  {
    title: "General",
    icon: "🏠",
    items: [
      { q: "How long has EnviroCare been in business?", a: "EnviroCare was founded in 1958 in Alexander City, Alabama by Phillip M. Wedgworth. Today, his grandson Kevin runs day-to-day operations across three Alabama offices — Birmingham (Alabaster), Alexander City / Lake Martin, and Huntsville. That's 68 years and three generations of family pest control." },
      { q: "Do you require long-term contracts?", a: "No. We earn your business every quarter. You can cancel anytime with no penalties or fees. Compare that to Cook's, which requires a 15-month contract. We believe if we're doing a good job, you'll stay — and our average customer retention proves it." },
      { q: "Are your treatments safe for kids and pets?", a: "Yes. We use EPA-registered products that are family-safe once dry — typically about 30 minutes. If you have specific concerns like organic gardens, beehives, koi ponds, or sensitive pets, let your technician know and we'll adjust treatment accordingly." },
      { q: "What areas of Alabama do you serve?", a: "We serve most of Central and North Alabama from three offices: Birmingham office (Alabaster) covers Birmingham, Hoover, Chelsea, Pelham, Vestavia Hills, Mountain Brook, Homewood, Helena, Calera, and surrounding areas. Alexander City office covers Lake Martin, Dadeville, Eclectic, Auburn, and Opelika. Huntsville office covers Huntsville, Madison, Athens, Decatur, Hartselle, and North Alabama." },
      { q: "How do I get started?", a: "Call any office or fill out the contact form on our website. We'll schedule a free, no-obligation inspection — usually same day or next day. Your technician will walk your property, identify any issues, and give you a written report with recommendations and pricing. No pressure, no sales tactics." },
    ],
  },
  {
    title: "Pest Control",
    icon: "🐜",
    items: [
      { q: "What pests do you treat?", a: "We cover 30+ common Alabama pests including ants (fire, carpenter, Argentine, odorous house), cockroaches (German, American/palmetto, smokybrown), spiders (black widow, brown recluse, wolf), crickets, silverfish, centipedes, millipedes, earwigs, pill bugs, mice, rats, and more." },
      { q: "How often do you treat?", a: "Most residential customers choose quarterly service (every 90 days). We also offer monthly and bi-monthly options. Different pests are active in different seasons, so we adjust treatment each visit to target what's currently a problem." },
      { q: "What if I see pests between scheduled visits?", a: "Call us — we come back free. No call-out charge, no extra fee. Unlimited re-service is included in every plan. That's our guarantee, and it's one of the biggest reasons customers stay with us for decades." },
      { q: "How much does pest control cost?", a: "Quarterly pest control starts at $39/month (billed annually) or $129 per quarter. Most homes fall between $35-65/month depending on size and pest pressure. New customers get $50 off the initial service." },
    ],
  },
  {
    title: "Termite Control",
    icon: "🪵",
    items: [
      { q: "What termite treatment do you use?", a: "We're a Sentricon® Certified Specialist — that's the industry's best bait system. Sentricon eliminates the entire colony, not just the termites touching your house. We also offer liquid treatments (Termidor) for active infestations. Both come with our damage warranty." },
      { q: "What does the termite warranty cover?", a: "Our Elite plan includes up to $1,000,000 in repair coverage if termites cause structural damage while your protection is active. We also offer $250,000 and $500,000 tiers. Annual renewal keeps your coverage active — the renewal includes a full re-inspection." },
      { q: "How much does termite treatment cost?", a: "Termite treatment pricing depends on your home's size, construction type, and whether there's an active infestation. We provide exact pricing after the free inspection. Sentricon installation typically includes the first year's warranty, then annual renewal keeps coverage active." },
      { q: "When do termites swarm in Alabama?", a: "Subterranean termites typically swarm March through May in Alabama, though formosan termites can swarm into June. Swarmers look like flying ants with equal-length wings. If you see them inside your home, that means there's likely an established colony nearby — call us immediately for a free inspection." },
    ],
  },
  {
    title: "Mosquito & Tick Control",
    icon: "🦟",
    items: [
      { q: "How does mosquito treatment work?", a: "We apply a barrier treatment to your yard's foliage, shaded areas, and mosquito resting spots. The treatment kills mosquitoes on contact and continues working for about 21 days. Monthly treatments from April through October keep populations suppressed all season." },
      { q: "Is mosquito treatment safe near Lake Martin?", a: "Yes — specifically and only with EPA-approved waterfront products. We maintain proper buffers from the shoreline and use formulas that are effective against mosquitoes without harming the lake's aquatic ecosystem. This is a specialty for our Lake Martin team, not an afterthought." },
      { q: "Do you treat for ticks too?", a: "Yes. Tick treatment uses targeted yard applications to break the tick lifecycle. We focus on tall grass borders, wooded edges, leaf litter, and shaded areas where ticks wait for hosts. Especially important for waterfront and wooded properties, and families with dogs." },
      { q: "How much does mosquito control cost?", a: "New customers get 50% off their first mosquito treatment. Monthly programs run through peak season (April–October). Most properties are $65-95 per treatment depending on yard size. Bundle with pest control for additional savings." },
    ],
  },
  {
    title: "Billing & Service",
    icon: "💳",
    items: [
      { q: "How do I pay my bill?", a: "You can pay online through our customer portal, by phone, or by check. We accept all major credit cards and offer ACH autopay for convenience. Annual billing saves you money compared to quarterly billing." },
      { q: "Can I bundle services for a discount?", a: "Yes — bundling is the best value. Pest + termite saves 10%. Add mosquito or tick control and save 15%. Full bundle (pest + termite + mosquito + tick) saves 20%. One company, one technician, one bill." },
      { q: "Will I get the same technician every time?", a: "Yes. We assign a dedicated technician to your home who learns your property and knows your specific pest history. Our average technician tenure is 10+ years — you'll build a real relationship, not meet a new face every visit." },
      { q: "What if I'm not home during my scheduled service?", a: "No problem. Most of our exterior treatments don't require you to be home. If interior treatment is needed, we can arrange lockbox access or schedule a time that works. We'll notify you before and after every visit." },
    ],
  },
];

export default function FAQPage() {
  const [faqOpen, setFaqOpen] = useState({});

  const toggle = (section, idx) => {
    const key = `${section}-${idx}`;
    setFaqOpen(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div style={{ minHeight: "100vh", background: "#FEFDF8", fontFamily: "Georgia, serif" }}>
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [${FAQ_SECTIONS.flatMap(s => s.items).map(i => `{"@type":"Question","name":${JSON.stringify(i.q)},"acceptedAnswer":{"@type":"Answer","text":${JSON.stringify(i.a)}}}`).join(",")}]
        }
      `}</script>

      {/* HERO */}
      <section style={{ background: `linear-gradient(160deg, ${DARK}, #1a3a2a)`, color: "#fff", padding: "56px 40px 48px", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(245,168,0,0.12)", border: "1px solid rgba(245,168,0,0.3)", borderRadius: 5, padding: "5px 14px", marginBottom: 22 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: GOLD, letterSpacing: "0.1em", ...sf, textTransform: "uppercase" }}>
              Frequently Asked Questions
            </span>
          </div>
          <h1 style={{ fontSize: "clamp(32px,4vw,48px)", fontWeight: 400, lineHeight: 1.2, marginBottom: 16 }}>
            Questions? <em style={{ color: GOLD }}>We've Got Answers.</em>
          </h1>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", ...sf, lineHeight: 1.7 }}>
            68 years of pest control means we've heard every question. Here are the ones Alabama homeowners ask most.
          </p>
        </div>
      </section>

      {/* QUICK NAV */}
      <section style={{ background: "#f7f9f7", padding: "16px 40px", borderBottom: "1px solid rgba(27,122,60,0.08)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
          {FAQ_SECTIONS.map((sec, i) => (
            <a key={i} href={`#faq-${sec.title.toLowerCase().replace(/[^a-z]/g, "")}`} style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "8px 16px", borderRadius: 8, border: "1px solid rgba(27,122,60,0.12)", background: "#fff", fontSize: 13, fontWeight: 600, color: DARK, textDecoration: "none", ...sf, transition: "border-color 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.borderColor = G}
              onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(27,122,60,0.12)"}>
              <span>{sec.icon}</span> {sec.title}
            </a>
          ))}
        </div>
      </section>

      {/* FAQ SECTIONS */}
      <section style={{ padding: "48px 40px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          {FAQ_SECTIONS.map((sec, si) => (
            <div key={si} id={`faq-${sec.title.toLowerCase().replace(/[^a-z]/g, "")}`} style={{ marginBottom: 48 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                <span style={{ fontSize: 24 }}>{sec.icon}</span>
                <h2 style={{ fontSize: 22, fontWeight: 400, color: DARK }}>{sec.title}</h2>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {sec.items.map((item, i) => {
                  const key = `${si}-${i}`;
                  return (
                    <div key={i} style={{ background: "#fff", border: "1px solid rgba(27,122,60,0.1)", borderRadius: 10, overflow: "hidden" }}>
                      <button onClick={() => toggle(si, i)} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                        <span style={{ fontWeight: 700, color: DARK, fontSize: 14, ...sf, paddingRight: 16 }}>{item.q}</span>
                        <ChevronDown size={18} color="#9ca3af" style={{ flexShrink: 0, transform: faqOpen[key] ? "rotate(180deg)" : "none", transition: "transform 0.15s" }} />
                      </button>
                      {faqOpen[key] && (
                        <div style={{ padding: "0 20px 16px", color: "#4b5563", fontSize: 14, lineHeight: 1.7, ...sf, borderTop: "1px solid rgba(0,0,0,0.05)", paddingTop: 12 }}>{item.a}</div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: `linear-gradient(160deg, ${G}, #0d5a2a)`, padding: "56px 40px", textAlign: "center", color: "#fff" }}>
        <div style={{ maxWidth: 520, margin: "0 auto" }}>
          <h2 style={{ fontSize: 32, fontWeight: 400, lineHeight: 1.2, marginBottom: 12 }}>Still Have <em>Questions?</em></h2>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 15, ...sf, lineHeight: 1.7, marginBottom: 28 }}>
            Call any office and a real person will answer. No phone trees, no call centers.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            {[["Birmingham", "(205) 940-6360", "2059406360"], ["Lake Martin", "(256) 234-6162", "2562346162"], ["Huntsville", "(256) 937-7676", "2569377676"]].map(([name, phone, tel]) => (
              <a key={name} href={`tel:${tel}`} style={{ display: "flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 8, padding: "12px 18px", color: "#fff", textDecoration: "none", ...sf, fontSize: 14, fontWeight: 600 }}>
                <Phone size={14} /> {name} · {phone}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
