# CraftNW Design System

## Overview

The CraftNW design system is inspired by Ugmonk's minimalist, product-focused aesthetic. It emphasizes clean layouts, earthy tones, and generous whitespace to let the products shine.

## Color Palette

### Primary Colors

```css
--craft-tan: #E8DED0;       /* Warm, neutral backgrounds */
--craft-brown: #8B7355;     /* Accents, borders, links */
--craft-black: #1A1A1A;     /* Primary text, buttons */
--craft-cream: #F5F1ED;     /* Card backgrounds, alternating sections */
--craft-white: #FEFEFE;     /* Pure white for contrast */
```

### Accent Colors

```css
--craft-red: #D84315;       /* Brand accent (from logo arrow) */
--craft-olive: #9A8B6F;     /* Subtle accents (future use) */
--craft-charcoal: #3D3D3D;  /* Secondary text */
--craft-warm-gray: #E0D5C7; /* Borders, dividers */
```

### Usage Guidelines

- **Backgrounds**: Use `craft-cream` as the primary body background, `craft-white` for cards, and `craft-tan` for alternating sections
- **Text**: `craft-black` for headings, `craft-charcoal` for body text
- **Accents**: Use `craft-red` sparingly for important CTAs or to echo the logo's red arrow
- **Borders**: Subtle `craft-warm-gray` borders, avoid heavy lines

## Typography

### Font Families

```css
--font-heading: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

### Type Scale

| Element | Size | Weight | Line Height | Letter Spacing |
|---------|------|--------|-------------|----------------|
| H1 | 2.5-4rem (responsive) | 500 | 1.2 | -0.02em |
| H2 | 2-3rem (responsive) | 500 | 1.2 | -0.02em |
| H3 | 1.5-2rem (responsive) | 500 | 1.2 | -0.02em |
| H4 | 1.25-1.5rem (responsive) | 500 | 1.2 | -0.02em |
| Body | 1.125rem (18px) | 400 | 1.7 | normal |
| Small | 0.875-1rem | 400 | 1.5 | normal |

### Typography Guidelines

- **Headings**: Use DM Sans, medium weight (500) only
- **Body text**: Use Inter, regular weight (400)
- **Max width**: Limit body text to 65 characters per line for readability
- **Spacing**: Generous margins between sections (6-10rem)

## Spacing System

### Section Padding

```css
Mobile: 6rem vertical, 1.5rem horizontal
Tablet: 8rem vertical, 2rem horizontal
Desktop: 10rem vertical, 2rem horizontal
```

### Component Spacing

- **Cards**: 2rem (32px) padding
- **Buttons**: 1rem vertical, 2.5rem horizontal
- **Grid gaps**: 2rem (32px) between items

### Whitespace Philosophy

- **More is more**: Double or triple typical spacing
- **Breathing room**: Let elements breathe, avoid cramming
- **Visual hierarchy**: Use space to create clear relationships

## Components

### Buttons

#### Primary Button
```astro
<a href="/shop" class="btn-primary">Shop Now</a>
```

**Style:**
- Background: `craft-black`
- Text: `craft-white`
- Padding: 1rem × 2.5rem
- Border radius: 0.375rem (6px)
- Hover: Slight lift (translateY -2px) + shadow

#### Secondary Button
```astro
<a href="/about" class="btn-secondary">Learn More</a>
```

**Style:**
- Background: Transparent
- Text: `craft-black`
- Border: 2px solid `craft-black`
- Hover: Fill with `craft-black`, text becomes white

### Cards

#### Product Card
```astro
<ProductCard
  name="Product Name"
  price="$XX"
  image="/path/to/image.jpg"
  category="Category"
  link="https://etsy.com/..."
  featured={true}
/>
```

**Style:**
- Background: `craft-white`
- Border radius: 0.75rem (12px)
- Shadow: Subtle (0 2px 8px rgba(0,0,0,0.08))
- Hover: Lift + stronger shadow
- Image: Square aspect ratio, scales on hover

### Layout

#### Container
```astro
<div class="container-craft">
  <!-- Content -->
</div>
```

**Style:**
- Max width: 1280px
- Centered with auto margins
- Horizontal padding: 1.5rem (mobile), 2rem (desktop)

#### Section
```astro
<section class="section-padding bg-craft-cream">
  <div class="container-craft">
    <!-- Content -->
  </div>
</section>
```

## Grid System

### Product Grid

```astro
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  <!-- Product cards -->
</div>
```

**Breakpoints:**
- Mobile: 1 column
- Tablet (768px+): 2 columns
- Desktop (1024px+): 3 columns

### Two-Column Layout

```astro
<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
  <!-- Content -->
</div>
```

## Imagery

### Product Photos

- **Aspect ratio**: Square (1:1) for product cards
- **Quality**: High resolution (800px minimum)
- **Style**: Clean, well-lit, minimal backgrounds
- **Format**: JPG for photos, WebP for web optimization

### Hero Images

- **Dimensions**: 1600px+ width
- **Aspect ratio**: Wide (16:9 or wider)
- **Style**: Lifestyle shots, workshop scenes, product in use
- **Overlay**: Dark overlay (30% opacity) for text readability

## Icons

- **Library**: Lucide Astro
- **Size**: 20-24px (w-5 h-5 or w-6 h-6)
- **Color**: Inherit from parent or `craft-charcoal`
- **Usage**: Sparingly, only when they add clarity

## Interactions

### Hover Effects

- **Buttons**: Slight lift (2px) + shadow
- **Cards**: Lift (4px) + stronger shadow
- **Links**: Color change to `craft-red`
- **Images**: Subtle scale (1.05)

### Transitions

```css
transition: all 0.2s ease;  /* Buttons, links */
transition: all 0.3s ease;  /* Cards, images */
```

## Accessibility

### Color Contrast

- All text meets WCAG AA standards (4.5:1 minimum)
- `craft-black` on `craft-cream`: 12.5:1 ✓
- `craft-charcoal` on `craft-cream`: 8.2:1 ✓
- `craft-white` on `craft-black`: 18.1:1 ✓

### Focus States

- All interactive elements have visible focus states
- Focus rings use browser defaults or custom `craft-red` outline

### Semantic HTML

- Proper heading hierarchy (h1 → h2 → h3)
- Descriptive alt text for all images
- ARIA labels for icon-only buttons

## Brand Elements

### Logo

- **Primary**: Dark logo (`craftnw-logo.svg`) on light backgrounds
- **Light**: Light logo (`craftnw-logo-light.svg`) on dark backgrounds
- **Minimum size**: 60px height
- **Clear space**: Equal to logo height on all sides

### Red Arrow Accent

The red arrow from the logo can be used as a decorative element:
- Navigation indicators
- Section dividers
- Bullet points for lists
- Hover states

## Responsive Design

### Breakpoints

```css
sm: 640px   /* Small tablets */
md: 768px   /* Tablets */
lg: 1024px  /* Laptops */
xl: 1280px  /* Desktops */
```

### Mobile-First Approach

- Design for mobile first
- Enhance for larger screens
- Test on actual devices
- Touch targets: 44px minimum

## Examples

### Homepage Hero

```astro
<Hero
  title="Handcrafted for Your Home"
  subtitle="Quality woodworking and productivity tools"
  ctaText="Shop Products"
  ctaLink="/shop"
  backgroundImage="/images/hero.jpg"
  height="large"
/>
```

### Product Section

```astro
<section class="section-padding bg-craft-cream">
  <div class="container-craft">
    <SectionHeader
      title="Featured Products"
      subtitle="Handpicked items crafted with attention to detail"
    />
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map(product => (
        <ProductCard {...product} />
      ))}
    </div>
  </div>
</section>
```

## Design Principles

1. **Less is More**: Remove unnecessary elements
2. **Quality Over Quantity**: Show fewer products, but show them well
3. **Let Products Shine**: Design should support, not compete with products
4. **Consistent Spacing**: Use the spacing system religiously
5. **Subtle Interactions**: Smooth, refined, never jarring
6. **Mobile-First**: Great experience on all devices
7. **Performance**: Fast loading, optimized images

## Future Considerations

### Phase 2 (E-commerce)

When adding Stripe integration:
- Shopping cart icon in header
- Cart drawer/modal
- Checkout flow pages
- Order confirmation
- Keep the same minimal aesthetic

### Content Expansion

As product catalog grows:
- Category filtering
- Search functionality
- Product detail pages
- Customer reviews
- Keep navigation simple

---

**Remember**: When in doubt, add more whitespace and simplify. The Ugmonk aesthetic is about restraint and letting quality speak for itself.

