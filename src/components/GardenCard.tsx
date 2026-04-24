import { Garden } from "../types";
import styles from "./GardenCard.module.css";
import { MapPin, Sprout, CheckCircle2, Clock, HelpCircle, Info, Ban } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Props {
  garden: Garden;
}

const MAX_DESCRIPTION = 120;

export default function GardenCard({ garden }: Props) {
  const description =
    garden.description.length > MAX_DESCRIPTION
      ? `${garden.description.slice(0, MAX_DESCRIPTION).trimEnd()}…`
      : garden.description;

  const isVerified = garden.verified !== false;

  return (
    <Link href={`/gardens/${garden.id}`} className={`glass-panel ${styles.card}`}>
      <div className={styles.imageContainer}>
        {garden.imageUrl ? (
          <Image
            src={garden.imageUrl}
            alt={garden.name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className={styles.image}
          />
        ) : (
          <div className={styles.imagePlaceholder}>
            <Sprout size={48} className={styles.placeholderIcon} />
          </div>
        )}
        {isVerified ? (
          <div className={styles.badge} data-status={garden.plotAvailability}>
            {garden.plotAvailability === "Available" && <CheckCircle2 size={14} />}
            {garden.plotAvailability === "Waitlist" && <Clock size={14} />}
            {garden.plotAvailability === "Full" && <Ban size={14} />}
            {garden.plotAvailability === "Unknown" && <HelpCircle size={14} />}
            {garden.plotAvailability}
          </div>
        ) : (
          <div className={styles.badge} data-status="Unverified">
            <Info size={14} />
            Listing
          </div>
        )}
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{garden.name}</h3>
        <p className={styles.location}>
          <MapPin size={16} className={styles.icon} />
          {garden.neighborhood}, {garden.zipCode}
        </p>
        <p className={styles.description}>{description}</p>
        {garden.amenities.length > 0 && (
          <div className={styles.amenities}>
            {garden.amenities.slice(0, 3).map((amenity, i) => (
              <span key={i} className={styles.amenityBadge}>{amenity}</span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
