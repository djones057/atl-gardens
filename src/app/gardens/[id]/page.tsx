import { gardens } from "@/data/gardens";
import { products as shedProducts } from "@/lib/potting-shed-data";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./page.module.css";
import { MapPin, Globe, CheckCircle2, Clock, Sprout, HelpCircle, Info, Ban } from "lucide-react";
import { notFound } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";

export function generateStaticParams() {
  return gardens.map((g) => ({ id: g.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const garden = gardens.find((g) => g.id === id);
  if (!garden) return {};
  return {
    title: `${garden.name} | ATL Community Gardens`,
    description: garden.description,
    openGraph: {
      title: garden.name,
      description: garden.description,
      images: garden.imageUrl ? [{ url: garden.imageUrl }] : undefined,
      type: "article",
    },
  };
}

export default async function GardenDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const garden = gardens.find((g) => g.id === id);

  if (!garden) {
    notFound();
  }

  const isVerified = garden.verified !== false;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: garden.name,
    description: garden.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: garden.address,
      addressLocality: garden.neighborhood,
      addressRegion: "GA",
      postalCode: garden.zipCode,
      addressCountry: "US",
    },
    ...(garden.imageUrl && { image: garden.imageUrl }),
    ...(garden.website && { url: garden.website }),
    ...(garden.foundingYear && { foundingDate: String(garden.foundingYear) }),
  };

  return (
    <div className="container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className={styles.hero}>
        {garden.imageUrl ? (
          <Image
            src={garden.imageUrl}
            alt={garden.name}
            fill
            priority
            sizes="100vw"
            className={styles.heroImage}
          />
        ) : (
          <div className={styles.imagePlaceholder}>
            <Sprout size={64} className={styles.placeholderIcon} />
          </div>
        )}
      </div>

      <div className={styles.content}>
        <div className={styles.mainInfo}>
          <div className={styles.header}>
            <h1 className={styles.title}>{garden.name}</h1>
            {isVerified ? (
              <div className={styles.badge} data-status={garden.plotAvailability}>
                {garden.plotAvailability === "Available" && <CheckCircle2 size={16} />}
                {garden.plotAvailability === "Waitlist" && <Clock size={16} />}
                {garden.plotAvailability === "Full" && <Ban size={16} />}
                {garden.plotAvailability === "Unknown" && <HelpCircle size={16} />}
                {garden.plotAvailability}
              </div>
            ) : (
              <div className={styles.badge} data-status="Unverified">
                <Info size={16} />
                Listing
              </div>
            )}
          </div>

          <div className={styles.meta}>
            <p className={styles.location}>
              <MapPin size={18} className={styles.icon} />
              {garden.address}
            </p>
            {garden.website && (
              <a
                href={garden.website}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.website}
              >
                <Globe size={18} className={styles.icon} />
                Visit Website
              </a>
            )}
          </div>

          {!isVerified && (
            <div className={styles.verifyCallout}>
              <Info size={20} className={styles.verifyIcon} />
              <div>
                <strong>We&rsquo;re still verifying this listing.</strong>
                <p>
                  Contact the garden directly to confirm plot availability, membership fees, and
                  visiting hours. Know the details? Help us verify this listing by emailing{" "}
                  <a href="mailto:corrections@atlgardens.com">corrections@atlgardens.com</a>.
                </p>
              </div>
            </div>
          )}

          <div className={styles.section}>
            <h2>About this Garden</h2>
            {garden.foundingYear && (
              <p className={styles.founded}>Established in {garden.foundingYear}</p>
            )}
            <p className={styles.description}>{garden.description}</p>
          </div>

          {(garden.visitingHours || garden.membershipCost) && (
            <div className={styles.section}>
              <h2>Visitor &amp; Member Info</h2>
              <div className={styles.infoGrid}>
                {garden.visitingHours && (
                  <div className={styles.infoCard}>
                    <strong>Visiting Hours</strong>
                    <p>{garden.visitingHours}</p>
                  </div>
                )}
                {garden.membershipCost && (
                  <div className={styles.infoCard}>
                    <strong>Membership Cost</strong>
                    <p>{garden.membershipCost}</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {garden.amenities.length > 0 && (
            <div className={styles.section}>
              <h2>Amenities &amp; Features</h2>
              <ul className={styles.amenitiesList}>
                {garden.amenities.map((amenity, i) => (
                  <li key={i} className={styles.amenityItem}>
                    <CheckCircle2 size={16} className={styles.checkIcon} />
                    {amenity}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {garden.rules && garden.rules.length > 0 && (
            <div className={styles.section}>
              <h2>Garden Rules</h2>
              <ul className={styles.rulesList}>
                {garden.rules.map((rule, i) => (
                  <li key={i} className={styles.ruleItem}>
                    • {rule}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className={styles.sidebar}>
          <div className={`glass-panel ${styles.sidebarCard}`}>
            <h3>Interested in joining?</h3>
            <p>
              {isVerified
                ? "Community gardens are a great way to grow your own food and meet neighbors."
                : "Reach out to the garden directly using their website or contact info to learn how to get involved."}
            </p>
            {isVerified && (
              <a
                href={garden.website ?? `mailto:hello@atlgardens.com?subject=Plot inquiry — ${encodeURIComponent(garden.name)}`}
                target={garden.website ? "_blank" : undefined}
                rel={garden.website ? "noopener noreferrer" : undefined}
                className={styles.btnPrimary}
              >
                {garden.plotAvailability === "Available" ? "Apply for a Plot" : "Join Waitlist"}
              </a>
            )}
            {garden.website && !isVerified && (
              <a
                href={garden.website}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnPrimary}
              >
                Visit Garden Website
              </a>
            )}
          </div>
        </div>
      </div>

      <div className={styles.affiliateSection}>
        <div className={styles.affiliateHeader}>
          <h2 className={styles.affiliateTitle}>From The Potting Shed</h2>
          <Link href="/potting-shed" className={styles.affiliateViewAll}>
            Browse all <ArrowRight size={14} />
          </Link>
        </div>
        <div className={styles.affiliateGrid}>
          {shedProducts.slice(0, 3).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
