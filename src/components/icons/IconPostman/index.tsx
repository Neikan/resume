import React, { FC } from 'react'

import { Technology } from '@consts/technologies'

import { Icon } from '@components/Icon'
import { ReactComponent as IconPostmanSVG } from './icon-postman.svg'

import { IIconProps as IProps } from '@components/Icon/types'

export const IconPostman: FC<IProps> = ({ ...restProps }) => (
  <Icon title={Technology.POSTMAN} {...restProps} >
    <IconPostmanSVG />
  </Icon>
)
