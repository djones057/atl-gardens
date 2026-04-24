import { Garden } from "../types";

export const gardens: Garden[] = [
  {
    id: "g1",
    name: "Oakhurst Community Garden",
    neighborhood: "Decatur",
    zipCode: "30030",
    address: "435 Oakview Rd, Decatur, GA 30030",
    description: "A vibrant community space focusing on sustainable agriculture and environmental education. Features individual plots, a fruit orchard, and community events.",
    plotAvailability: "Waitlist",
    amenities: ["Water access", "Compost bins", "Tool shed", "Classes"],
    imageUrl: "/images/garden1.jpg",
    website: "https://wyldecenter.org/oakhurst-garden/"
  },
  {
    id: "g2",
    name: "Piedmont Park Community Garden",
    neighborhood: "Midtown",
    zipCode: "30309",
    address: "1320 Monroe Dr NE, Atlanta, GA 30306",
    description: "Located in the heart of Atlanta's premier park, offering sunny plots and a strong community of urban farmers.",
    plotAvailability: "Full",
    amenities: ["Wheelchair accessible", "Water access", "Fenced", "Shed"],
    imageUrl: "/images/garden2.jpg",
    website: "https://piedmontpark.org/"
  },
  {
    id: "g3",
    name: "East Lake Community Learning Garden",
    neighborhood: "East Lake",
    zipCode: "30317",
    address: "2nd Ave SE, Atlanta, GA 30317",
    description: "An educational garden providing fresh produce to local communities and teaching sustainable growing practices.",
    plotAvailability: "Available",
    amenities: ["Raised beds", "Education center", "Water access", "Compost"],
    imageUrl: "/images/garden3.jpg",
  },
  {
    id: "g4",
    name: "Gilliam's Community Garden",
    neighborhood: "Oakland City",
    zipCode: "30310",
    address: "1320 Oakland Dr SW, Atlanta, GA 30310",
    description: "A community hub for urban agriculture, featuring a mobile farmer's market and extensive growing areas.",
    plotAvailability: "Available",
    amenities: ["Chickens", "Market stand", "Greenhouse", "Water access"],
    imageUrl: "/images/garden4.jpg",
  },
  {
    id: "g5",
    name: "Truly Living Well - Collegetown Farm",
    neighborhood: "West End",
    zipCode: "30314",
    address: "324 Lawton St SW, Atlanta, GA 30310",
    description: "A premier urban farm offering community plots, CSA programs, and extensive training in urban agriculture.",
    plotAvailability: "Waitlist",
    amenities: ["Classes", "CSA pickup", "Water access", "Compost"],
    imageUrl: "/images/garden5.jpg",
    website: "https://www.trulylivingwell.com/"
  }
];
