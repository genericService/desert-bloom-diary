import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { DiaryEntry, Trimester } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getTrimesterLabel(trimester: Trimester): string {
  switch (trimester) {
    case 1:
      return "First Trimester (W1-12)";
    case 2:
      return "Second Trimester (W13-27)";
    case 3:
      return "Third Trimester (W28-40)";
    case "postpartum":
      return "Fourth Trimester (Postpartum)";
    default:
      return "Pregnancy Journey";
  }
}

export function getTrimesterBadgeColor(trimester: Trimester): string {
  switch (trimester) {
    case 1:
      return "bg-amber-100 text-amber-900 border-amber-300 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-800";
    case 2:
      return "bg-emerald-100 text-emerald-900 border-emerald-300 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800";
    case 3:
      return "bg-terracotta-100 text-terracotta-900 border-terracotta-300 dark:bg-terracotta-950/60 dark:text-terracotta-300 dark:border-terracotta-800";
    case "postpartum":
      return "bg-rose-100 text-rose-900 border-rose-300 dark:bg-rose-950/60 dark:text-rose-300 dark:border-rose-800";
    default:
      return "bg-stone-100 text-stone-900 border-stone-300";
  }
}

export function filterDiaryEntries(
  entries: DiaryEntry[],
  query: string,
  trimesterFilter: string,
  tagFilter: string,
): DiaryEntry[] {
  return entries.filter((entry) => {
    // Query Search
    if (query.trim() !== "") {
      const q = query.toLowerCase();
      const matchesTitle = entry.title.toLowerCase().includes(q);
      const matchesExcerpt = entry.excerpt.toLowerCase().includes(q);
      const matchesContent = entry.content.some((p) =>
        p.toLowerCase().includes(q),
      );
      const matchesTags = entry.tags.some((t) => t.toLowerCase().includes(q));
      const matchesSymptoms = entry.symptoms.some((s) =>
        s.toLowerCase().includes(q),
      );
      const matchesTempe = entry.tempeSpotlight.location
        .toLowerCase()
        .includes(q);
      const matchesMomDoc = entry.momdocHighlight.title
        .toLowerCase()
        .includes(q);
      if (
        !matchesTitle &&
        !matchesExcerpt &&
        !matchesContent &&
        !matchesTags &&
        !matchesSymptoms &&
        !matchesTempe &&
        !matchesMomDoc
      ) {
        return false;
      }
    }

    // Trimester Filter
    if (trimesterFilter !== "all") {
      if (trimesterFilter === "1" && entry.trimester !== 1) return false;
      if (trimesterFilter === "2" && entry.trimester !== 2) return false;
      if (trimesterFilter === "3" && entry.trimester !== 3) return false;
      if (trimesterFilter === "postpartum" && entry.trimester !== "postpartum")
        return false;
    }

    // Tag Filter
    if (tagFilter !== "all") {
      if (!entry.tags.includes(tagFilter)) return false;
    }

    return true;
  });
}
