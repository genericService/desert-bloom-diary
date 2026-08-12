"use client";

import React from "react";
import { DiaryEntry } from "@/types";
import { Activity, Smile, Zap, Sparkles } from "lucide-react";

interface SymptomTrackerChartProps {
  entries: DiaryEntry[];
}

export function SymptomTrackerChart({ entries }: SymptomTrackerChartProps) {
  // Sort entries chronologically by week number
  const sorted = [...entries].sort((a, b) => a.weekNumber - b.weekNumber);

  return (
    <div className="bg-white dark:bg-stone-800 rounded-3xl p-6 sm:p-8 border border-sand-200 dark:border-stone-700 shadow-lg space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-sand-200 dark:border-stone-700 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-100 dark:bg-sage-950 text-sage-800 dark:text-sage-300 text-xs font-bold uppercase tracking-wider mb-2">
            <Activity className="w-3.5 h-3.5" />
            <span>Maternal Well-being Metrics</span>
          </div>
          <h3 className="font-serif text-2xl font-bold text-stone-900 dark:text-white">
            Mood & Energy Progression
          </h3>
        </div>

        <div className="flex items-center gap-4 text-xs font-medium">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-terracotta-500 inline-block" />
            <span className="text-stone-700 dark:text-stone-300">
              Mood (1-5)
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-sage-500 inline-block" />
            <span className="text-stone-700 dark:text-stone-300">
              Energy (1-5)
            </span>
          </div>
        </div>
      </div>

      {/* Visual Bar Graph */}
      <div className="space-y-4">
        <div className="grid grid-cols-6 sm:grid-cols-12 gap-2 items-end h-40 pt-6 px-2 bg-sand-50 dark:bg-stone-900/60 rounded-2xl border border-sand-200 dark:border-stone-700/60">
          {sorted.map((e) => {
            const moodPct = (e.moodScore / 5) * 100;
            const energyPct = (e.energyLevel / 5) * 100;

            return (
              <div
                key={e.id}
                className="flex flex-col items-center gap-1.5 h-full justify-end group"
              >
                <div className="flex items-end gap-1 w-full justify-center h-full">
                  {/* Mood Bar */}
                  <div
                    style={{ height: `${moodPct}%` }}
                    className="w-2.5 bg-terracotta-500 rounded-t-md group-hover:bg-terracotta-600 transition-all"
                    title={`Week ${e.weekNumber} Mood: ${e.moodScore}/5`}
                  />
                  {/* Energy Bar */}
                  <div
                    style={{ height: `${energyPct}%` }}
                    className="w-2.5 bg-sage-500 rounded-t-md group-hover:bg-sage-600 transition-all"
                    title={`Week ${e.weekNumber} Energy: ${e.energyLevel}/5`}
                  />
                </div>
                <span className="text-[10px] font-bold text-stone-500 dark:text-stone-400">
                  W{e.weekNumber}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Common Physical Symptoms List */}
      <div className="pt-2 space-y-3">
        <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400">
          Logged Symptoms Across Trimesters
        </h4>
        <div className="flex flex-wrap gap-2">
          {Array.from(new Set(sorted.flatMap((s) => s.symptoms))).map(
            (symptom) => (
              <span
                key={symptom}
                className="px-3 py-1.5 rounded-xl bg-sand-100 dark:bg-stone-900 border border-sand-200 dark:border-stone-700 text-xs text-stone-800 dark:text-stone-200 font-medium"
              >
                &bull; {symptom}
              </span>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
