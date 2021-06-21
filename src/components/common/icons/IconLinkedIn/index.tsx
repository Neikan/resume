import React, { FC } from 'react'

import { Icon } from '@components/common/Icon'
import { ReactComponent as IconLinkedInSVG } from './icon-linkedin.svg'

import { IIconProps as IProps } from '@components/common/Icon/types'

export const IconLinkedIn: FC<IProps> = ({ ...restProps }) => (
  <Icon {...restProps}>
    <IconLinkedInSVG />
  </Icon>
)
