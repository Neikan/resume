import React, { FC } from 'react'

import { Technology } from '@consts/technologies'

import { Icon } from '@components/Icon'
import { ReactComponent as IconZeplinSVG } from './icon-zeplin.svg'

import { IIconProps as IProps } from '@components/Icon/types'

export const IconZeplin: FC<IProps> = ({ ...restProps }) => (
  <Icon title={Technology.ZEPLIN} {...restProps}>
    <IconZeplinSVG />
  </Icon>
)
