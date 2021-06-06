import React, { FC } from 'react'

import { HEADINGS } from '@consts/projects'

export const ProjectTableHeadings: FC = () => (
  <thead className='projects__headings'>
    <tr>
      {HEADINGS.map((heading) => (
        <th key={heading} title={heading}>{heading}</th>
      ))}
    </tr>
  </thead>
)
