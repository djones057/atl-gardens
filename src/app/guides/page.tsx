import Link from "next/link";
import { Calendar, Sprout, BookOpen, Droplets } from "lucide-react";
import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Gardening Guides for Atlanta | ATL Community Gardens",
  description:
    "Month-by-month planting calendars, local growing tips, and beginner guides tailored for Atlanta's climate (USDA zones 7b and 8a).",
};

const guides = [
  {
    href: "/guides/planting-calendar",
    icon: Calendar,
    title: "Atlanta Planting Calendar",
    description:
      "A month-by-month guide to what to sow, transplant, and harvest in Atlanta's zone 7b/8a climate.",
    badge: "Updated monthly",
    available: true,
  },
  {
    href: "/guides/first-season",
    icon: Sprout,
    title: "Your First Season: A Beginner's Guide",
    description:
      "Everything first-time community gardeners need — soil prep, plot layout, watering, and what to plant first.",
    badge: "8 min read",
    available: true,
  },
  {
    href: "#",
    icon: Droplets,
    title: "Watering in a Georgia Summer",
    description:
      "Drip vs. soaker vs. hand-watering, how much is enough, and Atlanta's outdoor watering rules.",
    badge: "Coming soon",
    available: false,
  },
  {
    href: "#",
    icon: BookOpen,
    title: "Pests & Diseases of the Southeast",
    description:
      "Field guide to the common issues Atlanta gardeners face, from tomato blight to squash vine borers.",
    badge: "Coming soon",
    available: false,
  },
];

export default function GuidesIndex() {
  return (
    <div className="container">
      <header className={styles.header}>
        <span className={styles.eyebrow}>Guides</span>
        <h1 className={styles.title}>Gardening in Atlanta</h1>
        <p className={styles.subtitle}>
          Practical, local-first guides for growing food in Atlanta&rsquo;s USDA zones 7b and 8a.
          Written for community gardeners, from first-plot beginners to long-time growers.
        </p>
      </header>

      <div className={styles.grid}>
        {guides.map(({ href, icon: Icon, title, description, badge, available }) =>
          available ? (
            <Link
              key={title}
              href={href}
              className={`glass-panel ${styles.card}`}
            >
              <div className={styles.cardIcon}><Icon size={28} /></div>
              <div className={styles.cardBadge}>{badge}</div>
              <h2 className={styles.cardTitle}>{title}</h2>
              <p className={styles.cardDescription}>{description}</p>
            </Link>
          ) : (
            <div
              key={title}
              className={`glass-panel ${styles.card} ${styles.cardDisabled}`}
              aria-label={`${title} — coming soon`}
            >
              <div className={styles.cardIcon}><Icon size={28} /></div>
              <div className={styles.cardBadge}>{badge}</div>
              <h2 className={styles.cardTitle}>{title}</h2>
              <p className={styles.cardDescription}>{description}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
}
