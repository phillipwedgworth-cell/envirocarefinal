import { Phone, Clock, ArrowLeft } from "lucide-react";

const G = "#1B7A3C";
const GOLD = "#F5A800";
const DARK = "#0E1A0F";
const sf = { fontFamily: "system-ui, -apple-system, sans-serif" };

export default function BlogBestTimePestControl() {
  return (
    <div style={{ minHeight: "100vh", background: "#FEFDF8", fontFamily: "Georgia, serif" }}>
      <section style={{ background: `linear-gradient(160deg, ${DARK}, #1a3a2a)`, color: "#fff", padding: "56px 40px 48px" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <a href="/blog" style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "rgba(255,255,255,0.5)", fontSize: 13, textDecoration: "none", ...sf, marginBottom: 20 }}><ArrowLeft size={14} /> Back to Blog</a>
          <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16 }}>
            <span style={{ background: "rgba(245,168,0,0.15)", color: GOLD, padding: "3px 10px", borderRadius: 5, fontSize: 11, fontWeight: 700, ...sf }}>Tips</span>
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", ...sf, display: "flex", alignItems: "center", gap: 4 }}><Clock size={12} /> 4 min read</span>
          </div>
          <h1 style={{ fontSize: "clamp(28px,4vw,42px)", fontWeight: 400, lineHeight: 1.2 }}>The Best Time to Start Pest Control in Alabama</h1>
        </div>
      </section>

      <article style={{ padding: "48px 40px" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <p style={{ fontSize: 15, color: "#4b5563", lineHeight: 1.85, ...sf, marginBottom: 18 }}>The honest answer: now. The strategic answer: early spring, February through April. Here is why.</p>
          <p style={{ fontSize: 15, color: "#4b5563", lineHeight: 1.85, ...sf, marginBottom: 18 }}>Spring is when pest populations begin their annual growth. Ant colonies send foragers. Termites swarm. Cockroach reproduction accelerates. Starting treatment in early spring gets ahead of these explosions.</p>
          <p style={{ fontSize: 15, color: "#4b5563", lineHeight: 1.85, ...sf, marginBottom: 18 }}>Think of it like lawn care. You apply pre-emergent before weeds establish. Pest control works the same way — a perimeter barrier in March prevents the summer invasion.</p>
          <p style={{ fontSize: 15, color: "#4b5563", lineHeight: 1.85, ...sf, marginBottom: 18 }}>That said, there is never a bad time. Alabama pests are active year-round. If you are reading this in July with roaches in your kitchen, call today.</p>
          <p style={{ fontSize: 15, color: "#4b5563", lineHeight: 1.85, ...sf, marginBottom: 18 }}>For termite protection, every month without protection is a month of potential damage. Alabama is one of the highest-risk states. New homeowners should start immediately — builder soil treatments only last 5-7 years.</p>
          <p style={{ fontSize: 15, color: "#4b5563", lineHeight: 1.85, ...sf, marginBottom: 18 }}>EnviroCare offers $50 off initial service. No contracts. Free re-treatment between visits. Call any of our three offices.</p>
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
