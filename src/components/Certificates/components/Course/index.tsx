import React, { FC } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useTranslation } from 'react-i18next'

import { ICourseProps as IProps } from './types'

const { t } = useTranslation()

export const Course: FC<IProps> = ({ course: { title, url } }) => (
  <li key={uuidv4()}>
    {url
      ? (
          <a className='certificates__course' href={url}>
            {t(title)}
          </a>
        )
      : (
          <span className='certificates__course'>
            {t(title)}
          </span>
        )
    }
  </li>
)
