import React, { FC } from 'react'

import { Contact } from '@consts'

import { Icon, IRCLIconProps as IProps } from '@neikan/rc-lib'
import { ReactComponent as IconGitHubSVG } from './icon-github.svg'

export const IconGitHub: FC<IProps> = ({ color = 'dark', ...restProps }) => (
  <Icon color={color} title={Contact.GITHUB} {...restProps} >
    <IconGitHubSVG />
  </Icon>
)
