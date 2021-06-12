import { ChangeEvent } from 'react'

export interface IToggleProps {
  classes?: string
  name: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  value: boolean
}
