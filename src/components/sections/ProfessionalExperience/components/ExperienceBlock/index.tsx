import cn from 'classnames'
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { ExperienceBlockSide } from '@consts/experience'

import { ExperienceInfo } from '../ExperienceInfo'
import { ExperiencePeriod } from '../ExperiencePeriod'

import { IExperienceBlockProps as IProps } from './types'

const getClasses = (side: ExperienceBlockSide): string =>
  cn(
    'professional-experience__block',
    side === ExperienceBlockSide.LEFT ? 'professional-experience__block--left' : 'professional-experience__block--right'
  )

export const ExperienceBlock: FC<IProps> = ({ experience: { period, company, position, side } }) => {
  const { t } = useTranslation()

  return (
    <div className={getClasses(side)}>
      <ExperiencePeriod period={t(period)} side={side} />
      <ExperienceInfo company={t(company)} position={t(position)} side={side} />
    </div>
  )
}
