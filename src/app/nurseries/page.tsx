import type { Metadata } from "next";
import Image from "next/image";
import { nurseries } from "@/data/products";
import styles from "./page.module.css";
import { Store, Globe, MapPin, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Local Nursery Partners | ATL Community Gardens",
  description:
    "Atlanta nurseries and garden centers we recommend for plants, soil, seeds, and expert advice.",
};

export default function NurseriesSpotlight() {
  const featured = nurseries.filter((n) => n.featured);
  const rest = nurseries.filter((n) => !n.featured);

  return (
    <div className="container">
      <div className={styles.header}>
        <span className={styles.eyebrow}>Nurseries</span>
        <h1 className={styles.title}>Local Nursery Partners</h1>
        <p className={styles.subtitle}>
          Support local businesses while building your dream garden. These Atlanta-area nurseries
          offer the plants, supplies, and expert advice we trust.
        </p>
      </div>

      {featured.length > 0 && (
        <section className={styles.featuredSection}>
          <h2 className={styles.sectionLabel}>
            <Star size={16} /> Featured Partner
          </h2>
          <div className={styles.grid}>
            {featured.map((nursery) => (
              <NurseryCard key={nursery.id} nursery={nursery} featured />
            ))}
          </div>
        </section>
      )}

      {rest.length > 0 && (
        <section className={styles.listedSection}>
          <h2 className={styles.sectionLabel}>Recommended Nurseries</h2>
          <div className={styles.grid}>
            {rest.map((nursery) => (
              <NurseryCard key={nursery.id} nursery={nursery} />
            ))}
          </div>
        </section>
      )}

      <div className={`glass-panel ${styles.ctaSection}`}>
        <div className={styles.ctaContent}>
          <h2>Are you a local nursery or garden center?</h2>
          <p>
            Join our Featured Partners program to reach thousands of urban farmers and community
            gardeners across the Atlanta metro area.
          </p>
        </div>
        <a href="mailto:partnerships@atlgardens.com" className={styles.ctaButton}>
          Partner With Us
        </a>
      </div>
    </div>
  );
}

function NurseryCard({
  nursery,
  featured,
}: {
  nursery: (typeof nurseries)[number];
  featured?: boolean;
}) {
  return (
    <div className={`glass-panel ${styles.card} ${featured ? styles.cardFeatured : ""}`}>
      <div className={styles.imageWrapper}>
        {nursery.imageUrl ? (
          <Image
            src={nursery.imageUrl}
            alt={nursery.name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className={styles.image}
          />
        ) : (
          <div className={styles.imagePlaceholder}>
            <Store size={48} />
          </div>
        )}
        {featured && (
          <div className={styles.featuredBadge}>
            <Star size={12} /> Featured
          </div>
        )}
      </div>
      <div className={styles.content}>
        <h2 className={styles.name}>{nursery.name}</h2>
        <p className={styles.location}>
          <MapPin size={16} className={styles.icon} />
          {nursery.neighborhood}
        </p>
        <p className={styles.description}>{nursery.description}</p>

        <div className={styles.specialties}>
          {nursery.specialties.map((specialty, i) => (
            <span key={i} className={styles.badge}>{specialty}</span>
          ))}
        </div>

        <a href={nursery.website} target="_blank" rel="noopener noreferrer" className={styles.link}>
          <Globe size={16} />
          Visit Website
        </a>
      </div>
    </div>
  );
}
