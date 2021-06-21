import cn from 'classnames'
import React, { FC } from 'react'

import { IProjectTypeProps as IProps } from './types'

export const ProjectType: FC<IProps> = ({ text, type }) => (
  <span className={cn('projects__item-type', `projects__item-type--${type}`)}>{text}</span>
)
