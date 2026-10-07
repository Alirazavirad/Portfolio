"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { translations } from "./translation";

type Language = "fa" | "en";

type LanguageContextType = {
  language: Language;
  changeLanguage: () => void;
  t: (typeof translations)[Language];
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [language, setLanguage] = useState<Language | null>(null);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");

    if (savedLanguage === "fa" || savedLanguage === "en") {
      setLanguage(savedLanguage);
    } else {
      setLanguage("fa");
    }
  }, []);

  const changeLanguage = () => {
    setLanguage((prev) => {
      const newLanguage = prev === "fa" ? "en" : "fa";

      localStorage.setItem("language", newLanguage);

      return newLanguage;
    });
  };

  useEffect(() => {
    if (!language) return;

    document.documentElement.lang = language;
    document.documentElement.dir = language === "fa" ? "rtl" : "ltr";

    document.body.classList.remove("font-fa", "font-en");

    document.body.classList.add(
      language === "fa" ? "font-fa" : "font-en"
    );
  }, [language]);

  if (!language) {
    return null;
  }

  const t = translations[language];

  return (
    <LanguageContext.Provider
      value={{
        language,
        changeLanguage,
        t,
      }}
    >
      <div dir={language === "fa" ? "rtl" : "ltr"}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}