"use client";

import React, { useState } from "react";
import Link from "next/link";
import { DiaryEntry } from "@/types";
import {
  Heart,
  MapPin,
  Sparkles,
  BookOpen,
  Calendar,
  Mail,
  CheckCircle2,
  Stethoscope,
} from "lucide-react";

interface BlogSidebarProps {
  entries: DiaryEntry[];
  currentTrimester: string;
  onTrimesterSelect: (t: string) => void;
}

export function BlogSidebar({
  entries,
  currentTrimester,
  onTrimesterSelect,
}: BlogSidebarProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  // Sort entries descending to get recent posts
  const recentEntries = [...entries]
    .sort((a, b) => b.weekNumber - a.weekNumber)
    .slice(0, 4);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <aside className="space-y-8 w-full">
      {/* 1. Author Profile Card (Classic Personal Blog Style) */}
      <div className="bg-white dark:bg-stone-800 p-6 rounded-3xl border border-rose-100 dark:border-stone-700/80 shadow-md space-y-4 text-center">
        <div className="relative w-28 h-28 mx-auto rounded-full overflow-hidden border-2 border-rose-200 shadow-sm">
          <img
            src="/images/maya_rivera_portrait.jpg"
            alt="Maya Rivera portrait"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-1">
          <h3 className="font-serif font-bold text-xl text-stone-900 dark:text-stone-100">
            Hi, I’m Maya Rivera
          </h3>
          <p className="text-xs text-rose-600 dark:text-rose-400 font-serif italic">
            Tempe Designer & Mom
          </p>
        </div>

        <p className="text-xs text-stone-600 dark:text-stone-300 font-light leading-relaxed">
          Welcome to my notebook! I’m a 29-year-old graphic designer in South
          Tempe, AZ. Here I share real-time entries from our 40-week journey
          expecting baby Mateo.
        </p>

        <div className="pt-2 border-t border-rose-100 dark:border-stone-700/60 flex items-center justify-center gap-1.5 text-xs text-stone-500">
          <MapPin className="w-3.5 h-3.5 text-rose-500" />
          <span className="italic">South Tempe, Arizona</span>
        </div>
      </div>

      {/* 2. Subscribe to Journal Updates (Mommy Blog Staple) */}
      <div className="bg-gradient-to-br from-terracotta-500 to-rose-600 text-white p-6 rounded-3xl shadow-md space-y-3">
        <div className="flex items-center gap-2 font-serif font-bold text-base">
          <Mail className="w-4 h-4 text-rose-200" />
          <span>Follow Maya’s Notebook</span>
        </div>
        <p className="text-xs text-rose-100 font-light leading-relaxed">
          Receive gentle email updates whenever a new week’s journal entry or
          Sonoran growth note is published.
        </p>

        {subscribed ? (
          <div className="p-3 rounded-2xl bg-white/20 backdrop-blur-xs text-xs font-medium flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
            <span>Thank you for following along!</span>
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="space-y-2 pt-1">
            <input
              type="email"
              placeholder="Your email address..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 text-white placeholder-rose-200 text-xs border border-white/20 focus:outline-none focus:bg-white/20"
            />
            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-white text-terracotta-800 font-bold text-xs hover:bg-rose-50 transition-colors shadow-xs"
            >
              Subscribe for Updates
            </button>
          </form>
        )}
      </div>

      {/* 3. Meet Cholla the Rescue Dog */}
      <div className="bg-rose-50/60 dark:bg-stone-800/80 p-5 rounded-3xl border border-rose-100 dark:border-stone-700/80 space-y-3">
        <div className="flex items-center gap-2 text-rose-800 dark:text-rose-300 font-serif font-bold text-sm">
          <Heart className="w-4 h-4 text-rose-500 fill-current" />
          <span>Meet Cholla</span>
        </div>
        <p className="text-xs text-stone-600 dark:text-stone-300 font-light leading-relaxed">
          Our desert wheat-tan rescue dog adopted near the Salt River in 2022.
          Official sock thief, belly-bump snuggler, and studio companion!
        </p>
      </div>

      {/* 4. Start Here: Milestone Stories */}
      <div className="bg-white dark:bg-stone-800 p-6 rounded-3xl border border-rose-100 dark:border-stone-700/80 shadow-md space-y-3">
        <h4 className="font-serif font-bold text-sm uppercase tracking-wider text-stone-900 dark:text-stone-100 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-500" />
          <span>Start Here: Key Milestones</span>
        </h4>

        <div className="space-y-2 text-xs font-light">
          <Link
            href="/entry/week-5"
            className="block p-2.5 rounded-xl hover:bg-rose-50 dark:hover:bg-stone-700 transition-colors"
          >
            <span className="font-serif font-bold text-stone-900 dark:text-stone-100 block">
              Week 5: Two Pink Lines in 109° Heat
            </span>
            <span className="text-[11px] text-stone-500">
              The positive test discovery
            </span>
          </Link>
          <Link
            href="/entry/week-20"
            className="block p-2.5 rounded-xl hover:bg-rose-50 dark:hover:bg-stone-700 transition-colors"
          >
            <span className="font-serif font-bold text-stone-900 dark:text-stone-100 block">
              Week 20: Halfway Anatomy Scan
            </span>
            <span className="text-[11px] text-stone-500">
              First kicks & anatomy scan
            </span>
          </Link>
          <Link
            href="/entry/week-40"
            className="block p-2.5 rounded-xl hover:bg-rose-50 dark:hover:bg-stone-700 transition-colors"
          >
            <span className="font-serif font-bold text-rose-600 dark:text-rose-400 block">
              Week 40: Mateo Sun Rivera Arrived
            </span>
            <span className="text-[11px] text-stone-500">
              Due date birth story
            </span>
          </Link>
        </div>
      </div>

      {/* 5. Trimester Archives */}
      <div className="bg-white dark:bg-stone-800 p-6 rounded-3xl border border-rose-100 dark:border-stone-700/80 shadow-md space-y-3">
        <h4 className="font-serif font-bold text-sm uppercase tracking-wider text-stone-900 dark:text-stone-100 flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-terracotta-600" />
          <span>Trimester Archives</span>
        </h4>

        <div className="space-y-1.5 text-xs">
          {[
            { id: "all", label: "All Journal Entries (W4-W40)" },
            { id: "1", label: "1st Trimester (W4 - W12)" },
            { id: "2", label: "2nd Trimester (W13 - W27)" },
            { id: "3", label: "3rd Trimester (W28 - W40)" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => onTrimesterSelect(item.id)}
              className={`w-full text-left px-3.5 py-2 rounded-xl transition-all font-medium flex items-center justify-between ${
                currentTrimester === item.id
                  ? "bg-terracotta-600 text-white font-bold shadow-xs"
                  : "text-stone-700 dark:text-stone-300 hover:bg-rose-50 dark:hover:bg-stone-700"
              }`}
            >
              <span>{item.label}</span>
              <Sparkles className="w-3 h-3 opacity-60" />
            </button>
          ))}
        </div>
      </div>

      {/* 6. Our Care Note */}
      <div className="bg-stone-900 text-stone-300 p-5 rounded-3xl space-y-2 border border-stone-800">
        <div className="flex items-center gap-2 text-white font-serif font-bold text-xs">
          <Stethoscope className="w-3.5 h-3.5 text-rose-400" />
          <span>Our Doctor Care Note</span>
        </div>
        <p className="text-[11px] text-stone-400 font-light leading-relaxed">
          Throughout my 40 weeks, we received wonderful OB care at MomDoc Tempe
          on S. Priest Dr. Read about their clinic team on our{" "}
          <Link
            href="/momdoc-tempe"
            className="text-rose-300 underline font-medium"
          >
            care partner page
          </Link>
          .
        </p>
      </div>

      {/* 7. Recent Journal Entries */}
      <div className="bg-white dark:bg-stone-800 p-6 rounded-3xl border border-rose-100 dark:border-stone-700/80 shadow-md space-y-4">
        <h4 className="font-serif font-bold text-sm uppercase tracking-wider text-stone-900 dark:text-stone-100 flex items-center gap-2">
          <Calendar className="w-4 h-4 text-rose-500" />
          <span>Recent Entries</span>
        </h4>

        <div className="space-y-3">
          {recentEntries.map((entry) => (
            <Link
              key={entry.id}
              href={`/entry/${entry.id}`}
              className="group flex gap-3 items-center text-xs text-stone-800 dark:text-stone-200 hover:text-terracotta-600 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-rose-100">
                <img
                  src={entry.coverImage}
                  alt={entry.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="min-w-0 space-y-0.5">
                <span className="text-[10px] text-stone-400 font-light block">
                  Week {entry.weekNumber} &bull; {entry.formattedDate}
                </span>
                <p className="font-serif font-bold truncate group-hover:underline">
                  {entry.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
