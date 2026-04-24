export interface Garden {
  id: string;
  name: string;
  neighborhood: string;
  zipCode: string;
  address: string;
  description: string;
  plotAvailability: "Available" | "Waitlist" | "Full";
  amenities: string[];
  imageUrl: string;
  website?: string;
}

export interface AffiliateProduct {
  id: string;
  title: string;
  description: string;
  category: "Tools" | "Seeds" | "Gear" | "Books";
  imageUrl: string;
  affiliateUrl: string;
  price: string;
}

export interface Nursery {
  id: string;
  name: string;
  neighborhood: string;
  description: string;
  specialties: string[];
  imageUrl: string;
  website: string;
}
