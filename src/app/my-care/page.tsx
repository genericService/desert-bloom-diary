import React from "react";
import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MOMDOC_TEMPE_INFO } from "@/data/momdocInfo";
import {
  Heart,
  Stethoscope,
  MapPin,
  ExternalLink,
  ShieldCheck,
  Sun,
  Coffee,
  ShoppingBag,
} from "lucide-react";

export const metadata: Metadata = {
  title: "My Care & Local Tempe Resources | Desert Bloom Diary",
  description:
    "Maya Rivera’s recommended local pregnancy resources in Tempe and the East Valley, featuring MomDoc Tempe on Priest Drive.",
};

export default function MyCarePage() {
  const localResources = [
    {
      name: MOMDOC_TEMPE_INFO.name,
      category: "Prenatal & Midwifery Care",
      address: "1634 S. Priest Dr., Tempe, AZ 85281",
      phone: "(480) 820-6657",
      description:
        'Home-like "Living Room" waiting area, same-day access, consistent OB/GYN physicians and Certified Nurse-Midwives.',
      link: MOMDOC_TEMPE_INFO.website,
      isPrimary: true,
    },
    {
      name: "Kiwanis Community Park Trails",
      category: "Outdoor Strolls & Shaded Walks",
      address: "6111 S All America Way, Tempe, AZ",
      phone: "N/A",
      description:
        "Shaded path around the lake, duck ponds, and peaceful benches for first & third trimester morning walks.",
      link: "https://www.tempe.gov/government/community-services/parks/kiwanis-park",
      isPrimary: false,
    },
    {
      name: "Mill Avenue District Boutiques",
      category: "Maternity Clothes & Local Gifts",
      address: "Mill Ave & 5th St, Tempe, AZ",
      phone: "N/A",
      description:
        "Walkable boutique shops with soft linen trousers and desert accessories for growing bumps.",
      link: "https://www.downtowntempe.com",
      isPrimary: false,
    },
    {
      name: "Tempe Public Library Courtyard",
      category: "Quiet Reading & Rest",
      address: "3500 S Rural Rd, Tempe, AZ",
      phone: "N/A",
      description:
        "Shaded courtyard gardens, quiet seating, and pregnancy reading materials.",
      link: "https://www.tempe.gov/government/community-services/tempe-public-library",
      isPrimary: false,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-sand-50 dark:bg-stone-900 text-stone-900 dark:text-stone-100">
      <Header />

      <main className="flex-1 py-12 sm:py-16 space-y-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header Banner */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sage-100 dark:bg-sage-950 text-sage-800 dark:text-sage-300 text-xs font-bold uppercase tracking-wider border border-sage-200 dark:border-sage-800">
              <Heart className="w-4 h-4 text-rose-500 fill-current" />
              <span>Local Care & Community Resources</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 dark:text-white">
              My Care & Tempe Resource Guide
            </h1>
            <p className="text-base sm:text-lg text-stone-600 dark:text-stone-300">
              A curated list of local places, certified prenatal providers,
              outdoor walk spots, and local spots that helped me navigate nine
              months of pregnancy in the desert.
            </p>
          </div>

          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {localResources.map((res, idx) => (
              <div
                key={idx}
                className={`p-8 rounded-3xl border shadow-xl flex flex-col justify-between space-y-6 ${
                  res.isPrimary
                    ? "bg-gradient-to-br from-sage-900 via-stone-900 to-stone-900 text-white border-sage-700"
                    : "bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 border-sand-200 dark:border-stone-700"
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                        res.isPrimary
                          ? "bg-sage-800 text-sage-300 border border-sage-700"
                          : "bg-sand-100 dark:bg-stone-900 text-terracotta-700 dark:text-terracotta-300"
                      }`}
                    >
                      {res.category}
                    </span>
                    {res.isPrimary && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-terracotta-600 text-white">
                        Primary Provider
                      </span>
                    )}
                  </div>

                  <h2 className="font-serif text-2xl font-bold">{res.name}</h2>

                  <p
                    className={`text-xs flex items-start gap-2 ${res.isPrimary ? "text-stone-300" : "text-stone-600 dark:text-stone-400"}`}
                  >
                    <MapPin className="w-4 h-4 text-terracotta-500 shrink-0 mt-0.5" />
                    <span>{res.address}</span>
                  </p>

                  <p
                    className={`text-sm leading-relaxed ${res.isPrimary ? "text-stone-200" : "text-stone-700 dark:text-stone-300"}`}
                  >
                    {res.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-700/50 flex items-center justify-between text-xs">
                  {res.phone !== "N/A" && (
                    <span className="font-bold text-emerald-400">
                      {res.phone}
                    </span>
                  )}
                  <a
                    href={res.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 font-bold hover:underline ${
                      res.isPrimary
                        ? "text-terracotta-400"
                        : "text-terracotta-600 dark:text-terracotta-400"
                    }`}
                  >
                    <span>Visit Website</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
