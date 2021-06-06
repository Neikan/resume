import cn from 'classnames'
import React, { FC, ReactElement } from 'react'

import { CERTIFICATES } from '@consts/certificates'

import { ICertificate, ICourse, ICourseByYear } from '@types'

import styles from './Certificates.module.css'

const renderCertificates = ({ coursesByYear, resourse }: ICertificate): ReactElement => {
  return (
    <li key={resourse} className='d-flex mt-4'>
      <h4 className={cn(styles.resourse, 'fw-600')}>{resourse}{':'}</h4>
      <ul className='lisn mt-5'>
        {coursesByYear.map(({ year, courses }: ICourseByYear): ReactElement => {
          return (
            <li key={year} className='d-flex'>
              <span>{year}г.: </span>
              <ul className='lisn mt-5 mb-4 ml-4'>
                {courses.map(({ title, url }: ICourse): ReactElement => {
                  return (
                    <li key={title}>
                      {url
                        ? (
                            <a className='t-gray' href={url}>
                              {title}
                            </a>
                          )
                        : (
                            <span className='t-gray'>
                              {title}
                            </span>
                          )
                      }
                    </li>
                  )
                })}
              </ul>
            </li>
          )
        })}
      </ul>
    </li>
  )
}

export const Certificates: FC = () => {
  return (
    <section className='certificates'>
      <h3 className='certificates__title'>Courses, trainings and certificates</h3>
      <ul className='certificates__list'>
        {CERTIFICATES.map(renderCertificates)}
      </ul>
    </section>
  )
}
