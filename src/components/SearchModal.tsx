"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { DiaryEntry } from "@/types";
import { Search, X, Calendar, ArrowRight, BookOpen } from "lucide-react";
import { filterDiaryEntries } from "@/lib/utils";

interface SearchModalProps {
  entries: DiaryEntry[];
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ entries, isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const results = filterDiaryEntries(entries, query, "all", "all");

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-stone-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-2xl bg-white dark:bg-stone-800 rounded-3xl border border-sand-200 dark:border-stone-700 shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="relative p-4 border-b border-sand-200 dark:border-stone-700 flex items-center gap-3">
          <Search className="w-5 h-5 text-terracotta-600 dark:text-terracotta-400 shrink-0 ml-2" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Maya's journal (e.g., MomDoc Tempe, ultrasound, Kiwanis, glucose test)..."
            className="w-full py-2.5 bg-transparent text-stone-900 dark:text-stone-100 placeholder-stone-400 text-sm focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 rounded-lg text-stone-400 hover:text-stone-600 dark:hover:text-stone-200"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-3 py-1.5 rounded-xl bg-sand-100 dark:bg-stone-700 text-stone-700 dark:text-stone-200 text-xs font-bold hover:bg-sand-200 transition-colors"
          >
            Esc
          </button>
        </div>

        {/* Results List */}
        <div className="p-4 overflow-y-auto space-y-3 flex-1">
          {results.length === 0 ? (
            <div className="py-12 text-center text-stone-500 dark:text-stone-400 space-y-2">
              <BookOpen className="w-8 h-8 mx-auto text-stone-300 dark:text-stone-600" />
              <p className="text-sm font-medium">
                No matching diary entries found for "{query}"
              </p>
              <p className="text-xs">
                Try searching for topics like "MomDoc", "Tempe", "ultrasound",
                or "symptoms".
              </p>
            </div>
          ) : (
            results.map((entry) => (
              <Link
                key={entry.id}
                href={`/entry/${entry.id}`}
                onClick={onClose}
                className="block p-4 rounded-2xl bg-sand-50/60 dark:bg-stone-900/60 hover:bg-terracotta-50 dark:hover:bg-stone-700/80 border border-sand-200 dark:border-stone-700/60 transition-all group"
              >
                <div className="flex items-center justify-between text-xs text-stone-500 dark:text-stone-400 mb-1">
                  <span className="font-bold text-terracotta-600 dark:text-terracotta-400">
                    Week {entry.weekNumber} &bull; {entry.formattedDate}
                  </span>
                  <span>{entry.babySize.desertFruit}</span>
                </div>
                <h4 className="font-serif font-bold text-stone-900 dark:text-stone-100 text-base group-hover:text-terracotta-600 dark:group-hover:text-terracotta-400 transition-colors">
                  {entry.title}
                </h4>
                <p className="text-xs text-stone-600 dark:text-stone-300 line-clamp-2 mt-1">
                  {entry.excerpt}
                </p>
              </Link>
            ))
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3 bg-sand-100/60 dark:bg-stone-900/80 border-t border-sand-200 dark:border-stone-700 text-xs text-stone-500 dark:text-stone-400 flex items-center justify-between px-6">
          <span>{results.length} entries match your search</span>
          <span>Click entry to read full journal post</span>
        </div>
      </div>
    </div>
  );
}
