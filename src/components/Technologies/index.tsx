import React, { FC } from 'react'

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

import { IIconProps } from '@components/Icon/types'

const iconProps: IIconProps = {
  size: 'x2h'
}

// Добавить джиру, бейскемп, тфс
export const Technologies: FC = () => {
  return (
    <section className='technologies'>
      <h3 className='technologies__title'>Technologies and skills</h3>
      <div className='technologies__block'>
        <IconTS { ...iconProps } />
        <IconJS { ...iconProps } />
        <IconReact { ...iconProps } />
        <IconReactRouter { ...iconProps } />
        <IconRedux { ...iconProps } />
        <IconCordova { ...iconProps } />
        <IconGit { ...iconProps } />
        <IconSQL { ...iconProps } />
      </div>
      <div className='technologies__block'>
        <IconHTML { ...iconProps } />
        <IconCSS { ...iconProps } />
        <IconLess { ...iconProps } />
        <IconSASS { ...iconProps } />
        <IconFigma { ...iconProps } />
        <IconPhotoshop { ...iconProps } />
        <IconZeplin { ...iconProps } />
      </div>
      <div className='technologies__block'>
        <IconSwagger { ...iconProps } />
        <IconPostman { ...iconProps } />
        <IconEnzyme { ...iconProps } />
        <IconJest { ...iconProps } />
      </div>
      <div className='technologies__block'>
        <IconWebpack { ...iconProps } />
        <IconGulp { ...iconProps } />
        <IconBabel { ...iconProps } />
      </div>
      <div className='technologies__block'>
        <IconStorybook { ...iconProps } />
        <IconStyleguidist { ...iconProps } />
      </div>
      <div className='technologies__block'>
        <IconVSCode { ...iconProps } />
        <IconWebStorm { ...iconProps } />
      </div>
    </section>
  )
}
