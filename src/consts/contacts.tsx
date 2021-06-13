import React from 'react'

import {
  IconGitHub,
  IconGitLab,
  IconLinkedIn,
  IconMail,
  IconPhone,
  IconTelegram,
  IconWakatime
} from '@components/icons'

import { IIconProps } from '@components/Icon/types'
import { IContact } from '../components/Contacts/types'

export enum ContactType {
  ADDITIONAL = 'ADDITIONAL',
  MAIN = 'MAIN'
}

const mainContactIconProps: IIconProps = {
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
    icon: <IconWakatime />,
    title: 'Wakatime',
    url: 'https://wakatime.com/@Neikan'
  },
  {
    icon: <IconGitHub />,
    title: 'GitHub',
    url: 'https://github.com/Neikan'
  },
  {
    icon: <IconGitLab />,
    title: 'GitLab',
    url: 'https://gitlab.com/Neikan'
  },
  {
    icon: <IconLinkedIn />,
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/neikan'
  }
]
