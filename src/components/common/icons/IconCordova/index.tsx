import React, { FC } from 'react'

import { Technology } from '@consts/technologies'

import { Icon } from '@components/common/Icon'
import { ReactComponent as IconCordovaSVG } from './icon-cordova.svg'

import { IIconProps as IProps } from '@components/common/Icon/types'

export const IconCordova: FC<IProps> = ({ ...restProps }) => (
  <Icon title={Technology.CORDOVA} {...restProps}>
    <IconCordovaSVG />
  </Icon>
)
