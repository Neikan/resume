import React, { FC } from 'react'

import { Technology } from '@consts/technologies'

import { Icon, IRCLIconProps as IProps } from '@neikan/rc-lib'
import { ReactComponent as IconTSSVG } from './icon-ts.svg'

export const IconTS: FC<IProps> = ({ ...restProps }) => (
  <Icon title={Technology.TYPESCRIPT} {...restProps} >
    <IconTSSVG />
  </Icon>
)
