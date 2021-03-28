import React, { Component, ReactElement } from 'react'

import '@neikan/rc-lib/dist/styles/styles.min.css'

import { Content } from '@neikan/rc-lib'

import { About, Technologies } from '@components'

export default class App extends Component {
  public render (): ReactElement {
    return (
      <Content>
        <h1 className='t-center'>Resume</h1>
        <div className='d-flex'>
          <img src='img/foto/me.png' width='256px' height='256px' alt='foto' className='mr-6' />
          <About />
        </div>
        <Technologies />
      </Content>
    )
  }
}
