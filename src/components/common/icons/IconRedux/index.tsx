import React, { FC } from 'react'

import { Technology } from '@consts/technologies'

import { Icon } from '@components/common/Icon'
import { ReactComponent as IconReduxSVG } from './icon-redux.svg'

import { IIconProps as IProps } from '@components/common/Icon/types'

export const IconRedux: FC<IProps> = ({ ...restProps }) => (
  <Icon title={Technology.REDUX} {...restProps} >
    <IconReduxSVG />
  </Icon>
)
