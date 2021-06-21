import React, { FC } from 'react'

import { Technology } from '@consts/technologies'

import { Icon } from '@components/common/Icon'
import { ReactComponent as IconCSSSVG } from './icon-css.svg'

import { IIconProps as IProps } from '@components/common/Icon/types'

export const IconCSS: FC<IProps> = ({ ...restProps }) => (
  <Icon title={Technology.CSS} {...restProps} >
    <IconCSSSVG />
  </Icon>
)
