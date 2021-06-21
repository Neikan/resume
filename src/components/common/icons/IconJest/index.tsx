import React, { FC } from 'react'

import { Technology } from '@consts/technologies'

import { Icon } from '@components/common/Icon'
import { ReactComponent as IconJestSVG } from './icon-jest.svg'

import { IIconProps as IProps } from '@components/common/Icon/types'

export const IconJest: FC<IProps> = ({ ...restProps }) => (
  <Icon title={Technology.JEST} {...restProps}>
    <IconJestSVG />
  </Icon>
)
