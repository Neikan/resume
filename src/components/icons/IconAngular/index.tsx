import React, { FC } from 'react'

import { Technology } from '@consts/technologies'

import { Icon } from '@components/Icon'
import { ReactComponent as IconAngularSVG } from './icon-angular.svg'

import { IIconProps as IProps } from '@components/Icon/types'

export const IconAngular: FC<IProps> = ({ ...restProps }) => (
  <Icon title={Technology.ANGULAR} {...restProps} >
    <IconAngularSVG />
  </Icon>
)
