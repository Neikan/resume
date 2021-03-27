import React, { FC } from 'react'

import { Icon, IRCLIconProps as IProps } from '@neikan/rc-lib'
import { ReactComponent as IconWebStormSVG } from './icon-webstorm.svg'

export const IconWebStorm: FC<IProps> = ({ ...restProps }) => (
  <Icon {...restProps}>
    <IconWebStormSVG />
  </Icon>
)
