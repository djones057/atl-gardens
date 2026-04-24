import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { gardens } from "@/data/gardens";
import { products as shedProducts } from "@/lib/potting-shed-data";
import ProductCard from "@/components/ProductCard";
import { plantingCalendar } from "@/data/plantingCalendar";
import { ArrowRight, MapPin, CheckCircle2, Clock, Ban, HelpCircle } from "lucide-react";
import type { Garden } from "@/types";

function AvailabilityBadge({ garden }: { garden: Garden }) {
  const isVerified = garden.verified !== false;
  if (!isVerified) return <span className={styles.badge} data-status="Unverified">Listing</span>;
  const icons: Record<string, React.ReactNode> = {
    Available: <CheckCircle2 size={12} />,
    Waitlist: <Clock size={12} />,
    Full: <Ban size={12} />,
    Unknown: <HelpCircle size={12} />,
  };
  return (
    <span className={styles.badge} data-status={garden.plotAvailability}>
      {icons[garden.plotAvailability]}
      {garden.plotAvailability}
    </span>
  );
}

export default function Home() {
  const currentMonth = new Date().toLocaleString("en-US", { month: "long" });
  const thisMonth = plantingCalendar.find((m) => m.month === currentMonth);
  const [hero, ...side] = gardens.slice(0, 3);

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

      {/* ─── FEATURED GARDENS ─── */}
      <section className={`container ${styles.gardens}`}>
        <div className={styles.gardensHeader}>
          <span className={styles.sectionLabel}>Featured Gardens</span>
          <Link href="/gardens" className={styles.viewAll}>
            View all {gardens.length} <ArrowRight size={14} />
          </Link>
        </div>

        <div className={styles.gardensGrid}>
          {/* Hero garden — large editorial card */}
          <Link href={`/gardens/${hero.id}`} className={styles.gardenHero}>
            <div className={styles.gardenHeroImgWrap}>
              {hero.imageUrl && (
                <Image
                  src={hero.imageUrl}
                  alt={hero.name}
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className={styles.gardenHeroImgEl}
                />
              )}
            </div>
            <div className={styles.gardenHeroBody}>
              <AvailabilityBadge garden={hero} />
              <h3 className={styles.gardenHeroName}>{hero.name}</h3>
              <p className={styles.gardenHeroLoc}>
                <MapPin size={13} aria-hidden="true" />
                {hero.neighborhood}, {hero.zipCode}
              </p>
              <p className={styles.gardenHeroDesc}>
                {hero.description.length > 130
                  ? `${hero.description.slice(0, 130).trimEnd()}…`
                  : hero.description}
              </p>
              <span className={styles.gardenHeroLink}>
                View garden <ArrowRight size={14} />
              </span>
            </div>
          </Link>

          {/* Side gardens — editorial list cards */}
          <div className={styles.gardenSide}>
            {side.map((g, i) => (
              <Link key={g.id} href={`/gardens/${g.id}`} className={styles.gardenCard}>
                <span className={styles.gardenCardNum}>0{i + 2}</span>
                <div className={styles.gardenCardBody}>
                  <AvailabilityBadge garden={g} />
                  <h3 className={styles.gardenCardName}>{g.name}</h3>
                  <p className={styles.gardenCardLoc}>
                    <MapPin size={12} aria-hidden="true" />
                    {g.neighborhood}, {g.zipCode}
                  </p>
                  {g.amenities.length > 0 && (
                    <p className={styles.gardenCardAmenities}>
                      {g.amenities.slice(0, 3).join(" · ")}
                    </p>
                  )}
                </div>
                {g.imageUrl && (
                  <div className={styles.gardenCardThumb}>
                    <Image
                      src={g.imageUrl}
                      alt={g.name}
                      fill
                      sizes="96px"
                      className={styles.gardenCardThumbImg}
                    />
                  </div>
                )}
              </Link>
            ))}
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
