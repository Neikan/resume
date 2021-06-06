import React, { FC } from 'react'

import { Technology } from '@consts/technologies'

import { Icon, IRCLIconProps as IProps } from '@neikan/rc-lib'
import { ReactComponent as IconReactRouterSVG } from './icon-react-router.svg'

export const IconReactRouter: FC<IProps> = ({ ...restProps }) => (
  <Icon title={Technology.REACT_ROUTER} {...restProps} >
    <IconReactRouterSVG />
  </Icon>
)
