import React, { FC } from 'react'

import { Technology } from '@consts/technologies'

import { Icon } from '@components/common/Icon'
import { ReactComponent as IconLessSVG } from './icon-less.svg'

import { IIconProps as IProps } from '@components/common/Icon/types'

export const IconLess: FC<IProps> = ({ ...restProps }) => (
  <Icon title={Technology.LESS} {...restProps}>
    <IconLessSVG />
  </Icon>
)
