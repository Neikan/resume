import React, { FC } from 'react'

import { LanguageSwitcher } from './components/LanguageSwitcher'
import { ThemeSwitcher } from './components/ThemeSwitcher'

export const Switches: FC = () => {
  return (
    <div className='switches'>
      <ThemeSwitcher />
      <LanguageSwitcher />
    </div>
  )
}
