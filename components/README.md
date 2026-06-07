# Components Documentation

This directory contains reusable React components organized by section.

## Structure

### /home
Home page components:
- `HeroBanner.tsx` - Large hero section with call-to-action
- `MissionStatement.tsx` - Three-pillar mission cards
- `QuickLinks.tsx` - Grid of quick navigation links
- `NewsWire.tsx` - Community updates and news feed

### /culture
Culture page components:
- `CultureHero.tsx` - Hero section for culture page
- `CultureSections.tsx` - Tabbed interface for cultural topics

### /events
Events page components:
- `EventsHero.tsx` - Hero section for events page
- `EventsTimeline.tsx` - Timeline view with filtering

### /figures
Figures page components:
- `FiguresHero.tsx` - Hero section for figures page
- `FiguresDirectory.tsx` - Directory with category filtering

## Global Components

- `Header.tsx` - Navigation header with mobile menu
- `Footer.tsx` - Site footer with links and contact

## Component Patterns

### Props Pattern
All components follow TypeScript prop definitions:

```typescript
interface ComponentProps {
  title: string;
  items: Array<{ id: number; name: string }>;
  onAction?: () => void;
}

export default function Component({ title, items, onAction }: ComponentProps) {
  // ...
}
```

### Client vs Server Components
- Use `"use client"` for interactive components (state, events)
- Default to server components for better performance

### Styling
- All styling uses Tailwind CSS utility classes
- Custom colors use the extended palette from `tailwind.config.ts`
- Responsive classes: `md:`, `lg:`, `sm:`

### Accessibility
- Semantic HTML elements
- ARIA labels for interactive elements
- Focus management
- Keyboard navigation

## Creating New Components

1. **Create file** in appropriate subfolder
2. **Add TypeScript interface** for props
3. **Use semantic HTML** and Tailwind classes
4. **Export default**
5. **Add accessibility features**

Example:

```typescript
interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg border border-earth-200">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
```

## Reusable Patterns

### Card Component
```typescript
// Use for content cards
<div className="bg-white rounded-lg border border-earth-200 p-6 hover:shadow-lg transition">
  {/* Content */}
</div>
```

### Button Styles
```typescript
// Primary action
className="px-6 py-3 bg-terracotta-500 text-white font-semibold rounded-lg hover:bg-terracotta-600 transition"

// Secondary action
className="px-6 py-3 bg-earth-100 text-earth-800 font-semibold rounded-lg hover:bg-earth-200 transition"
```

### Grid Layout
```typescript
// Responsive grid (1 col mobile, 2 col tablet, 3 col desktop)
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
```

### Section Container
```typescript
className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24"
```

## Testing Components

Each component should be tested for:
- Responsive design (mobile, tablet, desktop)
- Accessibility (keyboard nav, screen readers)
- Performance (lazy loading, image optimization)
- Cross-browser compatibility

## Performance Tips

1. Use Next.js Image component for images
2. Lazy load non-critical components
3. Memoize expensive computations
4. Keep component files small and focused
5. Use CSS classes instead of inline styles
