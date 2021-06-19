import React, { FC } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useTranslation } from 'react-i18next'

import { ICourseProps as IProps } from './types'
import { LinkTarget } from '@consts/common'

export const Course: FC<IProps> = ({ course: { title, url }, index }) => {
  const { t } = useTranslation()

  const translatedTitle = t(title)
  const target = `${LinkTarget.CERTIFICATES}${index}`

  return (
    <li key={uuidv4()}>
      {url
        ? (
            <a className='certificates__course' href={url} target={target}>
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
