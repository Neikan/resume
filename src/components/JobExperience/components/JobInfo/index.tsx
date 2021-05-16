import cn from 'classnames'
import React, { FC } from 'react'

import { IJobInfoProps as IProps } from './types'
import { TJobBlockSide } from '../JobBlock/types'

const getClasses = (side: TJobBlockSide): string => cn(
  'd-flex flex-column mt-3',
  side === 'right' ? 'pl-4' : 'pr-4'
)

export const JobInfo: FC<IProps> = ({ company, position, side }) => (
  <div className={getClasses(side)}>
    <span className='fw-500'>{company}</span>
    <span>{position}</span>
  </div>
)
