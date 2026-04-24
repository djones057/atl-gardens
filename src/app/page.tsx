import { Fragment } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { gardens } from "@/data/gardens";
import HomepageNewsletter from "@/components/HomepageNewsletter";

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

type Pick = {
  id: string;
  category: string;
  name: string;
  description: string;
  price: string;
  href: string;
  cta: string;
  phLabel: string;
};

const PICKS: Pick[] = [
  {
    id: "hori-hori",
    category: "For · transplanting",
    name: "Japanese hori-hori knife",
    description: "Doubles as trowel, weeder, and root saw. The one tool everyone ends up borrowing.",
    price: "$34",
    href: "https://www.amazon.com/dp/B0002YV2NQ?tag=atlgardens-20",
    cta: "Shop on Amazon →",
    phLabel: "[ hori-hori knife ]",
  },
  {
    id: "neem-oil",
    category: "For · pest pressure",
    name: "Cold-pressed neem oil, 16oz",
    description: "Squash bugs show up in June. Spray at dusk, once a week, and pray.",
    price: "$18",
    href: "https://www.amazon.com/dp/B004QAWGIO?tag=atlgardens-20",
    cta: "Shop on Amazon →",
    phLabel: "[ neem oil ]",
  },
  {
    id: "uga-soil-test",
    category: "For · spring prep",
    name: "UGA soil-test kit",
    description: "Mail-in through the county extension. Know your pH before you plant a thing.",
    price: "$12",
    href: "https://aesl.ces.uga.edu/soiltest123/Georgia.asp",
    cta: "Order from UGA →",
    phLabel: "[ soil test kit ]",
  },
  {
    id: "clemson-okra",
    category: "For · May sowing",
    name: "Clemson Spineless okra",
    description: "The Southern standard. Heat-loving, forgiving, and absurdly productive by August.",
    price: "$4",
    href: "https://sowtrueseed.com/products/okra-clemson-spineless",
    cta: "Buy from Sow True →",
    phLabel: "[ seed pack — okra ]",
  },
];

type JournalEntry = {
  id: string;
  category: string;
  categoryVariant?: "clay";
  headline: string;
  dek: string;
  byline: string;
  phLabel: string;
  feature?: boolean;
};

const JOURNAL: JournalEntry[] = [
  {
    id: "browns-mill",
    category: "Long read · 12 min",
    categoryVariant: "clay",
    headline:
      "How a vacant lot in Pittsburgh neighborhood became 80 people's dinner table.",
    dek:
      "The story of Browns Mill Food Forest — the largest publicly-owned food forest in the U.S. — and the volunteers who turned seven acres of kudzu into pecan, pawpaw, and persimmon.",
    byline: "By M. Ellis · April 2026",
    phLabel: "[ cover — raised beds at dawn ]",
    feature: true,
  },
  {
    id: "red-clay",
    category: "Guide",
    headline: "Working with Georgia red clay (without cursing at it).",
    dek: "Five amendments, a lasagna-bed recipe, and the one mistake almost every new gardener in ATL makes.",
    byline: "6 min read",
    phLabel: "[ photo — clay soil ]",
  },
  {
    id: "compost-coop",
    category: "Spotlight",
    headline:
      "The Compost Coop in East Atlanta is quietly diverting 40 tons a year.",
    dek: "How a $30 monthly membership turns food scraps into the best topsoil in the neighborhood.",
    byline: "4 min read",
    phLabel: "[ photo — compost pile ]",
  },
];

type CellState = "empty" | "plant" | "harvest" | "both";

const MONTHS_SHORT = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] as const;

const CROPS: { name: string; cells: CellState[] }[] = [
  { name: "Tomato",   cells: ["empty", "empty", "plant", "plant", "empty", "harvest", "harvest", "harvest", "harvest", "empty", "empty", "empty"] },
  { name: "Okra",     cells: ["empty", "empty", "empty", "plant", "plant", "empty", "harvest", "harvest", "harvest", "harvest", "empty", "empty"] },
  { name: "Collards", cells: ["harvest", "harvest", "plant", "empty", "empty", "empty", "empty", "plant", "plant", "harvest", "harvest", "harvest"] },
  { name: "Peppers",  cells: ["empty", "empty", "plant", "plant", "empty", "harvest", "harvest", "harvest", "harvest", "harvest", "empty", "empty"] },
  { name: "Garlic",   cells: ["empty", "empty", "empty", "empty", "harvest", "harvest", "empty", "empty", "empty", "plant", "plant", "empty"] },
  { name: "Peas",     cells: ["empty", "plant", "plant", "harvest", "harvest", "empty", "empty", "empty", "plant", "empty", "harvest", "empty"] },
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
  const gardenCount = gardens.length;
  const neighborhoodCount = new Set(gardens.map((g) => g.neighborhood)).size;

  return (
    <>
      {/* ─── HERO ─── */}
      <section className={styles.hero}>
        <div className={`shell ${styles.heroGrid}`}>
          <div className={styles.heroText}>
            <div className={styles.heroEyebrow}>
              <span className={styles.heroEyebrowDot} aria-hidden="true" />
              A directory&nbsp;·&nbsp;{gardenCount} gardens&nbsp;·&nbsp;{neighborhoodCount} neighborhoods
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
                <dt className={styles.heroStatNum}>{gardenCount}</dt>
                <dd className={styles.heroStatLabel}>gardens listed</dd>
              </div>
              <div className={styles.heroStat}>
                <dt className={styles.heroStatNum}>{neighborhoodCount}</dt>
                <dd className={styles.heroStatLabel}>neighborhoods</dd>
              </div>
              <div className={styles.heroStat}>
                <dt className={styles.heroStatNum}>12</dt>
                <dd className={styles.heroStatLabel}>months of tips</dd>
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

      {/* ─── 02 / GROWING CALENDAR ─── */}
      <section id="calendar" className={`${styles.sec} ${styles.calSection}`}>
        <div className="shell">
          <div className={styles.calWrap}>
            <div className={`${styles.secHead} ${styles.calHead}`}>
              <div>
                <div className={styles.secNum}>02 / Growing calendar</div>
                <h2 className={styles.secTitle}>
                  What to plant this <em>month</em>.
                </h2>
              </div>
              <p className={styles.secIntro}>
                Zone 8a timing, dialed in for metro Atlanta — from tomato starts in March
                to fall greens in September. Shaded weeks are prime for each crop.
              </p>
            </div>

            <div
              className={styles.cal}
              role="table"
              aria-label="Growing calendar: sow and harvest windows by crop"
            >
              <div className={styles.calCorner}>&nbsp;</div>
              {MONTHS_SHORT.map((m) => (
                <div key={m} className={styles.calHeadCell}>
                  {m}
                </div>
              ))}

              {CROPS.map((c) => (
                <Fragment key={c.name}>
                  <div className={styles.calCrop}>{c.name}</div>
                  {c.cells.map((state, i) => (
                    <div
                      key={i}
                      className={`${styles.calCell} ${
                        state === "plant"
                          ? styles.calCellPlant
                          : state === "harvest"
                            ? styles.calCellHarvest
                            : state === "both"
                              ? styles.calCellBoth
                              : ""
                      }`}
                    />
                  ))}
                </Fragment>
              ))}
            </div>

            <div className={styles.calLegend}>
              <span>
                <i className={styles.calLegendSow} aria-hidden="true" /> Sow / transplant
              </span>
              <span>
                <i className={styles.calLegendHarvest} aria-hidden="true" /> Harvest window
              </span>
              <span className={styles.calLegendFrost}>
                USDA zone 8a · avg last frost Mar 29
              </span>
            </div>
          </div>
        </div>
      </section>

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
              See all {gardenCount} gardens →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 03 / SEASONAL PICKS ─── */}
      <section id="picks" className={styles.sec}>
        <div className="shell">
          <div className={styles.secHead}>
            <div>
              <div className={styles.secNum}>03 / Seasonal picks</div>
              <h2 className={styles.secTitle}>
                Gear we&rsquo;d <em>actually</em> lug to the plot.
              </h2>
            </div>
            <p className={styles.secIntro}>
              Honestly-chosen tools and supplies for this month&rsquo;s garden jobs. We earn
              a small cut when you shop — it keeps the directory free and independent.
            </p>
          </div>

          <div className={styles.picks}>
            {PICKS.map((p) => (
              <article key={p.id} className={styles.pick}>
                <div className={styles.pickImg} aria-hidden="true">
                  <span className={styles.pickImgLabel}>{p.phLabel}</span>
                </div>
                <div className={styles.pickBody}>
                  <div className={styles.pickCategory}>{p.category}</div>
                  <h4 className={styles.pickName}>{p.name}</h4>
                  <p className={styles.pickDesc}>{p.description}</p>
                </div>
                <div className={styles.pickFoot}>
                  <b className={styles.pickPrice}>{p.price}</b>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="sponsored nofollow noopener noreferrer"
                    className={styles.pickCta}
                  >
                    {p.cta}
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className={styles.affDisclosure}>
            Disclosure — Some links in this section are affiliate links. We only list
            things we&rsquo;d hand to a friend on their first day at the plot. Nothing is
            sponsored.
          </div>
        </div>
      </section>

      {/* ─── 04 / FIELD JOURNAL ─── */}
      <section id="journal" className={styles.sec}>
        <div className="shell">
          <div className={styles.secHead}>
            <div>
              <div className={styles.secNum}>04 / Field journal</div>
              <h2 className={styles.secTitle}>
                Notes from the <em>plot</em>.
              </h2>
            </div>
            <p className={styles.secIntro}>
              Short, practical writing about gardening in Atlanta — red clay, humidity,
              kudzu, and the people who grow through it anyway.
            </p>
          </div>

          <div className={styles.journal}>
            {JOURNAL.map((j) => (
              <article
                key={j.id}
                className={j.feature ? styles.journalFeature : undefined}
              >
                <div className={styles.journalImg} aria-hidden="true">
                  <span className={styles.journalImgLabel}>{j.phLabel}</span>
                </div>
                <div
                  className={`${styles.journalCategory} ${
                    j.categoryVariant === "clay" ? styles.journalCategoryClay : ""
                  }`}
                >
                  {j.category}
                </div>
                <h3 className={styles.journalHeadline}>{j.headline}</h3>
                <p className={styles.journalDek}>{j.dek}</p>
                <p className={styles.journalByline}>{j.byline}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NEWSLETTER ─── */}
      <section className={`${styles.sec} ${styles.newsSection}`}>
        <div className="shell">
          <div className={styles.news}>
            <div>
              <h2 className={styles.newsTitle}>
                A <em>letter</em> from the garden, once a month.
              </h2>
              <p className={styles.newsLede}>
                What&rsquo;s ripe, what&rsquo;s rotting, which gardens just opened new
                plots, and one seasonal recipe. Free, no filler.
              </p>
              <div className={styles.newsTiny}>· 3,200 readers · Unsubscribe anytime ·</div>
            </div>
            <HomepageNewsletter />
          </div>
        </div>
      </section>
    </>
  );
}
