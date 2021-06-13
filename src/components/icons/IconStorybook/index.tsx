import React, { FC } from 'react'

import { Technology } from '@consts/technologies'

import { Icon } from '@components/Icon'
import { ReactComponent as IconStorybookSVG } from './icon-storybook.svg'

import { IIconProps as IProps } from '@components/Icon/types'

export const IconStorybook: FC<IProps> = ({ ...restProps }) => (
  <Icon title={Technology.STORYBOOK} {...restProps} >
    <IconStorybookSVG />
  </Icon>
)
