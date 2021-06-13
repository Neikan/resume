import React, { FC, ReactElement } from 'react'
import { useTranslation } from 'react-i18next'

import { ExperienceBlockSide, EXPERIENCES } from '@consts/experience'

import { ExperienceBlock } from './components/ExperienceBlock'

import { IExperienceBlock, IExperienceBlockExtended } from '@types'

const renderExperienceBlock = (Experience: IExperienceBlockExtended): ReactElement =>
  <ExperienceBlock key={Experience.period} experience={Experience} />

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
        <div className='professional-experience__timeline' />
        <div>
          {RIGHT_BRANCHES.map(renderExperienceBlock)}
        </div>
      </div>
    </section>
  )
}
