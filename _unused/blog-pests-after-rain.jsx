import { Phone, Clock, ArrowLeft } from "lucide-react";

const G = "#1B7A3C";
const GOLD = "#F5A800";
const DARK = "#0E1A0F";
const sf = { fontFamily: "system-ui, -apple-system, sans-serif" };

export default function BlogPestsAfterRain() {
  return (
    <div style={{ minHeight: "100vh", background: "#FEFDF8", fontFamily: "Georgia, serif" }}>
      <section style={{ background: `linear-gradient(160deg, ${DARK}, #1a3a2a)`, color: "#fff", padding: "56px 40px 48px" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <a href="/blog" style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "rgba(255,255,255,0.5)", fontSize: 13, textDecoration: "none", ...sf, marginBottom: 20 }}><ArrowLeft size={14} /> Back to Blog</a>
          <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16 }}>
            <span style={{ background: "rgba(245,168,0,0.15)", color: GOLD, padding: "3px 10px", borderRadius: 5, fontSize: 11, fontWeight: 700, ...sf }}>Seasonal</span>
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", ...sf, display: "flex", alignItems: "center", gap: 4 }}><Clock size={12} /> 4 min read</span>
          </div>
          <h1 style={{ fontSize: "clamp(28px,4vw,42px)", fontWeight: 400, lineHeight: 1.2 }}>Why Pests Get Worse After Rain in Alabama</h1>
        </div>
      </section>

      <article style={{ padding: "48px 40px" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <p style={{ fontSize: 15, color: "#4b5563", lineHeight: 1.85, ...sf, marginBottom: 18 }}>Every pest company in Alabama gets the same call after a rainstorm: why are there suddenly bugs everywhere? Rain disrupts underground and outdoor habitats, forcing pests toward your home.</p>
          <p style={{ fontSize: 15, color: "#4b5563", lineHeight: 1.85, ...sf, marginBottom: 18 }}>Fire ants are the most visible example. Heavy rain floods their tunnels, and they build new mounds on higher ground — often your yard. You may see dozens of new mounds after a single storm.</p>
          <p style={{ fontSize: 15, color: "#4b5563", lineHeight: 1.85, ...sf, marginBottom: 18 }}>American roaches (palmetto bugs) live in storm drains and mulch. When rain saturates these areas, they move toward your dry home foundation.</p>
          <p style={{ fontSize: 15, color: "#4b5563", lineHeight: 1.85, ...sf, marginBottom: 18 }}>Millipedes migrate in mass after rain — sometimes hundreds crawling up foundations. Mosquitoes thrive because standing water is where they breed. A bottle cap of water produces hundreds of mosquitoes.</p>
          <p style={{ fontSize: 15, color: "#4b5563", lineHeight: 1.85, ...sf, marginBottom: 18 }}>The best defense is proactive perimeter treatment already in place before the storm. Our quarterly service creates a treated zone that intercepts pests as they migrate.</p>
          <p style={{ fontSize: 15, color: "#4b5563", lineHeight: 1.85, ...sf, marginBottom: 18 }}>Seeing a surge after recent rains? Call EnviroCare. We offer free re-treatment between scheduled visits.</p>
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
