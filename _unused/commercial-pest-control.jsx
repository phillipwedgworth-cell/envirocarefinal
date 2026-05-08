import { useState } from "react";
import { Phone, MapPin, CheckCircle, ChevronDown, Shield, Building2, Clock } from "lucide-react";

const G = "#1B7A3C";
const GOLD = "#F5A800";
const DARK = "#0E1A0F";
const sf = { fontFamily: "system-ui, -apple-system, sans-serif" };

const INDUSTRIES = [
  { icon: "🍽️", name: "Restaurants & Food Service", desc: "Health department compliance, kitchen sanitation protocols, zero-tolerance pest programs for BOH and FOH areas." },
  { icon: "🏨", name: "Hotels & Hospitality", desc: "Guest room inspections, common area treatment, bed bug monitoring, and 24-hour emergency response." },
  { icon: "🏥", name: "Healthcare & Medical", desc: "HIPAA-aware service, after-hours treatment, pharmaceutical-grade protocols for clinics and dental offices." },
  { icon: "🏬", name: "Retail & Shopping", desc: "Discreet treatments during off-hours, stockroom and warehouse pest management, rodent exclusion." },
  { icon: "🏢", name: "Office Buildings", desc: "Common area and tenant-specific programs, HVAC duct treatments, break room sanitation protocols." },
  { icon: "🏫", name: "Schools & Daycares", desc: "IPM-compliant programs, after-hours application, child-safe formulations, detailed documentation." },
  { icon: "🏭", name: "Warehouses & Industrial", desc: "Large-footprint treatment plans, loading dock rodent exclusion, inventory-safe pest management." },
  { icon: "⛪", name: "Churches & Community", desc: "Flexible scheduling around services and events, fellowship hall treatment, nursery-safe products." },
];

const FAQS = [
  { q: "Do you treat during business hours?", a: "We schedule around your operations. Most commercial clients prefer early morning, evening, or weekend treatments. We work with your schedule — not the other way around." },
  { q: "Will treatments affect my customers or employees?", a: "No. We use commercial-grade products that are safe once dry (typically 30 minutes). For sensitive environments like restaurants and daycares, we use targeted application methods that minimize exposure." },
  { q: "Do you provide documentation for health inspections?", a: "Yes. Every commercial client receives detailed service reports including products used, areas treated, findings, and recommendations. These satisfy Alabama Department of Public Health requirements." },
  { q: "How fast can you respond to an emergency?", a: "Same-day emergency service from all three Alabama offices. If a health inspector flags an issue or you spot a problem before a big event, call us — we'll be there." },
  { q: "Do you offer contracts for commercial accounts?", a: "We offer flexible service agreements — monthly, bi-monthly, or quarterly — tailored to your industry's needs. No 15-month lock-ins. Cancel anytime if you're not satisfied." },
];

export default function CommercialPestControl() {
  const [faqOpen, setFaqOpen] = useState(null);
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <div style={{ minHeight: "100vh", background: "#FEFDF8", fontFamily: "Georgia, serif" }}>
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Commercial Pest Control - EnviroCare",
          "description": "Commercial pest control for Alabama businesses. Restaurants, offices, warehouses, healthcare, and more. Licensed, insured, same-day service from 3 Alabama offices.",
          "provider": {
            "@type": "Organization",
            "name": "EnviroCare Pest & Termite Services",
            "telephone": "+12056495278",
            "url": "https://envirocarellc.com"
          },
          "areaServed": ["Birmingham, AL", "Huntsville, AL", "Alexander City, AL", "Auburn, AL"]
        }
      `}</script>

      {/* HERO */}
      <section style={{ background: `linear-gradient(160deg, ${DARK}, #1a3a2a)`, color: "#fff", padding: "72px 40px 64px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: -40, top: -40, width: 400, height: 400, background: "radial-gradient(circle, rgba(245,168,0,0.08) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />
        <div style={{ position: "absolute", right: 60, top: 40, fontSize: 180, opacity: 0.05, pointerEvents: "none", userSelect: "none", lineHeight: 1 }}>🏢</div>

        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(245,168,0,0.12)", border: "1px solid rgba(245,168,0,0.3)", borderRadius: 5, padding: "5px 14px", marginBottom: 22 }}>
            <Building2 size={12} color={GOLD} />
            <span style={{ fontSize: 11, fontWeight: 700, color: GOLD, letterSpacing: "0.1em", ...sf, textTransform: "uppercase" }}>
              Restaurants · Offices · Warehouses · Healthcare · Retail
            </span>
          </div>
          <h1 style={{ fontSize: "clamp(34px,4.5vw,58px)", fontWeight: 400, lineHeight: 1.1, marginBottom: 6 }}>
            Commercial Pest Control
          </h1>
          <h1 style={{ fontSize: "clamp(34px,4.5vw,58px)", fontWeight: 700, lineHeight: 1.1, marginBottom: 22, color: GOLD }}>
            For Alabama Businesses.
          </h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", lineHeight: 1.75, maxWidth: 560, marginBottom: 32, ...sf }}>
            When pests show up at your business, they threaten your reputation, your health scores, and your bottom line. EnviroCare has protected Alabama businesses since 1958 with discreet, after-hours treatment and documented compliance reporting.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 36 }}>
            <button onClick={() => setQuoteOpen(true)} style={{ background: GOLD, color: DARK, border: "none", borderRadius: 8, padding: "14px 28px", fontWeight: 800, fontSize: 15, cursor: "pointer", ...sf }}>Get Commercial Quote</button>
            <a href="tel:2056495278" style={{ display: "flex", alignItems: "center", gap: 8, background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.25)", borderRadius: 8, padding: "14px 22px", fontWeight: 600, fontSize: 15, textDecoration: "none", ...sf }}>
              <Phone size={16} /> (205) 649-5278
            </a>
          </div>
          <div style={{ display: "flex", gap: 32, flexWrap: "wrap", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 24 }}>
            {[["68+", "Years serving AL businesses"], ["Same Day", "Emergency response"], ["3 Offices", "Birmingham · Lake Martin · Huntsville"], ["Documented", "Full compliance reports"]].map(([n, l]) => (
              <div key={n}>
                <div style={{ fontSize: 18, fontWeight: 800, color: GOLD, ...sf }}>{n}</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", marginTop: 3, ...sf }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY COMMERCIAL IS DIFFERENT */}
      <section style={{ padding: "72px 40px", background: "#f7f9f7", borderBottom: `3px solid rgba(27,122,60,0.1)` }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
          <div>
            <div style={{ display: "inline-block", border: `2px solid ${G}`, borderRadius: 4, padding: "3px 12px", marginBottom: 22, fontSize: 11, letterSpacing: "0.15em", color: G, ...sf, fontWeight: 700, textTransform: "uppercase" }}>
              Why Commercial Is Different
            </div>
            <h2 style={{ fontSize: 32, fontWeight: 400, color: DARK, lineHeight: 1.2, marginBottom: 18 }}>
              Your Business Has <em style={{ color: G }}>Higher Stakes</em>
            </h2>
            <p style={{ fontSize: 15, color: "#4b5563", lineHeight: 1.75, marginBottom: 20, ...sf }}>
              A single pest sighting can trigger a health department visit, a bad Google review, or a lost customer. Commercial pest control requires different products, different timing, and different documentation than residential service.
            </p>
            <p style={{ fontSize: 15, color: "#4b5563", lineHeight: 1.75, ...sf }}>
              EnviroCare assigns a dedicated commercial technician to your account who learns your facility, knows your schedule, and delivers consistent results. Average commercial tech tenure: 12+ years.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {[
              { icon: "🕐", title: "After-Hours Service", desc: "We work when you're closed — early morning, evening, weekends" },
              { icon: "📋", title: "Compliance Reports", desc: "Detailed documentation for health dept and corporate audits" },
              { icon: "🔒", title: "Discreet Treatment", desc: "Unmarked vehicles available. No disruption to customers" },
              { icon: "⚡", title: "Emergency Response", desc: "Same-day service from all three Alabama offices" },
            ].map((item, i) => (
              <div key={i} style={{ background: "#fff", border: "1px solid rgba(27,122,60,0.1)", borderRadius: 12, padding: "20px 18px", textAlign: "center" }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{item.icon}</div>
                <div style={{ fontWeight: 700, fontSize: 13, color: DARK, ...sf, marginBottom: 6 }}>{item.title}</div>
                <div style={{ fontSize: 12, color: "#6b7280", ...sf, lineHeight: 1.5 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES SERVED */}
      <section style={{ padding: "72px 40px", background: "#FEFDF8" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: 32, fontWeight: 400, color: DARK, lineHeight: 1.2 }}>Industries <em style={{ color: G }}>We Protect</em></h2>
            <p style={{ fontSize: 15, color: "#6b7280", ...sf, marginTop: 10 }}>Every Alabama business type. Tailored programs, not one-size-fits-all.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
            {INDUSTRIES.map((ind, i) => (
              <div key={i} style={{ background: "#fff", border: "1px solid rgba(27,122,60,0.08)", borderRadius: 12, padding: "22px 20px", transition: "border-color 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.borderColor = G}
                onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(27,122,60,0.08)"}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{ind.icon}</div>
                <div style={{ fontWeight: 700, fontSize: 15, color: DARK, ...sf, marginBottom: 8 }}>{ind.name}</div>
                <div style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.65, ...sf }}>{ind.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section style={{ padding: "72px 40px", background: `linear-gradient(160deg, ${DARK}, #1a3a2a)`, color: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontSize: 32, fontWeight: 400, textAlign: "center", marginBottom: 48 }}>Every Commercial Plan <em style={{ color: GOLD }}>Includes</em></h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
            {[
              { icon: "🔍", title: "Facility Assessment", desc: "Full walkthrough identifying entry points, harborage, and risk areas" },
              { icon: "📝", title: "Custom IPM Plan", desc: "Integrated Pest Management tailored to your industry and facility" },
              { icon: "📊", title: "Service Reports", desc: "Digital reports after every visit — products, findings, recommendations" },
              { icon: "🎯", title: "Targeted Treatments", desc: "Commercial-grade products applied to specific problem areas" },
              { icon: "🔄", title: "Scheduled Service", desc: "Monthly, bi-monthly, or quarterly — whatever your business needs" },
              { icon: "🆘", title: "Emergency Callbacks", desc: "Issue between visits? We come back free, no call-out charge" },
            ].map((item, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: "24px 20px", textAlign: "center" }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{item.icon}</div>
                <div style={{ fontWeight: 700, fontSize: 14, color: "#fff", ...sf, marginBottom: 8 }}>{item.title}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", lineHeight: 1.6, ...sf }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "#f7f9f7", padding: "56px 40px" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <h2 style={{ fontSize: 26, fontWeight: 400, color: DARK, marginBottom: 28, textAlign: "center" }}>Commercial Pest Control FAQ</h2>
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
      <section style={{ background: `linear-gradient(160deg, ${G}, #0d5a2a)`, padding: "72px 40px", textAlign: "center", color: "#fff" }}>
        <div style={{ maxWidth: 520, margin: "0 auto" }}>
          <div style={{ fontSize: 40, marginBottom: 14 }}>🏢</div>
          <h2 style={{ fontSize: 36, fontWeight: 400, lineHeight: 1.2, marginBottom: 12 }}>Protect Your<br /><em>Alabama Business</em></h2>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 15, ...sf, lineHeight: 1.7, marginBottom: 28 }}>
            Free facility assessment. Custom IPM plan. Same-day emergency service from three Alabama offices.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 14 }}>
            <button onClick={() => setQuoteOpen(true)} style={{ background: GOLD, color: DARK, border: "none", borderRadius: 8, padding: "14px 28px", fontWeight: 800, fontSize: 15, cursor: "pointer", ...sf }}>Get Commercial Quote</button>
            <a href="tel:2056495278" style={{ display: "flex", alignItems: "center", gap: 8, background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.3)", borderRadius: 8, padding: "14px 20px", fontWeight: 600, fontSize: 15, textDecoration: "none", ...sf }}>
              <Phone size={16} /> (205) 649-5278
            </a>
          </div>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, ...sf }}>3 Alabama Offices · Licensed & Insured · Founded 1958</p>
        </div>
      </section>

      {quoteOpen && (
        <div onClick={() => setQuoteOpen(false)} style={{ position: "fixed", inset: 0, background: "rgba(14,26,15,0.75)", zIndex: 999, display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}>
          <div onClick={e => e.stopPropagation()} style={{ background: "#FEFDF8", borderRadius: 16, width: "100%", maxWidth: 420, overflow: "hidden", boxShadow: "0 30px 80px rgba(0,0,0,0.4)" }}>
            <div style={{ background: G, color: "#fff", padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: 18 }}>Commercial Quote Request</div>
                <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 12, marginTop: 4, ...sf }}>We'll call within 2 hours</div>
              </div>
              <button onClick={() => setQuoteOpen(false)} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.55)", fontSize: 26, cursor: "pointer", lineHeight: 1 }}>×</button>
            </div>
            <div style={{ padding: "22px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 14 }}>
                {["Restaurant / Food Service", "Office / Retail", "Warehouse / Industrial", "Healthcare / Medical", "School / Daycare", "Church / Community", "Other — just inspect"].map(o => (
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
