import Link from "next/link";
import type { Metadata } from "next";
import { Sprout, MapPin, Calendar, Scissors, ChevronLeft } from "lucide-react";
import { plantingCalendar } from "@/data/plantingCalendar";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Atlanta Planting Calendar (Zone 7b/8a) | ATL Community Gardens",
  description:
    "A month-by-month planting calendar for Atlanta community gardeners. Learn what to sow, transplant, and harvest in USDA zones 7b and 8a.",
};

export default function PlantingCalendarPage() {
  const currentMonth = new Date().toLocaleString("en-US", { month: "long" });

  return (
    <div className="container">
      <Link href="/guides" className={styles.back}>
        <ChevronLeft size={16} /> All Guides
      </Link>

      <header className={styles.header}>
        <span className={styles.eyebrow}>Planting Calendar · Zone 7b / 8a</span>
        <h1 className={styles.title}>
          What to Plant in <span>Atlanta</span>, Month by Month
        </h1>
        <p className={styles.subtitle}>
          Atlanta sits on the 7b/8a USDA hardiness line, with a last frost around March 29 and a
          first frost around November 8. This calendar is tuned for community-garden scale and
          common metro-Atlanta varieties.
        </p>
        <div className={styles.facts}>
          <div className={styles.fact}>
            <span className={styles.factLabel}>USDA Zone</span>
            <span className={styles.factValue}>7b / 8a</span>
          </div>
          <div className={styles.fact}>
            <span className={styles.factLabel}>Last frost</span>
            <span className={styles.factValue}>~Mar 29</span>
          </div>
          <div className={styles.fact}>
            <span className={styles.factLabel}>First frost</span>
            <span className={styles.factValue}>~Nov 8</span>
          </div>
          <div className={styles.fact}>
            <span className={styles.factLabel}>Growing season</span>
            <span className={styles.factValue}>~225 days</span>
          </div>
        </div>

        <nav className={styles.monthNav} aria-label="Jump to month">
          {plantingCalendar.map((m) => (
            <a
              key={m.month}
              href={`#${m.month.toLowerCase()}`}
              className={`${styles.monthPill} ${m.month === currentMonth ? styles.monthPillActive : ""}`}
            >
              {m.month.slice(0, 3)}
            </a>
          ))}
        </nav>
      </header>

      <div className={styles.months}>
        {plantingCalendar.map((m) => (
          <section
            key={m.month}
            id={m.month.toLowerCase()}
            className={`glass-panel ${styles.monthBlock} ${m.month === currentMonth ? styles.monthBlockActive : ""}`}
            data-season={m.season}
          >
            <div className={styles.monthHeading}>
              <div>
                <span className={styles.seasonTag}>{m.season}</span>
                <h2 className={styles.monthName}>{m.month}</h2>
              </div>
              {m.month === currentMonth && <span className={styles.nowTag}>Right now</span>}
            </div>
            <p className={styles.monthSummary}>{m.summary}</p>

            <div className={styles.cropGrid}>
              {m.sowIndoors.length > 0 && (
                <div className={styles.cropColumn}>
                  <h3><Sprout size={16} /> Sow Indoors</h3>
                  <ul>
                    {m.sowIndoors.map((c) => <li key={c}>{c}</li>)}
                  </ul>
                </div>
              )}
              {m.sowOutdoors.length > 0 && (
                <div className={styles.cropColumn}>
                  <h3><Sprout size={16} /> Sow Outdoors</h3>
                  <ul>
                    {m.sowOutdoors.map((c) => <li key={c}>{c}</li>)}
                  </ul>
                </div>
              )}
              {m.transplant.length > 0 && (
                <div className={styles.cropColumn}>
                  <h3><MapPin size={16} /> Transplant</h3>
                  <ul>
                    {m.transplant.map((c) => <li key={c}>{c}</li>)}
                  </ul>
                </div>
              )}
              {m.harvest.length > 0 && (
                <div className={styles.cropColumn}>
                  <h3><Scissors size={16} /> Harvest</h3>
                  <ul>
                    {m.harvest.map((c) => <li key={c}>{c}</li>)}
                  </ul>
                </div>
              )}
            </div>

            <div className={styles.tasks}>
              <h3><Calendar size={16} /> Tasks for {m.month}</h3>
              <ul>
                {m.tasks.map((t) => <li key={t}>{t}</li>)}
              </ul>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
