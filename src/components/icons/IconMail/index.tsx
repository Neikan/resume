import React, { FC } from 'react'

import { Icon, IRCLIconProps as IProps } from '@neikan/rc-lib'
import { ReactComponent as IconMailSVG } from './icon-mail.svg'

export const IconMail: FC<IProps> = ({ ...restProps }) => (
  <Icon {...restProps} >
    <IconMailSVG />
  </Icon>
)
