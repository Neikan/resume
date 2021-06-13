import React, { FC } from 'react'

import { Technology } from '@consts/technologies'

import { Icon } from '@components/Icon'
import { ReactComponent as IconKotlinSVG } from './icon-kotlin.svg'

import { IIconProps as IProps } from '@components/Icon/types'

export const IconKotlin: FC<IProps> = ({ ...restProps }) => (
  <Icon title={Technology.KOTLIN} {...restProps} >
    <IconKotlinSVG />
  </Icon>
)
