"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { EntryCard } from "@/components/EntryCard";
import { BlogSidebar } from "@/components/BlogSidebar";
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
      {/* Blogspot / Squarespace Style Header */}
      <Header onSearchClick={() => setIsSearchModalOpen(true)} />

      <main className="flex-1 pb-20">
        {/* Personal Greeting Hero */}
        <HeroSection />

        {/* Main 2-Column Personal Lifestyle Blog Feed */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Personal Post Feed (8 Cols) */}
            <div className="lg:col-span-8 space-y-10">
              <div className="flex items-center justify-between border-b border-rose-100 dark:border-stone-800 pb-4">
                <h2 className="font-serif text-3xl font-bold text-stone-900 dark:text-stone-100">
                  {trimesterFilter === "all"
                    ? "Latest Journal Entries"
                    : `${trimesterFilter === "1" ? "First" : trimesterFilter === "2" ? "Second" : "Third"} Trimester Entries`}
                </h2>

                {trimesterFilter !== "all" && (
                  <button
                    onClick={handleReset}
                    className="text-xs font-semibold text-terracotta-600 hover:underline"
                  >
                    View All Posts
                  </button>
                )}
              </div>

              {/* Blog Post Stream */}
              {filteredEntries.length === 0 ? (
                <div className="bg-white dark:bg-stone-800 rounded-3xl p-12 text-center border border-rose-100 dark:border-stone-700 space-y-3">
                  <BookOpen className="w-10 h-10 mx-auto text-terracotta-400" />
                  <h3 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100">
                    No posts found
                  </h3>
                  <p className="text-sm text-stone-500 dark:text-stone-400 max-w-md mx-auto font-light">
                    Try adjusting your search terms or selecting another archive
                    from the sidebar.
                  </p>
                  <button
                    onClick={handleReset}
                    className="px-4 py-2 rounded-xl bg-terracotta-600 text-white font-bold text-xs hover:bg-terracotta-700 transition-colors shadow-2xs"
                  >
                    Reset Filter
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredEntries.map((entry) => (
                    <EntryCard key={entry.id} entry={entry} />
                  ))}
                </div>
              )}
            </div>

            {/* Right Column: Authentic Blogspot / Squarespace Sidebar (4 Cols) */}
            <div className="lg:col-span-4 sticky top-24">
              <BlogSidebar
                entries={DIARY_ENTRIES}
                currentTrimester={trimesterFilter}
                onTrimesterSelect={setTrimesterFilter}
              />
            </div>
          </div>
        </div>
      </main>

      {/* Global Search Modal */}
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
