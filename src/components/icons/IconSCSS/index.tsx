import React, { FC } from 'react'

import { Icon, IRCLIconProps as IProps } from '@neikan/rc-lib'
import { ReactComponent as IconSCSSSVG } from './icon-scss.svg'

export const IconSCSS: FC<IProps> = ({ ...restProps }) => (
  <Icon {...restProps} >
    <IconSCSSSVG />
  </Icon>
)
