import React from "react";
import Link from "next/link";
import {
  Flower2,
  MapPin,
  Phone,
  ExternalLink,
  Heart,
  ShieldCheck,
} from "lucide-react";
import { MOMDOC_TEMPE_INFO } from "@/data/momdocInfo";

export function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand & Narrative */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-terracotta-500 to-rose-600 text-white flex items-center justify-center shadow-md">
                <Flower2 className="w-5 h-5" />
              </div>
              <span className="font-serif text-2xl font-bold text-white tracking-tight">
                Desert Bloom Diary
              </span>
            </div>
            <p className="text-sm text-stone-400 leading-relaxed font-light">
              Maya Rivera’s contemporaneous 40-week pregnancy journal in Tempe,
              Arizona, spanning August 2025 to April 22, 2026. Documenting
              authentic maternal milestones, local Sonoran life, and certified
              prenatal care at MomDoc Tempe.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-rose-300/80">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Written by Maya Rivera, Tempe Resident</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-rose-300/70">
              Journal Navigation
            </h3>
            <ul className="space-y-2.5 text-sm font-light">
              <li>
                <Link
                  href="/"
                  className="hover:text-rose-300 transition-colors flex items-center gap-2"
                >
                  <span>Diary Entries & Search</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/tracker"
                  className="hover:text-rose-300 transition-colors flex items-center gap-2"
                >
                  <span>40-Week Desert Growth Scale</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/momdoc-tempe"
                  className="hover:text-rose-300 transition-colors flex items-center gap-2"
                >
                  <span>MomDoc Tempe Care Guide</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-rose-300 transition-colors flex items-center gap-2"
                >
                  <span>About Maya & Family</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/my-care"
                  className="hover:text-rose-300 transition-colors flex items-center gap-2"
                >
                  <span>Local Resource Guide</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/kitchen-sink"
                  className="hover:text-rose-300 transition-colors flex items-center gap-2"
                >
                  <span>Design System & Kitchen Sink</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: MomDoc Tempe Local SEO Spotlight */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-rose-300/70">
              MomDoc Tempe Clinic
            </h3>
            <div className="bg-stone-900/90 p-4 rounded-2xl border border-stone-800 space-y-2.5 text-xs text-stone-300">
              <p className="font-semibold text-white flex items-center gap-2 font-serif text-sm">
                <Heart className="w-3.5 h-3.5 text-rose-400 fill-current" />
                {MOMDOC_TEMPE_INFO.name}
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>
                  {MOMDOC_TEMPE_INFO.address}, {MOMDOC_TEMPE_INFO.city},{" "}
                  {MOMDOC_TEMPE_INFO.state} {MOMDOC_TEMPE_INFO.zip}
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`tel:${MOMDOC_TEMPE_INFO.phone}`}
                  className="hover:underline text-stone-200 font-medium"
                >
                  {MOMDOC_TEMPE_INFO.phone}
                </a>
              </p>
              <a
                href={MOMDOC_TEMPE_INFO.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-rose-400 hover:text-rose-300 font-medium pt-1 text-xs"
              >
                <span>Visit MomDoc Tempe Website</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Col 4: Key Milestones Summary */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-rose-300/70">
              Key Dates & Due Date
            </h3>
            <ul className="space-y-2.5 text-xs font-light">
              <li className="flex justify-between pb-1.5 border-b border-stone-800">
                <span className="text-stone-400">Pregnancy Discovery:</span>
                <span className="font-serif font-bold text-stone-200">
                  August 15, 2025
                </span>
              </li>
              <li className="flex justify-between pb-1.5 border-b border-stone-800">
                <span className="text-stone-400">Anatomy Scan:</span>
                <span className="font-serif font-bold text-stone-200">
                  December 5, 2025
                </span>
              </li>
              <li className="flex justify-between pb-1.5 border-b border-stone-800">
                <span className="text-stone-400">Baby Mateo Arrival:</span>
                <span className="font-serif font-bold text-rose-400">
                  April 22, 2026
                </span>
              </li>
              <li className="flex justify-between">
                <span className="text-stone-400">Birth Location:</span>
                <span className="font-serif font-bold text-stone-200">
                  Tempe, Arizona
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row items-center justify-between text-xs text-stone-400 gap-4">
          <p>
            &copy; 2025–2026 Desert Bloom Diary &bull; Maya Rivera. All rights
            reserved. Created in partnership with MomDoc Tempe.
          </p>
          <p className="max-w-md text-stone-400 text-center md:text-right font-light">
            Disclaimer: Personal pregnancy journal for documentation and
            educational local SEO. Always consult qualified healthcare
            professionals at MomDoc for personal medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
