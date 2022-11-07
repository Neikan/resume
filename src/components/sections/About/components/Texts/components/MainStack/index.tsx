import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { IconDart, IconFlutter } from '@components/common/icons'

export const MainStack: FC = () => {
  const { t } = useTranslation()

  return (
    <span className='about__text'>
      {t('about:intro.stack')}
      <span className='about__stack'>
        <IconFlutter />
        <IconDart />
      </span>
    </span>
  )
}
