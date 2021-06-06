import cn from 'classnames'
import React, { FC } from 'react'

import { IJobPeriodProps as IProps } from './types'

import styles from './../../JobExperience.module.css'

const getClasses = (side = 'left'): string => {
  return cn(
    'fw-600 t-primary-400',
    styles.period,
    side === 'right' ? ['pl-4', styles.right] : ['pr-4', styles.left]
  )
}

export const JobPeriod: FC<IProps> = ({ period, side }) => (
  <span className={getClasses(side)}>
    {period}
  </span>
)