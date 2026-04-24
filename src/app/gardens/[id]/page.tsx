import { gardens } from "@/data/gardens";
import { products } from "@/data/products";
import AffiliateCarousel from "@/components/AffiliateCarousel";
import styles from "./page.module.css";
import { MapPin, Globe, CheckCircle2, Clock, Sprout } from "lucide-react";
import { notFound } from "next/navigation";

export default async function GardenDetail({ params }: { params: Promise<{ id: string }> }) {
  // Await params as required in Next 15 App router
  const { id } = await params;
  const garden = gardens.find((g) => g.id === id);

  if (!garden) {
    notFound();
  }

  // Suggest products related to this specific garden's features
  // For demonstration, just use all products
  const suggestedProducts = products;

  return (
    <div className="container">
      <div className={styles.hero}>
        <div className={styles.imagePlaceholder}>
          <Sprout size={64} className={styles.placeholderIcon} />
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.mainInfo}>
          <div className={styles.header}>
            <h1 className={styles.title}>{garden.name}</h1>
            <div className={styles.badge} data-status={garden.plotAvailability}>
              {garden.plotAvailability === "Available" && <CheckCircle2 size={16} />}
              {garden.plotAvailability === "Waitlist" && <Clock size={16} />}
              {garden.plotAvailability}
            </div>
          </div>

          <div className={styles.meta}>
            <p className={styles.location}>
              <MapPin size={18} className={styles.icon} />
              {garden.address}
            </p>
            {garden.website && (
              <a href={garden.website} target="_blank" rel="noopener noreferrer" className={styles.website}>
                <Globe size={18} className={styles.icon} />
                Visit Website
              </a>
            )}
          </div>

          <div className={styles.section}>
            <h2>About this Garden</h2>
            <p className={styles.description}>{garden.description}</p>
          </div>

          <div className={styles.section}>
            <h2>Amenities & Features</h2>
            <ul className={styles.amenitiesList}>
              {garden.amenities.map((amenity, i) => (
                <li key={i} className={styles.amenityItem}>
                  <CheckCircle2 size={16} className={styles.checkIcon} />
                  {amenity}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.sidebar}>
          <div className={`glass-panel ${styles.sidebarCard}`}>
            <h3>Interested in joining?</h3>
            <p>Community gardens are a great way to grow your own food and meet neighbors.</p>
            <button className={styles.btnPrimary}>
              {garden.plotAvailability === "Available" ? "Apply for a Plot" : "Join Waitlist"}
            </button>
          </div>
        </div>
      </div>

      <div className={styles.affiliateSection}>
        <AffiliateCarousel products={suggestedProducts} />
      </div>
    </div>
  );
}
