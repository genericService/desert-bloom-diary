import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Desert Bloom Diary | Maya Rivera’s 40-Week Tempe Pregnancy Journal",
  description:
    "Maya Rivera contemporaneous 40-week pregnancy diary in Tempe, Arizona (August 2025 – April 2026). Real milestones, Sonoran desert growth scale, and prenatal care at MomDoc Tempe.",
  keywords: [
    "Pregnancy Diary",
    "Tempe AZ Pregnancy",
    "MomDoc Tempe",
    "MomDoc OBGYN",
    "Certified Nurse Midwife Tempe",
    "Sonoran Desert Pregnancy",
    "40 Week Fetal Growth",
    "Maya Rivera",
    "Mateo Rivera",
  ],
  metadataBase: new URL("https://desertbloomdiary.com"),
  openGraph: {
    title: "Desert Bloom Diary | Maya Rivera’s Tempe Pregnancy Journal",
    description:
      "Contemporaneous 40-week pregnancy journey in Tempe, Arizona, supported by MomDoc Tempe.",
    url: "https://desertbloomdiary.com",
    siteName: "Desert Bloom Diary",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-sand-50 dark:bg-stone-900 text-stone-900 dark:text-stone-100 selection:bg-terracotta-200 selection:text-terracotta-900">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
