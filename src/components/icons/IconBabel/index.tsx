import React, { FC } from 'react'

import { Technology } from '@consts/technologies'

import { Icon } from '@components/Icon'
import { ReactComponent as IconBabelSVG } from './icon-babel.svg'

import { IIconProps as IProps } from '@components/Icon/types'

export const IconBabel: FC<IProps> = ({ ...restProps }) => (
  <Icon title={Technology.BABEL} {...restProps} >
    <IconBabelSVG />
  </Icon>
)
