import type { MetadataRoute } from "next";
import { BUSINESS, SERVICES } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = BUSINESS.url;
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/gallery`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
  ];

  const servicePages: MetadataRoute.Sitemap = SERVICES.map((service) => ({
    url: `${base}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogPosts: MetadataRoute.Sitemap = [
    {
      url: `${base}/blog/how-often-should-you-detail-your-car`,
      lastModified: new Date("2024-12-15"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${base}/blog/ceramic-coating-worth-it`,
      lastModified: new Date("2024-11-28"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];

  return [...staticPages, ...servicePages, ...blogPosts];
}
