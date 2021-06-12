import React, { FC } from 'react'

import { LanguageSelector } from './components/LanguageSelector'

export const Switches: FC = () => {
  return (
    <div className='switches'>
      <LanguageSelector />
    </div>
  )
}
