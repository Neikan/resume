import React, { FC } from 'react'

import { Technology } from '@consts'

import { Icon, IRCLIconProps as IProps } from '@neikan/rc-lib'
import { ReactComponent as IconStorybookSVG } from './icon-storybook.svg'

export const IconStorybook: FC<IProps> = ({ ...restProps }) => (
  <Icon title={Technology.STORYBOOK} {...restProps} >
    <IconStorybookSVG />
  </Icon>
)
