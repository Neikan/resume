import React, { FC } from 'react'

import { Icon, IRCLIconProps as IProps } from '@neikan/rc-lib'
import { ReactComponent as IconPhoneSVG } from './icon-phone.svg'

export const IconPhone: FC<IProps> = ({ ...restProps }) => (
  <Icon {...restProps} >
    <IconPhoneSVG />
  </Icon>
)
