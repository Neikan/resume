import React, { FC, ReactElement } from 'react'

import { JobBlockSide, JOBS } from '@consts'

import { JobBlock } from './components/JobBlock'

import { IJobBlock, IJobBlockExtended } from '@types'

const renderWorkBlock = (job: IJobBlockExtended): ReactElement => <JobBlock key={job.period} job={job} />

const getBranch = (array: IJobBlockExtended[], job: IJobBlock, side: JobBlockSide): void => {
  array.push({ ...job, side })
}

export const ProfessionalExperience: FC = () => {
  const LEFT_BRANCHES: IJobBlockExtended[] = []
  const RIGHT_BRANCHES: IJobBlockExtended[] = []

  JOBS.forEach((job, index) => {
    index % 2
      ? getBranch(RIGHT_BRANCHES, job, JobBlockSide.RIGHT)
      : getBranch(LEFT_BRANCHES, job, JobBlockSide.LEFT)
  })

  return (
    <section className='professional-experience'>
      <h3 className='professional-experience__title'>Professional experience</h3>
      <div className='professional-experience__branches'>
        <div>
          {LEFT_BRANCHES.map(renderWorkBlock)}
        </div>
        <div className='professional-experience__timeline' />
        <div>
          {RIGHT_BRANCHES.map(renderWorkBlock)}
        </div>
      </div>
    </section>
  )
}
