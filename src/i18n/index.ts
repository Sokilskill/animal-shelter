import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en/translation";
import uk from "./locales/uk/translation";

const resources = {
  uk: uk,
  en: en,
};
i18n
  .use(LanguageDetector) // Додає автоматичне визначення мови
  .use(initReactI18next) // Інтеграція з React
  .init({
    resources,
    fallbackLng: "uk",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
