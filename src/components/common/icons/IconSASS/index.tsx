import React, { FC } from 'react'

import { Technology } from '@consts/technologies'

import { Icon } from '@components/common/Icon'
import { ReactComponent as IconSASSSVG } from './icon-sass.svg'

import { IIconProps as IProps } from '@components/common/Icon/types'

export const IconSASS: FC<IProps> = ({ ...restProps }) => (
  <Icon title={Technology.SASS} {...restProps}>
    <IconSASSSVG />
  </Icon>
)
