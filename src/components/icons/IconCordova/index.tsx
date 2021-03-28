import React, { FC } from 'react'

import { Technology } from '@consts'

import { Icon, IRCLIconProps as IProps } from '@neikan/rc-lib'
import { ReactComponent as IconCordovaSVG } from './icon-cordova.svg'

export const IconCordova: FC<IProps> = ({ ...restProps }) => (
  <Icon title={Technology.CORDOVA} {...restProps} >
    <IconCordovaSVG />
  </Icon>
)
