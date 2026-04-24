import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`shell ${styles.inner}`}>
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <div className={styles.brand}>
              Grow something <em>together</em>.
            </div>
            <div className={styles.contact}>
              Atlanta, GA · hello@atlgardens.com
            </div>
          </div>

          <div className={styles.col}>
            <h5>Directory</h5>
            <ul>
              <li><Link href="/gardens">All gardens</Link></li>
              <li><Link href="/gardens">By neighborhood</Link></li>
              <li><Link href="/gardens">Open plots</Link></li>
              <li>
                <a href="mailto:hello@atlgardens.com?subject=Add%20a%20garden">
                  Add a garden
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.col}>
            <h5>Learn</h5>
            <ul>
              <li><Link href="/guides/planting-calendar">Growing calendar</Link></li>
              <li><Link href="/guides/first-season">Beginner guides</Link></li>
              <li><Link href="/potting-shed">Seasonal picks</Link></li>
              <li><Link href="/guides">Field journal</Link></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h5>About</h5>
            <ul>
              <li><Link href="/about">Our mission</Link></li>
              <li><Link href="/about">Affiliate disclosure</Link></li>
              <li>
                <a href="mailto:partnerships@atlgardens.com">Partner with us</a>
              </li>
              <li><Link href="/newsletter">Newsletter</Link></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>
            © {new Date().getFullYear()} ATL Community Gardens · Built by volunteers
          </span>
          <span>v 0.1 · Updated weekly</span>
        </div>
      </div>
    </footer>
  );
}
