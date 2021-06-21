import React, { FC } from 'react'

import { Icon } from '@components/common/Icon'
import { ReactComponent as IconWakatimeSVG } from './icon-wakatime.svg'

import { IIconProps as IProps } from '@components/common/Icon/types'

export const IconWakatime: FC<IProps> = ({ ...restProps }) => (
  <Icon {...restProps} >
    <IconWakatimeSVG />
  </Icon>
)
