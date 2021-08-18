import i18n from "i18next";
import Backend from "i18next-xhr-backend";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from "locales/en/translation.json";
import translationPL from "locales/pl/translation.json";

export const defaultNS = "translation";

export const resources = {
  en: {
    translation: translationEN
  },
  pl: {
    translation: translationPL
  }
} as const;

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    resources,
    defaultNS,
    fallbackLng: "en",

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
