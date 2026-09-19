# Mark Speciality React Website

## Overview

This project is a modern React implementation inspired by the structure and design direction of Mark Speciality India Pvt. Ltd.'s public website. The goal is to build a premium, responsive, accessible, and SEO-friendly industrial website for lubricant products and business enquiries.

Phase 1 established the React/Vite foundation, routing shell, project structure, documentation, and development workflow. Phase 2 added the global design system. Phase 3 added the responsive header and navigation foundation. Phase 4 added the homepage hero. Phase 5 added the product category section. Phase 6 added the Why Choose Us feature section. Phase 7 added the Industries We Serve section. Phase 8 added the reusable consultation CTA, site footer, and back-to-top control. Phase 9 added the full About page. Phase 10 added the reusable, data-driven product overview and product category page architecture. Phase 11 completed all four product category pages, each with a distinct accent-color visual identity. Phase 12 added the Our Brands page. Phase 13 added the complete blog system. Phase 14 added the contact page with validated form handling. Additional sections and production content will be implemented phase by phase.

## Features

Current Phase 1 foundation:

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
* Our Brands page presenting four Mark Speciality brand lines (Mark Drive, Mark Industrial, Mark Shield, Mark Specialty), each linked to its matching product category
* Blog listing page with featured article, client-side search, category filters, and responsive blog cards
* Blog article detail page with breadcrumb, metadata, related articles, and share controls (native share, email, copy link)
* Contact page with opening times, customer support, corporate/factory addresses, phone/email links, and a validated contact form with loading and success states

Planned features include advanced navigation, product browsing, blog content, contact form validation, SEO structured data, responsive polish, and performance optimization.

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
* `*` custom 404 route

## Components

The initial architecture includes reusable layout, SEO, loading, scroll restoration, header, top bar, desktop navigation, and mobile menu components. Future phases will add footer, product cards, blog cards, contact form, breadcrumbs, CTA sections, and product category layouts.

## Responsive Design

The shell includes responsive containers, mobile-safe typography, fluid section spacing, and responsive grid utilities. Full responsive QA across target breakpoints will be completed in the dedicated accessibility and responsive phase.

## SEO

Initial route metadata is handled with `react-helmet-async`. Future phases will add richer Open Graph assets, canonical-ready route metadata, sitemap, robots updates, and structured data.

## Accessibility

The app includes semantic route structure, a skip link, visible loading status, and reduced-motion support. Full keyboard, contrast, heading, alt text, and form accessibility reviews are planned.

## Performance

Routes are lazy-loaded and the app uses a small dependency set. Future phases will optimize images, code splitting, fonts, and layout stability.

## Contact Form Behavior

No backend is connected yet. The form (`src/components/contact/ContactForm.jsx`) validates client-side (required fields, email format, minimum message length) and shows loading, success, and error states. Submission currently calls a local `submitContactForm()` function that simulates a network request with a short delay; replace its body with a real `fetch` call to a backend endpoint when one is available. Corporate and factory addresses in `src/data/contact.js` are placeholders and should be replaced with verified addresses before production launch.

## Environment Variables

No environment variables are currently required.

## Deployment

### Vercel

Connect the GitHub repository, use the default Vite settings, and deploy with:

* Build command: `npm run build`
* Output directory: `dist`

### Netlify

Connect the GitHub repository or upload a production build with:

* Build command: `npm run build`
* Publish directory: `dist`

## Git Workflow

Use conventional commit messages, such as:

* `feat: initialize React application`
* `feat: build responsive navigation`
* `docs: update readme`
* `fix: resolve navigation overflow`

Each completed phase should be validated, documented in `AGENT.md`, committed, and pushed.

## Future Improvements

* Premium responsive navigation
* Full industrial design system
* Product data architecture
* Blog search and article pages
* Contact form API integration
* Structured data and sitemap generation
* Image optimization workflow
* Final Lighthouse and accessibility pass

## License / Content Notice

This implementation is inspired by the public structure of Mark Speciality's website. Original proprietary assets should only be used when the project owner has the right to use them. Placeholder or replaceable assets should remain easy to swap for official brand materials.
