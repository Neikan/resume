import cn from 'classnames'
import React, { FC } from 'react'

import { ExperienceBlockSide } from '@consts/experience'

import { IExperiencePeriodProps as IProps } from './types'

const getClasses = (side = ExperienceBlockSide.LEFT): string => {
  return cn(
    'professional-experience__period',
    side === ExperienceBlockSide.LEFT
      ? 'professional-experience__period--left'
      : 'professional-experience__period--right'
  )
}

export const ExperiencePeriod: FC<IProps> = ({ period, side }) => <span className={getClasses(side)}>{period}</span>
