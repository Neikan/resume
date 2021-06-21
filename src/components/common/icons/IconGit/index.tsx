import React, { FC } from 'react'

import { Technology } from '@consts/technologies'

import { Icon } from '@components/common/Icon'
import { ReactComponent as IconGitSVG } from './icon-git.svg'

import { IIconProps as IProps } from '@components/common/Icon/types'

export const IconGit: FC<IProps> = ({ ...restProps }) => (
  <Icon title={Technology.GIT} {...restProps} >
    <IconGitSVG />
  </Icon>
)
