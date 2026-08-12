"use client";

import React from "react";
import { DiaryEntry } from "@/types";
import { Heart, Sun } from "lucide-react";

interface SymptomTrackerChartProps {
  entries: DiaryEntry[];
}

export function SymptomTrackerChart({ entries }: SymptomTrackerChartProps) {
  // Sort entries chronologically by week number
  const sorted = [...entries].sort((a, b) => a.weekNumber - b.weekNumber);

  return (
    <div className="bg-white dark:bg-stone-800 rounded-3xl p-6 sm:p-8 border border-rose-100 dark:border-stone-700 shadow-md space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-rose-100 dark:border-stone-700 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-100/80 dark:bg-rose-950 text-rose-800 dark:text-rose-300 text-xs font-semibold uppercase tracking-wider mb-2">
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-current" />
            <span>Personal Notebook Log</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 dark:text-white">
            How Maya Was Feeling: 40-Week Energy & Mood Waves
          </h3>
          <p className="text-xs text-stone-500 dark:text-stone-400 font-light italic pt-0.5">
            A candid look at afternoon nausea, second-trimester energy surges,
            brain fog, and pure joy.
          </p>
        </div>

        <div className="flex items-center gap-4 text-xs font-medium">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-400 inline-block" />
            <span className="text-stone-700 dark:text-stone-300">
              Mood Score
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-terracotta-400 inline-block" />
            <span className="text-stone-700 dark:text-stone-300">
              Energy Level
            </span>
          </div>
        </div>
      </div>

      {/* Visual Mood & Energy Waves Bar Graph */}
      <div className="space-y-4">
        <div className="grid grid-cols-6 sm:grid-cols-12 gap-2 items-end h-40 pt-6 px-3 bg-rose-50/50 dark:bg-stone-900/60 rounded-2xl border border-rose-100 dark:border-stone-700/60">
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
                    className="w-2.5 bg-rose-400 rounded-t-md group-hover:bg-rose-500 transition-all"
                    title={`Week ${e.weekNumber} Mood: ${e.moodScore}/5`}
                  />
                  {/* Energy Bar */}
                  <div
                    style={{ height: `${energyPct}%` }}
                    className="w-2.5 bg-terracotta-400 rounded-t-md group-hover:bg-terracotta-500 transition-all"
                    title={`Week ${e.weekNumber} Energy: ${e.energyLevel}/5`}
                  />
                </div>
                <span className="text-[10px] font-semibold text-stone-500 dark:text-stone-400">
                  W{e.weekNumber}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Real Symptoms & Everyday Feelings */}
      <div className="pt-2 space-y-3">
        <h4 className="text-xs font-bold uppercase tracking-wider text-rose-400 dark:text-rose-300">
          Everyday Pregnancy Experiences & Feelings Logged
        </h4>
        <div className="flex flex-wrap gap-2">
          {Array.from(new Set(sorted.flatMap((s) => s.symptoms))).map(
            (symptom) => (
              <span
                key={symptom}
                className="px-3 py-1.5 rounded-xl bg-rose-50/70 dark:bg-stone-900 border border-rose-100 dark:border-stone-700 text-xs text-stone-800 dark:text-stone-200 font-light"
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
