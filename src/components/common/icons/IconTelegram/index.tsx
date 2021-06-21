import React, { FC } from 'react'

import { Icon } from '@components/common/Icon'
import { ReactComponent as IconTelegramSVG } from './icon-telegram.svg'

import { IIconProps as IProps } from '@components/common/Icon/types'

export const IconTelegram: FC<IProps> = ({ ...restProps }) => (
  <Icon {...restProps} >
    <IconTelegramSVG />
  </Icon>
)
