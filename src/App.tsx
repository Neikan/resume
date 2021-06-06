import React, { Component, ReactElement } from 'react'

import '@neikan/rc-lib/dist/styles/styles.min.css'

import { Content } from '@neikan/rc-lib'

import {
  About,
  Certificates,
  Contacts,
  Education,
  JobExperience,
  Projects,
  Technologies
} from '@components'

export default class App extends Component {
  public render (): ReactElement {
    return (
      <Content classes='content osh-y d-flex flex-column mx-auto p-6'>
        <About />
        <div className='d-flex'>
          <div>
            <Contacts />
            <Technologies />
            <Education />
          </div>
          <div>
            <JobExperience />
            <Projects />
            <Certificates />
          </div>
        </div>
      </Content>
    )
  }
}
