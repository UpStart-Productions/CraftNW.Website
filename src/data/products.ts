export interface Product {
  id: string;
  name: string;
  category: "Woodworking" | "Productivity Cards" | "Greeting Cards" | "Printables";
  price: string;
  description: string;
  image: string;
  etsyLink: string;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: "oak-desk-organizer",
    name: "Oak Desk Organizer",
    category: "Woodworking",
    price: "$65",
    description: "Handcrafted oak desk organizer with multiple compartments for pens, cards, and small items.",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80",
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
    id: "productivity-card-set",
    name: "Daily Focus Cards",
    category: "Productivity Cards",
    price: "$24",
    description: "Set of 50 productivity cards to help you prioritize your daily tasks.",
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=800&q=80",
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

