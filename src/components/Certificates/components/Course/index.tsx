import React, { FC } from 'react'

import { ICourseProps as IProps } from './types'

export const Course: FC<IProps> = ({ course: { title, url } }) => {
  return (
    <li key={title}>
      {url
        ? (
            <a className='certificates__course' href={url}>
              {title}
            </a>
          )
        : (
            <span className='certificates__course'>
              {title}
            </span>
          )
      }
    </li>
  )
}
