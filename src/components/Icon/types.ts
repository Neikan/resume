export type TIconSize = 'x1' | 'x1h' | 'x2' | 'x2h' | 'x3'
export type TIconForm = 'round' | 'square'
export type TIconType = 'regular' | 'inverted'

export interface IIconProps {
  color?: string
  classes?: string
  form?: TIconForm
  onClick?: () => void
  size?: TIconSize
  title?: string
  type?: TIconType
  withoutFill?: boolean
}
