import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { IconReact, IconRedux, IconSASS, IconTS } from '@components/common/icons'

export const MainStack: FC = () => {
  const { t } = useTranslation()

  return (
    <span className='about__text'>
      {t('about:intro.stack')}
      <span className='about__stack'>
        <IconTS />
        <IconReact />
        <IconRedux />
        <IconSASS />
      </span>
    </span>
  )
}
