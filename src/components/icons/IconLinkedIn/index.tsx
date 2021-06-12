import React, { FC } from 'react'

import { Icon } from '@components/Icon'
import { ReactComponent as IconLinkedInSVG } from './icon-linkedin.svg'

import { IIconProps as IProps } from '@components/Icon/types'

export const IconLinkedIn: FC<IProps> = ({ ...restProps }) => (
  <Icon {...restProps} >
    <IconLinkedInSVG />
  </Icon>
)
