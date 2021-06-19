import React, { FC } from 'react'

import { CommonTitles } from '@consts/common'

import { Icon } from '@components/Icon'
import { ReactComponent as IconBatmanNoSVG } from './icon-batman-no.svg'

import { IIconProps as IProps } from '@components/Icon/types'

export const IconBatmanNo: FC<IProps> = ({ ...restProps }) => (
  <Icon title={CommonTitles.BATMAN} {...restProps} >
    <IconBatmanNoSVG />
  </Icon>
)
