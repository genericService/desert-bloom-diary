"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Flower2,
  Calendar,
  Stethoscope,
  Bookmark,
  Search,
  Menu,
  X,
  Heart,
} from "lucide-react";

interface HeaderProps {
  onSearchClick?: () => void;
}

export function Header({ onSearchClick }: HeaderProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookmarkCount, setBookmarkCount] = useState(0);

  useEffect(() => {
    const updateCount = () => {
      try {
        const saved = localStorage.getItem("desert_bloom_bookmarks");
        if (saved) {
          const parsed = JSON.parse(saved);
          setBookmarkCount(Array.isArray(parsed) ? parsed.length : 0);
        }
      } catch (e) {
        console.error("Failed to load bookmark count", e);
      }
    };

    updateCount();
    window.addEventListener("storage", updateCount);
    window.addEventListener("bookmark-updated", updateCount);
    return () => {
      window.removeEventListener("storage", updateCount);
      window.removeEventListener("bookmark-updated", updateCount);
    };
  }, []);

  const navLinks = [
    { href: "/", label: "Journal Entries", icon: Calendar },
    { href: "/tracker", label: "Growth Scale", icon: Flower2 },
    { href: "/momdoc-tempe", label: "MomDoc Care", icon: Stethoscope },
    { href: "/about", label: "About Maya", icon: Heart },
    { href: "/my-care", label: "Tempe Favorites", icon: Bookmark },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-rose-100 dark:border-stone-800 bg-sand-50/90 dark:bg-stone-900/90 backdrop-blur-md transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Masthead brand logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-terracotta-400 via-rose-500 to-terracotta-600 text-white flex items-center justify-center shadow-md shadow-terracotta-500/20 group-hover:scale-105 transition-transform">
            <Flower2 className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif font-bold text-2xl tracking-tight text-stone-900 dark:text-stone-100">
                Desert Bloom
              </span>
              <span className="text-[11px] px-2.5 py-0.5 rounded-full font-medium bg-rose-100/80 dark:bg-rose-950/80 text-rose-800 dark:text-rose-300 border border-rose-200 dark:border-rose-800">
                Tempe, AZ
              </span>
            </div>
            <p className="text-xs text-stone-500 dark:text-stone-400 font-light italic">
              Maya Rivera’s Family Notebook
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-white/90 dark:bg-stone-800/90 p-1.5 rounded-2xl border border-rose-100 dark:border-stone-700/80 shadow-2xs">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-terracotta-600 text-white shadow-xs font-bold"
                    : "text-stone-700 dark:text-stone-300 hover:text-terracotta-600 dark:hover:text-terracotta-400 hover:bg-rose-50/70 dark:hover:bg-stone-700/50"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Action icons & CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Search Button */}
          {onSearchClick && (
            <button
              onClick={onSearchClick}
              className="p-2.5 rounded-xl text-stone-600 dark:text-stone-300 hover:bg-rose-50 dark:hover:bg-stone-800 transition-colors flex items-center gap-2 border border-rose-100 dark:border-stone-700"
              title="Search journal entries"
              aria-label="Search journal entries"
            >
              <Search className="w-4 h-4 text-terracotta-600 dark:text-terracotta-400" />
              <span className="text-xs font-medium hidden sm:inline text-stone-600 dark:text-stone-400">
                Search
              </span>
            </button>
          )}

          {/* Bookmarks Counter */}
          <Link
            href="/#entries-section"
            className="relative p-2.5 rounded-xl text-stone-600 dark:text-stone-300 hover:bg-rose-50 dark:hover:bg-stone-800 transition-colors flex items-center justify-center border border-rose-100 dark:border-stone-700"
            title="Saved Bookmarks"
          >
            <Bookmark className="w-4 h-4 text-terracotta-600 dark:text-terracotta-400" />
            {bookmarkCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-terracotta-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-xs">
                {bookmarkCount}
              </span>
            )}
          </Link>

          {/* MomDoc Tempe Care Button */}
          <a
            href="https://www.momdoc.com/en/locations/tempe"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2 px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold shadow-xs hover:shadow-md transition-all border border-rose-500"
          >
            <Heart className="w-3.5 h-3.5 fill-current text-white/90" />
            <span>MomDoc Tempe Care</span>
          </a>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl text-stone-700 dark:text-stone-200 hover:bg-rose-50 dark:hover:bg-stone-800"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-rose-100 dark:border-stone-800 bg-sand-50 dark:bg-stone-900 px-4 py-4 space-y-2 animate-in slide-in-from-top">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium ${
                  isActive
                    ? "bg-terracotta-600 text-white font-bold"
                    : "text-stone-700 dark:text-stone-300 hover:bg-rose-50 dark:hover:bg-stone-800"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{link.label}</span>
              </Link>
            );
          })}
          <div className="pt-2">
            <a
              href="https://www.momdoc.com/en/locations/tempe"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-rose-600 text-white font-bold text-sm shadow-xs"
            >
              <Heart className="w-4 h-4 fill-current" />
              <span>MomDoc Tempe Care Schedule</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
