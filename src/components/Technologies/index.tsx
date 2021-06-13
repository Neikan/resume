import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

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
  const { t } = useTranslation()

  return (
    <section className='technologies'>
      <h3 className='technologies__title'>{t('common:technologies')}</h3>
      <div className='technologies__block'>
        <IconTS { ...iconProps } />
        <IconJS { ...iconProps } />
        <IconReact { ...iconProps } />
        <IconReactRouter { ...iconProps } />
        <IconRedux { ...iconProps } />
        <IconCordova { ...iconProps } />
        <IconGit { ...iconProps } />
        <IconSQL { ...iconProps } />
        <IconHTML { ...iconProps } />
        <IconCSS { ...iconProps } />
        <IconLess { ...iconProps } />
        <IconSASS { ...iconProps } />
        <IconFigma { ...iconProps } />
        <IconPhotoshop { ...iconProps } />
        <IconZeplin { ...iconProps } />
        <IconSwagger { ...iconProps } />
        <IconPostman { ...iconProps } />
        <IconEnzyme { ...iconProps } />
        <IconJest { ...iconProps } />
        <IconWebpack { ...iconProps } />
        <IconGulp { ...iconProps } />
        <IconBabel { ...iconProps } />
        <IconStorybook { ...iconProps } />
        <IconStyleguidist { ...iconProps } />
        <IconVSCode { ...iconProps } />
        <IconWebStorm { ...iconProps } />
      </div>
    </section>
  )
}
