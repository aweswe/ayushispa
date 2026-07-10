# The Sanctuary — Luxury Delhi Spa

A premium, hyper-local SEO optimized web application built using **Next.js 16 (App Router)** and a bespoke **forest green & champagne gold** design system. The platform is architected to rank at the top of local search queries across Delhi-NCR commercial districts.

---

## Key Features

### 1. Modern Visual Architecture
* **Glassmorphic Navigation:** A floating, centered capsule header featuring fluid transitions and a gold-accented dot micro-interaction for active links.
* **Cinematic Hero Container:** Float-aligned typography container layered on top of custom-generated spa photography assets with dual forest-green gradients for visual clarity.
* **Responsive Layouts:** Hand-crafted, responsive grids for desktop, tablet, and mobile that stack naturally and stretch touch-targets for a native-app feel.

### 2. Hyper-Local SEO & Dynamic Routing
* **Dynamic Articles Engine:** Statically generates articles and geo-targeted neighborhood landing pages (e.g., Connaught Place, Saket, Gurgaon) using a custom JSON blueprint (`seo-plan-1783719292080.json`).
* **Silo Linking Architecture:** Cross-links article sidebars to relevant treatments and Booking paths to concentrate domain authority.
* **Dynamic XML Sitemap:** Automatically compiles static routes, dynamic article pages, and hyper-local landing pages into `sitemap.xml` for search indexation coverage.

### 3. YMYL & E-E-A-T Compliance
* **Author Bios & Credentials:** Injects custom author bio cards for **Dr. Ananya Goel** (*B.A.M.S, MD*) at the base of articles.
* **Medical Verification:** Integrates a verified "Medically Reviewed By" badge pointing to credentialed specialists to meet Google's quality standards.

### 4. Advanced Structured Data
* **HealthAndBeautyBusiness Schemas:** Deploys individual JSON-LD schemas for the Lajpat Nagar, Aerocity, and Karol Bagh enclaves with physical coordinates and telephone lines.
* **Nested Offers Catalog:** Lists core spa services with descriptions, durations, and pricing in Indian Rupees (`INR`).
* **FAQPage Schemas:** Mounts Q&A schema blocks on the treatments page to render rich-snippet collapsible dropdowns directly on Google Search.

---

## Directory Structure

```
├── app/
│   ├── about/            # Lineage & NCR locations
│   ├── articles/         # Insights directory & Dynamic SSG routes
│   ├── contact/          # Enclave coordinates & reservations
│   ├── gallery/          # Materiality & architectural specs
│   ├── testimonials/     # Commitments & guestbooks
│   ├── treatments/       # Treatment menus & pricing tables
│   ├── wellness/         # Digital detox protocols
│   ├── layout.tsx        # Global structure, branch schemas, nav & footer
│   ├── sitemap.ts        # Dynamic sitemap compiler
│   └── robots.ts         # Robot crawling parameters
├── components/
│   ├── layout/           # Navbar, Footer
│   ├── sections/         # Homepage blocks (Hero, Philosophy, Stats)
│   └── ui/               # Date/Time/Treatment Pickers, JsonLd
├── data/                 # Articles database, treatments, testimonials
├── public/               # Localized high-res spa images
├── styles/               # Core design tokens, layout, and sections CSS
├── vercel.json           # Vercel-level CDN caching & security headers
└── seo_analyzer.py       # Zero-dependency competitor SEO scraping tool
```

---

## Getting Started

### Installation
Install the project dependencies:
```bash
npm install
```

### Run Locally
Launch the development server with Turbopack compilation:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to preview the site.

### Build and Export
Verify compilation and statically generate all 27 paths for production:
```bash
npm run build
```

---

## Deployment & Verification
* **Vercel Caching:** The project includes a `vercel.json` file configuring static assets under `/images/` to be cached on the Edge CDN for 1 year, ensuring instant image delivery.
* **Search Console Verification:** Add your verification string to the `verification.google` tag inside [app/layout.tsx](file:///Users/jarvis/Desktop/spa-website/app/layout.tsx) to verify your domain ownership.
