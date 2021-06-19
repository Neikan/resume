import { IIconProps } from '@components/Icon/types'

export const STORAGE_LANGUAGE_KEY = 'i18nextLng'

export const Languages = {
  EN: 'en',
  RU: 'ru'
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
