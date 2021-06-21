import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { FutureInterests } from './components/FutureInterests'
import { MainStack } from './components/MainStack'
import { Name } from './components/Name'

export const Texts: FC = () => {
  const { t } = useTranslation()

  return (
    <p>
      <span className='about__welcome'>
        {t('about:intro.welcome')}
      </span>
      <Name />
      <span className='about__text'>
        {t('about:intro.path')}
      </span>

      <MainStack />
      <FutureInterests />
    </p>
  )
}
