# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

RevOpsUnicorn is a marketing website for a consulting firm specializing in accounting practice exit preparation. The project targets accounting firm owners (55-68 years old) preparing for retirement and sale.

**Key files:**
- `src/` - Astro website source code
- `revops-unicorn-business-plan.md` - Business strategy and financial projections
- `revops-unicorn-design-research.md` - Brand guidelines and design decisions
- `revops-unicorn-website.jsx` - Original React component (archived)

## Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production (output in dist/)
npm run preview  # Preview production build
```

## Architecture

This is an **Astro static site** with Tailwind CSS.

```
src/
├── components/
│   ├── Navigation.astro    # Sticky header with mobile menu
│   ├── Hero.astro
│   ├── TrustBar.astro
│   ├── JourneySelector.astro  # Value Path stage selector
│   ├── ProblemSection.astro
│   ├── SolutionSection.astro
│   ├── ServiceTiers.astro     # 3 renamed tiers
│   ├── ProcessSection.astro
│   ├── Testimonials.astro
│   ├── AboutSection.astro
│   ├── CTASection.astro
│   ├── Footer.astro
│   └── icons/              # SVG icon components
├── layouts/
│   └── Layout.astro        # Base layout with fonts/meta
├── pages/
│   └── index.astro         # Main page
└── styles/
    └── global.css          # Tailwind + brand theme
```

## Service Tiers (Value-First naming)

| Tier | Price | Description |
|------|-------|-------------|
| Practice Clarity Assessment | $7,500 | Understand where you are and map your path |
| Transformation Partnership | $37,500 | 12-18 month hands-on transformation |
| Transition Partnership | 2% of value | Full transformation through exit |

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
