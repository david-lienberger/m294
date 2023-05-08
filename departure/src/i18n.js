import translationsDe from './assets/i18n/de-translations.json';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  de: {
    translation: translationsDe,
  },
};

i18next.use(initReactI18next)
  .init({
    resources,
    lng: "de",
    fallbackLng: "de",
    interpolation: {
      escapeValue: false
    }
  })


