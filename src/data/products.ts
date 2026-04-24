import { Nursery } from "../types";

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
