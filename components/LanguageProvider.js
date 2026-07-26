"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import translations from "@/lib/translations";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("fj_lang") : null;
    if (saved === "hi" || saved === "en") {
      setLang(saved);
    }
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
    if (typeof window !== "undefined") {
      localStorage.setItem("fj_lang", lang);
    }
  }, [lang]);

  const value = useMemo(() => {
    const dict = translations[lang] || translations.hi;
    return {
      lang,
      setLang,
      toggleLang: () => setLang((l) => (l === "hi" ? "en" : "hi")),
      t: (key) => dict[key] ?? key,
    };
  }, [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
