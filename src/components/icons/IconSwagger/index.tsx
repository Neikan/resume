import React, { FC } from 'react'

import { Technology } from '@consts/technologies'

import { Icon } from '@components/Icon'
import { ReactComponent as IconSwaggerSVG } from './icon-swagger.svg'

import { IIconProps as IProps } from '@components/Icon/types'

export const IconSwagger: FC<IProps> = ({ ...restProps }) => (
  <Icon title={Technology.SWAGGER} {...restProps} >
    <IconSwaggerSVG />
  </Icon>
)
