import React, { FC } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { CourseByYear } from '../CourseByYear'

import { ICourseByYear } from '@types'
import { ICoursesByResourseProps as IProps } from './types'

export const CoursesByResourse: FC<IProps> = ({ course: { coursesByYear, resourse } }) => {
  return (
    <li key={resourse} className='certificates__resourse'>
      <h4 className='certificates__resourse-title'>
        {resourse}
        {':'}
      </h4>
      <ul className='certificates__resourse-list'>
        {coursesByYear.map((course: ICourseByYear) => (
          <CourseByYear key={uuidv4()} course={course} />
        ))}
      </ul>
    </li>
  )
}
