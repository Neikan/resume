import React, { FC } from 'react'

import { Technology } from '@consts/technologies'

import { Icon } from '@components/common/Icon'
import { ReactComponent as IconReactSVG } from './icon-react.svg'

import { IIconProps as IProps } from '@components/common/Icon/types'

export const IconReact: FC<IProps> = ({ ...restProps }) => (
  <Icon title={Technology.REACT} {...restProps} >
    <IconReactSVG />
  </Icon>
)
