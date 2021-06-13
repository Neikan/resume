import React, { FC } from 'react'

import { Technology } from '@consts/technologies'

import { Icon } from '@components/Icon'
import { ReactComponent as IconIonicSVG } from './icon-ionic.svg'

import { IIconProps as IProps } from '@components/Icon/types'

export const IconIonic: FC<IProps> = ({ ...restProps }) => (
  <Icon title={Technology.IONIC} {...restProps} >
    <IconIonicSVG />
  </Icon>
)
