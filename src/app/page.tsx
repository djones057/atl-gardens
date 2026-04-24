import styles from "./page.module.css";
import Link from "next/link";
import { products as shedProducts } from "@/lib/potting-shed-data";
import ProductCard from "@/components/ProductCard";
import { plantingCalendar } from "@/data/plantingCalendar";
import { ArrowRight } from "lucide-react";

type DirTag = { label: string; variant?: "open" | "full" };
type DirEntry = {
  idx: string;
  name: string;
  meta: string[];
  tags: DirTag[];
};

const DIR_ENTRIES: DirEntry[] = [
  { idx: "001", name: "Wylde Center — Oakhurst", meta: ["Decatur", "2 acres"], tags: [{ label: "Plots open" }, { label: "Volunteers" }] },
  { idx: "002", name: "Truly Living Well", meta: ["Collegetown", "Urban farm"], tags: [{ label: "CSA shares" }] },
  { idx: "003", name: "Kirkwood Community Garden", meta: ["Kirkwood", "0.4 acres"], tags: [{ label: "Waitlist", variant: "full" }] },
  { idx: "004", name: "Old Fourth Ward Plots", meta: ["O4W", "24 beds"], tags: [{ label: "Plots open" }] },
  { idx: "005", name: "Bankhead Seed & Soil", meta: ["Bankhead", "Pollinator-focused"], tags: [{ label: "Workshops" }] },
  { idx: "006", name: "Cascade Springs Collective", meta: ["Cascade", "Members only"], tags: [{ label: "Kids programs" }] },
  { idx: "007", name: "Grant Park Victory Garden", meta: ["Grant Park", "Heirloom seeds"], tags: [{ label: "Volunteers" }] },
  { idx: "008", name: "West End Roots", meta: ["West End", "Teaching garden"], tags: [{ label: "Plots open" }] },
  { idx: "009", name: "Lakewood Orchard", meta: ["Lakewood", "Fruit trees"], tags: [{ label: "Harvest days" }] },
];

const MAP_PINS = [
  { x: 150, y: 140, label: "Bankhead", anchor: "start", variant: "open" },
  { x: 240, y: 170, label: "Old Fourth Ward", anchor: "start", variant: "open" },
  { x: 260, y: 220, label: "Kirkwood", anchor: "start", variant: "open" },
  { x: 290, y: 260, label: "E. Atlanta", anchor: "start", variant: "members" },
  { x: 180, y: 240, label: "West End", anchor: "end", tx: 136, ty: 232, variant: "open" },
  { x: 130, y: 290, label: "Cascade", anchor: "end", tx: 118, ty: 294, variant: "members" },
  { x: 220, y: 110, label: "Buckhead", anchor: "start", variant: "open" },
  { x: 310, y: 150, label: "Brookhaven", anchor: "start", variant: "open" },
  { x: 320, y: 330, label: "Decatur", anchor: "start", variant: "open" },
  { x: 110, y: 200, label: "Grove Park", anchor: "end", tx: 98, ty: 204, variant: "open" },
  { x: 200, y: 310, label: "Capitol View", anchor: "start", variant: "members" },
  { x: 250, y: 360, label: "Lakewood", anchor: "start", variant: "open" },
] as const;

export default function Home() {
  const currentMonth = new Date().toLocaleString("en-US", { month: "long" });
  const thisMonth = plantingCalendar.find((m) => m.month === currentMonth);

  return (
    <>
      {/* ─── HERO ─── */}
      <section className={styles.hero}>
        <div className={`shell ${styles.heroGrid}`}>
          <div className={styles.heroText}>
            <div className={styles.heroEyebrow}>
              <span className={styles.heroEyebrowDot} aria-hidden="true" />
              A directory&nbsp;·&nbsp;142 gardens&nbsp;·&nbsp;28 neighborhoods
            </div>

            <h1 className={styles.heroTitle}>
              Every community garden<br />
              in <em>Atlanta</em>, <span className={styles.heroAmp}>&amp;</span><br />
              how to grow&nbsp;there.
            </h1>

            <p className={styles.heroLede}>
              From Kirkwood to Cascade — a free, hand-kept directory of the plots,
              collectives, and urban farms shaping the city. Find a bed to rent, a crew
              to join, or a Saturday to volunteer.
            </p>

            <form action="/gardens" method="get" className={styles.search}>
              <div className={styles.searchField}>
                <label htmlFor="hero-neighborhood">Neighborhood</label>
                <input
                  id="hero-neighborhood"
                  name="neighborhood"
                  placeholder="Kirkwood, East Atlanta…"
                />
              </div>
              <div className={styles.searchField}>
                <label htmlFor="hero-looking">Looking for</label>
                <select id="hero-looking" name="looking" defaultValue="open-plots">
                  <option value="open-plots">Open plots</option>
                  <option value="volunteer">Volunteer days</option>
                  <option value="kids">Kids programs</option>
                  <option value="workshops">Workshops</option>
                </select>
              </div>
              <button type="submit" className={styles.searchBtn}>
                Search →
              </button>
            </form>

            <dl className={styles.heroStats}>
              <div className={styles.heroStat}>
                <dt className={styles.heroStatNum}>142</dt>
                <dd className={styles.heroStatLabel}>gardens listed</dd>
              </div>
              <div className={styles.heroStat}>
                <dt className={styles.heroStatNum}>38</dt>
                <dd className={styles.heroStatLabel}>open for volunteers</dd>
              </div>
              <div className={styles.heroStat}>
                <dt className={styles.heroStatNum}>17</dt>
                <dd className={styles.heroStatLabel}>plots available now</dd>
              </div>
            </dl>
          </div>

          <aside className={styles.featured}>
            <div className={styles.featuredPh} aria-hidden="true">
              <span className={styles.featuredPhCaption}>[ photo — Wylde Center ]</span>
            </div>
            <div className={styles.featuredCard}>
              <span className={styles.featuredTag}>Garden of the week</span>
              <h3 className={styles.featuredName}>
                Wylde Center<br />Oakhurst
              </h3>
              <p className={styles.featuredLoc}>Decatur · 2 acres · est. 1998</p>
              <div className={styles.featuredRow}>
                <span className={styles.featuredHours}>Open Sat 9–12</span>
                <span className={styles.featuredArrow} aria-hidden="true">→</span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ─── THIS MONTH ─── */}
      {thisMonth && (
        <section className={`container ${styles.month}`}>
          <div className={styles.monthWatermark} aria-hidden="true">{currentMonth}</div>

          <div className={styles.monthGrid}>
            <div className={styles.monthLeft}>
              <span className={styles.sectionLabel}>This Month in the Garden</span>
              <h2 className={styles.monthHeading}>{currentMonth}<br />in Atlanta</h2>
              <p className={styles.monthSummary}>{thisMonth.summary}</p>
              <Link href="/guides/planting-calendar" className={styles.monthLink}>
                See the full 12-month calendar <ArrowRight size={15} />
              </Link>
            </div>

            <div className={styles.monthRight}>
              {thisMonth.sowOutdoors.length > 0 && (
                <div className={styles.monthGroup}>
                  <h3 className={styles.monthGroupLabel}>Sow Outdoors</h3>
                  <ul className={styles.monthItems}>
                    {thisMonth.sowOutdoors.slice(0, 5).map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </div>
              )}
              {thisMonth.transplant.length > 0 && (
                <div className={styles.monthGroup}>
                  <h3 className={styles.monthGroupLabel}>Transplant</h3>
                  <ul className={styles.monthItems}>
                    {thisMonth.transplant.slice(0, 4).map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </div>
              )}
              {thisMonth.tasks.length > 0 && (
                <div className={styles.monthGroup}>
                  <h3 className={styles.monthGroupLabel}>Tasks</h3>
                  <ul className={styles.monthItems}>
                    {thisMonth.tasks.slice(0, 3).map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ─── 01 / DIRECTORY ─── */}
      <section id="directory" className={styles.sec}>
        <div className="shell">
          <div className={styles.secHead}>
            <div>
              <div className={styles.secNum}>01 / Directory</div>
              <h2 className={styles.secTitle}>
                Browse all <em>gardens</em> across the city.
              </h2>
            </div>
            <div className={styles.dirHeadRight}>
              <p className={styles.secIntro}>
                Filter by neighborhood, access policy, or what&rsquo;s currently in the
                ground. Tap a pin to see hours, organizers, and how to get involved.
              </p>
              <div className={styles.dirToggle} role="tablist" aria-label="Directory view">
                <button type="button" role="tab" aria-selected="true" className={styles.dirToggleOn}>
                  Map + list
                </button>
                <button type="button" role="tab" aria-selected="false">
                  Grid
                </button>
                <button type="button" role="tab" aria-selected="false">
                  By neighborhood
                </button>
              </div>
            </div>
          </div>

          <div className={styles.dirGrid}>
            <div className={styles.map}>
              <span className={styles.mapLabel}>Map · metro ATL</span>
              <svg viewBox="0 0 400 420" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <defs>
                  <pattern id="mapGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="oklch(0.83 0.03 130)" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="400" height="420" fill="url(#mapGrid)" />
                <ellipse
                  cx="200"
                  cy="210"
                  rx="150"
                  ry="160"
                  fill="none"
                  stroke="oklch(0.55 0.02 140)"
                  strokeWidth="1.2"
                  strokeDasharray="3 3"
                />
                <path
                  d="M 200 40 Q 180 180 200 210 Q 220 250 200 380"
                  stroke="oklch(0.55 0.02 140)"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="M 50 220 Q 200 200 350 230"
                  stroke="oklch(0.55 0.02 140)"
                  strokeWidth="1.5"
                  fill="none"
                />
                <g fontFamily="var(--font-mono), JetBrains Mono, monospace" fontSize="9" fill="oklch(0.22 0.02 140)">
                  {MAP_PINS.map((p) => (
                    <g key={p.label}>
                      <circle
                        cx={p.x}
                        cy={p.y}
                        r="6"
                        fill={p.variant === "members" ? "oklch(0.58 0.12 45)" : "oklch(0.35 0.06 145)"}
                      />
                      <text
                        x={"tx" in p ? p.tx : p.x + 12}
                        y={"ty" in p ? p.ty : p.y + 3}
                        textAnchor={p.anchor}
                      >
                        {p.label}
                      </text>
                    </g>
                  ))}
                </g>
              </svg>
              <div className={styles.mapLegend}>
                <span>
                  <i className={styles.legendDotOpen} aria-hidden="true" /> Open to public
                </span>
                <span>
                  <i className={styles.legendDotMembers} aria-hidden="true" /> Members only
                </span>
                <span>
                  <i className={styles.legendDotInterstate} aria-hidden="true" /> Interstate
                </span>
              </div>
            </div>

            <div className={styles.gardenList}>
              {DIR_ENTRIES.map((g) => (
                <Link key={g.idx} href="/gardens" className={styles.gardenRow}>
                  <span className={styles.gardenIdx}>{g.idx}</span>
                  <div>
                    <div className={styles.gardenName}>{g.name}</div>
                    <div className={styles.gardenMeta}>
                      {g.meta.map((m, i) => (
                        <span key={`${m}-${i}`}>{m}</span>
                      ))}
                      {g.tags.map((t) => (
                        <span
                          key={t.label}
                          className={`${styles.tag} ${t.variant === "full" ? styles.tagFull : ""}`}
                        >
                          {t.label}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className={styles.gardenArrow} aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
          </div>

          <div className={styles.dirMore}>
            <Link href="/gardens" className={styles.dirMoreLink}>
              See all 142 gardens →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── THE POTTING SHED ─── */}
      <section className={`container ${styles.shed}`}>
        <div className={styles.shedHeader}>
          <div>
            <span className={styles.sectionLabel}>The Potting Shed</span>
            <h2 className={styles.shedTitle}>Gear We Trust</h2>
            <p className={styles.shedSubtitle}>
              Curated for Atlanta&rsquo;s climate and community gardens.
            </p>
          </div>
          <Link href="/potting-shed" className={styles.viewAll}>
            Browse The Potting Shed <ArrowRight size={14} />
          </Link>
        </div>

        <div className={styles.shedGrid}>
          {shedProducts.slice(0, 6).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </>
  );
}
