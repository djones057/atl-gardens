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
  const availableCount = gardens.filter((g) => g.plotAvailability === "Available").length;
  const [hero, ...side] = gardens.slice(0, 3);

  return (
    <>
      {/* ─── HERO ─── */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <span className={styles.heroLabel}>Atlanta metro · Zone 7b / 8a</span>
          <h1 className={styles.heroTitle}>
            Find your<br />
            plot in<br />
            <span>Atlanta.</span>
          </h1>
          <p className={styles.heroSubtitle}>
            A free directory of {gardens.length} community gardens, a local planting
            calendar, and trusted gear picks — all in one place.
          </p>
          <div className={styles.ctaRow}>
            <Link href="/gardens" className={styles.btnPrimary}>
              Find a Garden <ArrowRight size={17} />
            </Link>
            <Link href="/guides/planting-calendar" className={styles.btnText}>
              What to Plant in {currentMonth} →
            </Link>
          </div>
        </div>

        <div className={styles.heroMedia}>
          <Image
            src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=1400&auto=format&fit=crop"
            alt="Atlanta community garden"
            fill
            priority
            sizes="50vw"
            className={styles.heroImg}
          />
          <div className={styles.heroMediaVeil} aria-hidden="true" />
        </div>
      </section>

      {/* ─── STATS ─── */}
      <div className={`container ${styles.statsWrap}`}>
        <div className={styles.statsRule} />
        <dl className={styles.stats}>
          <div className={styles.statItem}>
            <dt className={styles.statNum}>{gardens.length}+</dt>
            <dd className={styles.statLabel}>Community Gardens</dd>
          </div>
          <div className={styles.statItem}>
            <dt className={styles.statNum}>{availableCount}</dt>
            <dd className={styles.statLabel}>Open for Applications</dd>
          </div>
          <div className={styles.statItem}>
            <dt className={styles.statNum}>12</dt>
            <dd className={styles.statLabel}>Months of Local Tips</dd>
          </div>
        </dl>
        <div className={styles.statsRule} />
      </div>

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
