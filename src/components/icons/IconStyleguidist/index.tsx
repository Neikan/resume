import React, { FC } from 'react'

import { Technology } from '@consts/technologies'

import { Icon } from '@components/Icon'
import { ReactComponent as IconStyleguidistSVG } from './icon-styleguidist.svg'

import { IIconProps as IProps } from '@components/Icon/types'

export const IconStyleguidist: FC<IProps> = ({ ...restProps }) => (
  <Icon title={Technology.STYLEGUIDIST} {...restProps} >
    <IconStyleguidistSVG />
  </Icon>
)
