import { ChangeEvent, ReactNode } from 'react'

export interface IToggleProps {
  classes?: string
  iconOn?: ReactNode
  iconOff?: ReactNode
  name: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  type?: string
  value: boolean
}
