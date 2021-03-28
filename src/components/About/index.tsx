import React, { FC } from 'react'

import { useTranslation } from 'react-i18next'

import { IAboutProps as IProps } from './types'

export const About: FC<IProps> = (props) => {
  const { classes = '' } = props
  const { t } = useTranslation()

  return (
    <div className={classes}>
      {t('about:intro')}
    </div>
  )
}
