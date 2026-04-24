/**
 * The Potting Shed — product catalog for Amazon affiliate links.
 *
 * NOTE on images: these are Unsplash placeholders tuned to the site's look.
 * Real Amazon product images (m.media-amazon.com) can be swapped in once
 * ASINs are verified in Amazon Associates.
 */

export type ProductCategory =
  | "Tools"
  | "Soil"
  | "Seeds"
  | "Raised Beds"
  | "Pest Control"
  | "Irrigation";

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  "Tools",
  "Soil",
  "Seeds",
  "Raised Beds",
  "Pest Control",
  "Irrigation",
];

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  price: string;
  asin: string;
  affiliateUrl: string;
  image: string;
}

const AFFILIATE_TAG = "atlgardens-20";

const amazonUrl = (asin: string) =>
  `https://www.amazon.com/dp/${asin}?tag=${AFFILIATE_TAG}`;

export const AMAZON_DISCLOSURE =
  "As an Amazon Associate, ATL Gardens earns from qualifying purchases.";

export const products: Product[] = [
  // ─── Tools ───────────────────────────────────────────
  {
    id: "felco-f2-pruners",
    name: "Felco F-2 Pruners",
    category: "Tools",
    description: "Best-in-class bypass pruner for clean cuts that heal fast.",
    price: "$65",
    asin: "B0000AH5VO",
    affiliateUrl: amazonUrl("B0000AH5VO"),
    image:
      "https://images.unsplash.com/photo-1617576683096-00fc8eecb3af?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "hori-hori-knife",
    name: "Hori Hori Garden Knife",
    category: "Tools",
    description: "Japanese soil knife for planting, dividing, and weeding.",
    price: "$45",
    asin: "B0002YV2NQ",
    affiliateUrl: amazonUrl("B0002YV2NQ"),
    image:
      "https://images.unsplash.com/photo-1592484043432-1b1f618a3854?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "dewit-hand-trowel",
    name: "DeWit Hand Trowel",
    category: "Tools",
    description: "Forged Dutch steel trowel built for a lifetime of red clay.",
    price: "$42",
    asin: "B00GAXZU1Q",
    affiliateUrl: amazonUrl("B00GAXZU1Q"),
    image:
      "https://images.unsplash.com/photo-1617576683096-00fc8eecb3af?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "heavy-duty-gloves",
    name: "Heavy Duty Gardening Gloves",
    category: "Tools",
    description: "Puncture-resistant, breathable gloves for weeding and pruning.",
    price: "$15",
    asin: "B08BF7BQLD",
    affiliateUrl: amazonUrl("B08BF7BQLD"),
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=800&auto=format&fit=crop",
  },

  // ─── Soil ────────────────────────────────────────────
  {
    id: "fox-farm-ocean-forest",
    name: "Fox Farm Ocean Forest",
    category: "Soil",
    description: "Nutrient-rich potting blend tuned for Atlanta's Zone 7b heat.",
    price: "$25",
    asin: "B00HNJDNBE",
    affiliateUrl: amazonUrl("B00HNJDNBE"),
    image:
      "https://images.unsplash.com/photo-1530836369250-ef71a3f5e481?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "espoma-garden-tone",
    name: "Espoma Garden-tone",
    category: "Soil",
    description: "Organic slow-release fertilizer tuned for vegetables and herbs.",
    price: "$18",
    asin: "B00BSURJ9G",
    affiliateUrl: amazonUrl("B00BSURJ9G"),
    image:
      "https://images.unsplash.com/photo-1582560475093-ba66accbc424?q=80&w=800&auto=format&fit=crop",
  },

  // ─── Seeds ───────────────────────────────────────────
  {
    id: "burpee-better-boy-tomatoes",
    name: "Burpee Better Boy Tomatoes",
    category: "Seeds",
    description: "Atlanta's most reliable slicer tomato — disease-resistant and prolific.",
    price: "$8",
    asin: "B00CXUY09E",
    affiliateUrl: amazonUrl("B00CXUY09E"),
    image:
      "https://images.unsplash.com/photo-1592394533824-9440e5d68530?q=80&w=800&auto=format&fit=crop",
  },
  {
    // TODO: VERIFY ASIN — placeholder from spec, not a real Amazon identifier
    id: "baker-creek-heirloom-collection",
    name: "Baker Creek Heirloom Collection",
    category: "Seeds",
    description: "Fifteen open-pollinated varieties chosen for Southern summers.",
    price: "$25",
    asin: "B07EXAMPLE",
    affiliateUrl: amazonUrl("B07EXAMPLE"),
    image:
      "https://images.unsplash.com/photo-1592394533824-9440e5d68530?q=80&w=800&auto=format&fit=crop",
  },

  // ─── Raised Beds ─────────────────────────────────────
  {
    // TODO: VERIFY ASIN — placeholder from spec, not a real Amazon identifier
    id: "vego-17-raised-bed",
    name: "Vego Garden 17\" Metal Bed",
    category: "Raised Beds",
    description: "Rust-proof galvanized steel with a 20-year expected lifespan.",
    price: "$130",
    asin: "B09VEGO001",
    affiliateUrl: amazonUrl("B09VEGO001"),
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=800&auto=format&fit=crop",
  },
  {
    // TODO: VERIFY ASIN — placeholder from spec, not a real Amazon identifier
    id: "birdies-6in1-raised-bed",
    name: "Birdies 6-in-1 Raised Bed",
    category: "Raised Beds",
    description: "Premium Aussie-made modular steel bed — reconfigures as you grow.",
    price: "$280",
    asin: "B09BIRD001",
    affiliateUrl: amazonUrl("B09BIRD001"),
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=800&auto=format&fit=crop",
  },

  // ─── Pest Control ────────────────────────────────────
  {
    id: "monterey-bt",
    name: "Monterey BT Caterpillar Killer",
    category: "Pest Control",
    description: "OMRI-listed biological control — safe for edibles and beneficials.",
    price: "$18",
    asin: "B000HKB3GY",
    affiliateUrl: amazonUrl("B000HKB3GY"),
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "neem-oil-concentrate",
    name: "Neem Oil Concentrate",
    category: "Pest Control",
    description: "Broad-spectrum organic pest control — aphids, mites, and fungus.",
    price: "$15",
    asin: "B004QAWGIO",
    affiliateUrl: amazonUrl("B004QAWGIO"),
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=800&auto=format&fit=crop",
  },

  // ─── Irrigation ──────────────────────────────────────
  {
    // TODO: VERIFY ASIN — placeholder from spec, not a real Amazon identifier
    id: "drip-irrigation-kit",
    name: "Drip Irrigation Starter Kit",
    category: "Irrigation",
    description: "Fifty-plant kit with pressure-regulated tubing and emitters.",
    price: "$35",
    asin: "B07DRIP001",
    affiliateUrl: amazonUrl("B07DRIP001"),
    image:
      "https://images.unsplash.com/photo-1558904541-efa843a96f0a?q=80&w=800&auto=format&fit=crop",
  },
  {
    // TODO: VERIFY ASIN — placeholder from spec, not a real Amazon identifier
    id: "soaker-hose-50ft",
    name: "Soaker Hose 50ft",
    category: "Irrigation",
    description: "Even-moisture soaker hose that cuts water use roughly in half.",
    price: "$22",
    asin: "B001SOAKER",
    affiliateUrl: amazonUrl("B001SOAKER"),
    image:
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=800&auto=format&fit=crop",
  },
];

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((p) => p.category === category);
}
