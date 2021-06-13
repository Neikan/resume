import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { ProjectTable } from './components/ProjectTable'

export const Projects: FC = () => {
  const { t } = useTranslation()

  return (
    <section className='projects'>
      <h3 className='projects__title'>{t('projects:title')}</h3>
      <ProjectTable />
    </section>
  )
}
