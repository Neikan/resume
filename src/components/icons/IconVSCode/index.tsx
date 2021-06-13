import React, { FC } from 'react'

import { Technology } from '@consts/technologies'

import { Icon } from '@components/Icon'
import { ReactComponent as IconVSCodeSVG } from './icon-vscode.svg'

import { IIconProps as IProps } from '@components/Icon/types'

export const IconVSCode: FC<IProps> = ({ ...restProps }) => (
  <Icon title={Technology.VSCODE} {...restProps} >
    <IconVSCodeSVG />
  </Icon>
)
