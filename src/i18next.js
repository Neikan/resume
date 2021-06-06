import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import Backend from 'i18next-fetch-backend'
import intervalPlural from 'i18next-intervalplural-postprocessor'
import LanguageDetector from 'i18next-browser-languagedetector'

import { Languages, NS } from '@consts/common'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(intervalPlural)
  .init({
    lng: window.localStorage.getItem('i18next.lang') ?? Languages.EN,
    fallbackLng: [Languages.EN, Languages.RU],
    preload: [Languages.EN, Languages.RU],
    ns: NS,
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json'
    },
    debug: false,

    react: {
      useSuspense: false,
      wait: true
    },

    interpolation: {
      escapeValue: false
    }
  })

export default i18n
