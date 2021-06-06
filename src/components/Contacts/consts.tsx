import React from 'react'

import { IRCLIconProps } from '@neikan/rc-lib'

import {
  IconGitHub,
  IconGitLab,
  IconLinkedIn,
  IconMail,
  IconPhone,
  IconTelegram,
  IconWakatime
} from '@components/icons'

import { IContact } from './types'

const commonIconProps: IRCLIconProps = {
  size: 'x1h'
}

const mainContactIconProps: IRCLIconProps = {
  ...commonIconProps,
  classes: 'contacts__icon'
}

export const MAIN_CONTACTS: IContact[] = [
  {
    icon: <IconMail { ...mainContactIconProps } />,
    title: 'sladkov.e.m@outlook.com',
    url: 'mailto:sladkov.e.m@outlook.com?subject="Job invitation"'
  },
  {
    icon: <IconPhone { ...mainContactIconProps } />,
    title: '+7 (918) 890-00-75',
    url: 'tel:+79188900075'
  },
  {
    icon: <IconTelegram { ...mainContactIconProps } />,
    title: '@NeikaN_N',
    url: 'tg:https://t.me/NeikaN_N'
  }
]

export const ADDITIONAL_CONTACTS: IContact[] = [
  {
    icon: <IconWakatime { ...commonIconProps } />,
    title: 'Wakatime',
    url: 'https://wakatime.com/@Neikan'
  },
  {
    icon: <IconGitHub { ...commonIconProps } />,
    title: 'GitHub',
    url: 'https://github.com/Neikan'
  },
  {
    icon: <IconGitLab { ...commonIconProps } />,
    title: 'GitLab',
    url: 'https://gitlab.com/Neikan'
  },
  {
    icon: <IconLinkedIn { ...commonIconProps } />,
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/neikan'
  }
]
