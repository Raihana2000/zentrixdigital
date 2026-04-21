import React, { createContext, useState, useEffect } from 'react';
import { nl } from '../translations/nl';
import { en } from '../translations/en';

type Language = 'nl' | 'en';
type Translations = typeof nl;

export interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

export const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('nl');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem('zentrix-lang') as Language;
    if (savedLang && (savedLang === 'nl' || savedLang === 'en')) {
      setLanguageState(savedLang);
    }
    setMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('zentrix-lang', lang);
  };

  const t = language === 'nl' ? nl : en;

  if (!mounted) return null;

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};
