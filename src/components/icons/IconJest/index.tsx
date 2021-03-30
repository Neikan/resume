import React, { FC } from 'react'

import { Technology } from '@consts'

import { Icon, IRCLIconProps as IProps } from '@neikan/rc-lib'
import { ReactComponent as IconJestSVG } from './icon-jest.svg'

export const IconJest: FC<IProps> = ({ ...restProps }) => (
  <Icon title={Technology.JEST} {...restProps} >
    <IconJestSVG />
  </Icon>
)
