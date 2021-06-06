import cn from 'classnames'
import React, { FC } from 'react'

import { ExperienceBlockSide } from '@consts'

import { IExperienceInfoProps as IProps } from './types'

const getClasses = (side: ExperienceBlockSide): string => cn(
  'd-flex flex-column mt-3',
  side === 'right' ? 'pl-4' : 'pr-4'
)

export const ExperienceInfo: FC<IProps> = ({ company, position, side }) => (
  <div className={getClasses(side)}>
    <span className='fw-500'>{company}</span>
    <span>{position}</span>
  </div>
)
