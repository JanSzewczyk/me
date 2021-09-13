import i18n from "i18next";
import Backend from "i18next-xhr-backend";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from "locales/en/translation.json";
import qualificationEN from "locales/en/qualification.json";
import translationPL from "locales/pl/translation.json";

export const defaultNS = "translation";

export const resources = {
  en: {
    translation: translationEN,
    qualification: qualificationEN
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
    debug: process.env.NODE_ENV === "development",
    resources,
    defaultNS,
    fallbackLng: "en",

    interpolation: {
      escapeValue: false // react already safes from xss
    },
    react: {
      useSuspense: false
    }
  });

export default i18n;
