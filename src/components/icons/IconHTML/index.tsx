import React, { FC } from 'react'

import { Technology } from '@consts/technologies'

import { Icon, IRCLIconProps as IProps } from '@neikan/rc-lib'
import { ReactComponent as IconHTMLSVG } from './icon-html.svg'

export const IconHTML: FC<IProps> = ({ ...restProps }) => (
  <Icon title={Technology.HTML} {...restProps} >
    <IconHTMLSVG />
  </Icon>
)
