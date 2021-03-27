import React, { FC } from 'react'

import { Icon, IRCLIconProps as IProps } from '@neikan/rc-lib'
import { ReactComponent as IconJestSVG } from './icon-jest.svg'

export const IconJest: FC<IProps> = ({ ...restProps }) => (
  <Icon {...restProps} >
    <IconJestSVG />
  </Icon>
)
