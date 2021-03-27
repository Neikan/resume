import React, { FC } from 'react'

import { Icon, IRCLIconProps as IProps } from '@neikan/rc-lib'
import { ReactComponent as IconFigmaSVG } from './icon-figma.svg'

export const IconFigma: FC<IProps> = ({ ...restProps }) => (
  <Icon {...restProps} >
    <IconFigmaSVG />
  </Icon>
)
