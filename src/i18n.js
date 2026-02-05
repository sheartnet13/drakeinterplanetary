import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translations from JSON files
import translationsEs from './data/translations/es.json';
import translationsEn from './data/translations/en.json';

// Translation resources
const resources = {
  es: {
    translation: translationsEs
  },
  en: {
    translation: translationsEn
  }
};

i18n
  .use(initReactI18next) // Connects i18next with React
  .init({
    resources,
    lng: localStorage.getItem('language') || 'es', // Load saved language or default to Spanish
    fallbackLng: 'es', // Fallback language: Spanish
    interpolation: {
      escapeValue: false // React already escapes by default
    }
  });

export default i18n;
