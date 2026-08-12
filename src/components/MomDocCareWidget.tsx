import React from "react";
import { MOMDOC_TEMPE_INFO } from "@/data/momdocInfo";
import {
  MapPin,
  Phone,
  Clock,
  ExternalLink,
  ShieldCheck,
  Heart,
  Stethoscope,
  Sparkles,
} from "lucide-react";

export function MomDocCareWidget() {
  return (
    <section className="bg-gradient-to-br from-sage-900 via-stone-900 to-stone-900 text-white rounded-3xl p-8 sm:p-10 border border-sage-800 shadow-2xl space-y-8 relative overflow-hidden">
      {/* Subtle background bloom graphic */}
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-terracotta-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-stone-800 pb-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-800/80 text-sage-300 text-xs font-bold uppercase tracking-wider border border-sage-700">
            <Stethoscope className="w-3.5 h-3.5 text-sage-400" />
            <span>Local Prenatal & Midwifery Care</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white">
            {MOMDOC_TEMPE_INFO.name}
          </h2>
          <p className="text-sm text-stone-300">{MOMDOC_TEMPE_INFO.tagline}</p>
        </div>

        <a
          href={MOMDOC_TEMPE_INFO.website}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-terracotta-600 hover:bg-terracotta-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all shrink-0 border border-terracotta-500"
        >
          <span>Schedule Visit at MomDoc Tempe</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      {/* Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Clinic Contact & Hours */}
        <div className="lg:col-span-5 space-y-4 bg-stone-800/60 p-6 rounded-2xl border border-stone-700/60 text-xs text-stone-300">
          <h3 className="text-sm font-bold uppercase tracking-wider text-sage-300 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-terracotta-400" />
            Clinic Location & Details
          </h3>

          <div className="space-y-2.5 pt-1 text-sm">
            <p className="font-medium text-white flex items-start gap-2">
              <MapPin className="w-4 h-4 text-terracotta-400 shrink-0 mt-0.5" />
              <span>
                {MOMDOC_TEMPE_INFO.address}, {MOMDOC_TEMPE_INFO.city},{" "}
                {MOMDOC_TEMPE_INFO.state} {MOMDOC_TEMPE_INFO.zip}
              </span>
            </p>

            <p className="flex items-center gap-2 text-stone-200">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <a
                href={`tel:${MOMDOC_TEMPE_INFO.phone}`}
                className="hover:underline font-bold"
              >
                {MOMDOC_TEMPE_INFO.phone}
              </a>
            </p>
          </div>

          <div className="pt-3 border-t border-stone-700/80 space-y-1.5">
            <span className="text-xs font-bold text-stone-400 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              Clinic Hours:
            </span>
            {MOMDOC_TEMPE_INFO.hours.map((h, i) => (
              <p key={i} className="text-xs text-stone-300">
                {h}
              </p>
            ))}
          </div>

          <div className="pt-2">
            <a
              href="https://maps.google.com/?q=2149+E+Warner+Rd+Tempe+AZ+85284"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-terracotta-400 hover:text-terracotta-300 font-bold text-xs"
            >
              <span>Get Directions to South Tempe Clinic</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Right Column: Services & Highlights */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-sage-300">
              Comprehensive Maternal Care Services
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {MOMDOC_TEMPE_INFO.services.map((service, idx) => (
                <div
                  key={idx}
                  className="bg-stone-800/40 p-3 rounded-xl border border-stone-700/50 flex items-center gap-2.5 text-stone-200"
                >
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tempe Patient Experience note */}
          <div className="bg-terracotta-950/60 p-4 rounded-2xl border border-terracotta-800/60 flex items-start gap-3">
            <Heart className="w-5 h-5 text-terracotta-400 shrink-0 mt-0.5 fill-current" />
            <div className="text-xs text-terracotta-200 space-y-1">
              <p className="font-bold text-white">
                Maya Rivera's Patient Experience
              </p>
              <p className="leading-relaxed">
                "The nurse midwives and physicians at MomDoc Tempe provided
                steady, trauma-informed care throughout my entire 40 weeks. They
                listened carefully to my birth preferences and ensured a smooth,
                safe delivery for baby Mateo."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
