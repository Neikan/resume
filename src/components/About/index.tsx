import React, { FC } from 'react'
// import { withTranslation } from 'react-i18next'
import { useTranslation } from 'react-i18next'

import { IAboutProps as IProps } from './types'

const About: FC<IProps> = (props) => {
  const { classes = '' } = props
  const { t } = useTranslation()

  return (
    <div className={classes}>
      {'Обо мне'}
      {t('about:intro')}
    </div>
  )
}

export default About
