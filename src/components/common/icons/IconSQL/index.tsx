import React, { FC } from 'react'

import { Technology } from '@consts/technologies'

import { Icon } from '@components/common/Icon'
import { ReactComponent as IconSQLSVG } from './icon-sql.svg'

import { IIconProps as IProps } from '@components/common/Icon/types'

export const IconSQL: FC<IProps> = ({ ...restProps }) => (
  <Icon title={Technology.SQL} {...restProps}>
    <IconSQLSVG />
  </Icon>
)
