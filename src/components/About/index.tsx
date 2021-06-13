import React, { FC } from 'react'

import { Photo } from './components/Photo'
import { Text } from './components/Text'

export const About: FC = () => (
  <section className='about'>
    <Photo />
    <Text />
  </section>
)
