import React, { FC, ReactElement } from 'react'
import { useTranslation } from 'react-i18next'
import { v4 as uuidv4 } from 'uuid'

import { ExperienceBlockSide, EXPERIENCES } from '@consts/experience'

import { ExperienceBlock } from './components/ExperienceBlock'

import { IExperienceBlock, IExperienceBlockExtended } from '@types'

const renderExperienceBlock = (experience: IExperienceBlockExtended): ReactElement =>
  <ExperienceBlock key={uuidv4()} experience={experience} />

const getBranch = (
  array: IExperienceBlockExtended[],
  experience: IExperienceBlock,
  side: ExperienceBlockSide
): void => {
  array.push({ ...experience, side })
}

export const ProfessionalExperience: FC = () => {
  const { t } = useTranslation()

  const LEFT_BRANCHES: IExperienceBlockExtended[] = []
  const RIGHT_BRANCHES: IExperienceBlockExtended[] = []

  EXPERIENCES.forEach((experience, index) => {
    index % 2
      ? getBranch(RIGHT_BRANCHES, experience, ExperienceBlockSide.RIGHT)
      : getBranch(LEFT_BRANCHES, experience, ExperienceBlockSide.LEFT)
  })

  return (
    <section className='professional-experience'>
      <h3 className='professional-experience__title'>{t('experience:title')}</h3>
      <div className='professional-experience__branches'>
        <div>
          {LEFT_BRANCHES.map(renderExperienceBlock)}
        </div>
        <div>
          {RIGHT_BRANCHES.map(renderExperienceBlock)}
        </div>
      </div>
    </section>
  )
}
