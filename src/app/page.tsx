import styles from "./page.module.css";
import Link from "next/link";
import { gardens } from "@/data/gardens";
import { products } from "@/data/products";
import GardenCard from "@/components/GardenCard";
import AffiliateCarousel from "@/components/AffiliateCarousel";
import { plantingCalendar } from "@/data/plantingCalendar";
import { Calendar, MapPin, Sprout } from "lucide-react";

export default function Home() {
  const featuredGardens = gardens.slice(0, 3);
  const currentMonth = new Date().toLocaleString("en-US", { month: "long" });
  const thisMonth = plantingCalendar.find((m) => m.month === currentMonth);
  const availableCount = gardens.filter((g) => g.plotAvailability === "Available").length;

  return (
    <div className="container">
      <section className={styles.hero}>
        <div className={styles.heroBackdrop} aria-hidden="true" />
        <div className={styles.heroContent}>
          <span className={styles.heroEyebrow}>Atlanta metro · Zone 7b / 8a</span>
          <h1 className={styles.heroTitle}>
            Find your plot in <span>Atlanta</span>.
          </h1>
          <p className={styles.heroSubtitle}>
            A free directory of {gardens.length} community gardens, a local planting calendar,
            and trusted gear picks — all in one place.
          </p>
          <div className={styles.ctaGroup}>
            <Link href="/gardens" className={styles.btnPrimary}>
              Find a Garden
            </Link>
            <Link href="/guides/planting-calendar" className={styles.btnSecondary}>
              What to Plant in {currentMonth}
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.statsBanner}>
        <div className={styles.statsContainer}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>{gardens.length}+</span>
            <span className={styles.statLabel}>Community Gardens</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>{availableCount}</span>
            <span className={styles.statLabel}>Open for Applications</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>12</span>
            <span className={styles.statLabel}>Months of Planting Tips</span>
          </div>
        </div>
      </section>

      {thisMonth && (
        <section className={styles.monthSection}>
          <div className={styles.monthCard}>
            <div className={styles.monthHeader}>
              <div className={styles.monthBadge}>
                <Calendar size={16} />
                <span>This Month in the Garden</span>
              </div>
              <h2 className={styles.monthTitle}>
                {currentMonth} in <span>Atlanta</span>
              </h2>
              <p className={styles.monthSubtitle}>{thisMonth.summary}</p>
            </div>
            <div className={styles.monthGrid}>
              <div className={styles.monthColumn}>
                <h3><Sprout size={18} /> Sow outdoors</h3>
                <ul>
                  {thisMonth.sowOutdoors.slice(0, 5).map((crop) => (
                    <li key={crop}>{crop}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.monthColumn}>
                <h3><MapPin size={18} /> Transplant</h3>
                <ul>
                  {thisMonth.transplant.slice(0, 5).map((crop) => (
                    <li key={crop}>{crop}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.monthColumn}>
                <h3><Calendar size={18} /> Tasks</h3>
                <ul>
                  {thisMonth.tasks.slice(0, 4).map((task) => (
                    <li key={task}>{task}</li>
                  ))}
                </ul>
              </div>
            </div>
            <Link href="/guides/planting-calendar" className={styles.monthCta}>
              See the full 12-month Atlanta planting calendar →
            </Link>
          </div>
        </section>
      )}

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

      <AffiliateCarousel products={products.slice(0, 4)} />
    </div>
  );
}
