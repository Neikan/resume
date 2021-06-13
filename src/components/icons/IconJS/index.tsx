import React, { FC } from 'react'

import { Technology } from '@consts/technologies'

import { Icon } from '@components/Icon'
import { ReactComponent as IconJSSVG } from './icon-js.svg'

import { IIconProps as IProps } from '@components/Icon/types'

export const IconJS: FC<IProps> = ({ ...restProps }) => (
  <Icon title={Technology.JAVASCRIPT} {...restProps} >
    <IconJSSVG />
  </Icon>
)
