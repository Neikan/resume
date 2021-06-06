import React, { FC } from 'react'

import { Technology } from '@consts/technologies'

import { Icon, IRCLIconProps as IProps } from '@neikan/rc-lib'
import { ReactComponent as IconLessSVG } from './icon-less.svg'

export const IconLess: FC<IProps> = ({ ...restProps }) => (
  <Icon title={Technology.LESS} {...restProps} >
    <IconLessSVG />
  </Icon>
)
