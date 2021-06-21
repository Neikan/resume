import React, { FC } from 'react'

import { Technology } from '@consts/technologies'

import { Icon } from '@components/common/Icon'
import { ReactComponent as IconVueSVG } from './icon-vue.svg'

import { IIconProps as IProps } from '@components/common/Icon/types'

export const IconVue: FC<IProps> = ({ ...restProps }) => (
  <Icon title={Technology.VUE} {...restProps}>
    <IconVueSVG />
  </Icon>
)
