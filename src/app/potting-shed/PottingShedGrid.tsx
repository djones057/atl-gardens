"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { PRODUCT_CATEGORIES, type Product, type ProductCategory } from "@/lib/potting-shed-data";
import styles from "./page.module.css";

type Filter = "All" | ProductCategory;

const FILTERS: Filter[] = ["All", ...PRODUCT_CATEGORIES];

interface Props {
  products: Product[];
}

export default function PottingShedGrid({ products }: Props) {
  const [active, setActive] = useState<Filter>("All");

  const visible = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <>
      <div className={styles.filters} role="tablist" aria-label="Filter products by category">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            role="tab"
            aria-selected={active === f}
            className={`${styles.filter} ${active === f ? styles.filterActive : ""}`}
            onClick={() => setActive(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {visible.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </>
  );
}
