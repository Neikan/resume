import React, { FC } from 'react'

import { Icon, IRCLIconProps as IProps } from '@neikan/rc-lib'
import { ReactComponent as IconReactRouterSVG } from './icon-react-router.svg'

export const IconReactRouter: FC<IProps> = ({ ...restProps }) => (
  <Icon {...restProps} >
    <IconReactRouterSVG />
  </Icon>
)
