import { MetadataRoute } from "next";
import { DIARY_ENTRIES } from "@/data/diaryEntries";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://desertbloomdiary.com";

  const entryUrls = DIARY_ENTRIES.map((entry) => ({
    url: `${baseUrl}/entry/${entry.id}`,
    lastModified: new Date(entry.date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/tracker`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/momdoc-tempe`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/my-care`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/kitchen-sink`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    ...entryUrls,
  ];
}
