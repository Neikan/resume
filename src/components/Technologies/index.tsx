import React, { FC } from 'react'

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
  size: 'x2h',
  classes: 'grid-item'
}

// Добавить джиру, бейскемп, тфс
export const Technologies: FC = () => {
  return (
    <div className='wrapper-left mt-6'>
      <h3>Technologies and skills</h3>
      <div className='grid-4 grid-g-4 grid-center mb-4'>
        <IconTS { ...iconProps } />
        <IconJS { ...iconProps } />
        <IconReact { ...iconProps } />
        <IconReactRouter { ...iconProps } />
        <IconRedux { ...iconProps } />
        <IconCordova { ...iconProps } />
        <IconGit { ...iconProps } />
        <IconSQL { ...iconProps } />
      </div>
      <div className='grid-4 grid-g-4 grid-center mb-4'>
        <IconHTML { ...iconProps } />
        <IconCSS { ...iconProps } />
        <IconLess { ...iconProps } />
        <IconSASS { ...iconProps } />
      </div>
      <div className='grid-4 grid-g-4 grid-center mb-4'>
        <IconFigma { ...iconProps } />
        <IconPhotoshop { ...iconProps } />
        <IconZeplin { ...iconProps } />
      </div>
      <div className='grid-4 grid-g-4 grid-center mb-4'>
        <IconSwagger { ...iconProps } />
        <IconPostman { ...iconProps } />
        <IconEnzyme { ...iconProps } />
        <IconJest { ...iconProps } />
      </div>
      <div className='grid-4 grid-g-4 grid-center mb-4'>
        <IconWebpack { ...iconProps } />
        <IconGulp { ...iconProps } />
        <IconBabel { ...iconProps } />
      </div>
      <div className='grid-4 grid-g-4 grid-center mb-4'>
        <IconStorybook { ...iconProps } />
        <IconStyleguidist { ...iconProps } />
      </div>
      <div className='grid-4 grid-g-4 grid-center mb-4'>
        <IconVSCode { ...iconProps } />
        <IconWebStorm { ...iconProps } />
      </div>
    </div>
  )
}
