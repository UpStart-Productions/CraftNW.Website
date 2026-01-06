export interface Product {
  id: string;
  name: string;
  category: "Woodworking" | "Productivity Cards" | "Greeting Cards" | "Printables" | "Cards" | "Games";
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
    id: "tipsy-trails",
    name: "Tipsy Trails",
    category: "Games",
    price: "",
    description: "The ultimate drinking game for unforgettable nights with friends. Navigate the board, draw cards, and create memories that will last a lifetime.",
    image: [
      "/images/products/tipsy-trails/hero/tt-1.jpg",
      "/images/products/tipsy-trails/hero/tt-2.jpg",
      "/images/products/tipsy-trails/hero/tt-3.jpg",
      "/images/products/tipsy-trails/hero/tt-4.jpg",
      "/images/products/tipsy-trails/hero/tt-5.jpg",
      "/images/products/tipsy-trails/hero/tt-6.jpg",
      "/images/products/tipsy-trails/hero/tt-7.jpg",
      "/images/products/tipsy-trails/hero/tt-8.jpg",
      "/images/products/tipsy-trails/hero/tt-9.jpg",
    ],
    etsyLink: "https://www.etsy.com/shop/CraftNWDesigns/edit?ref=edit_trust_header&section_id=48930512",
    featured: true,
  },
];

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getProductsByCategory(category: Product["category"]): Product[] {
  return products.filter((p) => p.category === category);
}

