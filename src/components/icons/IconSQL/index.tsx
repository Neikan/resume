import React, { FC } from 'react'

import { Technology } from '@consts/technologies'

import { Icon, IRCLIconProps as IProps } from '@neikan/rc-lib'
import { ReactComponent as IconSQLSVG } from './icon-sql.svg'

export const IconSQL: FC<IProps> = ({ ...restProps }) => (
  <Icon title={Technology.SQL} {...restProps} >
    <IconSQLSVG />
  </Icon>
)
