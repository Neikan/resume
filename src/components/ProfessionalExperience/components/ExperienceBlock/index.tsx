import cn from 'classnames'
import React, { FC } from 'react'

import { ExperienceBlockSide } from '@consts'

import { ExperienceInfo } from '../ExperienceInfo'
import { ExperiencePeriod } from '../ExperiencePeriod'

import { IExperienceBlockProps as IProps } from './types'

import styles from './../../JobExperience.module.css'

export const ExperienceBlock: FC<IProps> = ({ experience: { period, company, position, side } }) => {
  const isLeft = side === ExperienceBlockSide.LEFT
  const isRight = side === ExperienceBlockSide.RIGHT

  const classes = cn(
    styles.info,
    'relative',
    {
      [styles.info_left]: isLeft,
      't-right': isLeft,
      [styles.info_right]: isRight
    }
  )

  return (
    <div className={classes}>
      <ExperiencePeriod period={period} side={side} />
      <ExperienceInfo company={company} position={position} side={side} />
    </div>
  )
}
