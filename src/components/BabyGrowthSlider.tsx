"use client";

import React, { useState } from "react";
import { DESERT_GROWTH_MILESTONES } from "@/data/desertSizeScale";
import {
  Flower2,
  Ruler,
  Weight,
  ShieldCheck,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { getTrimesterLabel, getTrimesterBadgeColor } from "@/lib/utils";

export function BabyGrowthSlider() {
  const [selectedWeekIndex, setSelectedWeekIndex] = useState(6); // Default to Week 20 (index 6 in the milestones array)

  const currentMilestone = DESERT_GROWTH_MILESTONES[selectedWeekIndex];

  const handlePrev = () => {
    if (selectedWeekIndex > 0) {
      setSelectedWeekIndex(selectedWeekIndex - 1);
    }
  };

  const handleNext = () => {
    if (selectedWeekIndex < DESERT_GROWTH_MILESTONES.length - 1) {
      setSelectedWeekIndex(selectedWeekIndex + 1);
    }
  };

  return (
    <div className="bg-white dark:bg-stone-800 rounded-3xl p-6 sm:p-8 border border-sand-200 dark:border-stone-700 shadow-xl space-y-8">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-sand-200 dark:border-stone-700 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-terracotta-100 dark:bg-terracotta-950 text-terracotta-800 dark:text-terracotta-300 text-xs font-bold uppercase tracking-wider mb-2">
            <Flower2 className="w-3.5 h-3.5" />
            <span>Sonoran Desert Fruit & Plant Scale</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100">
            Interactive 40-Week Growth Tracker
          </h2>
        </div>

        {/* Trimester pill badge */}
        <div className="flex items-center gap-2">
          <span
            className={`px-3 py-1 rounded-full text-xs font-bold border ${getTrimesterBadgeColor(currentMilestone.trimester)}`}
          >
            {getTrimesterLabel(currentMilestone.trimester)}
          </span>
          <span className="bg-terracotta-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-xs">
            Week {currentMilestone.week}
          </span>
        </div>
      </div>

      {/* Week Selector Range Slider */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs font-bold text-stone-600 dark:text-stone-300">
          <span>Week 4 (Saguaro Seed)</span>
          <span className="text-terracotta-600 dark:text-terracotta-400 font-extrabold text-sm">
            Slide to Explore: Week {currentMilestone.week}
          </span>
          <span>Week 40 (Harvest Pumpkin)</span>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={handlePrev}
            disabled={selectedWeekIndex === 0}
            className="p-2.5 rounded-xl bg-sand-100 dark:bg-stone-700 hover:bg-sand-200 dark:hover:bg-stone-600 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            title="Previous Week"
          >
            <ChevronLeft className="w-5 h-5 text-stone-800 dark:text-stone-100" />
          </button>

          <input
            type="range"
            min={0}
            max={DESERT_GROWTH_MILESTONES.length - 1}
            value={selectedWeekIndex}
            onChange={(e) => setSelectedWeekIndex(parseInt(e.target.value))}
            className="w-full h-3 bg-sand-200 dark:bg-stone-700 rounded-lg appearance-none cursor-pointer accent-terracotta-600"
          />

          <button
            onClick={handleNext}
            disabled={selectedWeekIndex === DESERT_GROWTH_MILESTONES.length - 1}
            className="p-2.5 rounded-xl bg-sand-100 dark:bg-stone-700 hover:bg-sand-200 dark:hover:bg-stone-600 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            title="Next Week"
          >
            <ChevronRight className="w-5 h-5 text-stone-800 dark:text-stone-100" />
          </button>
        </div>

        {/* Quick Trimester Jump Buttons */}
        <div className="flex flex-wrap gap-2 pt-2 justify-center">
          <button
            onClick={() => setSelectedWeekIndex(2)} // Week 8
            className="px-3 py-1 rounded-xl text-xs bg-sand-100 dark:bg-stone-900 hover:bg-terracotta-100 dark:hover:bg-terracotta-950 text-stone-700 dark:text-stone-300 font-semibold transition-colors"
          >
            1st Trimester (Week 8)
          </button>
          <button
            onClick={() => setSelectedWeekIndex(6)} // Week 20
            className="px-3 py-1 rounded-xl text-xs bg-sand-100 dark:bg-stone-900 hover:bg-terracotta-100 dark:hover:bg-terracotta-950 text-stone-700 dark:text-stone-300 font-semibold transition-colors"
          >
            2nd Trimester (Week 20 Anatomy)
          </button>
          <button
            onClick={() => setSelectedWeekIndex(9)} // Week 28
            className="px-3 py-1 rounded-xl text-xs bg-sand-100 dark:bg-stone-900 hover:bg-terracotta-100 dark:hover:bg-terracotta-950 text-stone-700 dark:text-stone-300 font-semibold transition-colors"
          >
            3rd Trimester (Week 28 Nesting)
          </button>
          <button
            onClick={() => setSelectedWeekIndex(15)} // Week 40
            className="px-3 py-1 rounded-xl text-xs bg-terracotta-600 text-white font-bold hover:bg-terracotta-700 transition-colors shadow-2xs"
          >
            Week 40 Birth (April 22)
          </button>
        </div>
      </div>

      {/* Display Card for Selected Milestone */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-sand-50 dark:bg-stone-900/80 p-6 rounded-3xl border border-sand-200 dark:border-stone-700">
        {/* Left Column: Sonoran Fruit Comparison Box */}
        <div className="md:col-span-5 flex flex-col justify-center items-center text-center p-6 bg-white dark:bg-stone-800 rounded-2xl border border-sand-200 dark:border-stone-700 shadow-sm space-y-3">
          <div className="w-20 h-20 rounded-3xl bg-terracotta-100 dark:bg-terracotta-950/80 text-terracotta-600 dark:text-terracotta-300 flex items-center justify-center border border-terracotta-200 dark:border-terracotta-800 shadow-inner">
            <Sparkles className="w-10 h-10 animate-bounce" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-terracotta-600 dark:text-terracotta-400">
            Sonoran Size Comparison
          </span>
          <h3 className="font-serif text-2xl font-bold text-stone-900 dark:text-white">
            {currentMilestone.fruitComparison}
          </h3>
          <p className="text-xs text-stone-500 dark:text-stone-400 font-medium">
            Natural Sonoran flora and fruit size benchmark
          </p>

          <div className="grid grid-cols-2 gap-3 w-full pt-3 border-t border-sand-200 dark:border-stone-700 text-xs">
            <div className="flex items-center justify-center gap-1.5 p-2 bg-sand-50 dark:bg-stone-900 rounded-xl">
              <Ruler className="w-4 h-4 text-terracotta-500" />
              <div>
                <span className="text-[10px] text-stone-400 block">Length</span>
                <span className="font-bold text-stone-900 dark:text-stone-100">
                  {currentMilestone.lengthInches} in
                </span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-1.5 p-2 bg-sand-50 dark:bg-stone-900 rounded-xl">
              <Weight className="w-4 h-4 text-sage-500" />
              <div>
                <span className="text-[10px] text-stone-400 block">Weight</span>
                <span className="font-bold text-stone-900 dark:text-stone-100">
                  {currentMilestone.weightText}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Developmental Milestones & MomDoc Tempe Care Schedule */}
        <div className="md:col-span-7 space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <h4 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100">
              Week {currentMilestone.week} Development & Milestones
            </h4>
            <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
              {currentMilestone.keyFeature}
            </p>
          </div>

          <div className="bg-sage-50 dark:bg-sage-950/50 p-4 rounded-2xl border border-sage-200 dark:border-sage-800 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-sage-900 dark:text-sage-200">
              <ShieldCheck className="w-4 h-4 text-sage-600 dark:text-sage-400" />
              <span>MomDoc Tempe Care Schedule Note</span>
            </div>
            <p className="text-xs text-sage-800 dark:text-sage-300 leading-relaxed">
              {currentMilestone.momdocMilestone}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
