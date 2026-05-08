import { useState } from "react";
import { Phone, ChevronDown } from "lucide-react";

const G = "#1B7A3C";
const GOLD = "#F5A800";
const DARK = "#0E1A0F";
const sf = { fontFamily: "system-ui, -apple-system, sans-serif" };

export default function SpiderControl() {
  const [faqOpen, setFaqOpen] = useState(null);
  return (
    <div style={{ minHeight: "100vh", background: "#FEFDF8", fontFamily: "Georgia, serif" }}>
      <section style={{ background: `linear-gradient(160deg, ${DARK}, #1a3a2a)`, color: "#fff", padding: "72px 40px 64px", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(245,168,0,0.12)", border: "1px solid rgba(245,168,0,0.3)", borderRadius: 5, padding: "5px 14px", marginBottom: 22 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: GOLD, letterSpacing: "0.1em", ...sf, textTransform: "uppercase" }}>Included in 30+ Pest Coverage</span>
          </div>
          <h1 style={{ fontSize: "clamp(34px,4.5vw,58px)", fontWeight: 400, lineHeight: 1.1, marginBottom: 6 }}>Spider Control</h1>
          <h1 style={{ fontSize: "clamp(34px,4.5vw,58px)", fontWeight: 700, lineHeight: 1.1, marginBottom: 22, color: GOLD }}>Alabama Specialists.</h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", lineHeight: 1.75, maxWidth: 560, marginBottom: 32, ...sf }}>Alabama is home to black widows and brown recluse — both medically significant. They thrive in garages, crawlspaces, storage areas, and woodpiles. EnviroCare reduces spider populations by eliminating the insects they feed on.</p>
          <a href="tel:2056495278" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: GOLD, color: DARK, borderRadius: 8, padding: "14px 28px", fontWeight: 800, fontSize: 15, textDecoration: "none", ...sf }}><Phone size={16} /> (205) 649-5278</a>
        </div>
      </section>

      <section style={{ padding: "72px 40px", background: "#f7f9f7" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontSize: 28, fontWeight: 400, color: DARK, textAlign: "center", marginBottom: 40 }}>Spider in <em style={{ color: G }}>Alabama</em></h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
            {[
              { icon: "🔍", title: "Dangerous Species", desc: "Black widows: shiny black, red hourglass. Brown recluse: tan, violin marking on back" },
              { icon: "🔍", title: "Common Locations", desc: "Garages, crawlspaces, attics, woodpiles, outdoor storage, under decks" },
              { icon: "🔍", title: "Warning Signs", desc: "Multiple webs in corners. Seeing spiders during daytime. Finding egg sacs" },
              { icon: "🔍", title: "Prevention", desc: "Shake out shoes and gloves. Move woodpiles away from house. Seal cracks around doors" },
            ].map((item, i) => (
              <div key={i} style={{ background: "#fff", border: "1px solid rgba(27,122,60,0.1)", borderRadius: 12, padding: "22px 20px" }}>
                <div style={{ fontWeight: 700, fontSize: 14, color: DARK, ...sf, marginBottom: 8 }}>{item.title}</div>
                <div style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.65, ...sf }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "64px 40px", background: `linear-gradient(160deg, ${DARK}, #1a3a2a)`, color: "#fff" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontSize: 24, fontWeight: 400, marginBottom: 20 }}>How We Treat <em style={{ color: GOLD }}>Spider</em></h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", lineHeight: 1.8, ...sf }}>Spider control starts with reducing their food supply. Our perimeter barrier treatment knocks down bugs spiders eat. We also treat garages, crawlspaces, and attics. Web removal disrupts breeding. For brown recluse, we use sticky traps and targeted dust in wall voids.</p>
        </div>
      </section>

      <section style={{ background: "#FEFDF8", padding: "56px 40px" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <h2 style={{ fontSize: 26, fontWeight: 400, color: DARK, marginBottom: 28, textAlign: "center" }}>Spider FAQ</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              { q: "Are brown recluse common in Alabama?", a: "Yes. Established throughout Alabama, commonly found in undisturbed areas like attics, closets, and storage boxes." },
              { q: "How dangerous is a black widow bite?", a: "Painful with muscle cramps and nausea. Seek medical attention immediately. Fatalities are rare with modern treatment." },
              { q: "Will killing spiders attract more?", a: "No. But if the insect food supply remains, new spiders will move in. Our approach reduces the overall insect population." },
            ].map((item, i) => (
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

      <section style={{ background: `linear-gradient(160deg, ${G}, #0d3a1a)`, padding: "56px 40px", textAlign: "center", color: "#fff" }}>
        <div style={{ maxWidth: 520, margin: "0 auto" }}>
          <h2 style={{ fontSize: 32, fontWeight: 400, lineHeight: 1.2, marginBottom: 12 }}>Stop Spiders <em>For Good</em></h2>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 15, ...sf, lineHeight: 1.7, marginBottom: 28 }}>Included in our quarterly plan — 30+ pests, starting at $39/month.</p>
          <a href="tel:2056495278" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: GOLD, color: DARK, borderRadius: 8, padding: "14px 28px", fontWeight: 800, fontSize: 15, textDecoration: "none", ...sf }}><Phone size={16} /> (205) 649-5278</a>
        </div>
      </section>
    </div>
  );
}
