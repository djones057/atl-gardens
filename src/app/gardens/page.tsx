"use client";

import { useState } from "react";
import { gardens } from "@/data/gardens";
import GardenCard from "@/components/GardenCard";
import { Search } from "lucide-react";
import styles from "./page.module.css";

export default function GardensDirectory() {
  const [zipSearch, setZipSearch] = useState("");

  const filteredGardens = gardens.filter((garden) => {
    if (!zipSearch) return true;
    return garden.zipCode.includes(zipSearch);
  });

  return (
    <div className="container">
      <div className={styles.header}>
        <h1 className={styles.title}>Atlanta Community Gardens</h1>
        <p className={styles.subtitle}>
          Find a plot, join a community, and start growing. Browse our comprehensive directory of 
          community gardens across the Atlanta metro area.
        </p>
        
        <div className={styles.searchContainer}>
          <div className={styles.searchWrapper}>
            <Search className={styles.searchIcon} aria-hidden="true" size={20} />
            <input 
              type="text" 
              placeholder="Search by ZIP code..." 
              value={zipSearch}
              onChange={(e) => setZipSearch(e.target.value)}
              className={styles.searchInput}
              style={{ width: '100%', padding: '16px 20px 16px 50px', fontSize: '18px', maxWidth: '600px' }}
              aria-label="Search by ZIP code"
            />
          </div>
          {zipSearch && (
            <p className={styles.resultsCount}>
              Found {filteredGardens.length} {filteredGardens.length === 1 ? 'garden' : 'gardens'} in {zipSearch}
            </p>
          )}
        </div>
      </div>

      <div className={styles.contentLayout}>
        <div className={styles.listContainer}>
          {filteredGardens.length > 0 ? (
            <div className={styles.grid}>
              {filteredGardens.map((garden) => (
                <GardenCard key={garden.id} garden={garden} />
              ))}
            </div>
          ) : (
            <div className={styles.emptyState}>
              <p>No gardens found for ZIP code "{zipSearch}".</p>
              <button onClick={() => setZipSearch("")} className={styles.clearButton}>
                Clear Search
              </button>
            </div>
          )}
        </div>

        <div className={styles.mapContainer}>
          <iframe 
            src={`https://maps.google.com/maps?q=community+gardens+Atlanta+${zipSearch}&t=&z=11&ie=UTF8&iwloc=&output=embed`}
            width="100%" 
            height="100%" 
            style={{ border: 0, borderRadius: 'var(--radius-lg)' }}
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Community Gardens Map"
          />
        </div>
      </div>
    </div>
  );
}
