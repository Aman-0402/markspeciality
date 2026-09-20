# Mark Speciality React Website

**Live site:** [https://markspeciality.netlify.app/](https://markspeciality.netlify.app/)

## Overview

This project is a modern React implementation inspired by the structure and design direction of Mark Speciality India Pvt. Ltd.'s public website. The goal is to build a premium, responsive, accessible, and SEO-friendly industrial website for lubricant products and business enquiries.

The site was built phase by phase (see `AGENT.md` for the full development log): project setup and design system, header/navigation, homepage sections (hero, products, Why Choose Us, Industries, CTA, footer), the About page, a reusable data-driven product system covering all four product category pages, the Brands page, a full blog system, a validated Contact page, site-wide SEO (structured data, sitemap, robots.txt), an accessibility and responsive QA pass, and image performance optimization.

## Features

* Vite React application shell
* React Router route foundation
* Lazy-loaded page modules
* React Helmet Async SEO helper
* Initial responsive global CSS
* Placeholder pages for every required route
* Scroll-to-top behavior
* Loading fallback
* Structured data directory foundation
* CSS design tokens for colors, typography, spacing, shadows, radii, and motion
* Reusable button, card, form, section, grid, and animation utility classes
* Common `ButtonLink` and `SectionHeading` components
* Responsive top bar, desktop navigation, products dropdown, and mobile menu
* Homepage hero with local industrial visual, CTAs, proof points, statistics, and entrance animation
* Data-driven product category section with local imagery, hover interactions, and responsive card grid
* Why Choose Us section with feature data, icons, hover states, and staggered reveal animation
* Industries We Serve section with structured sector data, visual cards, and responsive grid behavior
* Reusable `CTASection` consultation call-to-action used on the homepage
* Site-wide `Footer` with quick links, product links, contact details, social links, and legal links
* `BackToTop` floating scroll-to-top control
* About page with vision/mission overview, core values, company strengths, and expandable capability sections (Manufacturing Capability, Innovation, Sustainability, Quality Commitment, Customer Partnerships, Future Vision)
* Data-driven Products overview page and reusable product category template with breadcrumbs, key benefits, typical applications, performance advantages, industries served, related products, and a consultation CTA
* Four fully working product category pages (Automotive Lubricants, Industrial Lubricants, Greases, Specialty Products), each with its own accent-color visual identity
* Our Brands page presenting the two real brand families, Vorstab ("Innovative Chemistry Way Ahead") and Mark Speciality ("Machines Lifeline"), each with its Industrial and Metal/Metalworking lines, using real photography from the live company website
* Blog listing page with featured article, client-side search, category filters, and responsive blog cards
* Blog article detail page with breadcrumb, metadata, related articles, and share controls (native share, email, copy link)
* Contact page with opening times, customer support, corporate/factory addresses, phone/email links, and a validated contact form with loading and success states
* Site-wide JSON-LD structured data (Organization, BreadcrumbList, Product, Article), `sitemap.xml`, and an updated `robots.txt`
* Accessibility pass: fixed color contrast, mobile menu focus trapping/restoration, and touch target sizing
* Optimized WebP + compressed PNG image delivery with explicit dimensions to prevent layout shift

## Tech Stack

* React
* Vite
* JavaScript / JSX
* React Router
* Framer Motion
* Lucide React
* React Helmet Async
* Modular CSS design system
* ESLint
* sharp (dev-only, image optimization script)

## Installation

```bash
git clone <repository-url>
cd <project-folder>
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Project Structure

```text
src/
  assets/
    images/
    icons/
  components/
    common/
    layout/
    home/
    products/
    blog/
    contact/
  data/
  hooks/
  pages/
  styles/
  utils/
```

Important directories:

* `src/components/` contains reusable UI and layout components.
* `src/pages/` contains route-level page components.
* `src/data/` contains editable content and navigation data.
* `src/styles/` contains modular design-system files for tokens, reset, base styles, components, utilities, and animations.
* `src/assets/` is reserved for owned or replaceable project assets.
* `src/assets/images/` contains local website imagery such as the generated home hero and product category backgrounds.

## Routes

* `/`
* `/about`
* `/products`
* `/products/automotive-lubricants`
* `/products/industrial-lubricants`
* `/products/grease`
* `/products/specialty-products`
* `/brands`
* `/blog`
* `/blog/:slug`
* `/contact`
* `/privacy-policy`
* `/terms`
* `*` custom 404 route

## Components

Reusable components are organized by domain: `components/common/` (SEO, ButtonLink, SectionHeading, Breadcrumb, CTASection, BackToTop, PageLoader, ScrollToTop), `components/layout/` (Header, TopBar, MobileMenu, Footer, MainLayout), `components/home/` (HomeHero, HomeProducts, WhyChooseUs, FeatureCard, Industries, IndustryCard), `components/about/` (AboutHero, ExpandableSection), `components/products/` (ProductCard, ProductGrid, ProductHero, BenefitList, RelatedProducts), `components/brands/` (BrandCard), `components/blog/` (BlogCard, FeaturedArticle, ShareButtons), and `components/contact/` (ContactForm). Pages compose these components with data from `src/data/` rather than duplicating markup per route.

## Responsive Design

The site uses responsive containers, fluid typography (`clamp()`), and responsive grid utilities, verified at 320, 375, 390, 430, 768, 1024, 1280, 1440, and 1920px in Phase 16.

## SEO

Every route sets a unique title, meta description, canonical URL, Open Graph, and Twitter card metadata via the shared `SEO` component (`react-helmet-async`). JSON-LD structured data is included per route: Organization on the homepage, BreadcrumbList on every content page, Product schema on each product category page, and Article schema on each blog post. `public/sitemap.xml` lists all static routes and `public/robots.txt` references it.

## Accessibility

The app includes semantic route structure, a skip link, visible loading status, keyboard-accessible navigation with a focus-trapped and focus-managed mobile menu dialog, and reduced-motion support covering both CSS animations and Framer Motion (`MotionConfig reducedMotion="user"`). A Phase 16 audit fixed a site-wide color contrast issue in section eyebrow text and brand card taglines, and brought interactive touch targets up to the 44px minimum.

## Performance

Routes are lazy-loaded per page and the app uses a small dependency set (React, React Router, Framer Motion, Lucide React, React Helmet Async). All local images (`src/assets/images/`) are served as `<picture>` elements with a compressed WebP source and a resized/compressed PNG fallback, generated with `sharp`; the hero and product images together dropped from roughly 11.4MB to under 400KB for WebP-capable browsers. Every image sets explicit `width`/`height` to prevent layout shift, the hero image uses `loading="eager"`/`fetchPriority="high"` for LCP, and below-the-fold images use `loading="lazy"`. No web fonts are loaded over the network — the type stack falls back to system fonts, so there is no font-loading cost.

## Contact Form Behavior

No backend is connected yet. The form (`src/components/contact/ContactForm.jsx`) validates client-side (required fields, email format, minimum message length) and shows loading, success, and error states. Submission currently calls a local `submitContactForm()` function that simulates a network request with a short delay; replace its body with a real `fetch` call to a backend endpoint when one is available. Corporate and factory addresses in `src/data/contact.js` are placeholders and should be replaced with verified addresses before production launch.

## Environment Variables

No environment variables are currently required.

## Deployment

### Vercel

Connect the GitHub repository, use the default Vite settings, and deploy with:

* Build command: `npm run build`
* Output directory: `dist`

### Netlify (currently deployed)

The site is live at [markspeciality.netlify.app](https://markspeciality.netlify.app/), deployed from this repository's `main` branch. Configuration lives in `netlify.toml` at the repo root:

* Build command: `npm run build`
* Publish directory: `dist`
* Node version: 22
* SPA redirect: `/* -> /index.html` (200) so client-side routes like `/about` or `/products/grease` work on direct load/refresh, not just in-app navigation — without this, Netlify 404s any route besides `/`
* Long-lived cache headers for hashed files under `/assets/*`

## Git Workflow

Use conventional commit messages, such as:

* `feat: initialize React application`
* `feat: build responsive navigation`
* `docs: update readme`
* `fix: resolve navigation overflow`

Each completed phase should be validated, documented in `AGENT.md`, committed, and pushed.

## Future Improvements

* Connect the contact form to a real backend/email API
* Replace placeholder corporate/factory addresses with verified addresses
* Add real Vorstab/Mark Speciality logo marks to brand cards (the live site's own logo assets were unavailable/404 at time of writing)
* Expand the blog with more articles and real cover photography
* Add automated tests (unit/e2e)
* Run a full Lighthouse audit and address any remaining findings

## License / Content Notice

This implementation is inspired by the public structure of Mark Speciality's website. Original proprietary assets should only be used when the project owner has the right to use them. Placeholder or replaceable assets should remain easy to swap for official brand materials.
