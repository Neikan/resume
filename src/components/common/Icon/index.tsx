import cn from 'classnames'
import React, { FC } from 'react'

import { IIconProps as IProps } from './types'

export const Icon: FC<IProps> = ({ children, classes, size = 'x1h', title }) => {
  const sizeClass = `icon__size--${size}`

  return (
    <span className={cn('icon', sizeClass, classes)} title={title}>
      {children}
    </span>
  )
}
