import cn from 'classnames'
import React, { FC } from 'react'

import { Tooltip } from '@components/common/Tooltip'

import { IIconProps as IProps } from './types'

export const Icon: FC<IProps> = ({ children, classes, size = 'x1h', title }) => {
  const sizeClass = `icon__size--${size}`

  return (
    <span className={cn('icon tooltip', sizeClass, classes)}>
      {children}
      {title ? <Tooltip title={title} /> : null}
    </span>
  )
}
