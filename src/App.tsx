import React, { Component, ReactElement } from 'react'

import '@neikan/rc-lib/dist/styles/styles.min.css'

import { Content, IRCLIconProps } from '@neikan/rc-lib'
import About from '@components/About'
import { IconCordova } from '@components/icons/IconCordova'
import { IconCSS } from '@components/icons/IconCSS'
import { IconEnzyme } from '@components/icons/IconEnzyme'
import { IconFigma } from '@components/icons/IconFigma'
import { IconGit } from '@components/icons/IconGit'
import { IconGulp } from '@components/icons/IconGulp'
import { IconHTML } from '@components/icons/IconHTML'
import { IconJest } from '@components/icons/IconJest'
import { IconJS } from '@components/icons/IconJS'
import { IconLess } from '@components/icons/IconLess'
import { IconPhotoshop } from '@components/icons/IconPhotoshop'
import { IconPostman } from '@components/icons/IconPostman'
import { IconReact } from '@components/icons/IconReact'
import { IconRedux } from '@components/icons/IconRedux'
import { IconStorybook } from '@components/icons/IconStorybook'
import { IconStyleguidist } from '@components/icons/IconStyleguidist'
import { IconSCSS } from '@components/icons/IconSCSS'
import { IconSwagger } from '@components/icons/IconSwagger'
import { IconTS } from '@components/icons/IconTS'
import { IconWebpack } from '@components/icons/IconWebpack'
import { IconWebStorm } from '@components/icons/IconWebStorm'
import { IconZeplin } from '@components/icons/IconZeplin'
import { IconReactRouter } from '@components/icons/IconReactRouter'
import { IconVSCode } from '@components/icons/IconVSCode'
import { IconBabel } from '@components/icons/IconBabel'
import { IconSQL } from '@components/icons/IconSQL'

const iconProps: IRCLIconProps = {
  size: 'x3'
}

interface IElement {
  title: string
  icon: ReactElement
}

const elements1: IElement[] = [
  {
    title: 'React',
    icon: <IconReact { ...iconProps } />
  },
  {
    title: 'Redux',
    icon: <IconRedux { ...iconProps } />
  },
  {
    title: 'SCSS',
    icon: <IconSCSS { ...iconProps } />
  },
  {
    title: 'Swagger',
    icon: <IconSwagger { ...iconProps } />
  },
  {
    title: 'Storybook',
    icon: <IconStorybook { ...iconProps } />
  },
  {
    title: 'Styleguidist',
    icon: <IconStyleguidist { ...iconProps } />
  }
]

const elements2: IElement[] = [
  {
    title: 'Cordova',
    icon: <IconCordova { ...iconProps } />
  },
  {
    title: 'CSS',
    icon: <IconCSS { ...iconProps } />
  },
  {
    title: 'Enzyme',
    icon: <IconEnzyme { ...iconProps } />
  },
  {
    title: 'Figma',
    icon: <IconFigma { ...iconProps } />
  },
  {
    title: 'TypeScript',
    icon: <IconTS { ...iconProps } />
  },
  {
    title: 'WebStorm',
    icon: <IconWebStorm { ...iconProps } />
  }
]

const elements3: IElement[] = [
  {
    title: 'Git',
    icon: <IconGit { ...iconProps } />
  },
  {
    title: 'Gulp',
    icon: <IconGulp { ...iconProps } />
  },
  {
    title: 'HTML',
    icon: <IconHTML { ...iconProps } />
  },
  {
    title: 'Jest',
    icon: <IconJest { ...iconProps } />
  },
  {
    title: 'Webpack',
    icon: <IconWebpack { ...iconProps } />
  },
  {
    title: 'React Router',
    icon: <IconReactRouter { ...iconProps } />
  }
]

const elements4: IElement[] = [
  {
    title: 'JavaScript',
    icon: <IconJS { ...iconProps } />
  },
  {
    title: 'Less',
    icon: <IconLess { ...iconProps } />
  },
  {
    title: 'Photoshop',
    icon: <IconPhotoshop { ...iconProps } />
  },
  {
    title: 'Postman',
    icon: <IconPostman { ...iconProps } />
  },
  {
    title: 'Zeplin',
    icon: <IconZeplin { ...iconProps } />
  },
  {
    title: 'VSCode',
    icon: <IconVSCode { ...iconProps } />
  }
]

const elements5: IElement[] = [
  {
    title: 'Babel',
    icon: <IconBabel { ...iconProps } />
  },
  {
    title: 'SQL',
    icon: <IconSQL { ...iconProps } />
  }
]

const renderIcons = ({ title, icon }: IElement): ReactElement => (
  <div key={title} className='d-flex flex-column align-items-center justify-content-center m-4'>
    {icon}
    {title}
  </div>
)

export default class App extends Component {
  public render (): ReactElement {
    return (
      <Content>
        <h1 className='t-center'>Resume</h1>
        <div className='d-flex'>
          <img src='img/foto/me.png' width='256px' height='256px' alt='foto' className='mr-6' />
          <About />
        </div>
        <h2>Technologies</h2>
        <div className='d-flex flex-column'>
          <div className='d-flex align-items-center'>
            {elements1.map(renderIcons)}
          </div>
          <div className='d-flex align-items-center'>
            {elements2.map(renderIcons)}
          </div>
          <div className='d-flex align-items-center'>
            {elements3.map(renderIcons)}
          </div>
          <div className='d-flex align-items-center'>
            {elements4.map(renderIcons)}
          </div>
          <div className='d-flex align-items-center'>
            {elements5.map(renderIcons)}
          </div>
        </div>
      </Content>
    )
  }
}
