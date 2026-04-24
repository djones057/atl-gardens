import { AffiliateProduct, Nursery } from "../types";

export const products: AffiliateProduct[] = [
  {
    id: "p1",
    title: "Heavy Duty Gardening Gloves",
    description: "Puncture-resistant, breathable gloves perfect for weeding and pruning.",
    category: "Gear",
    imageUrl: "/images/product1.jpg",
    affiliateUrl: "https://amazon.com/placeholder-gloves",
    price: "$14.99"
  },
  {
    id: "p2",
    title: "Ergonomic Hand Trowel",
    description: "Rust-resistant aluminum trowel with a comfortable grip for long planting sessions.",
    category: "Tools",
    imageUrl: "/images/product2.jpg",
    affiliateUrl: "https://amazon.com/placeholder-trowel",
    price: "$12.50"
  },
  {
    id: "p3",
    title: "Organic Heirloom Tomato Seeds",
    description: "A diverse mix of colorful, flavorful heirloom tomato seeds.",
    category: "Seeds",
    imageUrl: "/images/product3.jpg",
    affiliateUrl: "https://amazon.com/placeholder-seeds",
    price: "$8.99"
  },
  {
    id: "p4",
    title: "Galvanized Raised Garden Bed",
    description: "Durable 4x3ft steel raised bed for optimal drainage and easy access.",
    category: "Gear",
    imageUrl: "/images/product4.jpg",
    affiliateUrl: "https://amazon.com/placeholder-raisedbed",
    price: "$45.00"
  }
];

export const nurseries: Nursery[] = [
  {
    id: "n1",
    name: "Pike Nurseries",
    neighborhood: "Buckhead",
    description: "Atlanta's staple for premium plants, gardening supplies, and expert advice since 1958.",
    specialties: ["Perennials", "Trees", "Garden design"],
    imageUrl: "/images/nursery1.jpg",
    website: "https://www.pikenursery.com/"
  },
  {
    id: "n2",
    name: "Gardenhood",
    neighborhood: "Grant Park",
    description: "A boutique garden center specializing in unique, hard-to-find plants for urban spaces.",
    specialties: ["Houseplants", "Native plants", "Container gardening"],
    imageUrl: "/images/nursery2.jpg",
    website: "https://gardenhoodatlanta.com/"
  },
  {
    id: "n3",
    name: "Beech Hollow Wildflower Farm",
    neighborhood: "Scottdale",
    description: "Specializing in native plants of the Southeast, perfect for ecological restoration and pollinator gardens.",
    specialties: ["Native plants", "Pollinators", "Ecological landscaping"],
    imageUrl: "/images/nursery3.jpg",
    website: "https://beechhollowfarms.com/"
  }
];
