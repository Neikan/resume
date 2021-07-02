import React, { FC } from 'react'

import { ITooltipProps as IProps } from './types'

export const Tooltip: FC<IProps> = ({ title }) => <span className='tooltip__title'>{title}</span>
