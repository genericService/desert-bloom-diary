import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  Flower2,
  MapPin,
  Heart,
  ShieldCheck,
  Sparkles,
  User,
  Dog,
  Laptop,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Maya Rivera & Desert Bloom | Tempe Pregnancy Journal",
  description:
    "Meet Maya Rivera, a 29-year-old freelance graphic designer in Tempe, Arizona, writing an authentic 40-week pregnancy diary supported by MomDoc Tempe.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-sand-50 dark:bg-stone-900 text-stone-900 dark:text-stone-100">
      <Header />

      <main className="flex-1 py-12 sm:py-16 space-y-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header Banner */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-terracotta-100 dark:bg-terracotta-950 text-terracotta-800 dark:text-terracotta-300 text-xs font-bold uppercase tracking-wider border border-terracotta-200 dark:border-terracotta-800">
              <Flower2 className="w-4 h-4 text-terracotta-600 dark:text-terracotta-400" />
              <span>About Maya & Desert Bloom</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 dark:text-white">
              Hi, I’m Maya Rivera
            </h1>
            <p className="text-base sm:text-lg text-stone-600 dark:text-stone-300 max-w-2xl mx-auto">
              Freelance designer, Tempe resident, dog mama, and now mother to
              baby Mateo Sun Rivera.
            </p>
          </div>

          {/* Persona Detail Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-stone-800 p-6 rounded-3xl border border-sand-200 dark:border-stone-700 shadow-lg text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-terracotta-100 dark:bg-terracotta-950 text-terracotta-600 flex items-center justify-center">
                <Laptop className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-lg text-stone-900 dark:text-white">
                Graphic Designer
              </h3>
              <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                29 years old, working independently with local Arizona brands
                and small businesses.
              </p>
            </div>

            <div className="bg-white dark:bg-stone-800 p-6 rounded-3xl border border-sand-200 dark:border-stone-700 shadow-lg text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-sage-100 dark:bg-sage-950 text-sage-600 flex items-center justify-center">
                <User className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-lg text-stone-900 dark:text-white">
                Family & Life
              </h3>
              <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                Married to Alex (software engineer). Mexican-American roots with
                family in the Valley.
              </p>
            </div>

            <div className="bg-white dark:bg-stone-800 p-6 rounded-3xl border border-sand-200 dark:border-stone-700 shadow-lg text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-amber-100 dark:bg-amber-950 text-amber-600 flex items-center justify-center">
                <Dog className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-lg text-stone-900 dark:text-white">
                Cholla the Rescue
              </h3>
              <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                Our sweet rescue dog who knew I was pregnant before anyone else
                did!
              </p>
            </div>
          </div>

          {/* Narrative Story Section */}
          <div className="bg-white dark:bg-stone-800 rounded-3xl p-8 sm:p-10 border border-sand-200 dark:border-stone-700 shadow-xl space-y-6 text-stone-800 dark:text-stone-200 leading-relaxed">
            <h2 className="font-serif text-2xl font-bold text-stone-900 dark:text-white border-b border-sand-200 dark:border-stone-700 pb-4">
              Why I Started Desert Bloom
            </h2>
            <p>
              When I saw those two pink lines in mid-August 2025 during a
              109-degree Tempe afternoon, I searched online for real, honest
              pregnancy experiences written by people living right here in
              Arizona. I found plenty of polished Instagram accounts with
              perfectly curated nursery reveals, but very little about surviving
              first trimester nausea in summer heat, navigating East Valley
              prenatal care, or what a Doppler visit actually feels like.
            </p>
            <p>
              Desert Bloom is my contemporaneous diary. I published entries in
              real time throughout my full nine months, without any future
              knowledge of what lay ahead. It covers the real ups and downs:
              morning sickness, design deadlines, citrus blossom walks, finding
              maternity clothes on Mill Avenue, and receiving warm prenatal care
              from our midwives at MomDoc Tempe on Priest Drive.
            </p>
            <p>
              Whether you are expectant parents in Tempe, Chandler, Gilbert,
              Mesa, or Phoenix, I hope this space offers comfort, honesty, and a
              sense of community.
            </p>

            <div className="pt-4 flex flex-wrap gap-4 border-t border-sand-200 dark:border-stone-700">
              <Link
                href="/#entries-section"
                className="px-6 py-3 rounded-2xl bg-terracotta-600 text-white font-bold text-xs hover:bg-terracotta-700 transition-colors shadow-2xs"
              >
                Read Diary Entries
              </Link>
              <Link
                href="/momdoc-tempe"
                className="px-6 py-3 rounded-2xl bg-sand-100 dark:bg-stone-700 text-stone-800 dark:text-stone-100 font-bold text-xs hover:bg-sand-200 transition-colors"
              >
                MomDoc Tempe Care Guide
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
