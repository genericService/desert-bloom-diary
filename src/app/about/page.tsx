import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Flower2, MapPin, Heart, Laptop, User, Dog } from "lucide-react";

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

          {/* Hero Feature Portrait */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white dark:bg-stone-800 rounded-3xl p-6 sm:p-8 border border-sand-200 dark:border-stone-700 shadow-xl">
            <div className="md:col-span-5 h-72 rounded-2xl overflow-hidden shadow-md">
              <img
                src="/images/maya_rivera_portrait.jpg"
                alt="Maya Rivera in her Tempe design studio"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:col-span-7 space-y-4 text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
              <span className="text-xs font-bold uppercase tracking-wider text-terracotta-600 dark:text-terracotta-400">
                Freelance Designer & Tempe Resident
              </span>
              <h2 className="font-serif text-2xl font-bold text-stone-900 dark:text-white">
                Designing for Local Arizona Brands & Capturing Life
              </h2>
              <p>
                I am a 29-year-old Mexican-American graphic designer living in
                Tempe with my husband Alex (a software engineer) and our rescue
                dog Cholla. I work independently with local businesses across
                the East Valley, designing logos, typography, and brand systems.
              </p>
            </div>
          </div>

          {/* Family & Nursery Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Alex, Maya & Cholla Card */}
            <div className="bg-white dark:bg-stone-800 rounded-3xl overflow-hidden border border-sand-200 dark:border-stone-700 shadow-lg flex flex-col justify-between">
              <div className="h-64 overflow-hidden">
                <img
                  src="/images/alex_maya_cholla.jpg"
                  alt="Alex, Maya and Cholla in their Tempe living room"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 space-y-2">
                <h3 className="font-serif font-bold text-lg text-stone-900 dark:text-white">
                  Alex & Cholla
                </h3>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  Alex keeps iced ginger tea prepped and took Cholla on evening
                  walks during the hot first trimester days. Cholla knew I was
                  pregnant before anyone else did!
                </p>
              </div>
            </div>

            {/* Nursery Room Card */}
            <div className="bg-white dark:bg-stone-800 rounded-3xl overflow-hidden border border-sand-200 dark:border-stone-700 shadow-lg flex flex-col justify-between">
              <div className="h-64 overflow-hidden">
                <img
                  src="/images/tempe_nursery_room.jpg"
                  alt="Sonoran sage green nursery room in Tempe"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 space-y-2">
                <h3 className="font-serif font-bold text-lg text-stone-900 dark:text-white">
                  Our Sonoran Nursery
                </h3>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  Painted in soft Sonoran sage green with terracotta linen
                  bedding, potted window succulents, and natural wooden crib for
                  baby Mateo.
                </p>
              </div>
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
