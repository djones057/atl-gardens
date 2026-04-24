import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={`shell ${styles.inner}`}>
        <Link href="/" className={styles.brand}>
          <span className={styles.brandMark} aria-hidden="true">a</span>
          <span className={styles.brandStack}>
            <span className={styles.brandName}>ATL Community Gardens</span>
            <span className={styles.brandSub}>Est. 2026 — A field guide</span>
          </span>
        </Link>
        <div className={styles.links}>
          <Link href="/gardens" className={styles.link}>Directory</Link>
          <Link href="/guides/planting-calendar" className={styles.link}>Growing calendar</Link>
          <Link href="/potting-shed" className={styles.link}>Seasonal picks</Link>
          <Link href="/guides" className={styles.link}>Journal</Link>
          <a
            href="mailto:hello@atlgardens.com?subject=Add%20a%20garden"
            className={styles.cta}
          >
            Add a garden
          </a>
        </div>
      </nav>
    </header>
  );
}
