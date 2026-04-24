import { gardens } from "@/data/gardens";
import GardenCard from "@/components/GardenCard";
import styles from "./page.module.css";

export default function GardensDirectory() {
  return (
    <div className="container">
      <div className={styles.header}>
        <h1 className={styles.title}>Atlanta Community Gardens</h1>
        <p className={styles.subtitle}>
          Find a plot, join a community, and start growing. Browse our comprehensive directory of 
          community gardens across the Atlanta metro area.
        </p>
      </div>

      <div className={styles.grid}>
        {gardens.map((garden) => (
          <GardenCard key={garden.id} garden={garden} />
        ))}
      </div>
    </div>
  );
}
