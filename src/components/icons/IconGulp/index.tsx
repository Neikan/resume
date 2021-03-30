import React, { FC } from 'react'

import { Technology } from '@consts'

import { Icon, IRCLIconProps as IProps } from '@neikan/rc-lib'
import { ReactComponent as IconGulpSVG } from './icon-gulp.svg'

export const IconGulp: FC<IProps> = ({ ...restProps }) => (
  <Icon title={Technology.GULP} {...restProps} >
    <IconGulpSVG />
  </Icon>
)
