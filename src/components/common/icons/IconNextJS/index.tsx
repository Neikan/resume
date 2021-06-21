import React, { FC } from 'react'

import { Technology } from '@consts/technologies'

import { Icon } from '@components/common/Icon'
import { ReactComponent as IconNextJSSVG } from './icon-nextjs.svg'

import { IIconProps as IProps } from '@components/common/Icon/types'

export const IconNextJS: FC<IProps> = ({ ...restProps }) => (
  <Icon title={Technology.NEXT_JS} {...restProps}>
    <IconNextJSSVG />
  </Icon>
)
