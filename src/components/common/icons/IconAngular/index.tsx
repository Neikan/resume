import React, { FC } from 'react'

import { Technology } from '@consts/technologies'

import { Icon } from '@components/common/Icon'
import { ReactComponent as IconAngularSVG } from './icon-angular.svg'

import { IIconProps as IProps } from '@components/common/Icon/types'

export const IconAngular: FC<IProps> = ({ ...restProps }) => (
  <Icon title={Technology.ANGULAR} {...restProps}>
    <IconAngularSVG />
  </Icon>
)
