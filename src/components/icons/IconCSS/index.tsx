import React, { FC } from 'react'

import { Technology } from '@consts/technologies'

import { Icon, IRCLIconProps as IProps } from '@neikan/rc-lib'
import { ReactComponent as IconCSSSVG } from './icon-css.svg'

export const IconCSS: FC<IProps> = ({ ...restProps }) => (
  <Icon title={Technology.CSS} {...restProps} >
    <IconCSSSVG />
  </Icon>
)
