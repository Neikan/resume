import cn from 'classnames'
import React, { FC } from 'react'

import { Jobs } from '@consts'

import { JobBlock } from './components/JobBlock'

import styles from './JobExperience.module.css'

export const JobExperience: FC = () => {
  return (
    <div className='d-flex mt-4 mx-auto flex-grow-1'>
      <div>
        <JobBlock job={Jobs[2020]} />
        <JobBlock job={Jobs[2012]} />
        <JobBlock job={Jobs['2011H1']} />
      </div>
      <div className={cn(styles.timeline, 'bg-primary-300')} />
      <div>
        <JobBlock job={Jobs[2016]} side='right' />
        <JobBlock job={Jobs['2011H2']} side='right' />
        <JobBlock job={Jobs[2009]} side='right' />
      </div>
    </div>
  )
}
