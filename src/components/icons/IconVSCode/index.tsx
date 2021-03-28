import React, { FC } from 'react'

import { Technology } from '@consts'

import { Icon, IRCLIconProps as IProps } from '@neikan/rc-lib'
import { ReactComponent as IconVSCodeSVG } from './icon-vscode.svg'

export const IconVSCode: FC<IProps> = ({ ...restProps }) => (
  <Icon title={Technology.VSCODE} {...restProps} >
    <IconVSCodeSVG />
  </Icon>
)
