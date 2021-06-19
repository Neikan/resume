import React, { FC } from 'react'

import { CommonTitles } from '@consts/common'

import { Icon } from '@components/Icon'
import { ReactComponent as IconBatmanSVG } from './icon-batman.svg'

import { IIconProps as IProps } from '@components/Icon/types'

export const IconBatman: FC<IProps> = ({ ...restProps }) => (
  <Icon title={CommonTitles.BATMAN} {...restProps} >
    <IconBatmanSVG />
  </Icon>
)
