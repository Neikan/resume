import React, { FC, ReactElement } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { ContactType } from '@components/Contacts/consts'

import { IContactProps as IProps } from './types'

export const Contact: FC<IProps> = ({ contact: { icon, title, url }, target, type } : IProps) => {
  const renderMainContact = (): ReactElement => (
    <li className='contacts__contact' key={uuidv4()}>
      <a className='contacts__link--main' href={url}>
        {icon}
        {title}
      </a>
    </li>
  )

  const renderAdditionalContact = (): ReactElement => (
    <a key={uuidv4()} className='contacts__link--additional' href={url} target={target} title={title}>
      {icon}
    </a>
  )

  return type === ContactType.MAIN
    ? renderMainContact()
    : renderAdditionalContact()
}
