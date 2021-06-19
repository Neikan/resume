import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

export const Name: FC = () => {
  const { t } = useTranslation()

  return (
    <span className='about__text'>
      {t('about:intro.name-1-1')}
      <span className='about__text--primary'>
        {t('about:intro.name-1-2')}
      </span>
      {t('about:intro.name-1-3')}
      <span className='about__text--through'>
        {t('about:intro.name-2')}
      </span>
      {t('about:intro.name-3-1')}
      <span className='about__text--primary'>
        {t('about:intro.name-3-2')}
      </span>
      {t('about:intro.name-3-3')}
      &#8209;
      {t('about:intro.name-3-4')}
    </span>
  )
}
