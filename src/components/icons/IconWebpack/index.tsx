import React, { FC } from 'react'

import { Icon, IRCLIconProps as IProps } from '@neikan/rc-lib'
import { ReactComponent as IconWebpackSVG } from './icon-webpack.svg'

export const IconWebpack: FC<IProps> = ({ ...restProps }) => (
  <Icon {...restProps} >
    <IconWebpackSVG />
  </Icon>
)
