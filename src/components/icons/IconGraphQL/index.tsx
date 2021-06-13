import React, { FC } from 'react'

import { Technology } from '@consts/technologies'

import { Icon } from '@components/Icon'
import { ReactComponent as IconGraphQLSVG } from './icon-graphql.svg'

import { IIconProps as IProps } from '@components/Icon/types'

export const IconGraphQL: FC<IProps> = ({ ...restProps }) => (
  <Icon title={Technology.GRAPHQL} {...restProps} >
    <IconGraphQLSVG />
  </Icon>
)
