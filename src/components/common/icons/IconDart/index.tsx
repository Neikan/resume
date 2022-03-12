import React, { FC } from 'react'

import { Technology } from '@consts/technologies'

import { Icon } from '@components/common/Icon'
import { ReactComponent as IconDartSVG } from './icon-dart.svg'

import { IIconProps as IProps } from '@components/common/Icon/types'

export const IconDart: FC<IProps> = ({ ...restProps }) => (
  <Icon title={Technology.DART} {...restProps}>
    <IconDartSVG />
  </Icon>
)
