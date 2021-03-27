import React, { FC } from 'react'

import { Icon, IRCLIconProps as IProps } from '@neikan/rc-lib'
import { ReactComponent as IconCordovaSVG } from './icon-cordova.svg'

export const IconCordova: FC<IProps> = ({ ...restProps }) => (
  <Icon {...restProps} >
    <IconCordovaSVG />
  </Icon>
)
