import { AffiliateProduct } from "../types";
import styles from "./AffiliateCarousel.module.css";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Props {
  products: AffiliateProduct[];
  title?: string;
  showViewAll?: boolean;
}

export default function AffiliateCarousel({ products, title = "Recommended Gear", showViewAll = true }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        {showViewAll && (
          <Link href="/gear" className={styles.viewAll}>View All</Link>
        )}
      </div>
      <div className={styles.grid}>
        {products.map((product) => (
          <a
            key={product.id}
            href={product.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className={`glass-panel ${styles.card}`}
          >
            <div className={styles.imageWrapper}>
              {product.imageUrl ? (
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className={styles.image}
                />
              ) : (
                <div className={styles.imagePlaceholder}>
                  <ShoppingCart className={styles.icon} size={32} />
                </div>
              )}
            </div>
            <div className={styles.content}>
              <span className={styles.category}>{product.category}</span>
              <h3 className={styles.productTitle}>{product.title}</h3>
              <p className={styles.description}>{product.description}</p>
              <div className={styles.cta}>
                <span className={styles.price}>{product.price}</span>
                <span className={styles.shopLink}>Shop <ShoppingCart size={14} /></span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
