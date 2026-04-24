import type { Metadata } from "next";
import { Leaf, Sprout, Calendar, Users, Heart } from "lucide-react";
import NewsletterSignup from "@/components/NewsletterSignup";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Newsletter | ATL Community Gardens",
  description:
    "Sign up for seasonal planting guides, community garden news, and local growing tips for Atlanta — delivered free to your inbox.",
};

const perks = [
  {
    icon: Calendar,
    title: "Seasonal planting reminders",
    description: "Know exactly what to sow and when for Atlanta's zone 7b/8a climate, month by month.",
  },
  {
    icon: Sprout,
    title: "New garden listings",
    description: "Be the first to know when a new community garden opens in your neighborhood.",
  },
  {
    icon: Leaf,
    title: "Local growing tips",
    description: "Practical advice for Atlanta's clay soil, humidity, and long growing season — not generic national content.",
  },
  {
    icon: Users,
    title: "Community events",
    description: "Volunteer days, harvest festivals, and workshops happening across the Atlanta metro.",
  },
];

export default function NewsletterPage() {
  return (
    <div className="container">
      <header className={styles.header}>
        <span className={styles.eyebrow}>Free Newsletter</span>
        <h1 className={styles.title}>
          Grow with <span>Atlanta</span>.
        </h1>
        <p className={styles.lede}>
          ATL Community Gardens exists so every Atlanta resident can find a place to grow food,
          connect with neighbors, and learn to garden — for free. Our newsletter is how we stay
          in touch.
        </p>
      </header>

      <div className={styles.signupWrapper}>
        <NewsletterSignup />
        <p className={styles.privacy}>
          No spam, ever. One email per month, roughly. Unsubscribe any time.
        </p>
      </div>

      <section className={styles.perksGrid}>
        {perks.map(({ icon: Icon, title, description }) => (
          <div key={title} className={`glass-panel ${styles.perkCard}`}>
            <div className={styles.perkIcon}>
              <Icon size={22} />
            </div>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        ))}
      </section>

      <section className={`glass-panel ${styles.support}`}>
        <div className={styles.supportIcon}>
          <Heart size={28} />
        </div>
        <h2>Support the directory</h2>
        <p>
          ATL Community Gardens is free to use and always will be. We cover our costs through{" "}
          <Link href="/gear" className={styles.link}>Amazon affiliate commissions</Link> on our
          gear page and <Link href="/nurseries" className={styles.link}>featured partner</Link>{" "}
          placements for local nurseries. If you&rsquo;d like to support us beyond that,{" "}
          sharing the site with a fellow Atlanta gardener is the best thing you can do.
        </p>
        <p>
          Garden operators, corrections, and press:{" "}
          <a href="mailto:hello@atlgardens.com" className={styles.link}>hello@atlgardens.com</a>
        </p>
      </section>
    </div>
  );
}
