import React, { FC, ReactElement } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { ContactType } from '@consts/contacts'

import { Tooltip } from '@components/common/Tooltip'

import { IContactProps as IProps } from './types'

export const Contact: FC<IProps> = ({ contact: { icon, title, url }, target, type }) => {
  const key = uuidv4()

  const renderMainContact = (): ReactElement => (
    <li key={key} className='contacts__item'>
      <a className='contacts__item-link--main' href={url}>
        {icon}
        {title}
      </a>
    </li>
  )

  const renderAdditionalContact = (): ReactElement => (
    <a key={key} className='contacts__item-link--additional tooltip' href={url} target={target}>
      {icon}
      <Tooltip title={title} />
    </a>
  )

  return type === ContactType.MAIN ? renderMainContact() : renderAdditionalContact()
}
