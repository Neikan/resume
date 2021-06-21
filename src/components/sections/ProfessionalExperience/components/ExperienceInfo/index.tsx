import cn from 'classnames'
import React, { FC } from 'react'

import { ExperienceBlockSide } from '@consts/experience'

import { IExperienceInfoProps as IProps } from './types'

const getClasses = (side: ExperienceBlockSide): string => cn(
  'professional-experience__info',
  side === ExperienceBlockSide.LEFT
    ? 'professional-experience__info--left'
    : 'professional-experience__info--right'
)

export const ExperienceInfo: FC<IProps> = ({ company, position, side }) => (
  <div className={getClasses(side)}>
    <span className='fw-500'>{company}</span>
    <span className='professional-experience__position'>{position}</span>
  </div>
)
