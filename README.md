# CraftNW Website

Handcrafted goods from Newberg, Oregon. A beautiful, Ugmonk-inspired product website built with Astro, Tailwind CSS, and TypeScript.

## 🎨 Design Philosophy

This site follows a minimalist, product-focused design inspired by Ugmonk:
- **Earthy color palette**: Tan, brown, cream tones
- **Maximum whitespace**: Clean, breathable layouts
- **Large product photography**: Visual-first approach
- **Simple typography**: DM Sans for headings, Inter for body
- **Subtle interactions**: Smooth hover effects and transitions

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Your site will be running at `http://localhost:4321`

## 📁 Project Structure

```
/
├── public/
│   └── images/          # Logo, product images, assets
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── ProductCard.astro
│   │   └── SectionHeader.astro
│   ├── config/
│   │   └── site.ts      # Site configuration (contact, socials)
│   ├── data/
│   │   └── products.ts  # Product data
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/           # File-based routing
│   │   ├── index.astro  # Homepage
│   │   ├── shop.astro   # Shop page
│   │   ├── about.astro  # About page
│   │   └── contact.astro
│   └── styles/
│       └── global.css   # Design system & utilities
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## 🎨 Design System

### Colors

```css
--craft-tan: #E8DED0;       /* Warm backgrounds */
--craft-brown: #8B7355;     /* Accents, borders */
--craft-black: #1A1A1A;     /* Text, headers */
--craft-cream: #F5F1ED;     /* Card backgrounds */
--craft-white: #FEFEFE;     /* Pure white accents */
--craft-red: #D84315;       /* Brand accent (arrow) */
--craft-charcoal: #3D3D3D;  /* Secondary text */
```

### Typography

- **Headings**: DM Sans (500 weight)
- **Body**: Inter (400 weight)
- **Base size**: 18px (1.125rem)
- **Line height**: 1.7

### Components

#### Buttons
```astro
<a href="/shop" class="btn-primary">Shop Now</a>
<a href="/about" class="btn-secondary">Learn More</a>
```

#### Product Card
```astro
<ProductCard
  name="Oak Desk Organizer"
  price="$65"
  image="/images/products/oak-desk.jpg"
  category="Woodworking"
  link="https://etsy.com/..."
  featured={true}
/>
```

## 📝 Adding Products

Edit `src/data/products.ts`:

```typescript
{
  id: "unique-id",
  name: "Product Name",
  category: "Woodworking", // or "Productivity Cards", "Greeting Cards", "Printables"
  price: "$XX",
  description: "Product description",
  image: "/images/products/your-image.jpg",
  etsyLink: "https://www.etsy.com/...",
  featured: true, // Shows on homepage
}
```

## 🖼️ Images

- **Product images**: `public/images/products/`
- **Hero images**: Use high-quality, wide images (1600px+)
- **Recommended**: Unsplash for placeholder images
- **Format**: JPG for photos, SVG for logos/icons

## 🔧 Configuration

### Site Info

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

### Site URL

Edit `astro.config.mjs`:

```javascript
export default defineConfig({
  site: 'https://craft-nw.com',
});
```

## 🚢 Deployment

This site is configured for AWS Amplify deployment:

1. Connect your GitHub repository to AWS Amplify
2. Amplify will automatically detect the `amplify.yml` configuration
3. Build command: `npm run build`
4. Output directory: `dist/`

The site will automatically rebuild on every push to your main branch.

## 📱 Social Media

- Instagram: [@craft_nw](https://www.instagram.com/craft_nw/)
- Etsy: [CraftNW Shop](https://www.etsy.com/shop/CraftNW)

## 🎯 Key Differences from UpStart Site

| Aspect | UpStart | CraftNW |
|--------|---------|---------|
| **Purpose** | Consultancy services | Product sales |
| **Color Scheme** | Lime green + purple | Tan, brown, cream |
| **Typography** | Clash Grotesk + Satoshi | DM Sans + Inter |
| **Navigation** | 7+ pages, dropdowns | 4 simple pages |
| **Content Focus** | Case studies, services | Products, shop |
| **CTA Style** | Bright lime buttons | Black solid buttons |
| **Spacing** | Moderate | Maximum (Ugmonk-style) |

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build) 5.15+
- **Styling**: [Tailwind CSS](https://tailwindcss.com) 4.1+
- **Icons**: [Lucide Astro](https://lucide.dev)
- **TypeScript**: Strict mode enabled
- **Deployment**: AWS Amplify

## 📄 License

© 2026 CraftNW. All rights reserved.

---

Built with ❤️ in Newberg, Oregon
