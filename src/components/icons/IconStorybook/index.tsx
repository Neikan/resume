import React, { FC } from 'react'

import { Icon } from '@neikan/rc-lib'
import { ReactComponent as IconStorybookSVG } from './icon-storybook.svg'

import { IIconProps as IProps } from '../../Icon/types'

export const IconStorybook: FC<IProps> = ({ ...restProps }) => (
  <Icon {...restProps} >
    <IconStorybookSVG />
  </Icon>
)
