import React, { FC } from 'react'

import { useTranslation } from 'react-i18next'

import { IAboutProps as IProps } from './types'

export const About: FC<IProps> = (props) => {
  const { t } = useTranslation()

  return (
    <div className='d-flex'>
      <img src='img/foto/me.png' width='256px' height='256px' alt='foto' className='mr-6' />
      <div>
        {t('about:intro')}
      </div>
    </div>
  )
}
