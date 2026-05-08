import { Phone, Clock, ArrowLeft } from "lucide-react";

const G = "#1B7A3C";
const GOLD = "#F5A800";
const DARK = "#0E1A0F";
const sf = { fontFamily: "system-ui, -apple-system, sans-serif" };

export default function BlogHuntsvillePestGuide() {
  return (
    <div style={{ minHeight: "100vh", background: "#FEFDF8", fontFamily: "Georgia, serif" }}>
      <section style={{ background: `linear-gradient(160deg, ${DARK}, #1a3a2a)`, color: "#fff", padding: "56px 40px 48px" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <a href="/blog" style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "rgba(255,255,255,0.5)", fontSize: 13, textDecoration: "none", ...sf, marginBottom: 20 }}><ArrowLeft size={14} /> Back to Blog</a>
          <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16 }}>
            <span style={{ background: "rgba(245,168,0,0.15)", color: GOLD, padding: "3px 10px", borderRadius: 5, fontSize: 11, fontWeight: 700, ...sf }}>Local</span>
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", ...sf, display: "flex", alignItems: "center", gap: 4 }}><Clock size={12} /> 5 min read</span>
          </div>
          <h1 style={{ fontSize: "clamp(28px,4vw,42px)", fontWeight: 400, lineHeight: 1.2 }}>Huntsville Pest Control: What North Alabama Homeowners Face</h1>
        </div>
      </section>

      <article style={{ padding: "48px 40px" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <p style={{ fontSize: 15, color: "#4b5563", lineHeight: 1.85, ...sf, marginBottom: 18 }}>Huntsville and North Alabama present unique pest challenges. The Tennessee Valley climate, limestone geology, and rapid suburban development all influence what pests you deal with.</p>
          <p style={{ fontSize: 15, color: "#4b5563", lineHeight: 1.85, ...sf, marginBottom: 18 }}>Limestone geology creates natural voids that pests use as highways. Centipedes, millipedes, and cave crickets are more common in North Alabama homes on limestone than clay-soil homes further south.</p>
          <p style={{ fontSize: 15, color: "#4b5563", lineHeight: 1.85, ...sf, marginBottom: 18 }}>Explosive growth means new construction constantly disturbs pest habitats. When a developer clears a field in Harvest, the fire ants and termites relocate to nearby structures.</p>
          <p style={{ fontSize: 15, color: "#4b5563", lineHeight: 1.85, ...sf, marginBottom: 18 }}>The Tennessee River creates mosquito breeding habitat throughout the valley. Properties near the river and agricultural irrigation face above-average mosquito pressure.</p>
          <p style={{ fontSize: 15, color: "#4b5563", lineHeight: 1.85, ...sf, marginBottom: 18 }}>Brown recluse are well-established in North Alabama. Older homes in downtown Huntsville with stone foundations and crawlspaces are particularly prone to infestations.</p>
          <p style={{ fontSize: 15, color: "#4b5563", lineHeight: 1.85, ...sf, marginBottom: 18 }}>EnviroCare's Huntsville office on Old Madison Pike serves all of Madison County with local technicians. Same services as Birmingham and Lake Martin: quarterly pest control from $39/month, Sentricon termite protection, monthly mosquito treatments, and tick control.</p>
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
