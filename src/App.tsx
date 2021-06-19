import React, { Component, ReactElement } from 'react'

import '@neikan/rc-lib/dist/styles/styles.min.css'

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

export default class App extends Component {
  public render (): ReactElement {
    return (
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
    )
  }
}
