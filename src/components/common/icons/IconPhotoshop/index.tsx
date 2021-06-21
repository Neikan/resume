import React, { FC } from 'react'

import { Technology } from '@consts/technologies'

import { Icon } from '@components/common/Icon'
import { ReactComponent as IconPhotoshopSVG } from './icon-photoshop.svg'

import { IIconProps as IProps } from '@components/common/Icon/types'

export const IconPhotoshop: FC<IProps> = ({ ...restProps }) => (
  <Icon title={Technology.PHOTOSHOP} {...restProps}>
    <IconPhotoshopSVG />
  </Icon>
)
