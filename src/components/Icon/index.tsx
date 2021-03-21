import cn from 'classnames'
import React, { FC } from 'react'

import { IIconProps as IProps } from './types'

import styles from './Icon.module.css'

export const Icon: FC<IProps> = ({
  children,
  color = 'gray-500',
  classes,
  onClick,
  size = 'x1',
  form,
  title,
  type = 'regular',
  withoutFill = false
}) => {
  const sizeClass = styles[`icon_${size}`]
  const formClass = form ? styles[`icon_${form}`] : ''

  const cssColor = `var(--${color})`
  const colorStyle = {
    borderColor: cssColor,
    fill: withoutFill ? undefined : cssColor
  }
  const typeStyle = type === 'solid' && { backgroundColor: cssColor, fill: 'var(--light)' }

  return (
    <span
      className={cn(styles.icon, sizeClass, formClass, 'd-block', classes)}
      onClick={onClick}
      style={{ ...colorStyle, ...typeStyle }}
      title={title}
    >
      {children}
    </span>
  )
}
