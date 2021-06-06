import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { IAboutProps as IProps } from './types'

export const About: FC<IProps> = () => {
  const { t } = useTranslation()

  return (
    <section className='about'>
      <div>
        <img src='img/foto/me.png' alt='photo of Eugene' className='about__photo' />
      </div>
      <p className='about__intro'>
        {t('about:intro')}
      </p>
    </section>
  )
}
