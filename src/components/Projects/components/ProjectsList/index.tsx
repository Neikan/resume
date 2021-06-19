import React, { FC, ReactElement } from 'react'
import { useTranslation } from 'react-i18next'
import { v4 as uuidv4 } from 'uuid'

import { LinkTarget } from '@consts/common'
import { PROJECTS, ProjectTypeTranslation } from '@consts/projects'

import { IProject } from '@types'
import { ProjectType } from '../ProjectType'

const renderProject = ({ name, description, technologies, type, url }: IProject, index: number): ReactElement => {
  const { t } = useTranslation()

  const target = `${LinkTarget.CERTIFICATES}${index}`

  const projectName = url
    ? <span><a className='projects__item-link' href={url} target={target}>{name}</a></span>
    : <span className='projects__item-link'>{name}</span>

  return (
    <li key={uuidv4()} className='projects__item projects__item--info'>
      {projectName}
      <span>
        <ProjectType text={t(ProjectTypeTranslation[type])} type={type} />
      </span>
      <span>{t(description)}</span>
      <span>{technologies}</span>
    </li>
  )
}

export const ProjectsList: FC = () => <>{PROJECTS.map(renderProject)}</>
