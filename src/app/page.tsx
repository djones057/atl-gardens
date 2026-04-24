import styles from "./page.module.css";
import Link from "next/link";
import { gardens } from "@/data/gardens";
import { products } from "@/data/products";
import GardenCard from "@/components/GardenCard";
import AffiliateCarousel from "@/components/AffiliateCarousel";

export default function Home() {
  const featuredGardens = gardens.slice(0, 3);

  return (
    <div className="container">
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Grow with <span>Atlanta</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Discover community gardens in your neighborhood, connect with local growers, 
            and get the best gear for your sustainable urban agriculture journey.
          </p>
          <div className={styles.ctaGroup}>
            <Link href="/gardens" className={styles.btnPrimary}>
              Find a Garden
            </Link>
            <Link href="/nurseries" className={styles.btnSecondary}>
              Local Nurseries
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Featured Gardens</h2>
          <Link href="/gardens" className={styles.sectionLink}>
            View All Gardens
          </Link>
        </div>
        <div className={styles.grid}>
          {featuredGardens.map((garden) => (
            <GardenCard key={garden.id} garden={garden} />
          ))}
        </div>
      </section>

      <AffiliateCarousel products={products} />
    </div>
  );
}
