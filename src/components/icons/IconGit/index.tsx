import React, { FC } from 'react'

import { Icon, IRCLIconProps as IProps } from '@neikan/rc-lib'
import { ReactComponent as IconGitSVG } from './icon-git.svg'

export const IconGit: FC<IProps> = ({ ...restProps }) => (
  <Icon {...restProps} >
    <IconGitSVG />
  </Icon>
)
