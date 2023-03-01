import React, { FC, ReactElement } from 'react'
import { useTranslation } from 'react-i18next'
import { v4 as uuidv4 } from 'uuid'

import { ExperienceBlockSide, EXPERIENCES } from '@consts/experience'

import { ExperienceBlock } from './components/ExperienceBlock'

import { IExperienceBlockExtended } from '@types'

const renderExperienceBlock = (experience: IExperienceBlockExtended): ReactElement => (
  <ExperienceBlock key={uuidv4()} experience={experience} />
)

export const ProfessionalExperience: FC = () => {
  const { t } = useTranslation()

  const experincesBySides: IExperienceBlockExtended[] = EXPERIENCES.map((experience, index) => ({
    ...experience,
    side: index % 2 ? ExperienceBlockSide.RIGHT : ExperienceBlockSide.LEFT
  }))

  return (
    <section className='professional-experience'>
      <h3 className='professional-experience__title'>{t('experience:title')}</h3>
      <div className='professional-experience__branches'>{experincesBySides.map(renderExperienceBlock)}</div>
    </section>
  )
}
