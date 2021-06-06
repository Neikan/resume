import React, { FC } from 'react'

import { Technology } from '@consts/technologies'

import { Icon, IRCLIconProps as IProps } from '@neikan/rc-lib'
import { ReactComponent as IconBabelSVG } from './icon-babel.svg'

export const IconBabel: FC<IProps> = ({ ...restProps }) => (
  <Icon title={Technology.BABEL} {...restProps} >
    <IconBabelSVG />
  </Icon>
)
