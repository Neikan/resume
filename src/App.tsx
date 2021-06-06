import React, { Component, ReactElement } from 'react'

import '@neikan/rc-lib/dist/styles/styles.min.css'

import { Content } from '@neikan/rc-lib'

import {
  About,
  Certificates,
  Contacts,
  Education,
  ProfessionalExperience,
  Projects,
  Technologies
} from '@components'

export default class App extends Component {
  public render (): ReactElement {
    return (
      <Content classes='content'>
        <div className='content__info'>
          <About />
          <div className='content__details'>
            <div>
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
      </Content>
    )
  }
}
