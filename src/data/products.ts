export interface Product {
  id: string;
  name: string;
  category: "Woodworking" | "Productivity Cards" | "Greeting Cards" | "Printables" | "Cards";
  price: string;
  description: string;
  image: string | string[]; // Can be single image or array of images
  etsyLink: string;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: "nextmove-productivity-cards",
    name: "NextMove Productivity Cards",
    category: "Printables",
    price: "",
    description: "Simple, effective tools to organize your day and focus on what matters. Download and print your own productivity system.",
    image: [
      "/images/products/nextmove/hero/cards-1.jpg",
      "/images/products/nextmove/hero/cards-2.jpg",
      "/images/products/nextmove/28371-cards-1.jpg",
      "/images/products/nextmove/28371-cards-3.jpg",
      "/images/products/nextmove/28371-card-holder-2.jpg",
      "/images/products/nextmove/88220-card-holder-2.jpg",
    ],
    etsyLink: "/products/printables/nextmove-productivity-cards",
    featured: true,
  },
  {
    id: "ui-mini-notes",
    name: "U&I Mini Notes",
    category: "Cards",
    price: "",
    description: "Delightful mini gift cards styled like user interface elements—modals, toggles, radio buttons, and more. Perfect for designers and tech enthusiasts.",
    image: [
      "/images/products/ui-mini-notes/hero/card-1.jpg",
      "/images/products/ui-mini-notes/hero/card-2.jpg",
      "/images/products/ui-mini-notes/hero/card-3.jpg",
      "/images/products/ui-mini-notes/hero/card-4.jpg",
      "/images/products/ui-mini-notes/hero/card-5.jpg",
    ],
    etsyLink: "/products/cards/ui-mini-notes",
    featured: true,
  },
  {
    id: "oak-desk-organizer",
    name: "Oak Desk Organizer",
    category: "Woodworking",
    price: "$65",
    description: "Handcrafted oak desk organizer with multiple compartments for pens, cards, and small items.",
    image: [
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80",
      "https://images.unsplash.com/photo-1565120130276-dfbd9a7a3ad7?w=800&q=80",
      "https://images.unsplash.com/photo-1594756202469-9ff9799b2e4e?w=800&q=80",
    ],
    etsyLink: "https://www.etsy.com/shop/CraftNW",
    featured: true,
  },
  {
    id: "walnut-phone-stand",
    name: "Walnut Phone Stand",
    category: "Woodworking",
    price: "$35",
    description: "Elegant walnut phone stand with cable management groove.",
    image: "https://images.unsplash.com/photo-1565120130276-dfbd9a7a3ad7?w=800&q=80",
    etsyLink: "https://www.etsy.com/shop/CraftNW",
    featured: true,
  },
  {
    id: "maple-cutting-board",
    name: "Maple Cutting Board",
    category: "Woodworking",
    price: "$55",
    description: "Beautiful edge-grain maple cutting board, food-safe finish.",
    image: "https://images.unsplash.com/photo-1594756202469-9ff9799b2e4e?w=800&q=80",
    etsyLink: "https://www.etsy.com/shop/CraftNW",
  },
  {
    id: "mini-greeting-cards",
    name: "Mini Greeting Card Set",
    category: "Greeting Cards",
    price: "$18",
    description: "Set of 12 mini greeting cards with Pacific Northwest themes.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
    etsyLink: "https://www.etsy.com/shop/CraftNW",
  },
  {
    id: "weekly-planner-printable",
    name: "Weekly Planner Printable",
    category: "Printables",
    price: "$8",
    description: "Minimalist weekly planner template, instant download.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
    etsyLink: "https://www.etsy.com/shop/CraftNW",
  },
];

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getProductsByCategory(category: Product["category"]): Product[] {
  return products.filter((p) => p.category === category);
}

