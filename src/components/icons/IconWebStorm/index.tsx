import React, { FC } from 'react'

import { Technology } from '@consts/technologies'

import { Icon } from '@components/Icon'
import { ReactComponent as IconWebStormSVG } from './icon-webstorm.svg'

import { IIconProps as IProps } from '@components/Icon/types'

export const IconWebStorm: FC<IProps> = ({ ...restProps }) => (
  <Icon title={Technology.WEBSTORM} withoutFill {...restProps}>
    <IconWebStormSVG />
  </Icon>
)
