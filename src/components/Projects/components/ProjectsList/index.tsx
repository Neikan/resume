import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { v4 as uuidv4 } from 'uuid'

import { PROJECTS, ProjectTypeTranslation } from '@consts/projects'
import { ProjectType } from '../ProjectType'

export const ProjectsList: FC = () => {
  const { t } = useTranslation()

  return (
    <>
      {PROJECTS.map(({ name, description, technologies, type, url }) => (
        <li key={uuidv4()} className='projects__item projects__item--info'>
          <a className='projects__item-link' href={url}>{name}</a>
          <ProjectType text={t(ProjectTypeTranslation[type])} type={type} />
          <span>{t(description)}</span>
          <span>{technologies}</span>
        </li>
      ))}
    </>
  )
}
