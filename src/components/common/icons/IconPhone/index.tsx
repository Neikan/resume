import React, { FC } from 'react'

import { Icon } from '@components/common/Icon'
import { ReactComponent as IconPhoneSVG } from './icon-phone.svg'

import { IIconProps as IProps } from '@components/common/Icon/types'

export const IconPhone: FC<IProps> = ({ ...restProps }) => (
  <Icon {...restProps}>
    <IconPhoneSVG />
  </Icon>
)
