# Design System & Accessibility Guide

This document outlines the visual design system and accessibility standards for the Kaadu Golla website.

## Color Palette

The colors are carefully chosen to reflect our community's earthy, grounded identity.

### Primary Colors

| Color | Hex | Usage | Tailwind |
|-------|-----|-------|----------|
| Deep Earth Brown | `#c89050` | Primary actions, headers | `earth-500` |
| Warm Terracotta | `#d9725d` | Accents, highlights | `terracotta-500` |
| Forest Green | `#5a9a66` | Secondary accents | `forest-500` |
| Warm Cream | `#f5c9b8` | Backgrounds, text areas | `cream-500` |

### Semantic Color Use

- **Earth Tones**: Trust, heritage, groundedness
- **Terracotta**: Energy, action, warmth
- **Forest Green**: Growth, community, nature
- **Cream**: Accessibility, readability, openness

### Tailwind Color Scales

Each color has 10 shades (50, 100, 200... 900):

```
earth-50 (lightest) → earth-900 (darkest)
```

Use lighter shades (50-200) for backgrounds, darker (700-900) for text.

## Typography

### Font Families

- **Serif**: Georgia (heritage, readability)
- **Sans-serif**: System UI fonts (modern, accessible)

Fallbacks ensure consistency across platforms.

### Font Sizes

Responsive sizing adapts to screen size:

```
Mobile  →  Tablet  →  Desktop
12px   →   14px   →   16px (body)
24px   →   32px   →   40px (headings)
```

### Font Hierarchy

```
<h1> - 3rem (48px)    - Page titles
<h2> - 2.25rem (36px) - Section titles
<h3> - 1.875rem (30px) - Subsections
<h4> - 1.5rem (24px)  - Component titles
<p>  - 1rem (16px)    - Body text
<small> - 0.875rem (14px) - Metadata
```

## Spacing

Consistent spacing creates visual rhythm:

```
4px   - Micro spacing (buttons, icons)
8px   - Small components
12px  - Component padding
16px  - Section gutters
24px  - Large sections (md:gutter-lg)
32px  - Sections (py-16)
48px  - Major sections (py-24)
```

Mobile: 16px gutters | Desktop: 32px gutters

## Components

### Cards

Consistent card styling:

```
- White background
- border-2 border-earth-200
- Rounded corners (lg: 0.5rem)
- Hover: shadow-lg, border transitions
- Padding: p-6 (24px)
```

### Buttons

**Primary Action:**
```
bg-terracotta-500 hover:bg-terracotta-600
text-white px-8 py-3 rounded-lg font-semibold
```

**Secondary Action:**
```
bg-earth-100 hover:bg-earth-200
text-earth-800 px-8 py-3 rounded-lg font-semibold
```

**Disabled State:**
```
opacity-50 cursor-not-allowed
```

### Forms

- Labels: `font-semibold text-gray-700`
- Inputs: `border border-earth-300 rounded p-2`
- Focus: `outline-2 outline-terracotta-500`

## Responsive Design

### Breakpoints

- **sm**: 640px (small phones)
- **md**: 768px (tablets)
- **lg**: 1024px (desktops)
- **xl**: 1280px (large screens)

### Mobile-First Approach

```jsx
// Default = mobile
className="grid grid-cols-1 
  md:grid-cols-2   // Tablets
  lg:grid-cols-3"  // Desktops
```

### Touch Targets

Minimum 44x44px for interactive elements (mobile).

## Accessibility (a11y)

### WCAG 2.1 Level AA Compliance

Our site aims for:
- ✓ Perceivable (text alternatives, readable contrast)
- ✓ Operable (keyboard navigation, no traps)
- ✓ Understandable (clear language, predictable behavior)
- ✓ Robust (compatible with assistive tech)

### Color Contrast

Minimum ratios:
- **4.5:1** for normal text
- **3:1** for large text (18pt+)
- **3:1** for graphics/components

Example passing combinations:
- Earth-800 on cream-50: ✓ 8.2:1
- Forest-700 on white: ✓ 6.1:1

### Semantic HTML

```jsx
// Good ✓
<header>Navigation</header>
<main>Content</main>
<section>Article</section>
<article>Story</article>
<footer>Links</footer>

// Bad ✗
<div>Navigation</div>
<div>Content</div>
```

### Keyboard Navigation

All interactive elements accessible via Tab key:

```
Tab      - Move forward
Shift+Tab - Move backward
Enter    - Activate button/link
Space    - Activate checkbox
Arrow    - Navigate menu items
Esc      - Close modals/menus
```

### Screen Readers

- Use semantic HTML (auto-labeled)
- Provide ARIA labels for complex components
- Add skip links for navigation

```jsx
<a href="#main-content" className="skip-link">
  Skip to main content
</a>
```

### Focus Management

Clear focus indicators:

```css
/* All interactive elements */
a:focus, button:focus {
  outline: 2px solid rgb(218, 114, 93);
  outline-offset: 2px;
}
```

### Text Alternatives

All images require `alt` text:

```jsx
<img src="festival.jpg" alt="Kula Festival celebration with cattle and community" />
```

### Motion & Animation

Respect `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: no-preference) {
  .animate-fade {
    animation: fadeIn 0.5s ease-in;
  }
}
```

## Dark Mode Consideration

Currently optimized for light mode. Dark mode can be added via:

```css
@media (prefers-color-scheme: dark) {
  body {
    @apply bg-gray-900 text-white;
  }
}
```

## Performance Considerations

### Image Optimization

Use `next/image` for:
- ✓ Automatic responsive sizing
- ✓ Format conversion (WebP, AVIF)
- ✓ Lazy loading
- ✓ Placeholder blur effects

```jsx
import Image from 'next/image';

<Image
  src="/festival.jpg"
  alt="Festival"
  width={800}
  height={600}
  placeholder="blur"
  blurDataURL="..."
/>
```

### CSS Performance

- Tailwind purges unused classes
- CSS-in-JS minimized
- No runtime style compilation

### Font Loading

System fonts load fastest (no web fonts), but consider:

```css
@font-face {
  font-family: 'CustomFont';
  font-display: swap; /* Show fallback immediately */
}
```

## RTL Support (Future)

If supporting RTL languages (Hindi, Urdu, Arabic):

- Add `dir="rtl"` to `<html>` or specific elements
- Mirror images and layouts
- Adjust text alignment
- Test with native speakers

## Testing Checklist

Before deployment:

- [ ] Test keyboard navigation (Tab through all elements)
- [ ] Test with screen reader (NVDA, JAWS, VoiceOver)
- [ ] Verify color contrast (WebAIM contrast checker)
- [ ] Check responsive design (mobile, tablet, desktop)
- [ ] Test on real devices (not just browser simulation)
- [ ] Verify focus management in modals/menus
- [ ] Test with browser zoom (up to 200%)
- [ ] Verify touch targets are ≥44x44px
- [ ] Check page structure (heading hierarchy, landmarks)

## Resources

- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [WAVE Accessibility Tool](https://wave.webaim.org/)
- [Axe DevTools](https://www.deque.com/axe/devtools/)
- [Lighthouse (Chrome)](https://developers.google.com/web/tools/lighthouse)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

## Design Philosophy

Our design embodies:

1. **Inclusivity**: Works for everyone, regardless of ability
2. **Clarity**: Information is easy to find and understand
3. **Respect**: Honors cultural heritage without being patronizing
4. **Efficiency**: Fast loading, minimal friction
5. **Pride**: Beautiful, dignified representation of our community

---

Questions about design? Contact the team or open an issue on GitHub.
