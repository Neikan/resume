import React, { FC } from 'react'

import { Icon, IRCLIconProps as IProps } from '@neikan/rc-lib'
import { ReactComponent as IconTelegramSVG } from './icon-telegram.svg'

export const IconTelegram: FC<IProps> = ({ ...restProps }) => (
  <Icon {...restProps} >
    <IconTelegramSVG />
  </Icon>
)
