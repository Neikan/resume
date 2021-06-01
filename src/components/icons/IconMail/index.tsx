import React, { FC } from 'react'

import { Contact } from '@consts'

import { Icon, IRCLIconProps as IProps } from '@neikan/rc-lib'
import { ReactComponent as IconMailSVG } from './icon-mail.svg'

export const IconMail: FC<IProps> = ({ ...restProps }) => (
  <Icon title={Contact.MAIL} {...restProps} >
    <IconMailSVG />
  </Icon>
)
