import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/lib/potting-shed-data";
import styles from "./ProductCard.module.css";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <a
      href={product.affiliateUrl}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className={styles.card}
    >
      <div className={styles.imageWrap}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 900px) 33vw, (min-width: 600px) 50vw, 100vw"
          className={styles.image}
        />
      </div>
      <div className={styles.body}>
        <span className={styles.category}>{product.category}</span>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.description}>{product.description}</p>
        <div className={styles.footer}>
          <span className={styles.price}>{product.price}</span>
        </div>
        <span className={styles.cta}>
          Shop on Amazon <ArrowRight size={14} />
        </span>
      </div>
    </a>
  );
}
