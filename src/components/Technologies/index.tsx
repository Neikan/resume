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
  size: 'x3',
  classes: 'grid-item'
}

const technologies = [
  <IconReact key='' { ...iconProps } />,
  <IconRedux key='' { ...iconProps } />,
  <IconSASS key='' { ...iconProps } />,
  <IconSwagger key='' { ...iconProps } />,
  <IconStorybook key='' { ...iconProps } />,
  <IconStyleguidist key='' { ...iconProps } />,
  <IconCordova key='' { ...iconProps } />,
  <IconCSS key='' { ...iconProps } />,
  <IconEnzyme key='' { ...iconProps } />,
  <IconFigma key='' { ...iconProps } />,
  <IconTS key='' { ...iconProps } />,
  <IconWebStorm key='' { ...iconProps } />,
  <IconGit key='' { ...iconProps } />,
  <IconGulp key='' { ...iconProps } />,
  <IconHTML key='' { ...iconProps } />,
  <IconJest key='' { ...iconProps } />,
  <IconWebpack key='' { ...iconProps } />,
  <IconReactRouter key='' { ...iconProps } />,
  <IconJS key='' { ...iconProps } />,
  <IconLess key='' { ...iconProps } />,
  <IconPhotoshop key='' { ...iconProps } />,
  <IconPostman key='' { ...iconProps } />,
  <IconZeplin key='' { ...iconProps } />,
  <IconVSCode key='' { ...iconProps } />,
  <IconBabel key='' { ...iconProps } />,
  <IconSQL key='' { ...iconProps } />
]

const renderIcon = (icon: ReactElement): ReactElement => <>{icon}</>

// Добавить джиру, бейскемп, тфс
export const Technologies: FC = () => {
  return (
    <>
      <h2>Technologies</h2>
      <div className='grid-5 grid-center'>
        {technologies.map(renderIcon)}
      </div>
    </>
  )
}
