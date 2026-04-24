import Link from "next/link";
import { Sprout, ArrowLeft, Search, Calendar } from "lucide-react";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={`container ${styles.page}`}>
      <div className={styles.illustration}>
        <Sprout size={64} className={styles.sproutIcon} />
        <div className={styles.soil} />
      </div>

      <h1 className={styles.title}>This plot is empty.</h1>
      <p className={styles.message}>
        Looks like this page hasn&rsquo;t been planted yet — or it moved to a
        new bed. Either way, you&rsquo;re not lost, just between rows.
      </p>

      <div className={styles.links}>
        <Link href="/" className={styles.btnPrimary}>
          <ArrowLeft size={18} />
          Back to the homepage
        </Link>
        <Link href="/gardens" className={styles.btnSecondary}>
          <Search size={18} />
          Find a garden
        </Link>
        <Link href="/guides/planting-calendar" className={styles.btnSecondary}>
          <Calendar size={18} />
          Planting calendar
        </Link>
      </div>
    </div>
  );
}
