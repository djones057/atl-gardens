import { Garden } from "../types";
import styles from "./GardenCard.module.css";
import { MapPin, Sprout, CheckCircle2, Clock } from "lucide-react";
import Link from "next/link";

interface Props {
  garden: Garden;
}

export default function GardenCard({ garden }: Props) {
  return (
    <Link href={`/gardens/${garden.id}`} className={`glass-panel ${styles.card}`}>
      <div className={styles.imageContainer}>
        {garden.imageUrl ? (
          <img src={garden.imageUrl} alt={garden.name} className={styles.image} />
        ) : (
          <div className={styles.imagePlaceholder}>
            <Sprout size={48} className={styles.placeholderIcon} />
          </div>
        )}
        <div className={styles.badge} data-status={garden.plotAvailability}>
          {garden.plotAvailability === "Available" && <CheckCircle2 size={14} />}
          {garden.plotAvailability === "Waitlist" && <Clock size={14} />}
          {garden.plotAvailability}
        </div>
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{garden.name}</h3>
        <p className={styles.location}>
          <MapPin size={16} className={styles.icon} />
          {garden.neighborhood}, {garden.zipCode}
        </p>
        <p className={styles.description}>
          {garden.description.substring(0, 100)}...
        </p>
        <div className={styles.amenities}>
          {garden.amenities.slice(0, 3).map((amenity, i) => (
            <span key={i} className={styles.amenityBadge}>{amenity}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}
