# 🚀 Getting Started with CraftNW Website

## Quick Start

Your CraftNW website is ready! Here's how to get started:

### 1. Start the Development Server

```bash
# Make sure you're using Node 20+
nvm use 20

# Start the dev server
npm run dev
```

Your site will be running at **http://localhost:4321**

### 2. View Your Site

Open your browser and navigate to:
- **Homepage**: http://localhost:4321
- **Shop**: http://localhost:4321/shop (to be created)
- **About**: http://localhost:4321/about (to be created)
- **Contact**: http://localhost:4321/contact (to be created)

## What's Been Created

### ✅ Design System (Option C - Complete!)

- **Color Palette**: Earthy, Ugmonk-inspired colors (tan, brown, cream, black)
- **Typography**: DM Sans for headings, Inter for body text
- **Spacing System**: Generous, Ugmonk-style whitespace
- **Component Library**: Header, Footer, Hero, ProductCard, SectionHeader

### ✅ Homepage (Option B - Complete!)

The homepage includes:
- **Hero Section**: Full-width with background image and CTA
- **Featured Products**: 3-column grid showcasing featured items
- **About Preview**: Two-column layout with image and text
- **Newsletter Signup**: Email capture form

### 🎨 Design Highlights

1. **Ugmonk-Inspired Aesthetic**
   - Clean, minimal design
   - Maximum whitespace
   - Product-focused layout
   - Subtle hover effects

2. **Color Palette**
   - Tan (#E8DED0) - Warm backgrounds
   - Brown (#8B7355) - Accents
   - Black (#1A1A1A) - Text, buttons
   - Cream (#F5F1ED) - Cards
   - Red (#D84315) - Brand accent (from logo)

3. **Components Built**
   - Header with navigation
   - Footer with social links
   - Hero component (flexible)
   - Product card with hover effects
   - Section headers

## Next Steps

### Phase 1: Complete Core Pages

1. **Shop Page** (`src/pages/shop.astro`)
   - Full product grid
   - Category filtering
   - Links to Etsy

2. **About Page** (`src/pages/about.astro`)
   - Your story
   - Workshop photos
   - Process/philosophy

3. **Contact Page** (`src/pages/contact.astro`)
   - Contact form
   - Email/social links
   - Location info

### Phase 2: Content & Assets

1. **Replace Placeholder Images**
   - Add real product photos to `/public/images/products/`
   - Update hero background image
   - Add workshop/about photos

2. **Update Product Data**
   - Edit `src/data/products.ts`
   - Add real product names, prices, descriptions
   - Update Etsy links

3. **Customize Content**
   - Update homepage copy
   - Write about page content
   - Personalize footer

### Phase 3: Polish & Deploy

1. **Test Everything**
   - Check all links
   - Test on mobile devices
   - Verify Etsy links work

2. **SEO Optimization**
   - Add meta descriptions
   - Create OG images
   - Update favicons

3. **Deploy to AWS Amplify**
   - Connect GitHub repo
   - Configure domain (craft-nw.com)
   - Set up SSL certificate

## File Structure

```
/
├── public/
│   ├── images/
│   │   ├── craftnw-logo.svg          # Dark logo (for light backgrounds)
│   │   ├── craftnw-logo-light.svg    # Light logo (for dark backgrounds)
│   │   └── products/                  # Product images go here
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.astro              # Site navigation
│   │   ├── Footer.astro              # Site footer
│   │   ├── Hero.astro                # Hero section component
│   │   ├── ProductCard.astro         # Product display card
│   │   └── SectionHeader.astro       # Section title component
│   ├── config/
│   │   └── site.ts                   # Contact info, social links
│   ├── data/
│   │   └── products.ts               # Product catalog
│   ├── layouts/
│   │   └── BaseLayout.astro          # Base HTML layout
│   ├── pages/
│   │   └── index.astro               # Homepage ✅
│   └── styles/
│       └── global.css                # Design system
└── docs/
    ├── DESIGN-SYSTEM.md              # Complete design documentation
    └── GETTING-STARTED.md            # This file
```

## Adding Products

Edit `src/data/products.ts`:

```typescript
{
  id: "unique-product-id",
  name: "Product Name",
  category: "Woodworking", // or "Productivity Cards", "Greeting Cards", "Printables"
  price: "$XX",
  description: "Product description for SEO",
  image: "/images/products/your-image.jpg",
  etsyLink: "https://www.etsy.com/listing/...",
  featured: true, // Shows on homepage
}
```

## Customizing Colors

Edit `src/styles/global.css` to change the color palette:

```css
:root {
  --craft-tan: #E8DED0;       /* Change these values */
  --craft-brown: #8B7355;
  --craft-black: #1A1A1A;
  /* ... etc */
}
```

## Updating Site Info

Edit `src/config/site.ts`:

```typescript
export const ORG_CONTACT = {
  email: "hello@craft-nw.com",
  phone: "",
  location: "Newberg, Oregon",
};

export const ORG_SOCIALS = {
  instagram: "https://www.instagram.com/craft_nw/",
  etsy: "https://www.etsy.com/shop/CraftNW",
};
```

## Commands

```bash
# Development
npm run dev          # Start dev server (http://localhost:4321)
npm run build        # Build for production
npm run preview      # Preview production build
npm run check        # Type check

# Node Version
nvm use 20          # Switch to Node 20 (required)
```

## Tips

1. **Hot Reload**: The dev server auto-reloads when you save files
2. **Component Reuse**: Copy existing components and modify them
3. **Placeholder Images**: Use Unsplash URLs for now, replace later
4. **Mobile First**: Always check mobile view (resize browser)
5. **Design System**: Refer to `docs/DESIGN-SYSTEM.md` for guidelines

## Troubleshooting

### Node Version Error

```bash
# Install Node 20 if not available
nvm install 20
nvm use 20
```

### Port Already in Use

```bash
# Kill process on port 4321
lsof -ti:4321 | xargs kill -9

# Or use a different port
npm run dev -- --port 3000
```

### Build Errors

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

## Resources

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev)
- [Unsplash](https://unsplash.com) - Free placeholder images

## Design Inspiration

- [Ugmonk](https://ugmonk.com) - Primary inspiration
- Clean, product-focused layouts
- Generous whitespace
- Earthy, natural color palettes

---

**You're all set!** Start by viewing the homepage at http://localhost:4321, then begin customizing the content and adding your real products. 🎨🪵

Need help? Check the `docs/DESIGN-SYSTEM.md` for detailed design guidelines.

