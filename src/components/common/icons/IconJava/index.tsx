import React, { FC } from 'react'

import { Technology } from '@consts/technologies'

import { Icon } from '@components/common/Icon'
import { ReactComponent as IconJavaSVG } from './icon-java.svg'

import { IIconProps as IProps } from '@components/common/Icon/types'

export const IconJava: FC<IProps> = ({ ...restProps }) => (
  <Icon title={Technology.JAVA} {...restProps}>
    <IconJavaSVG />
  </Icon>
)
