import React, { FC } from 'react'

import { Technology } from '@consts/technologies'

import { Icon } from '@components/common/Icon'
import { ReactComponent as IconWebpackSVG } from './icon-webpack.svg'

import { IIconProps as IProps } from '@components/common/Icon/types'

export const IconWebpack: FC<IProps> = ({ ...restProps }) => (
  <Icon title={Technology.WEBPACK} {...restProps} >
    <IconWebpackSVG />
  </Icon>
)
