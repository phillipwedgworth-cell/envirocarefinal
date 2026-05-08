import { useState } from "react";
import { Phone, MapPin, ChevronDown } from "lucide-react";

const G = "#1B7A3C";
const GOLD = "#F5A800";
const DARK = "#0E1A0F";
const sf = { fontFamily: "system-ui, -apple-system, sans-serif" };

export default function Calera() {
  const [faqOpen, setFaqOpen] = useState(null);
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <div style={{ minHeight: "100vh", background: "#FEFDF8", fontFamily: "Georgia, serif" }}>
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "EnviroCare Pest Control - Calera, AL",
          "telephone": "+12059406360",
          "url": "https://envirocarellc.com/calera",
          "areaServed": ["Calera, AL", "Shelby County, AL"],
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "ratingCount": "500" }
        }
      `}</script>

      {/* HERO */}
      <section style={{ background: `linear-gradient(160deg, ${DARK}, #1a3a2a)`, color: "#fff", padding: "72px 40px 64px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: 60, top: 40, fontSize: 180, opacity: 0.05, pointerEvents: "none", userSelect: "none", lineHeight: 1 }}>🏘️</div>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(245,168,0,0.12)", border: "1px solid rgba(245,168,0,0.3)", borderRadius: 5, padding: "5px 14px", marginBottom: 22 }}>
            <MapPin size={12} color={GOLD} />
            <span style={{ fontSize: 11, fontWeight: 700, color: GOLD, letterSpacing: "0.1em", ...sf, textTransform: "uppercase" }}>
              Calera, AL · Shelby County · I-65 Corridor
            </span>
          </div>
          <h1 style={{ fontSize: "clamp(34px,4.5vw,58px)", fontWeight: 400, lineHeight: 1.1, marginBottom: 6 }}>
            Calera Pest Control
          </h1>
          <h1 style={{ fontSize: "clamp(34px,4.5vw,58px)", fontWeight: 700, lineHeight: 1.1, marginBottom: 22, color: GOLD }}>
            Growing With Calera.
          </h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", lineHeight: 1.75, maxWidth: 560, marginBottom: 32, ...sf }}>
            Calera is booming — new subdivisions every year along I-65. Rapid growth stirs up pest populations as construction disturbs established colonies.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button onClick={() => setQuoteOpen(true)} style={{ background: GOLD, color: DARK, border: "none", borderRadius: 8, padding: "14px 28px", fontWeight: 800, fontSize: 15, cursor: "pointer", ...sf }}>Get Free Inspection</button>
            <a href="tel:2059406360" style={{ display: "flex", alignItems: "center", gap: 8, background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.25)", borderRadius: 8, padding: "14px 22px", fontWeight: 600, fontSize: 15, textDecoration: "none", ...sf }}>
              <Phone size={16} /> (205) 940-6360
            </a>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section style={{ padding: "72px 40px", background: "#f7f9f7" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontSize: 28, fontWeight: 400, color: DARK, lineHeight: 1.2, marginBottom: 18 }}>
            Why Calera Needs <em style={{ color: G }}>Specialized Care</em>
          </h2>
          <p style={{ fontSize: 15, color: "#4b5563", lineHeight: 1.75, ...sf }}>
            When developers clear land, established pest colonies relocate to the nearest structures. Clay soil retains moisture close to foundations, creating ideal termite conditions.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "72px 40px", background: "#FEFDF8" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontSize: 28, fontWeight: 400, color: DARK, textAlign: "center", marginBottom: 40 }}>Calera <em style={{ color: G }}>Services</em></h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
            {[
              { icon: "🐜", name: "Pest Control", desc: "30+ pests. Quarterly from $39/mo. Free re-service." },
              { icon: "🪵", name: "Termite Control", desc: "Sentricon Certified. Up to $1M warranty." },
              { icon: "🦟", name: "Mosquito Control", desc: "Monthly barrier treatments April-October." },
              { icon: "🕷️", name: "Tick Control", desc: "Break the tick lifecycle. Family and pet safe." },
              { icon: "🔥", name: "Fire Ant Control", desc: "Yard-wide bait plus mound treatment." },
              { icon: "🐭", name: "Rodent Control", desc: "Trapping, exclusion, and monitoring." },
            ].map((svc, i) => (
              <div key={i} style={{ background: "#fff", border: "1px solid rgba(27,122,60,0.1)", borderRadius: 12, padding: "22px 20px" }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{svc.icon}</div>
                <div style={{ fontWeight: 700, fontSize: 14, color: DARK, ...sf, marginBottom: 8 }}>{svc.name}</div>
                <div style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.65, ...sf }}>{svc.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "#f7f9f7", padding: "56px 40px" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <h2 style={{ fontSize: 26, fontWeight: 400, color: DARK, marginBottom: 28, textAlign: "center" }}>Calera FAQ</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              { q: "How close is your office to Calera?", a: "Our Alabaster office is about 5-10 minutes away." },
              { q: "I just built a new home — when do I need pest control?", a: "Right away for general pests. Builder termite treatment lasts 5-7 years but Sentricon gives continuous protection." },
              { q: "Fire ants in my new yard are terrible — help?", a: "We use broadcast bait plus mound treatment. 85-95% reduction in 2-4 weeks." },
              { q: "Do you offer builder programs?", a: "Yes. Pre-construction termite treatment and new home packages available." },
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

      {/* CTA */}
      <section style={{ background: `linear-gradient(160deg, ${G}, #0d3a1a)`, padding: "72px 40px", textAlign: "center", color: "#fff" }}>
        <div style={{ maxWidth: 520, margin: "0 auto" }}>
          <h2 style={{ fontSize: 36, fontWeight: 400, lineHeight: 1.2, marginBottom: 12 }}>Protect Your<br /><em>Calera Home</em></h2>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 15, ...sf, lineHeight: 1.7, marginBottom: 28 }}>
            Free inspection, same-day service, no contracts. Birmingham office ready to help.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <button onClick={() => setQuoteOpen(true)} style={{ background: GOLD, color: DARK, border: "none", borderRadius: 8, padding: "14px 28px", fontWeight: 800, fontSize: 15, cursor: "pointer", ...sf }}>Get Free Inspection</button>
            <a href="tel:2059406360" style={{ display: "flex", alignItems: "center", gap: 8, background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.3)", borderRadius: 8, padding: "14px 20px", fontWeight: 600, fontSize: 15, textDecoration: "none", ...sf }}>
              <Phone size={16} /> (205) 940-6360
            </a>
          </div>
        </div>
      </section>

      {quoteOpen && (
        <div onClick={() => setQuoteOpen(false)} style={{ position: "fixed", inset: 0, background: "rgba(14,26,15,0.75)", zIndex: 999, display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}>
          <div onClick={e => e.stopPropagation()} style={{ background: "#FEFDF8", borderRadius: 16, width: "100%", maxWidth: 420, overflow: "hidden", boxShadow: "0 30px 80px rgba(0,0,0,0.4)" }}>
            <div style={{ background: G, color: "#fff", padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: 18 }}>Free Calera Inspection</div>
                <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 12, marginTop: 4, ...sf }}>Birmingham office</div>
              </div>
              <button onClick={() => setQuoteOpen(false)} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.55)", fontSize: 26, cursor: "pointer", lineHeight: 1 }}>×</button>
            </div>
            <div style={{ padding: "22px" }}>
              <a href="tel:2059406360" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "13px", background: G, color: "#fff", borderRadius: 8, fontWeight: 800, fontSize: 15, textDecoration: "none", ...sf }}>
                <Phone size={16} /> (205) 940-6360
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
