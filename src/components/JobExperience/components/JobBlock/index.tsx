import cn from 'classnames'
import React, { FC } from 'react'

import { JobInfo } from '../JobInfo'
import { JobPeriod } from '../JobPeriod'

import { IJobBlockProps as IProps } from './types'

import styles from './../../JobExperience.module.css'

export const JobBlock: FC<IProps> = ({ job: { period, company, position }, side = 'left' }) => {
  const isLeft = side === 'left'
  const isRight = side === 'right'

  const classes = cn(
    styles.info,
    'relative',
    {
      [styles.info_left]: isLeft,
      't-right': isLeft,
      [styles.info_right]: isRight
    }
  )

  return (
    <div className={classes}>
      <JobPeriod period={period} side={side} />
      <JobInfo company={company} position={position} side={side} />
    </div>
  )
}
