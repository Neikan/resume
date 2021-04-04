import React, { FC } from 'react'

import { IJobInfoProps as IProps } from './types'

export const JobInfo: FC<IProps> = ({ company, position }) => (
  <div className='d-flex flex-column mt-3'>
    <span>{company}</span>
    <span>{position}</span>
  </div>
)
