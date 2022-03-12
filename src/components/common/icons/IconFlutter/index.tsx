import React, { FC } from 'react'

import { Technology } from '@consts/technologies'

import { Icon } from '@components/common/Icon'
import { ReactComponent as IconFlutterSVG } from './icon-flutter.svg'

import { IIconProps as IProps } from '@components/common/Icon/types'

export const IconFlutter: FC<IProps> = ({ ...restProps }) => (
  <Icon title={Technology.FLUTTER} {...restProps}>
    <IconFlutterSVG />
  </Icon>
)
