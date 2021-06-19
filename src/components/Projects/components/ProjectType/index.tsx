import cn from 'classnames'
import React, { FC } from 'react'

import { IProjectTypeProps as IProps } from './types'

export const ProjectType: FC<IProps> = ({ text, type }) => (
  <span className={cn('projects__type', `projects__type--${type}`)}>
    {text}
  </span>
)
