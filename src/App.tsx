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
        <IconReactJS size='x1' />
        <IconReactJS size='x1h' />
        <IconReactJS size='x2' />
        <IconReactJS size='x2h' />
        <IconReactJS size='x3' />
        <IconReactJS size='x3' form='square' />
        <IconReactJS size='x3' form='round' />
        <IconReactJS size='x3' form='square' type='inverted' />
        <IconReactJS size='x3' form='round' type='inverted' />
      </Content>
    )
  }
}
