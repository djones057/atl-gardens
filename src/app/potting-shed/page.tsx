import type { Metadata } from "next";
import { AMAZON_DISCLOSURE, products } from "@/lib/potting-shed-data";
import PottingShedGrid from "./PottingShedGrid";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "The Potting Shed",
  description:
    "Tools, soil, seeds, raised beds, and pest control curated for Atlanta gardeners and tested for Zone 7b.",
  openGraph: {
    title: "The Potting Shed | ATL Community Gardens",
    description:
      "Tools, soil, seeds, raised beds, and pest control curated for Atlanta gardeners and tested for Zone 7b.",
  },
};

export default function PottingShedPage() {
  return (
    <div className="container">
      <header className={styles.header}>
        <span className={styles.eyebrow}>The Potting Shed</span>
        <h1 className={styles.title}>The Potting Shed</h1>
        <p className={styles.subtitle}>
          Curated for Atlanta gardeners. Tested for Zone 7b.
        </p>
        <p className={styles.disclosure}>{AMAZON_DISCLOSURE}</p>
      </header>

      <PottingShedGrid products={products} />
    </div>
  );
}
