import React, { FC } from 'react'

import { Icon } from '@components/Icon'
import { ReactComponent as IconGitHubSVG } from './icon-github.svg'

import { IIconProps as IProps } from '@components/Icon/types'

export const IconGitHub: FC<IProps> = ({ ...restProps }) => (
  <Icon {...restProps} >
    <IconGitHubSVG />
  </Icon>
)
