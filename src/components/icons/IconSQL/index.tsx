import React, { FC } from 'react'

import { Icon, IRCLIconProps as IProps } from '@neikan/rc-lib'
import { ReactComponent as IconSQLSVG } from './icon-sql.svg'

export const IconSQL: FC<IProps> = ({ ...restProps }) => (
  <Icon {...restProps} >
    <IconSQLSVG />
  </Icon>
)
