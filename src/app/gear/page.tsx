import type { Metadata } from "next";
import { products } from "@/data/products";
import AffiliateCarousel from "@/components/AffiliateCarousel";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Recommended Gardening Gear | ATL Community Gardens",
  description:
    "Tools, seeds, raised beds, and books we actually recommend for Atlanta community gardeners. Affiliate-supported.",
};

const categories = ["Tools", "Gear", "Seeds", "Books"] as const;

export default function GearPage() {
  return (
    <div className="container">
      <header className={styles.header}>
        <span className={styles.eyebrow}>Recommended Gear</span>
        <h1 className={styles.title}>Gear We Actually Use</h1>
        <p className={styles.subtitle}>
          Tools, seeds, and gear picked for Atlanta conditions — red clay, humid summers, and
          the realities of community-plot gardening. Every link is an affiliate link; we earn a
          small commission when you buy, at no cost to you.
        </p>
      </header>

      <div className={styles.sections}>
        {categories.map((category) => {
          const items = products.filter((p) => p.category === category);
          if (items.length === 0) return null;
          return (
            <AffiliateCarousel
              key={category}
              products={items}
              title={category}
              showViewAll={false}
            />
          );
        })}
      </div>

      <div className={`glass-panel ${styles.disclosure}`}>
        <h2>About our recommendations</h2>
        <p>
          We only list gear we&rsquo;d put in our own plots. As an Amazon Associate we earn from
          qualifying purchases; this helps keep the directory free. We never take paid placement
          inside this list — nursery partnerships live on a separate, clearly marked page.
        </p>
      </div>
    </div>
  );
}
