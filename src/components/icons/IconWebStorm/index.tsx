import React, { FC } from 'react'

import { Technology } from '@consts/technologies'

import { Icon, IRCLIconProps as IProps } from '@neikan/rc-lib'
import { ReactComponent as IconWebStormSVG } from './icon-webstorm.svg'

export const IconWebStorm: FC<IProps> = ({ ...restProps }) => (
  <Icon title={Technology.WEBSTORM} withoutFill {...restProps}>
    <IconWebStormSVG />
  </Icon>
)
