import React, { FC } from 'react'

import { Technology } from '@consts/technologies'

import { Icon } from '@components/common/Icon'
import { ReactComponent as IconHTMLSVG } from './icon-html.svg'

import { IIconProps as IProps } from '@components/common/Icon/types'

export const IconHTML: FC<IProps> = ({ ...restProps }) => (
  <Icon title={Technology.HTML} {...restProps} >
    <IconHTMLSVG />
  </Icon>
)
