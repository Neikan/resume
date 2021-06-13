import cn from 'classnames'
import React, { FC } from 'react'

import { IToggleProps as IProps } from './types'

export const Toggle: FC<IProps> = ({
  classes,
  iconOn,
  iconOff,
  name,
  onChange,
  value
}) => {
  const toggleClasses = cn(
    'toggle',
    value ? 'toggle--on' : 'toggle--off',
    classes
  )

  return (
    <label className={toggleClasses}>
      <input
        checked={value}
        className='visually-hidden'
        id={name}
        name={name}
        onChange={onChange}
        type='checkbox'
      />
      {iconOn && value ? iconOn : null}
      {iconOff && !value ? iconOff : null}
    </label>
  )
}
