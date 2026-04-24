"use client";

import Link from "next/link";
import { Leaf } from "lucide-react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={`container glass-panel ${styles.nav}`}>
        <Link href="/" className={styles.logo}>
          <Leaf className={styles.logoIcon} />
          <span>ATL Gardens</span>
        </Link>
        <div className={styles.links}>
          <Link href="/gardens" className={styles.link}>Directory</Link>
          <Link href="/nurseries" className={styles.link}>Nurseries</Link>
          <Link href="/gear" className={styles.link}>Gear</Link>
        </div>
      </nav>
    </header>
  );
}
