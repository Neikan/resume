import React, { FC } from 'react'

import { Photo } from './components/Photo'
import { Texts } from './components/Texts'

export const About: FC = () => (
  <section className='about'>
    <h3 className='visually-hidden'>About</h3>
    <Photo />
    <Texts />
  </section>
)
