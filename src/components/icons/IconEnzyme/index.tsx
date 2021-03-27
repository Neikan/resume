import React, { FC } from 'react'

import { Icon, IRCLIconProps as IProps } from '@neikan/rc-lib'
import { ReactComponent as IconEnzymeSVG } from './icon-enzyme.svg'

export const IconEnzyme: FC<IProps> = ({ ...restProps }) => (
  <Icon {...restProps} >
    <IconEnzymeSVG />
  </Icon>
)
