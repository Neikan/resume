import React, { FC } from 'react'

import { Technology } from '@consts/technologies'

import { Icon, IRCLIconProps as IProps } from '@neikan/rc-lib'
import { ReactComponent as IconEnzymeSVG } from './icon-enzyme.svg'

export const IconEnzyme: FC<IProps> = ({ ...restProps }) => (
  <Icon title={Technology.ENZYME} {...restProps} >
    <IconEnzymeSVG />
  </Icon>
)
