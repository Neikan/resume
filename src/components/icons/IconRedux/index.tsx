import React, { FC } from 'react'

import { Icon, IRCLIconProps as IProps } from '@neikan/rc-lib'
import { ReactComponent as IconReduxSVG } from './icon-redux.svg'

export const IconRedux: FC<IProps> = ({ ...restProps }) => (
  <Icon {...restProps} >
    <IconReduxSVG />
  </Icon>
)
