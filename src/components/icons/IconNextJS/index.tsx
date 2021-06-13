import React, { FC } from 'react'

import { Technology } from '@consts/technologies'

import { Icon } from '@components/Icon'
import { ReactComponent as IconNextJSSVG } from './icon-nextjs.svg'

import { IIconProps as IProps } from '@components/Icon/types'

export const IconNextJS: FC<IProps> = ({ ...restProps }) => (
  <Icon title={Technology.NEXT_JS} {...restProps} >
    <IconNextJSSVG />
  </Icon>
)
