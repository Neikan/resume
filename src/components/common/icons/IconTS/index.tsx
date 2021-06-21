import React, { FC } from 'react'

import { Technology } from '@consts/technologies'

import { Icon } from '@components/common/Icon'
import { ReactComponent as IconTSSVG } from './icon-ts.svg'

import { IIconProps as IProps } from '@components/common/Icon/types'

export const IconTS: FC<IProps> = ({ ...restProps }) => (
  <Icon title={Technology.TYPESCRIPT} {...restProps}>
    <IconTSSVG />
  </Icon>
)
