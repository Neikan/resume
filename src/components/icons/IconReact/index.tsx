import React, { FC } from 'react'

import { Technology } from '@consts/technologies'

import { Icon, IRCLIconProps as IProps } from '@neikan/rc-lib'
import { ReactComponent as IconReactSVG } from './icon-react.svg'

export const IconReact: FC<IProps> = ({ ...restProps }) => (
  <Icon title={Technology.REACT} {...restProps} >
    <IconReactSVG />
  </Icon>
)
