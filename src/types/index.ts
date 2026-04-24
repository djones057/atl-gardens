export interface Garden {
  id: string;
  name: string;
  neighborhood: string;
  zipCode: string;
  address: string;
  description: string;
  plotAvailability: "Available" | "Waitlist" | "Full" | "Unknown";
  amenities: string[];
  imageUrl: string;
  website?: string;
  visitingHours?: string;
  membershipCost?: string;
  rules?: string[];
  foundingYear?: number;
  verified?: boolean;
}

export interface Nursery {
  id: string;
  name: string;
  neighborhood: string;
  description: string;
  specialties: string[];
  imageUrl: string;
  website: string;
  featured?: boolean;
}
