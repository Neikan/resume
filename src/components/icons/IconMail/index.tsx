import React, { FC } from 'react'

import { Icon } from '@components/Icon'
import { ReactComponent as IconMailSVG } from './icon-mail.svg'

import { IIconProps as IProps } from '@components/Icon/types'

export const IconMail: FC<IProps> = ({ ...restProps }) => (
  <Icon {...restProps} >
    <IconMailSVG />
  </Icon>
)
