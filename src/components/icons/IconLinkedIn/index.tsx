import React, { FC } from 'react'

import { Icon, IRCLIconProps as IProps } from '@neikan/rc-lib'
import { ReactComponent as IconLinkedInSVG } from './icon-linkedin.svg'

export const IconLinkedIn: FC<IProps> = ({ ...restProps }) => (
  <Icon {...restProps} >
    <IconLinkedInSVG />
  </Icon>
)
