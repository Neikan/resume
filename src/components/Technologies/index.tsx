import React, { FC, ReactElement } from 'react'

import { IRCLIconProps } from '@neikan/rc-lib'
import {
  IconBabel,
  IconCordova,
  IconCSS,
  IconEnzyme,
  IconFigma,
  IconGit,
  IconGulp,
  IconHTML,
  IconJest,
  IconJS,
  IconLess,
  IconPhotoshop,
  IconPostman,
  IconReact,
  IconReactRouter,
  IconRedux,
  IconStorybook,
  IconStyleguidist,
  IconSASS,
  IconSQL,
  IconSwagger,
  IconTS,
  IconVSCode,
  IconWebpack,
  IconWebStorm,
  IconZeplin
} from '@components/icons'

const iconProps: IRCLIconProps = {
  size: 'x3'
}

const elements1 = [
  <IconReact key='' { ...iconProps } />,
  <IconRedux key='' { ...iconProps } />,
  <IconSASS key='' { ...iconProps } />,
  <IconSwagger key='' { ...iconProps } />,
  <IconStorybook key='' { ...iconProps } />,
  <IconStyleguidist key='' { ...iconProps } />
]

const elements2 = [
  <IconCordova key='' { ...iconProps } />,
  <IconCSS key='' { ...iconProps } />,
  <IconEnzyme key='' { ...iconProps } />,
  <IconFigma key='' { ...iconProps } />,
  <IconTS key='' { ...iconProps } />,
  <IconWebStorm key='' { ...iconProps } />
]

const elements3 = [
  <IconGit key='' { ...iconProps } />,
  <IconGulp key='' { ...iconProps } />,
  <IconHTML key='' { ...iconProps } />,
  <IconJest key='' { ...iconProps } />,
  <IconWebpack key='' { ...iconProps } />,
  <IconReactRouter key='' { ...iconProps } />
]

const elements4 = [
  <IconJS key='' { ...iconProps } />,
  <IconLess key='' { ...iconProps } />,
  <IconPhotoshop key='' { ...iconProps } />,
  <IconPostman key='' { ...iconProps } />,
  <IconZeplin key='' { ...iconProps } />,
  <IconVSCode key='' { ...iconProps } />
]

const elements5 = [
  <IconBabel key='' { ...iconProps } />,
  <IconSQL key='' { ...iconProps } />
]

const renderIcons = (icon: ReactElement): ReactElement => <>{icon}</>

// Добавить джиру, бейскемп, тфс
export const Technologies: FC = () => {
  return (
    <>
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
      </>
  )
}
