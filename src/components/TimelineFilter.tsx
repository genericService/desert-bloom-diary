"use client";

import React from "react";
import { Search, Filter, RefreshCw } from "lucide-react";

interface TimelineFilterProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  trimesterFilter: string;
  onTrimesterChange: (t: string) => void;
  tagFilter: string;
  onTagChange: (tag: string) => void;
  availableTags: string[];
  totalResults: number;
  onReset: () => void;
}

export function TimelineFilter({
  searchQuery,
  onSearchChange,
  trimesterFilter,
  onTrimesterChange,
  tagFilter,
  onTagChange,
  availableTags,
  totalResults,
  onReset,
}: TimelineFilterProps) {
  const trimesterOptions = [
    { value: "all", label: "All Entries (W4-W40)" },
    { value: "1", label: "1st Trimester (W4-12)" },
    { value: "2", label: "2nd Trimester (W13-27)" },
    { value: "3", label: "3rd Trimester (W28-40)" },
  ];

  const hasActiveFilters =
    searchQuery !== "" || trimesterFilter !== "all" || tagFilter !== "all";

  return (
    <div className="bg-white dark:bg-stone-800 rounded-3xl p-6 border border-rose-100 dark:border-stone-700 shadow-md space-y-6">
      {/* Top Search Input & Controls */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* Search Box */}
        <div className="relative w-full md:w-96">
          <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-rose-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search entries, MomDoc care, symptoms, Tempe spots..."
            className="w-full pl-11 pr-4 py-3 rounded-2xl bg-rose-50/50 dark:bg-stone-900 border border-rose-100 dark:border-stone-700 text-stone-900 dark:text-stone-100 placeholder-stone-400 text-sm focus:outline-none focus:ring-2 focus:ring-rose-400 transition-all font-light"
          />
        </div>

        {/* Trimester Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto bg-rose-50/70 dark:bg-stone-900 p-1.5 rounded-2xl border border-rose-100 dark:border-stone-700">
          {trimesterOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => onTrimesterChange(opt.value)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                trimesterFilter === opt.value
                  ? "bg-terracotta-600 text-white shadow-xs font-bold"
                  : "text-stone-700 dark:text-stone-300 hover:bg-rose-100/70 dark:hover:bg-stone-800"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Secondary Tag Dropdown & Reset Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-rose-100 dark:border-stone-700 text-xs">
        <div className="flex items-center gap-3">
          <Filter className="w-4 h-4 text-rose-500 dark:text-rose-400" />
          <span className="font-semibold text-stone-700 dark:text-stone-300">
            Filter by Topic:
          </span>

          <select
            value={tagFilter}
            onChange={(e) => onTagChange(e.target.value)}
            className="px-3.5 py-2 rounded-xl bg-rose-50/60 dark:bg-stone-900 border border-rose-100 dark:border-stone-700 text-stone-800 dark:text-stone-200 text-xs focus:outline-none focus:ring-2 focus:ring-rose-400"
          >
            <option value="all">All Topics</option>
            {availableTags.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-stone-500 dark:text-stone-400 font-light">
            Showing{" "}
            <strong className="text-stone-900 dark:text-stone-100 font-serif font-bold">
              {totalResults}
            </strong>{" "}
            entries
          </span>

          {hasActiveFilters && (
            <button
              onClick={onReset}
              className="flex items-center gap-1.5 text-rose-600 dark:text-rose-400 hover:underline font-bold"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
