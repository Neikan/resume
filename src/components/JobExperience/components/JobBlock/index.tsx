import cn from 'classnames'
import React, { FC } from 'react'

import { JobInfo } from '../JobInfo'
import { JobPeriod } from '../JobPeriod'

import { IJobBlockProps as IProps } from './types'

import styles from './../../JobExperience.module.css'
import { JobBlockSide } from '@consts'

export const JobBlock: FC<IProps> = ({ job: { period, company, position, side } }) => {
  const isLeft = side === JobBlockSide.LEFT
  const isRight = side === JobBlockSide.RIGHT

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
