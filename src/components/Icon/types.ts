export type IconSize = 'x1' | 'x1.5' | 'x2' | 'x2.5' | 'x3'
export type IconForm = 'round' | 'square'
export type IconType = 'regular' | 'solid'

export interface IIconProps {
  color?: string
  classes?: string
  form?: IconForm
  onClick?: () => void
  size?: IconSize
  title?: string
  type?: IconType
  withoutFill?: boolean
}
