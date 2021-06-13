import React, { FC } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { PROJECTS } from '@consts/projects'

import { ProjectTableRow } from '../ProjectTableRow'

export const ProjectTableBody: FC = () => (
  <tbody>
    {PROJECTS.map((project) => <ProjectTableRow key={uuidv4()} project={project} />)}
  </tbody>
)
