# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

RevOpsUnicorn is a multi-page marketing website for a consulting firm specializing in AI-powered accounting practice exit preparation. The project targets accounting firm owners (55-68 years old) preparing for retirement and sale.

**Key files:**
- `src/` - Astro website source code
- `src/data/services.ts` - Central data file for all 11 services (8 AI + 3 engagement models)
- `revops-unicorn-business-plan.md` - Business strategy and financial projections
- `revops-unicorn-design-research.md` - Brand guidelines and design decisions

## Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production (output in dist/)
npm run preview  # Preview production build
```

## Architecture

This is a **multi-page Astro static site** with Tailwind CSS.

```
src/
├── data/
│   └── services.ts          # Central data: 8 AI services + 3 engagement models
├── components/
│   ├── Navigation.astro      # Sticky header with services dropdown (desktop hover, mobile accordion)
│   ├── Hero.astro
│   ├── TrustBar.astro
│   ├── JourneySelector.astro # Value Path stage selector
│   ├── ProblemSection.astro
│   ├── SolutionSection.astro
│   ├── ServiceHighlights.astro # Homepage: top 4 AI services + engagement tiers
│   ├── ProcessSection.astro
│   ├── CTASection.astro       # Reusable (accepts headline/body props)
│   ├── Footer.astro
│   ├── Breadcrumb.astro       # Home > Services > Page
│   ├── ServiceCard.astro      # Reusable card for service grids
│   ├── ServicePageTemplate.astro # Full service page template
│   └── icons/                 # SVG icon components
├── layouts/
│   └── Layout.astro           # Base layout with fonts/meta (title/description props)
├── pages/
│   ├── index.astro            # Homepage
│   ├── about.astro            # About page (extracted from AboutSection + Testimonials)
│   ├── contact.astro          # Contact page with inline Calendly
│   └── services/
│       ├── index.astro        # Services overview (8 AI grid + 3 engagement cards)
│       └── [slug].astro       # Dynamic route → 11 service pages from services.ts
└── styles/
    └── global.css             # Tailwind + brand theme
```

### Site Map (15 pages)

```
/                           → Homepage
/services/                  → Services overview
/services/ai-tax-preparation/       → AI Tax Preparation & Filing
/services/ai-practice-management/   → AI Workflow & Practice Management
/services/ai-bookkeeping/           → AI Bookkeeping Automation
/services/ai-cfo-advisory/          → AI Financial Analysis & CFO Advisory
/services/document-intake/           → Automated Document Collection
/services/ai-client-portal/          → AI Client Portal & Communication
/services/ai-compliance/             → AI Compliance & Regulatory
/services/ai-payroll/                → AI Payroll Processing
/services/practice-clarity/          → Practice Clarity Assessment
/services/transformation-partnership/ → Transformation Partnership
/services/transition-partnership/     → Transition Partnership
/about/                     → About page
/contact/                   → Contact with Calendly embed
```

### Data Architecture

The 8 AI services are capabilities (what gets delivered). The 3 engagement models are depth of partnership (how we work together). A Clarity Assessment identifies which services a firm needs. A Transformation Partnership implements 3-5 of them. A Transition Partnership implements all + manages through exit.

All service data lives in `src/data/services.ts`. Service pages are generated from this data via `[slug].astro`. To add a service, add an entry to services.ts — the page, navigation dropdown, and service grids update automatically.

## Service Categories

### 8 AI Services
| Service | Slug | Demand |
|---------|------|--------|
| AI Tax Preparation & Filing | `ai-tax-preparation` | Very High |
| AI Workflow & Practice Management | `ai-practice-management` | Very High |
| AI Bookkeeping Automation | `ai-bookkeeping` | High |
| AI Financial Analysis & CFO Advisory | `ai-cfo-advisory` | High |
| Automated Document Collection | `document-intake` | High |
| AI Client Portal & Communication | `ai-client-portal` | Medium-High |
| AI Compliance & Regulatory | `ai-compliance` | Medium |
| AI Payroll Processing | `ai-payroll` | Medium |

### 3 Engagement Models
| Tier | Slug | Price |
|------|------|-------|
| Practice Clarity Assessment | `practice-clarity` | $7,500 |
| Transformation Partnership | `transformation-partnership` | $37,500 |
| Transition Partnership | `transition-partnership` | 2% of value |

## Tech Stack

- **Astro** - Static site generator
- **Tailwind CSS 4** - Using `@theme` for custom properties
- **Google Fonts** - Playfair Display (serif), Source Sans Pro (sans)

## Brand Guidelines

- **Theme**: "Midnight Prosperity"
- **Colors** (defined in global.css):
  - `navy`: #1a365d
  - `gold`: #c9a227
  - `burgundy`: #8b2942
  - `cream`: #faf8f5
  - `charcoal`: #2d3748
- **Character**: "The Wise Advisor" unicorn mascot
- **Target audience**: Baby boomers (55-68)
- **Tone**: Trusted advisor, classic prosperity feel, avoid startup jargon

## Value-First Language

This site follows Value-First language principles:
- Uses "exit preparation" not "exit value optimization"
- Frames benefits through stakeholders (clients, employees, owner) not just buyers
- Offers multiple entry points based on visitor readiness (JourneySelector)
- Includes educational CTAs for those not ready to call
