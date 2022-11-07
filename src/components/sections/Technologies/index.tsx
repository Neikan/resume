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
  IconJava,
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
  IconWebpack,
  IconZeplin,
  IconFlutter,
  IconDart
} from '@components/common/icons'

import { IIconProps } from '@components/common/Icon/types'

const iconProps: IIconProps = {
  size: 'x2h'
}

export const Technologies: FC = () => {
  const { t } = useTranslation()

  return (
    <section className='technologies'>
      <h3 className='technologies__title'>{t('common:technologies')}</h3>
      <div className='technologies__block'>
        <IconFlutter {...iconProps} />
        <IconDart {...iconProps} />
        <IconTS {...iconProps} />
        <IconJS {...iconProps} />
        <IconJava {...iconProps} />
        <IconReact {...iconProps} />
        <IconReactRouter {...iconProps} />
        <IconRedux {...iconProps} />
        <IconCordova {...iconProps} />
        <IconGit {...iconProps} />
        <IconSQL {...iconProps} />
        <IconHTML {...iconProps} />
        <IconCSS {...iconProps} />
        <IconLess {...iconProps} />
        <IconSASS {...iconProps} />
        <IconFigma {...iconProps} />
        <IconPhotoshop {...iconProps} />
        <IconZeplin {...iconProps} />
        <IconSwagger {...iconProps} />
        <IconPostman {...iconProps} />
        <IconEnzyme {...iconProps} />
        <IconJest {...iconProps} />
        <IconWebpack {...iconProps} />
        <IconGulp {...iconProps} />
        <IconBabel {...iconProps} />
        <IconStorybook {...iconProps} />
        <IconStyleguidist {...iconProps} />
      </div>
    </section>
  )
}
