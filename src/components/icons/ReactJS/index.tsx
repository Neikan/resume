import React, { FC } from 'react'

import { Icon } from '../../Icon'
import { ReactComponent as IconReactJSSVG } from './icon-reactjs.svg'

import { IIconProps as IProps } from '../../Icon/types'

export const IconReactJS: FC<IProps> = ({ color = 'primary-400', ...restProps }) => (
  <Icon {...restProps} color={color}>
    <IconReactJSSVG />
  </Icon>
)
