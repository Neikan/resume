import React, { FC, ReactElement } from 'react'
import { useTranslation } from 'react-i18next'
import { v4 as uuidv4 } from 'uuid'

import { LinkTarget } from '@consts/common'
import { PROJECTS, ProjectTypeTranslation } from '@consts/projects'

import { IProject } from '@types'
import { ProjectType } from '../ProjectType'

const renderProject = ({ name, description, technologies, type, urls: platforms }: IProject, index: number): ReactElement => {
  const { t } = useTranslation()

  const target = `${LinkTarget.PROJECTS}${index}`

  const links = platforms.map((platform, index) => platform.url
    ? <div key={index}>
        <a key={index} className='projects__item-link' href={platform.url} target={target}>
          {platform.title}
        </a>
      </div>
    : <div className='projects__item-link'>{platform.title}</div>)

  return (
    <li key={uuidv4()} className='projects__item projects__item--info'>
      <span className='projects__item-link'>{name}</span>
      <span>{links}</span>
      <span>
        <ProjectType text={t(ProjectTypeTranslation[type])} type={type} />
      </span>
      <span>{t(description)}</span>
      <span>{technologies}</span>
    </li>
  )
}

export const ProjectsList: FC = () => <>{PROJECTS.map(renderProject)}</>
