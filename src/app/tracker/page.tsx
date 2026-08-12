import React from "react";
import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BabyGrowthSlider } from "@/components/BabyGrowthSlider";
import { DESERT_GROWTH_MILESTONES } from "@/data/desertSizeScale";
import { getTrimesterBadgeColor, getTrimesterLabel } from "@/lib/utils";
import { Flower2, Ruler, Weight, ShieldCheck, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "40-Week Sonoran Growth Tracker | Desert Bloom Diary",
  description:
    "Interactive week-by-week pregnancy developmental tracker featuring Sonoran desert plant & fruit size benchmarks and MomDoc Tempe care milestones.",
};

export default function GrowthTrackerPage() {
  return (
    <div className="min-h-screen flex flex-col bg-sand-50 dark:bg-stone-900 text-stone-900 dark:text-stone-100">
      <Header />

      <main className="flex-1 py-12 sm:py-16 space-y-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header Banner */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-terracotta-100 dark:bg-terracotta-950 text-terracotta-800 dark:text-terracotta-300 text-xs font-bold uppercase tracking-wider border border-terracotta-200 dark:border-terracotta-800">
              <Flower2 className="w-4 h-4 text-terracotta-600 dark:text-terracotta-400" />
              <span>Full 40-Week Sonoran Milestone Scale</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 dark:text-white">
              Pregnancy Week-by-Week Growth Tracker
            </h1>
            <p className="text-base sm:text-lg text-stone-600 dark:text-stone-300">
              Track baby development from a tiny Saguaro seed at Week 4 to a
              full harvest Sonoran pumpkin at Week 40. Explore size, weight,
              fetal milestones, and MomDoc Tempe checkup schedules.
            </p>
          </div>

          {/* Main Interactive Slider Component */}
          <BabyGrowthSlider />

          {/* Comprehensive 40-Week Reference Table */}
          <section className="bg-white dark:bg-stone-800 rounded-3xl p-6 sm:p-8 border border-sand-200 dark:border-stone-700 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-sand-200 dark:border-stone-700 pb-4">
              <div>
                <h2 className="font-serif text-2xl font-bold text-stone-900 dark:text-white">
                  40-Week Milestone Reference Table
                </h2>
                <p className="text-xs text-stone-500 dark:text-stone-400">
                  Complete Sonoran desert size comparison & medical care index
                </p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-stone-700 dark:text-stone-300">
                <thead className="bg-sand-100 dark:bg-stone-900 text-stone-900 dark:text-stone-100 font-bold uppercase tracking-wider border-b border-sand-200 dark:border-stone-700">
                  <tr>
                    <th className="py-3.5 px-4 rounded-l-xl">Week</th>
                    <th className="py-3.5 px-4">Trimester</th>
                    <th className="py-3.5 px-4">Sonoran Size Scale</th>
                    <th className="py-3.5 px-4">Length / Weight</th>
                    <th className="py-3.5 px-4">Key Development</th>
                    <th className="py-3.5 px-4 rounded-r-xl">
                      MomDoc Tempe Care
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-sand-200 dark:divide-stone-700">
                  {DESERT_GROWTH_MILESTONES.map((m) => (
                    <tr
                      key={m.week}
                      className="hover:bg-sand-50/80 dark:hover:bg-stone-900/50 transition-colors"
                    >
                      <td className="py-4 px-4 font-bold text-stone-900 dark:text-white text-sm">
                        Week {m.week}
                      </td>
                      <td className="py-4 px-4">
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${getTrimesterBadgeColor(m.trimester)}`}
                        >
                          T{m.trimester}
                        </span>
                      </td>
                      <td className="py-4 px-4 font-serif font-bold text-terracotta-600 dark:text-terracotta-400 text-sm">
                        {m.fruitComparison}
                      </td>
                      <td className="py-4 px-4 font-medium">
                        {m.lengthInches} in &bull; {m.weightText}
                      </td>
                      <td className="py-4 px-4 max-w-xs leading-relaxed">
                        {m.keyFeature}
                      </td>
                      <td className="py-4 px-4 max-w-xs text-sage-800 dark:text-sage-300 font-medium">
                        {m.momdocMilestone}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
