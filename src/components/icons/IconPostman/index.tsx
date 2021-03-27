import React, { FC } from 'react'

import { Icon, IRCLIconProps as IProps } from '@neikan/rc-lib'
import { ReactComponent as IconPostmanSVG } from './icon-postman.svg'

export const IconPostman: FC<IProps> = ({ ...restProps }) => (
  <Icon {...restProps} >
    <IconPostmanSVG />
  </Icon>
)
