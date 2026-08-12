"use client";

import React from "react";
import Link from "next/link";
import {
  Calendar,
  MapPin,
  Heart,
  ArrowRight,
  Baby,
  Flower2,
} from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-rose-50/70 via-sand-50 to-sand-50 dark:from-stone-950 dark:via-stone-900/90 dark:to-stone-900 pt-10 pb-16 sm:pb-20 border-b border-rose-100 dark:border-stone-800">
      {/* Soft ambient rose light blobs */}
      <div className="absolute top-6 left-1/4 w-96 h-96 bg-rose-200/40 dark:bg-rose-950/20 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-4 right-10 w-80 h-80 bg-terracotta-200/30 dark:bg-terracotta-950/20 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Narrative Greeting */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100/80 dark:bg-rose-950/80 border border-rose-200/80 dark:border-rose-800 text-rose-800 dark:text-rose-300 text-xs font-semibold tracking-wide">
              <Flower2 className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400" />
              <span>A Personal Family Journal &bull; Tempe, AZ</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-tight">
              Welcome to Our{" "}
              <span className="text-terracotta-600 dark:text-terracotta-400 italic font-normal">
                Desert Bloom
              </span>
              {" notebook."}
            </h1>

            <p className="text-base sm:text-lg text-stone-600 dark:text-stone-300 leading-relaxed font-light">
              Hi, I’m Maya! I’m a 29-year-old freelance graphic designer living
              in South Tempe with my husband Alex and our rescue pup Cholla.
              This is my real-time diary documenting our 40-week journey to
              meeting baby Mateo, shared with family, friends, and anyone
              expecting a desert baby.
            </p>

            {/* Cozy Meta Badges */}
            <div className="flex flex-wrap gap-2.5 text-xs font-medium text-stone-700 dark:text-stone-300 pt-1">
              <div className="flex items-center gap-1.5 bg-white/90 dark:bg-stone-800 px-3.5 py-2 rounded-2xl border border-rose-100 dark:border-stone-700 shadow-2xs">
                <MapPin className="w-4 h-4 text-terracotta-600 dark:text-terracotta-400" />
                <span>Tempe, Arizona</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/90 dark:bg-stone-800 px-3.5 py-2 rounded-2xl border border-rose-100 dark:border-stone-700 shadow-2xs">
                <Calendar className="w-4 h-4 text-sage-600 dark:text-sage-400" />
                <span>Aug 2025 – Apr 2026</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/90 dark:bg-stone-800 px-3.5 py-2 rounded-2xl border border-rose-100 dark:border-stone-700 shadow-2xs">
                <Heart className="w-4 h-4 text-rose-500 fill-current" />
                <span>First-Time Pregnancy</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Link
                href="/#entries-section"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-terracotta-600 hover:bg-terracotta-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
              >
                <span>Read Maya's Journal</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/tracker"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white dark:bg-stone-800 hover:bg-rose-50 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-100 font-bold text-sm border border-rose-200 dark:border-stone-700 shadow-2xs transition-all"
              >
                <Baby className="w-4 h-4 text-terracotta-600 dark:text-terracotta-400" />
                <span>40-Week Growth Scale</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Warm Polaroid Photo Card */}
          <div className="lg:col-span-5">
            <div className="bg-white dark:bg-stone-800 p-4 sm:p-5 rounded-3xl border border-rose-100 dark:border-stone-700 shadow-xl space-y-4">
              {/* Photo Frame */}
              <div className="relative rounded-2xl overflow-hidden aspect-4/3 bg-rose-100 border border-rose-100 shadow-inner">
                <img
                  src="/images/alex_maya_cholla.jpg"
                  alt="Maya, Alex & Cholla in Tempe"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-serif italic">
                  Maya, Alex & Cholla in South Tempe
                </div>
              </div>

              {/* Personal Greeting Note */}
              <div className="p-2 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100">
                    Baby Mateo Sun Rivera
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-300 border border-rose-200 dark:border-rose-800">
                    Born April 22, 2026
                  </span>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-300 font-light leading-relaxed italic">
                  "Delivered safely on his exact due date! 7 lbs 11 oz of pure
                  desert sunshine. So thankful for our midwives off Priest Dr
                  who supported us every step of the way."
                </p>
                <div className="pt-2 border-t border-rose-100 dark:border-stone-700 flex items-center justify-between text-xs text-stone-500 dark:text-stone-400">
                  <span className="font-serif italic">South Tempe, AZ</span>
                  <Link
                    href="/about"
                    className="text-terracotta-600 dark:text-terracotta-400 font-bold hover:underline"
                  >
                    Meet Our Family &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
