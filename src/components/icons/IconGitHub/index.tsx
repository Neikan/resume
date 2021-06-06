import React, { FC } from 'react'

import { Icon, IRCLIconProps as IProps } from '@neikan/rc-lib'
import { ReactComponent as IconGitHubSVG } from './icon-github.svg'

export const IconGitHub: FC<IProps> = ({ color = 'dark', ...restProps }) => (
  <Icon color={color} {...restProps} >
    <IconGitHubSVG />
  </Icon>
)
