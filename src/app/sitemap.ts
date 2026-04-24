import type { MetadataRoute } from "next";
import { gardens } from "@/data/gardens";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://atlgardens.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/gardens",
    "/nurseries",
    "/gear",
    "/guides",
    "/guides/planting-calendar",
    "/about",
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1.0 : 0.8,
  }));

  const gardenRoutes: MetadataRoute.Sitemap = gardens.map((g) => ({
    url: `${siteUrl}/gardens/${g.id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: g.verified === false ? 0.4 : 0.7,
  }));

  return [...staticRoutes, ...gardenRoutes];
}
