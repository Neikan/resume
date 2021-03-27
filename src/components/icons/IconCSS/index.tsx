import React, { FC } from 'react'

import { Icon, IRCLIconProps as IProps } from '@neikan/rc-lib'
import { ReactComponent as IconCSSSVG } from './icon-css.svg'

export const IconCSS: FC<IProps> = ({ ...restProps }) => (
  <Icon {...restProps} >
    <IconCSSSVG />
  </Icon>
)
