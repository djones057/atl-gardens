import { nurseries } from "@/data/products";
import styles from "./page.module.css";
import { Store, Globe, MapPin } from "lucide-react";

export default function NurseriesSpotlight() {
  return (
    <div className="container">
      <div className={styles.header}>
        <h1 className={styles.title}>Local Nursery Partners</h1>
        <p className={styles.subtitle}>
          Support local businesses while building your dream garden. These premier 
          nurseries offer the best plants, supplies, and expert advice in Atlanta.
        </p>
      </div>

      <div className={styles.grid}>
        {nurseries.map((nursery) => (
          <div key={nursery.id} className={`glass-panel ${styles.card}`}>
            <div className={styles.imagePlaceholder}>
              <Store size={48} className={styles.placeholderIcon} />
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
        ))}
      </div>

      <div className={`glass-panel ${styles.ctaSection}`}>
        <div className={styles.ctaContent}>
          <h2>Are you a local nursery or garden center?</h2>
          <p>
            Join our Recommended Partners program to reach thousands of urban farmers 
            and community gardeners across the Atlanta metro area.
          </p>
        </div>
        <a href="mailto:partnerships@atlgardens.com" className={styles.ctaButton}>
          Partner With Us
        </a>
      </div>
    </div>
  );
}
