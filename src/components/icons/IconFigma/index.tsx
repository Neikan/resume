import React, { FC } from 'react'

import { Technology } from '@consts/technologies'

import { Icon, IRCLIconProps as IProps } from '@neikan/rc-lib'
import { ReactComponent as IconFigmaSVG } from './icon-figma.svg'

export const IconFigma: FC<IProps> = ({ ...restProps }) => (
  <Icon title={Technology.FIGMA} {...restProps} >
    <IconFigmaSVG />
  </Icon>
)
