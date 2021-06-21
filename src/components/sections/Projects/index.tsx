import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { ProjectsHeadings } from './components/ProjectsHeadings'
import { ProjectsList } from './components/ProjectsList'

export const Projects: FC = () => {
  const { t } = useTranslation()

  return (
    <section className='projects'>
      <h3 className='projects__title'>{t('projects:title')}</h3>
      <ul className='projects__list'>
        <ProjectsHeadings />
        <ProjectsList />
      </ul>
    </section>
  )
}
