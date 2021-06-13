import React, { FC } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { Course } from '../Course'

import { ICourse } from '@types'
import { ICourseByYearProps as IProps } from './types'

export const CourseByYear: FC<IProps> = ({ course: { year, courses } }) => {
  return (
    <li key={year} className='certificates__year'>
      <span>{year}:</span>
      <ul className='certificates__year-list'>
        {courses.map((course: ICourse) => <Course key={uuidv4()} course={course} />)}
      </ul>
    </li>
  )
}
