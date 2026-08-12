"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { DiaryEntry } from "@/types";
import { getTrimesterBadgeColor, getTrimesterLabel } from "@/lib/utils";
import {
  Calendar,
  Clock,
  Bookmark,
  MapPin,
  Heart,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

interface EntryCardProps {
  entry: DiaryEntry;
  onSelect?: (entry: DiaryEntry) => void;
}

export function EntryCard({ entry, onSelect }: EntryCardProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("desert_bloom_bookmarks");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setIsBookmarked(parsed.includes(entry.id));
        }
      }
    } catch (e) {
      console.error(e);
    }
  }, [entry.id]);

  const toggleBookmark = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const saved = localStorage.getItem("desert_bloom_bookmarks");
      let bookmarks: string[] = saved ? JSON.parse(saved) : [];
      if (!Array.isArray(bookmarks)) bookmarks = [];

      if (bookmarks.includes(entry.id)) {
        bookmarks = bookmarks.filter((id) => id !== entry.id);
        setIsBookmarked(false);
      } else {
        bookmarks.push(entry.id);
        setIsBookmarked(true);
      }
      localStorage.setItem("desert_bloom_bookmarks", JSON.stringify(bookmarks));
      window.dispatchEvent(new Event("bookmark-updated"));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <article className="group relative bg-white dark:bg-stone-800 rounded-3xl border border-rose-100 dark:border-stone-700/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden">
      {/* Top Banner image */}
      <div className="relative h-52 w-full bg-rose-50 dark:bg-stone-700 overflow-hidden">
        {/* Image overlay */}
        <img
          src={entry.coverImage}
          alt={entry.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/85 via-stone-900/20 to-transparent" />

        {/* Top Badges overlay */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="bg-stone-900/80 backdrop-blur-md text-white text-xs font-serif font-bold px-3 py-1 rounded-xl shadow-xs border border-white/20">
              Week {entry.weekNumber}
            </span>
            {entry.isMilestone && (
              <span className="bg-rose-500/90 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-xl flex items-center gap-1 shadow-xs">
                <Sparkles className="w-3 h-3" />
                Milestone
              </span>
            )}
          </div>

          <button
            onClick={toggleBookmark}
            className={`p-2 rounded-xl backdrop-blur-md transition-colors ${
              isBookmarked
                ? "bg-terracotta-600 text-white"
                : "bg-stone-900/60 text-white/90 hover:bg-stone-900/90"
            }`}
            title={isBookmarked ? "Remove Bookmark" : "Bookmark Entry"}
            aria-label="Bookmark entry"
          >
            <Bookmark
              className={`w-4 h-4 ${isBookmarked ? "fill-current" : ""}`}
            />
          </button>
        </div>

        {/* Bottom image overlay details */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white/90">
          <span
            className={`px-3 py-0.5 rounded-full text-[11px] font-bold backdrop-blur-md shadow-2xs border ${getTrimesterBadgeColor(entry.trimester)}`}
          >
            {getTrimesterLabel(entry.trimester)}
          </span>
          <span className="flex items-center gap-1 text-[11px] bg-stone-900/70 px-2.5 py-0.5 rounded-lg backdrop-blur-xs">
            <Clock className="w-3 h-3 text-terracotta-300" />
            {entry.readTime}
          </span>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          {/* Publication Date */}
          <div className="flex items-center gap-2 text-xs text-stone-500 dark:text-stone-400 font-medium">
            <Calendar className="w-3.5 h-3.5 text-rose-500 dark:text-rose-400" />
            <span>{entry.formattedDate}</span>
            <span>&bull;</span>
            <span className="text-terracotta-700 dark:text-terracotta-300 font-serif italic">
              {entry.babySize.desertFruit}
            </span>
          </div>

          {/* Entry Title */}
          <h2 className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100 group-hover:text-terracotta-600 dark:group-hover:text-terracotta-400 transition-colors line-clamp-2 leading-snug">
            <Link href={`/entry/${entry.id}`} onClick={() => onSelect?.(entry)}>
              {entry.title}
            </Link>
          </h2>

          {/* Excerpt */}
          <p className="text-sm text-stone-600 dark:text-stone-300 line-clamp-3 leading-relaxed font-light">
            {entry.excerpt}
          </p>
        </div>

        {/* Highlight Metadata Badges */}
        <div className="pt-3 space-y-3 border-t border-rose-100 dark:border-stone-700/60">
          {/* MomDoc Tempe Highlight Pill */}
          <div className="bg-rose-50/60 dark:bg-stone-900/60 p-2.5 rounded-2xl border border-rose-100 dark:border-stone-700 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2 text-stone-700 dark:text-stone-300 min-w-0">
              <Heart className="w-3.5 h-3.5 text-rose-500 shrink-0 fill-current" />
              <span className="font-semibold text-stone-900 dark:text-stone-100 truncate">
                MomDoc: {entry.momdocHighlight.title}
              </span>
            </div>
            <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-lg bg-sage-100 dark:bg-sage-950 text-sage-800 dark:text-sage-300 shrink-0">
              {entry.momdocHighlight.careType}
            </span>
          </div>

          {/* Tempe Spot & Tags */}
          <div className="flex items-center justify-between text-xs text-stone-500 dark:text-stone-400">
            <div className="flex items-center gap-1.5 truncate max-w-[200px]">
              <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
              <span className="truncate italic">
                {entry.tempeSpotlight.location}
              </span>
            </div>

            <Link
              href={`/entry/${entry.id}`}
              onClick={() => onSelect?.(entry)}
              className="inline-flex items-center gap-1 text-terracotta-600 dark:text-terracotta-400 font-bold hover:underline"
            >
              <span>Read</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
