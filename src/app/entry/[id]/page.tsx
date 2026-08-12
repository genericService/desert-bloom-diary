import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DIARY_ENTRIES } from "@/data/diaryEntries";
import { MOMDOC_TEMPE_INFO } from "@/data/momdocInfo";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getTrimesterBadgeColor, getTrimesterLabel } from "@/lib/utils";
import {
  Calendar,
  Clock,
  MapPin,
  Heart,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Share2,
  Stethoscope,
  Smile,
  Zap,
  ExternalLink,
} from "lucide-react";

interface EntryPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return DIARY_ENTRIES.map((entry) => ({
    id: entry.id,
  }));
}

export async function generateMetadata({
  params,
}: EntryPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const entry = DIARY_ENTRIES.find((e) => e.id === resolvedParams.id);
  if (!entry) {
    return {
      title: "Entry Not Found - Desert Bloom Diary",
    };
  }

  return {
    title: `${entry.title} (Week ${entry.weekNumber}) | Desert Bloom Diary Tempe`,
    description: entry.excerpt,
    openGraph: {
      title: entry.title,
      description: entry.excerpt,
      type: "article",
      publishedTime: entry.date,
      authors: ["Maya Rivera"],
      images: [
        {
          url: entry.coverImage,
          width: 1200,
          height: 630,
          alt: entry.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: entry.title,
      description: entry.excerpt,
      images: [entry.coverImage],
    },
  };
}

export default async function EntryPage({ params }: EntryPageProps) {
  const resolvedParams = await params;
  const currentIndex = DIARY_ENTRIES.findIndex(
    (e) => e.id === resolvedParams.id,
  );
  if (currentIndex === -1) {
    notFound();
  }

  const entry = DIARY_ENTRIES[currentIndex];
  const prevEntry = currentIndex > 0 ? DIARY_ENTRIES[currentIndex - 1] : null;
  const nextEntry =
    currentIndex < DIARY_ENTRIES.length - 1
      ? DIARY_ENTRIES[currentIndex + 1]
      : null;

  // JSON-LD Structured Data for BlogPosting and MomDoc Tempe Clinic
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: entry.title,
    description: entry.excerpt,
    datePublished: entry.date,
    author: {
      "@type": "Person",
      name: "Maya Rivera",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tempe",
        addressRegion: "AZ",
      },
    },
    publisher: {
      "@type": "Organization",
      name: "Desert Bloom Diary",
    },
    about: {
      "@type": "MedicalOrganization",
      name: MOMDOC_TEMPE_INFO.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: MOMDOC_TEMPE_INFO.address,
        addressLocality: MOMDOC_TEMPE_INFO.city,
        addressRegion: MOMDOC_TEMPE_INFO.state,
        postalCode: MOMDOC_TEMPE_INFO.zip,
      },
      telephone: MOMDOC_TEMPE_INFO.phone,
      url: MOMDOC_TEMPE_INFO.website,
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-sand-50 dark:bg-stone-900 text-stone-900 dark:text-stone-100">
      {/* Inject JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />

      <main className="flex-1 py-10 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Back Navigation Bar */}
          <div className="flex items-center justify-between">
            <Link
              href="/#entries-section"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-stone-800 border border-sand-200 dark:border-stone-700 text-xs font-bold text-stone-700 dark:text-stone-300 hover:text-terracotta-600 transition-all shadow-2xs"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Entries</span>
            </Link>

            <span
              className={`px-3 py-1 rounded-full text-xs font-bold border ${getTrimesterBadgeColor(entry.trimester)}`}
            >
              {getTrimesterLabel(entry.trimester)}
            </span>
          </div>

          {/* Main Article Header */}
          <header className="space-y-4">
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-terracotta-600 dark:text-terracotta-400">
              <span className="bg-terracotta-100 dark:bg-terracotta-950 px-2.5 py-1 rounded-md border border-terracotta-200 dark:border-terracotta-800">
                Week {entry.weekNumber}
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {entry.formattedDate}
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {entry.readTime}
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 dark:text-white tracking-tight leading-tight">
              {entry.title}
            </h1>

            <p className="text-base sm:text-lg text-stone-600 dark:text-stone-300 italic font-serif leading-relaxed border-l-4 border-terracotta-500 pl-4 py-1">
              "{entry.excerpt}"
            </p>
          </header>

          {/* Cover Image Container */}
          <div className="relative h-80 sm:h-96 w-full rounded-3xl overflow-hidden border border-sand-200 dark:border-stone-700 shadow-xl">
            <img
              src={entry.coverImage}
              alt={entry.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between text-white text-xs gap-3">
              <div className="flex items-center gap-2 bg-stone-900/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20">
                <Sparkles className="w-4 h-4 text-terracotta-400" />
                <span>
                  Size: <strong>{entry.babySize.desertFruit}</strong> (
                  {entry.babySize.length})
                </span>
              </div>

              <div className="flex items-center gap-2 bg-stone-900/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20">
                <MapPin className="w-4 h-4 text-terracotta-400" />
                <span>{entry.tempeSpotlight.location}</span>
              </div>
            </div>
          </div>

          {/* Main Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-6 text-stone-800 dark:text-stone-200 text-base leading-relaxed">
              {entry.content.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="first-letter:text-3xl first-letter:font-serif first-letter:font-bold first-letter:text-terracotta-600 first-letter:mr-1"
                >
                  {paragraph}
                </p>
              ))}

              {/* Tags */}
              <div className="pt-6 border-t border-sand-200 dark:border-stone-800 flex flex-wrap gap-2">
                {entry.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-xl bg-sand-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 text-xs font-semibold"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Sidebar Metadata Cards */}
            <div className="lg:col-span-4 space-y-6">
              {/* Baby Growth Box */}
              <div className="bg-white dark:bg-stone-800 p-5 rounded-2xl border border-sand-200 dark:border-stone-700 shadow-sm space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-terracotta-600 dark:text-terracotta-400 block">
                  Sonoran Fruit Comparison
                </span>
                <h4 className="font-serif text-lg font-bold text-stone-900 dark:text-white">
                  {entry.babySize.desertFruit}
                </h4>
                <div className="space-y-1 text-xs text-stone-600 dark:text-stone-300">
                  <p>
                    <strong>Length:</strong> {entry.babySize.length}
                  </p>
                  <p>
                    <strong>Weight:</strong> {entry.babySize.weight}
                  </p>
                  <p className="pt-1 text-stone-500">
                    {entry.babySize.milestone}
                  </p>
                </div>
              </div>

              {/* MomDoc Tempe Highlight Box */}
              <div className="bg-sage-50 dark:bg-sage-950/60 p-5 rounded-2xl border border-sage-200 dark:border-sage-800/80 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-sage-900 dark:text-sage-200">
                  <Stethoscope className="w-4 h-4 text-sage-600 dark:text-sage-400" />
                  <span>MomDoc Tempe Care Note</span>
                </div>
                <h4 className="font-bold text-stone-900 dark:text-white text-sm">
                  {entry.momdocHighlight.title}
                </h4>
                <p className="text-xs text-sage-800 dark:text-sage-300 leading-relaxed">
                  {entry.momdocHighlight.summary}
                </p>
                <a
                  href={MOMDOC_TEMPE_INFO.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-terracotta-600 dark:text-terracotta-400 hover:underline pt-1"
                >
                  <span>MomDoc Tempe Clinic Info</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Tempe Spotlight Card */}
              <div className="bg-white dark:bg-stone-800 p-5 rounded-2xl border border-sand-200 dark:border-stone-700 shadow-sm space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-400 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-terracotta-500" />
                  Tempe Location Spotlight
                </span>
                <p className="font-bold text-stone-900 dark:text-white text-sm">
                  {entry.tempeSpotlight.location}
                </p>
                <p className="text-xs text-stone-600 dark:text-stone-300">
                  {entry.tempeSpotlight.description}
                </p>
              </div>

              {/* Wellbeing Metrics */}
              <div className="bg-white dark:bg-stone-800 p-5 rounded-2xl border border-sand-200 dark:border-stone-700 shadow-sm space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-400 block">
                  Daily Wellbeing Metrics
                </span>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="flex items-center gap-2 p-2 bg-sand-50 dark:bg-stone-900 rounded-xl">
                    <Smile className="w-4 h-4 text-terracotta-500" />
                    <div>
                      <span className="text-[10px] text-stone-400 block">
                        Mood
                      </span>
                      <span className="font-bold">{entry.moodScore} / 5</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-sand-50 dark:bg-stone-900 rounded-xl">
                    <Zap className="w-4 h-4 text-amber-500" />
                    <div>
                      <span className="text-[10px] text-stone-400 block">
                        Energy
                      </span>
                      <span className="font-bold">{entry.energyLevel} / 5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Bar (Prev / Next Entry) */}
          <nav className="pt-10 border-t border-sand-200 dark:border-stone-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prevEntry ? (
              <Link
                href={`/entry/${prevEntry.id}`}
                className="p-5 rounded-2xl bg-white dark:bg-stone-800 border border-sand-200 dark:border-stone-700 hover:border-terracotta-400 transition-all flex items-center gap-4 group"
              >
                <ChevronLeft className="w-6 h-6 text-terracotta-600 shrink-0 group-hover:-translate-x-1 transition-transform" />
                <div className="text-left overflow-hidden">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block">
                    Previous Entry &bull; Week {prevEntry.weekNumber}
                  </span>
                  <p className="font-serif font-bold text-sm text-stone-900 dark:text-stone-100 truncate">
                    {prevEntry.title}
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextEntry ? (
              <Link
                href={`/entry/${nextEntry.id}`}
                className="p-5 rounded-2xl bg-white dark:bg-stone-800 border border-sand-200 dark:border-stone-700 hover:border-terracotta-400 transition-all flex items-center justify-end gap-4 text-right group"
              >
                <div className="text-right overflow-hidden">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block">
                    Next Entry &bull; Week {nextEntry.weekNumber}
                  </span>
                  <p className="font-serif font-bold text-sm text-stone-900 dark:text-stone-100 truncate">
                    {nextEntry.title}
                  </p>
                </div>
                <ChevronRight className="w-6 h-6 text-terracotta-600 shrink-0 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <div />
            )}
          </nav>
        </div>
      </main>

      <Footer />
    </div>
  );
}
