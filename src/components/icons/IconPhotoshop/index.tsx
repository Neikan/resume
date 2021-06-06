import React, { FC } from 'react'

import { Technology } from '@consts/technologies'

import { Icon, IRCLIconProps as IProps } from '@neikan/rc-lib'
import { ReactComponent as IconPhotoshopSVG } from './icon-photoshop.svg'

export const IconPhotoshop: FC<IProps> = ({ ...restProps }) => (
  <Icon title={Technology.PHOTOSHOP} {...restProps} >
    <IconPhotoshopSVG />
  </Icon>
)
