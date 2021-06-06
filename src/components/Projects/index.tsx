import React, { FC } from 'react'

import { ProjectTable } from './components/ProjectTable'

export const Projects: FC = () => {
  return (
    <section className='projects'>
      <h3 className='projects__title'>Projects</h3>
      <ProjectTable />
    </section>
  )
}
