import React, { FC } from 'react'

import { Icon, IRCLIconProps as IProps } from '@neikan/rc-lib'
import { ReactComponent as IconLessSVG } from './icon-less.svg'

export const IconLess: FC<IProps> = ({ ...restProps }) => (
  <Icon {...restProps} >
    <IconLessSVG />
  </Icon>
)
