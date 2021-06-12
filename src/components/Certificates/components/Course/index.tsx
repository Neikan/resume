import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { ICourseProps as IProps } from './types'

export const Course: FC<IProps> = ({ course: { title, url } }) => {
  const { t } = useTranslation()

  const translatedTitle = t(title)

  return (
    <li key={title}>
      {url
        ? (
            <a className='certificates__course' href={url}>
              {translatedTitle}
            </a>
          )
        : (
            <span className='certificates__course'>
              {translatedTitle}
            </span>
          )
      }
    </li>
  )
}
