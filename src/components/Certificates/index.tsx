import React, { FC } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useTranslation } from 'react-i18next'

import { CERTIFICATES } from '@consts/certificates'

import { CoursesByResourse } from './components/CoursesByResourse'

const { t } = useTranslation()

export const Certificates: FC = () => (
  <section className='certificates'>
    <h3 className='certificates__title'>{t('certificates:title')}</h3>
    <ul className='certificates__list'>
      {CERTIFICATES.map((course) =>
        <CoursesByResourse key={uuidv4()} course={course} />
      )}
    </ul>
  </section>
)
