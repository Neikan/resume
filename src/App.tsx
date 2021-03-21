import React, { Component, ReactElement } from 'react'

import { Content } from '@neikan/rc-lib'
import About from '@app/components/About'
import { IconReactJS } from '@components/icons/ReactJS'

import '@neikan/rc-lib/dist/styles/styles.min.css'

export default class App extends Component {
  public render (): ReactElement {
    return (
      <Content>
        <h1 className='t-center'>Resume</h1>
        <About />
        <IconReactJS size='x3' />
      </Content>
    )
  }
}
