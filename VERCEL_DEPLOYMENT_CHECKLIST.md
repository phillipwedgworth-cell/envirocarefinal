# 🚀 Vercel Deployment Checklist — Ready to Upload

---

## ✅ QA Results — All Passed

**HTML Validation:** All 4 pages structurally valid, CSS balanced
**Brand colors:** Identical Kelly Green palette across all pages (#16A34A, #15803D, #0F5C2E, #062514)
**Gold accents:** Identical (#EAB308, #CA8A04)
**Phone numbers:** All 14 click-to-call links verified pointing to correct numbers
**Internal links:** All cross-page navigation verified working
**Forms:** Quote form validates and shows success state

---

## 📦 Files to Download &amp; Upload to Vercel

Download these **6 files** into a single folder on your computer:

| File | Size | What It Is |
|------|------|------------|
| `index.html` | 43 KB | Homepage (this is `envirocare-rebuilt.html` renamed) |
| `quote.html` | 11 KB | Lead capture form page |
| `termite-control.html` | 15 KB | Sentricon® termite service page |
| `mosquito-control.html` | 15 KB | Mosquito yard barrier service page |
| `envirocare-logo-clean.png` | 187 KB | Logo (transparent, dot removed) |
| `hero-family.jpg` | 215 KB | Hero photo for homepage |

**Total package size: ~486 KB** (very fast load)

---

## 📞 Phone Number Routing (Verified)

**Primary line (205) 649-5278 appears on:**
- Top announcement bar
- Nav bar (every page)
- Hero CTAs (every page)
- Service card CTAs
- Mobile sticky bar (homepage)
- Footer (every page)
- Bottom CTA bands
- Quote page sidebar

**Office-specific lines (homepage location cards only):**
- Birmingham: (205) 649-5278
- Lake Martin: (256) 234-6162  
- Huntsville: (256) 937-7676

**All numbers are click-to-call enabled** — tapping on mobile dials directly.

---

## 🔗 How Pages Connect

```
                    [index.html (homepage)]
                         /        |       \
                        /         |        \
            quote.html  termite-control  mosquito-control
                  ↓              ↓              ↓
            tel: number    tel: number    tel: number
                                ↓              ↓
                            quote.html ← (back to form)
```

Every page can reach every other page. Every page has the phone number prominently displayed.

---

## 🎯 Vercel Upload Steps

### Option 1: Drag &amp; Drop (Easiest)
1. Go to vercel.com → log in
2. Click "Add New Project"
3. Drag the folder containing all 6 files
4. Vercel auto-detects it as static site → click Deploy
5. Done. Live URL appears in ~30 seconds.

### Option 2: GitHub (Better for Updates)
1. Create new GitHub repo: `envirocare-website`
2. Upload all 6 files to repo root
3. Connect Vercel to GitHub → select repo
4. Auto-deploys. Future updates: push to GitHub, Vercel rebuilds automatically.

### Option 3: Replace Existing Vercel Site
If you already have `envirocare-site.vercel.app` running:
1. Open existing project in Vercel
2. Replace files via GitHub or Vercel CLI
3. Redeploy

---

## 🌐 After Deployment

### Connect Custom Domain
1. In Vercel project settings → Domains
2. Add `envirocarellc.com` or `new.envirocarellc.com` (subdomain for testing)
3. Update DNS records as Vercel instructs
4. SSL certificate auto-provisions (free, automatic)

### Connect the Form
The quote form currently shows a success message client-side but doesn't send data anywhere. Pick one:

**Option A: Formspree (easiest, free)**
1. Sign up at formspree.io
2. Create new form, get endpoint URL
3. Add to quote.html form: `<form action="https://formspree.io/f/YOUR_ID" method="POST">`
4. Forms email you submissions automatically

**Option B: Zapier → Fieldster**
1. Zapier webhook → triggers on form submit
2. Creates lead in Fieldster directly
3. More setup, but lead lands straight in your CRM

### Set Up Analytics
1. Create GA4 property at analytics.google.com
2. Get measurement ID (looks like `G-XXXXXXXX`)
3. I can give you the exact tracking code to paste in `<head>` of each file
4. Verify in Search Console at search.google.com/search-console

---

## ⚠️ Known Limitations (To Address Later)

1. **Form doesn't actually send anywhere yet** — needs Formspree/Zapier connection
2. **No tracking pixel** — needs GA4 added
3. **Other service pages not built yet:** General Pest, Flea &amp; Tick, Fire Ant, Commercial
4. **No city pages on this site** — those exist in your project as JSX (need conversion or rebuild)
5. **No blog yet** — framework can be built next

None of these stop you from launching. They're enhancements.

---

## 🎁 Bonus: What's Already Working

✅ Mobile-responsive (tested down to 320px)
✅ Click-to-call on every phone number
✅ Sticky mobile bar with Call + Pay Bill on homepage
✅ Customer login link (Fieldster portal) on homepage
✅ Schema.org JSON-LD on homepage AND service pages (Google reads this)
✅ Logo zoom animation on page load
✅ Smooth scroll on anchor links
✅ Hero image lazy-loads
✅ Google Fonts preloaded (faster paint)
✅ All images optimized (under 250KB each)

---

## ✋ Before You Click "Deploy"

Quick checks:
- [ ] All 6 files in same folder
- [ ] Open `index.html` in Chrome locally first → looks right?
- [ ] Click "Free Quote" → goes to `quote.html`?
- [ ] Click any phone number → opens dialer?
- [ ] Resize browser narrow → mobile layout works?

If yes to all → you're ready to upload to Vercel.

---

**Phillip, you're 6 files away from a live production site. Go push it.**
