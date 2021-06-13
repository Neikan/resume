import React, { FC } from 'react'

import { Technology } from '@consts/technologies'

import { Icon } from '@components/Icon'
import { ReactComponent as IconLessSVG } from './icon-less.svg'

import { IIconProps as IProps } from '@components/Icon/types'

export const IconLess: FC<IProps> = ({ ...restProps }) => (
  <Icon title={Technology.LESS} {...restProps} >
    <IconLessSVG />
  </Icon>
)
