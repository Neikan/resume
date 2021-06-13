import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

export const Education: FC = () => {
  const { t } = useTranslation()

  return (
    <section className='content__education education'>
      <h3 className='education__title'>{t('education:title')}</h3>
      <p className='education__info'>
        <span className='education__subtitle'>
          {t('education:university')}
        </span>

        <span className='education__detailes'>
          <span className='education__subtitle'>
            {t('education:faculty.title')}
          </span>
          <span>
            {t('education:faculty.description')}
          </span>
        </span>

        <span className='education__detailes'>
          <span className='education__subtitle'>
            {t('education:speciality.title')}
          </span>
          <span>
            {t('education:speciality.description')}
          </span>
        </span>
      </p>
    </section>
  )
}
