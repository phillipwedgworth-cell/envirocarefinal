import { Phone, Clock, ArrowLeft } from "lucide-react";

const G = "#1B7A3C";
const GOLD = "#F5A800";
const DARK = "#0E1A0F";
const sf = { fontFamily: "system-ui, -apple-system, sans-serif" };

export default function BlogBrownRecluseAlabama() {
  return (
    <div style={{ minHeight: "100vh", background: "#FEFDF8", fontFamily: "Georgia, serif" }}>
      <section style={{ background: `linear-gradient(160deg, ${DARK}, #1a3a2a)`, color: "#fff", padding: "56px 40px 48px" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <a href="/blog" style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "rgba(255,255,255,0.5)", fontSize: 13, textDecoration: "none", ...sf, marginBottom: 20 }}><ArrowLeft size={14} /> Back to Blog</a>
          <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16 }}>
            <span style={{ background: "rgba(245,168,0,0.15)", color: GOLD, padding: "3px 10px", borderRadius: 5, fontSize: 11, fontWeight: 700, ...sf }}>Spiders</span>
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", ...sf, display: "flex", alignItems: "center", gap: 4 }}><Clock size={12} /> 5 min read</span>
          </div>
          <h1 style={{ fontSize: "clamp(28px,4vw,42px)", fontWeight: 400, lineHeight: 1.2 }}>Brown Recluse Spiders in Alabama: What Every Homeowner Should Know</h1>
        </div>
      </section>

      <article style={{ padding: "48px 40px" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <p style={{ fontSize: 15, color: "#4b5563", lineHeight: 1.85, ...sf, marginBottom: 18 }}>The brown recluse is one of two medically significant spiders in Alabama, and far more common in our homes than most realize. Unlike black widows that build obvious webs, brown recluse are secretive — hiding in undisturbed boxes, behind furniture, and in attic storage.</p>
          <p style={{ fontSize: 15, color: "#4b5563", lineHeight: 1.85, ...sf, marginBottom: 18 }}>They are tan to light brown with a distinctive violin-shaped marking. About the size of a quarter including legs. They hunt at night and retreat to dark hiding spots during the day.</p>
          <p style={{ fontSize: 15, color: "#4b5563", lineHeight: 1.85, ...sf, marginBottom: 18 }}>Alabama's climate is ideal for brown recluse. They thrive between 70 and 90 degrees and prefer dry, undisturbed areas. Homes with lots of storage and cardboard boxes provide perfect habitat.</p>
          <p style={{ fontSize: 15, color: "#4b5563", lineHeight: 1.85, ...sf, marginBottom: 18 }}>Bites are painless initially but develop into red, blistering wounds over 2-8 hours. Some cases cause tissue death requiring weeks to heal. Seek medical attention promptly if you suspect a bite.</p>
          <p style={{ fontSize: 15, color: "#4b5563", lineHeight: 1.85, ...sf, marginBottom: 18 }}>Prevention: store items in sealed plastic bins, not cardboard. Keep closets decluttered. Shake out shoes and clothing. Move beds away from walls. Professional quarterly treatment reduces the insects that attract recluse.</p>
          <p style={{ fontSize: 15, color: "#4b5563", lineHeight: 1.85, ...sf, marginBottom: 18 }}>If you are finding brown recluse in your home, do not wait. A single female produces 150 eggs per year. Call EnviroCare for a free inspection.</p>
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
