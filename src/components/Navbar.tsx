"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/components/LanguageProvider";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { lang, toggleLang } = useLanguage();

  const copy = {
    fr: {
      nav: {
        home: "Accueil",
        about: "Profil",
        skills: "Compétences",
        projects: "Projets",
        contact: "Contact",
      },
      subtitle: "IoT & Systèmes embarqués",
      toggleLabel: "Basculer la langue",
    },
    en: {
      nav: {
        home: "Home",
        about: "About",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact",
      },
      subtitle: "IoT & Embedded Systems",
      toggleLabel: "Switch language",
    },
  } as const;

  const t = copy[lang];

  const navigation = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.about, href: "/about" },
    { name: t.nav.skills, href: "/skills" },
    { name: t.nav.projects, href: "/projects" },
    { name: t.nav.contact, href: "/contact" },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3">
        <div className="flex justify-between items-center h-14 rounded-2xl bg-white/80 backdrop-blur-md border border-blue-100 shadow-sm px-4">
          {/* Logo */}
          <Link href="/" className="group inline-flex items-center gap-3">
            <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-md">
              <span className="text-sm font-bold text-white tracking-wide">RT</span>
            </span>
            <span className="leading-tight">
              <span className="block text-base font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                Mohamed Rayen
              </span>
              <span className="hidden sm:block text-xs text-gray-600">
                {t.subtitle}
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2 rounded-xl bg-white/60 border border-blue-100 px-2 py-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all transform-gpu ${
                  isActive(item.href)
                    ? "text-blue-700 bg-blue-50 shadow-sm"
                    : "text-gray-700 hover:text-blue-700 hover:bg-blue-50/60"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleLang}
              className="hidden md:inline-flex h-9 items-center justify-center rounded-xl bg-white/60 border border-blue-100 px-3 text-sm font-semibold text-blue-700 hover:bg-blue-50 transition-colors"
              aria-label={t.toggleLabel}
              title={t.toggleLabel}
            >
              {lang.toUpperCase()}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors text-blue-700"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>

            <button
              type="button"
              onClick={toggleLang}
              className="md:hidden h-9 px-3 rounded-xl bg-white/60 border border-blue-100 text-sm font-semibold text-blue-700 hover:bg-blue-50 transition-colors"
              aria-label={t.toggleLabel}
              title={t.toggleLabel}
            >
              {lang.toUpperCase()}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-3 rounded-2xl bg-white/85 backdrop-blur-md border border-blue-100 shadow-sm p-2 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 rounded-lg transition-colors ${
                  isActive(item.href)
                    ? "bg-blue-100 text-blue-700 font-semibold"
                    : "text-gray-700 hover:bg-blue-50"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
