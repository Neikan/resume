import React, { FC } from 'react'

import { Technology } from '@consts/technologies'

import { Icon } from '@components/common/Icon'
import { ReactComponent as IconGraphQLSVG } from './icon-graphql.svg'

import { IIconProps as IProps } from '@components/common/Icon/types'

export const IconGraphQL: FC<IProps> = ({ ...restProps }) => (
  <Icon title={Technology.GRAPHQL} {...restProps} >
    <IconGraphQLSVG />
  </Icon>
)
