import React, { FC } from 'react'

import { Technology } from '@consts/technologies'

import { Icon } from '@components/common/Icon'
import { ReactComponent as IconGulpSVG } from './icon-gulp.svg'

import { IIconProps as IProps } from '@components/common/Icon/types'

export const IconGulp: FC<IProps> = ({ ...restProps }) => (
  <Icon title={Technology.GULP} {...restProps} >
    <IconGulpSVG />
  </Icon>
)
