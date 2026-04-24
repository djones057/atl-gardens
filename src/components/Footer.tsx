import styles from "./Footer.module.css";
import { Leaf } from "lucide-react";
import Link from "next/link";
import NewsletterSignup from "./NewsletterSignup";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.newsletterSection}>
          <NewsletterSignup />
        </div>
        
        <div className={styles.brandLinksContainer}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <Leaf className={styles.logoIcon} aria-hidden="true" />
              <span>ATL Gardens</span>
            </div>
            <p className={styles.description}>
              Connecting Atlanta&rsquo;s communities through sustainable urban agriculture.
            </p>
          </div>
          
          <div className={styles.links}>
            <div className={styles.column}>
              <h3>Explore</h3>
              <Link href="/gardens">All Gardens</Link>
              <Link href="/nurseries">Local Nurseries</Link>
              <Link href="/guides">Gardening Guides</Link>
              <Link href="/gear">Recommended Gear</Link>
            </div>
            <div className={styles.column}>
              <h3>About</h3>
              <Link href="/about">About Us</Link>
              <a href="mailto:hello@atlgardens.com">Add a Garden</a>
              <a href="mailto:partnerships@atlgardens.com">Nursery Partnership</a>
              <a href="mailto:corrections@atlgardens.com">Corrections</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <p className={styles.disclosure}>
          As an Amazon Associate I earn from qualifying purchases.
        </p>
        <p>&copy; {new Date().getFullYear()} Atlanta Community Gardens Directory. All rights reserved.</p>
      </div>
    </footer>
  );
}
