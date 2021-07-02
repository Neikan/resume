import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import Backend from 'i18next-fetch-backend'
import intervalPlural from 'i18next-intervalplural-postprocessor'
import LanguageDetector from 'i18next-browser-languagedetector'

import { Language, NS, StorageKey } from '@consts/common'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(intervalPlural)
  .init({
    lng: window.localStorage.getItem(StorageKey.LANGUAGE) ?? Language.EN,
    fallbackLng: [Language.EN, Language.RU],
    preload: [Language.EN, Language.RU],
    ns: NS,
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json'
    },
    debug: false,

    react: {
      useSuspense: true,
      wait: true
    },

    interpolation: {
      escapeValue: false
    }
  })

export default i18n
