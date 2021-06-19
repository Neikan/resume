import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

import {
  IconAngular,
  IconGraphQL,
  IconIonic,
  IconKotlin,
  IconNextJS,
  IconSvelte,
  IconVue
} from '@components/icons'

export const FutureInterests: FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <span className='about__text'>
        {t('about:intro.future')}
      </span>

      <span className='about__text'>
        {t('about:intro.interests')}
        <span className='about__interests'>
          <IconNextJS />
          <IconVue />
          <IconAngular />
          <IconSvelte />
          <IconGraphQL />
          <IconIonic />
          <IconKotlin />
        </span>
      </span>
    </>
  )
}
