import { AffiliateProduct, Nursery } from "../types";

export const products: AffiliateProduct[] = [
  {
    id: "p1",
    title: "Heavy Duty Gardening Gloves",
    description: "Puncture-resistant, breathable gloves perfect for weeding and pruning.",
    category: "Gear",
    imageUrl: "https://images.unsplash.com/photo-1599685315640-4a8d32bfd7dd?q=80&w=800&auto=format&fit=crop",
    affiliateUrl: "https://amazon.com/placeholder-gloves",
    price: "$14.99"
  },
  {
    id: "p2",
    title: "Ergonomic Hand Trowel",
    description: "Rust-resistant aluminum trowel with a comfortable grip for long planting sessions.",
    category: "Tools",
    imageUrl: "https://images.unsplash.com/photo-1617576683096-00fc8eecb3af?q=80&w=800&auto=format&fit=crop",
    affiliateUrl: "https://amazon.com/placeholder-trowel",
    price: "$12.50"
  },
  {
    id: "p3",
    title: "Organic Heirloom Tomato Seeds",
    description: "A diverse mix of colorful, flavorful heirloom tomato seeds.",
    category: "Seeds",
    imageUrl: "https://images.unsplash.com/photo-1592394533824-9440e5d68530?q=80&w=800&auto=format&fit=crop",
    affiliateUrl: "https://amazon.com/placeholder-seeds",
    price: "$8.99"
  },
  {
    id: "p4",
    title: "Galvanized Raised Garden Bed",
    description: "Durable 4x3ft steel raised bed for optimal drainage and easy access.",
    category: "Gear",
    imageUrl: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=800&auto=format&fit=crop",
    affiliateUrl: "https://amazon.com/placeholder-raisedbed",
    price: "$45.00"
  },
  {
    id: "p5",
    title: "Compost Tumbler Bin",
    description: "Dual-chamber outdoor composter that turns kitchen scraps into garden gold in weeks.",
    category: "Gear",
    imageUrl: "https://images.unsplash.com/photo-1582560475093-ba66accbc424?q=80&w=800&auto=format&fit=crop",
    affiliateUrl: "https://amazon.com/placeholder-compost",
    price: "$89.00"
  },
  {
    id: "p6",
    title: "Southern Vegetable Gardening",
    description: "The definitive guide to growing food in Georgia's climate, month by month.",
    category: "Books",
    imageUrl: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=800&auto=format&fit=crop",
    affiliateUrl: "https://amazon.com/placeholder-book",
    price: "$18.95"
  }
];

export const nurseries: Nursery[] = [
  {
    id: "n1",
    name: "Pike Nurseries",
    neighborhood: "Buckhead",
    description: "Atlanta's staple for premium plants, gardening supplies, and expert advice since 1958.",
    specialties: ["Perennials", "Trees", "Garden design"],
    imageUrl: "https://images.unsplash.com/photo-1524593166156-312f362cada0?q=80&w=800&auto=format&fit=crop",
    website: "https://www.pikenursery.com/",
    featured: true
  },
  {
    id: "n2",
    name: "Gardenhood",
    neighborhood: "Grant Park",
    description: "A boutique garden center specializing in unique, hard-to-find plants for urban spaces.",
    specialties: ["Houseplants", "Native plants", "Container gardening"],
    imageUrl: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?q=80&w=800&auto=format&fit=crop",
    website: "https://gardenhoodatlanta.com/"
  },
  {
    id: "n3",
    name: "Beech Hollow Wildflower Farm",
    neighborhood: "Scottdale",
    description: "Specializing in native plants of the Southeast, perfect for ecological restoration and pollinator gardens.",
    specialties: ["Native plants", "Pollinators", "Ecological landscaping"],
    imageUrl: "https://images.unsplash.com/photo-1508349937151-22b68b72d5b1?q=80&w=800&auto=format&fit=crop",
    website: "https://beechhollowfarms.com/"
  }
];
