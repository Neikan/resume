import React, { FC, ReactElement } from 'react'

import { ExperienceBlockSide, EXPERIENCES } from '@consts'

import { ExperienceBlock } from './components/ExperienceBlock'

import { IExperienceBlock, IExperienceBlockExtended } from '@types'

const renderExperienceBlock = (Experience: IExperienceBlockExtended): ReactElement => <ExperienceBlock key={Experience.period} experience={Experience} />

const getBranch = (array: IExperienceBlockExtended[], Experience: IExperienceBlock, side: ExperienceBlockSide): void => {
  array.push({ ...Experience, side })
}

export const ProfessionalExperience: FC = () => {
  const LEFT_BRANCHES: IExperienceBlockExtended[] = []
  const RIGHT_BRANCHES: IExperienceBlockExtended[] = []

  EXPERIENCES.forEach((experience, index) => {
    index % 2
      ? getBranch(RIGHT_BRANCHES, experience, ExperienceBlockSide.RIGHT)
      : getBranch(LEFT_BRANCHES, experience, ExperienceBlockSide.LEFT)
  })

  return (
    <section className='professional-experience'>
      <h3 className='professional-experience__title'>Professional experience</h3>
      <div className='professional-experience__branches'>
        <div>
          {LEFT_BRANCHES.map(renderExperienceBlock)}
        </div>
        <div className='professional-experience__timeline' />
        <div>
          {RIGHT_BRANCHES.map(renderExperienceBlock)}
        </div>
      </div>
    </section>
  )
}
