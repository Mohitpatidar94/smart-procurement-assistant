# Smart Procurement Assistant — SIH26032

A complete, working, clickable prototype for the SIH problem statement **SIH26032**.
No-build web app — no install required. Separate role login pages open the shared app.

## What this is

Farmer-facing and Centre-Admin-facing procurement platform that adds an
intelligence layer *before* the farmer enters the queue:

Crop Pre-Check → Compare Centres → Smart Recommendation → Smart Slot Booking
→ Live Queue → Arrival + OTP Verification → Quality Check → Digital Weighment
→ Procurement → Payment Tracking — with an automation engine running underneath.

## How to run

Just open `index.html` in any modern browser (Chrome, Edge, Firefox, Safari).
No npm install, no server, no build. Works offline once loaded (data is kept
in the browser's localStorage).

```
# Easiest:
double-click index.html

# Or serve it locally (optional, e.g. for mobile testing on same wifi):
python3 -m http.server 8000
# then open http://localhost:8000
```

## Demo login

- **Farmer:** open `farmer-login.html` and use Ramesh Kumar (RJ-JPR-4471).
- **Admin:** open `center-login.html` and use Govindgarh Kendra (C2).

Use the 🌐 button top-right on any screen to switch English ⇄ Hindi.

## Judge demo flow

1. Farmer → My Crop → Wheat, 50 quintals.
2. Crop Pre-Check → Dry = **No**, Clean = **Yes** → result: *"Check Before Going"*
   (moisture/dryness reason shown, with a suggested fix).
3. Re-check with Dry = **Yes** → *"Looks Good"*.
4. Nearby Centres → Compare → Recommended Centre = **Centre B (Govindgarh)**,
   with a transparent score breakdown (price, distance, queue, capacity, risk,
   net benefit after transport cost).
5. Book a slot → **Token #47**.
6. Live Queue → shows position, currently-serving token, wait estimate.
7. Switch to **Centre Admin → Queue Control → Call Next Token** — watch the
   farmer's Live Queue update automatically with a notification.
8. Admin → Farmers → verify arrival OTP → Quality Check (PASS/FAIL with
   reason) → Digital Weighment (gross/tare/deduction → net → amount, receipt
   generated) → mark Procurement Completed → advance Payment steps.
9. Farmer → Payment Tracker shows Payment Credited.
10. Admin → Automation tab shows the live log of rules firing on their own
    (capacity-low redirects, queue-high recalculation, notifications sent).

## Project structure

```
index.html      — shared app shell and role selection
farmer-login.html — farmer login page
center-login.html — centre admin login page
login.js        — shared login handoff logic
script.js       — application logic and views
style.css       — shared application and login styles
README.md       — this file
```

The prototype remains directly openable by a judge with zero setup. The shared
app logic is in `script.js`, while the two role entry points use `login.js` to
hand off to the seeded demo state. See "Porting to a real stack" below for
production integration notes.

## Tech used in this prototype

- Vanilla JavaScript (no framework, no build step) — chosen so the demo
  cannot break due to missing dependencies or a bad install at the venue.
- Plain CSS with CSS variables (light theme, Manrope + Noto Sans Devanagari
  fonts for English/Hindi).
- `localStorage` as the persistence layer, isolated behind a `DB` object.
- No external JS libraries. Google Fonts is the only external asset.

## Internal architecture (inside script.js)

The script is layered so each part can be lifted out independently when
porting to Next.js / a real backend:

1. **`T` (translations)** — all English/Hindi strings in one object; `t(key)`
   and `L(obj)` helpers.
2. **`DISTRICTS` / `SEED()` / `DB`** — the data layer. `DB.load/save/reset`
   wrap `localStorage`; swap these three methods for Supabase calls and
   nothing else needs to change.
3. **`runPreCheck()`** — the rules-based crop pre-check / acceptance-risk
   engine. Pure function: `{cropId, dry, clean, harvestDate, moisture}` in,
   `{level, title, reasons, actions, riskScore, riskBand, acceptChance}` out.
   Designed to be replaced by an ML model call without touching any screen.
4. **`scoreCentres()` / `whyLines()`** — the recommendation engine. Weighted,
   normalised, transparent scoring across price (net of transport cost),
   distance, queue, capacity and acceptance risk.
5. **`slotsFor()`** — capacity-aware dynamic slotting.
6. **`runAutomation()` / `logAuto()`** — the automation engine: capacity-low
   redirects, queue-high recalculation, notification dispatch.
7. **`VIEWS` + router (`go`, `render`)** — all screens as template-returning
   functions, farmer and admin.

## Database schema (for porting to Supabase / any SQL backend)

The in-memory objects in `SEED()` mirror these tables directly:

- `farmers` (id, name, mobile, farmer_id, land, district, area, lat, lng)
- `crops` (id, name_en, name_hi, emoji, dry_days, moisture_limit)
- `centres` (id, name_en, name_hi, district, area, lat, lng, daily_capacity,
  used, current_token, last_token, avg_min, acceptance_risk,
  distance_override)
- `centre_rates` (centre_id, crop_id, rate)
- `centre_resources` (centre_id, staff, machines, trucks, bags)
- `bookings` (id, farmer_id, centre_id, crop_id, quantity, date, time, token,
  stage, otp, verified, rate, pre_check_snapshot, payment_step, created_at)
- `quality_checks` (booking_id, result, reason, measured_moisture)
- `weighments` (booking_id, gross, tare, deduction, net, rate, amount)
- `procurement_records` (booking_id, stage, updated_at)
- `payments` (booking_id, payment_step, updated_at)
- `notifications` (id, farmer_id, title_en, title_hi, detail_en, detail_hi,
  emoji, time, read)
- `automation_log` (id, emoji, text_en, text_hi, time)

## Environment variables (once connected to Supabase)

None needed to run the prototype as-is. When porting to Supabase:

```
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
```

## Features completed

- Farmer registration with GPS auto-detect + manual district/area fallback
- Crop Pre-Check with optional moisture reading, transparent explainable
  result (Looks Good / Check Before Going / Possible Quality Problem)
- Optional crop photo upload
- Nearby centres across 5 districts (10 seeded centres) with live rates,
  queue, capacity, acceptance risk
- Sell-in-another-district toggle with distance/travel-cost tradeoff
- Centre comparison table with net benefit (value − transport cost)
- Transparent weighted recommendation engine with score breakdown
- Capacity-aware dynamic slot booking (busy-centre redirect)
- Booking confirmation with token, booking ID, arrival OTP
- Live queue tracking, auto-refreshing
- Centre Admin dashboard: capacity, resources, queue, procurement stats
- Queue control (call next / set token) — instantly reflected on farmer side
- Arrival + OTP identity verification
- Official Quality Check with measured moisture vs permitted limit
- Digital Weighment with transparent deduction + auto-generated receipt
- 8-stage procurement journey tracker
- 6-stage payment tracker
- Notification centre with clear-all
- Automation engine + live automation log (visible to admin)
- Hindi voice input for crop and quantity entry (browser speech recognition)
- Cross-tab live queue synchronization through local storage events
- Fair recommendation transparency view with shared scoring factors and weights
- Downloadable digital weighment receipt
- Centre analytics dashboard for bookings, utilization, acceptance, waiting time, and value
- Full English/Hindi bilingual UI
- Light, farmer-friendly theme with animations throughout
- All data persists in localStorage; "Reset demo data" button included

## Future features not implemented (explicitly out of scope for this MVP)

- Real government/mandi rate API (AGMARKNET / e-NAM) integration
- Real ML model for acceptance prediction (current engine is rules-based,
  built so it can be swapped in without changing any screen)
- Supabase/production database + authentication
- Real SMS/IVR notification delivery (currently simulated in-app)
- Real payment gateway / government payment system integration
- Map view of centres
- Multi-farmer concurrent real-time sync (currently single-browser demo
  state via localStorage)
