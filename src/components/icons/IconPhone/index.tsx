import React, { FC } from 'react'

import { Icon } from '@components/Icon'
import { ReactComponent as IconPhoneSVG } from './icon-phone.svg'

import { IIconProps as IProps } from '@components/Icon/types'

export const IconPhone: FC<IProps> = ({ ...restProps }) => (
  <Icon {...restProps} >
    <IconPhoneSVG />
  </Icon>
)
