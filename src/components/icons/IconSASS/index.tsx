import React, { FC } from 'react'

import { Technology } from '@consts'

import { Icon, IRCLIconProps as IProps } from '@neikan/rc-lib'
import { ReactComponent as IconSASSSVG } from './icon-sass.svg'

export const IconSASS: FC<IProps> = ({ ...restProps }) => (
  <Icon title={Technology.SASS} {...restProps} >
    <IconSASSSVG />
  </Icon>
)
