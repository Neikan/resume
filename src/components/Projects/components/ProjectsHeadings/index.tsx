import React, { FC, ReactElement } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useTranslation } from 'react-i18next'

import { HEADINGS } from '@consts/projects'

const renderHeading = (heading: string): ReactElement => {
  const { t } = useTranslation()

  const translatedHeading = t(heading)

  return (
    <span key={uuidv4()} title={translatedHeading}>{translatedHeading}</span>
  )
}

export const ProjectsHeadings: FC = () => (
  <li className='projects__item projects__item--headings'>
    {HEADINGS.map(renderHeading)}
  </li>
)
