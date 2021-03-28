import React, { FC } from 'react'

import { Technology } from '@consts'

import { Icon, IRCLIconProps as IProps } from '@neikan/rc-lib'
import { ReactComponent as IconJSSVG } from './icon-js.svg'

export const IconJS: FC<IProps> = ({ ...restProps }) => (
  <Icon title={Technology.JAVASCRIPT} {...restProps} >
    <IconJSSVG />
  </Icon>
)
