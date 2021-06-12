import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

export const Education: FC = () => {
  const { t } = useTranslation()

  return (
    <section className='education'>
      <h3 className='education__title'>{t('education:title')}</h3>
      <p className='education__info'>
        <span className='education__info-university'>{t('education:university')}</span>
        <span className='education__info-faculty'>{t('education:faculty.title')}</span>{t('education:faculty.description')}
        <span className='education__info-speciality'>{t('education:speciality.title')}</span>{t('education:speciality.description')}
      </p>
    </section>
  )
}
