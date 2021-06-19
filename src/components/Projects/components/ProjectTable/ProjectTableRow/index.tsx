import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { v4 as uuidv4 } from 'uuid'

import { ProjectTypeTranslation } from '@consts/projects'

import { IProjectTableRowProps as IProps } from './types'

export const ProjectTableRow: FC<IProps> = ({ project: { name, description, technologies, type, url } }) => {
  const { t } = useTranslation()

  return (
    <tr key={uuidv4()}>
      <td><a className='projects__link' href={url}>{name}</a></td>
      <td>{t(ProjectTypeTranslation[type])}</td>
      <td>{t(description)}</td>
      <td>{technologies}</td>
    </tr>
  )
}
