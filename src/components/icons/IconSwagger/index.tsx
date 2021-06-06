import React, { FC } from 'react'

import { Technology } from '@consts/technologies'

import { Icon, IRCLIconProps as IProps } from '@neikan/rc-lib'
import { ReactComponent as IconSwaggerSVG } from './icon-swagger.svg'

export const IconSwagger: FC<IProps> = ({ ...restProps }) => (
  <Icon title={Technology.SWAGGER} {...restProps} >
    <IconSwaggerSVG />
  </Icon>
)
