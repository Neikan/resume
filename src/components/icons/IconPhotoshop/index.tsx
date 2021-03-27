import React, { FC } from 'react'

import { Icon, IRCLIconProps as IProps } from '@neikan/rc-lib'
import { ReactComponent as IconPhotoshopSVG } from './icon-photoshop.svg'

export const IconPhotoshop: FC<IProps> = ({ ...restProps }) => (
  <Icon {...restProps} >
    <IconPhotoshopSVG />
  </Icon>
)
