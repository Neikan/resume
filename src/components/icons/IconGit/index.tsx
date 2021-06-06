import React, { FC } from 'react'

import { Technology } from '@consts/technologies'

import { Icon, IRCLIconProps as IProps } from '@neikan/rc-lib'
import { ReactComponent as IconGitSVG } from './icon-git.svg'

export const IconGit: FC<IProps> = ({ ...restProps }) => (
  <Icon title={Technology.GIT} {...restProps} >
    <IconGitSVG />
  </Icon>
)
