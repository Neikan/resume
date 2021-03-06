import React, { FC } from 'react'

import { Technology } from '@consts/technologies'

import { Icon } from '@components/common/Icon'
import { ReactComponent as IconStorybookSVG } from './icon-storybook.svg'

import { IIconProps as IProps } from '@components/common/Icon/types'

export const IconStorybook: FC<IProps> = ({ ...restProps }) => (
  <Icon title={Technology.STORYBOOK} {...restProps}>
    <IconStorybookSVG />
  </Icon>
)
