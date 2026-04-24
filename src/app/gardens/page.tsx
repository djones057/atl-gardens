import type { Metadata } from "next";
import GardensSearch from "./GardensSearch";

export const metadata: Metadata = {
  title: "Community Gardens Directory | ATL Community Gardens",
  description:
    "Browse 40+ community gardens across Atlanta. Search by ZIP code, check plot availability, and find your community growing space in Fulton, DeKalb, Cobb, Gwinnett, and beyond.",
};

export default function GardensPage() {
  return <GardensSearch />;
}
