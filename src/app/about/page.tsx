import type { Metadata } from "next";
import Link from "next/link";
import { Leaf, Mail, ShieldCheck, HandHeart } from "lucide-react";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About",
  description:
    "About ATL Community Gardens — how we maintain the directory, how we make money, and how to get involved.",
};

export default function AboutPage() {
  return (
    <div className="container">
      <header className={styles.header}>
        <span className={styles.eyebrow}>About</span>
        <h1 className={styles.title}>
          Helping Atlantans <span>grow</span>.
        </h1>
        <p className={styles.lede}>
          ATL Community Gardens is a free directory and guide for community gardens across the
          Atlanta metro. We started it because no single place listed them all — and because good
          local gardening information is surprisingly hard to find online.
        </p>
      </header>

      <section className={styles.grid}>
        <div className={`glass-panel ${styles.card}`}>
          <div className={styles.cardIcon}>
            <Leaf />
          </div>
          <h2>What we do</h2>
          <p>
            Maintain a searchable directory of Atlanta community gardens, publish a local
            planting calendar tuned for USDA zones 7b and 8a, and recommend the gear we actually
            use in our own plots.
          </p>
        </div>

        <div className={`glass-panel ${styles.card}`}>
          <div className={styles.cardIcon}>
            <ShieldCheck />
          </div>
          <h2>How we verify listings</h2>
          <p>
            Gardens marked <strong>Verified</strong> have been confirmed directly with the garden
            operator. Listings marked <strong>Listing</strong> are unverified — we&rsquo;ve
            gathered a name, neighborhood, and rough location, but details like plot availability
            and membership fees still need confirmation.
          </p>
        </div>

        <div className={`glass-panel ${styles.card}`}>
          <div className={styles.cardIcon}>
            <HandHeart />
          </div>
          <h2>How we make money</h2>
          <p>
            Two ways, both disclosed. Our{" "}
            <Link href="/potting-shed" className={styles.link}>Potting Shed</Link> uses Amazon
            affiliate links — we earn a small commission when you buy, at no cost to you. Select nurseries
            pay to appear as <strong>Featured Partners</strong> on our{" "}
            <Link href="/nurseries" className={styles.link}>nursery page</Link>, with their
            status clearly marked. The garden directory itself is, and will stay, free.
          </p>
        </div>

        <div className={`glass-panel ${styles.card}`}>
          <div className={styles.cardIcon}>
            <Mail />
          </div>
          <h2>Get in touch</h2>
          <p>
            Garden operators, corrections, and press:{" "}
            <a href="mailto:hello@atlgardens.com" className={styles.link}>
              hello@atlgardens.com
            </a>
            <br />
            Nursery partnerships:{" "}
            <a href="mailto:partnerships@atlgardens.com" className={styles.link}>
              partnerships@atlgardens.com
            </a>
            <br />
            Corrections to a listing:{" "}
            <a href="mailto:corrections@atlgardens.com" className={styles.link}>
              corrections@atlgardens.com
            </a>
          </p>
        </div>
      </section>

      <section className={`glass-panel ${styles.values}`}>
        <h2>Our principles</h2>
        <ul>
          <li>
            <strong>Local first.</strong> Advice is for Atlanta&rsquo;s climate, soils, and
            growing calendar — not generic national content.
          </li>
          <li>
            <strong>Honest about what we don&rsquo;t know.</strong> Unverified listings say so.
            Affiliate links say so. Paid placements say so.
          </li>
          <li>
            <strong>Free directory, always.</strong> Gardens do not pay to be listed. We will
            never hide a real community garden behind a paywall.
          </li>
          <li>
            <strong>Useful over exhaustive.</strong> A short, correct answer beats a long,
            hedged one.
          </li>
        </ul>
      </section>
    </div>
  );
}
