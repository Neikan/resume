import React, { FC } from 'react'

import { Icon } from '@components/common/Icon'
import { ReactComponent as IconGitHubSVG } from './icon-github.svg'

import { IIconProps as IProps } from '@components/common/Icon/types'

export const IconGitHub: FC<IProps> = ({ ...restProps }) => (
  <Icon {...restProps} >
    <IconGitHubSVG />
  </Icon>
)
