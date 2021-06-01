import React, { Component, ReactElement } from 'react'

import '@neikan/rc-lib/dist/styles/styles.min.css'

import { Content } from '@neikan/rc-lib'

import { About, Technologies } from '@components'
import { Certificates } from '@components/Certificates'

export default class App extends Component {
  public render (): ReactElement {
    return (
      <Content classes='content height-full-vh osh-y d-flex flex-column mt-6 mx-auto p-6'>
        <About />
        <div className='d-flex'>
          <Technologies />
          <Certificates />
        </div>
      </Content>
    )
  }
}
