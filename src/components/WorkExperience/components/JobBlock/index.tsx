import cn from 'classnames'
import React, { FC } from 'react'

import { JobInfo } from '../JobInfo'
import { JobPeriod } from '../JobPeriod'

import { IJobBlockProps as IProps } from './types'

import styles from './JobBlock.module.css'

export const JobBlock: FC<IProps> = ({ job: { period, company, position } }) => (
  <div className={cn(styles.info, styles.info_m, 'd-flex flex-column align-items-end relative')}>
    <JobPeriod period={period} />
    <JobInfo company={company} position={position} />
  </div>
)
