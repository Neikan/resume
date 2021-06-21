import React, { FC } from 'react'

import { Technology } from '@consts/technologies'

import { Icon } from '@components/common/Icon'
import { ReactComponent as IconFigmaSVG } from './icon-figma.svg'

import { IIconProps as IProps } from '@components/common/Icon/types'

export const IconFigma: FC<IProps> = ({ ...restProps }) => (
  <Icon title={Technology.FIGMA} {...restProps} >
    <IconFigmaSVG />
  </Icon>
)
