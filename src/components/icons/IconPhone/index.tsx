import React, { FC } from 'react'

import { Contact } from '@consts'

import { Icon, IRCLIconProps as IProps } from '@neikan/rc-lib'
import { ReactComponent as IconPhoneSVG } from './icon-phone.svg'

export const IconPhone: FC<IProps> = ({ ...restProps }) => (
  <Icon title={Contact.PHONE} {...restProps} >
    <IconPhoneSVG />
  </Icon>
)
