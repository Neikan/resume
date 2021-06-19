import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

export const Name: FC = () => {
  const { t } = useTranslation()

  return (
    <span className='about__text'>
      {t('about:intro.name-is')}
      <span className='about__text--primary'>
        {t('about:intro.name-name')}
      </span>
      {t('about:intro.name-and')}
      <span className='about__text--through'>
        {t('about:intro.name-batman')}
      </span>
      {t('about:intro.name-smile')}
      <span className='about__text--primary'>
        {t('about:intro.name-f-dev')}
      </span>
      {t('about:intro.name-city-1')}
      &#8209;
      {t('about:intro.name-city-2')}
    </span>
  )
}
