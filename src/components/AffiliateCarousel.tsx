import { AffiliateProduct } from "../types";
import styles from "./AffiliateCarousel.module.css";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

interface Props {
  products: AffiliateProduct[];
}

export default function AffiliateCarousel({ products }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Recommended Gear</h2>
        <Link href="/gear" className={styles.viewAll}>View All</Link>
      </div>
      <div className={styles.grid}>
        {products.map((product) => (
          <a
            key={product.id}
            href={product.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`glass-panel ${styles.card}`}
          >
            <div className={styles.imagePlaceholder}>
              <ShoppingCart className={styles.icon} size={32} />
            </div>
            <div className={styles.content}>
              <span className={styles.category}>{product.category}</span>
              <h3 className={styles.productTitle}>{product.title}</h3>
              <p className={styles.price}>{product.price}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
