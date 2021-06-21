import React, { FC } from 'react'

import { Technology } from '@consts/technologies'

import { Icon } from '@components/common/Icon'
import { ReactComponent as IconEnzymeSVG } from './icon-enzyme.svg'

import { IIconProps as IProps } from '@components/common/Icon/types'

export const IconEnzyme: FC<IProps> = ({ ...restProps }) => (
  <Icon title={Technology.ENZYME} {...restProps} >
    <IconEnzymeSVG />
  </Icon>
)
