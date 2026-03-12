# Vyarah Agency - Complete AI Project Context

This document is built specifically for AI agents to instantly understand the state, architecture, design system, and underlying functionality of the Vyarah Agency project.

## 1. Project Overview
- **Name**: Vyarah (formerly NexusForge/Alacrity)
- **Tagline**: We Don't Build Websites. We Build Revenue Machines.
- **Description**: AI-powered digital growth agency offering automation systems, web/app development, and intelligent technology solutions.
- **Goal**: A premium, high-converting agency landing page deployed on Vercel/Netlify.
- **Tech Stack**: Next.js (App Router), React 19.
- **Styling**: Vanilla CSS (Neo-Brutalist design system).
- **Database/Storage**: Google Sheets via Google Apps Script webhook (Replaced older Supabase implementation).

## 2. Directory Structure & Architecture
The project uses the highly-componentized **Next.js App Router** architecture.

```text
e:\WebsiteAgency\
├── .env.local               # Environment variables (GOOGLE_SCRIPT_URL)
├── APPS_SCRIPT_CODE.js      # Backend: Google Apps Script to write data to Google Sheets
├── package.json             # Dependencies: Next.js (~16), React 19
├── src/
│   ├── app/
│   │   ├── layout.js        # Root layout, Space Grotesk font injection, SEO metadata
│   │   ├── page.js          # Main landing page assembling 15+ sections
│   │   ├── globals.css      # Core Vanilla CSS (Neo-Brutalist design tokens)
│   │   ├── privacy/page.js  # Privacy policy page
│   │   ├── terms/page.js    # Terms of service page
│   │   └── api/
│   │       ├── contact/route.js     # Next.js API Route for Contact Form
│   │       └── newsletter/route.js  # Next.js API Route for Newsletter
│   ├── components/          # 21+ React Components
│   │   ├── Layout: Navbar.jsx, Footer.jsx, PageLoader.jsx, BackToTop.jsx
│   │   ├── Sections: Hero.jsx, ProblemSolution.jsx, Services.jsx, Process.jsx,
│   │                 Portfolio.jsx, Results.jsx, WhyUs.jsx, TechStack.jsx,
│   │                 Testimonials.jsx, Pricing.jsx, FAQ.jsx, Contact.jsx
│   │   ├── Overlays: WhatsAppFloat.jsx, CTABanner.jsx
│   │   ├── Animations: Marquee.jsx, ScrollReveal.jsx (Intersection Observer), SocialProof.jsx
│   │   └── Interactive: ROICalculator.jsx
│   ├── data/                # Hardcoded Content Objects (separating content from components)
│   │   ├── siteConfig.js    # General branding, contacts, social URLs, footer links
│   │   ├── services.js      # Array of 4 service offerings
│   │   ├── testimonials.js  # Array of client reviews
│   │   ├── pricing.js       # 3-tier pricing configurations
│   │   └── faq.js           # FAQ arrays
│   └── lib/
│       └── googleSheets.js  # Fetch wrapper `writeToSheet()` connecting to Apps Script
```

## 3. Design System (Neo-Brutalist)
The website utilizes a highly distinctive **Neo-Brutalist** aesthetic characterized by:
- **Colors**:
  - Primary: `#ffe17c` (Vibrant Yellow)
  - Background: Off-white (`#fafafa` or similar)
  - Text & Elements: Charcoal (`#171e19`)
  - Accents: Sage (`#b7c6c2`)
- **Typography**: `Space Grotesk` (via `next/font`), prioritizing bold, legible, brutalist headers.
- **Borders & Shadows**:
  - Elements have stark, bold, and solid borders: e.g., `2px solid #000`.
  - Shadows are hard (0px blur radius): typically 4px, 8px, or 12px horizontal/vertical offsets (e.g., `box-shadow: 4px 4px 0 #000`).
- **Interactive States**:
  - Controls, cards, and buttons use a physical "push effect". On hover or active state, elements translate down and right (`transform: translate(4px, 4px)`) mirroring a physically decreasing shadow cast, keeping the footprint stationary but looking pressed.
- **Micro-animations**: Seamless infinite marquees, delayed popup interactions (`SocialProof.jsx`), and entry transitions handled by `ScrollReveal.jsx`.

## 4. Core Workflows & Data Integrations

### Backend: Google Sheets Serverless Integration
To provide maximum flexibility to non-technical users, all form data bypasses traditional databases and flows securely into a Google Sheet.
1. **Trigger**: User submits the primary form (`Contact.jsx`) or the Footer newsletter form.
2. **Next.js API Gateway**: The frontend `fetch`es its respective backend route `/api/contact` or `/api/newsletter`.
3. **External Relay**: The Next route invokes `writeToSheet(action, data)` sequentially pinging the Apps Script webhook defined in `process.env.GOOGLE_SCRIPT_URL` with a JSON payload of `{ action, ...data }`.
4. **Google Servers**: The script detailed in `APPS_SCRIPT_CODE.js` listens to the POST. Based on the `action` property, it appends a new row to the tab "Leads/Contact" or "Newsletter" within the host Google Sheet.

### State & User Experience (UX) Enhancements
- **Calculations**: `ROICalculator.jsx` exposes a dynamic React component evaluating expected client returns.
- **Proof Display**: `SocialProof.jsx` sequentially renders random predefined "action alerts" (e.g., "Company X booked a call") to drive conversational urgency.
- **Entry Flow**: `PageLoader.jsx` covers the viewport while layout/fonts calculate and remove jitter/FOUC.

## 5. Known Quirks / Deployment Context
- The project originally started under the brand "NexusForge" on a Supabase backend.
- It was completely overhauled and rebranded to **Vyarah**. Any lingering text regarding "NexusForge", "Alacrity" or "Supabase" inside `README.md` or old configurations is legacy. `siteConfig.js` reflects the absolute truth regarding business numbers, tagline, and details.
- Deployment operates with a single vital environment variable: `GOOGLE_SCRIPT_URL`. Ensure its deployment environment (Vercel) matches `.env.local`.
