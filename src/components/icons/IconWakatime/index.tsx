import React, { FC } from 'react'

import { Contact } from '@consts'

import { Icon, IRCLIconProps as IProps } from '@neikan/rc-lib'
import { ReactComponent as IconWakatimeSVG } from './icon-wakatime.svg'

export const IconWakatime: FC<IProps> = ({ color = 'dark', ...restProps }) => (
  <Icon color={color} title={Contact.GITHUB} {...restProps} >
    <IconWakatimeSVG />
  </Icon>
)
