import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { Language, StorageKey, ToggleType } from '@consts/common'

import { Toggle } from '@components'

export const LanguageSwitcher: FC = () => {
  const { i18n } = useTranslation()

  const isRu = i18n.language === Language.RU
  const newLanguage = isRu ? Language.EN : Language.RU

  const handleChangeLanguage = (langKey: string) => (): Promise<void> =>
    i18n.changeLanguage(langKey).then(() => window.localStorage.setItem(StorageKey.LANGUAGE, langKey))

  return (
    <Toggle
      classes='switches__language'
      name='languageSwitcher'
      onChange={handleChangeLanguage(newLanguage)}
      type={ToggleType.LANGUAGE}
      value={isRu}
    />
  )
}
