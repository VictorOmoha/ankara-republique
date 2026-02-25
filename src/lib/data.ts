export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  fabric: string;
  collection: string;
  collectionSlug: string;
  images: string[];
  sizes: string[];
  color: string;
  badge?: string;
}

export interface Collection {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  season: string;
}

export const collections: Collection[] = [
  {
    slug: "sahel-silhouettes",
    name: "Sahel Silhouettes",
    tagline: "Where desert winds sculpt form",
    description:
      "Inspired by the vast beauty of the Sahel, this collection features flowing organic cotton and linen pieces in warm, sun-kissed tones. Each garment moves with grace and intent.",
    image: "/images/collection-sahel.svg",
    season: "Resort 2025",
  },
  {
    slug: "indigo-chronicles",
    name: "Indigo Chronicles",
    tagline: "Stories woven in blue",
    description:
      "A tribute to the ancient West African indigo-dyeing tradition. Hand-dipped organic fabrics in deep blues and midnight tones, reimagined through modern, minimalist silhouettes.",
    image: "/images/collection-indigo.svg",
    season: "Autumn/Winter 2025",
  },
  {
    slug: "terra-nova",
    name: "Terra Nova",
    tagline: "Rooted in the earth, reaching for light",
    description:
      "Rich terracotta, warm clay, and deep sienna tones define this grounded collection. Organic wool blends and structured cotton create pieces that honor heritage while embracing modernity.",
    image: "/images/collection-terra.svg",
    season: "Spring/Summer 2025",
  },
  {
    slug: "ivory-atelier",
    name: "Ivory Atelier",
    tagline: "Purity in every thread",
    description:
      "Our signature bridal and occasion collection. Crafted from the finest organic silk and cotton, these ethereal pieces embody the quiet luxury that defines Ankara Republique.",
    image: "/images/collection-ivory.svg",
    season: "Atelier Collection",
  },
  {
    slug: "basalt-weaves",
    name: "Basalt Weaves",
    tagline: "Strength woven from stone and earth",
    description:
      "Inspired by volcanic landscapes and ancient quarries. Pure organic wool in tones drawn from basalt, magnetite, and the sands of Aswan — pieces that embody warmth, weight, and quiet authority.",
    image: "/images/collection-basalt.svg",
    season: "Autumn/Winter 2026",
  },
];

export const products: Product[] = [
  // Sahel Silhouettes
  {
    id: "sahel-01",
    name: "The Bamako Wrap Dress",
    price: 485,
    description:
      "A fluid wrap dress in organic cotton voile, designed to drape effortlessly around the body. The silhouette echoes traditional West African wrapping techniques reimagined for contemporary elegance.",
    fabric: "100% Organic Cotton Voile, GOTS Certified",
    collection: "Sahel Silhouettes",
    collectionSlug: "sahel-silhouettes",
    images: ["/images/product-bamako-1.svg", "/images/product-bamako-2.svg"],
    sizes: ["XS", "S", "M", "L", "XL"],
    color: "Desert Sand",
    badge: "New Arrival",
  },
  {
    id: "sahel-02",
    name: "The Timbuktu Tunic",
    price: 395,
    description:
      "An architectural tunic with clean lines and a sculptural collar. Cut from organic linen, this piece transitions seamlessly from day to evening with understated authority.",
    fabric: "100% Organic Linen, OEKO-TEX Standard 100",
    collection: "Sahel Silhouettes",
    collectionSlug: "sahel-silhouettes",
    images: ["/images/product-timbuktu-1.svg"],
    sizes: ["S", "M", "L", "XL"],
    color: "Warm Oat",
  },
  {
    id: "sahel-03",
    name: "The Saharan Wide Trousers",
    price: 345,
    description:
      "Generously cut wide-leg trousers in breathable organic cotton. The relaxed silhouette offers both comfort and sophistication, with hidden pockets and a flattering high waist.",
    fabric: "100% Organic Cotton Twill",
    collection: "Sahel Silhouettes",
    collectionSlug: "sahel-silhouettes",
    images: ["/images/product-saharan-1.svg"],
    sizes: ["XS", "S", "M", "L"],
    color: "Dune",
  },
  // Indigo Chronicles
  {
    id: "indigo-01",
    name: "The Lagos Blazer",
    price: 625,
    description:
      "A structured single-breasted blazer in hand-dipped organic cotton denim. The deep indigo hue is achieved through traditional Yoruba adire techniques, making each piece unique.",
    fabric: "Organic Cotton Denim, Naturally Dyed",
    collection: "Indigo Chronicles",
    collectionSlug: "indigo-chronicles",
    images: ["/images/product-lagos-1.svg"],
    sizes: ["S", "M", "L", "XL"],
    color: "Deep Indigo",
    badge: "Artisan Made",
  },
  {
    id: "indigo-02",
    name: "The Oshodi Midi Skirt",
    price: 375,
    description:
      "A refined A-line midi skirt with a subtle ombre effect created by layered indigo dyeing. The organic cotton fabric has a beautiful drape that moves with intention.",
    fabric: "100% Organic Cotton, Hand-Dyed Indigo",
    collection: "Indigo Chronicles",
    collectionSlug: "indigo-chronicles",
    images: ["/images/product-oshodi-1.svg"],
    sizes: ["XS", "S", "M", "L"],
    color: "Midnight Blue",
  },
  {
    id: "indigo-03",
    name: "The Kano Shirt Dress",
    price: 445,
    description:
      "A relaxed yet polished shirt dress in organic chambray. Subtle indigo resist-dye patterns at the cuffs and hem pay homage to centuries of West African textile artistry.",
    fabric: "Organic Cotton Chambray",
    collection: "Indigo Chronicles",
    collectionSlug: "indigo-chronicles",
    images: ["/images/product-kano-1.svg"],
    sizes: ["S", "M", "L"],
    color: "Washed Indigo",
  },
  // Terra Nova
  {
    id: "terra-01",
    name: "The Accra Cocoon Coat",
    price: 785,
    description:
      "A sculptural cocoon coat in organic wool blend. The rich terracotta tone is achieved through natural mineral pigments, and the cocoon shape offers both warmth and drama.",
    fabric: "70% Organic Wool, 30% Organic Cotton",
    collection: "Terra Nova",
    collectionSlug: "terra-nova",
    images: ["/images/product-accra-1.svg"],
    sizes: ["S", "M", "L"],
    color: "Terracotta",
    badge: "Limited Edition",
  },
  {
    id: "terra-02",
    name: "The Kumasi Pencil Skirt",
    price: 325,
    description:
      "A beautifully tailored pencil skirt in organic stretch cotton. The clay tone is versatile yet distinctive, and the fit is designed for refined movement throughout the day.",
    fabric: "97% Organic Cotton, 3% Elastane",
    collection: "Terra Nova",
    collectionSlug: "terra-nova",
    images: ["/images/product-kumasi-1.svg"],
    sizes: ["XS", "S", "M", "L", "XL"],
    color: "Warm Clay",
  },
  // Ivory Atelier
  {
    id: "ivory-01",
    name: "The Abuja Gown",
    price: 1250,
    description:
      "An ethereal floor-length gown in organic silk charmeuse. Designed for life's defining moments, with hand-finished details that honor the tradition of artisan craftsmanship.",
    fabric: "100% Organic Silk Charmeuse",
    collection: "Ivory Atelier",
    collectionSlug: "ivory-atelier",
    images: ["/images/product-abuja-1.svg"],
    sizes: ["XS", "S", "M", "L"],
    color: "Pearl Ivory",
    badge: "Atelier Exclusive",
  },
  {
    id: "ivory-02",
    name: "The Calabar Cape",
    price: 545,
    description:
      "A flowing cape in organic cotton silk blend, designed as the perfect layering piece for occasions. The minimal construction lets the fabric quality speak for itself.",
    fabric: "60% Organic Silk, 40% Organic Cotton",
    collection: "Ivory Atelier",
    collectionSlug: "ivory-atelier",
    images: ["/images/product-calabar-1.svg"],
    sizes: ["One Size"],
    color: "Soft Cream",
  },
  // Basalt Weaves
  {
    id: "basalt-01",
    name: "The Dakar Overcoat",
    price: 895,
    description:
      "A commanding full-length overcoat in pure organic wool. The basaltic gray tone evokes volcanic stone, while the structured silhouette and clean lapels project quiet authority. Built for warmth and permanence.",
    fabric: "100% Organic Wool, GOTS Certified",
    collection: "Basalt Weaves",
    collectionSlug: "basalt-weaves",
    images: ["/images/product-dakar-1.svg"],
    sizes: ["S", "M", "L", "XL"],
    color: "Basaltic Gray",
    badge: "New Arrival",
  },
  {
    id: "basalt-02",
    name: "The Nairobi Tailored Trousers",
    price: 525,
    description:
      "Impeccably tailored high-waist trousers in organic merino wool. The magnetite black carries depth without harshness, and the natural stretch of fine merino ensures comfort through every movement.",
    fabric: "100% Organic Merino Wool, OEKO-TEX Standard 100",
    collection: "Basalt Weaves",
    collectionSlug: "basalt-weaves",
    images: ["/images/product-nairobi-1.svg"],
    sizes: ["XS", "S", "M", "L", "XL"],
    color: "Magnetite Black",
  },
  {
    id: "basalt-03",
    name: "The Luxor Draped Shawl",
    price: 445,
    description:
      "An oversized draped shawl in a luxurious wool-linen blend. The warm Aswan sands tone recalls the golden quarries of Upper Egypt. Hand-finished fringe details celebrate artisan tradition.",
    fabric: "85% Organic Wool, 15% Organic Linen",
    collection: "Basalt Weaves",
    collectionSlug: "basalt-weaves",
    images: ["/images/product-luxor-1.svg"],
    sizes: ["One Size"],
    color: "Aswan Sands",
    badge: "Artisan Made",
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCollection(slug: string): Product[] {
  return products.filter((p) => p.collectionSlug === slug);
}

export function getCollectionBySlug(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.badge);
}
