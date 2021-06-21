import React, { FC } from 'react'

import { Technology } from '@consts/technologies'

import { Icon } from '@components/common/Icon'
import { ReactComponent as IconSvelteSVG } from './icon-svelte.svg'

import { IIconProps as IProps } from '@components/common/Icon/types'

export const IconSvelte: FC<IProps> = ({ ...restProps }) => (
  <Icon title={Technology.SVELTE} {...restProps} >
    <IconSvelteSVG />
  </Icon>
)
