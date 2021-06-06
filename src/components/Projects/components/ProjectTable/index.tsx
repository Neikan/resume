import React, { FC } from 'react'

import { ProjectTableBody } from './ProjectTableBody'
import { ProjectTableHeadings } from './ProjectTableHeadings'

export const ProjectTable: FC = () => {
  return (
    <table className='projects__table'>
      <ProjectTableHeadings />
      <ProjectTableBody />
    </table>
  )
}
