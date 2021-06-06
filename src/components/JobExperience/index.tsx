import cn from 'classnames'
import React, { FC, ReactElement } from 'react'

import { JobBlockSide, JOBS } from '@consts'

import { JobBlock } from './components/JobBlock'

import { IJobBlock, IJobBlockExtended } from '@types'

import styles from './JobExperience.module.css'

const renderJobBlock = (job: IJobBlockExtended): ReactElement => <JobBlock key={job.period} job={job} />

const getBranch = (array: IJobBlockExtended[], job: IJobBlock, side: JobBlockSide): void => {
  array.push({ ...job, side })
}

export const JobExperience: FC = () => {
  const LEFT_BRANCHES: IJobBlockExtended[] = []
  const RIGHT_BRANCHES: IJobBlockExtended[] = []

  JOBS.forEach((job, index) => {
    index % 2
      ? getBranch(RIGHT_BRANCHES, job, JobBlockSide.RIGHT)
      : getBranch(LEFT_BRANCHES, job, JobBlockSide.LEFT)
  })

  return (
    <section>
      <h3 className='mb-4'>Work experience</h3>
      <div className='d-flex mt-4 mx-auto'>
        <div>
          {LEFT_BRANCHES.map(renderJobBlock)}
        </div>
        <div className={cn(styles.timeline, 'bg-primary-300')} />
        <div>
          {RIGHT_BRANCHES.map(renderJobBlock)}
        </div>
      </div>
    </section>
  )
}
