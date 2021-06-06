import cn from 'classnames'
import React, { FC } from 'react'

import { IExperiencePeriodProps as IProps } from './types'

const getClasses = (side = 'left'): string => {
  return cn(
    'professional-experience__period',
    side === 'right'
      ? 'professional-experience__period--right'
      : 'professional-experience__period--left'
  )
}

export const ExperiencePeriod: FC<IProps> = ({ period, side }) => (
  <span className={getClasses(side)}>
    {period}
  </span>
)
