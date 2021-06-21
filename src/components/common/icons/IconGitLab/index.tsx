import React, { FC } from 'react'

import { Icon } from '@components/common/Icon'
import { ReactComponent as IconGitLabSVG } from './icon-gitlab.svg'

import { IIconProps as IProps } from '@components/common/Icon/types'

export const IconGitLab: FC<IProps> = ({ ...restProps }) => (
  <Icon {...restProps}>
    <IconGitLabSVG />
  </Icon>
)
