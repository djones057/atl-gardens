import styles from "./Footer.module.css";
import { Leaf, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <Leaf className={styles.logoIcon} />
            <span>ATL Gardens</span>
          </div>
          <p className={styles.description}>
            Connecting Atlanta's communities through sustainable urban agriculture.
          </p>
        </div>
        
        <div className={styles.links}>
          <div className={styles.column}>
            <h3>Explore</h3>
            <Link href="/gardens">All Gardens</Link>
            <Link href="/nurseries">Local Nurseries</Link>
            <Link href="/gear">Recommended Gear</Link>
          </div>
          <div className={styles.column}>
            <h3>Partner</h3>
            <Link href="#">Add a Garden</Link>
            <Link href="#">Nursery Partnership</Link>
            <Link href="#">Contact Us</Link>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} Atlanta Community Gardens Directory. All rights reserved.</p>
      </div>
    </footer>
  );
}
