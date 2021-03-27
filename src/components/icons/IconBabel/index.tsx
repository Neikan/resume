import React, { FC } from 'react'

import { Icon, IRCLIconProps as IProps } from '@neikan/rc-lib'
import { ReactComponent as IconBabelSVG } from './icon-babel.svg'

export const IconBabel: FC<IProps> = ({ ...restProps }) => (
  <Icon {...restProps} >
    <IconBabelSVG />
  </Icon>
)
