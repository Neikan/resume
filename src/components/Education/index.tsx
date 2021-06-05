import cn from 'classnames'
import React, { FC } from 'react'

import styles from './Education.module.css'

export const Education: FC = () => (
  <>
    <h3 className='mb-4'>Education</h3>
    <p className={cn(styles.education, 'd-flex flex-column')}>
      <span className='fw-600'>Южный федеральный университет (РГУ) (2005-2011гг):</span>
      <span className='fw-600 pt-4'>Факультет:</span>Высоких технологий
      <span className='fw-600 pt-4'>Специальность: </span>Менеджмент высоких технологий
    </p>
  </>
)
