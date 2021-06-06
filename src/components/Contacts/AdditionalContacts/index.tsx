import React, { FC, ReactElement } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { LinkTarget } from '@consts'
import { ADDITIONAL_CONTACTS } from '../consts'

import { IContact } from '../types'

const renderAdditionalContact = ({ icon, title, url }: IContact, index: number): ReactElement => {
  const target = `${LinkTarget.CONTACTS}${index}`

  return (
    <a key={uuidv4()} className='contacts__additional-link' href={url} target={target} title={title}>
      {icon}
    </a>
  )
}

export const AdditionalContacts: FC = () => (
  <li className='contacts__additional-element' key={uuidv4()}>
    {ADDITIONAL_CONTACTS.map(renderAdditionalContact)}
  </li>
)
