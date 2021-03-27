import React, { FC } from 'react'

import { Icon, IRCLIconProps as IProps } from '@neikan/rc-lib'
import { ReactComponent as IconSwaggerSVG } from './icon-swagger.svg'

export const IconSwagger: FC<IProps> = ({ ...restProps }) => (
  <Icon {...restProps} >
    <IconSwaggerSVG />
  </Icon>
)
