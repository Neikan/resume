import React, { FC } from 'react'

import { Icon, IRCLIconProps as IProps } from '@neikan/rc-lib'
import { ReactComponent as IconHTMLSVG } from './icon-html.svg'

export const IconHTML: FC<IProps> = ({ ...restProps }) => (
  <Icon {...restProps} >
    <IconHTMLSVG />
  </Icon>
)
