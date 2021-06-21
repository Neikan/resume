import React, { FC } from 'react'

import { Icon } from '@components/common/Icon'
import { ReactComponent as IconMailSVG } from './icon-mail.svg'

import { IIconProps as IProps } from '@components/common/Icon/types'

export const IconMail: FC<IProps> = ({ ...restProps }) => (
  <Icon {...restProps}>
    <IconMailSVG />
  </Icon>
)
