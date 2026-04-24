import Link from "next/link";
import type { Metadata } from "next";
import { ChevronLeft, Sprout, Sun, Droplets, Shovel, HeartHandshake } from "lucide-react";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Your First Season: A Beginner's Guide to Atlanta Community Gardens",
  description:
    "Everything a first-time community gardener in Atlanta needs — picking a plot, prepping Georgia red clay, what to plant, and the mistakes to avoid.",
};

export default function FirstSeasonGuide() {
  return (
    <div className="container">
      <Link href="/guides" className={styles.back}>
        <ChevronLeft size={16} /> All Guides
      </Link>

      <article className={styles.article}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Beginner Guide · 8 min read</span>
          <h1 className={styles.title}>
            Your First Season in an Atlanta Community Garden
          </h1>
          <p className={styles.lede}>
            You&rsquo;ve found a plot — or you&rsquo;re about to. Here&rsquo;s everything a first-time
            community gardener in metro Atlanta needs to know, from choosing your space to harvesting
            your first tomatoes.
          </p>
        </header>

        <section className={styles.section}>
          <h2>
            <Sun size={22} /> 1. Choose the right plot
          </h2>
          <p>
            Before you pay any dues, visit the garden on a sunny afternoon and stand in the plot
            you&rsquo;d be renting. Most summer vegetables — tomatoes, peppers, squash, beans — need
            at least <strong>6 to 8 hours of direct sun</strong> per day. In Atlanta&rsquo;s dense
            tree canopy, that is harder to find than you&rsquo;d expect.
          </p>
          <p>
            Things to look for:
          </p>
          <ul>
            <li>
              <strong>Sun exposure</strong> — south-facing plots get the most sun. North-facing plots
              shaded by tall trees may only suit leafy greens and herbs.
            </li>
            <li>
              <strong>Water access</strong> — every minute spent hauling a watering can is a minute
              you won&rsquo;t garden. A plot near the spigot is worth picking.
            </li>
            <li>
              <strong>Plot size</strong> — if 4&times;8 feet is offered, take it. First-year
              gardeners almost always overplant. A full 10&times;20 bed becomes a weed farm by July.
            </li>
            <li>
              <strong>Fencing</strong> — if the garden isn&rsquo;t fenced, deer and rabbits will help
              themselves. Plan on individual cages or accept the tuition.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>
            <Shovel size={22} /> 2. Prep the soil (Atlanta&rsquo;s red clay, specifically)
          </h2>
          <p>
            Metro Atlanta sits on heavy Georgia clay — great at holding nutrients, terrible at
            drainage. Most community garden plots have been amended over the years, but you should
            still expect to:
          </p>
          <ul>
            <li>
              <strong>Add compost.</strong> Two to four inches of finished compost, forked in to the
              top 6 inches of soil, is the single best thing you can do in year one. Many Atlanta
              gardens have a shared compost pile or offer bulk compost at a discount.
            </li>
            <li>
              <strong>Check pH.</strong> Georgia soils tend acidic. Vegetables want 6.0–6.8. A $15 pH
              test from a hardware store is enough. If you&rsquo;re below 6.0, lime in fall or early
              winter works slowly through to spring.
            </li>
            <li>
              <strong>Don&rsquo;t till in spring.</strong> Wet clay compacts into bricks under a tiller.
              Wait until a handful squeezed in your palm falls apart when poked.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>
            <Sprout size={22} /> 3. Plant crops that forgive mistakes
          </h2>
          <p>
            Resist the urge to grow cauliflower, artichokes, and heirloom melons your first year.
            The following crops are productive, low-drama, and forgiving of Atlanta&rsquo;s wild
            weather swings:
          </p>
          <ul>
            <li>
              <strong>Cherry tomatoes</strong> — Sungold or Sweet 100. One plant will outproduce a
              family of four. Cage them on day one; tomato vines grow faster than you think.
            </li>
            <li>
              <strong>Bush beans</strong> — direct-sow in April, eat in six weeks. Sow another round
              in July for fall.
            </li>
            <li>
              <strong>Summer squash or zucchini</strong> — one plant is plenty. Harvest when fruits
              are 6–8 inches; larger ones turn into baseball bats.
            </li>
            <li>
              <strong>Peppers</strong> — more heat-tolerant than tomatoes and shrug off July
              humidity. Bell, jalapeño, and shishito are all easy.
            </li>
            <li>
              <strong>Basil &amp; parsley</strong> — low effort, high reward. Plant more than you
              think you need.
            </li>
            <li>
              <strong>Fall greens</strong> — start lettuce, kale, and arugula in September. Atlanta
              falls are the real gardening secret.
            </li>
          </ul>
          <p className={styles.tip}>
            See our{" "}
            <Link href="/guides/planting-calendar" className={styles.inlineLink}>
              month-by-month Atlanta planting calendar
            </Link>{" "}
            for specific timing.
          </p>
        </section>

        <section className={styles.section}>
          <h2>
            <Droplets size={22} /> 4. Build a watering routine
          </h2>
          <p>
            Atlanta summers are brutal. Shallow watering trains roots to stay near the surface,
            where they cook. Instead:
          </p>
          <ul>
            <li>
              Water <strong>deeply, twice a week</strong>, early in the morning. A slow soak for 20
              minutes beats a 5-minute sprinkle every day.
            </li>
            <li>
              Mulch with straw, pine needles, or shredded leaves 2–3 inches deep. This cuts watering
              needs in half and keeps soil temperatures down.
            </li>
            <li>
              Check the forecast before watering. If an inch of rain is coming, skip it.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>
            <HeartHandshake size={22} /> 5. Use the community
          </h2>
          <p>
            The real superpower of a community garden isn&rsquo;t the plot — it&rsquo;s the people
            gardening next to you. Most have been growing in that exact soil for years. Ask them:
          </p>
          <ul>
            <li>What pest problems show up here, and when?</li>
            <li>Which varieties have done best in this garden?</li>
            <li>Who do they recommend for mulch, compost, and starter plants?</li>
          </ul>
          <p>
            Show up to the communal workdays. Trade seedlings. It pays back more than any book.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Common first-year mistakes</h2>
          <ul>
            <li>
              <strong>Overplanting.</strong> One zucchini plant. One. Two tomatoes, max.
            </li>
            <li>
              <strong>Planting warm-season crops too early.</strong> Atlanta&rsquo;s last frost is
              around March 29. Don&rsquo;t trust the first 75&deg;F weekend in February.
            </li>
            <li>
              <strong>Ignoring fall.</strong> Many first-timers burn out in July and miss the best
              growing window of the year (September–November).
            </li>
            <li>
              <strong>No mulch.</strong> Bare soil in August is a death sentence. Mulch.
            </li>
            <li>
              <strong>Not labeling.</strong> By June, every pepper plant looks like every other
              pepper plant. Write it down.
            </li>
          </ul>
        </section>

        <section className={styles.ctaSection}>
          <h2>Ready to start?</h2>
          <p>
            Browse the <Link href="/gardens" className={styles.inlineLink}>directory of Atlanta
            community gardens</Link>, check{" "}
            <Link href="/guides/planting-calendar" className={styles.inlineLink}>
              what to plant this month
            </Link>
            , and see our{" "}
            <Link href="/gear" className={styles.inlineLink}>recommended gear</Link> for the tools we
            actually use.
          </p>
        </section>
      </article>
    </div>
  );
}
