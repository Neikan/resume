import { IIconProps } from '@components/Icon/types'

export enum StorageKey {
  LANGUAGE = 'i18nextLng',
  THEME = 'nkTheme'
}

export enum Language {
  EN = 'en',
  RU = 'ru'
}

export enum Theme {
  DARK = 'theme--dark',
  LIGHT = 'theme--light'
}

export enum ToggleType {
  LANGUAGE = 'language',
  THEME = 'theme'
}

export const NS = [
  'about',
  'certificates',
  'common',
  'education',
  'experience',
  'projects'
]

export enum LinkTarget {
  CERTIFICATES = 'blank10',
  CONTACTS = 'blank20',
  PROJECTS = 'blank30',
}

export const commonIconProps: IIconProps = {
  size: 'x1h'
}

export enum CommonTitles {
  BATMAN = 'Batman'
}
