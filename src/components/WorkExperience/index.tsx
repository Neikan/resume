import cn from 'classnames'
import React, { FC } from 'react'

import { Jobs } from '@consts'

import { JobBlock } from './components/JobBlock'
import { JobInfo } from './components/JobInfo'
import { JobPeriod } from './components/JobPeriod'

import styles from './WorkExperience.module.css'

export const WorkExperience: FC = () => {
  return (
    <div className='d-flex mt-4'>
      <div className=''>
        <JobBlock job={Jobs[2020]} />
        <JobBlock job={Jobs[2012]} />
        <JobBlock job={Jobs['2011H1']} />
      </div>
      <div className={cn(styles.timeline, 'bg-primary-300')} />
      <div>
        <div className={cn(styles.info, styles.info_m, styles.info_b, styles.top_right, 'relative')}>
          <JobPeriod period={Jobs[2016].period} side='right' />
          <JobInfo
            company={Jobs[2016].company}
            position={Jobs[2016].position}
          />
        </div>
        <div className={cn(styles.info, styles.info_m, styles.top_right, 'relative')}>
          <JobPeriod period={Jobs['2011H2'].period} side='right' />
          <JobInfo
            company={Jobs['2011H2'].company}
            position={Jobs['2011H2'].position}
          />
        </div>
        <div className={cn(styles.info, styles.top_right, 'relative')}>
          <JobPeriod period={Jobs[2009].period} side='right' />
          <JobInfo
            company={Jobs[2009].company}
            position={Jobs[2009].position}
          />
        </div>
      </div>
    </div>
  )
}
