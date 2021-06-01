import React, { FC } from 'react'

import { Contact } from '@consts'

import { Icon, IRCLIconProps as IProps } from '@neikan/rc-lib'
import { ReactComponent as IconTelegramSVG } from './icon-telegram.svg'

export const IconTelegram: FC<IProps> = ({ ...restProps }) => (
  <Icon title={Contact.TELEGRAM} {...restProps} >
    <IconTelegramSVG />
  </Icon>
)
