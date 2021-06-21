import React, { FC } from 'react'

import { Technology } from '@consts/technologies'

import { Icon } from '@components/common/Icon'
import { ReactComponent as IconReactRouterSVG } from './icon-react-router.svg'

import { IIconProps as IProps } from '@components/common/Icon/types'

export const IconReactRouter: FC<IProps> = ({ ...restProps }) => (
  <Icon title={Technology.REACT_ROUTER} {...restProps}>
    <IconReactRouterSVG />
  </Icon>
)
