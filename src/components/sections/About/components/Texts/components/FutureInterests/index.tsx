import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

import {
  IconDart,
  IconFlutter,
  IconKotlin
} from '@components/common/icons'

export const FutureInterests: FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <span className='about__text'>{t('about:intro.future')}</span>

      <span className='about__text'>
        {t('about:intro.interests')}
        <span className='about__interests'>
          <IconFlutter />
          <IconDart />
          <IconKotlin />
        </span>
      </span>
    </>
  )
}
