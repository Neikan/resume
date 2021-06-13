import React, { FC } from 'react'

import { Icon } from '@components/Icon'
import { ReactComponent as IconWakatimeSVG } from './icon-wakatime.svg'

import { IIconProps as IProps } from '@components/Icon/types'

export const IconWakatime: FC<IProps> = ({ ...restProps }) => (
  <Icon {...restProps} >
    <IconWakatimeSVG />
  </Icon>
)
