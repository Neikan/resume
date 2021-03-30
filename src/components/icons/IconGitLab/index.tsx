import React, { FC } from 'react'

import { Contact } from '@consts'

import { Icon, IRCLIconProps as IProps } from '@neikan/rc-lib'
import { ReactComponent as IconGitLabSVG } from './icon-gitlab.svg'

export const IconGitLab: FC<IProps> = ({ ...restProps }) => (
  <Icon title={Contact.GITLAB} {...restProps} >
    <IconGitLabSVG />
  </Icon>
)
