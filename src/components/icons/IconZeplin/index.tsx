import React, { FC } from 'react'

import { Icon, IRCLIconProps as IProps } from '@neikan/rc-lib'
import { ReactComponent as IconZeplinSVG } from './icon-zeplin.svg'

export const IconZeplin: FC<IProps> = ({ ...restProps }) => (
  <Icon {...restProps}>
    <IconZeplinSVG />
  </Icon>
)
