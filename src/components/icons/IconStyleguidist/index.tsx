import React, { FC } from 'react'

import { Icon, IRCLIconProps as IProps } from '@neikan/rc-lib'
import { ReactComponent as IconStyleguidistSVG } from './icon-styleguidist.svg'

export const IconStyleguidist: FC<IProps> = ({ ...restProps }) => (
  <Icon {...restProps} >
    <IconStyleguidistSVG />
  </Icon>
)
