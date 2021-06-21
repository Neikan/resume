import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

export const Name: FC = () => {
  const { t } = useTranslation()

  return (
    <span className='about__text'>
      {t('about:intro.is')}
      <span className='about__text--primary'>
        {t('about:intro.name')}
      </span>
      {t('about:intro.and')}
      <span className='about__text--through'>
        {t('about:intro.batman')}
      </span>
      {t('about:intro.smile')}
      <span className='about__text--primary'>
        {t('about:intro.f-dev')}
      </span>
      {t('about:intro.city-1')}
      &#8209;
      {t('about:intro.city-2')}
    </span>
  )
}
