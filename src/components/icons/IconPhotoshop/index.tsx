import React, { FC } from 'react'

import { Technology } from '@consts/technologies'

import { Icon } from '@components/Icon'
import { ReactComponent as IconPhotoshopSVG } from './icon-photoshop.svg'

import { IIconProps as IProps } from '@components/Icon/types'

export const IconPhotoshop: FC<IProps> = ({ ...restProps }) => (
  <Icon title={Technology.PHOTOSHOP} {...restProps} >
    <IconPhotoshopSVG />
  </Icon>
)
