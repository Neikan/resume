import React, { FC } from 'react'

import { Contact } from '@consts'

import { Icon, IRCLIconProps as IProps } from '@neikan/rc-lib'
import { ReactComponent as IconLinkedInSVG } from './icon-linkedin.svg'

export const IconLinkedIn: FC<IProps> = ({ ...restProps }) => (
  <Icon title={Contact.GITHUB} {...restProps} >
    <IconLinkedInSVG />
  </Icon>
)
