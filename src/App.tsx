import React, { FC, Suspense } from 'react'

import {
  About,
  Certificates,
  Contacts,
  Education,
  ProfessionalExperience,
  Projects,
  Switches,
  Technologies
} from '@components'

const App: FC = () => (
  <Suspense fallback={null}>
    <div className='content'>
      <div className='content__info'>
        <About />
        <div className='content__details'>
          <div className='content__details--left'>
            <Contacts />
            <Technologies />
            <Education />
          </div>
          <div className='content__details--right'>
            <ProfessionalExperience />
            <Projects />
            <Certificates />
          </div>
        </div>
      </div>
      <Switches />
    </div>
  </Suspense>
)

export default App
