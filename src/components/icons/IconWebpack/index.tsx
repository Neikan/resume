import React, { FC } from 'react'

import { Technology } from '@consts/technologies'

import { Icon, IRCLIconProps as IProps } from '@neikan/rc-lib'
import { ReactComponent as IconWebpackSVG } from './icon-webpack.svg'

export const IconWebpack: FC<IProps> = ({ ...restProps }) => (
  <Icon title={Technology.WEBPACK} {...restProps} >
    <IconWebpackSVG />
  </Icon>
)
