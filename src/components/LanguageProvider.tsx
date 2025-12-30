"use client";

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

export type Language = "fr" | "en";

type LanguageContextValue = {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getInitialLanguage(): Language {
  return "fr";
}

export default function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lang, setLangState] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    const saved = window.localStorage.getItem("portfolio_lang");
    if (saved === "fr" || saved === "en") {
      setLangState(saved);
      return;
    }

    const browser = (navigator.language || "").toLowerCase();
    const inferred: Language = browser.startsWith("fr") ? "fr" : "en";
    setLangState(inferred);
  }, []);

  const setLang = useCallback((next: Language) => {
    setLangState(next);
    try {
      window.localStorage.setItem("portfolio_lang", next);
    } catch {
      // ignore
    }
  }, []);

  const toggleLang = useCallback(() => setLang(lang === "fr" ? "en" : "fr"), [lang, setLang]);

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang, toggleLang }),
    [lang, setLang, toggleLang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
