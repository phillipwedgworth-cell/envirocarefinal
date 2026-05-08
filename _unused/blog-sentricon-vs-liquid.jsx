import { Phone, Clock, ArrowLeft } from "lucide-react";

const G = "#1B7A3C";
const GOLD = "#F5A800";
const DARK = "#0E1A0F";
const sf = { fontFamily: "system-ui, -apple-system, sans-serif" };

export default function BlogSentriconVsLiquid() {
  return (
    <div style={{ minHeight: "100vh", background: "#FEFDF8", fontFamily: "Georgia, serif" }}>
      <section style={{ background: `linear-gradient(160deg, ${DARK}, #1a3a2a)`, color: "#fff", padding: "56px 40px 48px" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <a href="/blog" style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "rgba(255,255,255,0.5)", fontSize: 13, textDecoration: "none", ...sf, marginBottom: 20 }}><ArrowLeft size={14} /> Back to Blog</a>
          <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16 }}>
            <span style={{ background: "rgba(245,168,0,0.15)", color: GOLD, padding: "3px 10px", borderRadius: 5, fontSize: 11, fontWeight: 700, ...sf }}>Termites</span>
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", ...sf, display: "flex", alignItems: "center", gap: 4 }}><Clock size={12} /> 6 min read</span>
          </div>
          <h1 style={{ fontSize: "clamp(28px,4vw,42px)", fontWeight: 400, lineHeight: 1.2 }}>Sentricon vs Liquid Termite Treatment: Which Is Better?</h1>
        </div>
      </section>

      <article style={{ padding: "48px 40px" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <p style={{ fontSize: 15, color: "#4b5563", lineHeight: 1.85, ...sf, marginBottom: 18 }}>Two main options for Alabama termite protection: bait systems like Sentricon and liquid barriers like Termidor. Both work, but very differently.</p>
          <p style={{ fontSize: 15, color: "#4b5563", lineHeight: 1.85, ...sf, marginBottom: 18 }}>Liquid treatments create a chemical barrier in soil around your foundation. Effective immediately, lasts 5-10 years. Requires trenching and sometimes drilling through concrete.</p>
          <p style={{ fontSize: 15, color: "#4b5563", lineHeight: 1.85, ...sf, marginBottom: 18 }}>Sentricon is a bait system. Stations around your home attract termites who carry bait back to the colony. The active ingredient disrupts molting, killing the entire colony including the queen over weeks.</p>
          <p style={{ fontSize: 15, color: "#4b5563", lineHeight: 1.85, ...sf, marginBottom: 18 }}>The biggest advantage of Sentricon is colony elimination. Liquid barriers kill termites that contact treated soil, but the colony may survive and find untreated gaps. Sentricon targets the source.</p>
          <p style={{ fontSize: 15, color: "#4b5563", lineHeight: 1.85, ...sf, marginBottom: 18 }}>Sentricon requires no drilling, no trenching, and no chemicals inside your home. Stations are small, flush-mounted, and virtually invisible. Installation takes 2-3 hours.</p>
          <p style={{ fontSize: 15, color: "#4b5563", lineHeight: 1.85, ...sf, marginBottom: 18 }}>For active infestations with visible damage, we sometimes recommend both: liquid for immediate knockdown plus Sentricon for long-term colony elimination. EnviroCare is a Sentricon Certified Specialist with coverage up to $1,000,000.</p>
        </div>
      </article>

      <section style={{ background: `linear-gradient(160deg, ${G}, #0d3a1a)`, padding: "56px 40px", textAlign: "center", color: "#fff" }}>
        <div style={{ maxWidth: 520, margin: "0 auto" }}>
          <h2 style={{ fontSize: 28, fontWeight: 400, lineHeight: 1.2, marginBottom: 12 }}>Need Help With <em>Pests?</em></h2>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 15, ...sf, lineHeight: 1.7, marginBottom: 28 }}>Free inspection. Same-day service. No contracts. Three Alabama offices.</p>
          <a href="tel:2056495278" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: GOLD, color: DARK, borderRadius: 8, padding: "14px 28px", fontWeight: 800, fontSize: 15, textDecoration: "none", ...sf }}><Phone size={16} /> (205) 649-5278</a>
        </div>
      </section>
    </div>
  );
}
