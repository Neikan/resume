import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

import {
  IconGraphQL,
  IconIonic,
  IconKotlin,
  IconNextJS,
  IconReact,
  IconRedux,
  IconSASS,
  IconTS,
  IconVue
} from '@components/icons'

export const Text: FC = () => {
  const { t } = useTranslation()

  return (
    <p>
      <span className='about__text'>{t('about:intro.welcome')}</span>
      <span className='about__text'>
        {t('about:intro.name-1')}
        <span className='about__text--through'>{t('about:intro.name-2')}</span>
        {t('about:intro.name-3')}
      </span>
      <span className='about__text'>{t('about:intro.path')}</span>
      <span className='about__text'>
        {t('about:intro.stack')}
        <span className='about__stack'>
          <IconTS />
          <IconReact />
          <IconRedux />
          <IconSASS />
        </span>
      </span>
      <span className='about__text'>{t('about:intro.future')}</span>
      <span className='about__text'>
        {t('about:intro.interests')}
        <span className='about__interests'>
          <IconNextJS />
          <IconVue />
          <IconGraphQL />
          <IconIonic />
          <IconKotlin />
        </span>
      </span>
    </p>
  )
}
