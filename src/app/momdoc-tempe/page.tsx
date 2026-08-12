import React from "react";
import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MOMDOC_TEMPE_INFO } from "@/data/momdocInfo";
import {
  Stethoscope,
  MapPin,
  Phone,
  ExternalLink,
  ShieldCheck,
  Sparkles,
  HelpCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "MomDoc Tempe OB/GYN Care | Desert Bloom Diary",
  description:
    "Learn about MomDoc Tempe OB/GYN prenatal care, 3D ultrasounds, and maternal wellness located at 1634 S. Priest Dr., Tempe, AZ.",
};

export default function MomDocTempePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: MOMDOC_TEMPE_INFO.name,
    description: MOMDOC_TEMPE_INFO.tagline,
    address: {
      "@type": "PostalAddress",
      streetAddress: MOMDOC_TEMPE_INFO.address,
      addressLocality: MOMDOC_TEMPE_INFO.city,
      addressRegion: MOMDOC_TEMPE_INFO.state,
      postalCode: MOMDOC_TEMPE_INFO.zip,
      addressCountry: "US",
    },
    telephone: MOMDOC_TEMPE_INFO.phone,
    url: MOMDOC_TEMPE_INFO.website,
    openingHours: ["Mo-Th 08:00-17:00", "Fr 08:00-16:00"],
    medicalSpecialty: ["Obstetric", "Gynecologic"],
  };

  const faqs = [
    {
      q: "Where is MomDoc Tempe located?",
      a: "MomDoc Tempe is located at 1634 S. Priest Dr., Tempe, AZ 85281, near the intersection of Priest Drive and Broadway Road in Tempe.",
    },
    {
      q: "What care model does MomDoc Tempe offer?",
      a: "MomDoc Tempe features dedicated board-certified OB/GYN physicians and women’s health professionals who offer compassionate, comprehensive prenatal care, ultrasound scans, and birth consultations.",
    },
    {
      q: "What prenatal services are available on site?",
      a: "Services include routine prenatal checkups, 3D/4D fetal ultrasound scans, gestational glucose screening, high-risk pregnancy management, blood pressure monitoring, and postpartum follow-up checkups.",
    },
    {
      q: "How do I schedule an appointment at MomDoc Tempe?",
      a: "You can call MomDoc Tempe directly at (480) 820-6657 or book an intake visit online through the official MomDoc patient portal.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-sand-50 dark:bg-stone-900 text-stone-900 dark:text-stone-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />

      <main className="flex-1 py-12 sm:py-16 space-y-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Hero Header */}
          <div className="bg-gradient-to-br from-sage-900 via-stone-900 to-stone-900 text-white rounded-3xl p-8 sm:p-12 border border-sage-800 shadow-2xl space-y-6 relative overflow-hidden">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sage-800 text-sage-300 text-xs font-semibold uppercase tracking-wider border border-sage-700">
                <Stethoscope className="w-4 h-4 text-sage-400" />
                <span>Tempe OB/GYN Clinic</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                {MOMDOC_TEMPE_INFO.name}
              </h1>
              <p className="text-base sm:text-lg text-stone-300">
                {MOMDOC_TEMPE_INFO.tagline}. Maya Rivera’s trusted care partner
                throughout her 40-week Tempe pregnancy journey.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href={MOMDOC_TEMPE_INFO.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-terracotta-600 hover:bg-terracotta-700 text-white font-bold text-sm shadow-md transition-all border border-terracotta-500"
                >
                  <span>Schedule Appointment Online</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href={`tel:${MOMDOC_TEMPE_INFO.phone}`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-stone-800 hover:bg-stone-700 text-stone-200 font-bold text-sm border border-stone-700 transition-all"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Call {MOMDOC_TEMPE_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Details & Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: Clinic Contact & Hours */}
            <div className="lg:col-span-5 bg-white dark:bg-stone-800 p-8 rounded-3xl border border-sand-200 dark:border-stone-700 shadow-xl space-y-6">
              <h2 className="font-serif text-2xl font-bold text-stone-900 dark:text-white flex items-center gap-2">
                <MapPin className="w-6 h-6 text-terracotta-600" />
                <span>Clinic Location</span>
              </h2>

              <div className="space-y-4 text-sm text-stone-700 dark:text-stone-300 font-light">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-400 block mb-1">
                    Street Address
                  </span>
                  <p className="font-semibold text-stone-900 dark:text-stone-100">
                    {MOMDOC_TEMPE_INFO.address}
                  </p>
                  <p>
                    {MOMDOC_TEMPE_INFO.city}, {MOMDOC_TEMPE_INFO.state}{" "}
                    {MOMDOC_TEMPE_INFO.zip}
                  </p>
                </div>

                <div className="pt-2 border-t border-sand-200 dark:border-stone-700">
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-400 block mb-1">
                    Direct Phone Number
                  </span>
                  <a
                    href={`tel:${MOMDOC_TEMPE_INFO.phone}`}
                    className="font-bold text-terracotta-600 dark:text-terracotta-400 text-base hover:underline"
                  >
                    {MOMDOC_TEMPE_INFO.phone}
                  </a>
                </div>

                <div className="pt-2 border-t border-sand-200 dark:border-stone-700 space-y-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-400 block mb-1">
                    Office Hours
                  </span>
                  {MOMDOC_TEMPE_INFO.hours.map((h, idx) => (
                    <p
                      key={idx}
                      className="text-xs text-stone-600 dark:text-stone-400"
                    >
                      {h}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Highlights & Services */}
            <div className="lg:col-span-7 bg-white dark:bg-stone-800 p-8 rounded-3xl border border-sand-200 dark:border-stone-700 shadow-xl space-y-6">
              <h2 className="font-serif text-2xl font-bold text-stone-900 dark:text-white">
                Tempe Care Team Services
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {MOMDOC_TEMPE_INFO.services.map((service, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-sand-50 dark:bg-stone-900 border border-sand-200 dark:border-stone-700 flex items-center gap-3 text-stone-800 dark:text-stone-200"
                  >
                    <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span className="font-medium">{service}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-sand-200 dark:border-stone-700 space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                  Why Tempe Mothers Choose MomDoc
                </h3>
                <ul className="space-y-2 text-xs text-stone-600 dark:text-stone-300 font-light">
                  {MOMDOC_TEMPE_INFO.tempeHighlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-terracotta-500 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Frequently Asked Questions Section */}
          <section className="bg-white dark:bg-stone-800 rounded-3xl p-8 border border-sand-200 dark:border-stone-700 shadow-xl space-y-6">
            <div className="flex items-center gap-3 border-b border-sand-200 dark:border-stone-700 pb-4">
              <HelpCircle className="w-6 h-6 text-terracotta-600 dark:text-terracotta-400" />
              <h2 className="font-serif text-2xl font-bold text-stone-900 dark:text-white">
                Tempe Prenatal Care FAQs
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-sand-50 dark:bg-stone-900 p-5 rounded-2xl border border-sand-200 dark:border-stone-700/80 space-y-2"
                >
                  <h3 className="font-bold text-stone-900 dark:text-stone-100 text-sm">
                    {faq.q}
                  </h3>
                  <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed font-light">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
