import type { MetadataRoute } from "next";
import site from "@/content/site.json";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/divisions`, changeFrequency: "monthly", priority: 0.7 },
  ];
}
