# Kaadu Golla Community Website

A modern, accessible, and culturally-grounded digital home for the Kaadu Golla community of Karnataka, India.

## 🎯 Mission

Preserve our pastoral heritage, celebrate community identity, and advocate for constitutional rights and equitable representation (ST classification) while fostering internal social reform and modernization.

## 🌍 Features

- **Home**: Mission statement, heritage celebration, ST status advocacy news wire
- **Culture**: Deep-dive into pastoral heritage, Hatti social structures, language/folklore, sacred rituals (Devara Gubba), and internal social reform movements
- **Events**: Dynamic timeline of Kula festivals, community gatherings, advocacy initiatives, and social reform meetings
- **Recognizable Figures**: Directory of community elders, political leaders/advocates, and professional achievers

## 💻 Tech Stack

- **Framework**: [Next.js 14+](https://nextjs.org/) (React, SSR, App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (mobile-first, custom earthy palette)
- **CMS**: [Strapi](https://strapi.io/) (headless CMS for flexible content management)
- **Deployment**: [Vercel](https://vercel.com/)
- **API**: Axios for REST client communication
- **Type Safety**: TypeScript

## 🎨 Design Philosophy

- **Palette**: Earthy tones (deep terracotta/browns, forest greens, warm off-whites) reflecting our soil and forest heritage
- **Mobile-First**: Fully responsive, optimized for low-bandwidth rural environments
- **Accessible**: Semantic HTML, WCAG compliance, screen reader friendly
- **Performance**: Optimized images, code splitting, minimal dependencies

## 📁 Project Structure

```
/app                  - Next.js app directory (routes, layouts)
  /culture           - Culture page route
  /events            - Events page route
  /figures           - Community figures page route
  layout.tsx         - Root layout
  page.tsx           - Home page

/components           - Reusable React components
  /home              - Home page sections
  /culture           - Culture page components
  /events            - Events page components
  /figures           - Figures page components
  Header.tsx         - Navigation header
  Footer.tsx         - Site footer

/lib                  - Utility functions and API clients
  strapi.ts          - Strapi API client
  utils.ts           - Common helpers

/public               - Static assets (images, fonts)

/styles               - Global styles
  globals.css        - Tailwind CSS directives

/content              - Markdown files (optional, for static content)

.env.example          - Environment variables template
tailwind.config.ts    - Tailwind CSS configuration
tsconfig.json         - TypeScript configuration
next.config.ts        - Next.js configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- Strapi instance (local or hosted)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd kaadu-golla-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Then edit `.env.local` with your Strapi configuration.

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open http://localhost:3000 in your browser

### Production Build

```bash
npm run build
npm run start
```

## 📝 Environment Configuration

Create a `.env.local` file with these variables:

```
# Strapi CMS
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=your_strapi_api_token

# Site Configuration
NEXT_PUBLIC_SITE_NAME=Kaadu Golla Community
NEXT_PUBLIC_SITE_DESCRIPTION=Digital home for the Kaadu Golla community
```

## 🔌 CMS Integration (Strapi)

### Quick Setup

1. [Install Strapi](https://docs.strapi.io/dev-docs/quick-start)
2. Create collections:
   - Events
   - Figures
   - News/Updates
   - Cultural Articles

3. Configure API tokens in Strapi admin panel
4. Update `STRAPI_API_TOKEN` in `.env.local`

### Using Strapi API

The `lib/strapi.ts` provides helper functions:

```typescript
import { fetchStrapiCollection, fetchStrapiEntry } from "@/lib/strapi";

// Fetch all events
const events = await fetchStrapiCollection("events");

// Fetch a specific event
const event = await fetchStrapiEntry("events", "1");
```

## 🎨 Customizing Colors

Edit `tailwind.config.ts` to modify the earthy palette:

```typescript
colors: {
  earth: { ... },      // Deep browns
  terracotta: { ... }, // Warm terracotta
  forest: { ... },     // Forest greens
  cream: { ... },      // Warm off-whites
}
```

## 📱 Mobile Optimization

- Responsive grid layouts (1 col → 2 col → 3 col)
- Hamburger menu on mobile
- Touch-friendly buttons and links
- Optimized images with next/image
- Lazy loading for performance

## ♿ Accessibility Features

- Semantic HTML (`<header>`, `<nav>`, `<main>`, `<footer>`)
- ARIA labels for interactive elements
- Skip-to-content link
- Focus management and focus states
- Keyboard navigation support
- High contrast color ratios

## 📊 Performance Optimization

- Next.js SSR for fast initial load
- Image optimization with next/image
- Code splitting and lazy components
- Minimal CSS (Tailwind purging)
- Font optimization
- Caching strategies for static content

## 🌐 Deployment to Vercel

1. Push code to GitHub
2. Connect repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically on push

[Vercel Deployment Guide](https://vercel.com/docs)

## 📖 Content Management Workflow

1. **Add Content in Strapi**: Create events, figures, articles
2. **Publish**: Mark as published in Strapi admin
3. **Site Updates**: Next.js fetches and displays automatically
4. **No Code Changes**: Managed entirely through CMS

## 🛠️ Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Create optimized production build
npm run start    # Start production server
npm run lint     # Run ESLint
npm run format   # Format code with Prettier
```

## 🤝 Contributing

We welcome community contributions! Guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is community-owned and protected. Please contact for licensing inquiries.

## 📞 Contact & Support

- **Email**: contact@kaadugolla.in
- **GitHub Issues**: [Report bugs or suggest features](../../issues)
- **Community**: Connect with us for partnerships and collaborations

## 🙏 Acknowledgments

This website is built with deep respect for Kaadu Golla heritage, traditions, and the courage of community leaders and reformers fighting for justice and equality.

---

**Preserving heritage. Building futures. Together.**
