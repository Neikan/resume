import React, { FC, ReactElement } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useTranslation } from 'react-i18next'

import { HEADINGS } from '@consts/projects'

const renderTh = (heading: string): ReactElement => {
  const { t } = useTranslation()

  const translatedHeading = t(heading)

  return (
    <th key={uuidv4()} title={translatedHeading}>{translatedHeading}</th>
  )
}

export const ProjectTableHeadings: FC = () => (
  <thead className='projects__headings'>
    <tr>
      {HEADINGS.map(renderTh)}
    </tr>
  </thead>
)
