import { useState } from "react";
import { Phone, ChevronDown } from "lucide-react";

const G = "#1B7A3C";
const GOLD = "#F5A800";
const DARK = "#0E1A0F";
const sf = { fontFamily: "system-ui, -apple-system, sans-serif" };

const FAQS = [
  { q: "Are earwigs dangerous?", a: "No. Despite the old myth that they crawl into ears, earwigs are harmless to humans. They don't bite, sting, or transmit disease. However, they can damage seedlings, flowers, and soft fruits in gardens — and large numbers inside your home are a nuisance nobody wants." },
  { q: "Why do I have earwigs in my house?", a: "Earwigs come inside seeking moisture and shelter, especially during Alabama's hottest summer months or after heavy rain. They enter through cracks in foundations, gaps around doors, and utility penetrations. If you're finding them regularly, there's likely a moisture issue or entry point we can address." },
  { q: "When are earwigs most active in Alabama?", a: "Earwigs are most active from late spring through early fall (May–September) in Alabama. They're nocturnal — you'll rarely see them during the day. They hide in damp, dark places: mulch beds, under stones, in flower pots, and around outdoor faucets." },
  { q: "How do you treat for earwigs?", a: "We use a combination of perimeter barrier treatment around your foundation, targeted treatment at entry points, and granular bait in mulch beds and landscape areas where earwigs harbor. Our quarterly pest control program includes earwig treatment as part of the 30+ pest coverage." },
  { q: "Can I prevent earwigs myself?", a: "You can reduce earwig pressure by moving mulch 6 inches from your foundation, fixing leaky outdoor faucets, sealing cracks around doors and windows, and reducing ground-level clutter. But for established populations, professional perimeter treatment is the most effective solution." },
];

export default function EarwigControl() {
  const [faqOpen, setFaqOpen] = useState(null);
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <div style={{ minHeight: "100vh", background: "#FEFDF8", fontFamily: "Georgia, serif" }}>
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Earwig Control - EnviroCare",
          "description": "Professional earwig control for Alabama homes. Perimeter treatment, entry point sealing, and ongoing quarterly protection. Part of our 30+ pest coverage plan.",
          "provider": {
            "@type": "Organization",
            "name": "EnviroCare Pest & Termite Services",
            "telephone": "+12056495278",
            "url": "https://envirocarellc.com"
          },
          "areaServed": ["Birmingham, AL", "Huntsville, AL", "Alexander City, AL"]
        }
      `}</script>

      {/* HERO */}
      <section style={{ background: `linear-gradient(160deg, ${DARK}, #2a1a0f)`, color: "#fff", padding: "72px 40px 64px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: 60, top: 40, fontSize: 180, opacity: 0.05, pointerEvents: "none", userSelect: "none", lineHeight: 1 }}>🪲</div>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(245,168,0,0.12)", border: "1px solid rgba(245,168,0,0.3)", borderRadius: 5, padding: "5px 14px", marginBottom: 22 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: GOLD, letterSpacing: "0.1em", ...sf, textTransform: "uppercase" }}>
              Included in 30+ Pest Coverage
            </span>
          </div>
          <h1 style={{ fontSize: "clamp(34px,4.5vw,58px)", fontWeight: 400, lineHeight: 1.1, marginBottom: 6 }}>
            Earwig Control
          </h1>
          <h1 style={{ fontSize: "clamp(34px,4.5vw,58px)", fontWeight: 700, lineHeight: 1.1, marginBottom: 22, color: GOLD }}>
            Alabama Specialists.
          </h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", lineHeight: 1.75, maxWidth: 560, marginBottom: 32, ...sf }}>
            Earwigs love Alabama's humidity. They hide in mulch, under stones, and around foundations — then sneak inside through cracks. Our perimeter barrier treatment stops them at the source and keeps them from coming back.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 36 }}>
            <button onClick={() => setQuoteOpen(true)} style={{ background: GOLD, color: DARK, border: "none", borderRadius: 8, padding: "14px 28px", fontWeight: 800, fontSize: 15, cursor: "pointer", ...sf }}>Get Free Inspection</button>
            <a href="tel:2056495278" style={{ display: "flex", alignItems: "center", gap: 8, background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.25)", borderRadius: 8, padding: "14px 22px", fontWeight: 600, fontSize: 15, textDecoration: "none", ...sf }}>
              <Phone size={16} /> (205) 649-5278
            </a>
          </div>
        </div>
      </section>

      {/* EARWIG FACTS */}
      <section style={{ padding: "72px 40px", background: "#f7f9f7" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontSize: 28, fontWeight: 400, color: DARK, textAlign: "center", marginBottom: 40 }}>Earwigs in <em style={{ color: G }}>Alabama</em></h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
            {[
              { icon: "🔍", title: "Identification", desc: "Dark brown, 5/8 to 1 inch long with distinctive pincers (cerci) on their rear. Fast runners. Nocturnal — you'll find them under objects during the day." },
              { icon: "💧", title: "Why Alabama?", desc: "Alabama's high humidity and warm temperatures create ideal earwig habitat. They thrive in mulch beds, under landscape timbers, and around irrigation systems." },
              { icon: "🏠", title: "How They Get Inside", desc: "Through foundation cracks, gaps under doors, around utility pipes, and through window well drains. They're attracted to moisture — bathrooms, kitchens, and laundry rooms." },
              { icon: "🌿", title: "Garden Damage", desc: "Earwigs feed on soft plant tissue, seedlings, flower petals (especially dahlias and zinnias), and soft fruits. They can damage ornamental gardens if populations are large." },
              { icon: "📅", title: "Peak Season", desc: "Most active May through September in Alabama. Population peaks mid-summer when heat drives them to seek cooler, moist hiding spots — often inside your home." },
              { icon: "✅", title: "Our Treatment", desc: "Perimeter barrier around foundation, granular bait in landscape beds, crack-and-crevice treatment at entry points. Included in quarterly pest control service." },
            ].map((item, i) => (
              <div key={i} style={{ background: "#fff", border: "1px solid rgba(27,122,60,0.1)", borderRadius: 12, padding: "22px 20px" }}>
                <div style={{ fontSize: 24, marginBottom: 10 }}>{item.icon}</div>
                <div style={{ fontWeight: 700, fontSize: 14, color: DARK, ...sf, marginBottom: 8 }}>{item.title}</div>
                <div style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.65, ...sf }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "#FEFDF8", padding: "56px 40px" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <h2 style={{ fontSize: 26, fontWeight: 400, color: DARK, marginBottom: 28, textAlign: "center" }}>Earwig Control FAQ</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {FAQS.map((item, i) => (
              <div key={i} style={{ background: "#fff", border: "1px solid rgba(27,122,60,0.1)", borderRadius: 10, overflow: "hidden" }}>
                <button onClick={() => setFaqOpen(faqOpen === i ? null : i)} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                  <span style={{ fontWeight: 700, color: DARK, fontSize: 14, ...sf, paddingRight: 16 }}>{item.q}</span>
                  <ChevronDown size={18} color="#9ca3af" style={{ flexShrink: 0, transform: faqOpen === i ? "rotate(180deg)" : "none", transition: "transform 0.15s" }} />
                </button>
                {faqOpen === i && (
                  <div style={{ padding: "0 20px 16px", color: "#4b5563", fontSize: 14, lineHeight: 1.7, ...sf, borderTop: "1px solid rgba(0,0,0,0.05)", paddingTop: 12 }}>{item.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: `linear-gradient(160deg, ${G}, #0d5a2a)`, padding: "56px 40px", textAlign: "center", color: "#fff" }}>
        <div style={{ maxWidth: 520, margin: "0 auto" }}>
          <h2 style={{ fontSize: 32, fontWeight: 400, lineHeight: 1.2, marginBottom: 12 }}>Stop Earwigs <em>For Good</em></h2>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 15, ...sf, lineHeight: 1.7, marginBottom: 28 }}>
            Earwig control is included in our quarterly pest control plan — 30+ pests covered, starting at $39/month.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 14 }}>
            <button onClick={() => setQuoteOpen(true)} style={{ background: GOLD, color: DARK, border: "none", borderRadius: 8, padding: "14px 28px", fontWeight: 800, fontSize: 15, cursor: "pointer", ...sf }}>Get Free Inspection</button>
            <a href="tel:2056495278" style={{ display: "flex", alignItems: "center", gap: 8, background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.3)", borderRadius: 8, padding: "14px 20px", fontWeight: 600, fontSize: 15, textDecoration: "none", ...sf }}>
              <Phone size={16} /> (205) 649-5278
            </a>
          </div>
        </div>
      </section>

      {quoteOpen && (
        <div onClick={() => setQuoteOpen(false)} style={{ position: "fixed", inset: 0, background: "rgba(14,26,15,0.75)", zIndex: 999, display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}>
          <div onClick={e => e.stopPropagation()} style={{ background: "#FEFDF8", borderRadius: 16, width: "100%", maxWidth: 420, overflow: "hidden", boxShadow: "0 30px 80px rgba(0,0,0,0.4)" }}>
            <div style={{ background: G, color: "#fff", padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: 18 }}>Free Earwig Inspection</div>
                <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 12, marginTop: 4, ...sf }}>We'll call within 2 hours</div>
              </div>
              <button onClick={() => setQuoteOpen(false)} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.55)", fontSize: 26, cursor: "pointer", lineHeight: 1 }}>×</button>
            </div>
            <div style={{ padding: "22px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 14 }}>
                {["Earwig problem inside", "Earwigs in garden/landscape", "General pest control", "Not sure — just inspect"].map(o => (
                  <button key={o} style={{ textAlign: "left", padding: "12px 16px", border: "1.5px solid rgba(27,122,60,0.15)", borderRadius: 10, background: "none", cursor: "pointer", fontSize: 14, color: "#374151", ...sf }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = G; e.currentTarget.style.background = "#f0fdf4"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(27,122,60,0.15)"; e.currentTarget.style.background = "none"; }}>
                    {o}
                  </button>
                ))}
              </div>
              <a href="tel:2056495278" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "13px", background: G, color: "#fff", borderRadius: 8, fontWeight: 800, fontSize: 15, textDecoration: "none", ...sf }}>
                <Phone size={16} /> (205) 649-5278
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
