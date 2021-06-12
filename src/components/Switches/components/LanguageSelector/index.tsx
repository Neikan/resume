import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { Languages, STORAGE_LANGUAGE_KEY } from '@consts/common'

import { Toggle } from '@components'

export const LanguageSelector: FC = () => {
  const { i18n } = useTranslation()

  const isEn = i18n.language === Languages.EN
  const newLanguage = isEn ? Languages.RU : Languages.EN

  const handleChangeLanguage = (langKey: string) => (): Promise<void> => {
    return i18n
      .changeLanguage(langKey)
      .then(() => window.localStorage.setItem(STORAGE_LANGUAGE_KEY, langKey))
  }

  return (
    <Toggle
      classes='switches__language'
      name='languageToggle'
      onChange={handleChangeLanguage(newLanguage)}
      value={i18n.language === Languages.EN}
    />
  )
}
