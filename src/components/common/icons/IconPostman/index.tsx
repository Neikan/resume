import React, { FC } from 'react'

import { Technology } from '@consts/technologies'

import { Icon } from '@components/common/Icon'
import { ReactComponent as IconPostmanSVG } from './icon-postman.svg'

import { IIconProps as IProps } from '@components/common/Icon/types'

export const IconPostman: FC<IProps> = ({ ...restProps }) => (
  <Icon title={Technology.POSTMAN} {...restProps} >
    <IconPostmanSVG />
  </Icon>
)
