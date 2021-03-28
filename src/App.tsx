import React, { Component, ReactElement } from 'react'

import '@neikan/rc-lib/dist/styles/styles.min.css'

import { Content } from '@neikan/rc-lib'

import { About, Technologies } from '@components'

export default class App extends Component {
  public render (): ReactElement {
    return (
      <Content classes='m-8'>
        <About />
        <Technologies />
      </Content>
    )
  }
}
