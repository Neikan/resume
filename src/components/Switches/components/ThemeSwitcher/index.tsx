import React, { FC, useState } from 'react'

import { StorageKey, Theme, ToggleType } from '@consts/common'

import { Toggle } from '@components'

export const ThemeSwitcher: FC = () => {
  const themeFromStorage = window.localStorage.getItem(StorageKey.THEME) ?? Theme.LIGHT

  document.body.classList.add(themeFromStorage)

  let isLight = themeFromStorage === Theme.LIGHT
  const newTheme = isLight ? Theme.DARK : Theme.LIGHT

  const [value, setValue] = useState<boolean>(isLight)

  const handleChangeTheme = (): void => {
    document.body.classList.toggle(themeFromStorage)
    document.body.classList.toggle(newTheme)
    window.localStorage.setItem(StorageKey.THEME, newTheme)
    isLight = newTheme === Theme.LIGHT

    setValue(isLight)
  }

  return (
    <Toggle
      classes='switches__theme'
      name='themeSwitcher'
      onChange={handleChangeTheme}
      type={ToggleType.THEME}
      value={value}
    />
  )
}
