"use client";

import React from "react";
import Link from "next/link";
import {
  Calendar,
  MapPin,
  Heart,
  Sparkles,
  ArrowRight,
  Baby,
  ShieldCheck,
} from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sand-100 via-sand-50 to-sand-50 dark:from-stone-900 dark:via-stone-900/90 dark:to-stone-900 pt-12 pb-16 sm:pb-20 border-b border-sand-200 dark:border-stone-800">
      {/* Decorative ambient blurred blobs */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-terracotta-200/40 dark:bg-terracotta-900/20 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-5 right-10 w-80 h-80 bg-sage-200/40 dark:bg-sage-900/20 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-terracotta-100 dark:bg-terracotta-950/80 border border-terracotta-200 dark:border-terracotta-800 text-terracotta-800 dark:text-terracotta-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-terracotta-600 dark:text-terracotta-400" />
              <span>Full 9-Month Contemporaneous Journal</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-tight">
              Maya Rivera’s{" "}
              <span className="text-terracotta-600 dark:text-terracotta-400 italic">
                Desert Bloom
              </span>{" "}
              Pregnancy Diary
            </h1>

            <p className="text-base sm:text-lg text-stone-600 dark:text-stone-300 leading-relaxed">
              Welcome to my week-by-week pregnancy journal in Tempe, Arizona.
              From two pink lines during the hot August days of 2025 to our
              newborn birth on April 22, 2026, follow my real experiences with
              prenatal care at MomDoc Tempe, local desert living, and preparing
              for baby Mateo.
            </p>

            {/* Key Meta Badges */}
            <div className="flex flex-wrap gap-3 text-xs font-medium text-stone-700 dark:text-stone-300 pt-1">
              <div className="flex items-center gap-1.5 bg-white dark:bg-stone-800 px-3 py-1.5 rounded-xl border border-sand-200 dark:border-stone-700 shadow-2xs">
                <MapPin className="w-4 h-4 text-terracotta-600 dark:text-terracotta-400" />
                <span>Tempe, Arizona</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white dark:bg-stone-800 px-3 py-1.5 rounded-xl border border-sand-200 dark:border-stone-700 shadow-2xs">
                <Calendar className="w-4 h-4 text-sage-600 dark:text-sage-400" />
                <span>August 2025 – April 2026</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white dark:bg-stone-800 px-3 py-1.5 rounded-xl border border-sand-200 dark:border-stone-700 shadow-2xs">
                <Heart className="w-4 h-4 text-rose-500 fill-current" />
                <span>MomDoc Tempe Care</span>
              </div>
            </div>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/#entries-section"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-terracotta-600 hover:bg-terracotta-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
              >
                <span>Read Diary Entries</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/tracker"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white dark:bg-stone-800 hover:bg-sand-100 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-100 font-bold text-sm border border-sand-300 dark:border-stone-700 shadow-2xs transition-all"
              >
                <Baby className="w-4 h-4 text-terracotta-600 dark:text-terracotta-400" />
                <span>40-Week Growth Tracker</span>
              </Link>
            </div>
          </div>

          {/* Right Highlight Card Column */}
          <div className="lg:col-span-5">
            <div className="bg-white dark:bg-stone-800 rounded-3xl p-6 sm:p-8 border border-sand-200 dark:border-stone-700 shadow-xl relative space-y-6">
              {/* Header inside card */}
              <div className="flex items-center justify-between border-b border-sand-200 dark:border-stone-700 pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-terracotta-600 dark:text-terracotta-400">
                    Baby Milestone Summary
                  </span>
                  <h3 className="font-serif text-xl font-bold text-stone-900 dark:text-white">
                    Mateo Sun Rivera
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-terracotta-100 dark:bg-terracotta-950 text-terracotta-600 dark:text-terracotta-300 flex items-center justify-center font-bold text-lg">
                  W40
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-sand-50 dark:bg-stone-900/60 p-4 rounded-2xl border border-sand-200 dark:border-stone-700/60">
                  <span className="text-xs text-stone-500 dark:text-stone-400 block mb-1">
                    Birth Date
                  </span>
                  <p className="font-bold text-stone-900 dark:text-white text-base">
                    April 22, 2026
                  </p>
                  <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                    Exact Due Date
                  </span>
                </div>

                <div className="bg-sand-50 dark:bg-stone-900/60 p-4 rounded-2xl border border-sand-200 dark:border-stone-700/60">
                  <span className="text-xs text-stone-500 dark:text-stone-400 block mb-1">
                    Birth Weight & Length
                  </span>
                  <p className="font-bold text-stone-900 dark:text-white text-base">
                    7 lbs 11 oz &bull; 20.2 in
                  </p>
                  <span className="text-[11px] text-terracotta-600 dark:text-terracotta-400 font-medium">
                    Harvest Pumpkin Size
                  </span>
                </div>
              </div>

              {/* MomDoc Tempe Highlight Box */}
              <div className="bg-sage-50 dark:bg-sage-950/40 p-4 rounded-2xl border border-sage-200 dark:border-sage-800/60 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-sage-600 dark:text-sage-400 shrink-0 mt-0.5" />
                <div className="text-xs text-sage-900 dark:text-sage-200 space-y-1">
                  <p className="font-bold">Prenatal & Midwifery Care</p>
                  <p className="text-sage-800 dark:text-sage-300">
                    Delivered with the certified midwife team at MomDoc Tempe on
                    Warner Rd. Low-intervention, empowered labor.
                  </p>
                </div>
              </div>

              {/* Tempe Spot Footer note */}
              <div className="flex items-center justify-between text-xs text-stone-500 dark:text-stone-400 pt-2 border-t border-sand-200 dark:border-stone-700">
                <span>Tempe, AZ Community Journal</span>
                <Link
                  href="/momdoc-tempe"
                  className="text-terracotta-600 dark:text-terracotta-400 hover:underline font-semibold"
                >
                  Learn About MomDoc Care &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
