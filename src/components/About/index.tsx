import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { Contacts, JobExperience } from '@components'

import { IAboutProps as IProps } from './types'

export const About: FC<IProps> = () => {
  const { t } = useTranslation()

  return (
    <div className='d-flex'>
      <div>
        <img src='img/foto/me.png' alt='photo of Eugene' className='contacts__photo' />
        <Contacts />
      </div>
      <div className='d-flex flex-column flex-grow-1'>
        {t('about:intro')}
        <JobExperience />
      </div>
    </div>
  )
}
