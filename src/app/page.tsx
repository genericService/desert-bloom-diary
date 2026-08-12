"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { BabyGrowthSlider } from "@/components/BabyGrowthSlider";
import { TimelineFilter } from "@/components/TimelineFilter";
import { EntryCard } from "@/components/EntryCard";
import { BlogSidebar } from "@/components/BlogSidebar";
import { SymptomTrackerChart } from "@/components/SymptomTrackerChart";
import { MomDocCareWidget } from "@/components/MomDocCareWidget";
import { SearchModal } from "@/components/SearchModal";
import { Footer } from "@/components/Footer";
import { DIARY_ENTRIES } from "@/data/diaryEntries";
import { filterDiaryEntries } from "@/lib/utils";
import { BookOpen } from "lucide-react";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [trimesterFilter, setTrimesterFilter] = useState("all");
  const [tagFilter, setTagFilter] = useState("all");
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  // Extract unique available tags across entries
  const availableTags = Array.from(
    new Set(DIARY_ENTRIES.flatMap((entry) => entry.tags)),
  ).sort();

  const filteredEntries = filterDiaryEntries(
    DIARY_ENTRIES,
    searchQuery,
    trimesterFilter,
    tagFilter,
  );

  const handleReset = () => {
    setSearchQuery("");
    setTrimesterFilter("all");
    setTagFilter("all");
  };

  return (
    <div className="min-h-screen flex flex-col bg-sand-50 dark:bg-stone-900 text-stone-900 dark:text-stone-100 selection:bg-terracotta-200 selection:text-terracotta-900">
      {/* Top Header */}
      <Header onSearchClick={() => setIsSearchModalOpen(true)} />

      <main className="flex-1 space-y-16 pb-20">
        {/* Story Hero Greeting */}
        <HeroSection />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Interactive 40-Week Sonoran Growth Slider */}
          <section id="growth-tracker-section">
            <BabyGrowthSlider />
          </section>

          {/* Main 2-Column Personal Blog Section (Main Feed + Sidebar) */}
          <section id="entries-section" className="space-y-8 scroll-mt-24">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-rose-100 dark:border-stone-800 pb-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100/80 dark:bg-rose-950 text-rose-800 dark:text-rose-300 text-xs font-semibold uppercase tracking-wider mb-2">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Personal Journal Entries</span>
                </div>
                <h2 className="font-serif text-3xl font-bold text-stone-900 dark:text-stone-100">
                  Maya’s Tempe Journal Entries
                </h2>
              </div>

              <div className="text-xs text-stone-500 dark:text-stone-400 font-light italic">
                40-Week Real-Time Log &bull; Aug 2025 to Apr 2026
              </div>
            </div>

            {/* Filter controls bar */}
            <TimelineFilter
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              trimesterFilter={trimesterFilter}
              onTrimesterChange={setTrimesterFilter}
              tagFilter={tagFilter}
              onTagChange={setTagFilter}
              availableTags={availableTags}
              totalResults={filteredEntries.length}
              onReset={handleReset}
            />

            {/* 2-Column Blog Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Main Entries Feed (8 Cols) */}
              <div className="lg:col-span-8 space-y-8">
                {filteredEntries.length === 0 ? (
                  <div className="bg-white dark:bg-stone-800 rounded-3xl p-12 text-center border border-rose-100 dark:border-stone-700 space-y-3">
                    <BookOpen className="w-10 h-10 mx-auto text-terracotta-400" />
                    <h3 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100">
                      No matching entries found
                    </h3>
                    <p className="text-sm text-stone-500 dark:text-stone-400 max-w-md mx-auto font-light">
                      Try adjusting your search terms or filter selection to
                      view entries from other weeks.
                    </p>
                    <button
                      onClick={handleReset}
                      className="px-4 py-2 rounded-xl bg-terracotta-600 text-white font-bold text-xs hover:bg-terracotta-700 transition-colors shadow-2xs"
                    >
                      Reset All Filters
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredEntries.map((entry) => (
                      <EntryCard key={entry.id} entry={entry} />
                    ))}
                  </div>
                )}
              </div>

              {/* Classic Personal Blog Sidebar (4 Cols) */}
              <div className="lg:col-span-4">
                <BlogSidebar
                  entries={DIARY_ENTRIES}
                  currentTrimester={trimesterFilter}
                  onTrimesterSelect={setTrimesterFilter}
                />
              </div>
            </div>
          </section>

          {/* Maternal Wellbeing & Symptom Trends */}
          <section id="symptoms-section">
            <SymptomTrackerChart entries={DIARY_ENTRIES} />
          </section>

          {/* MomDoc Tempe Care Spotlight Banner */}
          <section id="momdoc-section">
            <MomDocCareWidget />
          </section>
        </div>
      </main>

      {/* Global Instant Search Modal */}
      <SearchModal
        entries={DIARY_ENTRIES}
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
