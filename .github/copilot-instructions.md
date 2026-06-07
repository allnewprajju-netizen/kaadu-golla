# Kaadu Golla Community Website - Development Guide

## Project Overview
This is a Next.js website serving as a digital home for the Kaadu Golla community of Karnataka, India. The site preserves cultural heritage, celebrates community identity, and advocates for socio-political rights (ST classification).

## Core Features
- **Home**: Mission statement, heritage celebration, ST status advocacy news
- **Culture**: Pastoral heritage, Hatti structure, language/folklore, sacred rituals (Devara Gubba)
- **Events**: Timeline/cards for Kula festivals, community gatherings, social reform initiatives
- **Recognizable Figures**: Directory of elders, political leaders, professionals/achievers

## Tech Stack
- **Framework**: Next.js 14+ (React, SSR)
- **Styling**: Tailwind CSS (mobile-first, earthy palette)
- **CMS**: Strapi (headless CMS for content management)
- **Deployment**: Vercel
- **Performance**: Optimized for low-bandwidth, rural environments

## Design Principles
- **Color Palette**: Deep terracotta/browns, forest greens, warm off-whites
- **Mobile-First**: Responsive, accessible (semantic HTML, WCAG)
- **Performance**: Optimized images, code splitting, minimal dependencies
- **Community-Centered**: Reflects Hatti social structure and collective identity

## Getting Started

1. Install dependencies: `npm install`
2. Set up Strapi locally or connect to hosted instance
3. Configure environment variables (`.env.local`)
4. Run development server: `npm run dev`
5. Open http://localhost:3000

## Project Structure
```
/app          - Next.js app directory (routes, layouts)
/components   - Reusable UI components
/lib          - Utilities (API clients, helpers)
/public       - Static assets (images, fonts)
/styles       - Global styles, Tailwind config
/content      - Markdown files (alternative to CMS)
```

## Documentation
- See README.md for detailed setup
- Component documentation in `/components/README.md`
- API integration guide in `/lib/README.md`
