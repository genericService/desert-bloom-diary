import React from "react";
import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DIARY_ENTRIES } from "@/data/diaryEntries";
import { MOMDOC_TEMPE_INFO } from "@/data/momdocInfo";
import { EntryCard } from "@/components/EntryCard";
import { MomDocCareWidget } from "@/components/MomDocCareWidget";
import {
  Palette,
  Type,
  Component as ComponentIcon,
  CheckCircle,
  XCircle,
  Flower2,
  Bookmark,
  Search,
  Ruler,
  Weight,
  Heart,
  Stethoscope,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Design System & Kitchen Sink | Desert Bloom Diary",
  description:
    "Living documentation of components, color tokens, typography, voice guides, and anti-tell rules for Desert Bloom Diary.",
};

export default function KitchenSinkPage() {
  const sampleEntry = DIARY_ENTRIES[2]; // Week 8 ultrasound entry

  return (
    <div className="min-h-screen flex flex-col bg-sand-50 dark:bg-stone-900 text-stone-900 dark:text-stone-100">
      <Header />

      <main className="flex-1 py-12 sm:py-16 space-y-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header Banner */}
          <div className="bg-white dark:bg-stone-800 rounded-3xl p-8 sm:p-12 border border-sand-200 dark:border-stone-700 shadow-xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-terracotta-100 dark:bg-terracotta-950 text-terracotta-800 dark:text-terracotta-300 text-xs font-bold uppercase tracking-wider border border-terracotta-200 dark:border-terracotta-800">
              <Palette className="w-4 h-4 text-terracotta-600 dark:text-terracotta-400" />
              <span>Living Design System & Documentation</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 dark:text-white">
              Desert Bloom Kitchen Sink
            </h1>
            <p className="text-base sm:text-lg text-stone-600 dark:text-stone-300 max-w-3xl">
              Living documentation of all UI components, color palettes,
              typography scales, voice guides, and anti-tell editorial
              compliance for Maya Rivera's pregnancy diary.
            </p>
          </div>

          {/* Section 1: Color Palette Tokens */}
          <section className="bg-white dark:bg-stone-800 rounded-3xl p-8 border border-sand-200 dark:border-stone-700 shadow-xl space-y-6">
            <div className="flex items-center gap-3 border-b border-sand-200 dark:border-stone-700 pb-4">
              <Palette className="w-6 h-6 text-terracotta-600" />
              <h2 className="font-serif text-2xl font-bold text-stone-900 dark:text-white">
                1. Sonoran Color Palette Tokens
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {/* Terracotta Palette */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  Sunbaked Terracotta
                </h3>
                <div className="space-y-2 text-xs">
                  <div className="h-14 bg-terracotta-500 rounded-xl p-3 text-white font-bold flex items-end justify-between shadow-xs">
                    <span>Terracotta 500</span>
                    <span>#dc6a45</span>
                  </div>
                  <div className="h-14 bg-terracotta-600 rounded-xl p-3 text-white font-bold flex items-end justify-between shadow-xs">
                    <span>Terracotta 600 (Primary)</span>
                    <span>#c85a32</span>
                  </div>
                  <div className="h-14 bg-terracotta-700 rounded-xl p-3 text-white font-bold flex items-end justify-between shadow-xs">
                    <span>Terracotta 700</span>
                    <span>#a44525</span>
                  </div>
                </div>
              </div>

              {/* Sage Green Palette */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  Sonoran Sage Green
                </h3>
                <div className="space-y-2 text-xs">
                  <div className="h-14 bg-sage-500 rounded-xl p-3 text-white font-bold flex items-end justify-between shadow-xs">
                    <span>Sage 500</span>
                    <span>#578769</span>
                  </div>
                  <div className="h-14 bg-sage-600 rounded-xl p-3 text-white font-bold flex items-end justify-between shadow-xs">
                    <span>Sage 600 (Secondary)</span>
                    <span>#426c52</span>
                  </div>
                  <div className="h-14 bg-sage-700 rounded-xl p-3 text-white font-bold flex items-end justify-between shadow-xs">
                    <span>Sage 700</span>
                    <span>#365743</span>
                  </div>
                </div>
              </div>

              {/* Sand Dune Neutral */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  Sand Dune Neutrals
                </h3>
                <div className="space-y-2 text-xs">
                  <div className="h-14 bg-sand-50 rounded-xl p-3 text-stone-900 font-bold border border-sand-300 flex items-end justify-between shadow-xs">
                    <span>Sand 50 (Canvas)</span>
                    <span>#faf7f2</span>
                  </div>
                  <div className="h-14 bg-sand-200 rounded-xl p-3 text-stone-900 font-bold flex items-end justify-between shadow-xs">
                    <span>Sand 200 (Borders)</span>
                    <span>#e6d7c2</span>
                  </div>
                  <div className="h-14 bg-stone-900 rounded-xl p-3 text-stone-100 font-bold flex items-end justify-between shadow-xs">
                    <span>Ironwood Dusk</span>
                    <span>#141312</span>
                  </div>
                </div>
              </div>

              {/* Accent & Trimester Badges */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  Trimester Badges
                </h3>
                <div className="space-y-2 text-xs">
                  <div className="p-3 bg-amber-100 text-amber-900 rounded-xl font-bold border border-amber-300">
                    Trimester 1 (Amber Warm)
                  </div>
                  <div className="p-3 bg-emerald-100 text-emerald-900 rounded-xl font-bold border border-emerald-300">
                    Trimester 2 (Emerald Growth)
                  </div>
                  <div className="p-3 bg-terracotta-100 text-terracotta-900 rounded-xl font-bold border border-terracotta-300">
                    Trimester 3 (Terracotta Bloom)
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Typography Scale */}
          <section className="bg-white dark:bg-stone-800 rounded-3xl p-8 border border-sand-200 dark:border-stone-700 shadow-xl space-y-6">
            <div className="flex items-center gap-3 border-b border-sand-200 dark:border-stone-700 pb-4">
              <Type className="w-6 h-6 text-terracotta-600" />
              <h2 className="font-serif text-2xl font-bold text-stone-900 dark:text-white">
                2. Typography Scale & Fonts
              </h2>
            </div>

            <div className="space-y-4">
              <div>
                <span className="text-xs font-mono text-stone-400">
                  font-serif text-4xl font-bold
                </span>
                <p className="font-serif text-4xl font-bold text-stone-900 dark:text-stone-100">
                  Maya Rivera's Contemporaneous Pregnancy Diary
                </p>
              </div>

              <div>
                <span className="text-xs font-mono text-stone-400">
                  font-serif text-2xl font-bold
                </span>
                <p className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100">
                  Week 8: Hearing the Flutter at MomDoc Tempe
                </p>
              </div>

              <div>
                <span className="text-xs font-mono text-stone-400">
                  text-base text-stone-600 leading-relaxed
                </span>
                <p className="text-base text-stone-600 dark:text-stone-300 leading-relaxed max-w-2xl">
                  The morning sun was barely rising over Hayden Butte when I
                  checked the digital test on the bathroom counter. Two faint
                  pink lines appeared almost instantly.
                </p>
              </div>

              <div>
                <span className="text-xs font-mono text-stone-400">
                  text-xs font-bold uppercase tracking-wider
                </span>
                <p className="text-xs font-bold uppercase tracking-wider text-terracotta-600">
                  Sonoran Desert Fruit & Plant Benchmark
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Interactive UI Components Showcase */}
          <section className="bg-white dark:bg-stone-800 rounded-3xl p-8 border border-sand-200 dark:border-stone-700 shadow-xl space-y-8">
            <div className="flex items-center gap-3 border-b border-sand-200 dark:border-stone-700 pb-4">
              <ComponentIcon className="w-6 h-6 text-terracotta-600" />
              <h2 className="font-serif text-2xl font-bold text-stone-900 dark:text-white">
                3. UI Component Library
              </h2>
            </div>

            {/* Buttons Showcase */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                Buttons & Action Controls
              </h3>
              <div className="flex flex-wrap gap-4 items-center">
                <button className="px-5 py-3 rounded-2xl bg-terracotta-600 hover:bg-terracotta-700 text-white font-bold text-sm shadow-md transition-all">
                  Primary Button
                </button>
                <button className="px-5 py-3 rounded-2xl bg-sage-700 hover:bg-sage-800 text-white font-bold text-sm shadow-md transition-all">
                  Secondary Sage Button
                </button>
                <button className="px-5 py-3 rounded-2xl bg-white dark:bg-stone-900 border border-sand-300 dark:border-stone-700 text-stone-800 dark:text-stone-100 font-bold text-sm shadow-2xs">
                  Outline Neutral Button
                </button>
                <button className="p-3 rounded-xl bg-sand-100 dark:bg-stone-700 text-terracotta-600">
                  <Bookmark className="w-5 h-5 fill-current" />
                </button>
              </div>
            </div>

            {/* Entry Card Preview */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                EntryCard Component Preview
              </h3>
              <div className="max-w-md">
                <EntryCard entry={sampleEntry} />
              </div>
            </div>

            {/* MomDoc Care Widget Preview */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                MomDoc Care Widget Preview
              </h3>
              <MomDocCareWidget />
            </div>
          </section>

          {/* Section 4: Writing Style & Anti-Tell Rules Verification */}
          <section className="bg-white dark:bg-stone-800 rounded-3xl p-8 border border-sand-200 dark:border-stone-700 shadow-xl space-y-6">
            <div className="flex items-center gap-3 border-b border-sand-200 dark:border-stone-700 pb-4">
              <ShieldCheck className="w-6 h-6 text-emerald-600" />
              <h2 className="font-serif text-2xl font-bold text-stone-900 dark:text-white">
                4. Voice Guide & Anti-Tell Compliance Rules
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Allowed / Required Principles */}
              <div className="bg-emerald-50/70 dark:bg-emerald-950/40 p-6 rounded-2xl border border-emerald-200 dark:border-emerald-800/60 space-y-3">
                <h3 className="text-sm font-bold text-emerald-900 dark:text-emerald-200 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <span>Approved Voice & Style Guidelines</span>
                </h3>
                <ul className="space-y-2 text-xs text-emerald-900 dark:text-emerald-300 leading-relaxed">
                  <li>
                    &bull; <strong>Direct & Authentic Tone:</strong> Express
                    real maternal emotions, Tempe weather realities, and daily
                    routine.
                  </li>
                  <li>
                    &bull; <strong>Active Voice:</strong> Direct sentence
                    construction without passive filler phrases.
                  </li>
                  <li>
                    &bull; <strong>Trauma-Informed Care:</strong> Empathetic,
                    supportive healthcare storytelling with absolute autonomy.
                  </li>
                  <li>
                    &bull; <strong>Local Grounding:</strong> Natural references
                    to Tempe landmarks (Kiwanis Park, Daley Park, Warner Rd,
                    Mill Ave).
                  </li>
                </ul>
              </div>

              {/* Prohibited Buzzwords & Punctuation */}
              <div className="bg-rose-50/70 dark:bg-rose-950/40 p-6 rounded-2xl border border-rose-200 dark:border-rose-800/60 space-y-3">
                <h3 className="text-sm font-bold text-rose-900 dark:text-rose-200 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-rose-600" />
                  <span>Strictly Prohibited Words & Formatting</span>
                </h3>
                <ul className="space-y-2 text-xs text-rose-900 dark:text-rose-300 leading-relaxed">
                  <li>
                    &bull; <strong>No Em Dashes:</strong> Never use "—"
                    characters in generated text. Use commas or parentheses.
                  </li>
                  <li>
                    &bull; <strong>Forbidden Words:</strong> "Delve", "Unlock",
                    "Unleash", "Elevate", "Revolutionize", "testament to",
                    "game-changer", "In the rapidly evolving landscape".
                  </li>
                  <li>
                    &bull; <strong>No Marketing Speeches:</strong> Avoid
                    corporate clichés, dishonest claims, or fluff filler
                    phrases.
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
